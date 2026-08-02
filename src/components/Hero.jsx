import React, { useRef, useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

const TOTAL_FRAMES = 120;
const MIN_FRAMES_TO_START = 15;
const PRELOAD_CONCURRENCY = 6;
const MAX_DPR = 2;
const FRAME_BASE_PATH = '/images/hero/frame-';

function buildFrameUrls(index) {
  const padded4 = String(index + 1).padStart(4, '0');
  const padded3 = String(index + 1).padStart(3, '0');
  return [
    `${FRAME_BASE_PATH}${padded4}.jpg`,
    `${FRAME_BASE_PATH}${padded4}.png`,
    `${FRAME_BASE_PATH}${padded3}.png`,
  ];
}

function loadImageWithFallback(urls) {
  return new Promise((resolve) => {
    let attempt = 0;
    const tryNext = () => {
      if (attempt >= urls.length) {
        resolve(null);
        return;
      }
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => resolve(img);
      img.onerror = () => {
        attempt += 1;
        tryNext();
      };
      img.src = urls[attempt];
    };
    tryNext();
  });
}

function drawCinematicFallback(ctx, width, height, frameIndex) {
  ctx.fillStyle = '#0a0908';
  ctx.fillRect(0, 0, width, height);

  const progress = frameIndex / (TOTAL_FRAMES - 1 || 1);
  const goldGlowRadius = Math.min(width, height) * (0.4 + Math.sin(progress * Math.PI) * 0.15);

  const grad = ctx.createRadialGradient(
    width / 2, height / 2, 10,
    width / 2, height / 2, goldGlowRadius
  );
  grad.addColorStop(0, 'rgba(201, 162, 75, 0.18)');
  grad.addColorStop(0.5, 'rgba(61, 22, 22, 0.15)');
  grad.addColorStop(1, 'rgba(10, 9, 8, 0.95)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = 'rgba(224, 185, 92, 0.3)';
  const particleCount = 40;
  for (let i = 0; i < particleCount; i++) {
    const px = (Math.sin(i * 99 + frameIndex * 0.05) * 0.5 + 0.5) * width;
    const py = (Math.cos(i * 33 + frameIndex * 0.03) * 0.5 + 0.5) * height;
    const radius = (Math.sin(i + frameIndex * 0.1) * 0.5 + 0.5) * 2 + 1;
    ctx.beginPath();
    ctx.arc(px, py, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawImageFrame(ctx, img, width, height) {
  const imgWidth = img.naturalWidth;
  const imgHeight = img.naturalHeight;
  const scale = Math.max(width / imgWidth, height / imgHeight);
  const x = (width - imgWidth * scale) / 2;
  const y = (height - imgHeight * scale) / 2;
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
}

function getViewportHeight() {
  return window.visualViewport?.height ?? window.innerHeight;
}

export default function Hero() {
  const containerRef = useRef(null);
  const canvasWrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const imagesRef = useRef(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef(0);
  const lastRenderedFrameRef = useRef(-1);
  const canvasSizeRef = useRef({ width: 0, height: 0 });
  const scrollRafIdRef = useRef(null);
  const resizeRafIdRef = useRef(null);
  const loadedCountRef = useRef(0);
  const loadedFlushScheduledRef = useRef(false);
  const isReadyRef = useRef(false);

  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const scrollProgress = useMotionValue(0);
  const titleOpacity = useTransform(scrollProgress, (p) => Math.max(0, 1 - p * 2.5));
  const midScrollOpacity = useTransform(scrollProgress, (p) =>
    Math.max(0, Math.sin((p - 0.4) * 3.14 * 2.2))
  );

  const progressPercent = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));

  const renderFrame = useCallback((frameIndex) => {
    if (frameIndex === lastRenderedFrameRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let ctx = ctxRef.current;
    if (!ctx) {
      ctx = canvas.getContext('2d', { alpha: false });
      ctxRef.current = ctx;
    }
    if (!ctx) return;

    const { width, height } = canvasSizeRef.current;
    if (!width || !height) return;

    const img = imagesRef.current[frameIndex];
    if (img && img.complete && img.naturalWidth > 0) {
      drawImageFrame(ctx, img, width, height);
    } else {
      drawCinematicFallback(ctx, width, height, frameIndex);
    }
    lastRenderedFrameRef.current = frameIndex;
  }, []);

  useEffect(() => {
    let cancelled = false;

    const flushLoadedCount = () => {
      if (loadedFlushScheduledRef.current) return;
      loadedFlushScheduledRef.current = true;
      requestAnimationFrame(() => {
        loadedFlushScheduledRef.current = false;
        if (!cancelled) setLoadedCount(loadedCountRef.current);
      });
    };

    const loadFrame = async (index) => {
      const img = await loadImageWithFallback(buildFrameUrls(index));
      if (cancelled) return;

      imagesRef.current[index] = img;
      loadedCountRef.current += 1;
      flushLoadedCount();

      if (
        !isReadyRef.current &&
        (loadedCountRef.current >= MIN_FRAMES_TO_START || loadedCountRef.current === TOTAL_FRAMES)
      ) {
        isReadyRef.current = true;
        setIsReady(true);
      }

      if (img && index === currentFrameRef.current) {
        lastRenderedFrameRef.current = -1;
        renderFrame(index);
      }
    };

    const queue = Array.from({ length: TOTAL_FRAMES }, (_, i) => i);
    const worker = async () => {
      while (queue.length && !cancelled) {
        const index = queue.shift();
        await loadFrame(index);
      }
    };

    Promise.all(Array.from({ length: PRELOAD_CONCURRENCY }, worker));

    return () => {
      cancelled = true;
    };
  }, [renderFrame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = canvasWrapperRef.current;
    if (!canvas || !wrapper) return;

    const applySize = () => {
      const rect = wrapper.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const width = Math.round(rect.width * dpr);
      const height = Math.round(rect.height * dpr);

      if (width === canvasSizeRef.current.width && height === canvasSizeRef.current.height) return;

      canvas.width = width;
      canvas.height = height;
      canvasSizeRef.current = { width, height };
      lastRenderedFrameRef.current = -1;
      renderFrame(currentFrameRef.current);
    };

    applySize();

    const observer = new ResizeObserver(() => {
      if (resizeRafIdRef.current) cancelAnimationFrame(resizeRafIdRef.current);
      resizeRafIdRef.current = requestAnimationFrame(applySize);
    });
    observer.observe(wrapper);

    return () => {
      observer.disconnect();
      if (resizeRafIdRef.current) cancelAnimationFrame(resizeRafIdRef.current);
    };
  }, [renderFrame]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = getViewportHeight();
      const totalScrollableHeight = rect.height - viewportHeight;
      if (totalScrollableHeight <= 0) return;

      const scrollPosition = Math.max(0, -rect.top);
      const progress = Math.min(1, Math.max(0, scrollPosition / totalScrollableHeight));

      scrollProgress.set(progress);

      const targetFrame = Math.floor(progress * (TOTAL_FRAMES - 1));
      currentFrameRef.current = targetFrame;

      if (scrollRafIdRef.current) cancelAnimationFrame(scrollRafIdRef.current);
      scrollRafIdRef.current = requestAnimationFrame(() => renderFrame(targetFrame));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.visualViewport?.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.visualViewport?.removeEventListener('resize', handleScroll);
      if (scrollRafIdRef.current) cancelAnimationFrame(scrollRafIdRef.current);
    };
  }, [renderFrame, scrollProgress]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[100vw] h-[400svh] bg-veil-black overflow-x-hidden"
    >
      <AnimatePresence>
        {!isReady && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-veil-black flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="w-12 h-12 mb-6 border-2 border-veil-gold/30 border-t-veil-gold rounded-full animate-spin" />
            <h2 className="font-cinzel text-xl sm:text-2xl text-veil-gold tracking-widest uppercase mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 animate-pulse" />
              Unveiling The Protocol...
            </h2>
            <p className="text-xs text-veil-muted tracking-widest font-sans mb-4 uppercase">
              Loading Cinematic Sequence ({progressPercent}%)
            </p>
            <div className="w-64 max-w-[70vw] h-1.5 bg-veil-stone rounded-full overflow-hidden border border-veil-gold/30">
              <div
                className="h-full bg-gold-gradient transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        ref={canvasWrapperRef}
        className="sticky top-0 left-0 w-full max-w-[100vw] h-[100svh] overflow-hidden flex items-center justify-center z-10"
      >
        <canvas ref={canvasRef} className="w-full h-full object-cover block" />

        <div className="absolute inset-0 bg-radial-vignette pointer-events-none bg-gradient-to-t from-veil-black via-transparent to-veil-black/80" />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-20 pointer-events-none"
          style={{ opacity: titleOpacity }}
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-veil-stone/90 border border-veil-gold/40 text-veil-gold font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 shadow-gold backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-veil-gold animate-ping" />
              A Cinematic Investigation
            </div>

            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-8xl font-black text-veil-text tracking-widest uppercase mb-4 drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              THE VEIL <span className="text-transparent bg-clip-text bg-gold-gradient">PROTOCOL</span>
            </h1>

            <p className="font-sans text-base sm:text-xl md:text-2xl text-veil-muted tracking-wide max-w-2xl font-light mb-8 drop-shadow-md">
              Unveiling the Forbidden History of Humanity
            </p>

            <div className="pointer-events-auto mt-2">
              <CTAButton text="Begin The Investigation" size="lg" />
            </div>
          </div>

          <div className="absolute bottom-10 flex flex-col items-center gap-2 text-veil-gold/80 font-cinzel text-xs tracking-[0.3em] uppercase animate-pulse">
            <span>Scroll to Explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-20 pointer-events-none"
          style={{ opacity: midScrollOpacity }}
        >
          <div className="max-w-3xl mx-auto bg-veil-black/80 backdrop-blur-md p-8 rounded-lg border border-veil-gold/30 shadow-2xl">
            <span className="text-xs font-cinzel text-veil-gold tracking-[0.3em] uppercase block mb-2">
              13 Documented Revelations
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-veil-text tracking-wider uppercase mb-4">
              "What if everything you were taught about human origin is only half the story?"
            </h2>
            <p className="font-sans text-sm sm:text-base text-veil-muted leading-relaxed font-light">
              Scroll deeper into forgotten manuscripts, suppressed canonical texts, and biblical archaeology.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

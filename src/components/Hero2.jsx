import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

// Configurable total frame count as required
const TOTAL_FRAMES = 120;
// Minimum frames needed before rendering sequence
const MIN_FRAMES_TO_START = 15;

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const animFrameIdRef = useRef(null);
  const currentFrameRef = useRef(0);
  
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasImageFrames, setHasImageFrames] = useState(true);

  // Canvas drawing function
  const renderFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Check if we have a valid preloaded image at frameIndex
    const img = imagesRef.current[frameIndex];

    if (img && img.complete && img.naturalWidth > 0) {
      // Draw image with object-fit: cover logic
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const scale = Math.max(width / imgWidth, height / imgHeight);
      const x = (width - imgWidth * scale) / 2;
      const y = (height - imgHeight * scale) / 2;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
    } else {
      // Fallback: draw dark cinematic ambient fog & gold vignette
      drawCinematicFallback(ctx, width, height, frameIndex);
    }
  }, []);

  // Fallback procedural canvas render if image frames are not present or still loading
  const drawCinematicFallback = (ctx, width, height, frameIndex) => {
    ctx.fillStyle = '#0a0908';
    ctx.fillRect(0, 0, width, height);

    // Dynamic gradient pulse based on frame index
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

    // Subtle particles in background
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
  };

  // Preload frames logic
  useEffect(() => {
    let mounted = true;
    let count = 0;
    const loadedImages = new Array(TOTAL_FRAMES);

    const tryLoadImage = (index) => {
      const img = new Image();
      
      // Try padded 4-digit jpg, 4-digit png, 3-digit png
      const padded4 = String(index + 1).padStart(4, '0');
      const padded3 = String(index + 1).padStart(3, '0');
      
      const primaryUrl = `/images/hero/frame-${padded4}.jpg`;
      const secondaryUrl = `/images/hero/frame-${padded4}.png`;
      const tertiaryUrl = `/images/hero/frame-${padded3}.png`;

      img.src = primaryUrl;

      img.onload = () => {
        if (!mounted) return;
        loadedImages[index] = img;
        count++;
        setLoadedCount(count);
        if (count >= MIN_FRAMES_TO_START || count === TOTAL_FRAMES) {
          setIsReady(true);
        }
      };

      img.onerror = () => {
        // Fallback to PNG if JPG fails
        const img2 = new Image();
        img2.src = secondaryUrl;
        img2.onload = () => {
          if (!mounted) return;
          loadedImages[index] = img2;
          count++;
          setLoadedCount(count);
          if (count >= MIN_FRAMES_TO_START || count === TOTAL_FRAMES) {
            setIsReady(true);
          }
        };
        img2.onerror = () => {
          // Try 3-digit png
          const img3 = new Image();
          img3.src = tertiaryUrl;
          img3.onload = () => {
            if (!mounted) return;
            loadedImages[index] = img3;
            count++;
            setLoadedCount(count);
            if (count >= MIN_FRAMES_TO_START || count === TOTAL_FRAMES) {
              setIsReady(true);
            }
          };
          img3.onerror = () => {
            if (!mounted) return;
            // Frame missing completely
            loadedImages[index] = null;
            count++;
            setLoadedCount(count);
            if (index === 0 && count < 5) {
              setHasImageFrames(false);
            }
            if (count >= MIN_FRAMES_TO_START || count === TOTAL_FRAMES) {
              setIsReady(true);
            }
          };
        };
      };
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      tryLoadImage(i);
    }

    imagesRef.current = loadedImages;

    return () => {
      mounted = false;
    };
  }, []);

  // Resize listener for Canvas
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      renderFrame(currentFrameRef.current);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [renderFrame]);

  // Scroll listener using requestAnimationFrame
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;
      if (totalScrollableHeight <= 0) return;

      const scrollPosition = Math.max(0, -rect.top);
      const progress = Math.min(1, Math.max(0, scrollPosition / totalScrollableHeight));

      setScrollProgress(progress);

      const targetFrame = Math.floor(progress * (TOTAL_FRAMES - 1));
      currentFrameRef.current = targetFrame;

      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }

      animFrameIdRef.current = requestAnimationFrame(() => {
        renderFrame(targetFrame);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position update

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [renderFrame]);

  // Opacity calculations for text fade-in/fade-out based on scroll progress
  // Phase 1 (0 to 0.4): Main Hero Title visible, then fades out
  // Phase 2 (0.45 to 0.85): Mid-scroll tagline appears, then fades out
  const titleOpacity = Math.max(0, 1 - scrollProgress * 2.5);
  const midScrollOpacity = Math.max(0, Math.sin((scrollProgress - 0.4) * 3.14 * 2.2));

  const progressPercent = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));

  return (
    <div ref={containerRef} className="relative w-full h-[400vh] bg-veil-black">
      {/* Preloader Overlay until initial frames are ready */}
      {!isReady && (
        <div className="fixed inset-0 z-50 bg-veil-black flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 mb-6 border-2 border-veil-gold/30 border-t-veil-gold rounded-full animate-spin" />
          <h2 className="font-cinzel text-xl sm:text-2xl text-veil-gold tracking-widest uppercase mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 animate-pulse" />
            Unveiling The Protocol...
          </h2>
          <p className="text-xs text-veil-muted tracking-widest font-sans mb-4 uppercase">
            Loading Cinematic Sequence ({progressPercent}%)
          </p>
          <div className="w-64 h-1.5 bg-veil-stone rounded-full overflow-hidden border border-veil-gold/30">
            <div
              className="h-full bg-gold-gradient transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Sticky Canvas Container (100vh) */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center z-10">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover block"
        />

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none bg-gradient-to-t from-veil-black via-transparent to-veil-black/80" />

        {/* HERO TEXT OVERLAY - PHASE 1 (Fades out as user scrolls) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-20 pointer-events-none transition-opacity duration-300"
          style={{ opacity: titleOpacity }}
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Small Gold Kicker */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-veil-stone/90 border border-veil-gold/40 text-veil-gold font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 shadow-gold backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-veil-gold animate-ping" />
              A Cinematic Investigation
            </div>

            {/* Main Title */}
            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-8xl font-black text-veil-text tracking-widest uppercase mb-4 drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              THE VEIL <span className="text-transparent bg-clip-text bg-gold-gradient">PROTOCOL</span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-base sm:text-xl md:text-2xl text-veil-muted tracking-wide max-w-2xl font-light mb-8 drop-shadow-md">
              Unveiling the Forbidden History of Humanity
            </p>

            {/* Hero Quick CTA */}
            <div className="pointer-events-auto mt-2">
              <CTAButton text="Begin The Investigation" size="lg" />
            </div>
          </div>

          {/* Bottom Scroll Indicator */}
          <div className="absolute bottom-10 flex flex-col items-center gap-2 text-veil-gold/80 font-cinzel text-xs tracking-[0.3em] uppercase animate-pulse">
            <span>Scroll to Explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>

        {/* HERO TEXT OVERLAY - PHASE 2 (Appears mid-scroll) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-20 pointer-events-none transition-opacity duration-300"
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
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const CTA_URL = "https://santuzmedia.gumroad.com/l/TheVeilProtocol";

export default function CTAButton({
  text = "Unveil The Protocol Now",
  subtext = "One-time payment • Lifetime access • No subscription",
  size = "md",
  className = "",
  showBadge = true,
  icon: Icon = ArrowRight,
}) {
  const sizeClasses = {
    sm: "px-6 py-3 text-sm tracking-wider",
    md: "px-8 py-4 text-base tracking-widest font-semibold",
    lg: "px-10 py-5 text-lg tracking-widest font-bold",
  };

  return (
    <div className={`inline-flex flex-col items-center gap-2 ${className}`}>
      <a
        href={CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative overflow-hidden rounded-md bg-gold-gradient ${sizeClasses[size]} text-veil-black font-cinzel uppercase shadow-gold hover:shadow-gold-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center flex items-center justify-center gap-3 border border-veil-goldBright/50`}
      >
        {/* Shimmer overlay effect */}
        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer pointer-events-none" />
        
        <span className="relative z-10 font-black tracking-wider flex items-center gap-2">
          {text}
        </span>
        
        {Icon && (
          <Icon className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </a>
      
      {showBadge && subtext && (
        <span className="flex items-center gap-1.5 text-xs text-veil-muted tracking-wide font-sans mt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-veil-gold" />
          {subtext}
        </span>
      )}
    </div>
  );
}

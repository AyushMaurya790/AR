'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HERO_IMAGES = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
  '/hero-4.jpg',
  '/hero-5.jpg',
];

const BENEFITS = [
  { icon: '✓', text: 'Trade License' },
  { icon: '✓', text: '100% Ownership' },
  { icon: '✓', text: 'Affordable Cost' },
  { icon: '✓', text: 'Corporate Tax Benefit' },
  { icon: '✓', text: 'Free Consultation' },
];

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtitle */}
        <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400"></div>
          <h2 className="text-lg sm:text-xl font-medium text-yellow-400 tracking-wide uppercase">
            YOUR TRUSTED PARTNER FOR
          </h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400"></div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-white">
            BUSINESS SETUP
          </span>
          <br />
          <span className="text-yellow-400">IN UAE</span>
        </h1>

        {/* Benefits Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-4xl mx-auto">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-5 py-2.5 flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span className="text-green-400 text-lg font-bold">✅</span>
              <span className="text-white text-sm sm:text-base font-medium whitespace-nowrap">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <Button
            size="lg"
            onClick={onContactClick}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-lg px-16 py-7 rounded-full shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300"
          >
            Get Free Consultation
          </Button>

          {/* Bottom Text */}
          <p className="text-white/90 text-sm sm:text-base flex items-center gap-2">
            <span>🔒</span>
            <span>Free Consultation · 100% Privacy Guaranteed</span>
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <div className="text-white/70 text-3xl">↓</div>
        </div>
      </div>

      {/* Image Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-yellow-400 w-8'
                : 'bg-white/40 w-2 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { BANNER_SLIDES } from "@/lib/data";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? BANNER_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === BANNER_SLIDES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = BANNER_SLIDES[currentIndex];

  return (
    <div className="w-full relative group bg-[#0F172A]">
      <div className="relative w-full overflow-hidden h-[550px] sm:h-[680px] md:h-[780px] lg:h-[calc(100vh-120px)] min-h-[680px] max-h-[920px]">
        {/* Banner Images */}
        <picture className="w-full h-full block relative">
          <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
          <Image
            src={slide.desktopImage}
            alt={slide.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top transition-opacity duration-500 ease-in-out"
          />
        </picture>

        {/* Floating CTA Overlay */}
        <div className="absolute bottom-10 left-8 md:bottom-16 md:left-16 z-20">
          <a
            href={slide.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary shadow-2xl hover:scale-105 transition-transform group/btn px-8 py-3.5 text-base rounded-full inline-flex items-center gap-2.5 font-bold"
          >
            <span className="hidden md:inline">{slide.ctaText}</span>
            <span className="md:hidden">{slide.ctaMobileText}</span>
            <ArrowRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Subtle Chevron Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white transition-all z-20 cursor-pointer hover:scale-110"
          aria-label="Previous Slide"
        >
          <ChevronLeftIcon className="w-9 h-9 md:w-12 md:h-12 drop-shadow-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white transition-all z-20 cursor-pointer hover:scale-110"
          aria-label="Next Slide"
        >
          <ChevronRightIcon className="w-9 h-9 md:w-12 md:h-12 drop-shadow-xl" />
        </button>

        {/* Centered Bottom Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
          {BANNER_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-[#F59E0B]"
                  : "w-2.5 bg-white/70 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

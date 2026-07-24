"use client";

import { useState } from "react";
import { XIcon } from "@/components/icons";
import { RUNNING_TEXT } from "@/lib/data";

export default function RunningTextBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-[#0F172A] text-white h-[76px] md:h-[84px] flex items-center px-4 md:px-8 overflow-hidden border-b border-zinc-800 z-[1050]">
      {/* Decorative Amber Quarters in top corners */}
      <div className="absolute -top-7 -left-7 w-16 h-16 bg-[#F59E0B] rounded-full pointer-events-none z-10" />
      <div className="absolute -top-7 -right-7 w-16 h-16 bg-[#F59E0B] rounded-full pointer-events-none z-10" />

      <div className="container-lg flex items-center justify-between gap-6 relative z-20 w-full">
        {/* Marquee Track */}
        <div className="flex-1 overflow-hidden banner-marquee">
          <div className="marquee">
            <div className="track flex items-center gap-14 text-base md:text-lg lg:text-xl font-bold">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2 whitespace-nowrap">
                  <span>
                    {RUNNING_TEXT.text}
                    <span className="text-[#0D9488] font-extrabold mx-1.5">
                      {RUNNING_TEXT.highlight}
                    </span>
                    {RUNNING_TEXT.suffix}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button & Dismiss */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <a
            href={RUNNING_TEXT.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-base md:text-lg font-bold border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white transition-all bg-transparent text-nowrap shadow-sm"
          >
            {RUNNING_TEXT.ctaText}
          </a>

          <button
            onClick={() => setIsVisible(false)}
            className="text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800 transition-colors flex-shrink-0 cursor-pointer"
            aria-label="Tutup Banner"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

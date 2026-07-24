"use client";

import { useState } from "react";
import Image from "next/image";
import RunningTextBanner from "@/components/RunningTextBanner";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import { ChevronDownIcon, HelpCircleIcon, ArrowDownIcon } from "@/components/icons";
import { FAQ_ITEMS } from "@/lib/data";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-[#CCFBF1] selection:text-[#0D9488]">
      <header className="sticky top-0 z-[1045] w-full bg-white shadow-xs">
        <RunningTextBanner />
        <Navbar />
      </header>

      <main className="flex-1 pb-24 lg:pb-16 space-y-12">
        {/* ============================================================
            1. HERO WHITE BANNER (Signature Site Design System)
           ============================================================ */}
        <div className="relative w-full bg-white overflow-hidden border-b border-gray-100">
          {/* Background Image bleeding to the right */}
          <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0">
            <picture className="w-full h-full block relative">
              <source media="(max-width: 767px)" srcSet="/images/jaribakat-banner-portrait.jpeg" />
              <Image
                src="/images/banner-jaribakat.png"
                alt="JariBakat Banner"
                fill
                className="object-cover object-center lg:object-right"
                priority
              />
            </picture>
            {/* Gradients to fade left and bottom into white */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 lg:via-white/45 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
          </div>

          {/* Content container */}
          <div className="container-lg relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[360px] md:min-h-[460px]">
            {/* Left Text Content */}
            <div className="space-y-6 lg:pr-8 py-12 md:py-20">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF2FF] text-[#1E1B4B] font-extrabold text-xs tracking-wide">
                <HelpCircleIcon className="w-4 h-4 text-[#1E1B4B]" />
                <span>Pusat Bantuan &amp; Pertanyaan</span>
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#0F172A]">
                Pertanyaan Umum (FAQ)
              </h1>
              <p className="text-base md:text-[17px] text-[#64748B] max-w-lg leading-relaxed">
                Temukan jawaban atas pertanyaan yang sering diajukan seputar tes bakat, analisis sidik jari, paket layanan, dan konsultasi JariBakat.
              </p>
              <div className="pt-2">
                <a
                  href="#faq-list"
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3 rounded-full text-sm md:text-base transition-all shadow-md inline-flex items-center gap-2 hover:scale-105"
                >
                  <span>Lihat FAQ</span>
                  <ArrowDownIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right side empty to let background show */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* FAQ Accordions List */}
        <div id="faq-list" className="container-lg my-12 max-w-4xl space-y-4">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A]">
              Informasi Paling Sering Ditanyakan
            </h2>
            <p className="text-sm md:text-base text-[#64748B] max-w-xl mx-auto">
              Klik pertanyaan di bawah ini untuk melihat penjelasan detail.
            </p>
          </div>

          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-[20px] overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-base md:text-lg text-[#0F172A] hover:text-[#1E1B4B] cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#1E1B4B]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-[#64748B] text-sm md:text-base leading-relaxed border-t border-gray-100 mt-2 pt-4 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <FloatingButtons />
      <MobileBottomNav />
      <Footer />
    </div>
  );
}

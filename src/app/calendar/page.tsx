"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RunningTextBanner from "@/components/RunningTextBanner";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import { CalendarIcon, UserIcon, ClockIcon, MapPinIcon, ArrowDownIcon, ArrowRightIcon } from "@/components/icons";
import { EVENT_CATALOG } from "@/lib/data";

const CATEGORY_TABS = [
  { id: "all", label: "Semua Agenda" },
  { id: "offline", label: "Offline Event" },
  { id: "online", label: "Online Event" },
  { id: "expert", label: "Expert Class" },
];

export default function CalendarPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredEvents = EVENT_CATALOG.filter((event) => {
    if (activeTab === "all") return true;
    if (activeTab === "offline") return event.category === "offline";
    if (activeTab === "online") return event.category === "online";
    if (activeTab === "expert") return event.category === "expert";
    return true;
  });

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
                <CalendarIcon className="w-4 h-4 text-[#1E1B4B]" />
                <span>Jadwal Tes &amp; Event JariBakat</span>
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#0F172A]">
                Kalender Jadwal &amp; Paket JariBakat
              </h1>
              <p className="text-base md:text-[17px] text-[#64748B] max-w-lg leading-relaxed">
                Jadwal lengkap tes bakat sidik jari, konsultasi hasil, dan webinar parenting bulan ini.
              </p>
              <div className="pt-2">
                <a
                  href="#calendar-grid"
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3 rounded-full text-sm md:text-base transition-all shadow-md inline-flex items-center gap-2 hover:scale-105"
                >
                  <span>Lihat Agenda</span>
                  <ArrowDownIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right side empty to let background show */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Filter Bar & Agenda Items */}
        <div id="calendar-grid" className="container-lg my-12 max-w-5xl space-y-8">
          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all flex-shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#1E1B4B] text-white shadow-md scale-105"
                    : "bg-white border border-gray-200 text-[#64748B] hover:bg-gray-50 hover:text-[#0F172A]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Schedule List */}
          <div className="space-y-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-100 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-5 md:gap-6 flex-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-[20px] bg-[#EEF2FF] text-[#1E1B4B] flex flex-col items-center justify-center font-extrabold flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1E1B4B]/80">
                      AUG
                    </span>
                    <span className="text-2xl md:text-3xl font-extrabold text-[#1E1B4B]">
                      2026
                    </span>
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-[#EEF2FF] text-[#1E1B4B] font-bold text-xs inline-block">
                        {event.type}
                      </span>
                      {event.badge && (
                        <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white font-bold text-xs inline-block shadow-xs">
                          {event.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-extrabold text-lg md:text-xl text-[#0F172A] group-hover:text-[#1E1B4B] transition-colors leading-snug">
                      {event.title}
                    </h3>

                    <div className="text-xs md:text-sm text-[#64748B] flex flex-wrap items-center gap-4 pt-1 font-medium">
                      <span className="flex items-center gap-1.5 text-[#1E1B4B]">
                        <UserIcon className="w-4 h-4 text-[#1E1B4B]" />
                        <span className="text-[#64748B]">{event.speaker}</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-[#1E1B4B]">
                        <ClockIcon className="w-4 h-4 text-[#1E1B4B]" />
                        <span className="text-[#64748B]">{event.time}</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-[#1E1B4B]">
                        <MapPinIcon className="w-4 h-4 text-[#1E1B4B]" />
                        <span className="text-[#64748B]">{event.location}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 gap-4 flex-shrink-0">
                  <div className="text-left md:text-right">
                    <span className="text-xs text-[#64748B] font-medium block">Harga Paket</span>
                    <span className="font-extrabold text-lg md:text-xl text-[#F59E0B]">
                      {event.price}
                    </span>
                  </div>
                  <Link
                    href={event.href}
                    className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-6 py-2.5 rounded-full text-sm shadow-md hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Detail Agenda</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <FloatingButtons />
      <MobileBottomNav />
      <Footer />
    </div>
  );
}

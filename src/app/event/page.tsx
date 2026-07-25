"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RunningTextBanner from "@/components/RunningTextBanner";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import { SearchIcon, ChevronRightIcon, TicketIcon, CalendarIcon, MapPinIcon, ArrowDownIcon } from "@/components/icons";
import { EVENT_CATALOG } from "@/lib/data";

export default function EventPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredEvents = EVENT_CATALOG.filter((event) => {
    const matchesCategory =
      activeCategory === "all" || event.category === activeCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
                <TicketIcon className="w-4 h-4 text-[#1E1B4B]" />
                <span>Katalog Paket &amp; Program Bakat</span>
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#0F172A]">
                Katalog Layanan &amp; Paket JariBakat
              </h1>
              <p className="text-base md:text-[17px] text-[#64748B] max-w-lg leading-relaxed">
                Pilih paket analisis tes bakat &amp; sidik jari yang dirancang khusus untuk Anak, Remaja &amp; Dewasa, hingga Paket Keluarga.
              </p>
              <div className="pt-2">
                <a
                  href="#event-catalog"
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3 rounded-full text-sm md:text-base transition-all shadow-md inline-flex items-center gap-2 hover:scale-105"
                >
                  <span>Lihat Paket Layanan</span>
                  <ArrowDownIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right side empty to let background show */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Filter & Search Bar Section */}
        <div id="event-catalog" className="container-lg my-8 md:my-12 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-4 md:p-6 rounded-[24px] shadow-sm border border-gray-100">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {[
                { id: "all", label: "Semua Event" },
                { id: "online", label: "Event Online" },
                { id: "offline", label: "Event Offline" },
                { id: "expert", label: "Expert Class" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-full font-bold text-xs md:text-sm text-nowrap transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? "bg-[#1E1B4B] text-white shadow-md scale-105"
                      : "bg-gray-100 text-[#64748B] hover:bg-gray-200 hover:text-[#0F172A]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <SearchIcon className="w-4 h-4 text-[#F59E0B] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama event atau psikolog..."
                className="w-full h-11 pl-11 pr-4 rounded-full border border-[#F59E0B] text-sm text-[#0F172A] placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F59E0B] bg-white"
              />
            </div>
          </div>

          {/* Events Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Event Image */}
                <div>
                  <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      {event.badge ? (
                        <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold shadow-xs">
                          {event.badge}
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold shadow-xs">
                          {event.type}
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-xs text-gray-700 text-xs font-bold shadow-xs">
                        {event.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-5 space-y-4">
                    <h3 className="font-extrabold text-base md:text-lg text-[#0F172A] group-hover:text-[#1E1B4B] transition-colors line-clamp-2 leading-snug">
                      {event.title}
                    </h3>

                    {/* Speaker Info */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center font-bold text-[#1E1B4B] text-xs flex-shrink-0">
                        Ps.
                      </div>
                      <div>
                        <div className="font-bold text-sm text-[#0F172A]">
                          {event.speaker}
                        </div>
                        <div className="text-xs text-[#64748B] font-medium">
                          {event.speakerRole}
                        </div>
                      </div>
                    </div>

                    {/* Date & Location */}
                    <div className="space-y-1.5 text-xs text-[#64748B] pt-3 border-t border-gray-100 font-medium">
                      <div className="flex items-center gap-1.5 text-[#1E1B4B]">
                        <CalendarIcon className="w-4 h-4 text-[#1E1B4B]" />
                        <span className="text-[#64748B]">{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#1E1B4B]">
                        <MapPinIcon className="w-4 h-4 text-[#1E1B4B]" />
                        <span className="text-[#64748B]">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="p-5 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#64748B] font-medium">Mulai Dari</div>
                    <div className="font-extrabold text-lg text-[#F59E0B]">
                      {event.price}
                    </div>
                  </div>

                  <a
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold py-2.5 px-5 text-xs sm:text-sm rounded-full flex items-center gap-1.5 shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>Daftar Event</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </a>
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

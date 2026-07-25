"use client";

import Image from "next/image";
import RunningTextBanner from "@/components/RunningTextBanner";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import CTACommunitySection from "@/components/CTACommunitySection";
import { TicketIcon, CalendarIcon, MapPinIcon, ChevronRightIcon, ArrowDownIcon } from "@/components/icons";
import { EVENT_CATALOG } from "@/lib/data";

export default function MeditationSpacePage() {
  const events = EVENT_CATALOG.filter(
    (e) => e.type.toLowerCase().includes("meditation") || e.category === "offline"
  );

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-[#CCFBF1] selection:text-[#0D9488]">
      <header className="sticky top-0 z-[1045] w-full bg-white shadow-xs">
        <RunningTextBanner />
        <Navbar />
      </header>

      <main className="flex-1 pb-24 lg:pb-16 space-y-12">
        {/* HERO WHITE BANNER */}
        <div className="relative w-full bg-white overflow-hidden border-b border-gray-100">
          <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0">
            <Image
              src="/images/banner-jaribakat.png"
              alt="JariBakat Banner"
              fill
              className="object-cover object-center lg:object-right"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 lg:via-white/45 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
          </div>

          <div className="container-lg relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[360px] md:min-h-[460px]">
            <div className="space-y-6 lg:pr-8 py-12 md:py-20">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF2FF] text-[#1E1B4B] font-extrabold text-xs tracking-wide">
                <TicketIcon className="w-4 h-4 text-[#1E1B4B]" />
                <span>Mindfulness &amp; Self-Healing</span>
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#0F172A]">
                Meditation Space
              </h1>
              <p className="text-base md:text-[17px] text-[#64748B] max-w-lg leading-relaxed">
                Sesi meditasi dan mindfulness online dipandu Psikolog &amp; Praktisi Meditasi untuk membantumu memulihkan kedamaian batin.
              </p>
              <div className="pt-2">
                <a
                  href="#meditation-grid"
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3 rounded-full text-sm md:text-base transition-all shadow-md inline-flex items-center gap-2 hover:scale-105"
                >
                  <span>Ikuti Meditasi</span>
                  <ArrowDownIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Catalog Grid */}
        <div id="meditation-grid" className="container-lg my-12 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A]">
              Sesi Meditasi &amp; Gathering
            </h2>
            <p className="text-sm md:text-base text-[#64748B] max-w-xl mx-auto">
              Temukan ketenangan batin lewat bimbingan meditasi terpandu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="group bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold shadow-xs">
                        Meditation
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    <h3 className="font-extrabold text-base md:text-lg text-[#0F172A] group-hover:text-[#1E1B4B] transition-colors line-clamp-2 leading-snug">
                      {event.title}
                    </h3>
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

                <div className="p-5 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#64748B] font-medium">Mulai Dari</div>
                    <div className="font-extrabold text-lg text-[#F59E0B]">
                      {event.price}
                    </div>
                  </div>
                  <a
                    href="https://wa.me/6285196235285"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold py-2.5 px-5 text-xs sm:text-sm rounded-full flex items-center gap-1.5 shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>Daftar</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CTACommunitySection />
      </main>

      <FloatingButtons />
      <MobileBottomNav />
      <Footer />
    </div>
  );
}

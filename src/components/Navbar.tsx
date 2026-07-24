"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SearchIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  TicketIcon,
  MenuIcon,
  XIcon,
} from "@/components/icons";
import { NAV_TOPICS } from "@/lib/data";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"program" | "topik" | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<"online" | "offline" | "expert">("online");

  const toggleDropdown = (name: "program" | "topik") => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 relative z-[1045]">
      <div className="container-lg flex items-center justify-between py-3.5 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 relative overflow-visible">
          <img
            src="/images/jaribakat-logo-landscape.png"
            alt="JariBakat Logo"
            className="w-auto h-[120px] sm:h-[150px] md:h-[180px] -my-8 sm:-my-10 md:-my-12 max-w-[280px] sm:max-w-[360px] md:max-w-[440px] object-contain flex-shrink-0"
          />
        </Link>

        {/* Desktop Menu Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Program Mega Menu Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("program")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-base transition-colors cursor-pointer ${
                activeDropdown === "program"
                  ? "bg-[#EBEBEB] text-[#0F172A]"
                  : "text-[#0F172A] hover:text-[#1E1B4B]"
              }`}
            >
              <span>Program</span>
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === "program" ? "rotate-180 text-[#1E1B4B]" : "text-gray-500"
                }`}
              />
            </button>
          </div>

          {/* Topik Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("topik")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-semibold text-base transition-colors cursor-pointer ${
                activeDropdown === "topik"
                  ? "bg-[#EBEBEB] text-[#0F172A]"
                  : "text-[#0F172A] hover:text-[#1E1B4B]"
              }`}
            >
              <span>Topik</span>
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === "topik" ? "rotate-180 text-[#1E1B4B]" : "text-gray-500"
                }`}
              />
            </button>
          </div>

          {/* Direct Links */}
          <Link
            href="/community"
            className="text-[#0F172A] font-semibold text-base hover:text-[#1E1B4B] transition-colors"
          >
            Komunitas
          </Link>
          <Link
            href="/calendar"
            className="text-[#0F172A] font-semibold text-base hover:text-[#1E1B4B] transition-colors"
          >
            Kalender
          </Link>
        </div>

        {/* Right Search & Action */}
        <div className="hidden lg:flex items-center gap-4">
          <form action="/event" className="relative flex items-center">
            <SearchIcon className="w-4 h-4 text-[#F59E0B] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="search"
              placeholder="Cari topik atau nama program"
              className="w-[300px] xl:w-[320px] h-[42px] pl-11 pr-4 rounded-full border border-[#F59E0B] text-sm text-[#0F172A] placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F59E0B] transition-all bg-white font-normal"
            />
          </form>

          <Link
            href="/login"
            className="border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white bg-transparent font-bold text-base rounded-full px-7 h-[42px] inline-flex items-center justify-center transition-colors"
          >
            Masuk
          </Link>
        </div>

        {/* Mobile Header Buttons */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            href="/event"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#F59E0B] text-[#F59E0B] text-sm font-medium hover:bg-[#F59E0B] hover:text-white transition-colors"
          >
            <SearchIcon className="w-4 h-4" />
            <span>Cari</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-[#0F172A] hover:text-[#1E1B4B] cursor-pointer"
            aria-label="Toggle navigation"
          >
            <MenuIcon className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* ============================================================
          FULL-WIDTH DESKTOP MEGA MENU DROPDOWN (Matching Image 1!)
         ============================================================ */}

      {/* Program Mega Dropdown */}
      {activeDropdown === "program" && (
        <div
          onMouseLeave={() => setActiveDropdown(null)}
          className="hidden lg:block absolute left-0 right-0 top-full w-full bg-white shadow-2xl border-t border-b border-gray-100 py-6 z-[1050] animate-in fade-in slide-in-from-top-1"
        >
          <div className="container-lg space-y-6">
            {/* 4 Card Columns Grid */}
            <div className="grid grid-cols-4 gap-4">
              {/* Card 1: Online Program */}
              <button
                onClick={() => setActiveSubMenu("online")}
                className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  activeSubMenu === "online"
                    ? "border-[#1E1B4B] bg-[#CCFBF1]/30 shadow-xs"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#CCFBF1] flex items-center justify-center text-[#0D9488] font-bold text-lg">
                    💻
                  </div>
                  <span className="font-bold text-base text-[#0F172A]">
                    Online Program
                  </span>
                </div>
                <ChevronUpIcon
                  className={`w-4 h-4 transition-transform ${
                    activeSubMenu === "online" ? "text-[#1E1B4B]" : "text-gray-400 rotate-180"
                  }`}
                />
              </button>

              {/* Card 2: Offline Program */}
              <button
                onClick={() => setActiveSubMenu("offline")}
                className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  activeSubMenu === "offline"
                    ? "border-[#1E1B4B] bg-[#CCFBF1]/30 shadow-xs"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#CCFBF1] flex items-center justify-center text-[#0D9488] font-bold text-lg">
                    👥
                  </div>
                  <span className="font-bold text-base text-[#0F172A]">
                    Offline Program
                  </span>
                </div>
                <ChevronUpIcon
                  className={`w-4 h-4 transition-transform ${
                    activeSubMenu === "offline" ? "text-[#1E1B4B]" : "text-gray-400 rotate-180"
                  }`}
                />
              </button>

              {/* Card 3: Expert Class */}
              <button
                onClick={() => setActiveSubMenu("expert")}
                className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  activeSubMenu === "expert"
                    ? "border-[#1E1B4B] bg-[#CCFBF1]/30 shadow-xs"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#CCFBF1] flex items-center justify-center text-[#0D9488] font-bold text-lg">
                    💼
                  </div>
                  <span className="font-bold text-base text-[#0F172A]">
                    Expert Class
                  </span>
                </div>
                <ChevronUpIcon
                  className={`w-4 h-4 transition-transform ${
                    activeSubMenu === "expert" ? "text-[#1E1B4B]" : "text-gray-400 rotate-180"
                  }`}
                />
              </button>

              {/* Card 4: Event */}
              <Link
                href="/event"
                onClick={() => setActiveDropdown(null)}
                className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#1E1B4B] hover:bg-[#CCFBF1]/20 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#CCFBF1] flex items-center justify-center text-[#0D9488]">
                    <TicketIcon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-base text-[#0F172A]">
                    Event
                  </span>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-400" />
              </Link>
            </div>

            {/* Expandable Submenu Links for Selected Card */}
            <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100">
              {activeSubMenu === "online" && (
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-bold text-[#1E1B4B] text-sm mb-2">Webinar & Workshop</h5>
                    <ul className="space-y-2 text-sm text-[#0F172A]">
                      <li><Link href="/event?type=webinar-series" className="hover:text-[#1E1B4B]">Webinar Series</Link></li>
                      <li><Link href="/event?type=workshop" className="hover:text-[#1E1B4B]">Workshop Interaktif</Link></li>
                      <li><Link href="/event?type=webinar-interaktif" className="hover:text-[#1E1B4B]">Webinar Interaktif</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1E1B4B] text-sm mb-2">Online Group & Therapy</h5>
                    <ul className="space-y-2 text-sm text-[#0F172A]">
                      <li><Link href="/event?type=art-therapy-space" className="hover:text-[#1E1B4B]">Art Therapy Space</Link></li>
                      <li><Link href="/event?type=meditation-space" className="hover:text-[#1E1B4B]">Meditation Space</Link></li>
                      <li><Link href="/event?type=virtual-support-group" className="hover:text-[#1E1B4B]">Virtual Support Group</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1E1B4B] text-sm mb-2">Belajar Mandiri</h5>
                    <ul className="space-y-2 text-sm text-[#0F172A]">
                      <li><Link href="/video-pembelajaran" className="hover:text-[#1E1B4B]">Video Pembelajaran Psikolog</Link></li>
                      <li><Link href="/event?type=journaling-space" className="hover:text-[#1E1B4B]">Journaling Space</Link></li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSubMenu === "offline" && (
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-bold text-[#1E1B4B] text-sm mb-2">Offline Gathering</h5>
                    <ul className="space-y-2 text-sm text-[#0F172A]">
                      <li><Link href="/event?type=yoga-support-group" className="hover:text-[#1E1B4B]">Yoga & Support Group</Link></li>
                      <li><Link href="/event?type=coffee-talk" className="hover:text-[#1E1B4B]">Coffee Talk</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1E1B4B] text-sm mb-2">Mindfulness Community</h5>
                    <ul className="space-y-2 text-sm text-[#0F172A]">
                      <li><Link href="/event?type=meditation-gathering" className="hover:text-[#1E1B4B]">Meditation Gathering</Link></li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSubMenu === "expert" && (
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-bold text-[#1E1B4B] text-sm mb-2">Pelatihan Profesional</h5>
                    <ul className="space-y-2 text-sm text-[#0F172A]">
                      <li><Link href="/expert" className="hover:text-[#1E1B4B]">Expert Training ACT Series</Link></li>
                      <li><Link href="/expert" className="hover:text-[#1E1B4B]">Psychological First Aid (PFA)</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Topik Full-width Dropdown */}
      {activeDropdown === "topik" && (
        <div
          onMouseLeave={() => setActiveDropdown(null)}
          className="hidden lg:block absolute left-0 right-0 top-full w-full bg-white shadow-2xl border-t border-b border-gray-100 py-6 z-[1050] animate-in fade-in slide-in-from-top-1"
        >
          <div className="container-lg space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <span className="font-bold text-sm text-[#7C7C7C] uppercase tracking-wider">
                Pilih Topik Kesehatan Mental
              </span>
              <Link
                href="/topic"
                onClick={() => setActiveDropdown(null)}
                className="text-[#00706E] font-bold text-sm flex items-center gap-1 hover:underline"
              >
                Lihat Semua Topik
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {NAV_TOPICS.map((topic) => (
                <Link
                  key={topic.slug}
                  href={topic.href}
                  onClick={() => setActiveDropdown(null)}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 hover:border-[#00706E] hover:bg-[#DCF5F0]/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#DCF5F0] p-2 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={topic.icon}
                      alt={topic.name}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-base font-bold text-[#252525]">
                    {topic.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Offcanvas Bottom Slideup Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[1060]">
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 transition-opacity animate-in fade-in"
          />

          <div className="fixed bottom-0 left-0 right-0 max-h-[88vh] bg-white rounded-t-[24px] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300 z-[1070]">
            <div className="flex flex-col items-center pt-3 pb-2 relative border-b border-gray-100 px-6">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-3" />
              <div className="flex items-center gap-3 w-full my-2">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-1/2 py-2.5 rounded-full bg-[#F79526] text-white font-bold text-center text-sm shadow-sm"
                >
                  Login
                </Link>
                <Link
                  href="/daftar"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-1/2 py-2.5 rounded-full border border-[#F79526] text-[#F79526] font-bold text-center text-sm"
                >
                  Daftar
                </Link>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-3 gap-3">
                <Link
                  href="/topic"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 bg-white border border-gray-200 rounded-xl flex flex-col items-center text-center gap-2 hover:border-[#00706E]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#DCF5F0] flex items-center justify-center text-[#00706E] font-bold text-xs">
                    💬
                  </div>
                  <span className="text-xs font-bold text-[#252525]">Topik</span>
                </Link>

                <Link
                  href="/community"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 bg-white border border-gray-200 rounded-xl flex flex-col items-center text-center gap-2 hover:border-[#00706E]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#DCF5F0] flex items-center justify-center text-[#00706E] font-bold text-xs">
                    👥
                  </div>
                  <span className="text-xs font-bold text-[#252525]">Komunitas</span>
                </Link>

                <Link
                  href="/calendar"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 bg-white border border-gray-200 rounded-xl flex flex-col items-center text-center gap-2 hover:border-[#00706E]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#DCF5F0] flex items-center justify-center text-[#00706E] font-bold text-xs">
                    📅
                  </div>
                  <span className="text-xs font-bold text-[#252525]">Kalender</span>
                </Link>
              </div>

              <div className="space-y-4 pt-2">
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-bold text-sm text-[#00706E] mb-3 uppercase tracking-wider">
                    Program
                  </h4>
                  <div className="space-y-2.5 pl-2 text-sm font-medium text-[#252525]">
                    <Link
                      href="/video-pembelajaran"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between hover:text-[#00706E]"
                    >
                      <span>Program Online</span>
                      <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                    </Link>
                    <Link
                      href="/event?type=offline"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between hover:text-[#00706E]"
                    >
                      <span>Program Offline</span>
                      <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                    </Link>
                    <Link
                      href="/expert"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between hover:text-[#00706E]"
                    >
                      <span>Expert Class</span>
                      <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                    </Link>
                  </div>
                </div>

                <div className="pt-1">
                  <h4 className="font-bold text-sm text-[#00706E] mb-3 uppercase tracking-wider">
                    Topik Populer
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm font-medium text-[#252525]">
                    {NAV_TOPICS.map((topic) => (
                      <Link
                        key={topic.slug}
                        href={topic.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                      >
                        <Image
                          src={topic.icon}
                          alt={topic.name}
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain"
                        />
                        <span>{topic.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

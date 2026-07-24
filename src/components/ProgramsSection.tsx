"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRightIcon, ArrowRightIcon } from "@/components/icons";
import {
  ONLINE_PROGRAMS,
  OFFLINE_PROGRAMS,
  EXPERT_PROGRAMS,
} from "@/lib/data";
import type { ProgramItem } from "@/types";

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState<"online" | "offline" | "expert">(
    "online"
  );

  let currentPrograms: ProgramItem[] = [];
  if (activeTab === "online") currentPrograms = ONLINE_PROGRAMS;
  else if (activeTab === "offline") currentPrograms = OFFLINE_PROGRAMS;
  else currentPrograms = EXPERT_PROGRAMS;

  return (
    <div className="w-full py-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#0F172A] mb-3">
          Melalui Paket &amp; Layanan Teruji di JariBakat
        </h2>
        <p className="text-[#64748B] text-sm md:text-base">
          Pilih paket tes bakat sidik jari yang paling sesuai untuk anak dan keluargamu
        </p>
      </div>

      {/* Tab Bar */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 bg-gray-100/80 border border-gray-200 rounded-full gap-1">
          <button
            onClick={() => setActiveTab("online")}
            className={`px-5 py-2.5 rounded-full font-bold text-sm md:text-base transition-all ${
              activeTab === "online"
                ? "bg-[#1E1B4B] text-white shadow-md"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            Program Online
          </button>
          <button
            onClick={() => setActiveTab("offline")}
            className={`px-5 py-2.5 rounded-full font-bold text-sm md:text-base transition-all ${
              activeTab === "offline"
                ? "bg-[#1E1B4B] text-white shadow-md"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            Program Offline
          </button>
          <button
            onClick={() => setActiveTab("expert")}
            className={`px-5 py-2.5 rounded-full font-bold text-sm md:text-base transition-all ${
              activeTab === "expert"
                ? "bg-[#1E1B4B] text-white shadow-md"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            Expert Class
          </button>
        </div>
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {currentPrograms.map((program) => (
          <a
            key={program.slug}
            href={program.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 bg-white border border-[#E9E9E9] rounded-2xl hover:border-[#1E1B4B]/30 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="80px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-[#0F172A] group-hover:text-[#1E1B4B] transition-colors">
                  {program.title}
                </h3>
                <p className="text-xs md:text-sm text-[#64748B] line-clamp-2 leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-[#1E1B4B] group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
          </a>
        ))}
      </div>

      {/* Bottom CTA Banner Card */}
      <div className="w-full bg-[#EEF2FF] border border-[#1E1B4B]/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h4 className="text-xl md:text-2xl font-bold text-[#1E1B4B]">
            Masih bingung program yang cocok denganmu?
          </h4>
          <p className="text-[#0F172A] text-sm md:text-base">
            Konsultasikan secara gratis dengan Admin kami untuk mendapatkan arahan program terbaik.
          </p>
        </div>
        <a
          href="https://wa.me/6281915237935"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary flex-shrink-0 shadow-md group"
        >
          Tanya Admin di Sini
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

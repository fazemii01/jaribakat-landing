import Image from "next/image";
import Link from "next/link";
import RunningTextBanner from "@/components/RunningTextBanner";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import { SparklesIcon, ArrowDownIcon } from "@/components/icons";

export default function ExpertPage() {
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
                <SparklesIcon className="w-4 h-4 text-[#1E1B4B]" />
                <span>Konsultasi Analyst &amp; Sertifikat Resmi</span>
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#0F172A]">
                Consultant &amp; Analyst Class JariBakat
              </h1>
              <p className="text-base md:text-[17px] text-[#64748B] max-w-lg leading-relaxed">
                Sesi konsultasi 1-on-1 mendalam bersama Analyst &amp; Konsultan JariBakat bersertifikat untuk membedah potensi alami, arah jurusan, dan strategi pola asuh.
              </p>
              <div className="pt-2">
                <a
                  href="#expert-class-detail"
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3 rounded-full text-sm md:text-base transition-all shadow-md inline-flex items-center gap-2 hover:scale-105"
                >
                  <span>Pelajari Konsultasi</span>
                  <ArrowDownIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right side empty to let background show */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Expert Class Featured Card */}
        <div id="expert-class-detail" className="container-lg my-12">
          <div className="bg-white border border-gray-100 rounded-[28px] p-6 md:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="bg-[#EEF2FF] text-[#1E1B4B] font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
                Exclusive Consultation
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#0F172A] leading-snug">
                Expert Analysis: Bedah Laporan Potensi &amp; Karir Masa Depan
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed font-medium">
                Pelatihan &amp; konsultasi komprehensif bersama Certified Fingerprint Analyst JariBakat untuk membaca pemetaan potensi, kecerdasan majemuk, dan rekomendasi karir.
              </p>

              {/* Speaker Card */}
              <div className="flex items-center gap-4 p-4 bg-[#EEF2FF] rounded-2xl border border-[#1E1B4B]/15">
                <div className="w-12 h-12 rounded-full bg-[#1E1B4B] text-white flex items-center justify-center font-bold text-base shadow-xs">
                  JB
                </div>
                <div>
                  <div className="font-extrabold text-base text-[#0F172A]">
                    Tim Certified Analyst JariBakat
                  </div>
                  <div className="text-xs text-[#64748B] font-medium">
                    Fingerprint &amp; Talent Specialist JariBakat
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://wa.me/6285196235285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-3.5 rounded-full font-bold text-sm md:text-base shadow-md hover:scale-105 transition-all cursor-pointer"
                >
                  Daftar Expert Class
                </a>
                <Link
                  href="/event"
                  className="border-2 border-[#1E1B4B] text-[#1E1B4B] hover:bg-[#1E1B4B] hover:text-white px-7 py-3.5 rounded-full font-bold text-sm md:text-base transition-all shadow-xs"
                >
                  Lihat Jadwal
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-square rounded-[22px] overflow-hidden bg-gray-100 shadow-md">
              <Image
                src="https://storage.googleapis.com/insightme-production/file/program/thumb/pexOXKC3bOmdomwWp9Kuabk9TmHj2VSY3B0CL92o.png"
                alt="Expert Class ACT"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      <FloatingButtons />
      <MobileBottomNav />
      <Footer />
    </div>
  );
}

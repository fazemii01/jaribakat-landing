"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import RunningTextBanner from "@/components/RunningTextBanner";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import { ChevronRightIcon } from "@/components/icons";
import { NAV_TOPICS } from "@/lib/data";

interface TopicOption {
  slug: string;
  name: string;
  icon: string;
}

const ALL_TOPIC_OPTIONS: TopicOption[] = [
  {
    slug: "semua",
    name: "Semua",
    icon: "semua",
  },
  {
    slug: "anxiety",
    name: "Anxiety",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/xOvPj8ho04rwvu6Hf8J63I5r9FwqsvvCzyTpAWCt.svg",
  },
  {
    slug: "depresi",
    name: "Depresi",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/ewux9RyU0p4TsmqtgdWb3c8LTmV3RlC6Xp2zkGjC.svg",
  },
  {
    slug: "emotion",
    name: "Emotion",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/pQXUDZ9HqhyMNs7x624wXzo8Mt5UnpBOaMvkrcBW.png",
  },
  {
    slug: "family-issues",
    name: "Family Issues",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/rUUkqgr95xUTWI0YboiD7CLUp1ySFbmUpKQh8ZzO.png",
  },
  {
    slug: "marriage",
    name: "Marriage",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/Jm99KTjTRsbt5Ag3apbddYiYcyfrG9IcDKQYaAJs.png",
  },
  {
    slug: "parenting",
    name: "Parenting",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/NbCyx5ew3YvMCpcFP6cGpExelzP6TkqAJE2LV0XN.svg",
  },
  {
    slug: "pre-marriage",
    name: "Pre-Marriage",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/VQKY6bup53H715cckhGMRmaPRZge5YWmx9mfega3.png",
  },
  {
    slug: "productivity",
    name: "Productivity",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/xP9agFyrFfL1tsJ3CPhHJkfYLV1eceSpMCJJ7s2B.svg",
  },
  {
    slug: "relationship",
    name: "Relationship",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/RpGINdkQxCiqWoTUOaDEI5Sa49tKKLc9chcECyTP.svg",
  },
  {
    slug: "trauma",
    name: "Trauma",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/eTzbzFvPSQDMg3LORp3slxz8HV4cI6mo98VhPVYs.svg",
  },
];

function TopicContent() {
  const searchParams = useSearchParams();
  const topicParam = searchParams.get("topic") || "semua";
  const [activeTopic, setActiveTopic] = useState<string>(topicParam);

  useEffect(() => {
    if (topicParam) {
      setActiveTopic(topicParam.toLowerCase());
    }
  }, [topicParam]);

  const activeTopicObj =
    ALL_TOPIC_OPTIONS.find((t) => t.slug === activeTopic) || ALL_TOPIC_OPTIONS[0];

  return (
    <main className="flex-1 pb-24 lg:pb-16 space-y-12">
      {/* ============================================================
          1. HERO WHITE BANNER ("Pilih topik sesuai...") - ALWAYS SHOW
         ============================================================ */}
      <div className="relative w-full bg-white overflow-hidden">
        {/* Background Image bleeding to the right */}
        <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0">
          <Image 
            src="https://storage.googleapis.com/insightme-production/file/program/thumb/mhz5McXb5A0QNLTFTGSVuMiYg7XU7Cc8fcaMEI9F.png" 
            alt="Pilih Topik"
            fill
            className="object-cover object-center lg:object-right"
            priority
          />
          {/* Gradients to fade left and bottom into white */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 lg:via-white/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
        </div>

        {/* Content container */}
        <div className="container-lg relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[350px] md:min-h-[450px]">
          {/* Left Text Content */}
          <div className="space-y-6 lg:pr-8 py-12 md:py-20">
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-[#252525]">
              Pilih topik sesuai yang kamu alami saat ini
            </h1>
            <p className="text-base md:text-[17px] text-[#7C7C7C] max-w-lg leading-relaxed">
              InsightMe percaya perjalanan pulihmu tidak ada yang sia-sia. Bertahan sedikit lagi untuk tetap berproses ya!
            </p>
            <div className="pt-2">
              <a
                href="#topics-selector"
                className="bg-[#F79526] hover:bg-[#D87D1F] text-white font-bold px-8 py-3 rounded-full text-sm md:text-base transition-colors shadow-md inline-flex items-center gap-2"
              >
                <span>Mulai</span>
                <ChevronRightIcon className="w-4 h-4 rotate-90" />
              </a>
            </div>
          </div>
          
          {/* Right side empty to let background show */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* ============================================================
          2. TOPIC CAROUSEL SELECTOR BAR 
         ============================================================ */}
      <div id="topics-selector" className="w-full bg-white py-8 border-b border-gray-100">
        <div className="container-lg overflow-x-auto scrollbar-none py-2">
          <div className="flex items-center gap-4 md:gap-6 min-w-max pb-2 px-1">
            {ALL_TOPIC_OPTIONS.map((topic) => {
              const isActive = activeTopic === topic.slug;
              return (
                <Link
                  key={topic.slug}
                  href={`/topic?topic=${topic.slug}`}
                  onClick={() => setActiveTopic(topic.slug)}
                  className={`flex flex-col items-center justify-center w-[140px] md:w-[154px] h-[145px] md:h-[160px] rounded-3xl border-2 transition-all cursor-pointer flex-shrink-0 p-4 ${
                    isActive
                      ? "bg-[#CCFBF1] border-[#0D9488] shadow-md font-bold text-[#0D9488]"
                      : "bg-white border-gray-200 hover:border-[#0D9488]/40 text-[#0F172A] font-semibold"
                  }`}
                >
                  <div
                    className={`w-16 h-16 md:w-18 md:h-18 rounded-2xl flex items-center justify-center mb-3 transition-colors p-3 ${
                      isActive ? "bg-white shadow-xs" : "bg-[#CCFBF1]"
                    }`}
                  >
                    {topic.slug === "semua" ? (
                      <svg width="38" height="38" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="5" width="20" height="24" rx="3" fill="#F59E0B" />
                        <rect x="8" y="7" width="16" height="20" rx="2" fill="#FFFFFF" />
                        <path d="M11 3C11 2.44772 11.4477 2 12 2H20C20.5523 2 21 2.44772 21 3V5C21 5.55228 20.5523 6 20 6H12C11.4477 6 11 5.55228 11 5V3Z" fill="#D97706" />
                        <circle cx="16" cy="4" r="1" fill="#FFFFFF" />
                        <rect x="11" y="11" width="10" height="2" rx="1" fill="#F59E0B" />
                        <rect x="11" y="15" width="10" height="2" rx="1" fill="#F59E0B" />
                        <rect x="11" y="19" width="7" height="2" rx="1" fill="#1E1B4B" />
                        <path d="M9.5 12L10 12.5L11 11" stroke="#1E1B4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <Image
                        src={topic.icon}
                        alt={topic.name}
                        width={44}
                        height={44}
                        className="w-10 h-10 md:w-11 md:h-11 object-contain"
                        unoptimized
                      />
                    )}
                  </div>
                  <span className="text-sm md:text-base text-center font-bold truncate max-w-full px-1">
                    {topic.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================================
          3. GREEN BANNER ("Perjalanan yang perlu kita tempuh...") - BALANCED GRADIENT & BLOB
         ============================================================ */}
      {/* ============================================================
          3. GREEN BANNER ("Perjalanan yang perlu kita tempuh...") - BALANCED GRADIENT & BLOB
         ============================================================ */}
      <div className="w-full bg-gradient-to-r from-[#0F172A] via-[#17153B] to-[#1E1B4B] py-10 md:py-16 text-white shadow-inner relative overflow-hidden">
        <div className="container-lg grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Organic Blob Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-84 md:h-84 flex items-center justify-center">
              <div className="w-full h-full bg-[#0D9488] rounded-[42%_58%_70%_30%/45%_50%_60%_55%] flex items-center justify-center p-5 shadow-xl relative overflow-hidden border border-white/10 group transition-transform duration-300 hover:scale-105">
                {activeTopicObj.slug === "semua" ? (
                  <img
                    src="https://storage.googleapis.com/insightme-production/file/program/thumb/mhz5McXb5A0QNLTFTGSVuMiYg7XU7Cc8fcaMEI9F.png"
                    alt="Perjalanan Pulih"
                    className="w-full h-full object-cover rounded-[35%_65%_60%_40%/50%_45%_55%_50%] scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-3">
                    <img
                      src={activeTopicObj.icon}
                      alt={activeTopicObj.name}
                      className="w-full h-full object-contain mix-blend-multiply drop-shadow-md"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold leading-tight text-white tracking-tight">
              Perjalanan yang perlu kita tempuh untuk pulih
            </h2>

            <ul className="space-y-3 text-sm md:text-base text-white/95 font-medium">
              <li className="flex items-start gap-2.5">
                <ChevronRightIcon className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span>Memahami apa yang terjadi pada diri</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ChevronRightIcon className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span>Berdamai dengan isu dalam diri dengan berbagi</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ChevronRightIcon className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span>Berlatih melalui teknik-teknik terapi secara berkala</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ChevronRightIcon className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span>Berproses dalam aktivitas psikoterapi</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ChevronRightIcon className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span>Lakukan aktivitas menyenangkan</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#resources-grid"
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-7 py-3 rounded-full text-base transition-all shadow-md inline-block hover:scale-105 active:scale-95"
              >
                Pilih Topik
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          4. VIDEO PEMBELAJARAN SECTION
         ============================================================ */}
      <div id="resources-grid" className="container-lg space-y-6">
        <div className="bg-[#1E1B4B] rounded-[24px] p-7 md:p-9 text-white flex items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-6 md:gap-7">
            <div className="w-24 h-24 md:w-[100px] md:h-[100px] rounded-[22px] bg-[#CCFBF1] flex items-center justify-center p-3.5 flex-shrink-0 shadow-xs">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 md:w-16 md:h-16">
                {/* Monitor Outer Frame */}
                <rect x="6" y="8" width="52" height="38" rx="6" fill="#1E1B4B" />
                <rect x="9" y="11" width="46" height="32" rx="4" fill="#CCFBF1" />
                {/* Video Screen with Play Button */}
                <rect x="12" y="14" width="22" height="26" rx="3" fill="#F59E0B" />
                <polygon points="20,22 28,27 20,32" fill="#FFFFFF" />
                {/* Presenter Avatar */}
                <circle cx="43" cy="21" r="5.5" fill="#FEF3C7" />
                <path d="M43 15.5C40.5 15.5 38.5 17 38.5 19V20.5H47.5V19C47.5 17 45.5 15.5 43 15.5Z" fill="#D97706" />
                <path d="M35 38C35 31 38.5 27.5 43 27.5C47.5 27.5 51 31 51 38H35Z" fill="#1E1B4B" />
                {/* Base bar */}
                <rect x="12" y="41" width="46" height="2" fill="#C2ECE4" />
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl md:text-[32px] font-extrabold text-white tracking-tight">
                Video Pembelajaran
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-3xl leading-relaxed font-medium">
                Video pembelajaran dan recording webinar dengan berbagai topik untuk membantu kita memahami diri lebih baik. *Akses selamanya
              </p>
            </div>
          </div>
          <Link
            href="/video-pembelajaran"
            className="hidden md:inline-flex items-center gap-2 font-bold text-base md:text-[17px] text-white hover:underline flex-shrink-0 transition-all"
          >
            <span>Lihat Semua</span>
            <ChevronRightIcon className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/insightme-production/file/okrMS3jj0AIoBiRah4pQCGF2f3FCb21Biuh9V80z.webp"
                  alt="Mengenal dan Menghadapi Pemicu Emosi"
                  fill
                  sizes="320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 md:p-5 space-y-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488] text-xs font-bold inline-block">
                  Emotion
                </span>
                <h3 className="font-bold text-base md:text-[17px] text-[#0F172A] line-clamp-2 leading-snug">
                  Mengenal dan Menghadapi Pemicu Emosi
                </h3>

                <div className="space-y-1.5 text-xs md:text-[13px] text-[#64748B]">
                  <div className="flex items-center gap-1.5 text-[#0D9488] font-medium">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-[#64748B]">137 Dilihat</span>
                  </div>

                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="flex items-center gap-1 text-[#0D9488]">
                      <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-[#64748B]">4 Materi</span>
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1 text-[#0D9488]">
                      <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[#64748B]">1h 06m</span>
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-2.5 flex items-center gap-1 text-[#F59E0B] text-xs">
                  <span className="text-[#F59E0B] text-sm">☆☆☆☆☆</span>
                  <span className="font-bold text-[#64748B]">(0)</span>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400 line-through">Rp75.000</div>
                <div className="font-bold text-lg md:text-xl text-[#F59E0B]">Rp70.000</div>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-105 transition-all cursor-pointer">
                <span>+</span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/insightme-production/file/YjXcmgeygsSWntuBCrwQwvUdtntPE7mCNz2tJbQt.webp"
                  alt="Memahami Trauma Terselubung Dibalik Hubungan Penuh Drama"
                  fill
                  sizes="320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 md:p-5 space-y-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488] text-xs font-bold inline-block">
                  Trauma
                </span>
                <h3 className="font-bold text-base md:text-[17px] text-[#0F172A] line-clamp-2 leading-snug">
                  Memahami Trauma Terselubung Dibalik Hubungan Penuh Drama
                </h3>

                <div className="space-y-1.5 text-xs md:text-[13px] text-[#64748B]">
                  <div className="flex items-center gap-1.5 text-[#0D9488] font-medium">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-[#64748B]">191 Dilihat</span>
                  </div>

                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="flex items-center gap-1 text-[#0D9488]">
                      <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-[#64748B]">4 Materi</span>
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1 text-[#0D9488]">
                      <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[#64748B]">1h 06m</span>
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-2.5 flex items-center gap-1 text-[#F59E0B] text-xs">
                  <span className="text-[#F59E0B] text-sm">☆☆☆☆☆</span>
                  <span className="font-bold text-[#64748B]">(0)</span>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400 line-through">Rp75.000</div>
                <div className="font-bold text-lg md:text-xl text-[#F59E0B]">Rp70.000</div>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-105 transition-all cursor-pointer">
                <span>+</span>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/insightme-production/file/GNeupzHqlN86VFOZtwNbEISHlCOX651asHJUmR96.webp"
                  alt="Memulihkan Trauma dari Hubungan dengan Narsistik"
                  fill
                  sizes="320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 md:p-5 space-y-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488] text-xs font-bold inline-block">
                  Trauma
                </span>
                <h3 className="font-bold text-base md:text-[17px] text-[#0F172A] line-clamp-2 leading-snug">
                  Memulihkan Trauma dari Hubungan dengan Narsistik
                </h3>

                <div className="space-y-1.5 text-xs md:text-[13px] text-[#64748B]">
                  <div className="flex items-center gap-1.5 text-[#0D9488] font-medium">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-[#64748B]">656 Dilihat</span>
                  </div>

                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="flex items-center gap-1 text-[#0D9488]">
                      <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-[#64748B]">6 Materi</span>
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1 text-[#0D9488]">
                      <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[#64748B]">1h 40m</span>
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-2.5 flex items-center gap-1 text-[#F59E0B] text-xs">
                  <span className="text-[#F59E0B] text-sm">☆☆☆☆☆</span>
                  <span className="font-bold text-[#64748B]">(0)</span>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400 line-through">Rp75.000</div>
                <div className="font-bold text-lg md:text-xl text-[#F59E0B]">Rp70.000</div>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-105 transition-all cursor-pointer">
                <span>+</span>
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/insightme-production/file/NumahEn0bEG9yzK4535te0QH6SuTyon5Q47cOn4m.webp"
                  alt="Saatnya Bangkit Dari Depresi"
                  fill
                  sizes="320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 md:p-5 space-y-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488] text-xs font-bold inline-block">
                  Depresi
                </span>
                <h3 className="font-bold text-base md:text-[17px] text-[#0F172A] line-clamp-2 leading-snug">
                  Saatnya Bangkit Dari Depresi
                </h3>

                <div className="space-y-1.5 text-xs md:text-[13px] text-[#64748B]">
                  <div className="flex items-center gap-1.5 text-[#0D9488] font-medium">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-[#64748B]">17,616 Dilihat</span>
                  </div>

                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="flex items-center gap-1 text-[#0D9488]">
                      <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-[#64748B]">16 Materi</span>
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1 text-[#0D9488]">
                      <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[#64748B]">1h 12m</span>
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-2.5 flex items-center gap-1 text-[#F59E0B] text-xs">
                  <span className="text-[#F59E0B] text-sm">★★★★★</span>
                  <span className="font-bold text-[#64748B]">(5)</span>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400 line-through">Rp125.000</div>
                <div className="font-bold text-lg md:text-xl text-[#F59E0B]">Rp59.000</div>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-105 transition-all cursor-pointer">
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          5. OFFLINE EVENT SECTION
         ============================================================ */}
      <div className="container-lg space-y-6 pt-4">
        <div className="bg-[#F59E0B] rounded-[24px] p-7 md:p-9 text-white flex items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-6 md:gap-7">
            <div className="w-24 h-24 md:w-[100px] md:h-[100px] rounded-[22px] bg-[#CCFBF1] flex items-center justify-center p-3.5 flex-shrink-0 shadow-xs">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 md:w-16 md:h-16">
                {/* Speech Bubble */}
                <rect x="22" y="6" width="20" height="14" rx="4" fill="#F59E0B" />
                <polygon points="26,20 32,20 24,25" fill="#F59E0B" />
                {/* Left Person & Chair */}
                <rect x="8" y="28" width="16" height="24" rx="4" fill="#1E1B4B" />
                <circle cx="16" cy="24" r="5" fill="#F3D6AA" />
                <path d="M12 36C12 30 14 27 16 27C18 27 20 30 20 36H12Z" fill="#F59E0B" />
                {/* Right Person & Chair */}
                <rect x="40" y="28" width="16" height="24" rx="4" fill="#1E1B4B" />
                <circle cx="48" cy="24" r="5" fill="#F3D6AA" />
                <path d="M44 36C44 30 46 27 48 27C50 27 52 30 52 36H44Z" fill="#1E1B4B" />
                {/* Floor line */}
                <rect x="6" y="52" width="52" height="2" rx="1" fill="#1E1B4B" />
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl md:text-[32px] font-extrabold text-white tracking-tight">
                Offline Event
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-3xl leading-relaxed font-medium">
                Program tatap muka yang hadir di berbagai kota untuk saling menyapa dan berbagi cerita perjuangan pulih bersama.
              </p>
            </div>
          </div>
          <Link
            href="/event?type=offline"
            className="hidden md:inline-flex items-center gap-2 font-bold text-base md:text-[17px] text-white hover:underline flex-shrink-0 transition-all"
          >
            <span>Lihat Semua</span>
            <ChevronRightIcon className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/insightme-production/file/K1RZPgpXiRYRa1xCgHZaNFrbNyOxDKQTTl8V9Seb.webp"
                  alt="Letting Go of What You Were Never Meant to Carry"
                  fill
                  sizes="320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold shadow-xs">
                    Offline
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold flex items-center gap-1 shadow-xs">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Sisa: 1 Seats</span>
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488] text-xs font-bold inline-block">
                  Yoga &amp; Support Group
                </span>
                <h3 className="font-bold text-base md:text-[17px] text-[#0F172A] line-clamp-2 leading-snug">
                  Letting Go of What You Were Never Meant to Carry
                </h3>

                <div className="space-y-1.5 text-xs md:text-[13px] text-[#64748B] pt-1">
                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[#64748B]">Semarang</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[#64748B]">01 August 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-[#64748B] font-medium">Mulai Dari</div>
                <div className="font-extrabold text-lg md:text-xl text-[#F59E0B]">Rp145,000</div>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-105 transition-all cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/insightme-production/file/YjXcmgeygsSWntuBCrwQwvUdtntPE7mCNz2tJbQt.webp"
                  alt="Coffee Mechanism: Cerita Tentang Cara Berdamai..."
                  fill
                  sizes="320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold shadow-xs">
                    Offline
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold flex items-center gap-1 shadow-xs">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Sisa: 2 Seats</span>
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488] text-xs font-bold inline-block">
                  Coffee Talks
                </span>
                <h3 className="font-bold text-base md:text-[17px] text-[#0F172A] line-clamp-2 leading-snug">
                  Coffee Mechanism: Cerita Tentang Cara Berdamai...
                </h3>

                <div className="space-y-1.5 text-xs md:text-[13px] text-[#64748B] pt-1">
                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[#64748B]">Solo</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[#64748B]">02 August 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-[#64748B] font-medium">Mulai Dari</div>
                <div className="font-extrabold text-lg md:text-xl text-[#F59E0B]">Rp125,000</div>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-105 transition-all cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/insightme-production/file/GNeupzHqlN86VFOZtwNbEISHlCOX651asHJUmR96.webp"
                  alt="Meditation Gathering Yogyakarta: Sehari Berdamai..."
                  fill
                  sizes="320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold shadow-xs">
                    Offline
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold flex items-center gap-1 shadow-xs">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Sisa: 5 Seats</span>
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488] text-xs font-bold inline-block">
                  Meditation Gathering
                </span>
                <h3 className="font-bold text-base md:text-[17px] text-[#0F172A] line-clamp-2 leading-snug">
                  Meditation Gathering Yogyakarta: Sehari Berdamai...
                </h3>

                <div className="space-y-1.5 text-xs md:text-[13px] text-[#64748B] pt-1">
                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[#64748B]">Yogyakarta</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[#64748B]">08 August 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-[#64748B] font-medium">Mulai Dari</div>
                <div className="font-extrabold text-lg md:text-xl text-[#F59E0B]">Rp145,000</div>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-105 transition-all cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/insightme-production/file/NumahEn0bEG9yzK4535te0QH6SuTyon5Q47cOn4m.webp"
                  alt="Healing Circle for Hyper-Independent Woman Batch 2"
                  fill
                  sizes="320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold shadow-xs">
                    Offline
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold flex items-center gap-1 shadow-xs">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Sisa: 6 Seats</span>
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488] text-xs font-bold inline-block">
                  Tea Talks
                </span>
                <h3 className="font-bold text-base md:text-[17px] text-[#0F172A] line-clamp-2 leading-snug">
                  Healing Circle for Hyper-Independent Woman Batch 2
                </h3>

                <div className="space-y-1.5 text-xs md:text-[13px] text-[#64748B] pt-1">
                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[#64748B]">Jakarta Selatan</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[#64748B]">22 August 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-[#64748B] font-medium">Mulai Dari</div>
                <div className="font-extrabold text-lg md:text-xl text-[#F59E0B]">Rp125,000</div>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-105 transition-all cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          6. ONLINE EVENT SECTION
         ============================================================ */}
      <div className="container-lg space-y-6 pt-4">
        <div className="bg-[#1E1B4B] rounded-[24px] p-7 md:p-9 text-white flex items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-6 md:gap-7">
            <div className="w-24 h-24 md:w-[100px] md:h-[100px] rounded-[22px] bg-[#CCFBF1] flex items-center justify-center p-3.5 flex-shrink-0 shadow-xs">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 md:w-16 md:h-16">
                <rect x="8" y="10" width="48" height="34" rx="5" fill="#1E1B4B" />
                <rect x="11" y="13" width="42" height="28" rx="3" fill="#CCFBF1" />
                {/* Grid Video Call Tiles */}
                <rect x="14" y="16" width="17" height="10" rx="2" fill="#F59E0B" />
                <rect x="33" y="16" width="17" height="10" rx="2" fill="#0D9488" />
                <rect x="14" y="28" width="17" height="10" rx="2" fill="#0D9488" />
                <rect x="33" y="28" width="17" height="10" rx="2" fill="#F59E0B" />
                {/* Laptop Base */}
                <path d="M4 48C4 45.8 5.8 44 8 44H56C58.2 44 60 45.8 60 48V50H4V48Z" fill="#17153B" />
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl md:text-[32px] font-extrabold text-white tracking-tight">
                Online Event
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-3xl leading-relaxed font-medium">
                Program daring yang hadir sebagai ruang aman dan nyaman untuk berproses dan berdamai di manapun kamu berada.
              </p>
            </div>
          </div>
          <Link
            href="/event?type=online"
            className="hidden md:inline-flex items-center gap-2 font-bold text-base md:text-[17px] text-white hover:underline flex-shrink-0 transition-all"
          >
            <span>Lihat Semua</span>
            <ChevronRightIcon className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/insightme-production/file/program/thumb/mhz5McXb5A0QNLTFTGSVuMiYg7XU7Cc8fcaMEI9F.png"
                  alt="Webinar Series by InsightMe"
                  fill
                  sizes="320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold shadow-xs">
                    Online
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-xs text-gray-700 text-xs font-bold shadow-xs">
                    Telah Berlalu
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488] text-xs font-bold inline-block">
                  Webinar Series
                </span>
                <h3 className="font-bold text-base md:text-[17px] text-[#0F172A] line-clamp-2 leading-snug">
                  Webinar Series by InsightMe: Panduan Hadapi Berbagai...
                </h3>

                <div className="space-y-1.5 text-xs md:text-[13px] text-[#64748B] pt-1">
                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[#64748B]">Zoom Meeting</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[#64748B]">25 November - 02 December 2023</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-[#64748B] font-medium">Mulai Dari</div>
                <div className="font-extrabold text-lg md:text-xl text-[#F59E0B]">Rp40,000</div>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-105 transition-all cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/insightme-production/file/program/thumb/mhz5McXb5A0QNLTFTGSVuMiYg7XU7Cc8fcaMEI9F.png"
                  alt="Webinar Series: Dealing with Unresolved Trauma"
                  fill
                  sizes="320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold shadow-xs">
                    Online
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-xs text-gray-700 text-xs font-bold shadow-xs">
                    Telah Berlalu
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488] text-xs font-bold inline-block">
                  Webinar Series
                </span>
                <h3 className="font-bold text-base md:text-[17px] text-[#0F172A] line-clamp-2 leading-snug">
                  Webinar Series: Dealing with Unresolved Trauma
                </h3>

                <div className="space-y-1.5 text-xs md:text-[13px] text-[#64748B] pt-1">
                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[#64748B]">Zoom Meeting</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[#64748B]">20 - 22 December 2023</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-[#64748B] font-medium">Mulai Dari</div>
                <div className="font-extrabold text-lg md:text-xl text-[#F59E0B]">Rp40,000</div>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-105 transition-all cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/insightme-production/file/program/thumb/mhz5McXb5A0QNLTFTGSVuMiYg7XU7Cc8fcaMEI9F.png"
                  alt="Webinar Series: Pulihkan Luka Sebelum Membuka Lembar..."
                  fill
                  sizes="320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold shadow-xs">
                    Online
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-xs text-gray-700 text-xs font-bold shadow-xs">
                    Telah Berlalu
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488] text-xs font-bold inline-block">
                  Webinar Series
                </span>
                <h3 className="font-bold text-base md:text-[17px] text-[#0F172A] line-clamp-2 leading-snug">
                  Webinar Series: Pulihkan Luka Sebelum Membuka Lembar...
                </h3>

                <div className="space-y-1.5 text-xs md:text-[13px] text-[#64748B] pt-1">
                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[#64748B]">Zoom Meeting</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[#64748B]">31 January - 07 February 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-[#64748B] font-medium">Mulai Dari</div>
                <div className="font-extrabold text-lg md:text-xl text-[#F59E0B]">Rp50,000</div>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-105 transition-all cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/insightme-production/file/program/thumb/mhz5McXb5A0QNLTFTGSVuMiYg7XU7Cc8fcaMEI9F.png"
                  alt="Workshop Series: Memahami dan Memulihkan Luka dalam..."
                  fill
                  sizes="320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold shadow-xs">
                    Online
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-xs text-gray-700 text-xs font-bold shadow-xs">
                    Telah Berlalu
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488] text-xs font-bold inline-block">
                  Webinar Series
                </span>
                <h3 className="font-bold text-base md:text-[17px] text-[#0F172A] line-clamp-2 leading-snug">
                  Workshop Series: Memahami dan Memulihkan Luka dalam...
                </h3>

                <div className="space-y-1.5 text-xs md:text-[13px] text-[#64748B] pt-1">
                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[#64748B]">Zoom Meeting</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#0D9488]">
                    <svg className="w-4 h-4 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[#64748B]">01 - 08 March 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-[#64748B] font-medium">Mulai Dari</div>
                <div className="font-extrabold text-lg md:text-xl text-[#F59E0B]">Rp50,000</div>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-105 transition-all cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function TopicPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-[#CCFBF1] selection:text-[#0D9488]">
      <header className="sticky top-0 z-[1045] w-full bg-white shadow-xs">
        <RunningTextBanner />
        <Navbar />
      </header>

      <Suspense fallback={<div className="p-12 text-center text-gray-500">Loading topic...</div>}>
        <TopicContent />
      </Suspense>

      <FloatingButtons />
      <MobileBottomNav />
      <Footer />
    </div>
  );
}

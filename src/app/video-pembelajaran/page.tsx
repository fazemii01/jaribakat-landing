"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RunningTextBanner from "@/components/RunningTextBanner";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import CTACommunitySection from "@/components/CTACommunitySection";
import {
  ChevronRightIcon,
  ArrowRightIcon,
  LaptopIcon,
  ArrowDownIcon,
  SearchIcon,
  EyeIcon,
  BookOpenIcon,
  ClockIcon,
} from "@/components/icons";
import { ONLINE_PROGRAMS } from "@/lib/data";

interface VideoCourseItem {
  id: string;
  title: string;
  category: string;
  views: number;
  lessons: number;
  duration: string;
  rating: number;
  reviewsCount: number;
  originalPrice: string;
  price: string;
  image: string;
  slug: string;
}

const VIDEO_COURSES: VideoCourseItem[] = [
  {
    id: "video-1",
    title: "Mengenal dan Menghadapi Pemicu Emosi",
    category: "Emotion",
    views: 137,
    lessons: 4,
    duration: "1h 06m",
    rating: 5.0,
    reviewsCount: 12,
    originalPrice: "Rp75,000",
    price: "Rp70,000",
    image:
      "https://storage.googleapis.com/insightme-production/file/okrMS3jj0AIoBiRah4pQCGF2f3FCb21Biuh9V80z.webp",
    slug: "mengenal-dan-menghadapi-pemicu-emosi",
  },
  {
    id: "video-2",
    title: "Memahami Trauma Terselubung Dibalik Hubungan Penuh Drama",
    category: "Trauma",
    views: 191,
    lessons: 5,
    duration: "1h 24m",
    rating: 4.9,
    reviewsCount: 28,
    originalPrice: "Rp85,000",
    price: "Rp70,000",
    image:
      "https://storage.googleapis.com/insightme-production/file/YjXcmgeygsSWntuBCrwQwvUdtntPE7mCNz2tJbQt.webp",
    slug: "memahami-trauma-terselubung",
  },
  {
    id: "video-3",
    title: "Memulihkan Trauma dari Hubungan dengan Narsistik",
    category: "Trauma",
    views: 656,
    lessons: 6,
    duration: "1h 40m",
    rating: 5.0,
    reviewsCount: 45,
    originalPrice: "Rp90,000",
    price: "Rp70,000",
    image:
      "https://storage.googleapis.com/insightme-production/file/GNeupzHqlN86VFOZtwNbEISHlCOX651asHJUmR96.webp",
    slug: "memulihkan-trauma-narsistik",
  },
  {
    id: "video-4",
    title: "Saatnya Bangkit Dari Depresi",
    category: "Depresi",
    views: 420,
    lessons: 5,
    duration: "1h 15m",
    rating: 4.8,
    reviewsCount: 34,
    originalPrice: "Rp75,000",
    price: "Rp70,000",
    image:
      "https://storage.googleapis.com/insightme-production/file/NumahEn0bEG9yzK4535te0QH6SuTyon5Q47cOn4m.webp",
    slug: "saatnya-bangkit-dari-depresi",
  },
  {
    id: "video-5",
    title: "Seni Mengelola Pikiran Overthinking & Anxiety",
    category: "Anxiety",
    views: 892,
    lessons: 7,
    duration: "2h 05m",
    rating: 5.0,
    reviewsCount: 67,
    originalPrice: "Rp95,000",
    price: "Rp75,000",
    image:
      "https://storage.googleapis.com/insightme-production/file/program/thumb/qcilu5bVlP9fVXKvLswMJsNi8P9SzH556aVYMrnT.webp",
    slug: "seni-mengelola-overthinking",
  },
  {
    id: "video-6",
    title: "Berdamai dengan Luka Pengasuhan Masa Lalu (Inner Child)",
    category: "Parenting",
    views: 512,
    lessons: 6,
    duration: "1h 45m",
    rating: 4.9,
    reviewsCount: 51,
    originalPrice: "Rp85,000",
    price: "Rp70,000",
    image:
      "https://storage.googleapis.com/insightme-production/file/program/thumb/fLKzBHUjRjox2OBWLTW9rshn7QPkfv9xqPYpaW9Z.png",
    slug: "berdamai-dengan-luka-pengasuhan",
  },
];

const CATEGORY_FILTERS = [
  "Semua Topic",
  "Emotion",
  "Trauma",
  "Depresi",
  "Anxiety",
  "Parenting",
];

export default function VideoPembelajaranPage() {
  const [activeFilter, setActiveFilter] = useState("Semua Topic");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = VIDEO_COURSES.filter((course) => {
    const matchesCategory =
      activeFilter === "Semua Topic" || course.category === activeFilter;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
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
          <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0">
            <Image
              src="https://storage.googleapis.com/insightme-production/file/program/thumb/mhz5McXb5A0QNLTFTGSVuMiYg7XU7Cc8fcaMEI9F.png"
              alt="Video Pembelajaran"
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
                <LaptopIcon className="w-4 h-4 text-[#1E1B4B]" />
                <span>Program Online &amp; Video Pembelajaran Mandiri</span>
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#0F172A]">
                Video Pembelajaran Psikologi &amp; Kesehatan Mental
              </h1>
              <p className="text-base md:text-[17px] text-[#64748B] max-w-lg leading-relaxed">
                Video pembelajaran dan rekaman webinar dipandu Psikolog &amp; Psikiater profesional. Belajar mandiri fleksibel dengan akses selamanya.
              </p>
              <div className="pt-2">
                <a
                  href="#video-catalog"
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3 rounded-full text-sm md:text-base transition-all shadow-md inline-flex items-center gap-2 hover:scale-105"
                >
                  <span>Mulai Belajar Video</span>
                  <ArrowDownIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* High Level Online Programs Categories */}
        <div className="container-lg space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A]">
              Seri Program Belajar Online
            </h2>
            <p className="text-sm md:text-base text-[#64748B] max-w-xl mx-auto">
              Pilih format modul dan rekaman sesuai gaya belajarmu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ONLINE_PROGRAMS.map((program) => (
              <div
                key={program.slug}
                className="group flex items-center justify-between p-6 bg-white border border-gray-100 rounded-[20px] hover:border-[#1E1B4B]/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 shadow-xs">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg md:text-xl text-[#0F172A] group-hover:text-[#1E1B4B] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-[#64748B] line-clamp-2 leading-relaxed font-medium">
                      {program.description}
                    </p>
                  </div>
                </div>
                <Link
                  href={program.href}
                  className="w-10 h-10 rounded-full bg-[#EEF2FF] text-[#1E1B4B] flex items-center justify-center group-hover:bg-[#1E1B4B] group-hover:text-white transition-all ml-4 flex-shrink-0 shadow-xs"
                >
                  <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Filter & Catalog List of Video Courses */}
        <div id="video-catalog" className="container-lg my-12 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-4 md:p-6 rounded-[24px] shadow-sm border border-gray-100">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORY_FILTERS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-full font-bold text-xs md:text-sm text-nowrap transition-all cursor-pointer ${
                    activeFilter === cat
                      ? "bg-[#1E1B4B] text-white shadow-md scale-105"
                      : "bg-gray-100 text-[#64748B] hover:bg-gray-200 hover:text-[#0F172A]"
                  }`}
                >
                  {cat}
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
                placeholder="Cari judul video..."
                className="w-full h-11 pl-11 pr-4 rounded-full border border-[#F59E0B] text-sm text-[#0F172A] placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F59E0B] bg-white"
              />
            </div>
          </div>

          {/* Video Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="360px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3.5 py-1 rounded-full bg-[#1E1B4B] text-white text-xs font-bold shadow-xs">
                        Akses Selamanya
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <span className="px-3.5 py-1 rounded-full bg-[#EEF2FF] text-[#1E1B4B] text-xs font-bold inline-block">
                      {course.category}
                    </span>
                    <h3 className="font-extrabold text-base md:text-lg text-[#0F172A] group-hover:text-[#1E1B4B] transition-colors line-clamp-2 leading-snug">
                      {course.title}
                    </h3>

                    <div className="space-y-2 text-xs text-[#64748B] pt-1">
                      <div className="flex items-center gap-1.5 text-[#1E1B4B] font-medium">
                        <EyeIcon className="w-4 h-4 text-[#1E1B4B]" />
                        <span className="text-[#64748B]">{course.views} Dilihat</span>
                      </div>

                      <div className="flex items-center gap-3 pt-1 text-[#64748B] font-medium">
                        <span className="flex items-center gap-1 text-[#1E1B4B]">
                          <BookOpenIcon className="w-4 h-4 text-[#1E1B4B]" />
                          <span className="text-[#64748B]">{course.lessons} Materi</span>
                        </span>
                        <span className="text-gray-300">|</span>
                        <span className="flex items-center gap-1 text-[#1E1B4B]">
                          <ClockIcon className="w-4 h-4 text-[#1E1B4B]" />
                          <span className="text-[#64748B]">{course.duration}</span>
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-2.5 flex items-center gap-1.5 text-[#F59E0B] text-xs">
                      <span className="text-[#F59E0B] text-sm">★ ★ ★ ★ ★</span>
                      <span className="font-bold text-[#64748B]">
                        {course.rating} ({course.reviewsCount})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400 line-through font-medium">
                      {course.originalPrice}
                    </div>
                    <div className="font-extrabold text-lg text-[#F59E0B]">
                      {course.price}
                    </div>
                  </div>
                  <a
                    href="https://wa.me/6281915237935"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold py-2.5 px-5 text-xs sm:text-sm rounded-full flex items-center gap-1.5 shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>Beli Video</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <CTACommunitySection />
      </main>

      <FloatingButtons />
      <MobileBottomNav />
      <Footer />
    </div>
  );
}

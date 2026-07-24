import Image from "next/image";
import RunningTextBanner from "@/components/RunningTextBanner";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import USPSection from "@/components/USPSection";
import { LeafIcon, ArrowDownIcon } from "@/components/icons";

export default function AboutUsPage() {
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
                <LeafIcon className="w-4 h-4 text-[#1E1B4B]" />
                <span>Platform Terbaik No.1 Indonesia</span>
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#0F172A]">
                Tentang JariBakat
              </h1>
              <p className="text-base md:text-[17px] text-[#64748B] max-w-lg leading-relaxed">
                JariBakat merupakan platform analisis tes bakat &amp; sidik jari (fingerprint test) terdepan di Indonesia untuk membantu orang tua dan individu menemukan potensi alami sejak dini.
              </p>
              <div className="pt-2">
                <a
                  href="#about-story"
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3 rounded-full text-sm md:text-base transition-all shadow-md inline-flex items-center gap-2 hover:scale-105"
                >
                  <span>Keunggulan Kami</span>
                  <ArrowDownIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right side empty to let background show */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Story & Vision */}
        <div id="about-story" className="container-lg my-16 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#0F172A]">
              Menemukan Potensi Sejak Dini
            </h2>
            <p className="text-[#64748B] text-base md:text-lg leading-relaxed font-medium">
              Bukan sekadar &quot;anak pintar&quot;, tapi tahu dia pintar di bidang apa. Dengan analisis sidik jari yang akurat dan obyektif, kami memberikan arah jelas untuk masa depan anak tanpa perlu meraba-raba atau coba-coba les sana-sini.
            </p>
          </div>

          <div className="py-8">
            <USPSection />
          </div>
        </div>
      </main>

      <FloatingButtons />
      <MobileBottomNav />
      <Footer />
    </div>
  );
}

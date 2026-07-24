import Image from "next/image";
import RunningTextBanner from "@/components/RunningTextBanner";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import CTACommunitySection from "@/components/CTACommunitySection";
import { WhatsAppIcon, ArrowRightIcon, MessageCircleIcon, ShieldIcon, ArrowDownIcon } from "@/components/icons";
import { COMMUNITY_LINKS } from "@/lib/data";

export default function CommunityPage() {
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
                <MessageCircleIcon className="w-4 h-4 text-[#1E1B4B]" />
                <span>Komunitas Orang Tua JariBakat</span>
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#0F172A]">
                Komunitas Edukasi &amp; Tes Bakat JariBakat
              </h1>
              <p className="text-base md:text-[17px] text-[#64748B] max-w-lg leading-relaxed">
                Bergabunglah bersama ribuan orang tua &amp; keluarga untuk saling berbagi pengalaman, arahan pendidikan, dan mengoptimalkan potensi bakat anak.
              </p>
              <div className="pt-2">
                <a
                  href="#community-list"
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3 rounded-full text-sm md:text-base transition-all shadow-md inline-flex items-center gap-2 hover:scale-105"
                >
                  <span>Pilih Komunitas</span>
                  <ArrowDownIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right side empty to let background show */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Community Guidelines Banner */}
        <div className="container-lg">
          <div className="bg-[#EEF2FF] border border-[#1E1B4B]/15 rounded-[24px] p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1E1B4B] text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-xs">
                <ShieldIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#1E1B4B] text-base md:text-lg">Ruang Diskusi &amp; Moderasi Analyst JariBakat</h4>
                <p className="text-xs md:text-sm text-[#1E1B4B]/80 font-medium">
                  Setiap grup didampingi oleh tim konsultan &amp; analis bakat JariBakat untuk konsultasi terbaik.
                </p>
              </div>
            </div>
            <span className="px-5 py-2 rounded-full bg-white text-[#1E1B4B] font-extrabold text-xs md:text-sm shadow-xs flex-shrink-0">
              100% GRATIS
            </span>
          </div>
        </div>

        {/* Community Directory Grid */}
        <div id="community-list" className="container-lg my-12 md:my-16 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A]">
              Pilih Grup Komunitas Sesuai Isumu
            </h2>
            <p className="text-sm md:text-base text-[#64748B] max-w-xl mx-auto">
              Klik tombol &ldquo;Gabung WhatsApp&rdquo; untuk terhubung langsung dengan grup dukungan pilihanmu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMMUNITY_LINKS.map((comm, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-100 rounded-[20px] p-6 hover:border-[#1E1B4B]/40 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-base md:text-lg text-[#0F172A] group-hover:text-[#1E1B4B] transition-colors leading-snug">
                      {comm.name}
                    </h3>
                    <p className="text-xs text-[#64748B] font-medium flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#25D366]" />
                      Grup WhatsApp Resmi • Gratis
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/6281915237935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-6 rounded-full text-xs sm:text-sm flex items-center gap-2 flex-shrink-0 shadow-md hover:scale-105 transition-all cursor-pointer w-full sm:w-auto justify-center"
                >
                  <span>Gabung WhatsApp</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Community Section */}
        <CTACommunitySection />
      </main>

      <FloatingButtons />
      <MobileBottomNav />
      <Footer />
    </div>
  );
}

import Link from "next/link";
import { ArrowRightIcon, UsersIcon } from "@/components/icons";

interface CTACommunitySectionProps {
  className?: string;
}

export function CTACommunitySection({ className = "" }: CTACommunitySectionProps) {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="container-lg">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#1E1B4B] to-[#17153B] rounded-[24px] p-8 md:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 relative z-10">
            {/* Left side text content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left text-white">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold leading-tight mb-4 text-white">
                Ingin Temukan Potensi Bakat Terbaik Anak?
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl font-medium">
                Bergabunglah bersama ribuan orang tua dan keluarga di Komunitas JariBakat untuk konsultasi dan arahan pendidikan yang tepat.
              </p>
              <Link
                href="/community"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-white text-white font-bold text-sm sm:text-base hover:bg-white hover:text-[#1E1B4B] transition-all duration-200 group shadow-md"
              >
                <span>Gabung Komunitas</span>
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right side vector icon container */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="flex items-center gap-5 px-8 py-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-2xl bg-[#EEF2FF] text-[#1E1B4B] flex items-center justify-center shadow-md flex-shrink-0">
                  <UsersIcon className="w-8 h-8 text-[#1E1B4B]" />
                </div>
                <div className="space-y-1">
                  <span className="font-extrabold text-xl text-white block">
                    Komunitas JariBakat
                  </span>
                  <span className="text-xs text-white/80 font-medium block">
                    Orang Tua &amp; Edukasi Bakat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTACommunitySection;

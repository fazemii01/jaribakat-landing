import Image from "next/image";
import Link from "next/link";
import { TOPICS } from "@/lib/data";
import type { TopicItem } from "@/types";

export function TopicsSection() {
  const isExternalUrl = (url: string) =>
    url.startsWith("http://") || url.startsWith("https://");

  const moreTopicsHref = "/event";

  return (
    <section className="home-topics bg-image-gradient-3 bg-gradient-to-r from-[#1E1B4B] via-[#17153B] to-[#0F172A] py-16 md:py-20 text-white w-full">
      <div className="container-lg">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 md:mb-4">
            Beragam Topik Potensi &amp; Edukasi Bakat
          </h2>
          <p className="text-white/90 text-sm md:text-base font-normal">
            Pilih topik pengembangan minat bakat dan arahan pendidikan anak
          </p>
        </div>

        {/* Grid layout: 4 columns on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {TOPICS.map((topic: TopicItem) => {
            const isExternal = isExternalUrl(topic.href);
            const cardContent = (
              <div className="group bg-white rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/20">
                <div className="w-[80px] h-[80px] min-w-[80px] min-h-[80px] mb-4 rounded-xl overflow-hidden bg-[#CCFBF1]/50 p-2 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={topic.icon}
                    alt={topic.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain rounded-xl"
                    unoptimized
                  />
                </div>
                <span className="font-bold text-base md:text-lg text-[#0F172A] group-hover:text-[#1E1B4B] transition-colors">
                  {topic.name}
                </span>
              </div>
            );

            if (isExternal) {
              return (
                <a
                  key={topic.slug}
                  href={topic.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full no-underline"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link
                key={topic.slug}
                href={topic.href}
                className="block h-full no-underline"
              >
                {cardContent}
              </Link>
            );
          })}

          {/* Final Card: "+ 3 topik lainnya" */}
          <a
            href={moreTopicsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full no-underline"
          >
            <div className="group bg-white rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/20">
              <div className="w-[80px] h-[80px] min-w-[80px] min-h-[80px] mb-4 rounded-xl bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center font-bold text-2xl group-hover:scale-105 group-hover:bg-[#1E1B4B] group-hover:text-white transition-all duration-300">
                +3
              </div>
              <span className="font-bold text-base md:text-lg text-[#0F172A] group-hover:text-[#1E1B4B] transition-colors">
                + 3 topik lainnya
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TopicsSection;

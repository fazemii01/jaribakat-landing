import { USP_ITEMS } from "@/lib/data";
import type { USPItem } from "@/types";
import { cn } from "@/lib/utils";

export interface USPSectionProps {
  items?: USPItem[];
  className?: string;
}

export function USPSection({ items = USP_ITEMS, className }: USPSectionProps) {
  return (
    <div className={cn("home-usp w-full", className)}>
      <div className="wrapper flex flex-col min-[992px]:flex-row gap-[32px] min-[992px]:gap-[48px] items-stretch">
        {/* Left Column */}
        <div className="left-side min-[992px]:w-1/3 min-[992px]:min-w-[300px] flex flex-col justify-center">
          <h2 className="text-[28px] min-[992px]:text-[36px] font-bold leading-[1.3] text-[#0F172A]">
            Mengembangkan Potensi Sejak Dini{" "}
            <span className="text-[#1E1B4B] block">
              Melalui Fingerprint Test & Analysis
            </span>
          </h2>
        </div>

        {/* Center Divider */}
        <div
          className="vertical-line-400 hidden min-[992px]:block w-[2px] h-[400px] bg-[#E9E9E9] shrink-0"
          aria-hidden="true"
        />

        {/* Right Column */}
        <div className="right-side flex-1 flex flex-col justify-center gap-[32px]">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="text-[18px] min-[992px]:text-[20px] font-bold text-[#0F172A] leading-snug">
                {item.title}
              </h3>
              <p className="text-[14px] min-[992px]:text-[16px] text-[#64748B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default USPSection;

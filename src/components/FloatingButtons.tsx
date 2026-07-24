import Link from "next/link";
import { WhatsAppIcon, TicketIcon, ShoppingCartIcon } from "@/components/icons";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-[84px] lg:bottom-6 right-6 z-[1045] flex flex-col gap-3 items-center">
      {/* Shopping Cart Button */}
      <div className="relative">
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#F59E0B] text-white text-[11px] font-bold flex items-center justify-center z-10 shadow-xs">
          0
        </span>
        <button
          className="w-[50px] h-[50px] rounded-full bg-[#1E1B4B] flex items-center justify-center text-white shadow-md transition-transform duration-200 hover:scale-110 focus:outline-none cursor-pointer"
          aria-label="Shopping Cart"
        >
          <ShoppingCartIcon className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Event Ticket Button */}
      <div className="relative">
        <span className="absolute -top-2 -left-2 px-2 py-0.5 text-[11px] font-bold rounded-full bg-[#f8d7da] text-[#c82333] z-10 leading-none shadow-xs">
          New
        </span>
        <Link
          href="/event"
          className="w-[50px] h-[50px] rounded-full bg-[#FEF3C7] border-[2px] border-[#F59E0B] flex items-center justify-center text-[#F59E0B] shadow-md transition-transform duration-200 hover:scale-110 focus:outline-none"
          aria-label="Event Ticket"
        >
          <TicketIcon className="w-5 h-5 text-[#F59E0B]" />
        </Link>
      </div>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/6285196235285"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[50px] h-[50px] rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md transition-transform duration-200 hover:scale-110 focus:outline-none"
        aria-label="Contact WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </Link>
    </div>
  );
}

export default FloatingButtons;


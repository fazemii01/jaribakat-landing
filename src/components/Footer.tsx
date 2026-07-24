import Link from "next/link";
import {
  MailIcon,
  WhatsAppIcon,
  InstagramIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { FOOTER_SECTIONS, COMMUNITY_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F172A] text-white pt-16 pb-12 font-sans">
      <div className="container-lg space-y-12">
        {/* Multi-Column Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Kenali Kami */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">
              {FOOTER_SECTIONS[0].title}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D3D3D3]">
              {FOOTER_SECTIONS[0].links.map((link, idx) => (
                <li key={idx}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Teman Bertumbuh (Community Links) */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">
              Teman Bertumbuh
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D3D3D3]">
              {COMMUNITY_LINKS.slice(0, 6).map((comm, idx) => (
                <li key={idx}>
                  <Link
                    href={comm.href}
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    {comm.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Growth Partner */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">
              {FOOTER_SECTIONS[1].title}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D3D3D3]">
              {FOOTER_SECTIONS[1].links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Artikel & Contact */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">
              {FOOTER_SECTIONS[2].title}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D3D3D3] mb-6">
              {FOOTER_SECTIONS[2].links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-zinc-700 my-8" />

        {/* Contact Bar & Community CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#D3D3D3]">
            <a
              href="mailto:info@jaribakat.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MailIcon className="w-5 h-5 text-[#1E1B4B]" />
              info@jaribakat.com
            </a>
            <a
              href="https://wa.me/6285196235285"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              0851 9623 5285
            </a>
          </div>

          {/* Community Box CTA */}
          <div className="flex items-center gap-4 bg-zinc-800 p-3 px-5 rounded-full border border-zinc-700">
            <span className="text-xs md:text-sm font-medium text-white">
              Gabung Komunitas Orang Tua JariBakat
            </span>
            <Link
              href="/community"
              className="btn btn-secondary py-1.5 px-4 text-xs font-bold flex items-center gap-1 group"
            >
              Lihat Komunitas
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>Copyright © 2026 JariBakat. Platform Terbaik No.1 Indonesia</p>
          <div className="flex items-center gap-4">
            <a
              href="https://jaribakat.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
              aria-label="JariBakat Official Website"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

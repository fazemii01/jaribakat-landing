"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registration attempted for: ${name}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-[#CCFBF1] selection:text-[#0D9488]">
      <header className="sticky top-0 z-[1045] w-full bg-white shadow-xs">
        <Navbar />
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md bg-white border border-[#E9E9E9] rounded-3xl p-8 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <Link href="/" className="inline-block mb-2">
              <img
                src="https://www.insightme.id/assets/img/logo-full-color.webp"
                alt="InsightMe Logo"
                className="w-auto h-10 mx-auto object-contain"
              />
            </Link>
            <h1 className="text-2xl font-extrabold text-[#0F172A]">
              Buat Akun Baru
            </h1>
            <p className="text-sm text-[#64748B]">
              Bergabunglah bersama 14.000+ #TemanBertumbuh di InsightMe
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama lengkap kamu"
                className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1E1B4B] focus:ring-1 focus:ring-[#1E1B4B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                Alamat Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1E1B4B] focus:ring-1 focus:ring-[#1E1B4B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                No. WhatsApp
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="08123456789"
                className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1E1B4B] focus:ring-1 focus:ring-[#1E1B4B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                Kata Sandi
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 8 karakter"
                className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1E1B4B] focus:ring-1 focus:ring-[#1E1B4B]"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-full bg-[#F59E0B] text-white font-bold text-base hover:bg-[#D97706] transition-colors shadow-md cursor-pointer mt-2"
            >
              Daftar Akun Gratis
            </button>
          </form>

          <div className="text-center pt-2 border-t border-gray-100 text-sm text-[#64748B]">
            Sudah punya akun?{" "}
            <Link href="/login" className="text-[#1E1B4B] font-bold hover:underline">
              Masuk di sini
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

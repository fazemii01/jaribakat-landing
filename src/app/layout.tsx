import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JariBakat — Analisis Sidik Jari & pengembangan Potensi",
  description:
    "JariBakat merupakan platform analisis sidik jari dan edukasi bakat untuk mengembangkan potensi anak dan keluarga.",
  keywords: [
    "Analisis Sidik Jari",
    "Fingerprint Test",
    "Tes Bakat Anak",
    "Potensi Anak",
    "JariBakat",
    "Pengembangan Diri",
    "Parenting Indonesia",
  ],
  authors: [{ name: "JariBakat" }],
  openGraph: {
    title: "JariBakat — Analisis Sidik Jari & Pengembangan Potensi",
    description:
      "JariBakat merupakan platform analisis sidik jari dan edukasi bakat untuk mengembangkan potensi anak dan keluarga.",
    url: "https://www.jaribakat.id",
    siteName: "JariBakat - Discover Your True Potential",
    images: [
      {
        url: "/images/jaribakat.png",
        width: 1200,
        height: 630,
        alt: "JariBakat Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JariBakat — Analisis Sidik Jari & Pengembangan Potensi",
    description:
      "JariBakat merupakan platform analisis sidik jari dan edukasi bakat untuk mengembangkan potensi anak dan keluarga.",
    images: ["/images/jaribakat.png"],
  },
  icons: {
    icon: "/images/jaribakat.png",
    shortcut: "/images/jaribakat.png",
    apple: "/images/jaribakat.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${plusJakartaSans.className}`}
    >
      <head>
        <link rel="icon" href="/images/jaribakat.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/images/jaribakat.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/jaribakat.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

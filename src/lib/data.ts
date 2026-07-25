// ============================================================
// JariBakat — Comprehensive Data System
// Adapted directly from https://jaribakat.com/
// Platform Terbaik No.1 Indonesia untuk Tes Bakat & Sidik Jari
// ============================================================

import type {
  ProgramItem,
  TopicItem,
  NavTopicItem,
  BannerSlide,
  CommunityLink,
  FooterSection,
  USPItem,
  RunningTextData,
} from "@/types";

export interface EventCatalogItem {
  id: string;
  title: string;
  type: string;
  category: "online" | "offline" | "expert";
  speaker: string;
  speakerRole: string;
  speakerImage: string;
  date: string;
  time: string;
  location: string;
  image: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

// ── Running Text Banner ──────────────────────────────────────

export const RUNNING_TEXT: RunningTextData = {
  text: "Tes Bakat & Fingerprint Analytics JariBakat 🧬 ",
  highlight: "Paket Hemat Rp350.000",
  suffix: " • Temukan Potensi Sejak Dini",
  ctaText: "Pilih Paket Bakat",
  ctaHref: "/event",
};

// ── Banner Slides ────────────────────────────────────────────

export const BANNER_SLIDES: BannerSlide[] = [
  {
    id: "paket-anak-basic",
    desktopImage: "/images/banner-jaribakat.png",
    mobileImage: "/images/jaribakat-banner-portrait.jpeg",
    alt: "Paket Anak JariBakat - Menemukan Potensi Sejak Dini",
    ctaHref: "/event",
    ctaText: "Lihat Paket Bakat Anak",
    ctaMobileText: "Lihat Paket",
  },
  {
    id: "paket-remaja-dewasa",
    desktopImage: "/images/banner-jaribakat.png",
    mobileImage: "/images/jaribakat-banner-portrait.jpeg",
    alt: "Paket Remaja & Dewasa - Rekomendasi Jurusan & Karir",
    ctaHref: "/event",
    ctaText: "Konsultasi Karir & Jurusan",
    ctaMobileText: "Konsultasi",
  },
  {
    id: "paket-keluarga",
    desktopImage: "/images/banner-jaribakat.png",
    mobileImage: "/images/jaribakat-banner-portrait.jpeg",
    alt: "Paket Keluarga JariBakat - Harmony & Pola Asuh Tepat",
    ctaHref: "/event",
    ctaText: "Lihat Paket Keluarga",
    ctaMobileText: "Paket Keluarga",
  },
];

// ── Online & Service Programs ─────────────────────────────────

export const ONLINE_PROGRAMS: ProgramItem[] = [
  {
    slug: "paket-anak",
    title: "Paket Anak (Basic)",
    description:
      "Analisa bakat & potensi dasar anak, gaya belajar (visual, auditori, kinestetik), rekomendasi pola mendidik & E-book panduan orang tua. (Rp 350.000)",
    image:
      "https://storage.googleapis.com/insightme-production/file/program/thumb/PNvr7ONxw3sgrs4KaCVMcIqgSFhevxkxV3kQBFzy.png",
    href: "https://wa.me/6285196235285",
  },
  {
    slug: "paket-remaja-dewasa",
    title: "Paket Remaja & Dewasa (Premium)",
    description:
      "Cocok untuk pelajar & usia produktif. Analisa minat & bakat spesifik, rekomendasi jurusan & karir, tipe kepribadian, potensi kerja & sertifikat resmi. (Rp 450.000)",
    image:
      "https://storage.googleapis.com/insightme-production/file/program/thumb/mhz5McXb5A0QNLTFTGSVuMiYg7XU7Cc8fcaMEI9F.png",
    href: "https://wa.me/6285196235285",
  },
  {
    slug: "paket-2-anak",
    title: "Paket 2 Anak (Hemat)",
    description:
      "Semua fitur Paket Anak untuk 2 anak sekaligus, perbandingan potensi kedua anak, dan insight pola asuh yang disesuaikan untuk masing-masing anak. (Rp 550.000)",
    image:
      "https://storage.googleapis.com/insightme-production/file/program/thumb/qcilu5bVlP9fVXKvLswMJsNi8P9SzH556aVYMrnT.webp",
    href: "https://wa.me/6285196235285",
  },
  {
    slug: "paket-keluarga",
    title: "Paket Keluarga (Best Value)",
    description:
      "Analisa lengkap seluruh anggota keluarga, kecocokan karakter antar anggota keluarga, rekomendasi pola komunikasi, jurusan & karir, serta konsultasi prioritas. (Rp 750.000)",
    image:
      "https://storage.googleapis.com/insightme-production/file/program/thumb/fLKzBHUjRjox2OBWLTW9rshn7QPkfv9xqPYpaW9Z.png",
    href: "https://wa.me/6285196235285",
  },
];

export const OFFLINE_PROGRAMS: ProgramItem[] = [
  {
    slug: "fingerprint-roadshow",
    title: "Roadshow Scanning Sidik Jari",
    description:
      "Layanan pemindaian sidik jari tatap muka langsung bersama tim fasilitator JariBakat di sekolah atau event terdekat di kotamu.",
    image:
      "https://storage.googleapis.com/insightme-production/file/program/thumb/PNvr7ONxw3sgrs4KaCVMcIqgSFhevxkxV3kQBFzy.png",
    href: "https://wa.me/6285196235285",
  },
  {
    slug: "parenting-talk",
    title: "Parenting Workshop & Talkshow",
    description:
      "Workshop tatap muka memahami gaya belajar dan potensi tersembunyi anak berbasis data analisis sidik jari.",
    image:
      "https://storage.googleapis.com/insightme-production/file/program/thumb/mhz5McXb5A0QNLTFTGSVuMiYg7XU7Cc8fcaMEI9F.png",
    href: "https://wa.me/6285196235285",
  },
];

export const EXPERT_PROGRAMS: ProgramItem[] = [
  {
    slug: "consultant-certified",
    title: "Konsultasi Analyst JariBakat",
    description:
      "Sesi konsultasi 1-on-1 mendalam bersama Analyst & Konsultan JariBakat bersertifikat untuk membedah hasil laporan tes sidik jari.",
    image:
      "https://storage.googleapis.com/insightme-production/file/program/thumb/qcilu5bVlP9fVXKvLswMJsNi8P9SzH556aVYMrnT.webp",
    href: "https://wa.me/6285196235285",
  },
];

// ── Catalog Events & Packages ─────────────────────────────────

export const EVENT_CATALOG: EventCatalogItem[] = [
  {
    id: "paket-anak-basic-catalog",
    title: "Paket Anak (Basic) - Analisa Potensi & Gaya Belajar",
    type: "Tes Bakat Anak",
    category: "online",
    speaker: "Tim Konsultan JariBakat",
    speakerRole: "Certified Fingerprint Analyst JariBakat",
    speakerImage:
      "https://storage.googleapis.com/insightme-production/file/speaker/thumb/speaker-1.png",
    date: "Akses Fleksibel",
    time: "Sesuai Jadwal Pilihan",
    location: "Online / Home Service / Center JariBakat",
    image:
      "https://storage.googleapis.com/insightme-production/file/hqm3bDj6PfkXwdvB4LU0JunSLd8yyLU8nJqKqQWR.webp",
    price: "Rp 350.000",
    badge: "Terpopuler",
    href: "https://wa.me/6285196235285",
  },
  {
    id: "paket-remaja-dewasa-catalog",
    title: "Paket Remaja & Dewasa (Premium) - Jurusan & Karir",
    type: "Tes Bakat & Karir",
    category: "online",
    speaker: "Tim Konsultan JariBakat",
    speakerRole: "Career & Talent Specialist JariBakat",
    speakerImage:
      "https://storage.googleapis.com/insightme-production/file/speaker/thumb/speaker-2.png",
    date: "Akses Fleksibel",
    time: "Sesuai Jadwal Pilihan",
    location: "Online / Center JariBakat",
    image:
      "https://storage.googleapis.com/insightme-production/file/cHaVs1OBQJiZF9dfWDnkM9i1WHZvV5w6oltkoiXh.webp",
    price: "Rp 450.000",
    badge: "Rekomendasi Karir",
    href: "https://wa.me/6285196235285",
  },
  {
    id: "paket-2-anak-catalog",
    title: "Paket 2 Anak (Hemat) - Analisa & Perbandingan Potensi Sibling",
    type: "Tes Bakat 2 Anak",
    category: "online",
    speaker: "Tim Konsultan JariBakat",
    speakerRole: "Parenting & Talent Specialist JariBakat",
    speakerImage:
      "https://storage.googleapis.com/insightme-production/file/speaker/thumb/speaker-3.png",
    date: "Akses Fleksibel",
    time: "Sesuai Jadwal Pilihan",
    location: "Online / Center JariBakat",
    image:
      "https://storage.googleapis.com/insightme-production/file/YvG57ScA7ijekdwW88lhthN4eRkiqfaPZ1EjgGFQ.webp",
    price: "Rp 550.000",
    badge: "Paket Hemat",
    href: "https://wa.me/6285196235285",
  },
  {
    id: "paket-keluarga-catalog",
    title: "Paket Keluarga (Best Value) - Harmony & Pola Asuh Komprehensif",
    type: "Tes Bakat Keluarga",
    category: "expert",
    speaker: "Head Analyst JariBakat",
    speakerRole: "Senior Fingerprint & Parenting Consultant",
    speakerImage:
      "https://storage.googleapis.com/insightme-production/file/speaker/thumb/speaker-4.png",
    date: "Akses Fleksibel",
    time: "Sesuai Jadwal Pilihan",
    location: "Online Consultation & Direct Report",
    image:
      "https://storage.googleapis.com/insightme-production/file/program/thumb/qcilu5bVlP9fVXKvLswMJsNi8P9SzH556aVYMrnT.webp",
    price: "Rp 750.000",
    badge: "Best Value",
    href: "https://wa.me/6285196235285",
  },
];

// ── Topics / Categories ───────────────────────────────────────

export const TOPICS: TopicItem[] = [
  {
    slug: "gaya-belajar",
    name: "Gaya Belajar",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/ewux9RyU0p4TsmqtgdWb3c8LTmV3RlC6Xp2zkGjC.svg",
    href: "/topic?topic=gaya-belajar",
  },
  {
    slug: "potensi-anak",
    name: "Potensi Bakat",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/xOvPj8ho04rwvu6Hf8J63I5r9FwqsvvCzyTpAWCt.svg",
    href: "/topic?topic=potensi-anak",
  },
  {
    slug: "jurusan-kuliah",
    name: "Rekomendasi Jurusan",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/eTzbzFvPSQDMg3LORp3slxz8HV4cI6mo98VhPVYs.svg",
    href: "/topic?topic=jurusan-kuliah",
  },
  {
    slug: "perencanaan-karir",
    name: "Perencanaan Karir",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/RpGINdkQxCiqWoTUOaDEI5Sa49tKKLc9chcECyTP.svg",
    href: "/topic?topic=perencanaan-karir",
  },
  {
    slug: "pola-asuh-orang-tua",
    name: "Pola Asuh (Parenting)",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/NbCyx5ew3YvMCpcFP6cGpExelzP6TkqAJE2LV0XN.svg",
    href: "/topic?topic=pola-asuh-orang-tua",
  },
  {
    slug: "tipe-kepribadian",
    name: "Tipe Kepribadian",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/xP9agFyrFfL1tsJ3CPhHJkfYLV1eceSpMCJJ7s2B.svg",
    href: "/topic?topic=tipe-kepribadian",
  },
];

export const NAV_TOPICS: NavTopicItem[] = [
  {
    slug: "gaya-belajar",
    name: "Gaya Belajar",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/ewux9RyU0p4TsmqtgdWb3c8LTmV3RlC6Xp2zkGjC.svg",
    href: "/topic?topic=gaya-belajar",
  },
  {
    slug: "potensi-anak",
    name: "Potensi Bakat",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/xOvPj8ho04rwvu6Hf8J63I5r9FwqsvvCzyTpAWCt.svg",
    href: "/topic?topic=potensi-anak",
  },
  {
    slug: "jurusan-kuliah",
    name: "Rekomendasi Jurusan",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/eTzbzFvPSQDMg3LORp3slxz8HV4cI6mo98VhPVYs.svg",
    href: "/topic?topic=jurusan-kuliah",
  },
  {
    slug: "perencanaan-karir",
    name: "Perencanaan Karir",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/RpGINdkQxCiqWoTUOaDEI5Sa49tKKLc9chcECyTP.svg",
    href: "/topic?topic=perencanaan-karir",
  },
  {
    slug: "pola-asuh-orang-tua",
    name: "Pola Asuh Orang Tua",
    icon: "https://storage.googleapis.com/insightme-production/file/topic/thumb/NbCyx5ew3YvMCpcFP6cGpExelzP6TkqAJE2LV0XN.svg",
    href: "/topic?topic=pola-asuh-orang-tua",
  },
];

// ── USP Items (Key Advantages from jaribakat.com) ─────────────

export const USP_ITEMS: USPItem[] = [
  {
    title: "Menemukan Potensi Sejak Dini",
    description:
      "Bukan sekadar 'anak pintar', tapi tahu dia pintar di bidang apa. Arah jelas untuk masa depan tanpa meraba-raba.",
  },
  {
    title: "Meningkatkan Percaya Diri",
    description:
      "Saat anak memahami kelebihannya, dia jadi lebih percaya diri, berani tampil, dan tidak mudah minder.",
  },
  {
    title: "Menghemat Waktu & Biaya",
    description:
      "Daripada coba-coba les sana-sini, orang tua dapat langsung fokus memfasilitasi bidang yang memang sesuai minat bakat anak.",
  },
  {
    title: "Menghindari Salah Jurusan",
    description:
      "Mengarahkan pilihan pendidikan dan karir berdasarkan kekuatan alami anak, bukan sekadar ikut-ikutan teman.",
  },
  {
    title: "Belajar Lebih Efektif",
    description:
      "Memahami cara belajar terbaik anak (visual, auditori, kinestetik) agar proses belajar menjadi menyenangkan dan optimal.",
  },
  {
    title: "Mendidik dengan Data Tepat",
    description:
      "Bukan lagi mendidik hanya dengan 'feeling', tapi berdasarkan data dan hasil pemindaian sidik jari yang objektif.",
  },
];

// ── Community Links ──────────────────────────────────────────

export const COMMUNITY_LINKS: CommunityLink[] = [
  { name: "Komunitas Orang Tua JariBakat", href: "/community" },
  { name: "Komunitas Bakat & Karir Remaja", href: "/community" },
  { name: "Komunitas Gaya Belajar Efektif", href: "/community" },
  { name: "Komunitas Harmony Keluarga JariBakat", href: "/community" },
];

// ── FAQ Items (Adapted directly from jaribakat.com) ────────────

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Umum",
    question: "Apa itu JariBakat?",
    answer:
      "JariBakat adalah Platform Terbaik No.1 Indonesia untuk analisis tes bakat dan sidik jari (fingerprint test). Kami membantu orang tua, pelajar, dan keluarga mengetahui potensi alami, gaya belajar, serta rekomendasi jurusan & karir secara objektif berbasis data.",
  },
  {
    category: "Layanan",
    question: "Bagaimana cara melakukan tes sidik jari JariBakat?",
    answer:
      "Kamu cukup memilih paket yang sesuai (Paket Anak, Remaja & Dewasa, 2 Anak, atau Paket Keluarga), kemudian melakukan proses pendaftaran. Pemindaian sidik jari dapat dilakukan secara fleksibel dan laporan lengkap akan disusun oleh tim analis JariBakat.",
  },
  {
    category: "Manfaat",
    question: "Mengapa tes bakat sidik jari penting bagi anak?",
    answer:
      "Tes bakat sidik jari membantu menemukan potensi alami sejak dini, mengetahui gaya belajar terbaik (visual, auditori, kinestetik), menghemat biaya les yang tidak perlu, dan mencegah risiko salah jurusan di perguruan tinggi.",
  },
  {
    category: "Paket",
    question: "Apa saja pilihan paket layanan di JariBakat?",
    answer:
      "Kami menyediakan Paket Anak (Basic) Rp 350.000, Paket Remaja & Dewasa (Premium) Rp 450.000, Paket 2 Anak (Hemat) Rp 550.000, dan Paket Keluarga (Best Value) Rp 750.000.",
  },
  {
    category: "Konsultasi",
    question: "Apakah peserta mendapatkan konsultasi hasil laporan?",
    answer:
      "Ya! Untuk paket Premium dan Keluarga, Anda akan mendapatkan sesi konsultasi pembahasan hasil laporan langsung bersama konsultan teruji dari JariBakat.",
  },
];

// ── Footer Sections ──────────────────────────────────────────

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Kenali JariBakat",
    links: [
      { label: "Tentang JariBakat", href: "/about-us" },
      { label: "Paket Layanan", href: "/event" },
      { label: "Keunggulan Tes", href: "/about-us#about-story" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Layanan Bakat",
    links: [
      { label: "Paket Anak (Basic)", href: "/event" },
      { label: "Paket Remaja & Dewasa", href: "/event" },
      { label: "Paket 2 Anak (Hemat)", href: "/event" },
      { label: "Paket Keluarga (Best Value)", href: "/expert" },
    ],
  },
  {
    title: "Informasi & Kontak",
    links: [
      { label: "Konsultasi Member", href: "https://member.jaribakat.com/login", external: true },
      { label: "Hubungi Customer Support", href: "https://wa.me/6285196235285", external: true },
    ],
  },
];

import RunningTextBanner from "@/components/RunningTextBanner";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ProgramsSection from "@/components/ProgramsSection";
import USPSection from "@/components/USPSection";
import TopicsSection from "@/components/TopicsSection";
import CTACommunitySection from "@/components/CTACommunitySection";
import FloatingButtons from "@/components/FloatingButtons";
import MobileBottomNav from "@/components/MobileBottomNav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-[#CCFBF1] selection:text-[#0D9488]">
      {/* Sticky Top Banner & Navbar */}
      <header className="sticky top-0 z-[1045] w-full bg-white shadow-xs">
        <RunningTextBanner />
        <Navbar />
      </header>

      {/* Main Page Content */}
      <main className="flex-1 space-y-16 md:space-y-24 pb-24 lg:pb-16">
        {/* Full-width Hero Carousel */}
        <section className="w-full">
          <HeroCarousel />
        </section>

        {/* Programs Section */}
        <section className="container-lg">
          <ProgramsSection />
        </section>

        {/* USP Section */}
        <section className="container-lg py-8">
          <USPSection />
        </section>

        {/* Topics Section */}
        <section className="w-full">
          <TopicsSection />
        </section>

        {/* Community CTA Section */}
        <section className="container-lg pt-8">
          <CTACommunitySection />
        </section>
      </main>

      {/* Floating Action Buttons (WhatsApp & Event Ticket) */}
      <FloatingButtons />

      {/* Mobile Bottom Navigation Bar (5 tabs) */}
      <MobileBottomNav />

      {/* Footer */}
      <Footer />
    </div>
  );
}

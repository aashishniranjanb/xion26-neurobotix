import HeroSection from "@/components/HeroSection";
import Countdown from "@/components/CountDown";
import AboutSection from "@/components/AboutSection";
import StatsGrid from "@/components/StatsGrid";
import EventMatrix from "@/components/EventMatrix";
import SponsorsSection from "@/components/SponsorsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black-core animate-viscosity overflow-hidden">
      <HeroSection />
      <Countdown />
      <AboutSection />
      <StatsGrid />
      <EventMatrix />
      <SponsorsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
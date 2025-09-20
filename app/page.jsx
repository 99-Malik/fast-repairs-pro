import Image from "next/image";
import ModernHeader from "@/components/headers/ModernHeader";
import HeroSection from "@/components/sections/home/HeroSection";
import FeaturesSection from "@/components/sections/home/FeaturesSection";
import AboutUsSection from "@/components/sections/home/AboutUsSection";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import ContactSection from "@/components/sections/home/ContactSection";
import ModernFooter from "@/components/sections/home/ModernFooter";
import FloatingActionButtons from "@/components/buttons/FloatingActionButtons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-x-hidden">
      <ModernHeader />
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <FeaturesSection />
        <ServicesGrid />
      </section>
      <section id="about">
        <AboutUsSection />
        <TestimonialsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <ModernFooter />
      <FloatingActionButtons />
    </div>
  );
}

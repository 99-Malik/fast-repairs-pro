import TechFixHeader from "@/components/headers/TechFixHeader";
import TechFixHero from "@/components/sections/TechFixHero";
import TechFixServices from "@/components/sections/TechFixServices";
import TechFixAbout from "@/components/sections/TechFixAbout";
import TechFixTestimonials from "@/components/sections/TechFixTestimonials";
import TechFixContact from "@/components/sections/TechFixContact";
import TechFixFooter from "@/components/sections/TechFixFooter";
import TechFixFloatingButtons from "@/components/buttons/TechFixFloatingButtons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-x-hidden">
      <TechFixHeader />
      
      <main>
        <section id="home">
          <TechFixHero />
        </section>
        
        <section id="services">
          <TechFixServices />
        </section>
        
        <section id="about">
          <TechFixAbout />
        </section>
        
        <section id="testimonials">
          <TechFixTestimonials />
        </section>
        
        <section id="contact">
          <TechFixContact />
        </section>
      </main>
      
      <TechFixFooter />
      <TechFixFloatingButtons />
    </div>
  );
}
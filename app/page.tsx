import { Preloader } from "@/components/preloader";
import { CustomCursor } from "@/components/custom-cursor";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Preloader />
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

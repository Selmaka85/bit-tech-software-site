import { AboutSection } from "@/components/AboutSection";
import { CareSection } from "@/components/CareSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PricingSection } from "@/components/PricingSection";
import { ScopeSection } from "@/components/ScopeSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StackSection } from "@/components/StackSection";
import { WorkSection } from "@/components/WorkSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <WorkSection />
        <ServicesSection />
        <StackSection />
        <CareSection />
        <ScopeSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

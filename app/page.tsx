import type { Metadata } from "next";
import { AiDiscipline } from "@/components/AiDiscipline";
import { AboutSection } from "@/components/AboutSection";
import { CareSection } from "@/components/CareSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NocturneChallengePanel } from "@/components/NocturneChallengePanel";
import { PricingSection } from "@/components/PricingSection";
import { ScopeSection } from "@/components/ScopeSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StackSection } from "@/components/StackSection";
import { WorkSection } from "@/components/WorkSection";
import { homeSeo } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: homeSeo.metaTitle,
  description: homeSeo.metaDescription,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: homeSeo.metaTitle,
    description: homeSeo.metaDescription,
    url: siteConfig.url,
    siteName: siteConfig.brand,
    locale: "en_GB",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NocturneChallengePanel />
        <AboutSection />
        <WorkSection />
        <ServicesSection />
        <AiDiscipline />
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

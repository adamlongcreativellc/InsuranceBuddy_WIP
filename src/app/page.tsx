import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import StaggeredPhoneShowcase from "@/components/landing/StaggeredPhoneShowcase";
import CTASection from "@/components/landing/CTASection";
import LifeProgressionStory from "@/components/landing/LifeProgressionStory";
import DocumentOrganizationAnimation from "@/components/landing/DocumentOrganizationAnimation";
import SavingsCalculator from "@/components/landing/SavingsCalculator";
import HowItWorks from "@/components/landing/HowItWorks";
import Security from "@/components/landing/Security";
import BetaInvite from "@/components/landing/BetaInvite";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <StaggeredPhoneShowcase />
      <DocumentOrganizationAnimation />
      <LifeProgressionStory />
      <SavingsCalculator />
      <CTASection variant="compact" />
      <HowItWorks />
      <CTASection variant="default" />
      <Security />
      <BetaInvite />
      <FAQ />
      <Footer />
    </>
  );
}


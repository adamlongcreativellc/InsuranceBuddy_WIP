import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ValueProps from "@/components/landing/ValueProps";
import CTASection from "@/components/landing/CTASection";
import StephensStory from "@/components/landing/StephensStory";
import DocumentOrganizationAnimation from "@/components/landing/DocumentOrganizationAnimation";
import SavingsCalculator from "@/components/landing/SavingsCalculator";
import InsuranceTypes from "@/components/landing/InsuranceTypes";
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
      <ValueProps />
      <DocumentOrganizationAnimation />
      <StephensStory />
      <SavingsCalculator />
      <CTASection variant="compact" />
      <InsuranceTypes />
      <HowItWorks />
      <CTASection variant="compact" />
      <Security />
      <BetaInvite />
      <FAQ />
      <Footer />
    </>
  );
}


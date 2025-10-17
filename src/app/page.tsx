import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ValueProps from "@/components/landing/ValueProps";
import CTASection from "@/components/landing/CTASection";
import StephensStory from "@/components/landing/StephensStory";
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
      <CTASection variant="compact" />
      <StephensStory />
      <CTASection variant="default" />
      <HowItWorks />
      <CTASection variant="compact" />
      <Security />
      <BetaInvite />
      <FAQ />
      <Footer />
    </>
  );
}

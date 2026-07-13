import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import AboutSection from "@/components/landing/AboutSection";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import WorkflowSection from "@/components/landing/WorkflowSection";
import FleetPreview from "@/components/landing/FleetPreview";
import TestimonialsSection from "@/components/landing/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <WhyChooseUs />
      <WorkflowSection />
      <FleetPreview />
      <TestimonialsSection />
    </>
  );
}
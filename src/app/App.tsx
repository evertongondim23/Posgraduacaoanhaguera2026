import { HeroSection } from "./components/HeroSection";
import { WhySection } from "./components/WhySection";
import { DifferentialSection } from "./components/DifferentialSection";
import { ProfessorsSection } from "./components/ProfessorsSection";
import { VideoSection } from "./components/VideoSection";
import { ProgramSection } from "./components/ProgramSection";
import { CtaSection } from "./components/CtaSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ProgressBar } from "./components/ProgressBar";
import { Header } from "./components/Header";
import { MecBadge } from "./components/MecBadge";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ProgressBar />
      <Header />
      <HeroSection />
      <MecBadge />
      <WhySection />
      <DifferentialSection />
      <ProfessorsSection />
      <VideoSection
        videoUrl="https://youtu.be/gFkmUL-Yv9s?si=Y2TllXPpvf46v4u7"
        title="Conheça Nossa Pós-Graduação"
        description="Assista ao vídeo e descubra como este curso pode transformar sua jornada acadêmica e espiritual."
      />
      <ProgramSection />
      <CtaSection />
      <FaqSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
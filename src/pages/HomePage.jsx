import HeroSection from "../sections/HeroSection.jsx";
import ProcessSection from "../sections/ProcessSection.jsx";
import ProjectsShowcase from "../sections/ProjectsShowcase.jsx";
import TestimonialsPreview from "../sections/TestimonialsPreview.jsx";
import LogosSection from "../sections/LogosSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProcessSection />
      <ProjectsShowcase />
      <TestimonialsPreview />
      <LogosSection />
      <ContactSection />
    </>
  );
}

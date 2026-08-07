import Hero from '../components/Hero';
import ClientsSection from '../components/ClientsSection';
import PortfolioSection from '../components/PortfolioSection';
import AboutSection from '../components/AboutSection';
import ValuePropSection from '../components/ValuePropSection';
import ProcessSection from '../components/ProcessSection';
import FaqSection from '../components/FaqSection';
import VideoShowcase from '../components/VideoShowcase';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage({ onOpenLightbox }) {
  return (
    <>
      <Hero onOpenLightbox={onOpenLightbox} />
      <ClientsSection />
      <PortfolioSection onThumbnailClick={onOpenLightbox} />
      <AboutSection />
      <ValuePropSection />
      <ProcessSection />
      <FaqSection />
      <VideoShowcase />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

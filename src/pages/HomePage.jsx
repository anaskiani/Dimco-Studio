import Hero from '../components/Hero';
import PortfolioSection from '../components/PortfolioSection';
import ClientsSection from '../components/ClientsSection';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage({ onOpenLightbox }) {
  return (
    <>
      <Hero onOpenLightbox={onOpenLightbox} />
      <PortfolioSection onThumbnailClick={onOpenLightbox} />
      <ClientsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </>
  );
}

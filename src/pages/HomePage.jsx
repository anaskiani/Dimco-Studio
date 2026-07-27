import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import PortfolioSection from '../components/PortfolioSection';
import ClientsSection from '../components/ClientsSection';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage({ onOpenLightbox }) {
  return (
    <>
      <Hero />
      <PortfolioSection onThumbnailClick={onOpenLightbox} />
      <ClientsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </>
  );
}

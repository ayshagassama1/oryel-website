import { useState } from 'react';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DemosSection from '../components/DemosSection';
import ProcessSection from '../components/ProcessSection';
import ParcoursSection from '../components/ParcoursSection';
import ServicesSection from '../components/ServicesSection';
import PagesSection from '../components/PagesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

export default function Home() {
  const [preselectedService, setPreselectedService] = useState('');

  const handleWantSameSite = (service) => {
    setPreselectedService(service);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Seo
        path="/"
        title="Création de site internet et chatbot IA à Metz | Oryel dev"
        description="Développeur freelance à Metz. Sites internet et assistants IA pour indépendants, commerces et hébergeurs en Moselle, Grand Est et Luxembourg. Devis sous 48 h."
      />

      <div className="font-inter">
        <Navbar />
        <HeroSection />
        <DemosSection onWantSameSite={handleWantSameSite} />
        <ProcessSection />
        <ParcoursSection />
        <ServicesSection onWantSameSite={handleWantSameSite} />
        <PagesSection />
        <ContactSection preselectedService={preselectedService} />
        <Footer />
        <ChatBot />
      </div>
    </>
  );
}
import { useState } from 'react';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DemosSection from '../components/DemosSection';
import ProcessSection from '../components/ProcessSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
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
        title="Création de site internet et chatbot IA à Metz | Oryel"
        description="Développeur freelance à Metz. Sites internet et assistants IA pour indépendants, commerces et hébergeurs en Moselle, Grand Est et Luxembourg. Devis sous 48 h."
      />

      <div className="font-inter">
        <Navbar />
        <HeroSection />
        <DemosSection onWantSameSite={handleWantSameSite} />
        <ProcessSection />
        <ServicesSection onWantSameSite={handleWantSameSite} />
        <AboutSection />
        <ContactSection preselectedService={preselectedService} />
        <Footer />
        <ChatBot />
      </div>
    </>
  );
}
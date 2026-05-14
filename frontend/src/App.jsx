import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DemosSection from './components/DemosSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import MentionsLegales from './pages/MentionsLegales';
import ProcessSection from './components/ProcessSection';

function Home() {
  const [preselectedService, setPreselectedService] = useState('');

  const handleWantSameSite = (service) => {
    setPreselectedService(service);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
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
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
    </Routes>
  );
}

export default App;
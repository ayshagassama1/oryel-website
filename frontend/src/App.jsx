import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DemosSection from './components/DemosSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
 
function App() {
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
      <ServicesSection />
      <AboutSection />
      <ContactSection preselectedService={preselectedService} />
      <Footer />
      <ChatBot />
    </div>
  );
}
 
export default App;

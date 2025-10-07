import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DemosSection from './components/DemosSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
 
function App() {
  const [, setPreselectedService] = useState('');
 
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
    </div>
  );
}
 
export default App;

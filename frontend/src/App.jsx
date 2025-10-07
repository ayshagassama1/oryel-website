import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
 
function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </div>
  );
}
 
export default App;

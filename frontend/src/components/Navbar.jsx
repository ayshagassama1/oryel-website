import { useState, useEffect } from 'react';
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };
 
  const navItems = [
    { label: 'Demos', id: 'demos' },
    { label: 'Services', id: 'services' },
    { label: 'À propos', id: 'apropos' },
    { label: 'Contact', id: 'contact' },
  ];
 
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="font-bold text-xl tracking-tight text-gray-900"
        >
          Ory<span className="text-teal-600">el</span>
        </button>
 
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://calendly.com/ndeye-aissatou-gassama-sn/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Prendre rendez-vous
          </a>
        </div>
 
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-current transition-all ${
                menuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all ${
                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </div>
        </button>
      </div>
 
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors py-1"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://calendly.com/ndeye-aissatou-gassama-sn/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 text-white text-sm font-medium px-4 py-2 rounded-lg text-center"
          >
            Prendre rendez-vous
          </a>
        </div>
      )}
    </nav>
  );
}

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Items avec `id` : section de la home, defilement en douceur.
// Items avec `path` : page dediee, lien normal, pas de scrollspy.
const navItems = [
  { label: 'Démos', id: 'demos' },
  { label: 'Services', id: 'services' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy : la section active est celle qui traverse une bande
  // située dans le tiers haut de l'écran. N'a de sens que sur la home,
  // et seulement pour les items ancrés a une section (id), pas pour les
  // items qui pointent vers une page dediee (path).
  useEffect(() => {
    if (!isHome) return;

    const sections = navItems
      .filter((item) => item.id)
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  // Sur la home, les liens ancres defilent vers la section. Sur les autres
  // pages (qui ne contiennent pas ces ancres), on laisse le lien naviguer
  // normalement vers /#section : le navigateur gere le saut d'ancre une
  // fois la home chargee.
  const handleNavClick = (e, id) => {
    if (!isHome) return;
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const hrefFor = (item) => {
    if (item.path) return item.path;
    return isHome ? `#${item.id}` : `/#${item.id}`;
  };

  const isActive = (item) => (item.path ? location.pathname === item.path : activeSection === item.id);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href={isHome ? '#hero' : '/'}
          onClick={(e) => handleNavClick(e, 'hero')}
          className="font-bold text-2xl tracking-tight text-gray-900"
        >
          Ory<span className="text-teal-600">el</span> dev
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id || item.path}
              href={hrefFor(item)}
              onClick={item.id ? (e) => handleNavClick(e, item.id) : undefined}
              aria-current={isActive(item) ? 'true' : undefined}
              className={`text-base font-medium transition-colors ${
                isActive(item) ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              {item.label}
            </a>
          ))}

          <a  href="https://calendly.com/ndeye-aissatou-gassama-sn/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 hover:bg-teal-700 text-white text-base font-medium px-4 py-2 rounded-lg transition-colors"
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
            <a
              key={item.id || item.path}
              href={hrefFor(item)}
              onClick={item.id ? (e) => handleNavClick(e, item.id) : undefined}
              aria-current={isActive(item) ? 'true' : undefined}
              className={`text-left text-sm font-medium py-1 transition-colors ${
                isActive(item) ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              {item.label}
            </a>
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

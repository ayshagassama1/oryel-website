import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Github } from 'lucide-react';

const navLinks = [
  { label: 'Démos', id: 'demos' },
  { label: 'Services', id: 'services' },
  { label: 'À propos', id: 'apropos' },
  { label: 'Contact', id: 'contact' },
];

const pageLinks = [
  { label: 'Sophrologues', path: '/site-internet-sophrologue' },
  { label: 'Gîtes & chambres d\'hôtes', path: '/site-internet-gite-chambre-hotes' },
  { label: 'Chatbot IA', path: '/chatbot-ia-site-web' },
  { label: 'Metz', path: '/creation-site-internet-metz' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const isHome = useLocation().pathname === '/';

  // Sur la home, les liens defilent vers la section. Ailleurs (pages qui ne
  // contiennent pas ces ancres), on laisse le lien naviguer vers /#section.
  const scrollTo = (e, id) => {
    if (!isHome) return;
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center mb-8">
          <div>
            <div className="font-bold text-lg text-white mb-1">
              Ory<span className="text-teal-400">el</span>
            </div>
            <p className="text-sm">© {year} Oryel, N. Aissatou Gassama</p>
            <p className="text-sm">Dev Fullstack & IA</p>
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={isHome ? `#${item.id}` : `/#${item.id}`}
                onClick={(e) => scrollTo(e, item.id)}
                className="text-sm hover:text-teal-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            {pageLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm hover:text-teal-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex justify-start sm:justify-end gap-3">
            <a
              href="https://linkedin.com/in/ndeye-aissatou-gassama"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-teal-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.malt.fr/profile/ndeyeaissatougassama"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-teal-400 transition-colors font-bold text-sm flex items-center"
              aria-label="Malt"
            >
              M
            </a>
            <a
              href="https://github.com/ayshagassama1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-teal-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">
            SIREN 982 878 449 · Code APE : 6201Z - Programmation informatique | 31 Rue Saint-Pierre, 57000 Metz, France
          </p>
          <Link
            to="/mentions-legales"
            className="text-xs text-gray-600 hover:text-teal-400 transition-colors"
          >
            Mentions légales & confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
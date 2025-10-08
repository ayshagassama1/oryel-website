import { Linkedin, Github } from 'lucide-react';
 
const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
 
const navLinks = [
  { label: 'Démos', id: 'demos' },
  { label: 'Services', id: 'services' },
  { label: 'À propos', id: 'apropos' },
  { label: 'Contact', id: 'contact' },
];
 
export default function Footer() {
  const year = new Date().getFullYear();
 
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center mb-8">
          <div>
            <div className="font-bold text-lg text-white mb-1">
              Ory<span className="text-teal-400">el</span>
            </div>
            <p className="text-sm">© {year} Oryel, Aissatou Gassama</p>
            <p className="text-sm">Dev Fullstack & IA</p>
          </div>
 
          <div className="flex justify-center gap-6 flex-wrap">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm hover:text-teal-400 transition-colors"
              >
                {item.label}
              </button>
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
 
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-600">
            SIREN 982 878 449 | 31 RUE Saint-Pierre 57000 Metz FRANCE
          </p>
        </div>
      </div>
    </footer>
  );
}

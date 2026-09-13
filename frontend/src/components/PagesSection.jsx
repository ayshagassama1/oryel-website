import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

const pages = [
  {
    label: 'Site internet pour sophrologue',
    path: '/site-internet-sophrologue',
    description: 'Questions récurrentes en séance, avant et après un rendez-vous.',
  },
  {
    label: "Site internet pour gîte et chambre d'hôtes",
    path: '/site-internet-gite-chambre-hotes',
    description: 'Réservation directe plutôt que commission Booking ou Airbnb.',
  },
  {
    label: 'Chatbot IA pour site web',
    path: '/chatbot-ia-site-web',
    description: "Ajouté à un site existant ou construit avec un nouveau site.",
  },
  {
    label: 'Création de site internet à Metz',
    path: '/creation-site-internet-metz',
    description: 'Développeur basé à Metz, pour les indépendants et commerces du Grand Est.',
  },
  {
    label: 'Création de site internet au Luxembourg',
    path: '/creation-site-internet-luxembourg',
    description: 'Tarifs français, à une heure de route, pour les entreprises luxembourgeoises.',
  },
];

export default function PagesSection() {
  const ref = useScrollAnimate();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="scroll-animate mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Selon votre situation
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Chaque page détaille les questions propres à un métier ou un marché précis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page) => (
            <a
              key={page.path}
              href={page.path}
              className="group flex flex-col justify-between gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{page.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{page.description}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600">
                Lire la page
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

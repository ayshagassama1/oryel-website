import { useScrollAnimate } from '../hooks/useScrollAnimate';
import { ArrowUpRight } from 'lucide-react';

const clientDemos = [
  {
    title: 'Le Botaniste',
    type: 'Restaurant',
    description:
      "Menu interactif, réservation en ligne et chatbot intégré. Pendant le service, quand le téléphone sonne et que personne ne peut décrocher, le site prend le relais.",
    url: 'https://restaurant.oryel.dev',
    screenshot: '/screenshots/restaurant.webp',
    screenshotAlt: "Page d'accueil du Botaniste, restaurant fictif à Metz",
    accentColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    bgColor: 'bg-orange-50',
  },
  {
    title: 'Atelier Lumina',
    type: 'Boutique locale',
    description:
      "Catalogue produits et assistant IA qui joue le rôle de conseiller : il pose des questions, comprend ce que cherche le visiteur et l'oriente vers le bon produit.",
    url: 'https://boutique.oryel.dev',
    screenshot: '/screenshots/boutique.webp',
    screenshotAlt: "Page d'accueil de l'Atelier Lumina, bijouterie artisanale fictive",
    accentColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    bgColor: 'bg-violet-50',
  },
  {
    title: 'Cabinet Équilibre',
    type: 'Cabinet kiné',
    description:
      "Site éditorial pour un cabinet de kinésithérapie. L'assistant IA répond aux questions courantes (tarifs, soins, prise de rendez-vous) sans jamais substituer l'avis de la praticienne.",
    url: 'https://cabinet.oryel.dev',
    screenshot: '/screenshots/cabinet.webp',
    screenshotAlt: "Page d'accueil du Cabinet Équilibre, cabinet de kinésithérapie fictif",
    accentColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    bgColor: 'bg-teal-50',
  },
  {
    title: 'Le clos des Mirabelles',
    type: 'Gîte',
    description:
      "Site de réservation directe pour un gîte, avec assistant IA multilingue. Il répond aux questions des voyageurs avant la réservation, à toute heure, sans remplacer l'accueil du propriétaire.",
    url: 'https://gite.oryel.dev',
    screenshot: '/screenshots/gite.webp',
    screenshotAlt: "Page d'accueil du Clos des Mirabelles, gîte fictif",
    accentColor: 'text-rose-600',
    borderColor: 'border-rose-200',
    bgColor: 'bg-rose-50',
  },
];

function ClientDemoCard({ demo, animRef }) {
  return (
    <div
      ref={animRef}
      className="scroll-animate group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`relative ${demo.bgColor} p-4 sm:p-5 border-b ${demo.borderColor}`}>
        {/* Faux navigateur minimaliste */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          {/* Barre navigateur */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 border-b border-gray-200">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className={`ml-2 text-[10px] font-medium ${demo.accentColor} truncate`}>
              {demo.url.replace('https://', '')}
            </span>
          </div>
          {/* Capture du site */}
          <img
            src={demo.screenshot}
            alt={demo.screenshotAlt}
            width="2880"
            height="1800"
            loading="lazy"
            className="w-full aspect-[16/10] object-cover object-top"
          />
        </div>
      </div>

      {/* Contenu */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold uppercase tracking-wide ${demo.accentColor}`}>
            {demo.type}
          </span>
          <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full font-medium">
            Vitrine + IA
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">{demo.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{demo.description}</p>

        <div className="flex gap-3 mt-6">
          <a
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-sm font-semibold ${demo.accentColor} hover:underline underline-offset-2`}
          >
            Voir la démo
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function DemosSection({ onWantSameSite }) {
  const titleRef = useScrollAnimate();

  const demo0Ref = useScrollAnimate(100);
  const demo1Ref = useScrollAnimate(200);
  const demo2Ref = useScrollAnimate(300);
  const demo3Ref = useScrollAnimate(400);
  const demoRefs = [demo0Ref, demo1Ref, demo2Ref, demo3Ref];


  return (
    <section id="demos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div ref={titleRef} className="scroll-animate mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-3 block">
            Démos interactives
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Sites vitrine avec chatbot IA
          </h2>
          <p className="text-gray-500 max-w-xl">
            Quatre sites fonctionnels, avec chatbot IA. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {clientDemos.map((demo, i) => (
            <ClientDemoCard key={i} demo={demo} animRef={demoRefs[i]} />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => onWantSameSite?.('Vitrine + IA')}
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-teal-100 hover:-translate-y-0.5 text-sm"
          >
            Je veux un site comme ça pour mon activité
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
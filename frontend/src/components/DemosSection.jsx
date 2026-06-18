import { useScrollAnimate } from '../hooks/useScrollAnimate';
import { ExternalLink, Utensils, ShoppingBag, Stethoscope, Globe, QrCode, ArrowUpRight } from 'lucide-react';

// ─── Démos clients ────────────────────────────────────────────────────────────
const clientDemos = [
  {
    icon: Utensils,
    title: 'Le Botaniste',
    type: 'Restaurant',
    description:
      "Menu interactif, réservation en ligne et chatbot intégré. Pendant le service, quand le téléphone sonne et que personne ne peut décrocher, le site prend le relais.",
    url: 'https://restaurant.oryel.dev',
    screenshot: 'https://shots.so/api/screenshot?url=https://restaurant.oryel.dev&width=1280&height=800',
    accentColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    bgColor: 'bg-orange-50',
  },
  {
    icon: ShoppingBag,
    title: 'Atelier Lumière',
    type: 'Boutique locale',
    description:
      "Catalogue produits et assistant IA qui joue le rôle de conseiller : il pose des questions, comprend ce que cherche le visiteur et l'oriente vers le bon produit.",
    url: 'https://boutique.oryel.dev',
    screenshot: 'https://shots.so/api/screenshot?url=https://boutique.oryel.dev&width=1280&height=800',
    accentColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    bgColor: 'bg-violet-50',
  },
  {
    icon: Stethoscope,
    title: 'Cabinet Équilibre',
    type: 'Cabinet kiné',
    description:
      "Site éditorial pour un cabinet de kinésithérapie. L'assistant IA répond aux questions courantes (tarifs, soins, prise de rendez-vous) sans jamais substituer l'avis de la praticienne.",
    url: 'https://cabinet.oryel.dev',
    screenshot: 'https://shots.so/api/screenshot?url=https://cabinet.oryel.dev&width=1280&height=800',
    accentColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    bgColor: 'bg-teal-50',
  },
];

// ─── Autres projets ───────────────────────────────────────────────────────────
const otherProjects = [
  {
    icon: Globe,
    title: 'SunuConseil',
    type: 'Site vitrine corporate',
    badge: null,
    description:
      "Vitrine et back-office d'un cabinet de conseil IT fondé à Dakar. Authentification, dashboard admin, gestion de blog et d'équipe. Stack Laravel · Vue.js · MySQL · AWS.",
    url: 'https://sunuconseil.com',
    accentColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    bgColor: 'bg-orange-50',
  },
  {
    icon: QrCode,
    title: 'SunuMenu',
    type: 'SaaS · Menu digital QR',
    badge: 'En cours',
    description:
      "Digitalise la carte d'un restaurant en quelques heures : un QR code par table, les plats en photos sur le téléphone du client, un dashboard pour tout gérer. V1 live, commande et paiement en cours de développement.",
    url: 'https://sunumenu.sunuconseil.com',
    accentColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    bgColor: 'bg-teal-50',
  },
];

// ─── Sous-composants ──────────────────────────────────────────────────────────

function ClientDemoCard({ demo, animRef }) {
  const Icon = demo.icon;
  return (
    <div
      ref={animRef}
      className="scroll-animate group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Preview visuelle */}
      <div className={`relative ${demo.bgColor} h-44 overflow-hidden flex items-center justify-center border-b ${demo.borderColor}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Faux navigateur minimaliste */}
          <div className="w-[88%] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            {/* Barre navigateur */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 border-b border-gray-200">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className={`ml-2 text-[10px] font-medium ${demo.accentColor} truncate`}>
                {demo.url.replace('https://', '')}
              </span>
            </div>
            {/* Zone screenshot placeholder avec icône */}
            <div className={`h-24 ${demo.bgColor} flex items-center justify-center`}>
              <Icon className={`w-10 h-10 ${demo.accentColor} opacity-30`} />
            </div>
          </div>
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

function OtherProjectCard({ project, animRef }) {
  const Icon = project.icon;
  return (
    <div
      ref={animRef}
      className="scroll-animate group flex flex-col bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`${project.bgColor} p-2.5 rounded-xl`}>
          <Icon className={`w-5 h-5 ${project.accentColor}`} />
        </div>
        {project.badge && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {project.badge}
          </span>
        )}
      </div>

      <div className="mb-1">
        <span className={`text-xs font-semibold uppercase tracking-wide ${project.accentColor}`}>
          {project.type}
        </span>
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed flex-1">{project.description}</p>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
      >
        Voir le projet
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}


export default function DemosSection({ onWantSameSite }) {
  const titleRef = useScrollAnimate();
  const subTitleRef = useScrollAnimate();

  const demo0Ref = useScrollAnimate(100);
  const demo1Ref = useScrollAnimate(200);
  const demo2Ref = useScrollAnimate(300);
  const demoRefs = [demo0Ref, demo1Ref, demo2Ref];

  const proj0Ref = useScrollAnimate(100);
  const proj1Ref = useScrollAnimate(200);
  const projRefs = [proj0Ref, proj1Ref];

  return (
    <section id="demos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Démos clients ── */}
        <div ref={titleRef} className="scroll-animate mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-3 block">
            Démos interactives
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Sites vitrine avec chatbot IA
          </h2>
          <p className="text-gray-500 max-w-xl">
            Trois sites fonctionnels, avec chatbot IA. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {clientDemos.map((demo, i) => (
            <ClientDemoCard key={i} demo={demo} animRef={demoRefs[i]} />
          ))}
        </div>

        {/* CTA "Je veux le même" sous les démos */}
        <div className="flex justify-center mb-20">
          <button
            onClick={() => onWantSameSite?.('Vitrine + IA')}
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-teal-100 hover:-translate-y-0.5 text-sm"
          >
            Je veux un site comme ça pour mon activité
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* ── Autres projets ── */}
        <div ref={subTitleRef} className="scroll-animate mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gray-100" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">
              Autres projets
            </span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
          <p className="text-gray-500 text-sm max-w-lg">
            En dehors des missions client, je construis des produits. Deux projets en cours avec SunuConseil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {otherProjects.map((project, i) => (
            <OtherProjectCard key={i} project={project} animRef={projRefs[i]} />
          ))}
        </div>

      </div>
    </section>
  );
}
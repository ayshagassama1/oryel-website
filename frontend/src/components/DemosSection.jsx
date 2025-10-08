import { useScrollAnimate } from '../hooks/useScrollAnimate';
import { Utensils, ShoppingBag, ExternalLink, Sparkles } from 'lucide-react';
 
const demos = [
  {
    icon: Utensils,
    title: 'Site de Restaurant',
    service: 'Vitrine + IA',
    description:
      "Un site avec menu interactif, réservation en ligne et un chatbot qui répond aux questions de vos clients. Horaires, plat du jour, allergènes... il gère.",
    url: 'https://restaurant.oryel.dev',
    tag: 'Vitrine + IA',
    color: 'from-orange-50 to-amber-50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    icon: ShoppingBag,
    title: 'Boutique Locale',
    service: 'Vitrine + IA',
    description:
      "Un site vitrine pour votre commerce avec catalogue produits, un assistant IA pour aider les visiteurs, et du click & collect.",
    url: 'https://boutique.oryel.dev',
    tag: 'Vitrine + IA',
    color: 'from-violet-50 to-purple-50',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
  },
];
 
export default function DemosSection({ onWantSameSite }) {
  const ref = useScrollAnimate();
  const card0Ref = useScrollAnimate(100);
  const card1Ref = useScrollAnimate(250);
  const cardRefs = [card0Ref, card1Ref];
 
  return (
    <section id="demos" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="scroll-animate text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Testez avant de choisir
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Des sites fonctionnels que vous pouvez tester. Imaginez le même
            pour votre activité.
          </p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {demos.map((demo, i) => {
            const Icon = demo.icon;
            const cardRef = cardRefs[i];
            return (
              <div
                key={i}
                ref={cardRef}
                className={`scroll-animate group bg-gradient-to-br ${demo.color} border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`${demo.iconBg} p-3 rounded-xl`}>
                    <Icon className={`w-6 h-6 ${demo.iconColor}`} />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    {demo.tag}
                  </span>
                </div>
 
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {demo.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {demo.description}
                </p>
 
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-teal-300 hover:text-teal-600 text-gray-700 font-medium px-5 py-2.5 rounded-lg transition-all duration-200 text-sm group-hover:shadow-sm"
                  >
                    Tester la démo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => onWantSameSite?.(demo.service)}
                    className="inline-flex items-center justify-center gap-2 border border-teal-500 text-teal-600 hover:bg-teal-50 font-medium px-5 py-2.5 rounded-lg transition-all duration-200 text-sm"
                  >
                    Je veux le même site
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

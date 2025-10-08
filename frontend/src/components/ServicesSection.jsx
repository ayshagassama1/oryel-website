import { Globe, MessageSquare, Settings, Check, Star } from 'lucide-react';
import { useScrollAnimate } from '../hooks/useScrollAnimate';
 
const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
 
const tiers = [
  {
    icon: Globe,
    title: 'Vitrine Moderne',
    price: '1 200 € - 1 800 €',
    delay: 'Livré en 1 à 2 semaines',
    recommended: false,
    items: [
      'Site responsive de 5 à 7 pages',
      'Design sur mesure pour votre activité',
      'Formulaire de contact',
      'Google Maps et horaires intégrés',
      'SEO local (fiche Google Business, balises, vitesse)',
      'Hébergement + nom de domaine (1ère année incluse)',
    ],
    cta: 'En savoir plus',
  },
  {
    icon: MessageSquare,
    title: 'Vitrine + Assistant IA',
    price: '2 500 € - 3 500 €',
    delay: 'Livré en 2 à 3 semaines',
    recommended: true,
    items: [
      'Tout ce qui est dans la Vitrine Moderne',
      'Chatbot IA entraîné sur vos données (menu, horaires, services, FAQ)',
      'Répond à vos clients 24h/24',
      'Prise de réservation automatique',
      'Formation pour mettre à jour le chatbot vous-même',
    ],
    cta: 'En savoir plus',
  },
  {
    icon: Settings,
    title: 'Sur Mesure',
    price: 'À partir de 3 500 €',
    delay: 'Délai selon le projet',
    recommended: false,
    items: [
      'Intégration avec vos outils existants (caisse, planning, CRM)',
      'Automatisations spécifiques à votre métier',
      'Dashboard analytique',
      'Commande en ligne ou click & collect',
      'Tout le reste, on en discute',
    ],
    cta: 'Demander un devis',
  },
];
 
export default function ServicesSection() {
  const ref = useScrollAnimate();

  const card0Ref = useScrollAnimate(100);
  const card1Ref = useScrollAnimate(200);
  const card2Ref = useScrollAnimate(300);
  const cardRefs = [card0Ref, card1Ref, card2Ref];
 
  return (
    <section id="services" className="py-16 bg-gray-50/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="scroll-animate text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Combien ça coûte
          </h2>
          <p className="text-lg text-gray-500">
            Trois formules. Pas de surprise.
          </p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            const cardRef = cardRefs[i];
            return (
              <div
                key={i}
                ref={cardRef}
                className={`scroll-animate relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                  tier.recommended
                    ? 'bg-teal-600 text-white shadow-2xl shadow-teal-200'
                    : 'bg-white border border-gray-100 shadow-sm hover:shadow-lg'
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                      <Star className="w-3 h-3 fill-current" />
                      Recommandé
                    </span>
                  </div>
                )}
 
                <div
                  className={`inline-flex p-3 rounded-xl mb-5 w-fit ${
                    tier.recommended ? 'bg-white/20' : 'bg-teal-50'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      tier.recommended ? 'text-white' : 'text-teal-600'
                    }`}
                  />
                </div>
 
                <h3
                  className={`text-lg font-bold mb-1 ${
                    tier.recommended ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {tier.title}
                </h3>
                <p
                  className={`text-2xl font-bold ${
                    tier.recommended ? 'text-teal-100' : 'text-teal-600'
                  }`}
                >
                  {tier.price}
                </p>
                <p
                  className={`text-xs mb-6 mt-1 ${
                    tier.recommended ? 'text-teal-200' : 'text-gray-400'
                  }`}
                >
                  {tier.delay}
                </p>
 
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          tier.recommended ? 'text-teal-200' : 'text-teal-500'
                        }`}
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          tier.recommended ? 'text-teal-50' : 'text-gray-600'
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
 
                <button
                  onClick={() => scrollTo('contact')}
                  className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    tier.recommended
                      ? 'bg-white text-teal-600 hover:bg-teal-50'
                      : 'bg-teal-600 text-white hover:bg-teal-700'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

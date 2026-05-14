import { useScrollAnimate } from '../hooks/useScrollAnimate';
import { MessageCircle, PenLine, HeartHandshake, Code } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'On se parle',
    description:
      'Un appel de 30 minutes pour comprendre votre activité, vos contraintes et ce que vous voulez vraiment. Pas de jargon technique, juste une conversation.',
    duration: '30 min · gratuit',
  },
  {
    icon: PenLine,
    number: '02',
    title: 'Je vous propose quelque chose de concret',
    description:
      'Maquette, fonctionnalités, délai, prix. Vous savez exactement ce que vous allez recevoir avant de signer quoi que ce soit.',
    duration: '2 à 3 jours',
  },
  {
    icon: Code,
    number: '03',
    title: 'Je développe et je livre',
    description:
      'Vous suivez l\'avancement. À chaque étape clé, je vous montre le résultat et j\'intègre vos retours. Pas de mauvaise surprise à la livraison.',
    duration: '1 à 3 semaines selon la formule',
  },
  {
    icon: HeartHandshake,
    number: '04',
    title: 'Vous prenez la main',
    description:
      'Je vous forme pour que vous soyez autonome. Et si quelque chose cloche après la livraison, je suis là.',
    duration: 'Support inclus 3 mois',
  },
];

export default function ProcessSection() {
  const ref = useScrollAnimate();
  const card0Ref = useScrollAnimate(100);
  const card1Ref = useScrollAnimate(200);
  const card2Ref = useScrollAnimate(300);
  const card3Ref = useScrollAnimate(400);
  const cardRefs = [card0Ref, card1Ref, card2Ref, card3Ref];

  return (
    <section id="process" className="py-16 bg-gray-50/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="scroll-animate mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comment ça se passe
          </h2>
          <div className="w-12 h-1 bg-teal-500 rounded-full" />
          <p className="text-lg text-gray-500 mt-4 max-w-xl">
            Quatre étapes. Pas de devis qui explose, pas de délai qui se noie.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                ref={cardRefs[i]}
                className="scroll-animate bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-100 hover:shadow-sm transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-3xl font-bold text-gray-100 select-none">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto pt-2 border-t border-gray-50">
                  <span className="text-xs font-medium text-teal-600">
                    {step.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
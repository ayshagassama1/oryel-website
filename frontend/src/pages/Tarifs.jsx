import { Head } from 'vite-react-ssg';
import { Check, Star, Plus } from 'lucide-react';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import {
  tiers,
  priceNote,
  paymentSchedule,
  refonteOption,
  maintenancePlans,
} from '../components/ServicesSection';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

const faqItems = [
  {
    question: 'Pourquoi une fourchette de prix plutôt qu\'un tarif fixe ?',
    answer:
      "Deux projets dans la même formule ne demandent pas le même travail : nombre de pages, contenu déjà prêt ou à rédiger, intégrations spécifiques. Le prix exact se fixe après un premier échange, pas avant.",
  },
  {
    question: 'Le devis est-il payant ?',
    answer: 'Non, le devis est gratuit et sans engagement. Il arrive sous 48h après un premier échange sur votre projet.',
  },
  {
    question: 'Comment se passe le paiement ?',
    answer:
      "En trois fois : 30 % à la signature du devis, 40 % à la validation de la maquette, 30 % à la livraison. Vous ne réglez jamais la totalité avant d'avoir vu le site terminé.",
  },
  {
    question: 'Quels sont les délais ?',
    answer:
      "Comptez 1 à 2 semaines pour la Vitrine Moderne et 2 à 3 semaines avec l'assistant IA, à partir du moment où j'ai vos contenus (textes, photos, informations pratiques). Pour le Sur Mesure, le délai est fixé dans le devis.",
  },
  {
    question: 'Combien de modifications sont prévues ?',
    answer:
      "La maquette est validée avec vous avant le développement. Ensuite, deux séries de retours sont incluses sur le site, plus une sur l'assistant pour la formule avec IA. Une demande qui change le périmètre (nouvelle page, nouvelle fonctionnalité) fait l'objet d'un devis complémentaire, validé avant d'être réalisé.",
  },
  {
    question: 'À qui appartient le site ?',
    answer:
      "À vous. Le nom de domaine est enregistré à votre nom et le code du site vous est remis à la livraison. Vous pouvez changer de prestataire ou d'hébergeur quand vous le souhaitez, sans frais de sortie.",
  },
  {
    question: "L'hébergement et le nom de domaine sont-ils inclus ?",
    answer:
      'Pour les formules Vitrine Moderne et Vitrine + Assistant IA, oui, la première année. Pour le Sur Mesure, ça se décide selon le projet.',
  },
  {
    question: 'Y a-t-il des frais récurrents après la livraison ?',
    answer:
      "Seulement le renouvellement de l'hébergement et du nom de domaine, chaque année après la première, à un coût modeste. La maintenance mensuelle est une option, pas une obligation.",
  },
  {
    question: 'Que se passe-t-il après les trois mois de support ?',
    answer:
      "Vous choisissez. Le site reste en ligne sans abonnement. Si vous préférez que je continue à m'en occuper, la maintenance prend le relais à partir de 49 € par mois, sans engagement. Sinon, les modifications ponctuelles se font sur devis.",
  },
  {
    question: 'Puis-je commencer avec une formule et évoluer ensuite ?',
    answer:
      "Oui. Un site Vitrine Moderne peut recevoir l'assistant IA plus tard, sans repartir de zéro : c'est un ajout, pas une reconstruction.",
  },
  {
    question: "Le tarif change-t-il selon le secteur d'activité ?",
    answer:
      "Non. Le tarif dépend du travail réel : nombre de pages, contenu à rédiger, complexité de l'assistant. Un restaurant et un cabinet paient le même prix à complexité égale.",
  },
  {
    question: 'Travaillez-vous uniquement à Metz ?',
    answer:
      "Non. Tout se fait à distance, en visio ou par e-mail : je travaille avec des clients à Metz, Thionville, Nancy, au Luxembourg et ailleurs en France.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function Tarifs() {
  const heroRef = useScrollAnimate();
  const tiersRef = useScrollAnimate();
  const maintenanceRef = useScrollAnimate();
  const howRef = useScrollAnimate();
  const fitRef = useScrollAnimate();
  const faqRef = useScrollAnimate();

  return (
    <>
      <Seo
        path="/tarifs"
        title="Tarifs d'un site internet freelance | Oryel dev"
        description="Trois formules claires : vitrine, vitrine avec assistant IA, ou sur mesure. Prix, délais et contenu inclus, sans surprise. Devis gratuit sous 48h."
      />

      <Head>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>

      <div className="font-inter">
        <Navbar />

        <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-br from-teal-50/60 via-white to-gray-50/80">
          <div ref={heroRef} className="scroll-animate max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Tarifs d'un site internet freelance
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Trois formules, un prix par fourchette, sans frais cachés. Le montant exact se
              précise après un premier échange sur votre projet.
            </p>
            <a
              href="#contact"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-100 hover:-translate-y-0.5"
            >
              Demander un devis
            </a>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={tiersRef} className="scroll-animate max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {tiers.map((tier, i) => {
                const Icon = tier.icon;
                return (
                  <div
                    key={i}
                    className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col ${
                      tier.recommended
                        ? 'bg-teal-600 text-white shadow-2xl shadow-teal-200'
                        : 'bg-white border border-gray-100 shadow-sm'
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
                      <Icon className={`w-5 h-5 ${tier.recommended ? 'text-white' : 'text-teal-600'}`} />
                    </div>

                    <h2 className={`text-lg font-bold mb-1 ${tier.recommended ? 'text-white' : 'text-gray-900'}`}>
                      {tier.title}
                    </h2>
                    <p className={`text-2xl font-bold ${tier.recommended ? 'text-teal-100' : 'text-teal-600'}`}>
                      {tier.price}
                    </p>
                    <p className={`text-xs mb-6 mt-1 ${tier.recommended ? 'text-teal-200' : 'text-gray-400'}`}>
                      {tier.delay}
                    </p>

                    <dl
                      className={`mb-6 text-sm border-t ${
                        tier.recommended ? 'border-white/20' : 'border-gray-100'
                      }`}
                    >
                      {tier.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className={`flex justify-between gap-4 py-2 border-b ${
                            tier.recommended ? 'border-white/20' : 'border-gray-100'
                          }`}
                        >
                          <dt className={tier.recommended ? 'text-teal-100' : 'text-gray-500'}>
                            {spec.label}
                          </dt>
                          <dd
                            className={`text-right font-medium ${
                              tier.recommended ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <Check
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              tier.recommended ? 'text-teal-200' : 'text-teal-500'
                            }`}
                          />
                          <span className={`text-sm leading-relaxed ${tier.recommended ? 'text-teal-50' : 'text-gray-600'}`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className={`w-full text-center py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                        tier.recommended
                          ? 'bg-white text-teal-600 hover:bg-teal-50'
                          : 'bg-teal-600 text-white hover:bg-teal-700'
                      }`}
                    >
                      {tier.cta}
                    </a>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-sm text-gray-500 mt-8">{priceNote}</p>
            <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="md:w-56 shrink-0">
                <h2 className="text-lg font-bold text-gray-900">{refonteOption.title}</h2>
                <p className="text-xl font-bold text-teal-600">{refonteOption.price}</p>
              </div>
              <p className="text-gray-600 leading-relaxed">{refonteOption.description}</p>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={maintenanceRef} className="scroll-animate max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Après la livraison</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-3xl">
              Chaque formule inclut trois mois de support après la mise en ligne. Ensuite, la
              maintenance est facultative, sans engagement, et se résilie d'un mois sur l'autre.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {maintenancePlans.map((plan) => (
                <div
                  key={plan.title}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.title}</h3>
                  <p className="mb-6">
                    <span className="text-2xl font-bold text-teal-600">{plan.price}</span>{' '}
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  </p>
                  <ul className="text-sm text-gray-600 border-t border-gray-100">
                    {plan.items.map((item) => (
                      <li key={item} className="py-2.5 border-b border-gray-100 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Sans maintenance, le site reste en ligne et fonctionne normalement. Les
              modifications ponctuelles se font alors sur devis.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={howRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment le prix se décide</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Chaque fourchette reflète un écart réel de travail. Un site de 5 pages avec du
              contenu déjà rédigé coûte moins cher qu'un site de 7 pages où tout reste à écrire.
              Un assistant qui répond à dix questions types demande moins de configuration qu'un
              assistant qui doit couvrir un catalogue entier.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Le premier échange sert à situer votre projet dans cette fourchette, puis le devis
              fixe un montant précis. Rien n'est facturé en plus sans validation de votre part en
              cours de route.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le montant du devis est connu à l'avance et ne bouge pas en cours de projet, sauf
              si vous demandez un ajout qui change le périmètre initial. Dans ce cas, l'écart se
              discute avant d'être réalisé, jamais après.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Paiement en trois fois</h3>
            <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {paymentSchedule.map((step) => (
                <li key={step.moment} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <span className="block text-2xl font-bold text-teal-600">{step.share}</span>
                  <span className="text-sm text-gray-600">{step.moment}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={fitRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quelle formule pour quelle activité</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La <strong>Vitrine Moderne</strong> convient à une activité qui a surtout besoin
              d'être trouvée et de présenter clairement ce qu'elle propose : horaires, services,
              coordonnées, formulaire de contact.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La <strong>Vitrine + Assistant IA</strong> convient dès que les mêmes questions
              reviennent en boucle et méritent une réponse à toute heure, comme pour un{' '}
              <a href="/site-internet-sophrologue" className="text-teal-600 hover:underline">
                cabinet de sophrologie
              </a>
              , un{' '}
              <a href="/site-internet-gite-chambre-hotes" className="text-teal-600 hover:underline">
                gîte
              </a>{' '}
              ou tout commerce qui veut{' '}
              <a href="/chatbot-ia-site-web" className="text-teal-600 hover:underline">
                ajouter un chatbot
              </a>{' '}
              à son site actuel.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le <strong>Sur Mesure</strong> convient quand le site doit se connecter à des outils
              déjà en place (caisse, planning, CRM) ou automatiser quelque chose de spécifique à
              votre métier, au-delà d'un site avec assistant.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={faqRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Questions fréquentes</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full border border-teal-600 text-teal-600 flex items-center justify-center transition-transform duration-200 group-open:rotate-45">
                      <Plus className="w-4 h-4" />
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed px-6 pb-5">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
        <Footer />
        <ChatBot />
      </div>
    </>
  );
}

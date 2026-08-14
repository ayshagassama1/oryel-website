import { Head } from 'vite-react-ssg';
import { ArrowUpRight, Plus } from 'lucide-react';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

const demos = [
  {
    title: 'Le Botaniste',
    type: 'Restaurant',
    url: 'https://restaurant.oryel.dev',
    screenshot: '/screenshots/restaurant.png',
    screenshotAlt: "Page d'accueil du Botaniste, restaurant fictif à Metz",
    description:
      "Menu interactif, réservation en ligne et assistant IA. Pendant le service, quand le téléphone sonne et que personne ne peut décrocher, le site prend le relais.",
    accentColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    bgColor: 'bg-orange-50',
  },
  {
    title: 'Atelier Lumina',
    type: 'Boutique',
    url: 'https://boutique.oryel.dev',
    screenshot: '/screenshots/boutique.png',
    screenshotAlt: "Page d'accueil de l'Atelier Lumina, bijouterie artisanale fictive",
    description:
      "Catalogue produits et assistant IA qui joue le rôle de conseiller : il pose des questions, comprend ce que cherche le visiteur et l'oriente vers le bon produit.",
    accentColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    bgColor: 'bg-violet-50',
  },
  {
    title: 'Cabinet Équilibre',
    type: 'Cabinet de kinésithérapie',
    url: 'https://cabinet.oryel.dev',
    screenshot: '/screenshots/cabinet.png',
    screenshotAlt: "Page d'accueil du Cabinet Équilibre, cabinet de kinésithérapie fictif",
    description:
      "Site éditorial avec assistant IA qui répond aux questions courantes (tarifs, soins, prise de rendez-vous) sans jamais se substituer à l'avis de la praticienne.",
    accentColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    bgColor: 'bg-teal-50',
  },
  {
    title: 'Le clos des Mirabelles',
    type: 'Gîte',
    url: 'https://gite.oryel.dev',
    screenshot: '/screenshots/gite.png',
    screenshotAlt: "Page d'accueil du Clos des Mirabelles, gîte fictif",
    description:
      "Réservation directe avec assistant IA multilingue, qui répond aux questions des voyageurs à toute heure sans remplacer l'accueil du propriétaire.",
    accentColor: 'text-rose-600',
    borderColor: 'border-rose-200',
    bgColor: 'bg-rose-50',
  },
];

const faqItems = [
  {
    question: 'Ces entreprises existent-elles vraiment ?',
    answer:
      "Non. Les quatre sites sont des démonstrations techniques construites de toutes pièces pour illustrer le principe. Les enseignes sont fictives, ce ne sont pas des références clients.",
  },
  {
    question: 'Puis-je vraiment discuter avec les assistants ?',
    answer: 'Oui, chaque assistant est fonctionnel et répond en temps réel, à partir des informations publiées sur le site fictif correspondant.',
  },
  {
    question: 'Puis-je avoir la même chose pour mon activité ?',
    answer:
      "Oui, c'est justement leur rôle : montrer le principe avant de le construire avec vos propres informations. Les formules sont détaillées sur la page tarifs.",
  },
  {
    question: "Les captures d'écran sont-elles à jour ?",
    answer: 'Les sites évoluent, les captures peuvent avoir un léger décalage. Le lien "Voir la démo" mène toujours à la version actuelle.',
  },
  {
    question: "L'assistant se souvient-il de la conversation ?",
    answer: 'Oui, pendant la conversation en cours : il tient compte des messages précédents pour répondre. Rien n\'est conservé une fois la page fermée.',
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

export default function Demos() {
  const heroRef = useScrollAnimate();
  const gridRef = useScrollAnimate();
  const testRef = useScrollAnimate();
  const faqRef = useScrollAnimate();
  const moreRef = useScrollAnimate();

  return (
    <>
      <Seo
        path="/demos"
        title="Démos de sites internet avec assistant IA | Oryel dev"
        description="Quatre sites de démonstration fonctionnels, chacun avec son assistant IA. Entreprises fictives, principes réels : testez-les directement."
      />

      <Head>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>

      <div className="font-inter">
        <Navbar />

        <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-br from-teal-50/60 via-white to-gray-50/80">
          <div ref={heroRef} className="scroll-animate max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Démos
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4">
              Quatre sites fonctionnels, chacun avec son assistant IA. Vous pouvez leur poser des
              questions directement.
            </p>
            <p className="text-base text-gray-500 max-w-xl mx-auto">
              Les entreprises présentées sont fictives, construites pour illustrer le principe.
              Ce ne sont pas des références clients.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={gridRef} className="scroll-animate max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              {demos.map((demo) => (
                <div
                  key={demo.url}
                  className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className={`relative ${demo.bgColor} p-4 border-b ${demo.borderColor}`}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 border-b border-gray-200">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400" />
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        <span className={`ml-2 text-[10px] font-medium ${demo.accentColor} truncate`}>
                          {demo.url.replace('https://', '')}
                        </span>
                      </div>
                      <img
                        src={demo.screenshot}
                        alt={demo.screenshotAlt}
                        loading="lazy"
                        className="w-full aspect-[16/10] object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <span className={`text-xs font-semibold uppercase tracking-wide mb-2 ${demo.accentColor}`}>
                      {demo.type} · fictif
                    </span>
                    <h2 className="text-lg font-bold text-gray-900 mb-2">{demo.title}</h2>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{demo.description}</p>
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold mt-6 ${demo.accentColor} hover:underline underline-offset-2`}
                    >
                      Voir la démo
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={testRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment tester une démo</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ouvrez un site, cliquez sur l'assistant, et posez-lui les questions qu'un vrai
              visiteur poserait : les horaires, les tarifs, comment prendre rendez-vous ou
              réserver, ce qui est inclus. Chaque assistant répond uniquement à partir des
              informations publiées sur le site fictif correspondant, sans improviser au-delà.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              L'objectif n'est pas de juger le contenu (les enseignes sont inventées) mais de
              voir comment l'assistant se comporte en conditions réelles : rapidité de réponse,
              ton, façon de rediriger vers une prise de contact quand la question dépasse son
              cadre.
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

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={moreRef} className="scroll-animate max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Envie d'en savoir plus sur un métier précis</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Certaines démos ont leur propre page détaillée, avec les questions qui reviennent
              vraiment pour ce métier.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/site-internet-sophrologue"
                className="inline-block border border-gray-200 hover:border-teal-300 hover:text-teal-600 text-gray-700 font-medium px-5 py-2.5 rounded-lg text-sm transition-all"
              >
                Site pour sophrologue
              </a>
              <a
                href="/site-internet-gite-chambre-hotes"
                className="inline-block border border-gray-200 hover:border-teal-300 hover:text-teal-600 text-gray-700 font-medium px-5 py-2.5 rounded-lg text-sm transition-all"
              >
                Site pour gîte
              </a>
              <a
                href="/chatbot-ia-site-web"
                className="inline-block border border-gray-200 hover:border-teal-300 hover:text-teal-600 text-gray-700 font-medium px-5 py-2.5 rounded-lg text-sm transition-all"
              >
                Chatbot IA
              </a>
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

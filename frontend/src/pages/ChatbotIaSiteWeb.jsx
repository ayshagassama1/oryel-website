import { Head } from 'vite-react-ssg';
import { Puzzle, Sparkles, FileSearch, Plus } from 'lucide-react';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

const demos = [
  { name: 'Le Botaniste', type: 'restaurant', url: 'https://restaurant.oryel.dev' },
  { name: 'Atelier Lumina', type: 'boutique', url: 'https://boutique.oryel.dev' },
  { name: 'Cabinet Équilibre', type: 'cabinet de kinésithérapie', url: 'https://cabinet.oryel.dev' },
  { name: 'Le clos des Mirabelles', type: 'gîte', url: 'https://gite.oryel.dev' },
];

const faqItems = [
  {
    question: "Combien coûte un chatbot IA pour mon site ?",
    answer:
      "Ça dépend du point de départ : ajouter l'assistant à un site existant coûte moins cher que construire un site complet avec l'assistant intégré. Le tarif se précise après un premier échange, devis sous 48h.",
  },
  {
    question: 'Puis-je ajouter un chatbot à mon site actuel, sans le refaire ?',
    answer:
      "Dans la majorité des cas, oui. L'assistant s'installe en complément de votre site existant, sans reconstruction.",
  },
  {
    question: "Sur quelle intelligence artificielle repose l'assistant ?",
    answer:
      "Ça dépend du projet. Ce site utilise Groq (llama-3.3-70b-versatile) pour sa rapidité de réponse, mais le modèle se choisit selon vos besoins : rapidité, coût, ou une IA que vous utilisez déjà ailleurs.",
  },
  {
    question: "L'assistant peut-il inventer une réponse fausse ?",
    answer:
      "Le risque existe avec n'importe quel assistant IA, mais il est fortement réduit ici par une architecture RAG (retrieval-augmented generation) : l'assistant va chercher la réponse dans vos informations avant de répondre, au lieu de généraliser à partir de connaissances générales. Ça diminue nettement le risque d'invention, sans le supprimer à 100 %.",
  },
  {
    question: 'Le chatbot répond-il dans plusieurs langues ?',
    answer: "Oui, dans la langue du visiteur, à partir des mêmes informations, sans version traduite à gérer de votre côté.",
  },
  {
    question: 'Combien de temps pour le mettre en ligne ?',
    answer:
      "En général en 2 à 3 semaines pour un site complet avec l'assistant, plus rapide pour un ajout seul à un site existant.",
  },
  {
    question: 'Le chatbot peut-il directement réserver un créneau à ma place ?',
    answer:
      "Pas par défaut. Il oriente le visiteur vers la bonne page ou le bon lien de réservation, mais il ne valide pas la réservation lui-même : ça demanderait une intégration technique avec votre système de réservation, à voir au cas par cas.",
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

export default function ChatbotIaSiteWeb() {
  const heroRef = useScrollAnimate();
  const problemRef = useScrollAnimate();
  const installRef = useScrollAnimate();
  const howRef = useScrollAnimate();
  const dataRef = useScrollAnimate();
  const priceRef = useScrollAnimate();
  const demosRef = useScrollAnimate();
  const faqRef = useScrollAnimate();

  return (
    <>
      <Seo
        path="/chatbot-ia-site-web"
        title="Chatbot IA pour site web : prix et installation | Oryel"
        description="Ajoutez un assistant IA à votre site actuel ou dans une nouvelle vitrine. Répond uniquement à partir de vos informations, jamais de réponse inventée. Devis sous 48h."
      />

      <Head>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>

      <div className="font-inter">
        <Navbar />

        <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-br from-teal-50/60 via-white to-gray-50/80">
          <div ref={heroRef} className="scroll-animate max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Chatbot IA pour site web
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Un assistant qui répond aux visiteurs de votre site à toute heure, uniquement à
              partir de vos informations. À ajouter à votre site actuel, ou à construire avec un
              nouveau site.
            </p>
            <a
              href="#contact"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-100 hover:-translate-y-0.5"
            >
              En discuter
            </a>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={problemRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Le problème que ça résout</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Un visiteur qui a une question hésite avant d'appeler ou d'écrire, surtout en dehors
              des horaires d'ouverture. S'il ne trouve pas sa réponse rapidement sur le site, il
              regarde ailleurs plutôt que d'attendre. Un formulaire de contact capture une demande
              une fois que la décision d'écrire est déjà prise, pas avant : l'assistant répond au
              moment où la question se pose, ce qui évite qu'elle reste sans réponse.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={installRef} className="scroll-animate max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Deux façons de l'installer
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <Puzzle className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Ajouté à votre site actuel</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Si votre site vous convient déjà, l'assistant s'installe en complément, sans
                  reconstruction. C'est l'option la plus rapide et la moins chère : pas de nouvelle
                  maquette à valider, seulement l'assistant à intégrer.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Intégré à un nouveau site</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Si votre site est absent, daté ou à refaire, l'assistant est construit en même
                  temps que le reste du site, pensé pour lui dès le départ plutôt qu'ajouté après
                  coup.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={howRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment ça marche</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              L'assistant est construit à partir de vos propres informations : vos services, vos
              horaires, vos tarifs si vous souhaitez les publier, vos réponses aux questions les
              plus fréquentes. Grâce à une architecture RAG, il va chercher la réponse dans ces
              informations avant de répondre, ce qui réduit nettement le risque de réponse
              inventée par rapport à un assistant générique, sans le supprimer complètement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La mise en place démarre par un point sur votre activité pour rassembler ces
              informations : services, questions fréquentes, ton à adopter. Elles deviennent la
              base de connaissance de l'assistant. Rien n'est généré au hasard, rien n'est repris
              d'un site concurrent.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le modèle d'IA se choisit selon le projet : ce site utilise Groq (llama-3.3-70b-versatile)
              pour sa rapidité de réponse, mais un autre modèle peut être retenu selon vos besoins.
              Le tout est hébergé sur AWS. Ce sont des détails que vos visiteurs ne voient jamais,
              mais qui expliquent pourquoi l'assistant répond en une ou deux secondes plutôt qu'en
              dix.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={dataRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vos données restent les vôtres</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Les messages échangés avec l'assistant sont transmis au modèle uniquement pour générer
              une réponse, à partir des informations que vous avez fournies. Ils ne servent pas à
              entraîner un modèle externe et ne sont revendus à personne. Le fonctionnement précis
              est détaillé dans les{' '}
              <a href="/mentions-legales" className="text-teal-600 hover:underline">
                mentions légales
              </a>
              , y compris pour l'assistant de ce site, qui repose sur le même principe technique.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={priceRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Le prix, sans mauvaise surprise</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Il n'y a pas un tarif unique, parce qu'ajouter l'assistant à un site existant et
              construire les deux en même temps n'ont pas le même coût. Le montant se précise après
              un premier échange sur votre situation, pas avant.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aucun prix n'est communiqué au premier contact sans avoir compris votre projet. En
              échange, la réponse arrive vite : devis sous 48h.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={demosRef} className="scroll-animate max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Des exemples en conditions réelles
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Plutôt qu'une démonstration abstraite, quatre sites de démonstration sont en ligne.
              Posez-leur les questions qu'un vrai visiteur poserait.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {demos.map((demo) => (
                <a
                  key={demo.url}
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div>
                    <p className="font-semibold text-gray-900">{demo.name}</p>
                    <p className="text-sm text-gray-500">{demo.type}</p>
                  </div>
                  <FileSearch className="w-5 h-5 text-teal-600 shrink-0" />
                </a>
              ))}
            </div>
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

        <ContactSection preselectedService="Vitrine + IA" />
        <Footer />
        <ChatBot />
      </div>
    </>
  );
}

import { Head } from 'vite-react-ssg';
import { Globe2, Calendar, Clock, Plus } from 'lucide-react';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

const faqItems = [
  {
    question: "L'assistant remplace-t-il mon calendrier de réservations ?",
    answer:
      "Non. Il répond aux questions des voyageurs et les oriente vers votre réservation directe, mais votre calendrier ou channel manager existant reste l'outil de référence pour les disponibilités.",
  },
  {
    question: "Dans quelles langues l'assistant répond-il ?",
    answer:
      "Dans la langue du voyageur (anglais, allemand, néerlandais...), à partir de vos informations. Vous n'avez rien à traduire ni à gérer une version étrangère de votre site.",
  },
  {
    question: 'Est-ce que ça va vraiment réduire mes réservations via Booking ou Airbnb ?',
    answer:
      'Ça oriente vers la réservation directe les voyageurs qui visitent déjà votre site. Ça ne remplace pas votre présence sur ces plateformes pour la visibilité, les deux se complètent.',
  },
  {
    question: 'Combien de temps pour avoir mon site en ligne ?',
    answer: 'En général en moins de deux semaines, du premier échange à la mise en ligne.',
  },
  {
    question: "J'ai déjà un site, dois-je tout refaire ?",
    answer:
      "Non. Si votre site actuel vous convient, l'assistant peut y être ajouté seul, sans reconstruction complète.",
  },
  {
    question: 'Comment mettre à jour mes tarifs ou mes disponibilités après la mise en ligne ?',
    answer: 'Sur simple demande. Ce type de modification se fait rapidement, sans repasser par tout le projet.',
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

export default function SiteInternetGiteChambreHotes() {
  const heroRef = useScrollAnimate();
  const problemRef = useScrollAnimate();
  const solutionRef = useScrollAnimate();
  const formRef = useScrollAnimate();
  const hiddenRef = useScrollAnimate();
  const includedRef = useScrollAnimate();
  const faqRef = useScrollAnimate();

  return (
    <>
      <Seo
        path="/site-internet-gite-chambre-hotes"
        title="Site internet pour gîte et chambre d'hôtes dans le Grand Est | Oryel"
        description="Un site avec assistant multilingue qui répond à vos voyageurs à toute heure et les oriente vers la réservation directe, sans commission Booking."
      />

      <Head>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>

      <div className="font-inter">
        <Navbar />

        <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-br from-teal-50/60 via-white to-gray-50/80">
          <div ref={heroRef} className="scroll-animate max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Site internet pour gîte et chambre d'hôtes
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Un site avec un assistant qui répond à vos voyageurs à toute heure, dans leur langue,
              et les oriente vers une réservation directe plutôt que vers Booking ou Airbnb.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Les mêmes questions, à toute heure
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              L'heure d'arrivée, les animaux, le parking, le petit-déjeuner, le wifi, ce qu'il y a à
              faire autour : les voyageurs qui visitent votre site se posent presque toujours les
              mêmes questions, et rarement aux heures où vous êtes disponible.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Quand la réponse tarde, le voyageur ne reste pas à attendre. Il repart souvent
              réserver sur Booking ou Airbnb, où tout est indiqué immédiatement, avec la commission
              qui va avec.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={solutionRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Un assistant qui répond, uniquement à partir de vos informations
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Installé sur votre site, il répond à toute heure aux questions pratiques, sans jamais
              inventer une réponse approximative. Le voyageur repart avec ce qu'il cherchait, et
              vous gardez pour vous les échanges qui méritent vraiment votre attention.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Le coût réel d'une commission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Booking et Airbnb prélèvent en général 15 à 20 % sur chaque réservation. Un voyageur
              qui réserve directement depuis votre site, parce qu'il y a trouvé sa réponse, vous
              évite cette commission. Sur une saison, l'écart se chiffre vite.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Les voyageurs qui ne lisent pas le français
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Une partie de vos visiteurs ne maîtrise pas le français. Sur les plateformes, la
              traduction est automatique. Sur votre propre site, un voyageur qui comprend une
              information sur deux referme souvent l'onglet plutôt que d'écrire dans une langue
              qu'il ne maîtrise pas. L'assistant répond dans sa langue, à partir de vos informations,
              sans que vous ayez à traduire quoi que ce soit.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Un exemple concret à tester</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Vous pouvez tester le principe dès maintenant sur{' '}
              <a
                href="https://gite.oryel.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                gite.oryel.dev
              </a>
              , le site d'un gîte de démonstration. Posez les questions qu'un voyageur poserait :
              l'assistant répond uniquement à partir des informations publiées sur ce site.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={formRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pourquoi pas simplement un formulaire de contact ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Un formulaire capture une demande une fois que le voyageur a déjà décidé d'écrire. Le
              problème se situe avant : beaucoup repartent sans rien envoyer, simplement parce
              qu'ils n'ont pas trouvé l'information et qu'ils comparent déjà un autre hébergement.
              L'assistant répond à ce moment précis, avant que la réservation se fasse ailleurs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Rien à gérer techniquement</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le site, l'assistant et leur mise en ligne sont pris en charge du début à la fin. Vous
              n'avez ni logiciel à apprendre, ni configuration à faire vous-même : vous donnez vos
              informations, le site les affiche, et l'assistant y répond.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={hiddenRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ce qui continue après la réservation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Une réservation confirmée ne met pas fin aux questions. L'heure d'arrivée qui change,
              le code d'accès, le linge fourni, ce qui est ouvert le dimanche : les messages
              continuent d'arriver jusqu'au jour du séjour. C'est un temps de gestion peu visible,
              qui se répète à chaque réservation. L'assistant répond aussi à ces voyageurs-là, avec
              vos propres informations, pour que l'accueil reste ce que vous faites de mieux plutôt
              qu'une succession de messages à traiter.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={includedRef} className="scroll-animate max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Ce qui est inclus</h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <Globe2 className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Multilingue inclus</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  L'assistant répond dans la langue du voyageur, sans version traduite du site à
                  gérer de votre côté.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Votre calendrier conservé</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Le site s'articule avec votre calendrier ou channel manager existant, il ne le
                  remplace pas.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Livraison rapide</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  En général en moins de deux semaines, du premier échange à la mise en ligne.
                </p>
              </div>
            </div>
            <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto">
              Le projet se construit avec des échanges à distance, pour les hébergements de Moselle,
              d'Alsace ou de tout le Grand Est.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
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

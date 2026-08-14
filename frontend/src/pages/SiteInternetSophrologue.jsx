import { Head } from 'vite-react-ssg';
import { MessageCircle, HeartHandshake, Clock, Plus } from 'lucide-react';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

const faqItems = [
  {
    question: 'Le site remplace-t-il un premier échange avec vous ?',
    answer:
      "Non. L'assistant répond aux questions pratiques (votre approche, le déroulement d'une séance, vos disponibilités) et vous laisse la place pour tout le reste. Il oriente vers une prise de contact plutôt que de s'y substituer.",
  },
  {
    question: "L'assistant peut-il donner des conseils personnalisés ?",
    answer:
      "Non, par conception. Il répond uniquement à partir des informations que vous lui fournissez sur votre pratique, jamais d'un avis médical ou thérapeutique. Toute question qui en sort est renvoyée vers une prise de rendez-vous avec vous.",
  },
  {
    question: 'Le site convient-il si je propose plusieurs approches, pas seulement la sophrologie ?',
    answer:
      "Oui. Le contenu et l'assistant sont construits à partir de votre pratique réelle, qu'elle soit uniquement de la sophrologie ou un mélange d'approches (danse thérapeutique, massages, coaching...).",
  },
  {
    question: 'Combien de temps pour avoir mon site en ligne ?',
    answer: "En général en 2 à 3 semaines pour un site complet avec l'assistant, plus rapide pour un ajout seul à un site existant.",
  },
  {
    question: "J'ai déjà un site, dois-je tout refaire ?",
    answer:
      "Non. Si votre site actuel vous convient, l'assistant peut y être ajouté seul, sans reconstruction complète.",
  },
  {
    question: 'Le site est-il pensé pour apparaître dans les résultats Google ?',
    answer:
      "Oui, dès la construction : titre, description et contenu écrits pour les questions que tapent vos futurs clients, pas pour un jargon technique.",
  },
  {
    question: 'Comment mettre à jour mes horaires ou mes tarifs après la mise en ligne ?',
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

export default function SiteInternetSophrologue() {
  const heroRef = useScrollAnimate();
  const problemRef = useScrollAnimate();
  const solutionRef = useScrollAnimate();
  const breatheRef = useScrollAnimate();
  const includedRef = useScrollAnimate();
  const faqRef = useScrollAnimate();

  return (
    <>
      <Seo
        path="/site-internet-sophrologue"
        title="Site internet pour sophrologue à Metz | Oryel"
        description="Un site avec assistant IA qui répond aux questions de vos futurs clients, même en séance ou le soir. Livraison en général en 2 à 3 semaines."
      />

      <Head>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>

      <div className="font-inter">
        <Navbar />

        <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-br from-teal-50/60 via-white to-gray-50/80">
          <div ref={heroRef} className="scroll-animate max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Site internet pour sophrologue
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Un site avec un assistant qui répond aux questions de vos futurs clients quand vous
              êtes en séance, le soir, ou le week-end, sans jamais remplacer un premier échange
              avec vous.
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
              Les mêmes questions, toujours au mauvais moment
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Quelle approche pour quel besoin, comment se déroule une séance, ce que vous
              proposez exactement : les personnes qui découvrent votre activité se posent souvent
              les mêmes questions avant de prendre rendez-vous. Le problème, c'est le moment où
              elles se les posent. Beaucoup de monde se renseigne sur la sophrologie le soir, une
              fois la journée passée, ou le week-end, quand votre cabinet est fermé.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              On ne contacte pas une sophrologue par hasard. Derrière une demande, il y a souvent
              un sujet porté depuis un moment : le sommeil qui se dérègle, une période difficile à
              traverser. Pour beaucoup, décrocher le téléphone est déjà une étape. Certaines
              personnes préfèrent d'abord se renseigner discrètement, à leur rythme, avant de se
              présenter.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={solutionRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Un assistant qui répond, sans vous remplacer
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Installé sur votre site, l'assistant répond à toute heure, uniquement à partir de
              vos informations : votre approche, le déroulement d'une première séance, vos
              disponibilités. La personne repart avec ses réponses, et vous retrouvez sa demande le
              lendemain matin, sans avoir été interrompue.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Il ne donne jamais de conseil médical ou thérapeutique : ce n'est pas sa place, et il
              est conçu pour le savoir. Toute question qui dépasse le cadre pratique est renvoyée
              vers une prise de contact avec vous. L'assistant complète votre présence, il ne la
              remplace pas.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Pourquoi pas simplement un formulaire de contact ?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Un formulaire capture une demande une fois que la personne a déjà décidé d'écrire.
              Le problème se situe avant : beaucoup de visiteurs repartent sans rien envoyer,
              simplement parce qu'ils n'ont pas trouvé la réponse à une question pratique. L'assistant
              répond à ce moment précis, avant que la personne referme l'onglet. Le formulaire reste
              en place pour la suite, une fois la décision d'écrire prise.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Un exemple concret à tester</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Plutôt qu'une description abstraite, vous pouvez tester le principe dès maintenant
              sur{' '}
              <a
                href="https://cabinet.oryel.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                cabinet.oryel.dev
              </a>
              , le site d'un cabinet de kinésithérapie. Posez les mêmes questions que poseraient vos
              clients (tarifs, déroulement d'une séance, prise de rendez-vous) et observez comment
              l'assistant répond à partir des informations réelles du cabinet. Le fonctionnement
              serait identique pour votre activité, construit à partir de vos propres informations.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={breatheRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Souffler un peu, pas seulement gagner du temps
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              L'objectif dépasse le simple gain de minutes sur un planning. Il s'agit de rester
              disponible pendant une séance, d'accueillir la personne en face de vous avec toute
              votre attention, et de retrouver le lendemain matin les questions du soir déjà
              traitées. Le site absorbe en amont ce qui, autrement, reviendrait se répéter à
              chaque échange.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={includedRef} className="scroll-animate max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Ce qui est inclus</h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Site ou assistant seul</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Un site complet, ou l'assistant ajouté à votre site actuel s'il vous convient
                  déjà. Pas besoin de tout reconstruire.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Livraison rapide</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  En général en 2 à 3 semaines pour un site complet avec l'assistant, plus rapide pour un ajout seul à un site existant.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <HeartHandshake className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Construit avec vous</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Le contenu et l'assistant reflètent votre pratique réelle, qu'elle soit pure ou
                  mixte (sophrologie et autres approches).
                </p>
              </div>
            </div>
            <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto">
              Le projet se construit avec des échanges à distance, et un premier rendez-vous en
              personne reste possible pour les cabinets de Metz et de Moselle. Pour le reste du
              Grand Est, tout se fait en visio.
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

        <ContactSection preselectedService="Vitrine + IA" />
        <Footer />
        <ChatBot />
      </div>
    </>
  );
}

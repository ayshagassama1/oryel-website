import { Head } from 'vite-react-ssg';
import { MessageSquare, FileSearch, Plus, MessageCircle, FileText, Rocket } from 'lucide-react';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

const demos = [
  { name: 'Le Botaniste', type: 'restaurant à Metz', url: 'https://restaurant.oryel.dev' },
  { name: 'Atelier Lumina', type: 'boutique à Metz', url: 'https://boutique.oryel.dev' },
  { name: 'Cabinet Équilibre', type: 'cabinet de kinésithérapie à Metz', url: 'https://cabinet.oryel.dev' },
];

const steps = [
  {
    icon: MessageCircle,
    title: 'Premier échange',
    description: 'Un message ou un appel pour comprendre votre activité et ce que vous cherchez à résoudre.',
  },
  {
    icon: FileText,
    title: 'Devis sous 48h',
    description: 'Un chiffrage adapté à votre projet, gratuit et sans engagement.',
  },
  {
    icon: Rocket,
    title: 'Mise en ligne',
    description: 'En général en 2 à 3 semaines pour un site complet, moins pour un ajout à un site existant.',
  },
];

const pages = [
  {
    label: 'Site internet pour sophrologue',
    path: '/site-internet-sophrologue',
    description: 'Questions récurrentes en séance, avant et après un rendez-vous.',
  },
  {
    label: "Site internet pour gîte et chambre d'hôtes",
    path: '/site-internet-gite-chambre-hotes',
    description: 'Réservation directe plutôt que commission Booking ou Airbnb.',
  },
  {
    label: 'Chatbot IA pour site web',
    path: '/chatbot-ia-site-web',
    description: "Ajouté à un site existant ou construit avec un nouveau site.",
  },
];

const faqItems = [
  {
    question: 'Travaillez-vous uniquement avec des entreprises basées à Metz ?',
    answer:
      "Je suis basée à Metz, mais les projets viennent de toute la Moselle, du Grand Est et du Luxembourg. Les échanges se font par visio la plupart du temps, où que vous soyez.",
  },
  {
    question: 'Peut-on se rencontrer en personne ?',
    answer: 'Oui, un premier rendez-vous en personne est possible à Metz si vous le préférez, sinon tout se fait par visio ou téléphone.',
  },
  {
    question: 'Combien de temps pour un site internet ?',
    answer: "En général en 2 à 3 semaines pour un site complet avec l'assistant, plus rapide pour un ajout seul à un site existant.",
  },
  {
    question: 'Quel est le prix ?',
    answer:
      'Ça dépend du projet. Un devis précis arrive sous 48h après un premier échange sur vos besoins.',
  },
  {
    question: 'Travaillez-vous aussi avec des entreprises luxembourgeoises ?',
    answer:
      'Oui, la proximité avec Metz en fait un cas fréquent, avec ses propres questions (facturation, TVA transfrontalière) traitées au cas par cas.',
  },
  {
    question: 'Le site peut-il être proposé en plusieurs langues ?',
    answer:
      "Oui, le contenu et l'assistant peuvent répondre en anglais ou en allemand en plus du français, utile pour une clientèle transfrontalière.",
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

export default function CreationSiteInternetMetz() {
  const heroRef = useScrollAnimate();
  const soloRef = useScrollAnimate();
  const luxRef = useScrollAnimate();
  const stepsRef = useScrollAnimate();
  const commonRef = useScrollAnimate();
  const pagesRef = useScrollAnimate();
  const demosRef = useScrollAnimate();
  const faqRef = useScrollAnimate();

  return (
    <>
      <Seo
        path="/creation-site-internet-metz"
        title="Création de site internet à Metz | Oryel dev"
        description="Développeur freelance basé à Metz. Sites internet et assistants IA pour indépendants et commerces de Moselle et du Grand Est. Devis sous 48h."
      />

      <Head>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>

      <div className="font-inter">
        <Navbar />

        <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-br from-teal-50/60 via-white to-gray-50/80">
          <div ref={heroRef} className="scroll-animate max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Création de site internet à Metz
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Sites internet et assistants IA pour les indépendants et commerces de Metz, de
              Moselle et du Grand Est. Un développeur, pas une agence.
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
          <div ref={soloRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Un développeur à Metz, pas une agence
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Vous échangez directement avec la personne qui écrit le code, du premier échange à
              la mise en ligne : c'est elle qui répond à vos messages et qui prend les décisions
              techniques.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Les délais suivent le rythme du projet plutôt qu'une validation à plusieurs niveaux,
              et une question technique reçoit une réponse directe.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le contact se fait par email ou via le formulaire plus bas, et la réponse vient de
              la même personne qui a lu le message.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={luxRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">À une heure du Luxembourg</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Metz est à une heure de route du Luxembourg, ce qui en fait une base pratique pour
              les entreprises frontalières : tarifs français, réactivité d'un prestataire proche,
              et une expérience de terrain sur les questions propres à ce marché (facturation
              transfrontalière, TVA intracommunautaire) plutôt qu'un principe théorique.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le site et l'assistant peuvent aussi répondre en anglais ou en allemand, utile pour
              une clientèle transfrontalière habituée à naviguer entre plusieurs langues sans y
              penser.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={stepsRef} className="scroll-animate max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Comment se déroule un projet
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Trois étapes, sans zone grise entre les deux : vous savez à chaque instant où en est
              votre projet.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <span className="text-xs font-semibold text-gray-400">{`0${i + 1}`}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={commonRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ce qui revient, quel que soit le métier
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sophrologue, gîte, cabinet, boutique : les métiers changent, la douleur se répète.
              Des questions pratiques posées en dehors des horaires, un visiteur qui hésite à
              écrire faute de réponse rapide, un site qui n'en dit pas beaucoup plus qu'une carte
              de visite. Les pages ci-dessous traitent chacune un métier précis. Si le vôtre n'y
              figure pas encore, le principe reste le même : un site construit à partir de votre
              activité réelle, avec un assistant qui répond à sa place quand vous ne pouvez pas.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={pagesRef} className="scroll-animate max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Selon votre activité
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {pages.map((page) => (
                <a
                  key={page.path}
                  href={page.path}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between gap-4"
                >
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{page.label}</h3>
                    <p className="text-sm text-gray-500">{page.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={demosRef} className="scroll-animate max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Des exemples ancrés à Metz
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Trois sites de démonstration, tous fictifs, mais mis en scène dans des commerces de
              Metz pour rester concrets plutôt qu'abstraits. Chacun est en ligne, avec son propre
              assistant : cliquez pour les tester directement.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
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

        <ContactSection />
        <Footer />
        <ChatBot />
      </div>
    </>
  );
}

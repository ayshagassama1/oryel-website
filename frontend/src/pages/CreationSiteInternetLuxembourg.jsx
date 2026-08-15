import { Head } from 'vite-react-ssg';
import { Plus, FileSearch } from 'lucide-react';
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
    question: 'Pourquoi choisir un prestataire basé en France plutôt qu\'au Luxembourg ?',
    answer:
      "Pour un site et un assistant équivalents, mes tarifs suivent le coût français, plus bas que le coût luxembourgeois, sans que la qualité change. Je reste à une heure de route pour un rendez-vous en personne quand c'est utile.",
  },
  {
    question: 'Y a-t-il de la TVA sur la facture ?',
    answer:
      "Non. La prestation relève des services intracommunautaires : la facture ne porte aucune TVA française, avec la mention « autoliquidation ». Vous déclarez la TVA au Luxembourg, comme avec tout prestataire établi dans un autre pays de l'UE.",
  },
  {
    question: 'Le site peut-il être en plusieurs langues ?',
    answer:
      "Oui, français, anglais et allemand. L'assistant répond dans la langue du visiteur, et le site peut exister en plusieurs versions sans que vous ayez à les maintenir séparément de votre côté.",
  },
  {
    question: 'Peut-on se rencontrer en personne ?',
    answer: 'Oui. Je suis en Moselle, à une heure de Luxembourg-ville. Un rendez-vous sur place est possible quand c\'est utile, sinon on échange en visio.',
  },
  {
    question: 'Combien de temps pour un site internet ?',
    answer: "En général en 2 à 3 semaines pour un site complet avec l'assistant, plus rapide pour un ajout seul à un site existant.",
  },
  {
    question: 'Quels sont vos tarifs ?',
    answer:
      'Ils suivent le coût français, pas le coût luxembourgeois, détaillés sur la page tarifs. Un devis précis arrive sous 48h après un premier échange.',
  },
  {
    question: 'Faut-il déjà avoir un site ?',
    answer: "Non. Je peux partir de zéro, ou ajouter l'assistant à un site existant qui vous convient déjà.",
  },
  {
    question: 'Où sont hébergées les données de mon site ?',
    answer: "Ce site tourne sur AWS, région Paris. Pour un projet client, l'hébergeur peut s'adapter selon vos préférences, y compris pour rester dans l'UE si c'est important pour vous.",
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

export default function CreationSiteInternetLuxembourg() {
  const heroRef = useScrollAnimate();
  const langRef = useScrollAnimate();
  const assistantRef = useScrollAnimate();
  const forRef = useScrollAnimate();
  const borderRef = useScrollAnimate();
  const vatRef = useScrollAnimate();
  const dataRef = useScrollAnimate();
  const exampleRef = useScrollAnimate();
  const faqRef = useScrollAnimate();

  return (
    <>
      <Seo
        path="/creation-site-internet-luxembourg"
        title="Création de site internet au Luxembourg | Oryel dev"
        description="Développeur basée en Moselle, à une heure du Luxembourg. Site internet et assistant IA en français, anglais et allemand, aux tarifs français. Devis sous 48h."
      />

      <Head>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>

      <div className="font-inter">
        <Navbar />

        <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-br from-teal-50/60 via-white to-gray-50/80">
          <div ref={heroRef} className="scroll-animate max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Création de site internet au Luxembourg
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Un site internet et un assistant IA qui répondent à vos clients en français, en
              anglais ou en allemand, à toute heure. Développés depuis la Moselle, à une heure de
              Luxembourg-ville, aux tarifs français.
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
          <div ref={langRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Une clientèle qui passe d'une langue à l'autre
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Au Luxembourg, une partie importante de la main-d'œuvre et de la clientèle vient
              chaque jour de France, de Belgique et d'Allemagne. Vos visiteurs lisent, comparent
              et posent leurs questions en français, en allemand ou en anglais, parfois les trois
              dans la même journée.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Assurer cet accueil multilingue en interne coûte cher, surtout dans un pays où une
              personne supplémentaire à l'accueil pèse lourd sur les charges. Le site et
              l'assistant s'adaptent à la langue du visiteur, sans version à maintenir en double
              ni recrutement à prévoir.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={assistantRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ce que fait l'assistant, concrètement
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              L'assistant répond aux questions que vos clients posent avant même de vous
              contacter : vos prestations, vos horaires, vos conditions, comment prendre
              rendez-vous. Il puise dans vos informations, pas dans une base générique, et répond
              dans la langue du visiteur.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Un exemple : quelqu'un arrive sur votre site un soir à 21h, demande en allemand si
              vous recevez sans rendez-vous, obtient une réponse claire et laisse ses coordonnées.
              Le lendemain, vous récupérez un contact déjà renseigné plutôt qu'un appel manqué.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={forRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pour quelles entreprises</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              C'est utile si vos clients vous posent souvent les mêmes questions avant de venir ou
              de réserver, dans plusieurs langues à la fois : cabinets et professions libérales,
              commerces et restaurants, artisans, métiers du{' '}
              <a href="/site-internet-sophrologue" className="text-teal-600 hover:underline">
                bien-être et de la santé
              </a>
              , agences immobilières transfrontalières,{' '}
              <a href="/site-internet-gite-chambre-hotes" className="text-teal-600 hover:underline">
                hébergements touristiques
              </a>
              .
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={borderRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Un prestataire français, à une heure de route
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Les tarifs des prestataires web basés au Luxembourg suivent le niveau de vie local,
              nettement plus élevé qu'en France pour un travail comparable. Basée en Moselle, je
              pratique des tarifs français, avec l'avantage d'être à une heure de route pour un
              échange en personne quand c'est utile.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Le contact se fait directement avec la personne qui écrit le code, sans commercial
              ni chef de projet entre nous, du premier échange à la mise en ligne.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Une agence facture aussi la structure autour du projet : commercial, gestion de
              compte, marge d'intermédiaire. En travaillant en direct avec la personne qui
              développe le site, cette couche disparaît du prix sans disparaître du résultat.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={vatRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Facturer sans complexité TVA</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pour un client professionnel au Luxembourg, la prestation relève des services
              intracommunautaires : la facture ne porte aucune TVA française, avec la mention
              « autoliquidation ». Vous déclarez la TVA au Luxembourg, exactement comme avec
              n'importe quel prestataire établi dans un autre pays de l'UE. Rien de plus à régler
              côté français, aucune TVA française à récupérer.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={dataRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hébergement en Europe</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ce site tourne sur AWS, région Paris (eu-west-3), avec les données dans l'Union
              européenne. Ce n'est pas un choix figé : pour un projet client, l'hébergeur peut
              s'adapter selon vos préférences, y compris pour rester dans l'UE si c'est un critère
              important pour vous.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={exampleRef} className="scroll-animate max-w-4xl mx-auto">
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

        <ContactSection />
        <Footer />
        <ChatBot />
      </div>
    </>
  );
}

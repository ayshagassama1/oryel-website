import { Head } from 'vite-react-ssg';
import { Linkedin, Plus } from 'lucide-react';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { useScrollAnimate } from '../hooks/useScrollAnimate';
import { parcours } from '../data/parcours';

const techStack = [
  { group: 'Backend', items: ['Python', 'FastAPI', 'Laravel', 'Node.js'] },
  { group: 'Frontend', items: ['React.js', 'Vue.js'] },
  { group: 'IA', items: ['LangChain', 'RAG', 'OpenAI API', 'Ollama'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'] },
  { group: 'DevOps', items: ['Docker', 'AWS', 'CI/CD'] },
  { group: 'Aussi', items: ['PHP', 'Django'] },
];

const faqItems = [
  {
    question: 'Travaillez-vous seule ou avec une équipe ?',
    answer: "Seule. C'est moi qui échange avec chaque client et qui écrit le code, du premier message à la mise en ligne.",
  },
  {
    question: 'Utilisez-vous vous-même les outils que vous proposez ?',
    answer:
      "Oui. L'assistant de ce site tourne sur la même base technique que les projets clients (Groq, architecture RAG), pas sur une version simplifiée.",
  },
  {
    question: 'Travaillez-vous en anglais ?',
    answer: 'Oui, en français et en anglais, utile pour une partie de la clientèle transfrontalière.',
  },
  {
    question: 'Faites-vous autre chose que des sites et des chatbots ?',
    answer:
      "Oui : automatisation, intégrations avec des outils tiers, et audit de sites existants pour identifier ce qui bloque avant d'ajouter quoi que ce soit de nouveau.",
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

export default function APropos() {
  const heroRef = useScrollAnimate();
  const bioRef = useScrollAnimate();
  const stackRef = useScrollAnimate();
  const parcoursRef = useScrollAnimate();
  const valuesRef = useScrollAnimate();
  const faqRef = useScrollAnimate();

  return (
    <>
      <Seo
        path="/a-propos"
        title="À propos | Oryel dev"
        description="Développeur fullstack et IA freelance à Metz. Master Data Science, machine learning au LIMOS, expérience en France, au Luxembourg et au Sénégal."
      />

      <Head>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>

      <div className="font-inter">
        <Navbar />

        <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-br from-teal-50/60 via-white to-gray-50/80">
          <div ref={heroRef} className="scroll-animate max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Qui suis-je
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Développeur fullstack et IA freelance, basée à Metz.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div ref={bioRef} className="scroll-animate">
                <div className="max-w-none flow-root">
                  <img
                    src="/aissatou-gassama.jpeg"
                    alt="Ndeye Aissatou Gassama, développeur fullstack freelance à Metz"
                    width="300"
                    height="375"
                    loading="lazy"
                    className="float-left w-32 sm:w-[150px] aspect-[4/5] object-cover object-center rounded-2xl mr-6 mb-3"
                  />
                  <p className="text-lg text-gray-700 leading-relaxed mb-5">
                    Je m'appelle <strong>Ndeye Aissatou Gassama</strong>. Je suis développeur
                    fullstack freelance, basée à Metz. Diplômée d'un Master en Informatique,
                    j'ai travaillé sur des sujets de Machine Learning au LIMOS,
                    puis comme développeur backend au Luxembourg. En parallèle, j'ai cofondé&nbsp;
                    <a
                      href="https://sunuconseil.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline"
                    >
                      SunuConseil
                    </a>
                    , une société de consulting IT à Dakar, où je développe le site
                    et les outils internes.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-5">
                    Aujourd'hui, je travaille sous le nom{' '}
                    <strong className="text-teal-600">Oryel dev</strong>. Je conçois et développe
                    des applications web complètes, du backend au déploiement, et j'intègre
                    des fonctionnalités d'intelligence artificielle directement utiles.
                    Concrètement : des chatbots qui répondent, de l'automatisation qui fait
                    gagner du temps, et des systèmes de recherche qui trouvent vraiment
                    l'information.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Je travaille en direct avec chaque client, sans commercial ni chef de projet
                    entre nous. Les décisions techniques et les échanges passent par la même
                    personne, du premier message à la mise en ligne.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href="https://linkedin.com/in/ndeye-aissatou-gassama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-gray-200 hover:border-teal-300 hover:text-teal-600 text-gray-600 font-medium px-5 py-2.5 rounded-lg text-sm transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://www.malt.fr/profile/ndeyeaissatougassama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-gray-200 hover:border-teal-300 hover:text-teal-600 text-gray-600 font-medium px-5 py-2.5 rounded-lg text-sm transition-all"
                  >
                    <span className="font-bold text-xs">M</span>
                    Malt
                  </a>
                </div>

              </div>

              <div ref={stackRef} className="scroll-animate">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Stack technique</h2>
                <div className="space-y-5">
                  {techStack.map((group, i) => (
                    <div key={i}>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">
                        {group.group}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item, j) => (
                          <span
                            key={j}
                            className="bg-gray-100 hover:bg-teal-50 hover:text-teal-700 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors cursor-default"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div ref={parcoursRef} className="scroll-animate max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">
              Ce que mon parcours change pour vous
            </h2>
            <div className="border-t border-gray-200">
              {parcours.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-10 py-8 border-b border-gray-200"
                >
                  <p className="text-sm text-gray-500 leading-relaxed">{item.fact}</p>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div ref={valuesRef} className="scroll-animate max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment je travaille</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Je ne présente jamais un chiffre client que je ne peux pas vérifier, ni un
              témoignage inventé pour rassurer. Les démos de ce site sont clairement présentées
              comme fictives, pas comme des références déguisées : je préfère un site avec moins
              de contenu mais entièrement vrai qu'un site qui impressionne sur le moment et se
              dégonfle au premier email de vérification.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              La même exigence s'applique à la technique : un assistant IA construit à partir de
              vos informations réelles, pas d'une réponse générée pour faire illusion. Si un
              projet ne me semble pas pertinent pour votre activité, je préfère vous le dire
              avant de commencer.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-gray-50/80">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Questions fréquentes</h2>
            <div ref={faqRef} className="scroll-animate space-y-4">
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

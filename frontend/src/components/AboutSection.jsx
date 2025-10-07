import {
  GraduationCap,
  Award,
  Globe2,
  Building2,
  Linkedin,
  Download,
} from 'lucide-react';
import { useScrollAnimate } from '../hooks/useScrollAnimate';
 
const techStack = [
  { group: 'Backend', items: ['Python', 'FastAPI', 'Django', 'Node.js'] },
  { group: 'Frontend', items: ['React.js', 'Vue.js'] },
  { group: 'IA', items: ['LangChain', 'RAG', 'OpenAI API', 'Ollama'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  { group: 'DevOps', items: ['Docker', 'AWS (Certified)', 'CI/CD'] },
  { group: 'Aussi', items: ['PHP', 'Laravel'] },
];
 
const highlights = [
  { icon: GraduationCap, text: 'Master Data Science, ISIMA Clermont-Ferrand' },
  { icon: Award, text: 'AWS Certified Cloud Practitioner' },
  { icon: Globe2, text: 'Expérience en France, au Luxembourg et au Sénégal' },
  { icon: Building2, text: 'Co-fondatrice de SunuConseil (IT consulting, Dakar)' },
];
 
export default function AboutSection() {
  const ref = useScrollAnimate();
  const bioRef = useScrollAnimate(100);
  const stackRef = useScrollAnimate(200);
 
  return (
    <section id="apropos" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="scroll-animate mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Qui suis-je
          </h2>
          <div className="w-12 h-1 bg-teal-500 rounded-full" />
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div ref={bioRef} className="scroll-animate">
            <div className="max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Je m'appelle <strong>Aissatou Gassama</strong>. Je suis développeuse
                fullstack freelance, basée à Metz. Diplômée d’un Master en Informatique,
                 j’ai travaillé sur des sujets de Machine Learning au LIMOS,
                puis comme développeuse backend au Luxembourg. En parallèle, j’ai cofondé&nbsp;
                <a href="https://sunuconseil.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                  SunuConseil
                </a>
                , une société de consulting IT à Dakar, où je développe le site
                et les outils internes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Aujourd'hui, je travaille sous le nom{' '}
                <strong className="text-teal-600">Oryel</strong>. Je conçois et développe
                des applications web complètes, du backend au déploiement, et j’intègre
                des fonctionnalités d’intelligence artificielle directement utiles.
                Concrètement : des chatbots qui répondent, de l’automatisation qui fait
                gagner du temps, et des systèmes de recherche qui trouvent vraiment
                l’information.
              </p>
            </div>
 
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                Télécharger mon CV (PDF)
              </a>
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
                href="#"
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-teal-300 hover:text-teal-600 text-gray-600 font-medium px-5 py-2.5 rounded-lg text-sm transition-all"
              >
                <span className="font-bold text-xs">M</span>
                Malt
              </a>
            </div>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl"
                  >
                    <div className="bg-teal-50 p-2 rounded-lg flex-shrink-0">
                      <Icon className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-sm text-gray-700 leading-snug">
                      {h.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
 
          <div ref={stackRef} className="scroll-animate">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Stack technique
            </h3>
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
  );
}

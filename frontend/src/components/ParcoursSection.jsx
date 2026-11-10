import { Link } from 'react-router-dom';
import { useScrollAnimate } from '../hooks/useScrollAnimate';
import { parcours } from '../data/parcours';

export default function ParcoursSection() {
  const ref = useScrollAnimate();

  return (
    <section id="parcours" className="py-16 bg-white">
      <div ref={ref} className="scroll-animate max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-16 items-start">
          <div className="flex lg:flex-col items-center lg:items-start gap-5">
            <img
              src="/aissatou-gassama.jpeg"
              alt="Ndeye Aissatou Gassama, développeuse freelance à Metz"
              width="300"
              height="375"
              loading="lazy"
              className="w-24 sm:w-32 lg:w-full aspect-[4/5] object-cover rounded-2xl"
            />
            <div>
              <p className="font-semibold text-gray-900">Aissatou Gassama</p>
              <p className="text-sm text-gray-500 mb-3">Développeuse freelance à Metz</p>
              <Link to="/a-propos" className="text-sm font-medium text-teal-600 hover:underline">
                Mon parcours en détail
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Qui construit votre site
            </h2>
            <div className="w-12 h-1 bg-teal-500 rounded-full mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              {parcours.map((item) => (
                <div key={item.title} className="py-5 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.short}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

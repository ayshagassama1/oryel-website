import { useEffect, useRef } from 'react';
 
export default function HeroSection() {
  const ref = useRef(null);
 
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => el.classList.add('visible'), 100);
  }, []);
 
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
 
  const tags = [
    'Python / React / Laravel',
    'AWS Certified',
    'IA & Chatbots',
    'Basée à Metz',
  ];
 
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/60 via-white to-gray-50/80" />
 
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0D9488 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
 
      {/* Soft blobs for depth */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-teal-50/60 rounded-full blur-3xl pointer-events-none" />
 
      <div
        ref={ref}
        className="scroll-animate relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12"
      >
        <div className="max-w-3xl">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium px-3 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            Disponible pour de nouveaux projets
          </div>
 
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Dev fullstack freelance.{' '}
            <span className="text-teal-600">Sites web, apps et IA</span>{' '}
            sur mesure.
          </h1>
 
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
            Je transforme vos idées en fonctionnalités concrètes, utilisables par vos équipes ou vos clients.
            Applications web, automatisation, IA : chaque livraison a un impact direct sur votre activité.
          </p>
 
          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendly.com/ndeye-aissatou-gassama-sn/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-100 hover:-translate-y-0.5"
            >
              Prendre rendez-vous
            </a>
            <button
              onClick={() => scrollTo('demos')}
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold px-6 py-3 rounded-lg transition-all duration-200"
            >
              Voir les démos
            </button>
          </div>
 
          {/* Tags row */}
          <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-gray-100">
            {tags.map((tag, i) => (
              <span key={i} className="text-sm text-gray-500 flex items-center gap-1.5">
                <span className="w-1 h-1 bg-teal-400 rounded-full" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

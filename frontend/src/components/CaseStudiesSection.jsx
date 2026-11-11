import { ExternalLink } from 'lucide-react';
import { useScrollAnimate } from '../hooks/useScrollAnimate';
import { caseStudies } from '../data/caseStudies';

function Step({ label, children }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1.5">{label}</h4>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}

function CaseStudy({ study }) {
  const ref = useScrollAnimate(100);

  return (
    <article
      ref={ref}
      className="scroll-animate bg-white border border-gray-100 rounded-2xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] lg:grid-rows-[auto_1fr]">
        <div className="bg-gray-50 border-b lg:border-r border-gray-100 p-4 sm:p-6 lg:col-start-1 lg:row-start-1">
          <img
            src={study.screenshot}
            alt={study.screenshotAlt}
            width="2880"
            height="1800"
            loading="lazy"
            className="w-full aspect-[16/10] object-cover object-top rounded-lg border border-gray-200"
          />
        </div>

        <div className="p-6 sm:p-8 lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
          <p className="text-sm text-gray-500 mb-6">{study.client}</p>

          <div className="space-y-5">
            <Step label="Avant">{study.before}</Step>
            <Step label="Ce que j'ai fait">{study.work}</Step>
            {study.outcome && <Step label="Ce que ça a changé">{study.outcome}</Step>}
          </div>

          <a
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-teal-600 hover:underline"
          >
            Voir {study.title}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <dl className="border-t lg:border-t-0 lg:border-r border-gray-100 lg:bg-gray-50 p-6 sm:p-8 lg:pt-2 space-y-5 lg:col-start-1 lg:row-start-2">
          {study.results.map((r) => (
            <div key={r.label}>
              <dt className="text-2xl font-bold text-teal-600">{r.value}</dt>
              <dd className="text-sm text-gray-500 leading-snug mt-0.5">{r.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {study.testimonial && (
        <figure className="border-t border-gray-100 bg-teal-50/40 px-6 sm:px-8 py-6 flex flex-col sm:flex-row gap-5 sm:items-center">
          <img
            src={study.testimonial.logo}
            alt={`Logo du restaurant ${study.testimonial.place}`}
            width="64"
            height="64"
            loading="lazy"
            className="w-16 h-16 rounded-full object-cover shrink-0 border border-gray-200"
          />
          <div>
            <blockquote className="text-lg text-gray-800 leading-relaxed">
              « {study.testimonial.quote} »
            </blockquote>
            <figcaption className="text-sm text-gray-500 mt-2">
              {study.testimonial.author}, {study.testimonial.place}
            </figcaption>
          </div>
        </figure>
      )}
    </article>
  );
}

export default function CaseStudiesSection() {
  const titleRef = useScrollAnimate();

  return (
    <section id="realisations" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={titleRef} className="scroll-animate mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-3 block">
            Projets réels
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Deux projets en production
          </h2>
          <p className="text-gray-500 max-w-2xl">
            Les démos ci-dessus présentent des entreprises fictives. Voici deux projets réels, avec
            de vrais utilisateurs et des chiffres datés.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study) => (
            <CaseStudy key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

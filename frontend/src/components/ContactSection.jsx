import { useState, useEffect } from 'react';
import { Linkedin, Github, Calendar } from 'lucide-react';
import { useScrollAnimate } from '../hooks/useScrollAnimate';
import { api } from '../services/api';
 
export default function ContactSection({ preselectedService = '' }) {
  const ref = useScrollAnimate();
  const cardLeftRef = useScrollAnimate(100);
  const cardRightRef = useScrollAnimate(150);
 
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: preselectedService,
    message: '',
  });
  const [status, setStatus] = useState('idle'); 
  const [errorMessage, setErrorMessage] = useState('');
 
  useEffect(() => {
    if (preselectedService) {
      setForm((f) => ({ ...f, service: preselectedService }));
    }
  }, [preselectedService]);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
 
    try {
      await api.contact({
        name: form.name,
        email: form.email,
        service: form.service || null,
        message: form.message,
      });
      setStatus('success');
      setForm({ name: '', email: '', service: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Une erreur est survenue. Réessayez.');
    }
  };
 
  return (
    <section id="contact" className="py-16 bg-gray-50/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="scroll-animate mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            On en parle ?
          </h2>
          <div className="w-12 h-1 bg-teal-500 rounded-full" />
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            ref={cardLeftRef}
            className="scroll-animate bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Message reçu !
                </h3>
                <p className="text-gray-500">Je reviens vers vous sous 24h.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-teal-600 hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nom
                  </label>
                  <input
                    type="text"
                    required
                    minLength={2}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all"
                    placeholder="Prénom et nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all"
                    placeholder="email@exemple.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Quel service vous intéresse ?
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all bg-white text-gray-700"
                  >
                    <option value="">Choisir...</option>
                    <option>Vitrine Moderne</option>
                    <option>Vitrine + IA</option>
                    <option>Sur Mesure</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    minLength={10}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>
 
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-100 text-red-700 text-sm rounded-lg px-4 py-3">
                    {errorMessage}
                  </div>
                )}
 
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60"
                >
                  {status === 'loading' ? 'Envoi...' : 'Envoyer'}
                </button>
                <p className="text-center text-xs text-gray-400 mt-2">
                  Réponse sous 24h. Sans engagement.
                </p>
              </form>
            )}
          </div>
 
          <div
            ref={cardRightRef}
            className="scroll-animate flex flex-col justify-center gap-8"
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Réserver un créneau
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                30 minutes pour faire le point sur votre projet. Sans engagement.
              </p>
              <a
                href="https://calendly.com/ndeye-aissatou-gassama-sn/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-colors text-center"
              >
                Réserver sur Calendly
              </a>
            </div>
 
            <div className="flex justify-center gap-4">
              {[
                {
                  href: 'https://linkedin.com/in/ndeye-aissatou-gassama',
                  icon: Linkedin,
                  label: 'LinkedIn',
                },
                {
                  href: 'https://www.malt.fr/profile/ayshagassama',
                  icon: () => <span className="font-bold text-sm">M</span>,
                  label: 'Malt',
                },
                {
                  href: 'https://github.com/ayshagassama1',
                  icon: Github,
                  label: 'GitHub',
                },
              ].map((link, i) => {
                const Icon = link.icon;
                return (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-200 hover:border-teal-300 hover:text-teal-600 text-gray-500 px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

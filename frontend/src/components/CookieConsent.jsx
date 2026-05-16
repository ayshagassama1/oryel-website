import { useState, useEffect } from 'react';

const GA_ID = 'G-CGYSSETX9P';

function loadGA() {
  if (document.getElementById('ga-script')) return;

  const script1 = document.createElement('script');
  script1.id = 'ga-script';
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script1);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === 'accepted') {
      loadGA();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    loadGA();
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-2xl mx-auto bg-gray-900 text-white rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex-1 text-sm text-gray-300 leading-relaxed">
          Ce site utilise Google Analytics pour mesurer l'audience, de façon anonyme.
          Aucune donnée personnelle n'est transmise à des tiers.{' '}
          <a
            href="/mentions-legales"
            className="text-teal-400 hover:underline"
          >
            En savoir plus
          </a>
          .
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm rounded-lg border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-medium transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
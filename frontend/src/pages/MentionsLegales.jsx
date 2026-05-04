import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function MentionsLegales() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Mentions légales - Oryel</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen bg-white font-inter">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600 transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
  
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mentions légales</h1>
          <p className="text-sm text-gray-400 mb-12">Dernière mise à jour : mai 2026</p>

          <section className="mb-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-100">
              Éditeur du site
            </h2>
            <div className="text-gray-600 space-y-1 text-sm leading-relaxed">
              <p><span className="font-medium text-gray-700">Raison sociale :</span> Oryel</p>
              <p><span className="font-medium text-gray-700">Représentante :</span> Ndeye Aissatou Gassama</p>
              <p><span className="font-medium text-gray-700">Statut :</span> Auto-entrepreneur</p>
              <p><span className="font-medium text-gray-700">SIREN :</span> 982 878 449</p>
              <p><span className="font-medium text-gray-700">Siège social :</span> 31 Rue Saint-Pierre, 57000 Metz, France</p>
              <p>
                <span className="font-medium text-gray-700">Contact :</span>{' '}
                <a href="mailto:contact@oryel.dev" className="text-teal-600 hover:underline">
                  contact@oryel.dev
                </a>
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-100">
              Hébergement
            </h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-1">
              <p><span className="font-medium text-gray-700">Prestataire :</span> Amazon Web Services (AWS)</p>
              <p><span className="font-medium text-gray-700">Services utilisés :</span> Amazon S3, Amazon CloudFront, AWS Lambda</p>
              <p><span className="font-medium text-gray-700">Région :</span> Europe (Paris) - eu-west-3</p>
              <p>
                <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                  aws.amazon.com
                </a>
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-100">
              Politique de confidentialité
            </h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-1">Données collectées</h3>
                <p>
                  Via le formulaire de contact, les informations suivantes sont collectées : nom, adresse e-mail,
                  et contenu du message. Ces données sont utilisées exclusivement pour répondre à votre demande.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-1">Base légale</h3>
                <p>
                  Le traitement repose sur l'intérêt légitime de l'éditeur à répondre aux demandes de contact
                  (article 6.1.f du RGPD).
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-1">Durée de conservation</h3>
                <p>
                  Les données sont conservées le temps nécessaire au traitement de votre demande, et au maximum
                  3 ans à compter du dernier contact.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-1">Chatbot</h3>
                <p>
                  Le chatbot intégré au site est alimenté par l'API Groq. Les messages saisis dans le chatbot
                  sont transmis à Groq pour générer une réponse et ne sont pas conservés par Oryel.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-1">Partage des données</h3>
                <p>
                  Aucune donnée personnelle n'est vendue, louée ou transmise à des tiers à des fins commerciales.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-1">Vos droits</h3>
                <p>
                  Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès,
                  de rectification, d'effacement et d'opposition concernant vos données. Pour exercer ces droits,
                  contactez :{' '}
                  <a href="mailto:contact@oryel.dev" className="text-teal-600 hover:underline">
                    contact@oryel.dev
                  </a>
                </p>
                <p className="mt-1">
                  Vous pouvez également introduire une réclamation auprès de la{' '}
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                    CNIL
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-100">
              Cookies
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ce site n'utilise pas de cookies de tracking ou de mesure d'audience. Seuls des cookies
              strictement nécessaires au fonctionnement technique du site peuvent être déposés, et ne
              requièrent pas votre consentement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-100">
              Propriété intellectuelle
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              L'ensemble du contenu de ce site (textes, code source, design) est la propriété exclusive
              d'Oryel - Aissatou Gassama, sauf mentions contraires. Toute reproduction, même partielle,
              est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-100">
              Limitation de responsabilité
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Oryel s'efforce de maintenir des informations à jour mais ne peut garantir l'exactitude,
              l'exhaustivité ou l'actualité des informations diffusées sur ce site. Les liens vers des
              sites tiers sont fournis à titre informatif ; Oryel n'est pas responsable de leur contenu.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
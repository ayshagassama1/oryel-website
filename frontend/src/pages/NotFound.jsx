import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo
        path="/404"
        title="Page introuvable | Oryel dev"
        description="Cette page n'existe pas ou a été déplacée."
        noindex
      />

      <div className="min-h-screen bg-white font-inter flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <p className="text-sm font-semibold text-teal-600 mb-3">Erreur 404</p>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Cette page n'existe pas
          </h1>

          <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-lg">
            L'adresse saisie est peut-être erronée, ou la page a été déplacée
            depuis. Vous pouvez revenir à l'accueil pour reprendre votre
            navigation.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:underline underline-offset-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </>
  );
}
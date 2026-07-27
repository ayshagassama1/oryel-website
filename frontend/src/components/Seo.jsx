import { Head } from 'vite-react-ssg';

const SITE_URL = 'https://oryel.dev';

/**
 * Balises SEO propres a chaque page.
 *
 * A utiliser dans TOUTES les pages, sans exception.
 * Une page sans <Seo> herite du canonical d'une autre page,
 * ce qui l'empeche d'etre indexee.
 *
 * @param {string} title       Titre de la page, 55 a 60 caracteres.
 * @param {string} description Meta description, 140 a 160 caracteres.
 * @param {string} path        Chemin de la page, avec le slash initial. Ex : '/tarifs'.
 * @param {boolean} noindex    Exclure la page de l'index.
 */
export default function Seo({ title, description, path, noindex = false }) {
  if (import.meta.env.DEV && typeof path !== 'string') {
    console.error(
      `[Seo] prop "path" manquante ou invalide pour la page "${title}". ` +
        'Le canonical sera incorrect et la page ne sera pas indexee.'
    );
  }

  const url = `${SITE_URL}${path === '/' ? '/' : path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
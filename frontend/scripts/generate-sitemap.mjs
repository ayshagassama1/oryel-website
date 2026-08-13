import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://oryel.dev';
const DIST_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

// Nombre de pages indexables attendu. Au 10/08/2026, seule la home est
// indexable (mentions-legales et 404 sont en noindex par conception). A
// relever au fur et a mesure des pages creees en PHASE 2 : un sitemap qui se
// vide silencieusement ne produit aucun symptome visible avant plusieurs
// mois, un build rouge est le seul signal qui ne s'ignore pas.
const MIN_PAGES = 1;

const isNoindex = (html) => /<meta[^>]*\bname="robots"[^>]*\bcontent="[^"]*noindex/i.test(html);

const pathFromFile = (file) =>
  file === 'index.html' ? '/' : `/${file.replace(/\.html$/, '')}`;

const files = readdirSync(DIST_DIR).filter((f) => f.endsWith('.html'));

const urls = files
  .map((file) => {
    const fullPath = join(DIST_DIR, file);
    const html = readFileSync(fullPath, 'utf-8');
    if (isNoindex(html)) return null;
    return {
      loc: `${SITE_URL}${pathFromFile(file)}`,
      lastmod: statSync(fullPath).mtime.toISOString().slice(0, 10),
      priority: file === 'index.html' ? '1.0' : '0.6',
    };
  })
  .filter(Boolean)
  .sort((a, b) => a.loc.localeCompare(b.loc));

if (urls.length < MIN_PAGES) {
  console.error(
    `[sitemap] ${urls.length} page(s) indexable(s) trouvee(s) dans dist/, ` +
      `minimum attendu : ${MIN_PAGES}. Build interrompu.`
  );
  process.exit(1);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(DIST_DIR, 'sitemap.xml'), xml);
console.log(`[sitemap] ${urls.length} page(s) ecrite(s) dans dist/sitemap.xml`);

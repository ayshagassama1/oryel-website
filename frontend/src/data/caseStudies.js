// Études de cas : uniquement des faits vérifiables (chiffres datés, témoignage autorisé).
export const caseStudies = [
  {
    id: 'sunumenu',
    title: 'SunuMenu',
    client: 'Le Thiossane, restaurant sénégalais à Paris (5e)',
    url: 'https://sunumenu.sunuconseil.com',
    screenshot: '/screenshots/sunumenu.webp',
    screenshotAlt: 'Interface de SunuMenu, menu digital par QR code pour restaurants',
    before:
      "Une carte papier en format livret, imprimée en autant d'exemplaires que de tables. Quand un prix changeait, il fallait tout réimprimer. Quand un plat manquait pendant le service, le serveur devait revenir vers le client pour lui faire changer sa commande.",
    work:
      "J'ai développé SunuMenu, une carte en ligne accessible par QR code depuis chaque table. Le restaurant modifie ses prix et désactive un plat épuisé depuis son interface, sans rien réimprimer. Un agent IA traduit la carte en anglais : le client voit le menu dans la langue qu'il choisit. La saisie initiale de la carte a été prise en charge par l'équipe de SunuConseil.",
    outcome:
      "L'équipe du restaurant active et désactive des plats plusieurs fois par jour, selon ce qui reste en cuisine.",
    results: [
      { value: '4 865', label: 'scans du menu entre septembre et le 10 novembre 2026' },
      { value: '2 langues', label: 'carte en français et en anglais, traduite par un agent IA' },
      { value: '< 1 $', label: "d'hébergement AWS en octobre 2026" },
    ],
    testimonial: {
      quote:
        "Ça nous aide à gérer les plats, à modifier et à mettre à jour les plats du jour. Franchement, c'est très pratique et c'est moderne. On adore.",
      author: 'Maram',
      place: 'Le Thiossane, Paris 5e',
      logo: '/clients/le-thiossane.jpg',
    },
  },
  {
    id: 'sunuconseil',
    title: 'SunuConseil',
    client: 'Cabinet de conseil IT à Dakar, dont je suis co-fondatrice',
    url: 'https://sunuconseil.com',
    screenshot: '/screenshots/sunuconseil.webp',
    screenshotAlt: "Page d'accueil de SunuConseil, cabinet de conseil IT à Dakar",
    before:
      "Le site et l'outil de gestion des candidatures tournaient sur un serveur allumé en permanence, facturé même la nuit sans aucun visiteur. Une première migration depuis Google Cloud avait déjà eu lieu à l'expiration des crédits gratuits. Avec un budget serré, cette facture comptait.",
    work:
      "J'ai porté le site et la gestion des candidatures vers une architecture serverless : le code ne tourne que lorsqu'une page est demandée. Même design et mêmes fonctionnalités pour l'équipe. Les CV des candidats sont stockés dans un espace privé, consultables par l'équipe via un lien temporaire.",
    outcome: null,
    results: [
      { value: '37 $', label: 'facture AWS de juin 2026, avec le serveur' },
      { value: '< 1 $', label: "facture d'octobre 2026, après la migration (SunuMenu compris)" },
    ],
    testimonial: null,
  },
];

export const siteConfig = {
  name: "BleuOccitanie",
  description: "Guides pratiques, bons plans et lieux secrets en Occitanie. Découvrez la vraie région Sud : logements authentiques, gastronomie locale, paysages cachés.",
  domain: "bleudoccitanie.com",
  url: "https://bleudoccitanie.com",
  mainNav: [
    {
      title: "Accueil",
      href: "/",
    },
    {
      title: "Destinations",
      href: "/destinations",
    },
    {
      title: "Activités",
      href: "/activites",
    },
    {
      title: "Gastronomie",
      href: "/gastronomie",
    },
    {
      title: "Hébergements",
      href: "/hebergements",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
};

export type SiteConfig = typeof siteConfig;

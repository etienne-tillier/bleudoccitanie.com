## Description
# BleuOccitanie.com - Guide touristique spécialisé Occitanie

BleuOccitanie.com est un site de contenu spécialisé dans le tourisme en région Occitanie, conçu pour devenir LA référence pour découvrir cette région française. Le site propose des guides pratiques complets, des conseils d'initiés, des bons plans économiques et des découvertes de lieux secrets pour optimiser son séjour en Occitanie.

## Objectif et positionnement

Le site vise à capturer le trafic SEO sur les requêtes touristiques liées à l'Occitanie en proposant un contenu expert et pratique. L'objectif business repose sur la monétisation via l'affiliation (hébergements, activités, transports) et la génération de leads pour des partenaires locaux. Le contenu couvre tous les aspects du voyage : logements authentiques, activités incontournables, gastronomie locale, paysages naturels, conseils budgétaires, itinéraires optimisés et comparaisons avec d'autres régions françaises.

## Public cible

Touristes français et internationaux recherchant une expérience authentique en Occitanie, des familles aux couples en passant par les voyageurs solo et les groupes d'amis, avec un focus sur ceux qui privilégient la découverte de lieux moins touristiques et les conseils pratiques pour voyager malin.

## Prompt IA
Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- Nom du projet : BleuOccitanie.com
- Domaine : bleudoccitanie.com
- Type de site : Money site principal (contenu SEO + affiliation)
- Thématiques : Tourisme Occitanie, guides de voyage, bons plans
- Objectif business : Monétisation par affiliation et génération de leads
- Audience cible : Touristes français et internationaux cherchant une expérience authentique en Occitanie

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs** décrivant l'ambiance : Authentique, Ensoleillé, Chaleureux, Découverte, Méditerranéen
- **Références visuelles mentales** : Ciel bleu azur du Midi, pierres ocre des villages, lavande provençale, eaux turquoise de la Méditerranée, terres rouge-orangé du Languedoc, oliviers argentés
- **Émotions à évoquer** : Évasion ensoleillée, authenticité du Sud, découverte de trésors cachés, chaleur humaine locale, sérénité méditerranéenne

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers visuel ci-dessus, l'agent développeur devra :
1. Identifier les couleurs naturellement associées à l'Occitanie (bleus azur, ocres chaleureux, violets lavande)
2. Créer une palette UNIQUE avec :
   - Couleur principale (primary) : Bleu méditerranéen profond
   - Couleur secondaire (secondary) : Ocre doré des villages
   - Couleur d'accent (accent) : Violet lavande subtil
   - Couleur de fond (background) : Blanc cassé crème
   - Variante hover inspirée du coucher de soleil méditerranéen
3. Assurer un contraste suffisant pour l'accessibilité

### Typographie
- Google Font principale : **Libre Baskerville** pour les titres (évoque l'élégance du patrimoine français)
- Google Font secondaire : **Source Sans Pro** pour le corps de texte (lisibilité optimale)
- Style : Équilibre entre tradition française et modernité web

## 2. SEO & métadonnées
- **Titre SEO principal** : "Guide Occitanie : Découvrez les secrets du Sud de la France"
- **Méta-description principale** : "Guides pratiques, bons plans et lieux secrets en Occitanie. Découvrez la vraie région Sud : logements authentiques, gastronomie locale, paysages cachés."
- **Open Graph title** : "BleuOccitanie - Votre guide expert de l'Occitanie"

## 3. Rôle du template
- Le projet part d'un template Next.js existant
- Fichiers à mettre à jour :
  - `config/site.ts` (name: "BleuOccitanie", description, domain: "bleudoccitanie.com")
  - `app/globals.css` (palette Occitanie UNIQUE selon méthodologie section 1)
  - contenus de démo dans `content/data/*` et MDX
  - configuration blog Supabase (SITE_DOMAIN: "bleudoccitanie.com")

## 4. Contenu & structure à mettre en place

### Images pré-générées - À TÉLÉCHARGER ET INTÉGRER :
- Hero principal : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bleudoccitanie-com-home-hero-carcassonne-sunset.jpeg
- Section destinations : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bleudoccitanie-com-home-destinations-montpellier-cathedral.jpeg
- Section activités : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bleudoccitanie-com-home-activities-cevennes-hiking.jpeg
- Section gastronomie : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bleudoccitanie-com-home-food-cassoulet-traditional.jpeg
- Section nature : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bleudoccitanie-com-home-nature-pont-du-gard.jpeg
- Section hébergements : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bleudoccitanie-com-home-hotels-mas-provence.jpeg
- Page destinations - Toulouse : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bleudoccitanie-com-destinations-card-toulouse-capitole.jpeg
- Page destinations - Nîmes : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bleudoccitanie-com-destinations-card-nimes-arenes.jpeg
- Page about : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bleudoccitanie-com-about-hero-author-occitanie.jpeg

### Sections obligatoires sur la page d'accueil (/) :
- **Hero** : "Découvrez l'Occitanie autrement" - Sous-titre sur l'expertise locale et les secrets cachés - CTA "Explorez nos guides"
- **Destinations phares** : Cartes visuelles des villes incontournables (Toulouse, Montpellier, Nîmes, Carcassonne, Perpignan)
- **Activités par saison** : Randonnées Cévennes, plages méditerranéennes, patrimoine historique, routes des vins
- **Bons plans et conseils** : Section dédiée aux astuces économiques et lieux secrets
- **Gastronomie locale** : Spécialités régionales, adresses authentiques, marchés locaux
- **Hébergements authentiques** : Mas provençaux, gîtes de charme, alternatives aux hôtels classiques

### Pages importantes :
- `/destinations/*` : Guides complets par ville/région
- `/activites/*` : Activités classées par type et saison
- `/hebergements/*` : Sélection d'hébergements authentiques
- `/gastronomie/*` : Guide culinaire régional
- `/bons-plans/*` : Conseils économiques et gratuits
- `/blog/*` : Articles d'actualité et découvertes

### Clusters thématiques :
- Patrimoine historique (Carcassonne, Pont du Gard, sites cathares)
- Nature et randonnées (Cévennes, Pyrénées, Camargue)
- Côte méditerranéenne (plages, ports, activités nautiques)
- Gastronomie et terroir (vins, spécialités, marchés)
- Villes d'art (Toulouse, Montpellier, Nîmes)

## 5. Consignes éditoriales
- **Ton** : Expert local passionné, chaleureux mais informatif, évite le marketing excessif
- **Types d'articles** : Guides pratiques détaillés, comparatifs honnêtes, témoignages authentiques, bons plans vérifiés
- **Contraintes** : Éviter les promesses exagérées, privilégier l'authenticité sur le sensationnel, vérifier la faisabilité des conseils
- **Style** : Accessible mais expert, avec des informations pratiques concrètes (prix, horaires, accès)

## 6. Stratégie de contenu prioritaire
- **Phase 1** : Guides des 5 villes principales + activités phares
- **Phase 2** : Contenu saisonnier et bons plans économiques
- **Phase 3** : Guides thématiques (gastronomie, nature, patrimoine)
- **Mots-clés cibles** : "que faire en Occitanie", "guide Occitanie", "tourisme Languedoc", "visiter [ville] Occitanie"

## 7. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN: "bleudoccitanie.com")
- Mise à jour `config/site.ts` avec informations Occitanie
- **Création de la palette Occitanie UNIQUE** dans `app/globals.css`
- Logos adaptés au thème méditerranéen (`/public/logo.svg`, `/app/icon.svg`)
- Intégration blog Supabase (filtrage par domaine)
- **Téléchargement et intégration** des 9 images pré-générées
- Configuration déploiement avec domaine bleudoccitanie.com

## 8. Anti-patterns à éviter
❌ Commencer à coder avant d'avoir défini l'identité visuelle Occitanie
❌ Utiliser des couleurs génériques au lieu de l'univers méditerranéen
❌ Créer un design touristique cliché
❌ Négliger l'optimisation mobile pour les voyageurs
❌ Oublier les aspects pratiques (transports, budgets, réservations)
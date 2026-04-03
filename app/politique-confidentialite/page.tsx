import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Comment nous protégeons et gérons vos données personnelles sur BleuOccitanie.com.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12">
        <h1 className="font-heading text-3xl font-bold text-primary mb-8 border-b border-border pb-4">Politique de Confidentialité</h1>
        
        <div className="prose prose-slate max-w-none">
          <p>
            Dernière mise à jour : 3 Avril 2026
          </p>

          <h2>1. Introduction</h2>
          <p>
            Face au développement des nouveaux outils de communication, il est nécessaire de porter une attention particulière à la protection de la vie privée. C&apos;est pourquoi, nous nous engageons à respecter la confidentialité des renseignements personnels que nous collectons sur {siteConfig.name}.
          </p>

          <h2>2. Collecte des renseignements personnels</h2>
          <p>
            Nous ne collectons aucune donnée personnelle de manière automatique ou insidieuse. Les seules données collectées sont celles que vous nous communiquez volontairement (par exemple, votre adresse email ou votre nom lorsque vous utilisez notre formulaire de contact).
          </p>
          <ul>
            <li>Nom / Prénom</li>
            <li>Adresse électronique</li>
          </ul>

          <h2>3. Cookies et traceurs</h2>
          <p>
            Ce site est conçu pour être respectueux de votre vie privée. {siteConfig.name} utilise uniquement des cookies strictement nécessaires au fonctionnement technique du site ou des outils d&apos;analyse d&apos;audience anonymisés et exemptés de consentement préalable (conformément aux recommandations de la CNIL).
            Nous n&apos;utilisons aucun cookie de ciblage publicitaire ni ne revendons vos données à des tiers.
          </p>

          <h2>4. Hébergement et Supabase</h2>
          <p>
            Notre application est hébergée sur Vercel et utilise Supabase (une alternative Open Source à Firebase) pour le stockage du contenu de notre blog. Aucune donnée personnelle d&apos;utilisateur n&apos;y est stockée à des fins de ciblage.
          </p>

          <h2>5. Droit d&apos;opposition et de retrait</h2>
          <p>
            Nous nous engageons à vous offrir un droit d&apos;opposition et de retrait quant à vos renseignements personnels. Conformément à la législation européenne (RGPD), vous disposez d&apos;un droit d&apos;accès, de modification et de suppression des données vous concernant.
          </p>
          <p>
            Pour exercer ce droit, vous pouvez nous contacter :<br />
            Email : <a href="mailto:contact@bleudoccitanie.com">contact@bleudoccitanie.com</a>
          </p>

          <h2>6. Sécurité</h2>
          <p>
            Les renseignements personnels que nous collectons sont conservés dans un environnement sécurisé. Les personnes travaillant pour nous sont tenues de respecter la confidentialité de vos informations.
          </p>
        </div>
      </div>
    </div>
  );
}

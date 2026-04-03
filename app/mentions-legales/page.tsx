import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales et conditions d'utilisation du site BleuOccitanie.com.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12">
        <h1 className="font-heading text-3xl font-bold text-primary mb-8 border-b border-border pb-4">Mentions Légales</h1>
        
        <div className="prose prose-slate max-w-none">
          <h2>1. Éditeur du site</h2>
          <p>
            Le présent site, accessible à l&apos;URL {siteConfig.url} (le « Site »), est édité par :<br />
            <strong>L&apos;Équipe {siteConfig.name}</strong><br />
            Responsable de la publication : Équipe Éditoriale BleuOccitanie<br />
            Contact : <a href="mailto:contact@bleudoccitanie.com">contact@bleudoccitanie.com</a>
          </p>

          <h2>2. Hébergement</h2>
          <p>
            Le Site est hébergé par la société Vercel Inc., située :<br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789, USA<br />
            Contact : privacy@vercel.com
          </p>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            La reproduction de tout ou partie de ce site sur un support électronique ou papier quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            Les marques citées sur ce site sont déposées par les sociétés qui en sont propriétaires.
          </p>

          <h2>4. Conditions générales d&apos;utilisation</h2>
          <p>
            L&apos;utilisation du site implique l&apos;acceptation pleine et entière des conditions générales d&apos;utilisation décrites ci-après. Ces conditions d&apos;utilisation sont susceptibles d&apos;être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
          </p>

          <h2>5. Affiliation et partenariats</h2>
          <p>
            {siteConfig.name} participe à divers programmes d&apos;affiliation. Des liens pointant vers des sites partenaires peuvent vous permettre d&apos;effectuer des réservations (hôtels, activités). Le clic sur ces liens ou l&apos;achat via ces liens peut générer une commission pour BleuOccitanie, sans aucun coût supplémentaire pour l&apos;utilisateur. Ces commissions nous permettent de maintenir l&apos;accès gratuit à l&apos;intégralité de nos guides.
          </p>
        </div>
      </div>
    </div>
  );
}

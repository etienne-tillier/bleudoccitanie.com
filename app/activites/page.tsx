import { Metadata } from "next";
import Image from "next/image";
import { BlogCard } from "@/components/BlogCard";
import { getBlogPostsByCategory } from "@/lib/blog";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Que faire en Occitanie ? Activités, Loisirs & Randonnées",
  description: "Des sommets des Pyrénées aux plages de Méditerranée : trouvez les meilleures activités, visites et itinéraires de randonnée pour votre séjour en Occitanie.",
};

export default async function ActivitesPage() {
  const posts = await getBlogPostsByCategory("activites", 12);

  return (
    <div className="bg-background min-h-screen pb-20">
      <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-50 mix-blend-overlay">
          <Image
            src="/images/home-activities.jpeg"
            alt="Activités en extérieur en Occitanie"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/10" />
        <div className="relative z-10 text-center px-4 mt-10">
          <span className="inline-block rounded-full bg-secondary/80 px-4 py-1.5 text-sm font-semibold text-secondary-foreground mb-4">Loisirs & Nature</span>
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-7xl mb-6">
            Que faire en Occitanie ?
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto shadow-sm">
            Vivez le Sud au grand air : randonnées vertigineuses, visites culturelles fortes et balades maritimes.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-16 relative z-20 mb-20">
        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <p className="lead text-xl text-foreground/80 font-medium text-center mb-12">
              L&apos;Occitanie est le plus grand terrain de jeu de France. Grâce à une géographie exceptionnelle allant de la mer à la haute montagne, la région permet de pratiquer une multitude d&apos;activités adaptées à toutes les envies et saisons.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mt-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">Randonnées et Plein Air</h2>
                <p>
                  Les amateurs de marche trouveront leur bonheur absolu. Domptez les sentiers exigeants des <strong>Pyrénées</strong> (comme le mythique Pic du Midi ou le Cirque de Gavarnie), ou explorez les vallées préservées du <strong>Parc National des Cévennes</strong> en suivant les traces de Stevenson. Les paysages époustouflants des Causses et de l&apos;Aubrac promettent des escapades mémorables, loin de la foule.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">Activités Nautiques et Baignade</h2>
                <p>
                  Avec son accès privilégié à la Méditerranée, la côte offre tout un éventail de loisirs : paddle sur l&apos;étang de Thau, kitesurf, ou simple baignade familiale. Dans les terres, le <strong>Canal du Midi</strong> (louez un bateau sans permis ou longez-le à vélo) et la fraîcheur vertigineuse des <strong>Gorges du Tarn</strong> (idéal pour le canoë-kayak) sont incontournables en plein été.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">Culture et Patrimoine</h2>
                <p>
                  L&apos;histoire occitane est riche et tumultueuse. Remontez le temps en arpentant l&apos;aqueduc romain le plus célèbre du monde : le <strong>Pont du Gard</strong>. Frissonnez au pied des vertigineux <strong>Châteaux Cathares</strong> (Peyrepertuse, Quéribus) érigés sur des pitons rocheux, et laissez-vous transporter par l&apos;art roman et les splendeurs de l&apos;époque médiévale.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">En Famille ou Entre Amis</h2>
                <p>
                  Pour une sortie plus détendue, la région foisonne de parcs animaliers réputés (Réserve africaine de Sigean), de grottes spectaculaires aménagées pour des explorations féériques (Gouffre de Padirac, Grotte de Clamouse) et de festivals d&apos;été qui animent les places des villages à la tombée de la nuit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-8 border-b border-border pb-4">
          Nos Derniers Guides d&apos;Activités
        </h2>
        
        {posts && posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-12 text-center text-foreground/70 shadow-sm">
            <p>Nos guides pratiques et listes d&apos;activités arrivent très prochainement.</p>
          </div>
        )}
      </section>
    </div>
  );
}

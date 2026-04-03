import { Metadata } from "next";
import Image from "next/image";
import { BlogCard } from "@/components/BlogCard";
import { getBlogPostsByCategory } from "@/lib/blog";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Où dormir en Occitanie : Hébergements, Hôtels et Gîtes de Charme",
  description: "Mas provençaux, gîtes dans les Cévennes, hôtels en bord de mer ou cabanes insolites : notre sélection des meilleurs hébergements en Occitanie.",
};

export default async function HebergementsPage() {
  const posts = await getBlogPostsByCategory("hebergements", 12);

  return (
    <div className="bg-background min-h-screen pb-20">
      <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image
            src="/images/home-hotels.jpeg"
            alt="Hébergement de charme type mas ou gîte en Occitanie"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/10" />
        <div className="relative z-10 text-center px-4 mt-10">
          <span className="inline-block rounded-full bg-secondary/80 px-4 py-1.5 text-sm font-semibold text-secondary-foreground mb-4">La Sélection BleuOccitanie</span>
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-7xl mb-6">
            Où dormir en Occitanie ?
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto shadow-sm">
            La fine fleur des hébergements authentiques, des mas de caractère aux refuges secrets en pleine nature.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-16 relative z-20 mb-20">
        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <p className="lead text-xl text-foreground/80 font-medium text-center mb-12">
              Un voyage inoubliable dépend souvent d&apos;un point de chute exceptionnel. Que vous souhaitiez vous endormir bercé par le bruit lointain des cigales ou vous réveiller face aux reflets rosés de Toulouse, le choix du logement est fondamental. Nous défrichons pour vous les adresses hors des sentiers battus.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mt-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">Mas et Bastides Autentiques</h2>
                <p>
                  Plongez au cœur du patrimoine du Sud en séjournant dans une ancienne ferme fortifiée (mas) restaurée. Nichés au milieu des vignes ou près des champs d&apos;oliviers dans le Gard, l&apos;Hérault ou l&apos;Aude, ces établissements marient le charme brut de la pierre locale avec un confort moderne (et souvent une somptueuse piscine).
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">Gîtes Ruraux et Refuges Natures</h2>
                <p>
                  Pour être au plus proche de la nature brute, louez un gîte perdu dans le Parc National des <strong>Cévennes</strong>, de l&apos;Aubrac ou au pied du Pic du Midi dans les Pyrénées. Parfaits pour les séjours de déconnexion, offrant tranquillité, feu de cheminée en hiver et ciels nocturnes dénués de toute pollution lumineuse.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">Hôtels Boutiques Urbains</h2>
                <p>
                  Lors de vos city-trips à <strong>Toulouse</strong>, <strong>Montpellier</strong> ou aux portes de <strong>Carcassonne</strong>, optez pour des hôtels confidentiels et au cachet singulier. Murs de briques roses apparentes, patios secrets à l&apos;abri du tumulte, anciens hôtels particuliers transformés : ces adresses privilégient l&apos;accueil personnalisé et le design soigné.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">Les Nuits Insolites</h2>
                <p>
                  Vous aimez l&apos;aventure douce ? L&apos;Occitanie abrite quelques-uns des créateurs de logements les plus inventifs de France. Dormez à la belle étoile dans de grandes &quot;bulles&quot; en pleine bergerie, cachez-vous dans d&apos;élégantes cabanes perchées haut dans les pins centenaires, ou glissez sur l&apos;eau dans un lodge flottant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-8 border-b border-border pb-4">
          Tests & Critiques d&apos;Hébergements
        </h2>
        
        {posts && posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-12 text-center text-foreground/70 shadow-sm">
            <p>Nous complétons actuellement nos carnets d&apos;adresses. Nos coups de cœur hébergements arrivent très bientôt.</p>
          </div>
        )}
      </section>
    </div>
  );
}

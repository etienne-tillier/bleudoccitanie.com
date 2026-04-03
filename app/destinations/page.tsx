import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { getBlogPostsByCategory } from "@/lib/blog";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Explorer l'Occitanie : Villes, Villages et Merveilles Naturelles",
  description: "Partez à la découverte des plus belles destinations d'Occitanie. De Toulouse à Montpellier, des cités cathares aux plages méditerranéennes.",
};

export default async function DestinationsPage() {
  const posts = await getBlogPostsByCategory("destinations", 12);

  return (
    <div className="bg-background min-h-screen pb-20">
      <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image
            src="/images/home-destinations.jpeg"
            alt="Vue aérienne d'une destination en Occitanie"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/10" />
        <div className="relative z-10 text-center px-4 mt-10">
          <span className="inline-block rounded-full bg-secondary/80 px-4 py-1.5 text-sm font-semibold text-secondary-foreground mb-4">Destinations Incontournables</span>
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-7xl mb-6">
            Où partir en Occitanie ?
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto shadow-sm">
            Toulouse, Montpellier, villages perchés et cités médiévales. Trouvez l&apos;inspiration pour votre prochain séjour.
          </p>
        </div>
      </section>

      {/* Contenu SEO / Intention de recherche */}
      <section className="container mx-auto px-4 -mt-16 relative z-20 mb-20">
        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            
            <p className="lead text-xl text-foreground/80 font-medium text-center mb-12">
              L&apos;Occitanie est aussi vaste qu&apos;un pays. Des sommets enneigés des Pyrénées aux étendues sauvages de la Camargue, en passant par l&apos;effervescence des grandes métropoles, la région regorge de pépites à explorer. Voici notre guide des destinations majeures pour vous aider à choisir.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mt-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">Les Métropoles Vibrantes</h2>
                <p>
                  Les grandes villes d&apos;Occitanie conjuguent douceur de vivre et dynamisme économique. <strong>Toulouse (la Ville Rose)</strong> vous séduira par sa brique chaleureuse, son Capitole et son ambiance étudiante. Plus à l&apos;est, <strong>Montpellier</strong> déploie son élégance audacieuse, mêlant ruelles médiévales de l&apos;Écusson et architecture contemporaine. Sans oublier <strong>Nîmes</strong>, la Rome française, et ses arènes antiques majestueuses.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Link href="/blog/categorie/toulouse" className="text-sm font-semibold text-secondary hover:underline">Visiter Toulouse &rarr;</Link>
                  <Link href="/blog/categorie/montpellier" className="text-sm font-semibold text-secondary hover:underline ml-4">Visiter Montpellier &rarr;</Link>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">Villages Perchés et Cités de Caractère</h2>
                <p>
                  Ne manquez pas les mythiques cités médiévales qui font la fierté de la région : <strong>Carcassonne</strong> et sa forteresse de légende, classée à l&apos;UNESCO. Poussez vers le Lot pour découvrir <strong>Rocamadour</strong>, accroché à sa falaise vertigineuse, ou <strong>Saint-Cirq-Lapopie</strong>, régulièrement élu village préféré des Français.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">La Côte Méditerranéenne</h2>
                <p>
                  Le littoral offre plus de 200 km de plages. D&apos;un côté, l&apos;authenticité de <strong>Sète</strong> (l&apos;Île singulière chère à Brassens) et des cabanes ostréicoles. De l&apos;autre, le charme catalan de <strong>Collioure</strong> sur la côte Vermeille. Plus calmes, les longues étendues de sable du Languedoc attirent les familles en quête de farniente.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">Les Grands Espaces Naturels</h2>
                <p>
                  Pour les amoureux de nature et d&apos;authenticité, le <strong>Parc National des Cévennes</strong> offre des paysages préservés, rudes et grandioses. À l&apos;ouest, le <strong>Gers</strong> dévoile la &quot;Toscane française&quot; et ses villages vallonnés. Quant à la <strong>Lozère</strong>, elle est le refuge des voyageurs en quête de déconnexion totale.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feed des articles */}
      <section className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-8 border-b border-border pb-4">
          Nos Guides & Récits de Destinations
        </h2>
        
        {posts && posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-12 text-center text-foreground/70 shadow-sm">
            <p>Nos carnets de route et guides de destinations sont en cours de rédaction. Revenez très vite !</p>
          </div>
        )}
      </section>
    </div>
  );
}

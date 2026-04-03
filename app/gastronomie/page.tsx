import { Metadata } from "next";
import Image from "next/image";
import { BlogCard } from "@/components/BlogCard";
import { getBlogPostsByCategory } from "@/lib/blog";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Gastronomie et Spécialités d'Occitanie | BleuOccitanie",
  description: "Cassoulet, huîtres de Bouzigues, vins du Languedoc... Partez à la découverte du terroir gourmand occitan et de ses meilleures adresses.",
};

export default async function GastronomiePage() {
  const posts = await getBlogPostsByCategory("gastronomie", 12);

  return (
    <div className="bg-background min-h-screen pb-20">
      <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-50 mix-blend-overlay">
          <Image
            src="/images/home-food.jpeg"
            alt="Gastronomie et terroir en Occitanie"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/10" />
        <div className="relative z-10 text-center px-4 mt-10">
          <span className="inline-block rounded-full bg-secondary/80 px-4 py-1.5 text-sm font-semibold text-secondary-foreground mb-4">Terroir & Tables Locales</span>
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-7xl mb-6">
            La Gastronomie du Sud
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto shadow-sm">
            Un véritable voyage culinaire, du cassoulet audois aux huîtres salines de Bouzigues.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-16 relative z-20 mb-20">
        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <p className="lead text-xl text-foreground/80 font-medium text-center mb-12">
              L&apos;Occitanie est le plus grand vignoble du monde, mais c&apos;est avant tout une terre de grands produits et de convivialité. Marchés colorés où flotte l&apos;odeur de l&apos;olive, halles vivantes et tables intimistes tenues par des chefs amoureux de leur terroir : suivez nos recommandations pour régaler vos papilles.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mt-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">Les Spécialités Salées</h2>
                <p>
                  Impossible de visiter la région sans goûter à l&apos;emblématique <strong>Cassoulet de Castelnaudary</strong> (ou de Toulouse, le débat est éternel). Plus au sud, dégustez la célèbre <strong>Brandade de Nîmes</strong>, la tielle sétoise piquante ou encore l&apos;<strong>Aligot de l&apos;Aubrac</strong>, ce plat fromager réconfortant qui file à l&apos;infini. Côté mer, les huîtres de Bouzigues cultivées sur l&apos;Étang de Thau sont un véritable délice iodé.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">Les Douceurs et Fromages</h2>
                <p>
                  L&apos;Occitanie cache aussi des trésors sucrés : les croquants de Cordes, les berlingots de Pézenas, ou les subtiles Grisettes de Montpellier. Mais c&apos;est surtout une terre d&apos;exception pour les fromages. Du célèbre <strong>Roquefort</strong> élevé dans les caves naturelles de l&apos;Aveyron aux Pélardons crémeux des Cévennes, le plateau de fromages est toujours une fête.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">La Route des Vins</h2>
                <p>
                  Des vignes à perte de vue du Languedoc aux terrasses escarpées du Roussillon, rencontrez des vignerons passionnés. Que vous soyez amateur de vins solaires et charpentés (Corbières, Minervois) ou de vins doux naturels (Banyuls, Rivesaltes), les caveaux de la région vous ouvrent leurs portes pour de chaleureuses dégustations.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mt-0">Les Marchés Authentiques</h2>
                <p>
                  Pour comprendre &quot;l&apos;art de vivre&quot; occitan, rien ne vaut une flânerie sur les marchés matinaux. Achetez des olives Lucques à Narbonne, de l&apos;ail rose à Lautrec, ou du canard dans le Gers. Les &quot;Halles&quot; des villes (comme les spectaculaires halles de Narbonne ou de Nîmes) sont des lieux de vie où l&apos;on déguste ses achats au comptoir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-8 border-b border-border pb-4">
          Bonnes Adresses & Dégustations
        </h2>
        
        {posts && posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-12 text-center text-foreground/70 shadow-sm">
            <p>Notre équipe sélectionne actuellement en cuisine les meilleures adresses régionales. À très vite !</p>
          </div>
        )}
      </section>
    </div>
  );
}

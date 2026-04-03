import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600; // 6h

export default async function Home() {
  const posts = await getPublishedBlogPosts();
  const latestPosts = posts?.slice(0, 3) || [];

  return (
    <>
      <section className="relative overflow-hidden bg-primary py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image
            src="/images/home-hero.jpeg"
            alt="Coucher de soleil sur Carcassonne"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        
        <div className="container relative mx-auto px-4 text-center">
          <span className="animate-fade-in-up mb-4 inline-block rounded-full bg-secondary/90 px-4 py-1.5 text-sm font-semibold tracking-wide text-secondary-foreground shadow-sm">
            BleuOccitanie.com
          </span>
          <h1 className="animate-fade-in-up delay-100 mb-6 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Découvrez l&apos;Occitanie <span className="text-secondary">Autrement</span>
          </h1>
          <p className="animate-fade-in-up delay-200 mx-auto mb-10 max-w-2xl text-lg text-white/90 sm:text-xl">
            Guides pratiques, bons plans d&apos;initiés et de nombreux trésors cachés pour vivre une expérience inoubliable dans le Sud de la France.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground shadow-sm hover:bg-hover hover:text-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              Explorez nos guides
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-black/20 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-white/20 transition-all duration-300"
            >
              Voir les actualités
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl mb-4">Destinations Phares</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Les joyaux du Midi à ne pas manquer lors de votre prochain séjour.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/blog/categorie/montpellier" className="group overflow-hidden rounded-2xl bg-card shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 w-full">
                <Image src="/images/home-destinations.jpeg" alt="Montpellier" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-heading text-2xl font-bold text-white mb-1">Montpellier</h3>
                  <p className="text-white/80 text-sm">L&apos;élégance audacieuse</p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/categorie/toulouse" className="group overflow-hidden rounded-2xl bg-card shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 w-full">
                <Image src="/images/destinations-toulouse.jpeg" alt="Toulouse" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-heading text-2xl font-bold text-white mb-1">Toulouse</h3>
                  <p className="text-white/80 text-sm">La Ville Rose</p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/categorie/nimes" className="group overflow-hidden rounded-2xl bg-card shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 w-full">
                <Image src="/images/destinations-nimes.jpeg" alt="Nîmes" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-heading text-2xl font-bold text-white mb-1">Nîmes</h3>
                  <p className="text-white/80 text-sm">Rome française</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent">Culture & Gastronomie</div>
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl leading-tight">Savourez chaque instant de votre voyage</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                De l&apos;authentique cassoulet de Castelnaudary aux vins de caractère du Languedoc, l&apos;Occitanie est une terre de gourmandise et de traditions. Vivez au rythme du Sud et éveillez vos sens.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-sm">✓</div>
                  <span className="font-medium">Marchés locaux et producteurs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-sm">✓</div>
                  <span className="font-medium">Routes des vins du Languedoc</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-sm">✓</div>
                  <span className="font-medium">Adresses secrètes et tables authentiques</span>
                </li>
              </ul>
              <div className="pt-6">
                <Link href="/gastronomie" className="font-semibold text-primary hover:text-hover underline underline-offset-4 transition-colors">Découvrir la gastronomie locale &rarr;</Link>
              </div>
            </div>
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/home-food.jpeg" alt="Gastronomie locale" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold md:text-4xl mb-4">Inspirations pour votre séjour</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Préparez votre itinéraire parfait grâce à nos suggestions.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/activites" className="group rounded-xl overflow-hidden relative h-72">
              <Image src="/images/home-activities.jpeg" alt="Activités et Randonnées" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 md:bg-black/50 transition-colors" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-heading text-xl font-bold mb-2">Activités Nature</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity md:-translate-y-2 group-hover:translate-y-0">Des sentiers des Cévennes au Canal du Midi</p>
              </div>
            </Link>
            
            <Link href="/destinations" className="group rounded-xl overflow-hidden relative h-72">
              <Image src="/images/home-nature.jpeg" alt="Patrimoine" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 md:bg-black/50 transition-colors" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-heading text-xl font-bold mb-2">Patrimoine Historique</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity md:-translate-y-2 group-hover:translate-y-0">Découvrez le Pont du Gard et les cités cathares</p>
              </div>
            </Link>
            
            <Link href="/hebergements" className="group rounded-xl overflow-hidden relative h-72">
              <Image src="/images/home-hotels.jpeg" alt="Hébergements de charme" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 md:bg-black/50 transition-colors" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-heading text-xl font-bold mb-2">Hébergements de Charme</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity md:-translate-y-2 group-hover:translate-y-0">Mas provençaux, gîtes authentiques et lieux insolites</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl mb-4">Dernières Découvertes</h2>
              <p className="text-foreground/70">Les récents articles de nos explorateurs locaux</p>
            </div>
            <Link href="/blog" className="mt-4 md:mt-0 font-semibold text-secondary hover:text-hover underline underline-offset-4 transition-colors">Voir tout le blog &rarr;</Link>
          </div>
          
          {latestPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card p-12 text-center text-foreground/70 shadow-sm">
              <p>Aucun article publié pour le moment.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

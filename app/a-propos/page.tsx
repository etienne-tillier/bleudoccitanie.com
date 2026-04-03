import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez l'histoire de BleuOccitanie.com, votre guide passionné pour découvrir la vraie région Sud.",
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center bg-primary">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <Image
            src="/images/about-author.jpeg"
            alt="Paysage occitan"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl mb-4">À propos de BleuOccitanie</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">Notre passion ? Vous dévoiler les secrets les mieux gardés du Sud.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-16 max-w-4xl mx-auto border border-border">
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">Notre Histoire</h2>
            <p>
              Né d&apos;un amour profond pour la terre d&apos;Occitanie, BleuOccitanie a été créé pour partager avec vous l&apos;authenticité et la chaleur de notre belle région. Loin des clichés et des sentiers battus, nous arpentons les routes du Sud, des sommets des Pyrénées aux plages dorées de la Méditerranée, en passant par les ruelles de nos villages perchés.
            </p>
            <p>
              Notre équipe d&apos;ambassadeurs locaux, passionnés par leur terroir, teste, photographie et sélectionne avec rigueur les meilleures adresses, les randonnées insolites et les artisans au savoir-faire unique.
            </p>

            <h2 className="font-heading text-3xl font-bold text-primary mt-12 mb-6">Notre Mission</h2>
            <p>
              Vous l&apos;aurez deviné, notre mission va au-delà d&apos;un simple guide touristique. Nous souhaitons vous faire vivre la région Occitanie <strong>autrement</strong> :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-secondary">
              <li><strong>Des conseils 100% authentiques</strong> basés sur de vraies visites et rencontres.</li>
              <li>La mise en lumière d&apos;<strong>établissements intimistes et de chefs passionnés</strong>.</li>
              <li>Des <strong>bons plans malins</strong> pour profiter de votre séjour sans vous ruiner.</li>
              <li>Le respect de la <strong>nature et du patrimoine</strong> pour un tourisme plus lent et plus juste.</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-primary mt-12 mb-6">L&apos;Équipe</h2>
            <div className="flex flex-col md:flex-row items-center gap-8 mt-8 p-6 bg-accent/5 rounded-xl border border-accent/10">
              <div className="shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                   <Image src="/images/about-author.jpeg" alt="Fondateur de BleuOccitanie" fill className="object-cover" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">Camille</h3>
                <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Fondatrice & Exploratrice</p>
                <p className="text-foreground/80 text-base m-0">
                  &quot;J&apos;ai parcouru le monde avant de réaliser que les plus beaux trésors se trouvaient sous le ciel azur de mon enfance. Avec BleuOccitanie, je veux vous transmettre cette lumière unique.&quot;
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 border-t border-border pt-12">
              <Link href="/blog" className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-hover hover:-translate-y-0.5 transition-all w-full sm:w-auto">
                Lire nos carnets de voyage
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-8 py-3 text-sm font-semibold text-foreground shadow-sm hover:bg-muted transition-all w-full sm:w-auto">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

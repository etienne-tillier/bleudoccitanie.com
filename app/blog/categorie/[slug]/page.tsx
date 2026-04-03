import { getPostsByCategory, getCategoryBySlug } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const revalidate = 21600;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const category = await getCategoryBySlug(resolvedParams.slug);
  if (!category) return {};
  return {
    title: `${category.label} | BleuOccitanie`,
    description: category.description || `Retrouvez tous nos articles dans la catégorie ${category.label}.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const category = await getCategoryBySlug(slug);
  
  // Si la catégorie n'existe pas en BDD, on affiche un 404 (sauf si c'est géré comme des routes statiques, mais les instructions disent : blog/[slug] non trouvé = notFound())
  // Wait, the rules about categories say if empty, show message "Aucun article publié pour le moment." 
  // Let's first fetch posts, and if category is null but we used it for routing, we could show empty or notFound.
  // We'll trust getCategoryBySlug.
  
  if (!category) return notFound();

  const posts = await getPostsByCategory(slug);

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl font-bold text-primary md:text-5xl mb-4">
          Catégorie : {category.label}
        </h1>
        {category.description && (
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">{category.description}</p>
        )}
      </div>

      {!posts || posts.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-12 text-center text-foreground/70 shadow-sm max-w-2xl mx-auto">
          <p className="text-lg">Aucun article publié pour le moment.</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

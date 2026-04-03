import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <div className="text-center mb-16">
        <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent mb-4">Le Magazine</span>
        <h1 className="font-heading text-4xl font-bold text-primary md:text-5xl mb-4">Chroniques d&apos;Occitanie</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto text-lg">Nos derniers récits, conseils et découvertes pour préparer votre prochain voyage dans le Sud de la France.</p>
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

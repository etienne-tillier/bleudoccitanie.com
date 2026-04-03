import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  const category = post.categories?.[0] || { label: "Article", slug: "article" };
  const altText = post.cover?.alt || post.h1;
  const h1 = post.h1;
  const description = post.meta_description || "Découvrez notre nouvel article.";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-card shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Lire l&apos;article</span>
      </Link>
      
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        {post.cover?.file_url ? (
          <Image
            src={post.cover.file_url}
            alt={altText}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary/10">
            <span className="text-secondary/50 font-heading">BleuOccitanie</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          {category.slug && category.slug !== "article" ? (
            <Link 
              href={`/blog/categorie/${category.slug}`}
              className="relative z-20 text-xs font-semibold uppercase tracking-wider text-accent hover:text-primary transition-colors"
            >
              {category.label}
            </Link>
          ) : (
             <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {category.label}
            </span>
          )}
        </div>
        
        <h3 className="font-heading text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {h1}
        </h3>
        
        <p className="text-sm text-foreground/80 line-clamp-3 mb-6">
          {description}
        </p>

        <div className="mt-auto flex items-center gap-3">
          {post.author?.avatar_url && (
            <Image 
              src={post.author.avatar_url}
              alt={post.author.name || "Auteur"}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          )}
          <div className="flex flex-col">
            <span className="text-xs font-medium">{post.author?.name || "L&apos;Équipe BleuOccitanie"}</span>
            <span className="text-xs text-foreground/50">
              {new Date(post.published_at || Date.now()).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

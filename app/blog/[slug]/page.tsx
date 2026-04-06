import { MarkdownLink } from "@/components/MarkdownLink";
import { injectDofollowMarker } from "@/lib/dofollow";
import { getBlogPostBySlug } from "@/lib/blog";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

const buildAlternatesByLocale = (post: { slug: string; default_locale?: string | null; translations?: unknown }) => {
  const siteOriginRaw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteOrigin = siteOriginRaw
    ? siteOriginRaw.replace(/\/+$/, "")
    : `https://${(process.env.SITE_DOMAIN || "").replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

  if (!siteOrigin || siteOrigin === "https://") {
    return {};
  }

  const languages: Record<string, string> = {};
  const defaultLocale = post.default_locale || "fr-FR";
  languages[defaultLocale] = `${siteOrigin}/blog/${post.slug}`;

  if (post.translations && typeof post.translations === "object") {
    for (const [locale, value] of Object.entries(post.translations as Record<string, unknown>)) {
      if (!value || typeof value !== "object") continue;
      const translation = value as Record<string, unknown>;
      const translatedSlug = typeof translation.slug === "string" ? translation.slug : "";
      const status = typeof translation.status === "string" ? translation.status : "published";

      if (!translatedSlug || status !== "published") continue;
      languages[locale] = `${siteOrigin}/blog/${translatedSlug}`;
    }
  }

  return languages;
};

export const revalidate = 21600;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);
  if (!post) return {};
  return {
    alternates: { languages: buildAlternatesByLocale(post) },
    title: post.meta_title || post.h1,
    description: post.meta_description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = await getBlogPostBySlug(slug);
  if (!post) return notFound();

  let displayH1 = post.h1;
  let displayBody = post.body_md;
  if (post.slug !== slug && post.translations) {
    for (const [, val] of Object.entries(post.translations)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((val as any).slug === slug) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        displayH1 = (val as any).h1 || displayH1;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        displayBody = (val as any).body_md || displayBody;
        break;
      }
    }
  }
  const bodyMd = injectDofollowMarker(displayBody || "");
  const altText = post.cover?.alt || displayH1;

  return (
    <article className="min-h-screen bg-background">
      {/* Cover Image */}
      {post.cover?.file_url ? (
        <div className="relative h-[40vh] min-h-[300px] w-full md:h-[60vh]">
          <Image
            src={post.cover.file_url}
            alt={altText}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ) : (
        <div className="h-24 bg-primary" />
      )}

      <div className="container relative mx-auto px-4 -mt-20 md:-mt-32">
        <div className="mx-auto max-w-4xl rounded-2xl bg-card p-6 md:p-12 shadow-xl border border-border">
          
          {post.categories && post.categories.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {post.categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/blog/categorie/${cat.slug}`}
                  className="rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          )}

          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl mb-8 leading-tight">
            {displayH1}
          </h1>

          <LanguageSwitcher post={post} currentSlug={slug} />

          <div className="prose prose-lg prose-slate max-w-none mt-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
              {bodyMd}
            </ReactMarkdown>
          </div>

          {post.author && (
            <div className="mt-16 border-t border-border pt-8 flex items-center gap-6">
              {post.author.avatar_url && (
                <div className="relative h-16 w-16 shrink-0 rounded-full overflow-hidden border border-border shrink-0">
                  <Image
                    src={post.author.avatar_url}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-heading text-xl font-bold text-foreground">{post.author.name}</p>
                {post.author.bio && <p className="text-foreground/70 mt-1">{post.author.bio}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-heading font-bold text-xl text-primary">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="flex gap-6">
            {siteConfig.mainNav?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center text-sm font-medium text-foreground hover:text-hover hover:underline underline-offset-4 transition-colors"
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
        <div className="flex justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <Link href="/a-propos" className="text-sm text-foreground/70 hover:text-hover text-center transition-colors">
            À propos
          </Link>
          <Link href="/contact" className="text-sm text-foreground/70 hover:text-hover text-center transition-colors">
            Contact
          </Link>
          <Link href="/mentions-legales" className="text-sm text-foreground/70 hover:text-hover text-center transition-colors">
            Mentions Légales
          </Link>
          <Link href="/politique-confidentialite" className="text-sm text-foreground/70 hover:text-hover text-center transition-colors">
            Politique de Confidentialité
          </Link>
        </div>
        <div className="mt-8 md:mt-0">
          <p className="text-center text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

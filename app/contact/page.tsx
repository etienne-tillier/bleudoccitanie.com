import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'équipe de BleuOccitanie.com. Une question, une suggestion d'adresse ou un partenariat ?",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl font-bold text-primary md:text-5xl mb-4">Contactez-nous</h1>
          <p className="text-foreground/80 text-lg">
            Envie de partager une adresse secrète ? Une question sur l&apos;un de nos guides ? N&apos;hésitez pas à nous écrire, nous lisons chaque message avec passion.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border text-center">
          <div className="mb-8">
            <div className="mx-auto w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Par Email</h2>
            <p className="text-foreground/70 mb-6">C&apos;est le moyen le plus direct pour nous joindre. Nous répondons généralement sous 48h (le temps d&apos;une escapade dans les Cévennes !).</p>
          </div>
          
          <a
            href="mailto:contact@bleudoccitanie.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-4 text-base font-bold text-secondary-foreground shadow-sm hover:bg-hover hover:-translate-y-1 transition-all duration-300 w-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            contact@bleudoccitanie.com
          </a>
          
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-foreground/50">
              Note : Nous n&apos;acceptons pas les articles invités (guest posts) non sollicités, ni l&apos;échange de liens sans valeur ajoutée pour nos lecteurs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

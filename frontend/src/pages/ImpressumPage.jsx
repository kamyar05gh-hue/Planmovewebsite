import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import Footer from "@/sections/Footer";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 mt-2 md:mt-2.5">
          <div className="relative flex items-center justify-between rounded-full px-4 md:px-6 py-2 border border-white/40 bg-white/90 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)]">
            <Link
              to="/"
              className="flex items-center gap-2 group"
              aria-label="PLANMOVE"
            >
              <Logo className="text-[24px] md:text-[27px]" showImage />
            </Link>
            <Link
              to="/"
              className="text-[12px] md:text-[13px] font-medium text-black/80 hover:text-black transition-colors"
            >
              ← Zurück
            </Link>
          </div>
        </div>
      </header>

      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="mx-auto max-w-[900px] px-5 md:px-10">
          <h1 className="font-display font-extrabold tracking-[-0.03em] text-[32px] sm:text-[42px] md:text-[56px] leading-[1.05] mb-10 md:mb-14">
            Impressum
          </h1>

          <div className="prose prose-invert max-w-none prose-p:text-white/70 prose-p:leading-relaxed prose-headings:text-white prose-headings:font-display prose-headings:font-bold prose-a:text-[#0EA5E9] prose-a:no-underline hover:prose-a:underline">
            <h2 className="text-[20px] md:text-[24px] mt-10 mb-4">Anbieter</h2>
            <p>
              PLANMOVE ist ein Angebot der<br />
              Future Media Leuenberger GmbH<br />
              Trogmattweg 6<br />
              3506 Grosshöchstetten<br />
              Schweiz
            </p>

            <h2 className="text-[20px] md:text-[24px] mt-10 mb-4">Planmove</h2>
            <p>
              Weltpoststrasse 5<br />
              3015 Bern<br />
              Schweiz
            </p>
            <p className="mt-4">
              Hardstrasse 201<br />
              8005 Zürich<br />
              Schweiz
            </p>

            <h2 className="text-[20px] md:text-[24px] mt-10 mb-4">Kontakt</h2>
            <p>
              Tel.: <a href="tel:+41794880011">+41 79 488 00 11</a><br />
              E-Mail: <a href="mailto:info@planmove.ch">info@planmove.ch</a>
            </p>

            <h2 className="text-[20px] md:text-[24px] mt-10 mb-4">Haftungsausschluss</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich. Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>

            <h2 className="text-[20px] md:text-[24px] mt-10 mb-4">Urheberrecht</h2>
            <p>
              Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

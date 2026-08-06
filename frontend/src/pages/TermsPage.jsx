import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import Footer from "@/sections/Footer";

export default function TermsPage() {
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
            Allgemeine Geschäftsbedingungen
          </h1>

          <div className="space-y-10 md:space-y-14 text-white/70 leading-relaxed text-[14px] md:text-[16px]">
            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">1. Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle über die Website von Planmove oder direkt bei Planmove abgeschlossenen Verträge für die Nutzung der PLANMOVE-Software und der damit verbundenen Dienstleistungen.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">2. Vertragsgegenstand</h2>
              <p>
                PLANMOVE stellt eine Softwarelösung zur Verfügung, die Unternehmen des Umzugs- und Reinigungsgewerbes bei der Kommunikation mit Kunden unterstützt. Der genaue Leistungsumfang richtet sich nach dem jeweils gewählten Abonnement oder Angebot.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">3. Preise und Zahlung</h2>
              <p>
                Die Preise verstehen sich in Schweizer Franken, zuzüglich allfälliger Mehrwertsteuer. Die Zahlungsbedingungen sind der jeweiligen Rechnung zu entnehmen. Bei verspäteter Zahlung behalten wir uns vor, den Zugang zur Software vorübergehend zu sperren.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">4. Vertragsdauer und Kündigung</h2>
              <p>
                Die Vertragsdauer richtet sich nach dem gewählten Tarif. Eine Kündigung ist unter Einhaltung der vereinbarten Kündigungsfrist schriftlich oder per E-Mail an info@planmove.ch möglich. Bei Verstössen gegen diese AGB können wir den Vertrag fristlos kündigen.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">5. Pflichten des Kunden</h2>
              <p>
                Der Kunde ist verpflichtet, die Software nach bestem Wissen und Gewissen zu nutzen, keine rechtswidrigen Inhalte zu verarbeiten und die Zugangsdaten sicher aufzubewahren. Der Kunde trägt die Verantwortung für die von ihm eingegebenen Daten.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">6. Haftungsausschluss</h2>
              <p>
                Wir übernehmen keine Haftung für indirekte Schäden, entgangenen Gewinn oder Datenverlust, soweit dies gesetzlich zulässig ist. Für Vorsatz und grobe Fahrlässigkeit bleibt die Haftung vorbehalten.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">7. Datenschutz</h2>
              <p>
                Die Bearbeitung von Personendaten unterliegt unserer Datenschutzerklärung. Mit der Nutzung der Software akzeptiert der Kunde die darin beschriebene Datenbearbeitung.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">8. Änderungen der AGB</h2>
              <p>
                Wir behalten uns das Recht vor, diese AGB jederzeit zu ändern. Massgebend ist die zum Zeitpunkt des Vertragsabschlusses geltende Version.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">9. Salvatorische Klausel</h2>
              <p>
                Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt. Die unwirksame Bestimmung ist durch eine zulässige, dem wirtschaftlichen Zweck möglichst nahekommende Regelung zu ersetzen.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">10. Anwendbares Recht und Gerichtsstand</h2>
              <p>
                Für alle Rechtsbeziehungen gilt schweizerisches Recht. Gerichtsstand für alle Streitigkeiten ist Bern, Schweiz.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

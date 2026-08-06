import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import Footer from "@/sections/Footer";

export default function PrivacyPage() {
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
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-white/50 mb-4">
            Zuletzt aktualisiert am 21.07.2026
          </p>
          <h1 className="font-display font-extrabold tracking-[-0.03em] text-[32px] sm:text-[42px] md:text-[56px] leading-[1.05] mb-10 md:mb-14">
            Datenschutzerklärung
          </h1>

          <div className="space-y-10 md:space-y-14 text-white/70 leading-relaxed text-[14px] md:text-[16px]">
            <section>
              <p>
                Wir legen grossen Wert darauf, dass der Umgang mit Personendaten transparent ist. Diese Datenschutzerklärung gibt Auskunft darüber, welche personenbezogenen Daten wir als Planmove sammeln, wie wir sie im Rahmen der PLANMOVE-Software für Umzugs- und Reinigungsunternehmen verarbeiten und an wen wir sie gegebenenfalls weitergeben.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">1. Welche Dienste wir nutzen</h2>
              <p className="mb-4">
                Für den Betrieb unserer Website und der PLANMOVE-Software setzen wir ausschliesslich die folgenden Dienste ein:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Google Fonts (Schriftarten für die Darstellung der Website)</li>
                <li>WhatsApp (Kommunikation mit Interessenten und Kunden)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">2. Kontaktinformationen</h2>
              <p className="text-white">
                Planmove<br />
                Weltpoststrasse 5, 3015 Bern<br />
                Hardstrasse 201, 8005 Zürich<br />
                Schweiz
              </p>
              <p className="mt-4">
                E-Mail: <a href="mailto:info@planmove.ch" className="text-[#0EA5E9] hover:underline">info@planmove.ch</a><br />
                Telefon: <a href="tel:+41794880011" className="text-[#0EA5E9] hover:underline">+41 79 488 00 11</a>
              </p>
            </section>

            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">3. Allgemeine Grundsätze</h2>
              <h3 className="font-display font-semibold text-white mt-6 mb-2">3.1 Welche Daten sammeln wir?</h3>
              <p>
                Wir bearbeiten Personendaten, die Sie uns übermitteln oder die wir beim Betrieb unserer Website sammeln. Dazu gehören Kontaktdaten, Online-Kennungen (z.B. Cookie-ID, IP-Adresse), Verkehrsdaten und Inhalte, die Sie uns freiwillig mitteilen.
              </p>

              <h3 className="font-display font-semibold text-white mt-6 mb-2">3.2 Rechtfertigungsgründe</h3>
              <p>
                Wir bearbeiten Ihre Daten auf Grundlage Ihrer Einwilligung, zur Durchführung eines Vertrages oder zur Wahrung unserer berechtigten Interessen, sofern Ihre Interessen nicht überwiegen.
              </p>

              <h3 className="font-display font-semibold text-white mt-6 mb-2">3.3 Weitergabe an Dritte</h3>
              <p>
                Wir können Daten an Auftragsverarbeiter weitergeben (z.B. Hosting-Anbieter, IT-Dienstleister und Analysedienste). Dabei stellen wir sicher, dass diese den Datenschutz einhalten. Eine Übermittlung ins Ausland kann vorkommen; dafür sorgen wir vertraglich für den gleichen Schutz wie in der Schweiz.
              </p>

              <h3 className="font-display font-semibold text-white mt-6 mb-2">3.4 Aufbewahrungsdauer</h3>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke erforderlich ist. Website-Logfiles werden in der Regel nach zwölf Monaten gelöscht. Vertragsdaten können wir aufgrund gesetzlicher Vorschriften länger aufbewahren.
              </p>

              <h3 className="font-display font-semibold text-white mt-6 mb-2">3.5 Ihre Rechte</h3>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Bearbeitung Ihrer Daten. Senden Sie Ihr Gesuch bitte zusammen mit einem Identitätsnachweis an{" "}
                <a href="mailto:info@planmove.ch" className="text-[#0EA5E9] hover:underline">info@planmove.ch</a>.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">4. Einzelne Datenverarbeitungsvorgänge</h2>
              <p>
                Beim Besuch unserer Website und bei der Nutzung der PLANMOVE-Software werden automatisch bestimmte Daten zu Zwecken der Systemadministration, Statistik und Sicherheit gespeichert (z.B. IP-Adresse, Browsertyp, Betriebssystem, Datum und Uhrzeit des Zugriffs).
              </p>

              <h3 className="font-display font-semibold text-white mt-6 mb-2">4.1 Google Fonts</h3>
              <p>
                Zur einheitlichen Darstellung unserer Website laden wir Schriftarten von Google Fonts (Google LLC, USA). Beim Aufruf der Website wird dabei eine Verbindung zu Servern von Google hergestellt, wobei Ihre IP-Adresse übermittelt wird.
              </p>

              <h3 className="font-display font-semibold text-white mt-6 mb-2">4.2 WhatsApp</h3>
              <p>
                Wenn Sie uns über WhatsApp kontaktieren, verarbeiten wir Ihre Telefonnummer und den Inhalt Ihrer Nachrichten, um Ihre Anfrage zu beantworten. Für die Nutzung von WhatsApp gelten zusätzlich die Datenschutzbestimmungen der WhatsApp Ireland Limited.
              </p>

              <h3 className="font-display font-semibold text-white mt-6 mb-2">4.3 PLANMOVE-Software (PLANMOVE KI)</h3>
              <p>
                Sprachnachrichten, Offerten, Rechnungen und Kundenkommunikation, die Sie über PLANMOVE KI erstellen, werden zur Erbringung der vereinbarten Leistung verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] md:text-[22px] font-display font-bold text-white mb-4">5. Änderungen</h2>
              <p>
                Wir können diese Datenschutzerklärung jederzeit ändern. Die jeweils aktuelle Version ist auf dieser Seite veröffentlicht.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

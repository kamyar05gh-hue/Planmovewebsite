import { Logo } from "@/components/Logo";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer
      className="relative bg-[#0A0A0A] text-white overflow-hidden"
      data-testid="site-footer"
    >
      {/* Ambient green wash */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[900px] rounded-full blur-3xl pointer-events-none opacity-70"
        style={{ background: "radial-gradient(circle, rgba(37,211,102,0.22), transparent 60%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* GRAND STATEMENT */}
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-40 pb-12 md:pb-24">
        <Reveal as="p" className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] font-helvetica text-white/50 text-center md:text-left">
          <span className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-white/40" />
            {t.footer.kicker}
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h2
            data-testid="footer-headline"
            className="mt-5 md:mt-6 font-display font-extrabold tracking-[-0.045em] text-[44px] sm:text-[64px] md:text-[120px] lg:text-[152px] leading-[0.92] break-words text-center md:text-left"
          >
            {t.footer.headlineA}
            <br />
            {t.footer.headlineB}<span className="italic font-light text-[#25D366]">{t.footer.headlineHighlight}</span>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-16 flex flex-col items-center md:flex-row md:items-center md:justify-between gap-6 md:gap-8 text-center md:text-left">
          <Reveal delay={240} as="p" className="max-w-md text-[14px] md:text-[17px] leading-relaxed text-white/65">
            {t.footer.paragraph}
          </Reveal>
          <Reveal delay={360}>
            <WhatsAppButton size="lg" testId="footer-cta-button" />
          </Reveal>
        </div>
      </div>

      {/* CONTACT GRID */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 items-start text-center sm:text-left">
            {/* Brand */}
            <div className="flex flex-col items-center sm:items-start">
              <Logo variant="light" className="text-[36px] md:text-[44px] relative -top-4 md:-top-6" showImage />
              <p className="mt-0 relative -top-2 md:-top-4 max-w-xs text-[13px] md:text-[14px] leading-relaxed text-white">
                {t.footer.brandDescription}
              </p>
            </div>

            {/* Standorte */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2 mb-4 md:mb-5">
                <MapPin className="h-4 w-4 text-[#25D366]" strokeWidth={2} />
                <p className="text-[12px] md:text-[13px] uppercase tracking-[0.2em] text-white/40 font-semibold">
                  Standorte
                </p>
              </div>
              <div className="space-y-4 text-[15px] md:text-[16px] leading-relaxed text-white/90">
                <p>
                  Weltpoststrasse 5<br />
                  3015 Bern
                </p>
                <p>
                  Hardstrasse 201<br />
                  8005 Zürich
                </p>
              </div>
            </div>

            {/* E-Mail */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2 mb-4 md:mb-5">
                <Mail className="h-4 w-4 text-[#25D366]" strokeWidth={2} />
                <p className="text-[12px] md:text-[13px] uppercase tracking-[0.2em] text-white/40 font-semibold">
                  E-Mail
                </p>
              </div>
              <a
                href="mailto:info@planmove.ch"
                className="text-[15px] md:text-[16px] font-medium text-white/90 hover:text-white transition-colors duration-300"
              >
                info@planmove.ch
              </a>
            </div>

            {/* Telefon */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2 mb-4 md:mb-5">
                <Phone className="h-4 w-4 text-[#25D366]" strokeWidth={2} />
                <p className="text-[12px] md:text-[13px] uppercase tracking-[0.2em] text-white/40 font-semibold">
                  Telefon
                </p>
              </div>
              <a
                href="tel:+41794880011"
                data-testid="footer-phone"
                aria-label={t.footer.phoneAria}
                className="text-[15px] md:text-[16px] font-medium text-white/90 hover:text-white transition-colors duration-300"
              >
                <span className="leading-none whitespace-nowrap">+41 79 488 00 11</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WORDMARK + LEGAL */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-8 md:py-10 overflow-hidden">
          <div
            aria-hidden
            className="font-display font-extrabold tracking-[-0.055em] leading-[0.9] text-white/95 select-none uppercase"
            style={{ fontSize: "clamp(60px, 17vw, 260px)" }}
          >
            PLANMOVE
          </div>
          <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-3 text-[11px] md:text-[12px] tracking-[0.04em] text-white/40" style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}>
            <span className="leading-none">© {new Date().getFullYear()} PLANMOVE</span>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link to="/impressum" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">Impressum</Link>
              {/* Volle Server-Navigation (kein SPA-Link): /datenschutz/ ist die statische,
                  mehrsprachige Fassung mit den Google-OAuth-Pflichtangaben — dieselbe URL,
                  die im Google-Consent-Screen hinterlegt ist. */}
              <a href="/datenschutz/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">Datenschutzerklärung</a>
              <Link to="/agb" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">AGB's</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

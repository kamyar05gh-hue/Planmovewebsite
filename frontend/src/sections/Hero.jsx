import { Check, Star } from "lucide-react";
import RevealText from "@/components/RevealText";
import HeroVisual from "@/components/HeroVisual";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/i18n/LanguageContext";

const GlowTick = () => (
  <span className="mt-0.5 grid place-items-center h-5 w-5 lg:h-[18px] lg:w-[18px] shrink-0 text-black">
    <Check className="h-5 w-5 lg:h-[18px] lg:w-[18px]" strokeWidth={3} />
  </span>
);

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section
      id="hero"
      className="relative min-h-fit md:min-h-[100svh] lg:min-h-[calc(100vh-24px)] pt-20 md:pt-28 lg:pt-32 pb-6 md:pb-20 lg:pb-24 overflow-hidden flex items-center"
      data-testid="hero-section"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.35] hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(9,9,11,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full blur-3xl pointer-events-none opacity-70"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.18), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* LEFT — Copy */}
          <div className="lg:col-span-5 relative z-10">
            <p
              className="pm-fade-up text-[12px] md:text-[15px] tracking-[0.08em] md:tracking-[0.1em] uppercase font-bold text-[#0047ff]"
              style={{ animationDelay: "0.2s", animationDuration: "0.6s" }}
              data-testid="hero-tagline"
            >
              <span className="inline-flex items-center gap-2">
                <span
                  aria-label={t.hero.flagAria}
                  className="inline-grid place-items-center h-5 w-5 md:h-6 md:w-6 rounded-[4px] bg-[#D52B1E] text-white text-[10px] md:text-[11px] font-black tracking-wide"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.15)" }}
                >
                  <span className="relative flex items-center justify-center">
                    <span className="absolute h-[3px] w-3.5 bg-white rounded-[1px]" />
                    <span className="absolute w-[3px] h-3.5 bg-white rounded-[1px]" />
                  </span>
                </span>
                <span>{t.hero.tagline}</span>
              </span>
            </p>

            <RevealText
              as="h1"
              className="mt-3 md:mt-5 lg:mt-6 font-display font-extrabold tracking-[-0.035em] text-[36px] sm:text-[42px] md:text-[54px] lg:text-[58px] leading-[0.9]"
              lines={[
                ...t.hero.headlines.map((line, i) => (
                  <span key={`l${i}`}>{line}</span>
                )),
                <span className="text-[#0EA5E9]" key="l4">
                  {t.hero.headlineHighlight}
                </span>,
              ]}
            />

            <ul
              className="pm-fade-up mt-4 md:mt-4 max-w-xl space-y-2 md:space-y-1.5 text-[13px] md:text-[15px] leading-relaxed md:leading-relaxed text-black/75 font-semibold"
              style={{ animationDelay: "1.05s" }}
              data-testid="hero-benefits-list"
            >
              {t.hero.benefits.map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GlowTick />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div
              className="pm-fade-up mt-5 md:mt-5 flex flex-col items-start gap-3 md:gap-2.5"
              style={{ animationDelay: "1.25s" }}
            >
              {/* Google Review chip */}
              <div className="relative inline-flex">
                {/* Deep blue glow accent */}
                <span
                  aria-hidden
                  className="absolute -inset-3.5 rounded-[1.5rem] pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(14,165,233,0.6) 0%, rgba(14,165,233,0.25) 55%, transparent 78%)",
                    filter: "blur(12px)",
                  }}
                />
                <div
                  className="group relative inline-flex items-center gap-3.5 rounded-2xl border border-white/60 bg-white/70 pl-2.5 pr-4 py-2 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-14px_rgba(0,0,0,0.25)]"
                  data-testid="hero-google-review"
                >
                {/* Liquid-glass glossy highlight */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 60%)",
                  }}
                />
                <span className="relative grid place-items-center h-9 w-9 md:h-10 md:w-10 rounded-xl bg-white border border-black/[0.04] shadow-[0_2px_10px_-2px_rgba(0,0,0,0.15)]">
                  <GoogleGIcon className="h-[18px] w-[18px] md:h-5 md:w-5" />
                </span>
                <span className="relative flex flex-col gap-1">
                  <span className="flex items-center gap-1.5">
                    <span className="font-display font-extrabold text-[15px] md:text-[16px] leading-none text-black">
                      4.9
                    </span>
                    <span className="flex items-center gap-0.5 text-[#FBBF24]" aria-label={t.hero.starsAria}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 md:h-3.5 md:w-3.5 fill-current"
                        />
                      ))}
                    </span>
                  </span>
                  <span className="text-[11px] md:text-[12px] font-medium leading-none text-black/50">
                    Google · {t.hero.reviews}
                  </span>
                </span>
                </div>
              </div>

              <WhatsAppButton size="lg" testId="hero-cta-button" />
            </div>
          </div>

          {/* RIGHT — Hero video (desktop only) */}
          <div className="hidden lg:flex lg:col-span-7 relative justify-center h-full items-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

const GoogleGIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
    <path
      d="M22.5 12.27c0-.86-.08-1.7-.22-2.5H12v4.72h5.9a5.05 5.05 0 0 1-2.2 3.32v2.75h3.55c2.08-1.92 3.25-4.75 3.25-8.29z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.67l-3.55-2.75c-.98.66-2.24 1.06-3.73 1.06-2.87 0-5.3-1.94-6.17-4.55H2.15v2.85A11 11 0 0 0 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.83 14.09a6.6 6.6 0 0 1 0-4.18V7.06H2.15a11 11 0 0 0 0 9.88l3.68-2.85z"
      fill="#FBBC04"
    />
    <path
      d="M12 5.38c1.62 0 3.07.56 4.21 1.65l3.15-3.15C17.45 2.05 14.97 1 12 1a11 11 0 0 0-9.85 6.06l3.68 2.85C6.7 7.32 9.13 5.38 12 5.38z"
      fill="#EA4335"
    />
  </svg>
);

export default Hero;

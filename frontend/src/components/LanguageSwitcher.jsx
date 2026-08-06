import { useState, useEffect, useRef } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Slick language switcher — DE (default), IT, ES, SQ, KU, TR, PT, FA.
 * Wired to LanguageContext: selection translates the whole site and
 * persists to localStorage (pm_lang).
 * Responsive: pill on desktop, compact icon-only on mobile.
 */
const LANGS = [
  { code: "DE", label: "Deutsch", flagBg: "#D52B1E", flagText: "CH" },
  { code: "IT", label: "Italiano", flagBg: "#008C45", flagText: "IT" },
  { code: "ES", label: "Español", flagBg: "#AA151B", flagText: "ES" },
  { code: "SQ", label: "Shqip", flagBg: "#E41E20", flagText: "AL" },
  { code: "KU", label: "Kurdî", flagBg: "#ED2024", flagText: "KU" },
  { code: "TR", label: "Türkçe", flagBg: "#E30A17", flagText: "TR" },
  { code: "PT", label: "Português", flagBg: "#046A38", flagText: "PT" },
  { code: "FA", label: "فارسی", flagBg: "#239F40", flagText: "FA" },
];

const SwissFlag = () => (
  <span
    className="inline-grid place-items-center h-4 w-4 rounded-[3px] bg-[#D52B1E]"
    aria-hidden
  >
    <span className="relative flex items-center justify-center">
      <span className="absolute h-[2px] w-2 bg-white rounded-[1px]" />
      <span className="absolute w-[2px] h-2 bg-white rounded-[1px]" />
    </span>
  </span>
);

const ItalianFlag = () => (
  <span
    className="inline-flex h-4 w-5 overflow-hidden rounded-[3px] border border-black/10"
    aria-hidden
  >
    <span className="h-full w-1/3 bg-[#008C45]" />
    <span className="h-full w-1/3 bg-white" />
    <span className="h-full w-1/3 bg-[#CD212A]" />
  </span>
);

const SpanishFlag = () => (
  <span
    className="inline-flex flex-col h-4 w-5 overflow-hidden rounded-[3px] border border-black/10"
    aria-hidden
  >
    <span className="h-[25%] w-full bg-[#AA151B]" />
    <span className="h-[50%] w-full bg-[#F1BF00]" />
    <span className="h-[25%] w-full bg-[#AA151B]" />
  </span>
);

const AlbanianFlag = () => (
  <span
    className="inline-grid place-items-center h-4 w-5 overflow-hidden rounded-[3px] border border-black/10 bg-[#E41E20]"
    aria-hidden
  >
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="black">
      <path d="M12 2l2.5 7.5h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z" />
    </svg>
  </span>
);

const KurdishFlag = () => (
  <span
    className="inline-flex flex-col h-4 w-5 overflow-hidden rounded-[3px] border border-black/10"
    aria-hidden
  >
    <span className="h-1/3 w-full bg-[#ED2024]" />
    <span className="h-1/3 w-full bg-[#F6E827] relative">
      <span className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="#ED2024">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 7l1 5 5 1-5 1-1 5-1-5-5-1 5-1z" fill="#F6E827" />
        </svg>
      </span>
    </span>
    <span className="h-1/3 w-full bg-[#00923F]" />
  </span>
);

const TurkishFlag = () => (
  <span
    className="inline-grid place-items-center h-4 w-5 overflow-hidden rounded-[3px] border border-black/10 bg-[#E30A17]"
    aria-hidden
  >
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="white">
      <circle cx="10" cy="12" r="6" />
      <circle cx="11.8" cy="12" r="4.8" fill="#E30A17" />
      <path d="M16.5 9.5l.8 1.9 2 .1-1.6 1.3.6 2-1.8-1.2-1.8 1.2.6-2-1.6-1.3 2-.1z" />
    </svg>
  </span>
);

const PortugueseFlag = () => (
  <span
    className="inline-flex h-4 w-5 overflow-hidden rounded-[3px] border border-black/10"
    aria-hidden
  >
    <span className="h-full w-2/5 bg-[#046A38]" />
    <span className="h-full w-3/5 bg-[#DA291C]" />
  </span>
);

const PersianFlag = () => (
  <span
    className="inline-flex flex-col h-4 w-5 overflow-hidden rounded-[3px] border border-black/10"
    aria-hidden
  >
    <span className="h-1/3 w-full bg-[#239F40]" />
    <span className="h-1/3 w-full bg-white" />
    <span className="h-1/3 w-full bg-[#DA0000]" />
  </span>
);

const FLAG_ICONS = {
  DE: <SwissFlag />,
  IT: <ItalianFlag />,
  ES: <SpanishFlag />,
  SQ: <AlbanianFlag />,
  KU: <KurdishFlag />,
  TR: <TurkishFlag />,
  PT: <PortugueseFlag />,
  FA: <PersianFlag />,
};

export const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const selectLang = (code) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative" data-testid="language-switcher">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        data-testid="language-switcher-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.languageSwitcher.ariaLabel(lang)}
        className="inline-flex items-center gap-1.5 md:gap-2 h-9 md:h-10 pl-2 pr-2.5 md:pl-2.5 md:pr-3 rounded-full bg-white border border-black/10 hover:border-black/25 transition-colors duration-300"
      >
        {FLAG_ICONS[lang]}
        <span className="font-helvetica text-[11px] md:text-[12px] font-semibold tracking-[0.05em] text-black/80">
          {lang}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-black/50 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2.2}
        />
      </button>

      {open && (
        <div
          role="listbox"
          data-testid="language-switcher-menu"
          className="absolute right-0 mt-2 w-[188px] rounded-2xl bg-white border border-black/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.18)] overflow-hidden z-50 origin-top-right animate-[fadeIn_180ms_ease-out]"
          style={{ animation: "fadeIn 180ms ease-out" }}
        >
          <ul className="py-1.5">
            {LANGS.map((l) => {
              const active = l.code === lang;
              return (
                <li key={l.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    data-testid={`language-option-${l.code}`}
                    onClick={() => selectLang(l.code)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-left transition-colors duration-200 ${
                      active
                        ? "bg-[#0EA5E9]/10"
                        : "hover:bg-black/[0.04]"
                    }`}
                  >
                    {FLAG_ICONS[l.code]}
                    <span
                      className={`flex-1 text-[13px] font-medium tracking-tight ${
                        active ? "text-[#0369A1]" : "text-black/80"
                      }`}
                    >
                      {l.label}
                    </span>
                    <span className="font-helvetica text-[10px] tracking-[0.08em] text-black/40">
                      {l.code}
                    </span>
                    {active && (
                      <Check className="h-3.5 w-3.5 text-[#0284C7] shrink-0" strokeWidth={3} />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;

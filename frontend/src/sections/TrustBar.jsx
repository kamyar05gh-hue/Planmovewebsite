import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

// Deep-glow blue tick — mirrors the hero GlowTick treatment
const GlowTickIcon = () => (
  <span className="relative grid place-items-center h-12 w-12 md:h-14 md:w-14 rounded-full shrink-0">
    <span
      aria-hidden
      className="absolute -inset-2 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(14,165,233,0.5) 0%, rgba(14,165,233,0.16) 50%, transparent 72%)",
        filter: "blur(6px)",
      }}
    />
    <span className="relative grid place-items-center h-full w-full rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] shadow-[0_10px_24px_-8px_rgba(14,165,233,0.65),inset_0_1px_1px_rgba(255,255,255,0.35)]">
      <Check className="h-5 w-5 md:h-6 md:w-6 text-white" strokeWidth={3.2} />
    </span>
  </span>
);

export const TrustBar = () => {
  const { t } = useLanguage();
  const items = t.trustBar.items;
  return (
    <section
      id="vorteile"
      className="relative bg-[#F9FAFB] border-b border-black/[0.06]"
      data-testid="trust-bar"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-6 md:py-14">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-10">
          {items.map((label, i) => (
            <Reveal
              key={i}
              as="li"
              delay={i * 60}
              className="flex flex-col items-center text-center"
              data-testid={`trust-item-${i}`}
            >
              <GlowTickIcon />
              <p className="mt-4 md:mt-5 text-[12px] md:text-[16px] font-semibold tracking-tight text-black/80 leading-snug max-w-[180px]">
                {label}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;

import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Pill chip with a standard flat check — used in the scrolling marquee
const TrustPill = ({ label, testId }) => (
  <li
    {...(testId ? { "data-testid": testId } : {})}
    className="mr-4 md:mr-5 flex items-center gap-2.5 rounded-full border border-black/[0.06] bg-white pl-2 pr-5 py-2 shadow-[0_8px_20px_-12px_rgba(2,32,71,0.25)] whitespace-nowrap"
  >
    <span className="grid place-items-center h-6 w-6 rounded-full bg-[#0EA5E9] shrink-0">
      <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
    </span>
    <span className="text-[13px] md:text-[14px] font-semibold tracking-tight text-black/75">
      {label}
    </span>
  </li>
);

export const TrustBar = () => {
  const { t } = useLanguage();
  const items = t.trustBar.items;
  return (
    <section
      id="vorteile"
      className="relative bg-[#F9FAFB] border-b border-black/[0.06] overflow-hidden"
      data-testid="trust-bar"
    >
      <div className="trust-marquee-wrap relative py-6 md:py-10">
        {/* Edge fades */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-[#F9FAFB] to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-[#F9FAFB] to-transparent"
        />
        {/* Seamless loop: list rendered twice, each pill carries its own right
            margin so translateX(-50%) lands exactly on the second copy */}
        <ul className="trust-marquee flex items-center w-max">
          {[...items, ...items].map((label, i) => (
            <TrustPill
              key={i}
              label={label}
              testId={i < items.length ? `trust-item-${i}` : undefined}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;

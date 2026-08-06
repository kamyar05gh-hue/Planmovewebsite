import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

// Gradient icon tile — modern glassy chip with soft accent glow
const TickTile = () => (
  <span className="relative grid place-items-center h-11 w-11 md:h-12 md:w-12 rounded-2xl shrink-0 bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] shadow-[0_10px_22px_-8px_rgba(14,165,233,0.55),inset_0_1px_1px_rgba(255,255,255,0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
    <Check className="h-5 w-5 md:h-[22px] md:w-[22px] text-white" strokeWidth={3.2} />
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
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-8 md:py-14">
        <Reveal>
          <div className="rounded-[1.5rem] md:rounded-[2rem] border border-black/[0.05] bg-white shadow-[0_20px_50px_-30px_rgba(2,32,71,0.15)] px-6 py-7 md:px-10 md:py-9">
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-7 md:gap-y-8">
              {items.map((label, i) => (
                <li
                  key={i}
                  className="group flex flex-col items-center text-center"
                  data-testid={`trust-item-${i}`}
                >
                  <TickTile />
                  <p className="mt-3.5 md:mt-4 text-[12px] md:text-[14px] font-semibold tracking-tight text-black/75 leading-snug max-w-[180px] transition-colors duration-300 group-hover:text-black">
                    {label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TrustBar;

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

export const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const items = t.faq.items;

  return (
    <section
      id="faq"
      className="relative py-16 md:py-28 bg-[#F5F4EF]"
      data-testid="faq-section"
    >
      <div className="mx-auto max-w-[900px] px-5 md:px-10">
        <Reveal>
          <h2 className="font-display font-extrabold tracking-[-0.035em] text-[30px] sm:text-[40px] md:text-[56px] leading-[1.02] text-center mb-10 md:mb-14">
            {t.faq.heading}
          </h2>
        </Reveal>

        <div className="space-y-3 md:space-y-4">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={i * 60}>
                <div
                  className={`rounded-[1.25rem] md:rounded-[1.5rem] border border-black/[0.06] bg-white overflow-hidden transition-shadow duration-300 ${
                    isOpen ? "shadow-[0_20px_45px_-25px_rgba(0,0,0,0.12)]" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-[16px] md:text-[19px] tracking-tight text-black">
                      {item.q}
                    </span>
                    <span
                      className={`grid place-items-center h-8 w-8 md:h-9 md:w-9 rounded-full bg-[#0EA5E9]/10 text-[#0284C7] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2.5} />
                    </span>
                  </button>
                  {/* One-motion accordion: grid-rows 0fr→1fr, no mount/unmount jank */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`px-5 md:px-6 pb-5 md:pb-6 pt-0 transition-opacity duration-300 ${
                          isOpen ? "opacity-100 delay-100" : "opacity-0"
                        }`}
                      >
                        <p className="text-[14px] md:text-[16px] leading-relaxed text-black/65">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

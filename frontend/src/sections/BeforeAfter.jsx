import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Plain red cross — no circular frame
const GlowCross = () => (
  <span className="mt-0.5 grid place-items-center h-6 w-6 md:h-7 md:w-7 shrink-0 text-red-500">
    <X className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.8} />
  </span>
);

// Plain blue check — no circular frame
const GlowCheck = () => (
  <span className="mt-0.5 grid place-items-center h-6 w-6 md:h-7 md:w-7 shrink-0 text-[#0EA5E9]">
    <Check className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.8} />
  </span>
);

export const BeforeAfter = () => {
  const { t } = useLanguage();
  const data = t.beforeAfter;

  return (
    <section
      className="relative py-16 md:py-28 bg-[#F5F4EF] overflow-hidden"
      data-testid="before-after-section"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14 hidden md:block"
        >
          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[28px] sm:text-[38px] md:text-[52px] leading-[1.05] text-black">
            {data.headingBefore}
            <span className="text-[#0EA5E9]"> → </span>
            {data.headingAfter}
          </h2>
        </motion.div>

        {/* Two-column comparison frame — black canvas, blue ambient glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[2rem] border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)]"
        >
          {/* Ambient blue gradient wash */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 55% at 85% 15%, rgba(14,165,233,0.22), transparent 60%), radial-gradient(45% 40% at 15% 90%, rgba(14,165,233,0.10), transparent 65%)",
            }}
          />
          {/* Subtle grid texture */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          {/* Before column */}
          <div className="relative p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 bg-gradient-to-br from-red-500/[0.08] to-transparent">
            <div className="flex items-center gap-3 mb-7 md:mb-9">
              <span className="relative grid place-items-center h-10 w-10 md:h-11 md:w-11 rounded-full shrink-0">
                <span
                  aria-hidden
                  className="absolute -inset-1.5 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(239,68,68,0.5) 0%, rgba(239,68,68,0.16) 50%, transparent 72%)",
                    filter: "blur(5px)",
                  }}
                />
                <span className="relative grid place-items-center h-full w-full rounded-full bg-gradient-to-br from-[#F87171] to-[#DC2626] shadow-[0_8px_20px_-6px_rgba(239,68,68,0.7)]">
                  <X className="h-4 w-4 md:h-5 md:w-5 text-white" strokeWidth={3} />
                </span>
              </span>
              <h3 className="font-display font-bold text-[20px] md:text-[24px] text-white">
                {data.headingBefore}
              </h3>
            </div>
            <ul className="space-y-4 md:space-y-5">
              {data.items.map((item, i) => (
                <motion.li
                  key={`before-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-start gap-3"
                >
                  <GlowCross />
                  <span className="text-[15px] md:text-[17px] leading-snug text-white">
                    {item.before}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* After column */}
          <div className="relative p-6 sm:p-8 md:p-12 bg-gradient-to-br from-[#0EA5E9]/[0.08] to-transparent">
            <div className="flex items-center gap-3 mb-7 md:mb-9">
              <span className="relative grid place-items-center h-10 w-10 md:h-11 md:w-11 rounded-full shrink-0">
                <span
                  aria-hidden
                  className="absolute -inset-1.5 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(14,165,233,0.55) 0%, rgba(14,165,233,0.18) 50%, transparent 72%)",
                    filter: "blur(5px)",
                  }}
                />
                <span className="relative grid place-items-center h-full w-full rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] shadow-[0_8px_20px_-6px_rgba(14,165,233,0.7)]">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-white" strokeWidth={3} />
                </span>
              </span>
              <h3 className="font-display font-bold text-[20px] md:text-[24px] text-white">
                {data.headingAfter}
              </h3>
            </div>
            <ul className="space-y-4 md:space-y-5">
              {data.items.map((item, i) => (
                <motion.li
                  key={`after-${i}`}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-start gap-3"
                >
                  <GlowCheck />
                  <span className="text-[15px] md:text-[17px] leading-snug text-white font-medium">
                    {item.after}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;

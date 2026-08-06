import Reveal from "@/components/Reveal";
import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Avatar = ({ name }) => {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <span
      className="inline-grid place-items-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-[#0a1520] border border-[#0EA5E9]/30 text-white font-bold text-[12px] md:text-[13px] shrink-0"
      aria-hidden
    >
      {initials}
    </span>
  );
};

const TestimonialCard = ({ tr }) => (
  <div className="group relative flex flex-col h-full rounded-2xl md:rounded-3xl bg-[#0a1118] border border-[#0EA5E9]/15 p-6 md:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[#0EA5E9]/40 hover:shadow-[0_30px_60px_-30px_rgba(14,165,233,0.25)]">
    {/* Top accent line */}
    <div
      aria-hidden
      className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"
    />

    {/* Stars */}
    <div className="relative flex items-center gap-1 text-[#FBBF24]">
      {Array.from({ length: 5 }).map((_, k) => (
        <Star key={k} className="h-3.5 w-3.5 fill-current" />
      ))}
    </div>

    <p className="relative mt-5 font-display font-medium tracking-tight text-[15px] md:text-[17px] leading-[1.55] text-white/85 flex-1">
      {tr.quote.replace(/^["«„“]+|["»”"]+$/g, "")}
    </p>

    <div className="relative mt-6 pt-5 border-t border-[#0EA5E9]/15 flex items-center gap-3">
      <Avatar name={tr.name} />
      <div className="min-w-0">
        <p className="text-[14px] md:text-[15px] font-bold text-white truncate">
          {tr.name}
        </p>
        {tr.role && tr.role.toLowerCase().includes("primemove") && (
          <p className="text-[12px] md:text-[13px] text-[#0EA5E9]/70 truncate">
            {tr.role}
          </p>
        )}
      </div>
    </div>

    {/* Subtle blue glow on hover */}
    <div
      aria-hidden
      className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(circle, rgba(14,165,233,0.16), transparent 65%)",
      }}
    />
  </div>
);

export const Testimonials = () => {
  const { t } = useLanguage();
  const items = t.testimonials.items.slice(0, 6);

  return (
    <section
      id="stimmen"
      className="relative py-16 md:py-28 bg-[#070a0d] overflow-hidden"
      data-testid="testimonials-section"
    >
      {/* Blue ambient glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full blur-3xl pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse, rgba(14,165,233,0.12), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <h2 className="font-display font-extrabold tracking-[-0.035em] text-[30px] sm:text-[40px] md:text-[56px] leading-[1.02] max-w-3xl text-white">
            {t.testimonials.headingLine1}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            {t.testimonials.headingLine2a}
            <span className="text-[#0EA5E9]">{t.testimonials.headingLine2Highlight}</span>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((tr, i) => (
            <Reveal
              key={i}
              delay={i * 70}
              data-testid={`testimonial-${i}`}
            >
              <TestimonialCard tr={tr} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

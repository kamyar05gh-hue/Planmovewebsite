import { Fragment } from "react";
import { motion } from "framer-motion";
import { Check, Bot, Sparkles } from "lucide-react";
import { IMG } from "@/lib/constants";
import { useLanguage } from "@/i18n/LanguageContext";
import SmoothImage from "@/components/SmoothImage";
import BeforeAfter from "@/sections/BeforeAfter";

// Renders a translation segment array: plain strings as-is,
// { hl: "..." } wrapped in a blue highlight span,
// { b: "..." } wrapped in a black bold span.
const Segs = ({ segs, hlClass, bClass = "text-black font-bold" }) =>
  segs.map((s, i) =>
    typeof s === "string" ? (
      <Fragment key={i}>{s}</Fragment>
    ) : s.hl ? (
      <span key={i} className={hlClass}>
        {s.hl}
      </span>
    ) : (
      <span key={i} className={bClass}>
        {s.b}
      </span>
    )
  );

// Same as Segs, but inserts a desktop-only line break before each "PLANMOVE KI".
const BodySegs = ({ segs, hlClass, bClass = "text-black font-bold" }) =>
  segs.map((s, i) => {
    if (typeof s === "string") {
      const parts = s.split(/(PLANMOVE KI)/g);
      return (
        <Fragment key={i}>
          {parts.map((part, j) =>
            part === "PLANMOVE KI" ? (
              <Fragment key={j}>
                <br className="hidden md:block" />
                <br className="hidden md:block" />
                <span className="inline-block">{part}</span>
              </Fragment>
            ) : (
              part
            )
          )}
        </Fragment>
      );
    }
    if (s.hl) {
      const parts = s.hl.split(/(PLANMOVE KI)/g);
      return (
        <span key={i} className={hlClass}>
          {parts.map((part, j) =>
            part === "PLANMOVE KI" ? (
              <Fragment key={j}>
                <br className="hidden md:block" />
                <br className="hidden md:block" />
                <span className="inline-block">{part}</span>
              </Fragment>
            ) : (
              part
            )
          )}
        </span>
      );
    }
    return (
      <span key={i} className={bClass}>
        {s.b}
      </span>
    );
  });

const problems = [
  { n: 1, img: IMG.problems[0] },
  { n: 2, img: IMG.problems[1] },
  { n: 3, img: IMG.problems[2] },
  { n: 4, img: IMG.problems[3] },
  { n: 5, img: IMG.problems[4] },
  { n: 6, img: IMG.problems[5] },
];

// ---------- Problem Card (image top + text bottom) ----------
const ProblemCard = ({ p, card }) => {
  return (
    <div className="group relative h-full">
      {/* Deep blue glow accent */}
      <span
        aria-hidden
        className="absolute -inset-2 rounded-[2rem] pointer-events-none opacity-30 transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(14,165,233,0.4) 0%, rgba(14,165,233,0.12) 55%, transparent 75%)",
          filter: "blur(10px)",
        }}
      />
      <article
        data-testid={`problem-card-0${p.n}`}
        className="pm-card relative rounded-[1.5rem] md:rounded-[1.75rem] border border-black/[0.06] bg-white overflow-hidden transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)] flex flex-col h-full"
      >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0F1013]">
        <SmoothImage
          src={p.img.src}
          alt={card.alt}
          width="800"
          height="450"
          loading="lazy"
          decoding="async"
          containerClassName="absolute inset-0 h-full w-full"
          placeholderClassName="bg-[#E9E4DA]"
          className="group-hover:scale-[1.03]"
        />
        {/* Number badge — top-left */}
        <span
          className="absolute top-4 left-4 grid place-items-center h-8 w-8 md:h-9 md:w-9 rounded-full bg-[#0EA5E9] text-white font-display font-extrabold text-[15px] md:text-[16px] shadow-[0_10px_25px_-8px_rgba(14,165,233,0.6)] tabular-nums"
          aria-hidden
        >
          {p.n}
        </span>
      </div>

      {/* Copy */}
      <div className="flex flex-col flex-1 items-start text-left p-6 md:p-7">
        <h3 className="font-display font-extrabold tracking-[-0.02em] text-[20px] md:text-[22px] leading-[1.1] text-black">
          <Segs segs={card.title} hlClass="text-[#0284C7]" />
        </h3>
        <p className="mt-4 md:mt-5 text-[15px] md:text-[16px] leading-[1.7] text-black/60 max-w-[540px]">
          <BodySegs segs={card.body} hlClass="text-[#0284C7] font-semibold" />
        </p>
      </div>
      </article>
    </div>
  );
};

// ---------- Climax Card 07 — full-width, 3-column composition ----------
const ClimaxCard = () => {
  const { t } = useLanguage();
  const c = t.problems.climax;
  return (
    <div className="mt-6 md:mt-10" data-testid="problem-card-07">
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pm-card relative rounded-[1.5rem] md:rounded-[2rem] border border-black/[0.06] bg-white overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* LEFT: Image — stressed man crossed out */}
          <div className="md:col-span-4 relative min-h-[220px] sm:min-h-[280px] md:min-h-[520px] overflow-hidden bg-[#F5F4EF]">
            <SmoothImage
              src="/images/card-07.jpg"
              alt={c.imageAlt}
              width="400"
              height="520"
              loading="lazy"
              decoding="async"
              containerClassName="absolute inset-0 h-full w-full"
              placeholderClassName="bg-[#E9E4DA]"
            />
            {/* Number badge */}
            <span
              className="absolute top-4 left-4 grid place-items-center h-10 w-10 rounded-full bg-[#0EA5E9] text-white font-display font-extrabold text-[17px] shadow-[0_10px_25px_-8px_rgba(14,165,233,0.6)] tabular-nums"
              aria-hidden
            >
              7
            </span>
          </div>

          {/* MIDDLE: Copy + Voice commands */}
          <div className="md:col-span-5 p-5 sm:p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l md:border-r border-black/[0.05]">
            <h3 className="font-display font-extrabold tracking-[-0.02em] text-[22px] sm:text-[26px] md:text-[30px] leading-[1.1] text-black">
              {c.titleA}<span className="text-[#0284C7]">{c.titleHighlight}</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              {c.titleB}
            </h3>
            <p className="mt-3 md:mt-4 text-[13.5px] md:text-[15px] leading-relaxed text-black/60 max-w-md">
              <Segs segs={c.sub} hlClass="text-[#0284C7] font-semibold" />
            </p>

            <ul className="mt-4 md:mt-6 grid grid-cols-1 gap-2.5" data-testid="climax-voice-commands">
              <li className="flex items-start gap-3 rounded-xl bg-[#F5F4EF] px-3 py-2.5 md:px-3.5">
                <Check className="mt-0.5 h-4 w-4 lg:h-3.5 lg:w-3.5 text-[#0EA5E9] shrink-0" strokeWidth={3.5} />
                <span className="text-[12.5px] md:text-[13.5px] font-medium text-black/85 leading-snug italic">
                  PLANMOVE KI erstellt Offerten, Rechnungen & Antworten
                </span>
              </li>
              {c.voiceCommands.map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-[#F5F4EF] px-3 py-2.5 md:px-3.5"
                >
                  <Check className="mt-0.5 h-4 w-4 lg:h-3.5 lg:w-3.5 text-[#0EA5E9] shrink-0" strokeWidth={3.5} />
                  <span className="text-[12.5px] md:text-[13.5px] font-medium text-black/85 leading-snug italic">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: PLANMOVE KI Bot + services checklist */}
          <div className="md:col-span-3 p-5 sm:p-8 md:p-10 flex flex-col items-center text-center md:items-start md:text-left justify-center bg-gradient-to-br from-[#F9FAFB] to-[#F5F4EF] relative">
            {/* Bot mascot */}
            <div className="relative self-center">
              <div className="mx-auto grid place-items-center h-[96px] w-[96px] md:h-[140px] md:w-[140px] rounded-[1.5rem] md:rounded-[2rem] bg-[#0A0A0C] shadow-[0_25px_50px_-15px_rgba(0,0,0,0.4)] relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, rgba(14,165,233,0.35), transparent 55%)",
                  }}
                />
                <Bot className="relative h-12 w-12 md:h-16 md:w-16 text-[#0EA5E9]" strokeWidth={1.6} />
              </div>
              <span className="mt-3 block font-display font-extrabold text-center text-[15px] md:text-[17px] tracking-tight text-black">
                {c.momoRestA} <span className="text-black/50 font-medium">{c.momoRestB}</span>
              </span>
            </div>

            <ul className="mt-4 md:mt-6 grid grid-cols-1 place-items-center md:place-items-start gap-2.5 w-full max-w-[260px]">
              {c.services.map((s, i) => (
                <li
                  key={i}
                  className="flex items-center justify-center md:justify-start gap-2 text-center md:text-left text-[12px] md:text-[13.5px] font-medium text-black/80"
                >
                  <Check className="h-3.5 w-3.5 text-[#0EA5E9] shrink-0" strokeWidth={3.5} />
                  {s}
                </li>
              ))}
            </ul>

            <span className="mt-5 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-[#0284C7] font-semibold">
              <Sparkles className="h-3 w-3" />
              {c.magic}
            </span>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

// ---------- Section wrapper ----------
export const Problems = () => {
  const { t } = useLanguage();
  return (
    <section
      id="probleme"
      className="relative py-16 md:py-28 bg-[#F5F4EF]"
      data-testid="problems-section"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-left max-w-4xl mb-12 md:mb-20"
        >
          <h2 className="font-display font-extrabold tracking-[-0.035em] text-[30px] sm:text-[42px] md:text-[54px] leading-[1.05]">
            {t.problems.headingA}<span className="text-[#0EA5E9]">{t.problems.headingHighlight}</span>
            {t.problems.headingB}
          </h2>
        </motion.div>

        <div id="loesungen" className="relative">
          {/* 3-col grid on desktop (2 rows of 3), 2-col on tablet, single on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
            {problems.map((p) => (
              <ProblemCard key={p.n} p={p} card={t.problems.cards[p.n - 1]} />
            ))}
          </div>
          <ClimaxCard />
        </div>
      </div>
      <div className="mt-12 md:mt-20">
        <BeforeAfter />
      </div>
    </section>
  );
};

export default Problems;

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

// Names and roles are brand-level and stay identical across languages.
const MEMBERS = [
  {
    initials: "E",
    name: "Elias",
    role: "CEO & Founder",
    image: "https://i.imgur.com/9pjdi6d.jpg",
  },
  {
    initials: "L",
    name: "Livia",
    role: "Administrator",
    image: "https://i.imgur.com/tsxABsf.jpg",
  },
  {
    initials: "A",
    name: "Alex",
    role: "AI Expert",
    image: "https://i.imgur.com/PiOi9FF.jpg",
  },
  { initials: "M", name: "Mohie", role: "AI & Software Engineer", image: "/images/team-mohie.jpg" },
];

export const Team = () => {
  const { t } = useLanguage();
  return (
    <section
      id="team"
      className="relative pt-0 pb-16 md:pb-28 bg-[#F5F4EF]"
      data-testid="team-section"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#0284C7] text-center">
            {t.team.kicker}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-3 font-display font-extrabold tracking-[-0.035em] text-[30px] sm:text-[40px] md:text-[52px] leading-[1.05] text-center">
            {t.team.heading}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 md:mt-5 max-w-2xl mx-auto text-center text-[14px] md:text-[17px] leading-relaxed text-black/60">
            {t.team.sub}
          </p>
        </Reveal>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {MEMBERS.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <div
                className="group relative flex flex-col items-center text-center rounded-2xl md:rounded-3xl border border-[#0EA5E9]/15 bg-[#0a1118] p-8 md:p-10 h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[#0EA5E9]/40 hover:shadow-[0_30px_60px_-30px_rgba(14,165,233,0.25)]"
                data-testid={`team-member-${m.name.toLowerCase()}`}
              >
                {/* Top accent line — mirrors the testimonial cards */}
                <div
                  aria-hidden
                  className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#0EA5E9]/40 to-transparent blur-lg opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      decoding="async"
                      className="relative h-32 w-32 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-[#0EA5E9]/25 shadow-[0_18px_35px_-15px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="relative grid place-items-center h-32 w-32 md:h-40 md:w-40 rounded-full bg-[#0a1520] border border-[#0EA5E9]/30 text-white font-display font-extrabold text-[38px] md:text-[44px] shadow-[0_18px_35px_-15px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.04]">
                      {m.initials}
                    </div>
                  )}
                </div>
                <h3 className="mt-6 font-display font-bold tracking-tight text-[20px] md:text-[22px] text-white">
                  {m.name}
                </h3>
                <p className="mt-2.5 inline-flex items-center rounded-full bg-[#0EA5E9]/10 px-3 py-1 text-[12px] md:text-[13px] font-semibold text-[#0EA5E9]">
                  {t.team.roles?.[m.name] ?? m.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

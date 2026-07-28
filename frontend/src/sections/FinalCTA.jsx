import { useRef, useEffect } from "react";
import { Check, Truck, SprayCan } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

export const FinalCTA = () => {
  const { t } = useLanguage();
  const subItems = t.finalCta.subItems;
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Lazy-load the background video only when the section nears the viewport.
  // This prevents the 12MB MP4 from downloading on initial page load.
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start loading the video now
            video.load();
            observer.unobserve(section);

            // iOS Safari requires a .play() call (not just the autoPlay attribute)
            // and the video must be muted + playsInline for it to work.
            video.play().catch(() => {
              const resume = () => {
                video.play().catch(() => {});
                document.removeEventListener("touchstart", resume);
              };
              document.addEventListener("touchstart", resume, { once: true });
            });
          }
        });
      },
      { rootMargin: "300px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ueber"
      className="relative py-16 md:py-24 lg:py-28 bg-black overflow-hidden"
      data-testid="final-cta-section"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        src="/videos/final-cta-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="none"
      />
      {/* Dark overlay for readability */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.60) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle, rgba(37,211,102,0.20), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 text-center">
        <Reveal className="flex items-center justify-center gap-3 mb-4 md:mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-mono-pm uppercase tracking-[0.22em] text-white">
            <Truck className="h-3.5 w-3.5" strokeWidth={2} />
            {t.finalCta.chipMoving}
          </span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-mono-pm uppercase tracking-[0.22em] text-white">
            <SprayCan className="h-3.5 w-3.5" strokeWidth={2} />
            {t.finalCta.chipCleaning}
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="font-display font-extrabold tracking-[-0.035em] text-[30px] sm:text-[42px] md:text-[58px] lg:text-[72px] leading-[1.02] text-white">
            {t.finalCta.headline1}
            <br />
            {t.finalCta.headline2}
            <br />
            <span className="text-[#25D366]">{t.finalCta.headline3}</span>
          </h2>
        </Reveal>

        <Reveal delay={260} as="p" className="mt-5 md:mt-6 max-w-xl mx-auto text-[14px] md:text-[18px] leading-relaxed text-white">
          {t.finalCta.paragraph}
        </Reveal>

        <Reveal delay={380} className="mt-6 md:mt-8 flex justify-center">
          <WhatsAppButton size="lg" testId="final-cta-button" />
        </Reveal>

        <Reveal delay={500} as="ul" className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-medium text-white">
          {subItems.map((s, i) => (
            <li key={i} className="inline-flex items-center gap-2">
              <span className="grid place-items-center h-6 w-6 rounded-full bg-[#25D366]/20 text-[#25D366]">
                <Check className="h-4 w-4" strokeWidth={2.5} />
              </span>
              {s}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;

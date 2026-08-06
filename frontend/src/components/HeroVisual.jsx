import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Hero visual — PLANMOVE product video.
 * 16:9 frame matching the video so nothing is cropped.
 */
export const HeroVisual = () => {
  const { t } = useLanguage();
  return (
    <div className="relative w-full flex items-center justify-center" data-testid="hero-visual">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 50% at 55% 50%, rgba(14,165,233,0.16), transparent 65%)",
        }}
      />

      {/* Video canvas — 16:9 ratio matching the hero video so nothing is cropped */}
      <div className="relative w-full max-w-[560px] md:max-w-[700px] lg:max-w-[800px] aspect-video">
        <div className="relative h-full w-full rounded-[1.75rem] md:rounded-[2rem] overflow-hidden bg-[#E9E4DA] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.25)]">
          <video
            src="/videos/hero-video.mp4"
            poster="/videos/hero-video-poster.jpg"
            aria-label={t.hero.visualAlt}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;

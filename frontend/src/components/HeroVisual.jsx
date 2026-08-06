import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ACCENT = "#0EA5E9";

const formatTime = (s) => {
  if (!Number.isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

/**
 * Hero visual — PLANMOVE product video with custom player controls.
 * 16:9 frame matching the video so nothing is cropped.
 */
export const HeroVisual = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Autoplay: try with sound first (allowed for returning/engaged visitors);
  // browsers that block unmuted autoplay fall back to muted + unmute on first tap.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    const attempt = v.play();
    if (!attempt || !attempt.catch) return;
    attempt
      .then(() => setMuted(false))
      .catch(() => {
        v.muted = true;
        setMuted(true);
        v.play().catch(() => {});
        const unmute = () => {
          v.muted = false;
          setMuted(false);
        };
        window.addEventListener("pointerdown", unmute, { once: true });
        window.addEventListener("keydown", unmute, { once: true });
      });
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const onSeek = (e) => {
    const v = videoRef.current;
    if (!v) return;
    const t = Number(e.target.value);
    v.currentTime = t;
    setTime(t);
  };

  const goFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.();
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center" data-testid="hero-visual">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 50% at 55% 50%, rgba(14,165,233,0.16), transparent 65%)",
        }}
      />

      {/* Caption headline (two lines on desktop, balanced wrap on mobile) + bouncing arrow */}
      <h3
        className="mb-3 md:mb-4 max-w-[640px] px-2 text-center text-balance font-display tracking-[-0.02em] text-[26px] md:text-[38px] leading-[1.2] md:leading-[1.15] text-black"
        data-testid="hero-video-caption"
      >
        {t.hero.videoCaptionA}
        <span className="font-semibold text-[#0EA5E9]">{t.hero.videoCaptionHl1}</span>
        {t.hero.videoCaptionB}
        <br className="hidden md:block" />
        <span className="font-extrabold">{t.hero.videoCaptionHl2}</span>
      </h3>
      <svg
        aria-hidden
        viewBox="0 0 20 40"
        className="mb-5 md:mb-7 h-9 w-[18px] md:h-11 md:w-[22px] text-[#0EA5E9] animate-bounce-slow"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="10" y1="3" x2="10" y2="32" />
        <polyline points="3,26 10,35 17,26" />
      </svg>

      {/* Video canvas — 16:9 ratio matching the hero video so nothing is cropped */}
      <div
        ref={containerRef}
        className="relative w-full aspect-video mt-1 lg:mt-4 lg:scale-[1.05] xl:scale-[1.08] origin-center"
      >
        <div className="relative h-full w-full rounded-[1.75rem] md:rounded-[2rem] overflow-hidden bg-[#E9E4DA] shadow-[0_30px_60px_-15px_rgba(2,32,71,0.35),0_8px_24px_-8px_rgba(14,165,233,0.3)]">
          <video
            ref={videoRef}
            src="/videos/hero-video.mp4"
            poster="/videos/hero-video-poster.jpg"
            aria-label={t.hero.visualAlt}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onClick={togglePlay}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            className="absolute inset-0 h-full w-full object-cover cursor-pointer scale-[1.02]"
          />

          {/* Custom control bar */}
          <div
            className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 md:gap-3 px-4 md:px-5 pb-3.5 md:pb-4 pt-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Pause" : "Play"}
              className="grid place-items-center h-9 w-9 md:h-10 md:w-10 shrink-0 rounded-full text-white transition-colors hover:bg-white/15"
              style={{ color: ACCENT }}
            >
              {playing ? (
                <Pause className="h-5 w-5 md:h-6 md:w-6 fill-current" />
              ) : (
                <Play className="h-5 w-5 md:h-6 md:w-6 fill-current" />
              )}
            </button>

            <span className="text-[11px] md:text-[13px] font-semibold text-white/85 tabular-nums shrink-0">
              {formatTime(time)}
            </span>

            {/* Timeline — bar and thumb in the site accent color */}
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={time}
              onChange={onSeek}
              aria-label="Video timeline"
              className="pm-video-range flex-1 h-1.5"
              style={{ "--pm-progress": `${duration ? (time / duration) * 100 : 0}%` }}
            />

            <span className="text-[11px] md:text-[13px] font-semibold text-white/60 tabular-nums shrink-0">
              {formatTime(duration)}
            </span>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              className="grid place-items-center h-9 w-9 md:h-10 md:w-10 shrink-0 rounded-full text-white/85 transition-colors hover:bg-white/15 hover:text-white"
            >
              {muted ? (
                <VolumeX className="h-[18px] w-[18px] md:h-5 md:w-5" />
              ) : (
                <Volume2 className="h-[18px] w-[18px] md:h-5 md:w-5" />
              )}
            </button>

            <button
              type="button"
              onClick={goFullscreen}
              aria-label="Fullscreen"
              className="grid place-items-center h-9 w-9 md:h-10 md:w-10 shrink-0 rounded-full text-white/85 transition-colors hover:bg-white/15 hover:text-white"
            >
              <Maximize className="h-4 w-4 md:h-[18px] md:w-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;

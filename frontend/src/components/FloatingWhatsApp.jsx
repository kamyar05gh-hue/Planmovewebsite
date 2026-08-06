import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Floating WhatsApp widget — fixed bottom-right.
 * Fades in after a small scroll so it doesn't compete with the hero.
 */
export const FloatingWhatsApp = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 240);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={t.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp"
      aria-label={t.whatsappButton.label}
      className={`fixed bottom-4 right-4 md:bottom-7 md:right-7 z-40 group grid place-items-center h-11 w-11 md:h-16 md:w-16 rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-all duration-500 hover:bg-[#168222] ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Pulse ring */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping-slow group-hover:opacity-0"
      />
      {/* Ambient glow */}
      <span
        aria-hidden
        className="absolute -inset-2 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,211,102,0.45) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <WhatsAppIcon className="relative h-5 w-5 md:h-8 md:w-8" />
      <style>{`
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 0.55; }
          75%, 100% { transform: scale(1.45); opacity: 0; }
        }
        .animate-ping-slow { animation: pingSlow 2.4s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>
    </a>
  );
};

export default FloatingWhatsApp;

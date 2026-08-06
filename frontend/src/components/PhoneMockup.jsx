import { Mic, Check, Send, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Static premium iPhone mockup with PLANMOVE KI voice UI.
 * (Parallax removed — the image sits in one place.)
 */
export const PhoneMockup = () => {
  const { t } = useLanguage();
  const pm = t.phoneMockup;
  const bars = Array.from({ length: 24 });

  return (
    <div className="relative w-full flex items-center justify-center">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 45%, rgba(14,165,233,0.12), transparent 65%)",
        }}
      />

      <div className="relative">
        <div
          className="relative w-[260px] sm:w-[300px] md:w-[340px] aspect-[9/19] rounded-[3.2rem] bg-[#0a0a0c] p-[10px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]"
          data-testid="phone-mockup"
        >
          <div className="absolute left-1/2 top-3 -translate-x-1/2 z-20 h-6 w-24 rounded-full bg-black" />
          <div className="relative h-full w-full overflow-hidden rounded-[2.6rem] bg-gradient-to-b from-[#F7F7F4] to-[#EDEDE8]">
            <div className="flex items-center justify-between px-6 pt-4 text-[10px] font-medium text-black/70 font-mono-pm">
              <span>9:41</span>
              <span>•••</span>
            </div>

            <div className="px-5 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-widest uppercase text-black/50 font-mono-pm">
                  {pm.newRequest}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#0EA5E9]" />
              </div>
              <h4 className="font-display text-[20px] md:text-[22px] font-extrabold tracking-tight leading-[1.05] mt-2">
                {pm.headline1}
                <br />
                {pm.headline2}
              </h4>
            </div>

            <div className="mt-6 mx-5 rounded-2xl bg-black p-5 text-white relative overflow-hidden">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/70 font-mono-pm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9] animate-pulse" />
                {pm.recording}
              </div>
              <div className="mt-4 flex items-end gap-[3px] h-14">
                {bars.map((_, i) => (
                  <span
                    key={i}
                    className="voice-bar w-[4px] rounded-full bg-[#0EA5E9]"
                    style={{
                      height: `${20 + ((i * 13) % 80)}%`,
                      animationDelay: `${(i % 10) * 0.08}s`,
                    }}
                  />
                ))}
              </div>
              <div className="mt-3 text-[11px] leading-snug text-white/80">
                {pm.transcript}
              </div>
              <button
                aria-label={pm.micAria}
                className="absolute -bottom-4 right-4 h-12 w-12 rounded-full bg-[#0EA5E9] grid place-items-center shadow-lg shadow-[#0EA5E9]/40"
              >
                <Mic className="h-5 w-5 text-white" />
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-black/40 font-mono-pm">
              <span className="h-px w-6 bg-black/20" />
              <Sparkles className="h-3 w-3" />
              {pm.createdIn}
              <span className="h-px w-6 bg-black/20" />
            </div>

            <div className="mx-5 mt-3 rounded-2xl bg-white border border-black/10 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full bg-[#0EA5E9]/15 grid place-items-center">
                    <Check className="h-3 w-3 text-[#0284C7]" strokeWidth={3} />
                  </span>
                  <span className="text-[11px] font-semibold">{pm.quoteNumber}</span>
                </div>
                <span className="text-[10px] font-mono-pm text-black/45">{pm.now}</span>
              </div>
              <div className="mt-3 space-y-1.5">
                <div className="h-2 w-3/4 rounded-full bg-black/10" />
                <div className="h-2 w-2/3 rounded-full bg-black/10" />
                <div className="h-2 w-4/5 rounded-full bg-black/10" />
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-2">
                <span className="text-[10px] text-black/50 font-mono-pm">CHF</span>
                <span className="font-display font-extrabold text-lg tracking-tight">
                  2&apos;480.00
                </span>
              </div>
              <button className="mt-3 w-full h-9 rounded-full bg-[#0EA5E9] text-white text-[11px] font-semibold flex items-center justify-center gap-2">
                <Send className="h-3.5 w-3.5" /> {pm.sendWhatsApp}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;

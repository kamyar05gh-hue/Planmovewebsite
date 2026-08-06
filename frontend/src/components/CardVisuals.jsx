import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  PhoneMissed,
  Languages,
  Moon,
  BellRing,
  PhoneIncoming,
  MessagesSquare,
  Check,
  Mail,
  MessageCircle,
  CalendarClock,
} from "lucide-react";

/**
 * Premium inline 3D-style visuals for each problem card.
 * These replace stock photos with sleek glassmorphic UI compositions
 * on gradient canvases — feels like premium 3D product renders.
 *
 * DALL-E 3 prompts are embedded next to each variant so the user can
 * later swap the SVG scene for a bespoke render if desired.
 */

// ---------- Shared canvas ----------
const Canvas = ({ children, from = "#0F1013", to = "#1A1D22", accent }) => (
  <div
    className="relative h-full w-full overflow-hidden"
    style={{ background: `linear-gradient(140deg, ${from}, ${to})` }}
  >
    {/* Ambient blob */}
    <div
      aria-hidden
      className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-40 pointer-events-none"
      style={{ background: accent || "radial-gradient(circle, #0EA5E9, transparent 60%)" }}
    />
    {/* Grid */}
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
    <div className="relative h-full w-full grid place-items-center p-8">
      {children}
    </div>
  </div>
);

const Chip = ({ children, className = "" }) => (
  <div
    className={`inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-[11px] font-medium text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] ${className}`}
  >
    {children}
  </div>
);

// ---------- V1 · Reaktionszeit (missed calls floating) ----------
// DALL-E 3: "Ultra-premium 3D render of a floating black smartphone on a dark studio background, lockscreen shows twelve stacked WhatsApp missed-call notifications in vibrant #0EA5E9 blue with timestamps 22:47, 23:12, 23:45, cinematic rim light, soft depth of field, editorial product shot, 8k."
export const V_Reaktion = () => {
  const { t } = useLanguage();
  const cv = t.cardVisuals.reaktion;
  const times = ["22:47", "23:12", "23:45"];
  return (
  <Canvas>
    <div className="relative w-full max-w-[320px]">
      {cv.notifications.map((body, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl bg-white/[0.08] border border-white/10 px-4 py-3 mb-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid place-items-center h-8 w-8 rounded-full bg-[#0EA5E9]/20 text-[#0EA5E9]">
              <PhoneMissed className="h-4 w-4" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-white/50 font-mono-pm uppercase tracking-widest">
                {times[i]}
              </p>
              <p className="text-[13px] text-white/90 font-medium truncate">{body}</p>
            </div>
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          </div>
        </motion.div>
      ))}
      <Chip className="mt-2">
        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
        {cv.chip}
      </Chip>
    </div>
  </Canvas>
  );
};

// ---------- V2 · Sprache (multilingual bubbles) ----------
// DALL-E 3: "Ultra-premium 3D render of glassmorphic speech bubbles floating in dark 3D space, each bubble tinted a different flag color (Swiss white/red, French blue, Italian green, Portuguese red/green), connected by thin luminous #0EA5E9 lines merging into one, cinematic depth of field, editorial 3D."
export const V_Sprache = () => {
  const { t } = useLanguage();
  const cv = t.cardVisuals.sprache;
  return (
  <Canvas>
    <div className="relative w-full max-w-[340px]">
      {[
        { flag: "🇩🇪", text: "Ich brauche eine Offerte…", tone: "from-white/10 to-white/5" },
        { flag: "🇮🇹", text: "Vorrei preventivo per…", tone: "from-white/10 to-white/5", ml: 8 },
        { flag: "🇵🇹", text: "Preciso de um orçamento…", tone: "from-white/10 to-white/5", ml: 16 },
        { flag: "🇫🇷", text: "Une offre pour lundi svp.", tone: "from-white/10 to-white/5", ml: 24 },
      ].map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginLeft: b.ml || 0 }}
          className={`inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-gradient-to-br ${b.tone} px-3.5 py-2.5 mb-2.5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.55)]`}
        >
          <span className="text-[16px]" aria-hidden>
            {b.flag}
          </span>
          <span className="text-[12px] text-white/85">{b.text}</span>
        </motion.div>
      ))}
      {/* Merge arrow */}
      <div className="my-3 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50">
        <span className="h-px w-6 bg-white/25" />
        {cv.translated}
        <span className="h-px flex-1 bg-white/25" />
      </div>
      <div className="rounded-2xl bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 px-4 py-3">
        <div className="flex items-center gap-2 text-white">
          <Languages className="h-4 w-4 text-[#0EA5E9]" />
          <span className="text-[13px] font-medium">{cv.reply}</span>
        </div>
      </div>
    </div>
  </Canvas>
  );
};

// ---------- V3 · Feierabend (dark spreadsheet with moon) ----------
// DALL-E 3: "3D isometric render of a dark laptop at midnight, screen glowing with endless spreadsheet rows and email icons, a soft moon crescent above, deep navy tones, one #0EA5E9 accent light beam through the top, cinematic, editorial."
export const V_Feierabend = () => {
  const { t } = useLanguage();
  const cv = t.cardVisuals.feierabend;
  return (
  <Canvas from="#0B0F16" to="#141924">
    <div className="relative w-full max-w-[320px]">
      <Chip className="mb-4">
        <Moon className="h-3.5 w-3.5" />
        {cv.chipTop}
      </Chip>
      <div className="rounded-2xl bg-white/[0.05] border border-white/10 overflow-hidden">
        <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono-pm uppercase tracking-widest text-white/50">
            {cv.tableHead}
          </span>
          <span className="text-[10px] font-mono-pm text-red-400">{cv.overdue}</span>
        </div>
        <div className="px-4 py-3 space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
              <div className="h-2 flex-1 rounded-full bg-white/10" />
              <div className="h-2 w-12 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
      <Chip className="mt-4 bg-red-500/15 border-red-500/25 text-red-200">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
        {cv.chipBottom}
      </Chip>
    </div>
  </Canvas>
  );
};

// ---------- V4 · Follow-up (calendar reminder cascade) ----------
// DALL-E 3: "Ultra-premium 3D render of a floating clean calendar card with a blue pulsing dot, next to it three softly floating reminder cards labelled 'Herr Müller', 'Frau Meier', 'Top Umzug', minimalist studio, dark bone-white gradient background, cinematic."
export const V_FollowUp = () => {
  const { t } = useLanguage();
  const cv = t.cardVisuals.followUp;
  return (
  <Canvas from="#0F1416" to="#152025">
    <div className="relative w-full max-w-[320px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl bg-white/[0.08] border border-white/10 p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center gap-3">
          <span className="grid place-items-center h-9 w-9 rounded-full bg-[#0EA5E9] text-white">
            <BellRing className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[12px] text-white/50 uppercase tracking-widest font-mono-pm">
              {cv.autoReminder}
            </p>
            <p className="text-[14px] font-semibold text-white">
              {cv.momoFollowsUp}
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {cv.reminders.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i + 0.4, duration: 0.6 }}
              className="flex items-center gap-2.5 rounded-lg bg-white/[0.05] border border-white/10 px-3 py-2"
            >
              <CalendarClock className="h-3.5 w-3.5 text-[#0EA5E9]" />
              <span className="text-[12px] text-white/85 font-medium">{r.name}</span>
              <span className="ml-auto text-[10px] font-mono-pm text-white/50">{r.detail}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </Canvas>
  );
};

// ---------- V5 · Anrufe (incoming call handled) ----------
// DALL-E 3: "3D minimalist render of a black smartphone floating vertically with an incoming call screen 'Unbekannt', a #0EA5E9 ripple pulsing outward, deep studio dark navy background, cinematic soft light, editorial product shot."
export const V_Anrufe = () => {
  const { t } = useLanguage();
  const cv = t.cardVisuals.anrufe;
  return (
  <Canvas from="#0A1215" to="#101B22">
    <div className="relative">
      {/* Ripple */}
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0EA5E9]/30"
          style={{
            width: 200 + i * 80,
            height: 200 + i * 80,
            animation: `ripple 3s ease-out infinite`,
            animationDelay: `${i * 1}s`,
          }}
        />
      ))}
      <div className="relative rounded-[2rem] w-[220px] aspect-[9/19] bg-black p-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
        <div className="relative h-full w-full rounded-[1.6rem] bg-gradient-to-b from-[#0F1213] to-[#0A0D0F] overflow-hidden flex flex-col items-center pt-8">
          <p className="text-[10px] font-mono-pm text-white/40 uppercase tracking-widest">
            {cv.incoming}
          </p>
          <p className="mt-2 font-display font-extrabold text-[18px] text-white">{cv.unknown}</p>
          <p className="mt-1 text-[10px] text-white/50">{cv.handled}</p>
          <div className="mt-auto mb-6 flex gap-4">
            <span className="grid place-items-center h-11 w-11 rounded-full bg-red-500 text-white">
              <PhoneIncoming className="h-4 w-4 rotate-[135deg]" />
            </span>
            <span className="grid place-items-center h-11 w-11 rounded-full bg-[#0EA5E9] text-white shadow-lg shadow-[#0EA5E9]/40">
              <PhoneIncoming className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <style>{`@keyframes ripple { 0% { opacity: 0.6; transform: translate(-50%, -50%) scale(0.6); } 100% { opacity: 0; transform: translate(-50%, -50%) scale(1.2); } }`}</style>
  </Canvas>
  );
};

// ---------- V6 · Kanäle (colliding chat bubbles) ----------
// DALL-E 3: "Ultra-premium 3D render of many glassmorphic chat bubbles, email envelopes and phone icons colliding in dark 3D space, all being pulled together by a bright #0EA5E9 orb in the center, cinematic depth of field, editorial 3D product art."
export const V_Kanaele = () => (
  <Canvas from="#0B0E12" to="#141920">
    <div className="relative w-full h-full grid place-items-center">
      <div className="absolute inset-0 grid grid-cols-3 gap-3 p-4 opacity-70">
        {[MessageCircle, Mail, MessagesSquare, PhoneIncoming, MessageCircle, Mail, MessagesSquare, MessageCircle, PhoneIncoming].map(
          (Icon, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`grid place-items-center rounded-2xl bg-white/[0.06] border border-white/10 aspect-square ${
                i === 4 ? "opacity-0" : ""
              }`}
            >
              <Icon className="h-5 w-5 text-white/80" />
            </motion.span>
          )
        )}
      </div>
      {/* Center orb */}
      <div className="relative z-10 h-20 w-20 rounded-full bg-[#0EA5E9] shadow-[0_0_80px_20px_rgba(14,165,233,0.4)] grid place-items-center">
        <Check className="h-8 w-8 text-white" strokeWidth={3} />
      </div>
    </div>
  </Canvas>
);

export const CARD_VISUALS = {
  reaktion: V_Reaktion,
  sprache: V_Sprache,
  feierabend: V_Feierabend,
  followup: V_FollowUp,
  anrufe: V_Anrufe,
  kanaele: V_Kanaele,
};

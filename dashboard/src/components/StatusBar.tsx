/** Reusable horizontal status bar for Core Web Vitals and similar metrics. */
interface StatusBarProps {
  label: string;
  name: string;
  display: string;
  /** fraction of the bar filled, 0–1 */
  fill: number;
  color: string;
  statusLabel: string;
  thresholdHint: string;
}

export default function StatusBar({ label, name, display, fill, color, statusLabel, thresholdHint }: StatusBarProps) {
  return (
    <div className="rounded-[10px] border border-[#16161A] bg-[#0E0E11] px-4 py-3.5">
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex min-w-0 items-baseline gap-2">
          <span className="text-[13px] font-medium text-white">{name}</span>
          <span className="truncate text-[11px] text-[#5C5C66]" title={label}>
            {label}
          </span>
        </div>
        <span className="text-[13px] font-medium tabular-nums" style={{ color }}>
          {display}
        </span>
      </div>
      <div className="mt-3 h-[6px] overflow-hidden rounded-full bg-[#16161A]">
        <div className="h-full rounded-full" style={{ width: `${Math.min(fill * 100, 100)}%`, backgroundColor: color }} />
      </div>
      <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.08em]">
        <span style={{ color }}>{statusLabel}</span>
        <span className="text-[#5C5C66]">{thresholdHint}</span>
      </div>
    </div>
  );
}

/** Number formatting per spec: compact (72K, 1.2M), Unicode minus −, explicit + on positive deltas, percentages 2 decimals. */

export const MINUS = '\u2212';

export function fmtCompact(n: number): string {
  const abs = Math.abs(n);
  const sign = n < 0 ? MINUS : '';
  if (abs >= 1_000_000) return `${sign}${(abs / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  if (abs >= 10_000) return `${sign}${Math.round(abs / 1000)}K`;
  if (abs >= 1_000) return `${sign}${(abs / 1000).toFixed(1).replace(/\.0$/, '')}K`;
  return `${sign}${abs.toLocaleString('en-US')}`;
}

export function fmtInt(n: number): string {
  return (n < 0 ? MINUS : '') + Math.abs(n).toLocaleString('en-US');
}

/** 0.0342 → "3.42%" */
export function fmtPct(x: number): string {
  return `${(x * 100).toFixed(2)}%`;
}

/** 0.082 → "+8.20%", -0.031 → "−3.10%" */
export function fmtDeltaPct(x: number): string {
  const v = Math.abs(x * 100).toFixed(2);
  if (x > 0) return `+${v}%`;
  if (x < 0) return `${MINUS}${v}%`;
  return '0.00%';
}

/** seconds → "2m 12s" */
export function fmtDuration(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = Math.round(sec % 60);
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

/** ms → "1.24 s" */
export function fmtMs(ms: number): string {
  return `${(ms / 1000).toFixed(2)} s`;
}

export function fmtChf(n: number): string {
  return `CHF ${fmtCompact(n)}`;
}

/**
 * ============================================================
 * SINGLE DATA SOURCE — swap this module for a real API later.
 *
 * Every metric rendered anywhere in the dashboard comes from
 * this file. When a real analytics backend (GA4, Plausible,
 * Matomo, …) is connected, replace these exports with fetch
 * calls that return the same shapes and the UI needs no changes.
 *
 * Values are realistic for a small Swiss B2B SaaS marketing site
 * (planmove.ch): a few thousand visits per month.
 * ============================================================
 */

/* ---------- shared chart palette (categorical order is fixed) ---------- */
export const SERIES = {
  blue: '#5B8DEF',
  orange: '#E8A04C',
  green: '#3ECF8E',
  magenta: '#D5518A',
  slate: '#7C9BD4', // 5th categorical slot — never violet next to blue
} as const;

export const STATUS = {
  positive: '#3ECF8E',
  negative: '#F06A6A',
  warning: '#E8A04C',
  caution: '#E3C75A',
} as const;

/* ---------- types ---------- */
export interface DayPoint {
  date: string; // ISO yyyy-mm-dd
  label: string; // "Jul 9"
  total: number;
  newVisitors: number;
  returning: number;
  engagementSec: number;
  loadMs: number;
}

export interface Channel {
  name: string;
  sessions: number;
  share: number; // 0–1
  color: string;
}

export interface LandingPage {
  path: string;
  sessions: number;
  bounceRate: number; // 0–1
  convRate: number; // 0–1
}

export interface TopPage {
  path: string;
  views: number;
  avgTimeSec: number;
  dropOffRate: number; // 0–1 — share of sessions ending here
}

export interface DeviceSplit {
  device: string;
  share: number; // 0–1
  color: string;
}

export interface FunnelStep {
  stage: string;
  value: number;
}

export interface Goal {
  name: string;
  completions: number;
  valueChf: number; // estimated lead value per completion
}

export interface Vital {
  name: 'LCP' | 'INP' | 'CLS';
  label: string;
  value: number;
  unit: string;
  display: string;
  goodMax: number; // <= goodMax → good
  poorMin: number; // >= poorMin → poor, between → needs improvement
  status: 'good' | 'needs-improvement' | 'poor';
}

export interface SiteError {
  code: number;
  path: string;
  count: number;
  lastSeen: string;
}

export type GeoTier = 'core' | 'growing' | 'emerging';

export interface GeoRow {
  name: string;
  visits: number;
  share: number; // 0–1
  tier: GeoTier;
}

export interface OsRow {
  os: string;
  share: number; // 0–1
}

/* ---------- deterministic 90-day daily series ---------- */
// Small deterministic PRNG so numbers are stable between reloads.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(20260807);
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const daily: DayPoint[] = (() => {
  const out: DayPoint[] = [];
  const today = new Date('2026-08-07T00:00:00');
  for (let i = 89; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dow = d.getDay();
    const weekend = dow === 0 || dow === 6;
    // gentle growth trend + weekday seasonality + noise (B2B: weekends dip hard)
    const trend = 1 + (89 - i) * 0.0022;
    const base = (weekend ? 62 : 158) * trend;
    const total = Math.round(base * (0.86 + rand() * 0.3));
    const newVisitors = Math.round(total * (0.64 + rand() * 0.08));
    const returning = total - newVisitors;
    out.push({
      date: d.toISOString().slice(0, 10),
      label: `${MONTHS[d.getMonth()]} ${d.getDate()}`,
      total,
      newVisitors,
      returning,
      engagementSec: Math.round(118 + rand() * 42 - (weekend ? 18 : 0)),
      loadMs: Math.round(1150 + rand() * 260 + (weekend ? -40 : 30)),
    });
  }
  return out;
})();

export function sliceDays(n: number): DayPoint[] {
  return daily.slice(-n);
}

/* ---------- traffic & acquisition ---------- */
// Fixed channel order: Organic Search → Paid Ads → Social → Direct → Referral
export const channels: Channel[] = [
  { name: 'Organic Search', sessions: 2148, share: 0.412, color: SERIES.blue },
  { name: 'Paid Ads', sessions: 731, share: 0.14, color: SERIES.orange },
  { name: 'Social', sessions: 512, share: 0.098, color: SERIES.green },
  { name: 'Direct', sessions: 1199, share: 0.23, color: SERIES.magenta },
  { name: 'Referral', sessions: 626, share: 0.12, color: SERIES.slate },
];

export const landingPages: LandingPage[] = [
  { path: '/', sessions: 1874, bounceRate: 0.31, convRate: 0.041 },
  { path: '/preise', sessions: 962, bounceRate: 0.24, convRate: 0.068 },
  { path: '/funktionen/umzugsofferten', sessions: 588, bounceRate: 0.36, convRate: 0.029 },
  { path: '/funktionen/reinigung', sessions: 431, bounceRate: 0.39, convRate: 0.021 },
  { path: '/blog/umzugskosten-schweiz', sessions: 402, bounceRate: 0.58, convRate: 0.007 },
  { path: '/demo', sessions: 347, bounceRate: 0.18, convRate: 0.112 },
  { path: '/blog/offerten-vergleichen', sessions: 264, bounceRate: 0.61, convRate: 0.004 },
  { path: '/ueber-uns', sessions: 148, bounceRate: 0.44, convRate: 0.009 },
];

/* ---------- engagement ---------- */
export const engagement = {
  avgEngagementSec: 132, // avg engagement time per session
  avgSessionSec: 186,
  pagesPerSession: 2.8,
  bounceRate: 0.342,
};

export const topPages: TopPage[] = [
  { path: '/', views: 3211, avgTimeSec: 74, dropOffRate: 0.28 },
  { path: '/preise', views: 1640, avgTimeSec: 118, dropOffRate: 0.22 },
  { path: '/funktionen/umzugsofferten', views: 1102, avgTimeSec: 96, dropOffRate: 0.31 },
  { path: '/demo', views: 812, avgTimeSec: 141, dropOffRate: 0.12 },
  { path: '/funktionen/reinigung', views: 736, avgTimeSec: 88, dropOffRate: 0.35 },
  { path: '/blog/umzugskosten-schweiz', views: 655, avgTimeSec: 163, dropOffRate: 0.52 },
  { path: '/kontakt', views: 398, avgTimeSec: 47, dropOffRate: 0.41 },
];

export const deviceSplit: DeviceSplit[] = [
  { device: 'Desktop', share: 0.58, color: SERIES.blue },
  { device: 'Mobile', share: 0.36, color: SERIES.orange },
  { device: 'Tablet', share: 0.06, color: SERIES.green },
];

/* ---------- conversions ---------- */
export const conversions = {
  rate: 0.0342, // 3.42%
  goalCompletions: 165,
  cpaChf: 84.2,
  estLeadValueChf: 12400, // per month
  leadsThisMonth: 148,
};

export const funnel: FunnelStep[] = [
  { stage: 'Sessions', value: 5216 },
  { stage: 'Pricing / demo viewed', value: 2247 },
  { stage: 'Signup started', value: 412 },
  { stage: 'Trial created', value: 218 },
  { stage: 'Activated (1st quote sent)', value: 96 },
];

export const goals: Goal[] = [
  { name: 'Demo request submitted', completions: 58, valueChf: 120 },
  { name: 'Trial signup', completions: 47, valueChf: 90 },
  { name: 'Pricing CTA click', completions: 34, valueChf: 15 },
  { name: 'Contact form sent', completions: 18, valueChf: 60 },
  { name: 'Newsletter signup', completions: 8, valueChf: 5 },
];

/* ---------- performance ---------- */
export const performance = {
  avgLoadMs: 1240,
  p75LoadMs: 1980,
  errorCount: 37,
  uptimePct: 0.9994,
};

export const vitals: Vital[] = [
  {
    name: 'LCP',
    label: 'Largest Contentful Paint',
    value: 2.1,
    unit: 's',
    display: '2.10 s',
    goodMax: 2.5,
    poorMin: 4.0,
    status: 'good',
  },
  {
    name: 'INP',
    label: 'Interaction to Next Paint',
    value: 168,
    unit: 'ms',
    display: '168 ms',
    goodMax: 200,
    poorMin: 500,
    status: 'good',
  },
  {
    name: 'CLS',
    label: 'Cumulative Layout Shift',
    value: 0.14,
    unit: '',
    display: '0.14',
    goodMax: 0.1,
    poorMin: 0.25,
    status: 'needs-improvement',
  },
];

export const errors: SiteError[] = [
  { code: 404, path: '/preise-alt', count: 14, lastSeen: '2026-08-07 09:12' },
  { code: 404, path: '/blog/umzug-checkliste-2023', count: 9, lastSeen: '2026-08-06 22:41' },
  { code: 404, path: '/wp-login.php', count: 6, lastSeen: '2026-08-07 03:08' },
  { code: 500, path: '/api/quote-request', count: 4, lastSeen: '2026-08-05 14:57' },
  { code: 404, path: '/funktionen/lagerung', count: 3, lastSeen: '2026-08-06 11:20' },
  { code: 503, path: '/api/availability', count: 1, lastSeen: '2026-08-04 02:33' },
];

/* ---------- audience ---------- */
export const geo: GeoRow[] = [
  { name: 'Zürich', visits: 1482, share: 0.284, tier: 'core' },
  { name: 'Bern', visits: 731, share: 0.14, tier: 'core' },
  { name: 'Vaud', visits: 563, share: 0.108, tier: 'growing' },
  { name: 'Aargau', visits: 438, share: 0.084, tier: 'growing' },
  { name: 'Geneva', visits: 396, share: 0.076, tier: 'growing' },
  { name: 'Basel-Stadt', visits: 344, share: 0.066, tier: 'growing' },
  { name: 'St. Gallen', visits: 261, share: 0.05, tier: 'emerging' },
  { name: 'Lucerne', visits: 219, share: 0.042, tier: 'emerging' },
];

export const osSplit: OsRow[] = [
  { os: 'Windows', share: 0.44 },
  { os: 'macOS', share: 0.27 },
  { os: 'iOS', share: 0.17 },
  { os: 'Android', share: 0.1 },
  { os: 'Linux', share: 0.02 },
];

export const audienceTotals = {
  swissShare: 0.887,
  topCity: 'Zürich',
  languages: 'de 71% · fr 19% · en 7% · it 3%',
};

/* ---------- header KPIs (overview) ---------- */
export const overviewKpis = {
  monthlyVisits: 5216,
  uniqueVisitors: 4487,
  conversionRate: conversions.rate,
  activeNow: 14, // base value; the UI jitters this slightly on each 30s tick
  avgLoadMs: performance.avgLoadMs,
  goalCompletions: conversions.goalCompletions,
};

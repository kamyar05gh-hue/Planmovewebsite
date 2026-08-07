import type { PageId } from '../App';
import PageHeader from '../components/PageHeader';
import SummaryTile from '../components/SummaryTile';
import { deviceSplit, engagement, geo, overviewKpis, sliceDays } from '../data/mock';
import { fmtCompact, fmtDuration, fmtMs, fmtPct } from '../lib/format';

interface OverviewProps {
  onNavigate: (p: PageId) => void;
  tick: number;
}

const last30 = sliceDays(30);

export default function Overview({ onNavigate, tick }: OverviewProps) {
  // "live" jitter: deterministic small wobble around the base value per 30s tick
  const activeNow = overviewKpis.activeNow + ((tick * 7) % 9) - 4;

  const tiles = [
    {
      label: 'Total visits',
      value: fmtCompact(overviewKpis.monthlyVisits),
      takeaway: '+8.20% vs previous 30 days',
      spark: last30.map((d) => d.total),
      page: 'traffic' as PageId,
    },
    {
      label: 'Unique visitors',
      value: fmtCompact(overviewKpis.uniqueVisitors),
      takeaway: '86% of visits are unique',
      spark: last30.map((d) => d.newVisitors),
      page: 'traffic' as PageId,
    },
    {
      label: 'Avg engagement time',
      value: fmtDuration(engagement.avgEngagementSec),
      takeaway: 'Per engaged session, last 30 days',
      spark: last30.map((d) => d.engagementSec),
      page: 'engagement' as PageId,
    },
    {
      label: 'Pages / session',
      value: engagement.pagesPerSession.toFixed(1),
      takeaway: 'Bounce rate 34.20%',
      page: 'engagement' as PageId,
    },
    {
      label: 'Conversion rate',
      value: fmtPct(overviewKpis.conversionRate),
      takeaway: 'Sessions reaching a goal',
      spark: last30.map((d) => d.total * 0.0342),
      page: 'conversions' as PageId,
    },
    {
      label: 'Goal completions',
      value: fmtCompact(overviewKpis.goalCompletions),
      takeaway: 'Demo requests lead with 58',
      page: 'conversions' as PageId,
    },
    {
      label: 'Avg page load',
      value: fmtMs(overviewKpis.avgLoadMs),
      takeaway: 'LCP good · CLS needs work',
      spark: last30.map((d) => d.loadMs),
      page: 'performance' as PageId,
    },
    {
      label: 'Top region',
      value: geo[0].name,
      takeaway: `${fmtPct(geo[0].share)} of visits · ${deviceSplit[0].device} ${fmtPct(deviceSplit[0].share)}`,
      page: 'audience' as PageId,
    },
  ];

  return (
    <>
      <PageHeader
        kicker="PLANMOVE · PLANMOVE.CH"
        title="Overview"
        description="Primary KPIs for the PLANMOVE marketing site — Swiss B2B SaaS for moving and cleaning companies. Each tile links to its detail page."
        stats={[
          { label: 'Monthly visits', value: fmtCompact(overviewKpis.monthlyVisits), sub: 'last 30 days' },
          { label: 'Conversion rate', value: fmtPct(overviewKpis.conversionRate), tone: 'green', sub: '+0.40 pts' },
          { label: 'Active now', value: String(activeNow), sub: 'visitors on site' },
          { label: 'Avg load', value: fmtMs(overviewKpis.avgLoadMs), tone: 'gray', sub: 'all pages' },
        ]}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {tiles.map((t) => (
          <SummaryTile
            key={t.label}
            label={t.label}
            value={t.value}
            takeaway={t.takeaway}
            spark={t.spark}
            onClick={() => onNavigate(t.page)}
          />
        ))}
      </div>
    </>
  );
}

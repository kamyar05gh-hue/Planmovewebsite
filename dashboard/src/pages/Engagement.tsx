import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';
import StatBox from '../components/StatBox';
import { deviceSplit, engagement, sliceDays, topPages } from '../data/mock';
import { AXIS_COMMON, CHART } from '../lib/chart';
import { fmtCompact, fmtDuration, fmtPct } from '../lib/format';

const last30 = sliceDays(30);

export default function Engagement() {
  return (
    <>
      <PageHeader
        kicker="Behavior"
        title="Engagement"
        description="How long visitors stay, which pages hold attention, and where sessions end. Device split is shown as a preview — full detail under Audience."
        stats={[
          { label: 'Avg engagement', value: fmtDuration(engagement.avgEngagementSec), tone: 'green', sub: 'per session' },
          { label: 'Session duration', value: fmtDuration(engagement.avgSessionSec), sub: 'average' },
          { label: 'Bounce rate', value: fmtPct(engagement.bounceRate), tone: 'gray', sub: '−3.10% vs prior' },
        ]}
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        <StatBox label="Avg engagement time" value={fmtDuration(engagement.avgEngagementSec)} delta="+6.40% vs prior period" />
        <StatBox label="Avg session duration" value={fmtDuration(engagement.avgSessionSec)} delta="+4.10% vs prior period" />
        <StatBox label="Pages / session" value={engagement.pagesPerSession.toFixed(1)} delta="+0.20 vs prior period" />
        <StatBox label="Bounce rate" value={fmtPct(engagement.bounceRate)} delta="−3.10% vs prior period" />
        <StatBox label="Engaged sessions" value={fmtPct(1 - engagement.bounceRate)} delta="65.80% of all sessions" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <Card title="Engagement time" meta="Seconds per session, daily" className="lg:col-span-3">
          <div className="h-[260px]" role="img" aria-label="Area chart of average engagement time per session over the last 30 days">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={last30} margin={{ top: 4, right: 4, bottom: 0, left: -12 }}>
                <defs>
                  <linearGradient id="g-eng" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={CHART.line} stopOpacity={0.22} />
                    <stop offset="100%" stopColor={CHART.line} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke={CHART.grid} />
                <XAxis dataKey="label" {...AXIS_COMMON} interval={2} tickMargin={8} />
                <YAxis {...AXIS_COMMON} width={44} tickFormatter={(v: number) => `${v}s`} />
                <Tooltip
                  contentStyle={CHART.tooltip}
                  labelStyle={CHART.tooltipLabel}
                  cursor={{ stroke: '#33333C' }}
                  formatter={(v) => [fmtDuration(Number(v)), 'Engagement']}
                />
                <Area type="monotone" dataKey="engagementSec" name="Engagement" stroke={CHART.line} strokeWidth={2} fill="url(#g-eng)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Device split" meta="Preview · detail in Audience" className="lg:col-span-2">
          <div className="flex h-[14px] overflow-hidden rounded-full" role="img" aria-label="Stacked bar of device share: Desktop 58%, Mobile 36%, Tablet 6%">
            {deviceSplit.map((d) => (
              <div key={d.device} style={{ width: `${d.share * 100}%`, backgroundColor: d.color }} />
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3">
            {deviceSplit.map((d) => (
              <div key={d.device} className="flex items-center justify-between">
                <span className="flex items-center gap-2.5 text-[13px] text-[#C9C9D1]">
                  <span className="inline-block h-[8px] w-[8px] rounded-[2px]" style={{ backgroundColor: d.color }} />
                  {d.device}
                </span>
                <span className="text-[13px] tabular-nums text-white">{fmtPct(d.share)}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[10px] border border-[#16161A] bg-[#0E0E11] px-4 py-3 text-[12px] text-[#8A8A93]">
            Desktop dominates — typical for B2B research during work hours.
          </div>
        </Card>
      </div>

      <Card title="Top pages & drop-off" meta="Where sessions end, last 30 days">
        <div className="flex flex-col">
          <div className="grid grid-cols-[1fr_80px_110px_180px] gap-3 px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B6B76]">
            <span>Page</span>
            <span className="text-right">Views</span>
            <span className="text-right">Avg time</span>
            <span className="text-right">Drop-off</span>
          </div>
          {topPages.slice(0, 6).map((p) => (
            <div
              key={p.path}
              className="row grid grid-cols-[1fr_80px_110px_180px] items-center gap-3 px-3 py-2.5 text-[13px]"
            >
              <span className="truncate text-[#C9C9D1]" title={p.path}>
                {p.path}
              </span>
              <span className="text-right tabular-nums text-white">{fmtCompact(p.views)}</span>
              <span className="text-right tabular-nums text-[#8A8A93]">{fmtDuration(p.avgTimeSec)}</span>
              <span className="flex items-center justify-end gap-2">
                <span className="h-[6px] w-[96px] overflow-hidden rounded-full bg-[#16161A]">
                  <span
                    className="block h-full rounded-full"
                    style={{
                      width: `${p.dropOffRate * 100}%`,
                      backgroundColor: p.dropOffRate > 0.4 ? '#F06A6A' : p.dropOffRate > 0.25 ? '#E8A04C' : '#3ECF8E',
                    }}
                  />
                </span>
                <span className="w-[52px] text-right tabular-nums text-[#8A8A93]">{fmtPct(p.dropOffRate)}</span>
              </span>
            </div>
          ))}
          <div className="px-3 pt-2 text-[12px] text-[#5C5C66]">+{topPages.length - 6} more pages</div>
        </div>
      </Card>
    </>
  );
}

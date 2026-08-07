import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Badge from '../components/Badge';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';
import StatBox from '../components/StatBox';
import { audienceTotals, deviceSplit, geo, osSplit } from '../data/mock';
import { AXIS_COMMON, CHART } from '../lib/chart';
import { fmtCompact, fmtInt, fmtPct } from '../lib/format';

const TIER_STYLE: Record<string, { color: string; label: string }> = {
  core: { color: '#3ECF8E', label: 'Core' },
  growing: { color: '#E3C75A', label: 'Growing' },
  emerging: { color: '#E8A04C', label: 'Emerging' },
};

export default function Audience() {
  const maxGeo = geo[0].visits;

  return (
    <>
      <PageHeader
        kicker="Visitors"
        title="Audience"
        description="Who visits planmove.ch: devices, operating systems, and where they are in Switzerland. Geo tiers mark market maturity, always labeled."
        stats={[
          { label: 'Swiss traffic', value: fmtPct(audienceTotals.swissShare), tone: 'green', sub: 'of all visits' },
          { label: 'Top city', value: audienceTotals.topCity, sub: '28.40% of visits' },
          { label: 'Languages', value: 'DE · FR', sub: audienceTotals.languages },
        ]}
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        <StatBox label="Desktop" value={fmtPct(deviceSplit[0].share)} delta="Primary work-hours device" />
        <StatBox label="Mobile" value={fmtPct(deviceSplit[1].share)} delta="+2.40 pts vs prior period" />
        <StatBox label="Tablet" value={fmtPct(deviceSplit[2].share)} delta="Stable" />
        <StatBox label="Top OS" value={osSplit[0].os} delta={fmtPct(osSplit[0].share)} />
        <StatBox label="Top canton" value={geo[0].name} delta={`${fmtInt(geo[0].visits)} visits`} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <Card title="Geography" meta="Top cantons by visits, last 30 days" className="lg:col-span-3">
          <div className="h-[300px]" role="img" aria-label="Horizontal bar chart of visits by Swiss canton">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={geo} layout="vertical" margin={{ top: 0, right: 8, bottom: 0, left: 8 }}>
                <CartesianGrid horizontal={false} stroke={CHART.grid} />
                <XAxis type="number" {...AXIS_COMMON} tickFormatter={(v: number) => fmtCompact(v)} />
                <YAxis type="category" dataKey="name" {...AXIS_COMMON} width={84} />
                <Tooltip
                  contentStyle={CHART.tooltip}
                  labelStyle={CHART.tooltipLabel}
                  cursor={{ fill: 'rgba(255,255,255,0.028)' }}
                  formatter={(v) => [fmtInt(Number(v)), 'Visits']}
                />
                <Bar dataKey="visits" name="Visits" maxBarSize={14} radius={[0, 4, 4, 0]}>
                  {geo.map((g) => (
                    <Cell key={g.name} fill={TIER_STYLE[g.tier].color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center gap-5">
            {Object.entries(TIER_STYLE).map(([tier, s]) => (
              <span key={tier} className="flex items-center gap-2 text-[11px] text-[#8A8A93]">
                <span className="inline-block h-[8px] w-[8px] rounded-[2px]" style={{ backgroundColor: s.color }} />
                {s.label} market
              </span>
            ))}
          </div>
        </Card>

        <Card title="Devices & OS" meta="Share of sessions" className="lg:col-span-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5C5C66]">Device</div>
          <div
            className="mt-3 flex h-[14px] overflow-hidden rounded-full"
            role="img"
            aria-label="Stacked bar of device share: Desktop 58%, Mobile 36%, Tablet 6%"
          >
            {deviceSplit.map((d) => (
              <div key={d.device} style={{ width: `${d.share * 100}%`, backgroundColor: d.color }} />
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
            {deviceSplit.map((d) => (
              <span key={d.device} className="flex items-center gap-2 text-[11px] text-[#8A8A93]">
                <span className="inline-block h-[8px] w-[8px] rounded-[2px]" style={{ backgroundColor: d.color }} />
                {d.device} {fmtPct(d.share)}
              </span>
            ))}
          </div>

          <div className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5C5C66]">Operating system</div>
          <div className="mt-3 flex flex-col gap-2.5">
            {osSplit.map((o) => (
              <div key={o.os} className="flex items-center gap-3">
                <span className="w-[72px] shrink-0 text-[12px] text-[#C9C9D1]">{o.os}</span>
                <span className="h-[6px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#16161A]">
                  <span
                    className="block h-full rounded-full bg-[#5B8DEF]"
                    style={{ width: `${o.share * 100}%` }}
                  />
                </span>
                <span className="w-[52px] shrink-0 text-right text-[11px] tabular-nums text-[#8A8A93]">
                  {fmtPct(o.share)}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Cantons detail" meta="Visits, share and market tier">
        <div className="flex flex-col">
          <div className="grid grid-cols-[1fr_90px_90px_120px] gap-3 px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B6B76]">
            <span>Canton</span>
            <span className="text-right">Visits</span>
            <span className="text-right">Share</span>
            <span className="text-right">Tier</span>
          </div>
          {geo.slice(0, 6).map((g) => (
            <div
              key={g.name}
              className="row grid grid-cols-[1fr_90px_90px_120px] items-center gap-3 px-3 py-2.5 text-[13px]"
            >
              <span className="truncate text-[#C9C9D1]" title={g.name}>
                {g.name}
              </span>
              <span className="text-right tabular-nums text-white">{fmtInt(g.visits)}</span>
              <span className="text-right tabular-nums text-[#8A8A93]">{fmtPct(g.share)}</span>
              <span className="flex justify-end">
                <Badge text={TIER_STYLE[g.tier].label} color={TIER_STYLE[g.tier].color} />
              </span>
            </div>
          ))}
          <div className="px-3 pt-2 text-[12px] text-[#5C5C66]">
            +{geo.length - 6} more cantons · max {fmtInt(maxGeo)} visits
          </div>
        </div>
      </Card>
    </>
  );
}

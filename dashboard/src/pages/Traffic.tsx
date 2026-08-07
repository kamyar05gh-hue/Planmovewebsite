import { useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';
import StatBox from '../components/StatBox';
import Tabs from '../components/Tabs';
import { channels, landingPages, sliceDays } from '../data/mock';
import { AXIS_COMMON, CHART } from '../lib/chart';
import { fmtCompact, fmtInt, fmtPct } from '../lib/format';

const RANGES = ['7D', '30D', '90D'] as const;
type Range = (typeof RANGES)[number];
const RANGE_DAYS: Record<Range, number> = { '7D': 7, '30D': 30, '90D': 90 };

export default function Traffic() {
  const [range, setRange] = useState<Range>('30D');
  const days = useMemo(() => sliceDays(RANGE_DAYS[range]), [range]);

  const total = days.reduce((s, d) => s + d.total, 0);
  const newV = days.reduce((s, d) => s + d.newVisitors, 0);
  const returning = total - newV;
  const dailyAvg = Math.round(total / days.length);

  // thin out x-axis ticks so labels stay readable
  const tickEvery = Math.ceil(days.length / 10);

  return (
    <>
      <PageHeader
        kicker="Acquisition"
        title="Traffic"
        description="Where sessions come from and how visit volume trends. Channels use the fixed categorical order: Organic Search, Paid Ads, Social, Direct, Referral."
        stats={[
          { label: 'Total visits', value: fmtCompact(total), sub: `last ${RANGE_DAYS[range]} days` },
          { label: 'New visitors', value: fmtCompact(newV), tone: 'green', sub: fmtPct(newV / total) },
          { label: 'Returning', value: fmtCompact(returning), tone: 'gray', sub: fmtPct(returning / total) },
          { label: 'Daily average', value: fmtInt(dailyAvg), sub: 'visits / day' },
        ]}
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        <StatBox label="Total visits" value={fmtCompact(total)} delta="+8.20% vs prior period" />
        <StatBox label="Unique visitors" value={fmtCompact(Math.round(total * 0.86))} delta="+6.10% vs prior period" />
        <StatBox label="New visitors" value={fmtCompact(newV)} delta="+9.40% vs prior period" />
        <StatBox label="Returning" value={fmtCompact(returning)} delta="+2.30% vs prior period" />
        <StatBox label="Top channel" value="Organic" delta="41.20% of sessions" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <Card
          title="Visitors"
          meta="Total vs new vs returning"
          className="lg:col-span-3"
          right={<Tabs options={[...RANGES]} value={range} onChange={(v) => setRange(v as Range)} ariaLabel="Time range" />}
        >
          <div className="h-[280px]" role="img" aria-label="Area chart of total, new and returning visitors over time">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={days} margin={{ top: 4, right: 4, bottom: 0, left: -12 }}>
                <defs>
                  <linearGradient id="g-total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8FB4F2" stopOpacity={0.22} />
                    <stop offset="100%" stopColor="#8FB4F2" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g-new" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5B8DEF" stopOpacity={0.18} />
                    <stop offset="100%" stopColor="#5B8DEF" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g-ret" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3ECF8E" stopOpacity={0.18} />
                    <stop offset="100%" stopColor="#3ECF8E" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke={CHART.grid} />
                <XAxis
                  dataKey="label"
                  {...AXIS_COMMON}
                  interval={tickEvery - 1}
                  tickMargin={8}
                />
                <YAxis {...AXIS_COMMON} width={44} tickFormatter={(v: number) => fmtCompact(v)} />
                <Tooltip contentStyle={CHART.tooltip} labelStyle={CHART.tooltipLabel} cursor={{ stroke: '#33333C' }} />
                <Legend wrapperStyle={CHART.legend} iconType="plainline" iconSize={14} />
                <Area type="monotone" dataKey="total" name="Total" stroke="#8FB4F2" strokeWidth={2} fill="url(#g-total)" />
                <Area type="monotone" dataKey="newVisitors" name="New" stroke="#5B8DEF" strokeWidth={1.5} fill="url(#g-new)" />
                <Area type="monotone" dataKey="returning" name="Returning" stroke="#3ECF8E" strokeWidth={1.5} fill="url(#g-ret)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Channels" meta="Sessions, last 30 days" className="lg:col-span-2">
          <div className="h-[280px]" role="img" aria-label="Bar chart of sessions by acquisition channel">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channels} layout="vertical" margin={{ top: 0, right: 8, bottom: 0, left: 8 }}>
                <CartesianGrid horizontal={false} stroke={CHART.grid} />
                <XAxis type="number" {...AXIS_COMMON} tickFormatter={(v: number) => fmtCompact(v)} />
                <YAxis type="category" dataKey="name" {...AXIS_COMMON} width={96} />
                <Tooltip contentStyle={CHART.tooltip} labelStyle={CHART.tooltipLabel} cursor={{ fill: 'rgba(255,255,255,0.028)' }} />
                <Bar dataKey="sessions" name="Sessions" maxBarSize={14} radius={[0, 4, 4, 0]}>
                  {channels.map((c) => (
                    <Cell key={c.name} fill={c.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex flex-col gap-1.5">
            {channels.map((c) => (
              <div key={c.name} className="flex items-center justify-between text-[11px]">
                <span className="flex items-center gap-2 text-[#8A8A93]">
                  <span className="inline-block h-[6px] w-[6px] rounded-full" style={{ backgroundColor: c.color }} />
                  {c.name}
                </span>
                <span className="tabular-nums text-[#C9C9D1]">{fmtPct(c.share)}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Top landing pages" meta="By sessions, last 30 days">
        <div className="flex flex-col">
          <div className="grid grid-cols-[1fr_90px_100px_110px] gap-3 px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B6B76]">
            <span>Page</span>
            <span className="text-right">Sessions</span>
            <span className="text-right">Bounce</span>
            <span className="text-right">Conv. rate</span>
          </div>
          {landingPages.slice(0, 6).map((p) => (
            <div
              key={p.path}
              className="row grid grid-cols-[1fr_90px_100px_110px] items-center gap-3 px-3 py-2.5 text-[13px]"
            >
              <span className="truncate text-[#C9C9D1]" title={p.path}>
                {p.path}
              </span>
              <span className="text-right tabular-nums text-white">{fmtInt(p.sessions)}</span>
              <span className="text-right tabular-nums text-[#8A8A93]">{fmtPct(p.bounceRate)}</span>
              <span className="text-right tabular-nums text-[#8A8A93]">{fmtPct(p.convRate)}</span>
            </div>
          ))}
          <div className="px-3 pt-2 text-[12px] text-[#5C5C66]">+{landingPages.length - 6} more pages</div>
        </div>
      </Card>
    </>
  );
}

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Badge from '../components/Badge';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';
import StatBox from '../components/StatBox';
import StatusBar from '../components/StatusBar';
import { errors, performance, sliceDays, vitals } from '../data/mock';
import { AXIS_COMMON, CHART } from '../lib/chart';
import { fmtInt, fmtMs } from '../lib/format';

const last30 = sliceDays(30);

const VITAL_STYLE = {
  good: { color: '#3ECF8E', label: 'Good' },
  'needs-improvement': { color: '#E8A04C', label: 'Needs improvement' },
  poor: { color: '#F06A6A', label: 'Poor' },
} as const;

function errorTone(code: number): { color: string; label: string } {
  if (code >= 500) return { color: '#F06A6A', label: 'Server' };
  if (code === 404) return { color: '#E8A04C', label: 'Not found' };
  return { color: '#E3C75A', label: 'Client' };
}

export default function Performance() {
  return (
    <>
      <PageHeader
        kicker="Site health"
        title="Performance"
        description="Load speed, Core Web Vitals at the 75th percentile, and tracked errors. Status colors always come with a text label."
        stats={[
          { label: 'Avg page load', value: fmtMs(performance.avgLoadMs), tone: 'green', sub: 'all pages' },
          { label: 'P75 load', value: fmtMs(performance.p75LoadMs), sub: 'mobile + desktop' },
          { label: 'Uptime', value: '99.94%', tone: 'green', sub: 'last 30 days' },
          { label: 'Errors', value: fmtInt(performance.errorCount), tone: 'red', sub: 'logged events' },
        ]}
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        <StatBox label="Avg page load" value={fmtMs(performance.avgLoadMs)} delta="−4.20% vs prior period" />
        <StatBox label="P75 page load" value={fmtMs(performance.p75LoadMs)} delta="−2.10% vs prior period" />
        <StatBox label="LCP (P75)" value={vitals[0].display} delta="Good · target ≤ 2.50 s" />
        <StatBox label="INP (P75)" value={vitals[1].display} delta="Good · target ≤ 200 ms" />
        <StatBox label="CLS (P75)" value={vitals[2].display} delta="Needs improvement · target ≤ 0.10" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <Card title="Page load speed" meta="Average ms per day, last 30 days" className="lg:col-span-3">
          <div className="h-[260px]" role="img" aria-label="Line chart of average page load time in milliseconds over the last 30 days">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={last30} margin={{ top: 4, right: 4, bottom: 0, left: -12 }}>
                <CartesianGrid vertical={false} stroke={CHART.grid} />
                <XAxis dataKey="label" {...AXIS_COMMON} interval={2} tickMargin={8} />
                <YAxis
                  {...AXIS_COMMON}
                  width={44}
                  domain={['dataMin - 100', 'dataMax + 100']}
                  tickFormatter={(v: number) => `${(v / 1000).toFixed(1)}s`}
                />
                <Tooltip
                  contentStyle={CHART.tooltip}
                  labelStyle={CHART.tooltipLabel}
                  cursor={{ stroke: '#33333C' }}
                  formatter={(v) => [fmtMs(Number(v)), 'Load time']}
                />
                <Line type="monotone" dataKey="loadMs" name="Load time" stroke={CHART.line} strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Core Web Vitals" meta="P75, last 28 days" className="lg:col-span-2">
          <div className="flex flex-col gap-3">
            {vitals.map((v) => {
              const s = VITAL_STYLE[v.status];
              // fill scaled so that "poor" threshold ≈ full bar
              const fill = v.value / v.poorMin;
              return (
                <StatusBar
                  key={v.name}
                  name={v.name}
                  label={v.label}
                  display={v.display}
                  fill={fill}
                  color={s.color}
                  statusLabel={s.label}
                  thresholdHint={`Good ≤ ${v.goodMax}${v.unit ? ` ${v.unit}` : ''}`}
                />
              );
            })}
          </div>
          <div className="mt-4 text-[12px] text-[#5C5C66]">
            CLS regressed after the hero image change on /preise — reserve image dimensions to fix.
          </div>
        </Card>
      </div>

      <Card title="Error tracking" meta="Logged events, last 30 days">
        <div className="flex flex-col">
          <div className="grid grid-cols-[110px_1fr_80px_130px] gap-3 px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B6B76]">
            <span>Status</span>
            <span>Path</span>
            <span className="text-right">Count</span>
            <span className="text-right">Last seen</span>
          </div>
          {errors.map((e) => {
            const tone = errorTone(e.code);
            return (
              <div
                key={`${e.code}-${e.path}`}
                className="row grid grid-cols-[110px_1fr_80px_130px] items-center gap-3 px-3 py-2.5 text-[13px]"
              >
                <span>
                  <Badge text={`${e.code} · ${tone.label}`} color={tone.color} />
                </span>
                <span className="truncate text-[#C9C9D1]" title={e.path}>
                  {e.path}
                </span>
                <span className="text-right tabular-nums text-white">{fmtInt(e.count)}</span>
                <span className="text-right text-[12px] tabular-nums text-[#5C5C66]">{e.lastSeen}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </>
  );
}

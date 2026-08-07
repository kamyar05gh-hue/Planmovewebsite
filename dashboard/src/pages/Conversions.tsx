import Card from '../components/Card';
import PageHeader from '../components/PageHeader';
import StatBox from '../components/StatBox';
import { conversions, funnel, goals } from '../data/mock';
import { fmtChf, fmtCompact, fmtInt, fmtPct } from '../lib/format';

export default function Conversions() {
  const maxFunnel = funnel[0].value;

  return (
    <>
      <PageHeader
        kicker="Growth"
        title="Conversions"
        description="How sessions turn into leads: conversion rate, goal completions, acquisition cost and the signup funnel. Lead value frames what a conversion is worth."
        stats={[
          { label: 'Conversion rate', value: fmtPct(conversions.rate), tone: 'green', sub: '+0.40 pts vs prior' },
          { label: 'Goal completions', value: fmtInt(conversions.goalCompletions), sub: 'last 30 days' },
          { label: 'CPA', value: `CHF ${conversions.cpaChf.toFixed(2)}`, tone: 'gray', sub: 'blended, paid + organic' },
          { label: 'Est. lead value', value: fmtChf(conversions.estLeadValueChf), sub: 'per month' },
        ]}
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        <StatBox label="Conversion rate" value={fmtPct(conversions.rate)} delta="+0.40 pts vs prior period" />
        <StatBox label="Goal completions" value={fmtInt(conversions.goalCompletions)} delta="+11.20% vs prior period" />
        <StatBox label="CPA" value={`CHF ${conversions.cpaChf.toFixed(2)}`} delta="−6.80% vs prior period" />
        <StatBox label="Leads this month" value={fmtInt(conversions.leadsThisMonth)} delta="Demo + trial + contact" />
        <StatBox label="Est. lead value" value={fmtChf(conversions.estLeadValueChf)} delta="CHF 84 per lead avg" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <Card title="Signup funnel" meta="Sessions → activated, last 30 days" className="lg:col-span-3">
          <div className="flex flex-col gap-2.5" role="img" aria-label="Funnel from 5,216 sessions to 96 activated accounts">
            {funnel.map((step, i) => {
              const pctOfTop = step.value / maxFunnel;
              const fromPrev = i > 0 ? step.value / funnel[i - 1].value : 1;
              // single-hue blue ramp
              const alpha = 1 - i * 0.14;
              return (
                <div key={step.stage} className="flex items-center gap-4">
                  <span className="w-[170px] shrink-0 truncate text-[12px] text-[#8A8A93]" title={step.stage}>
                    {step.stage}
                  </span>
                  <div className="h-[26px] min-w-0 flex-1 rounded-[8px] bg-[#0E0E11]">
                    <div
                      className="flex h-full items-center justify-end rounded-[8px] pr-2.5"
                      style={{
                        width: `${Math.max(pctOfTop * 100, 7)}%`,
                        backgroundColor: `rgba(91, 141, 239, ${alpha.toFixed(2)})`,
                      }}
                    >
                      <span className="text-[11px] font-medium tabular-nums text-white">{fmtCompact(step.value)}</span>
                    </div>
                  </div>
                  <span className="w-[64px] shrink-0 text-right text-[11px] tabular-nums text-[#5C5C66]">
                    {i === 0 ? '100.00%' : fmtPct(fromPrev)}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 text-[12px] text-[#5C5C66]">
            Step-over-step conversion on the right. Biggest leak: pricing/demo view → signup start (18.34%).
          </div>
        </Card>

        <Card title="Lead value" meta="Estimated, per month" className="lg:col-span-2">
          <div className="text-[26px] font-medium tabular-nums text-white">{fmtChf(conversions.estLeadValueChf)}</div>
          <div className="mt-1 text-[12px] text-[#5C5C66]">
            {fmtInt(conversions.leadsThisMonth)} leads × ~CHF 84 average value per lead
          </div>
          <div className="mt-5 flex flex-col gap-2.5">
            {[
              { k: 'Trial → paid rate', v: '21.40%' },
              { k: 'Avg deal size', v: 'CHF 1,450 / yr' },
              { k: 'Payback on CPA', v: '~2.1 months' },
            ].map((r) => (
              <div
                key={r.k}
                className="flex items-center justify-between rounded-[10px] border border-[#16161A] bg-[#0E0E11] px-4 py-3 text-[12px]"
              >
                <span className="text-[#8A8A93]">{r.k}</span>
                <span className="tabular-nums text-[#C9C9D1]">{r.v}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Goals" meta="Completions and value, last 30 days">
        <div className="flex flex-col">
          <div className="grid grid-cols-[1fr_110px_140px_140px] gap-3 px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B6B76]">
            <span>Goal</span>
            <span className="text-right">Completions</span>
            <span className="text-right">Value / event</span>
            <span className="text-right">Total value</span>
          </div>
          {goals.map((g) => (
            <div
              key={g.name}
              className="row grid grid-cols-[1fr_110px_140px_140px] items-center gap-3 px-3 py-2.5 text-[13px]"
            >
              <span className="truncate text-[#C9C9D1]" title={g.name}>
                {g.name}
              </span>
              <span className="text-right tabular-nums text-white">{fmtInt(g.completions)}</span>
              <span className="text-right tabular-nums text-[#8A8A93]">CHF {g.valueChf.toFixed(2)}</span>
              <span className="text-right tabular-nums text-[#8A8A93]">{fmtChf(g.completions * g.valueChf)}</span>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

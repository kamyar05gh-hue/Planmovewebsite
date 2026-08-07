import { ArrowUpRight } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { CHART } from '../lib/chart';

interface SummaryTileProps {
  label: string;
  value: string;
  takeaway: string;
  spark?: number[];
  onClick: () => void;
}

/** Clickable KPI tile that links to a detail page (Overview pattern). */
export default function SummaryTile({ label, value, takeaway, spark, onClick }: SummaryTileProps) {
  return (
    <button className="tile group w-full p-5 text-left" onClick={onClick}>
      <div className="flex items-start justify-between gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B6B76] transition-colors duration-[140ms] group-hover:text-[#A6A6AF]">
          {label}
        </span>
        <ArrowUpRight
          size={14}
          strokeWidth={1.5}
          className="shrink-0 text-[#5C5C66] transition-all duration-[140ms] group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-[#8FB4F2]"
        />
      </div>
      <div className="mt-3 text-[26px] font-medium tabular-nums text-white">{value}</div>
      {spark && spark.length > 1 && (
        <div className="mt-3 h-[44px]" aria-hidden="true">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={spark.map((v, i) => ({ i, v }))} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id={`spark-${label}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={CHART.line} stopOpacity={0.22} />
                  <stop offset="100%" stopColor={CHART.line} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="v"
                stroke={CHART.line}
                strokeWidth={1.5}
                fill={`url(#spark-${label})`}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
      <div className="mt-3 truncate text-[12px] text-[#5C5C66]" title={takeaway}>
        {takeaway}
      </div>
    </button>
  );
}

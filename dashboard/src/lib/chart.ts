/** Recharts styling tokens — charts should disappear into the surface. */

export const CHART = {
  line: '#8FB4F2',
  grid: '#1a1a1a',
  tooltip: {
    backgroundColor: '#16161A',
    border: '1px solid #1C1C21',
    borderRadius: 8,
    fontSize: 12,
    color: '#fff',
  } as const,
  tooltipLabel: { color: '#C9C9D1' } as const,
  tick: { fill: '#5C5C66', fontSize: 11 } as const,
  legend: { fontSize: 11, color: '#8A8A93' } as const,
};

export const AXIS_COMMON = {
  axisLine: false as const,
  tickLine: false as const,
  tick: CHART.tick,
};

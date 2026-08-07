import {
  Gauge,
  LayoutDashboard,
  MousePointerClick,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';
import type { PageId } from '../App';

const SECTION = 'Analytics';

export const NAV: { id: PageId; label: string; icon: LucideIcon }[] = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'traffic', label: 'Traffic', icon: TrendingUp },
  { id: 'engagement', label: 'Engagement', icon: MousePointerClick },
  { id: 'conversions', label: 'Conversions', icon: Target },
  { id: 'performance', label: 'Performance', icon: Gauge },
  { id: 'audience', label: 'Audience', icon: Users },
];

interface SidebarProps {
  page: PageId;
  onNavigate: (p: PageId) => void;
  lastUpdated: Date;
}

export default function Sidebar({ page, onNavigate, lastUpdated }: SidebarProps) {
  return (
    <aside className="flex h-screen w-[250px] shrink-0 flex-col border-r border-[#1C1C21] bg-black px-4 py-6">
      {/* Brand block */}
      <div className="px-2">
        <div className="text-[15px] font-semibold text-white">PLANMOVE</div>
        <div className="mt-0.5 text-[11px] text-[#5C5C66]">planmove.ch · Website analytics</div>
      </div>

      {/* Nav */}
      <div className="mt-8 px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5C5C66]">
        {SECTION}
      </div>
      <nav className="mt-3 flex flex-col gap-1">
        {NAV.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className="navitem"
            data-active={page === id}
            onClick={() => onNavigate(id)}
            aria-current={page === id ? 'page' : undefined}
          >
            <Icon size={16} strokeWidth={1.5} className="shrink-0 text-[#6B6B76]" />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Footer: live status */}
      <div className="mt-auto px-2">
        <div className="flex items-center gap-2 text-[11px] text-[#8A8A93]">
          <span className="pulse-dot inline-block h-[6px] w-[6px] rounded-full bg-[#3ECF8E]" />
          Live · refreshes every 30s
        </div>
        <div className="mt-1.5 text-[10px] text-[#3F3F47]">
          Last updated {lastUpdated.toLocaleTimeString('en-GB')}
        </div>
      </div>
    </aside>
  );
}

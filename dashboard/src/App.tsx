import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Traffic from './pages/Traffic';
import Engagement from './pages/Engagement';
import Conversions from './pages/Conversions';
import Performance from './pages/Performance';
import Audience from './pages/Audience';

export type PageId = 'overview' | 'traffic' | 'engagement' | 'conversions' | 'performance' | 'audience';

const REFRESH_MS = 30_000;

export default function App() {
  const [page, setPage] = useState<PageId>('overview');
  const [lastUpdated, setLastUpdated] = useState(() => new Date());
  // tick increments every 30s — pages use it to jitter "live" values slightly
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setLastUpdated(new Date());
      setTick((t) => t + 1);
    }, REFRESH_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="app-scope flex min-h-screen">
      <Sidebar page={page} onNavigate={setPage} lastUpdated={lastUpdated} />
      <main className="min-w-0 flex-1 px-8 py-6">
        <div className="mx-auto max-w-[1280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col gap-5"
            >
              {page === 'overview' && <Overview onNavigate={setPage} tick={tick} />}
              {page === 'traffic' && <Traffic />}
              {page === 'engagement' && <Engagement />}
              {page === 'conversions' && <Conversions />}
              {page === 'performance' && <Performance />}
              {page === 'audience' && <Audience />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

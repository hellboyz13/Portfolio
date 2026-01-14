'use client';

import { useEffect, useState } from 'react';

const stats = [
  { value: '4', label: 'APAC Countries', suffix: '' },
  { value: '3', label: 'Years Experience', suffix: '+' },
  { value: '500', label: 'Tickets Resolved', suffix: '+' },
  { value: '99', label: 'Uptime Target', suffix: '%' },
];

export default function StatsSection({ mounted }: { mounted: boolean }) {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!mounted) return;

    const targets = stats.map(s => parseInt(s.value));
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      setCounts(targets.map(target => Math.floor(target * eased)));

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, increment);

    return () => clearInterval(timer);
  }, [mounted]);

  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3 ${mounted ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="bento-card"
          style={{ animationDelay: `${600 + index * 100}ms` }}
        >
          <div className="stat-card">
            <div className="stat-value">
              {counts[index]}{stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

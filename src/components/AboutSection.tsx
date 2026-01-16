'use client';

export default function AboutSection() {
  const quickFacts = [
    { icon: '📍', text: 'Based in Singapore' },
    { icon: '🌏', text: '4 APAC countries' },
    { icon: '☁️', text: 'Microsoft 365 daily' },
  ];

  return (
    <div className="bento-card h-full">
      {/* Header */}
      <div className="mb-4">
        <div className="section-label">About</div>
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          The Person Behind the Terminal
        </h3>
      </div>

      {/* Story */}
      <div className="mb-5">
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
          I didn&apos;t plan to end up in IT — it just made sense. Always the one fixing things at home, figuring out why the Wi-Fi wasn&apos;t working, or helping relatives with their &ldquo;slow&rdquo; computers.
        </p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          That curiosity turned into a career. Today, I manage IT operations across Singapore, Vietnam, Indonesia, and China.
        </p>
      </div>

      {/* Quick Facts */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        {quickFacts.map((fact, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]"
          >
            <span className="text-base">{fact.icon}</span>
            <span className="text-xs text-[var(--text-secondary)]">{fact.text}</span>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="pt-4 border-t border-[var(--border)]">
        <div className="text-xs font-mono text-[var(--text-dim)] mb-3 uppercase tracking-wider">
          Core Values
        </div>
        <div className="space-y-2">
          {[
            'Fix it properly, not just quickly',
            'Document everything',
            'Stay curious',
            'Keep it simple',
          ].map((value, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-5 h-5 flex items-center justify-center rounded bg-[var(--accent-dim)] text-[var(--accent)] text-[10px] font-mono font-bold">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="text-xs text-[var(--text-secondary)]">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

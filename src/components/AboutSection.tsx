'use client';

export default function AboutSection() {
  return (
    <section className="py-16 relative">
      {/* Decorative elements */}
      <div className="section-decorator right-0 top-40" />

      {/* Section Label */}
      <div className="section-label">
        <span>Origin Story</span>
      </div>

      {/* Section Title */}
      <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-2">
        A bit <span className="italic text-gradient">about me</span>
      </h2>

      <p className="text-[var(--text-secondary)] mb-10 max-w-lg">
        The journey from fixing family computers to managing enterprise IT.
      </p>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Story Card 1 */}
        <div className="group card p-6 relative overflow-hidden">
          <div className="accent-bar" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-light)] border border-[var(--border)] text-xs font-semibold text-[var(--accent)] mb-4">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Singapore
          </div>

          <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-4 leading-relaxed">
            Born in <span className="text-gradient font-semibold">Singapore</span>, powered by curiosity
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            I didn&apos;t plan to end up in IT — it just made sense. I was always the one fixing things at home, figuring out why the Wi-Fi wasn&apos;t working, or helping relatives with their &ldquo;slow&rdquo; computers.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            That curiosity turned into a career. Today, I manage IT operations across Singapore, Vietnam, Indonesia, and China — keeping systems running, users productive, and problems solved before they escalate.
          </p>
        </div>

        {/* Values Card */}
        <div className="group card p-6 relative overflow-hidden">
          <div className="accent-bar" />

          <div className="flex items-center gap-3 mb-5">
            <div className="icon-container">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h4 className="font-display font-bold text-[var(--text-primary)]">
              Core Values
            </h4>
          </div>
          <ul className="space-y-3">
            {[
              { text: 'Fix it properly, not just quickly', icon: '01' },
              { text: 'Document everything', icon: '02' },
              { text: 'Stay curious', icon: '03' },
              { text: 'Keep it simple', icon: '04' },
            ].map((value, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[var(--text-secondary)]">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[var(--accent-light)] text-[var(--accent)] text-xs font-bold border border-[var(--border)]">
                  {value.icon}
                </span>
                <span className="text-sm">{value.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Story Card 2 */}
        <div className="group card p-6 relative overflow-hidden">
          <div className="accent-bar" />

          <div className="icon-container mb-4">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            I&apos;m not the guy who builds fancy apps or writes complex code. I&apos;m the guy who makes sure your laptop works on day one, your account doesn&apos;t get locked, and your Teams call doesn&apos;t drop. The behind-the-scenes stuff that nobody notices — until it breaks.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            After 4+ years in IT support, I&apos;ve learned that the best technology is the kind you don&apos;t have to think about. That&apos;s what I aim for.
          </p>
        </div>

        {/* Fun Facts */}
        <div className="group card p-6 relative overflow-hidden">
          <div className="accent-bar" />

          <div className="flex items-center gap-3 mb-5">
            <div className="icon-container">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-display font-bold text-[var(--text-primary)]">
              Quick Facts
            </h4>
          </div>
          <ul className="space-y-2.5">
            {[
              'Based in Singapore',
              'Supports teams across 4 APAC countries',
              'Microsoft 365 & Intune daily driver',
              'Kopi-C over coffee',
              'Probably has too many browser tabs open',
              'Building side projects when not troubleshooting',
            ].map((fact, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-[var(--text-secondary)] text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

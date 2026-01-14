'use client';

const skillCategories = [
  {
    name: 'Cloud & Identity',
    skills: ['Microsoft Azure', 'Entra ID', 'Intune', 'Exchange Online', 'Microsoft 365'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'ITSM & Ticketing',
    skills: ['Freshservice', 'Jira', 'Zendesk'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Endpoint Management',
    skills: ['Workspace ONE', 'Windows', 'Linux', 'macOS'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Hardware & Systems',
    skills: ['POS Systems', 'RFID', 'Video Conferencing', 'Network Infrastructure'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
  },
];

export default function SkillsSection() {
  return (
    <section className="py-16 relative">
      {/* Decorative elements */}
      <div className="section-decorator right-0 -top-20" />

      {/* Section Label */}
      <div className="section-label">
        <span>Toolkit</span>
      </div>

      {/* Section Title */}
      <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-2">
        Technologies I <span className="italic text-gradient">work with</span>
      </h2>

      <p className="text-[var(--text-secondary)] mb-10 max-w-lg">
        Enterprise tools and platforms I use daily to keep systems running smoothly.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((category, index) => (
          <div
            key={category.name}
            className="group card p-6 relative overflow-hidden transition-transform duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Accent bar */}
            <div className="accent-bar" />

            {/* Gradient glow - visible by default */}
            <div className={`absolute -inset-px bg-gradient-to-r ${category.color} opacity-5 group-hover:opacity-15 rounded-2xl transition-opacity duration-500`} />

            {/* Category Header */}
            <div className="flex items-center gap-3 mb-5 relative">
              <div className="icon-container">
                {category.icon}
              </div>
              <h3 className="font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {category.name}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 relative">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className="skill-pill"
                  style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

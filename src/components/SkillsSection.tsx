'use client';

const skillCategories = [
  {
    name: 'Cloud & Identity',
    skills: ['Microsoft Azure', 'Entra ID', 'Intune', 'Exchange Online', 'Microsoft 365 Suite'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: 'accent',
  },
  {
    name: 'ITSM & Ticketing',
    skills: ['Fresh Service', 'Jira', 'Zendesk'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'success',
  },
  {
    name: 'Endpoint Management',
    skills: ['Workspace ONE', 'Windows', 'Linux', 'macOS', 'Trend Micro'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'highlight',
  },
  {
    name: 'Hardware & Systems',
    skills: ['POS Systems', 'RFID', 'Video Conferencing', 'Network Infrastructure'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    color: 'warning',
  },
];

// Desert Sunset Palette - harmonious warm tones
const colorStyles: Record<string, { icon: string; tag: string }> = {
  accent: {
    // Coral Orange - main accent
    icon: 'bg-[rgba(255,107,74,0.12)] border-[rgba(255,107,74,0.35)] text-[#ff6b4a]',
    tag: 'tag--coral',
  },
success: {
    // Golden Amber
    icon: 'bg-[rgba(245,158,11,0.12)] border-[rgba(245,158,11,0.35)] text-[#f59e0b]',
    tag: 'tag--amber',
  },
  highlight: {
    // Terracotta - earthy orange-brown
    icon: 'bg-[rgba(194,112,58,0.12)] border-[rgba(194,112,58,0.35)] text-[#c2703a]',
    tag: 'tag--terracotta',
  },
  warning: {
    // Sand Gold - muted warm tan
    icon: 'bg-[rgba(212,165,116,0.15)] border-[rgba(212,165,116,0.4)] text-[#d4a574]',
    tag: 'tag--sand',
  },
};

export default function SkillsSection() {
  return (
    <div className="bento-card h-full">
      {/* Header */}
      <div className="mb-4">
        <div className="section-label">Tech Stack</div>
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          Skills & Tools
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillCategories.map((category) => {
          const styles = colorStyles[category.color];
          return (
            <div key={category.name} className="skill-module">
              <div className="skill-module__header">
                <div className={`skill-module__icon border ${styles.icon}`}>
                  {category.icon}
                </div>
                <span className="skill-module__title text-sm">{category.name}</span>
              </div>
              <div className="skill-module__tags">
                {category.skills.map((skill) => (
                  <span key={skill} className={`tag text-[11px] ${styles.tag}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

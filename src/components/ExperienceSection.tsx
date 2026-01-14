'use client';

import { useState } from 'react';

interface TimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills?: string[];
  icon: React.ReactNode;
}

const BriefcaseIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7h-4V5a3 3 0 00-3-3h-2a3 3 0 00-3 3v2H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM10 5a1 1 0 011-1h2a1 1 0 011 1v2h-4V5z" />
  </svg>
);

const GraduationIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
  </svg>
);

const experiences: TimelineItem[] = [
  {
    id: 'cosmostar',
    role: 'IT Support Specialist, APAC',
    company: 'Cosmostar Singapore',
    period: '2024 - Present',
    description: [
      'Providing comprehensive technical support across the Asia-Pacific region',
      'Managing IT infrastructure and resolving complex system issues',
      'Collaborating with global teams to implement enterprise solutions',
      'Streamlining support workflows for improved efficiency',
    ],
    skills: ['Azure', 'Microsoft 365', 'Intune', 'ServiceNow'],
    icon: <BriefcaseIcon />,
  },
  {
    id: 'decathlon',
    role: 'IT Support & Services Engineer',
    company: 'Decathlon',
    period: '2021 - 2024',
    description: [
      'Delivered end-to-end IT support for retail operations across multiple stores',
      'Maintained POS systems, network infrastructure, and endpoint devices',
      'Trained staff on technical tools and established best practices',
      'Led hardware refresh projects and system migrations',
    ],
    skills: ['POS Systems', 'Network Infrastructure', 'Windows', 'RFID'],
    icon: <BriefcaseIcon />,
  },
];

const education: TimelineItem[] = [
  {
    id: 'murdoch',
    role: 'Bachelor in Business Information Systems',
    company: 'Murdoch University',
    period: '2023 - 2025',
    description: [
      'Specializing in business analytics and enterprise information systems',
      'Coursework in database management, systems analysis, and project management',
      'Developing expertise in bridging business needs with technical solutions',
    ],
    skills: ['Business Analytics', 'Systems Design', 'Project Management'],
    icon: <GraduationIcon />,
  },
  {
    id: 'ngee-ann',
    role: 'Diploma in Information Technology',
    company: 'Ngee Ann Polytechnic',
    period: '2016 - 2019',
    description: [
      'Built strong foundations in programming, networking, and system administration',
      'Completed hands-on projects in software development and IT infrastructure',
      'Gained practical experience through industry attachments',
    ],
    skills: ['Programming', 'Networking', 'System Administration'],
    icon: <GraduationIcon />,
  },
];

function TimelineCard({ item, isExpanded, onToggle, index }: {
  item: TimelineItem;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={`timeline-item relative overflow-hidden ${isExpanded ? 'expanded' : ''}`}
      onClick={onToggle}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Accent bar on left */}
      <div className="accent-bar" />

      <div className="timeline-content pl-2">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            {/* Icon */}
            <div className={`icon-container shrink-0 ${isExpanded ? 'border-[var(--accent)]' : ''}`}>
              {item.icon}
            </div>

            <div className="flex-1 min-w-0">
              <h3 className={`font-display font-bold text-[var(--text-primary)] mb-0.5 transition-colors ${
                isExpanded ? 'text-[var(--accent)]' : ''
              }`}>
                {item.role}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm">{item.company}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold px-2.5 py-1.5 rounded-full bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--border)]">
              {item.period}
            </span>
            <div className={`p-1.5 rounded-lg bg-[var(--bg-glass)] border border-[var(--border)] transition-all duration-300 ${
              isExpanded ? 'border-[var(--accent)] bg-[var(--accent-light)]' : ''
            }`}>
              <svg
                className={`chevron w-4 h-4 text-[var(--text-muted)] ${isExpanded ? 'rotated text-[var(--accent)]' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <div
          className={`timeline-dropdown ${isExpanded ? 'mt-4' : ''}`}
          style={{
            maxHeight: isExpanded ? '500px' : '0',
            opacity: isExpanded ? 1 : 0,
          }}
        >
          {/* Description */}
          <ul className="space-y-2 mb-4 ml-[52px]">
            {item.description.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-[var(--accent)]" />
                {point}
              </li>
            ))}
          </ul>

          {/* Skills Tags */}
          {item.skills && (
            <div className="flex flex-wrap gap-2 ml-[52px]">
              {item.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const [expandedExp, setExpandedExp] = useState<string | null>(null);
  const [expandedEdu, setExpandedEdu] = useState<string | null>(null);

  return (
    <section id="experience" className="py-16 relative">
      {/* Decorative elements */}
      <div className="section-decorator -left-32 top-0" />

      {/* Work Experience */}
      <div className="mb-16">
        {/* Section Label */}
        <div className="section-label">
          <span>Recent Adventures</span>
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-2">
          Where I&apos;ve been <span className="italic text-gradient">working</span>
        </h2>

        <p className="text-[var(--text-secondary)] mb-8 max-w-lg">
          Building expertise through hands-on experience in enterprise IT environments.
        </p>

        {/* Experience Cards */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <TimelineCard
              key={exp.id}
              item={exp}
              index={index}
              isExpanded={expandedExp === exp.id}
              onToggle={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
            />
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="relative">
        {/* Decorative element */}
        <div className="section-decorator right-0 top-0" />

        {/* Section Label */}
        <div className="section-label">
          <span>Training Arc</span>
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-2">
          My <span className="italic text-gradient">academic</span> journey
        </h2>

        <p className="text-[var(--text-secondary)] mb-8 max-w-lg">
          Continuous learning to bridge the gap between technology and business.
        </p>

        {/* Education Cards */}
        <div className="space-y-4">
          {education.map((edu, index) => (
            <TimelineCard
              key={edu.id}
              item={edu}
              index={index}
              isExpanded={expandedEdu === edu.id}
              onToggle={() => setExpandedEdu(expandedEdu === edu.id ? null : edu.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

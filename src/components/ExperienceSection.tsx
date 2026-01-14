'use client';

import { useState } from 'react';

interface TimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  current?: boolean;
  description: string[];
  skills?: string[];
}

const experiences: TimelineItem[] = [
  {
    id: 'cosmostar',
    role: 'IT Support Specialist, APAC',
    company: 'Cosmostar Singapore',
    period: '2024 - Present',
    current: true,
    description: [
      'Providing comprehensive technical support across the Asia-Pacific region',
      'Managing IT infrastructure and resolving complex system issues',
      'Collaborating with global teams to implement enterprise solutions',
      'Streamlining support workflows for improved efficiency',
    ],
    skills: ['Azure', 'Microsoft 365', 'Intune', 'Freshservice'],
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
  },
];

const education: TimelineItem[] = [
  {
    id: 'murdoch',
    role: 'Bachelor in Business Information Systems',
    company: 'Murdoch University',
    period: '2023 - 2025',
    current: true,
    description: [
      'Specializing in business analytics and enterprise information systems',
      'Coursework in database management, systems analysis, and project management',
    ],
    skills: ['Business Analytics', 'Systems Design', 'Project Management'],
  },
  {
    id: 'ngee-ann',
    role: 'Diploma in Information Technology',
    company: 'Ngee Ann Polytechnic',
    period: '2016 - 2019',
    description: [
      'Built strong foundations in programming, networking, and system administration',
      'Completed hands-on projects in software development and IT infrastructure',
    ],
    skills: ['Programming', 'Networking', 'System Administration'],
  },
];

function TimelineCard({ item, isExpanded, onToggle }: {
  item: TimelineItem;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`timeline-item cursor-pointer ${item.current ? 'timeline-item--active' : ''}`}
      onClick={onToggle}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-[var(--text-primary)] text-sm">
              {item.role}
            </h4>
            {item.current && (
              <span className="tag tag--success text-[10px] py-0.5 px-1.5">CURRENT</span>
            )}
          </div>
          <p className="text-[var(--text-muted)] text-xs font-mono">{item.company}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-[var(--text-dim)]">{item.period}</span>
          <svg
            className={`w-4 h-4 text-[var(--text-dim)] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Expandable Content */}
      <div className={`timeline-content ${isExpanded ? 'expanded' : ''}`}>
        <div className="timeline-content__inner">
          <ul className="space-y-1.5 mb-3">
            {item.description.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[var(--text-secondary)] text-xs">
                <span className="w-1 h-1 rounded-full mt-1.5 bg-[var(--accent)] flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          {item.skills && (
            <div className="flex flex-wrap gap-1.5">
              {item.skills.map((skill) => (
                <span key={skill} className="tag text-[10px]">{skill}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const [expandedExp, setExpandedExp] = useState<string | null>('cosmostar');
  const [expandedEdu, setExpandedEdu] = useState<string | null>(null);

  return (
    <div className="bento-card h-full flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <div className="section-label">Experience</div>
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          Career Timeline
        </h3>
      </div>

      {/* Work Experience */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Work</span>
        </div>
        <div className="space-y-2">
          {experiences.map((exp) => (
            <TimelineCard
              key={exp.id}
              item={exp}
              isExpanded={expandedExp === exp.id}
              onToggle={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
            />
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-[var(--highlight)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Education</span>
        </div>
        <div className="space-y-2">
          {education.map((edu) => (
            <TimelineCard
              key={edu.id}
              item={edu}
              isExpanded={expandedEdu === edu.id}
              onToggle={() => setExpandedEdu(expandedEdu === edu.id ? null : edu.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

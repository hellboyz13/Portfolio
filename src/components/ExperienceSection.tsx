'use client';

import { useState } from 'react';

const experiences = [
  {
    role: 'IT Support Specialist, APAC',
    company: 'Cosmostar Singapore',
    period: '2024 - Present',
    type: 'work',
    logo: '/logos/cosmo-logo-2.png',
    descriptions: [
      'Oversee daily IT operations across Singapore, Vietnam, Indonesia, and China, providing escalation support and ensuring compliance and system stability',
      'Manage complete user lifecycle including onboarding/offboarding, Microsoft 365 accounts, license allocation, Entra ID access groups, and Intune compliance',
      'Lead regional IT governance, guiding teams on standards, asset management practices, and policy adherence for consistent APAC-wide operations',
      'Drive procurement processes including vendor evaluation, quotation comparison, and approval workflows via DocuSign',
      'Support regional IT projects including tech refresh cycles, meeting room upgrades, Freshservice rollout, and new office/factory setup',
    ],
  },
  {
    role: 'IT Support & Services Engineer',
    company: 'Decathlon',
    period: '2021 - 2024',
    type: 'work',
    logo: '/logos/Decathlon.jpg',
    descriptions: [
      'Delivered Level 1 and Level 2 support for hardware/software issues including POS systems, RFID, mobile devices, and network troubleshooting',
      'Developed self-help guides and FAQ documentation that reduced support tickets by 20% in 2023',
      'Led tablet procurement and deployment project, replacing laptops with 600+ tablets for 700 staff members',
      'Managed IT asset inventory, hardware lifecycle tracking, and tech refresh programs for end-of-life equipment',
      'Facilitated monthly onboarding sessions and quarterly training updates for system changes',
    ],
  },
  {
    role: 'Bachelor in Business Information Systems',
    company: 'Murdoch University',
    period: '2023 - 2025',
    type: 'education',
    logo: '/logos/Murdoch.jpg',
    descriptions: [
      'Kaplan Singapore partnership program',
      'Focus on enterprise systems, data analytics, and IT project management',
    ],
  },
  {
    role: 'Diploma in Information Technology',
    company: 'Ngee Ann Polytechnic',
    period: '2016 - 2019',
    type: 'education',
    logo: '/logos/Ngee_Ann_Polytechnic_logo.png',
    descriptions: [
      'Specialization in Mobile Business Application',
      'Foundation in programming, database management, and software development',
    ],
  },
];

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      {/* Recent adventures header */}
      <div className="mb-12">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          <span className="font-serif italic text-3xl md:text-4xl text-[#1a1a1a]">Recent adventures</span>
        </div>
      </div>

      {/* Experience table */}
      <div className="space-y-0">
        {experiences.map((exp, index) => {
          const isExpanded = expandedIndex === index;

          const prevExp = experiences[index - 1];
          const showDivider = prevExp && prevExp.type === 'work' && exp.type === 'education';

          return (
            <div key={index}>
              {/* Education section header */}
              {showDivider && (
                <div className="pt-16 pb-12 border-t border-[#e5e5e5]">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 100 100" fill="currentColor"><text x="50" y="75" fontSize="80" textAnchor="middle">⚔</text></svg>
                    <span className="font-serif italic text-3xl md:text-4xl text-[#1a1a1a]">Training arc</span>
                  </div>
                </div>
              )}
              <div
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="flex items-center py-5 border-t border-[#e5e5e5] group hover:bg-[#f5f5f5] -mx-4 px-4 transition-all cursor-pointer"
              >
                {/* Role */}
                <div className="w-[260px] md:w-[300px] flex-shrink-0">
                  <span className={`text-[#1a1a1a] group-hover:text-[#22c55e] transition-colors ${isExpanded ? 'text-[#22c55e]' : ''}`}>
                    {exp.role}
                  </span>
                </div>
                {/* Arrow - fixed width */}
                <div className="w-[30px] flex-shrink-0 flex justify-center">
                  <svg
                    className={`w-4 h-4 text-[#737373] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {/* Company */}
                <div className="flex-1 flex items-center min-w-0">
                  <span className="text-[#737373] truncate">{exp.company}</span>
                </div>
                {/* Period - fixed width */}
                <div className="w-[120px] text-right flex-shrink-0">
                  <span className="text-[#737373]">{exp.period}</span>
                </div>
              </div>

              {/* Expandable descriptions */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-out -mx-4 ${
                  isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-5 bg-[#f5f5f5]">
                  <ul className="space-y-2">
                    {exp.descriptions.map((desc, i) => (
                      <li key={i} className="text-sm text-[#525252] flex items-start gap-2">
                        <span className="text-[#22c55e] mt-0.5 flex-shrink-0">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
        {/* Bottom border */}
        <div className="border-t border-[#e5e5e5]"></div>
      </div>
    </section>
  );
}

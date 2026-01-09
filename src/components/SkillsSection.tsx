'use client';

import { useState, useEffect } from 'react';

const skillCategories = [
  {
    name: 'Cloud & Identity',
    skills: ['Microsoft Azure', 'Entra ID', 'Intune', 'Exchange Online', 'Microsoft 365'],
  },
  {
    name: 'ITSM & Ticketing',
    skills: ['Freshservice', 'Jira', 'Zendesk'],
  },
  {
    name: 'Endpoint Management',
    skills: ['Workspace ONE', 'Windows', 'Linux', 'macOS'],
  },
  {
    name: 'Hardware & Systems',
    skills: ['POS Systems', 'RFID', 'Video Conferencing', 'Network Infrastructure'],
  },
];

export default function SkillsSection() {
  const [sparkleRotation, setSparkleRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkleRotation((prev) => (prev + 1) % 360);
    }, 22);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 border-t border-[#e5e5e5]">
      {/* Section header */}
      <div className="mb-12">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 100 100" fill="currentColor" style={{ transform: `rotate(${sparkleRotation}deg)`, transformOrigin: 'center' }}><text x="50" y="70" fontSize="80" textAnchor="middle">✧</text></svg>
          <span className="font-serif italic text-3xl md:text-4xl text-[#1a1a1a]">Skills</span>
        </div>
      </div>

      {/* Skills list */}
      <div className="space-y-4">
        {skillCategories.map((category) => (
          <div key={category.name} className="flex flex-wrap items-center gap-3">
            <span className="text-[#1a1a1a] font-medium min-w-[160px]">
              {category.name}
            </span>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full border border-[#e5e5e5] text-[#525252] hover:border-[#22c55e] hover:text-[#22c55e] transition-colors cursor-default"
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

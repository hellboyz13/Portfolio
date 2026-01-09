'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'MRT Foodie',
    description: 'Food discovery near Singapore MRT stations',
    url: 'https://mrtfoodie.vercel.app/',
  },
  {
    title: 'Miles Calculator',
    description: 'Credit card points to KrisFlyer miles converter',
    url: 'https://milescalculator.app/',
  },
];

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [loadedIframes, setLoadedIframes] = useState<Record<string, boolean>>({});

  return (
    <section className="py-16 border-t border-[#e5e5e5]">
      {/* Section header */}
      <div className="mb-12">
        <span className="text-2xl md:text-3xl">✦</span>
        <span className="font-serif italic text-2xl md:text-3xl ml-2">Passion Projects</span>
      </div>

      <div className="space-y-6">
        {projects.map((project) => {
          const isExpanded = expandedProject === project.title;

          return (
            <div
              key={project.title}
              className="group"
            >
              {/* Card header - always visible */}
              <div
                className="flex items-center justify-between p-4 bg-[#f5f5f5] rounded-t-2xl border border-b-0 border-[#e5e5e5] cursor-pointer"
                onClick={() => setExpandedProject(isExpanded ? null : project.title)}
              >
                <div>
                  <h3 className="text-[#1a1a1a] font-medium group-hover:text-[#22c55e] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#737373]">{project.description}</p>
                </div>
                <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Expandable phone mockup */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  isExpanded ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {/* Mac Browser Window */}
                <div className="p-6 bg-[#f5f5f5] border-x border-[#e5e5e5]">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-[#e5e5e5]">
                    {/* Browser top bar */}
                    <div className="bg-[#f5f5f5] border-b border-[#e5e5e5] px-4 py-3 flex items-center gap-3">
                      {/* Traffic lights */}
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                      </div>
                      {/* URL bar */}
                      <div className="flex-1 bg-white rounded-md px-3 py-1.5 text-xs text-[#737373] border border-[#e5e5e5]">
                        {project.url}
                      </div>
                    </div>

                    {/* Browser content */}
                    <div className="relative bg-white" style={{ height: '450px' }}>
                      {isExpanded ? (
                        <>
                          {!loadedIframes[project.title] && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                              <div className="flex flex-col items-center gap-3">
                                <div className="w-6 h-6 border-2 border-[#22c55e] border-t-transparent rounded-full animate-spin"></div>
                                <span className="text-xs text-[#737373]">Loading preview...</span>
                              </div>
                            </div>
                          )}
                          <iframe
                            src={project.url}
                            title={project.title}
                            className="w-full h-full border-0"
                            onLoad={() => setLoadedIframes(prev => ({ ...prev, [project.title]: true }))}
                          />
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#fafafa]">
                          <span className="text-xs text-[#737373]">Tap to load preview</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer with link */}
                <div className="flex items-center justify-between p-4 bg-[#f5f5f5] rounded-b-2xl border border-t-0 border-[#e5e5e5]">
                  <span className="text-xs text-[#737373]">Interactive preview</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#22c55e] hover:underline"
                  >
                    Open full site ↗
                  </a>
                </div>
              </div>

              {/* Bottom border when collapsed */}
              {!isExpanded && (
                <div className="h-px bg-[#e5e5e5] rounded-b-2xl border-x border-b border-[#e5e5e5]"></div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

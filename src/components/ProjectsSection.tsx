'use client';

import { useState, useEffect } from 'react';

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
    redditUrl: 'https://www.reddit.com/r/singaporefi/comments/1q7wkvn/built_a_miles_calculator_for_reward_points/',
  },
];

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [loadedIframes, setLoadedIframes] = useState<Record<string, boolean>>({});
  const [starRotation, setStarRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStarRotation((prev) => (prev + 1) % 360);
    }, 22);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 border-t border-[#e5e5e5]">
      {/* Section header */}
      <div className="mb-12">
        <svg className="inline-block w-6 h-6 md:w-8 md:h-8 align-middle" viewBox="0 0 100 100" fill="currentColor" style={{ transform: `rotate(${starRotation}deg)`, transformOrigin: 'center' }}><text x="50" y="75" fontSize="80" textAnchor="middle">✰</text></svg>
        <span className="font-serif italic text-2xl md:text-3xl ml-2 align-middle">Passion Projects</span>
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

              {/* Reddit thread link below container */}
              {'redditUrl' in project && (
                <a
                  href={project.redditUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 mt-2 text-xs text-[#737373] hover:text-[#ff4500]"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165"/>
                  </svg>
                  Featured on Reddit ↗
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

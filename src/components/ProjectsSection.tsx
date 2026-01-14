'use client';

import { useState } from 'react';

const projects = [
  {
    id: 'miles-calculator',
    title: 'Miles Calculator',
    description: 'Convert credit card points to KrisFlyer miles instantly. Compare cards and maximize your rewards.',
    url: 'https://milescalculator.app/',
    featured: true,
    redditUrl: 'https://www.reddit.com/r/singaporefi/comments/1q7wkvn/built_a_miles_calculator_for_reward_points/',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
  },
  {
    id: 'mrt-foodie',
    title: 'MRT Foodie',
    description: 'Discover the best eats near Singapore MRT stations. A curated food discovery platform for commuters.',
    url: 'https://mrtfoodie.vercel.app/',
    featured: false,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
];

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [loadedIframes, setLoadedIframes] = useState<Record<string, boolean>>({});

  return (
    <section id="projects" className="py-16 relative">
      {/* Decorative elements */}
      <div className="section-decorator -left-20 top-20" />

      {/* Section Label */}
      <div className="section-label">
        <span>Side Quests</span>
      </div>

      {/* Section Title */}
      <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-2">
        Passion <span className="italic text-gradient">projects</span>
      </h2>

      <p className="text-[var(--text-secondary)] mb-10 max-w-lg">
        Building tools that solve real problems and bring joy to users.
      </p>

      {/* Projects Grid */}
      <div className="space-y-6">
        {projects.map((project, index) => {
          const isExpanded = expandedProject === project.id;

          return (
            <div
              key={project.id}
              className="group project-card relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient border effect - visible by default, enhanced on hover */}
              <div className={`absolute -inset-[1px] bg-gradient-to-r ${project.gradient} rounded-[21px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm`} />

              <div className="relative bg-[var(--bg-glass)] backdrop-blur-xl rounded-[20px] border border-[var(--border)] overflow-hidden">
                {/* Card Header */}
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Project indicator and title */}
                      <div className="flex items-center gap-3 mb-3">
                        {/* Animated dot indicator */}
                        <div className="relative">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`} />
                          <div className={`absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient} animate-ping-slow opacity-50`} />
                        </div>
                        <h3 className="font-display font-bold text-xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      {/* Reddit badge */}
                      {project.featured && project.redditUrl && (
                        <a
                          href={project.redditUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-4 rounded-full border border-[#FF4500] text-[#FF4500] text-xs font-semibold hover:bg-[#FF4500] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 hover:shadow-lg hover:shadow-[#FF4500]/20"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                          </svg>
                          Featured on Reddit
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}

                      {/* Description */}
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="icon-container hover:scale-110"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <button
                        className={`icon-container ${isExpanded ? 'border-[var(--accent)] bg-[var(--accent-light)]' : ''}`}
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isExpanded ? 'rotate-180 text-[var(--accent)]' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expandable Preview */}
                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: isExpanded ? '450px' : '0',
                    opacity: isExpanded ? 1 : 0,
                    transition: 'max-height 0.5s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.4s cubic-bezier(0.33, 1, 0.68, 1)',
                  }}
                >
                  <div className="px-6 pb-6">
                    <div className="browser-frame overflow-hidden">
                      {/* Browser Toolbar */}
                      <div className="browser-toolbar">
                        <div className="browser-dots">
                          <div className="browser-dot browser-dot-red" />
                          <div className="browser-dot browser-dot-yellow" />
                          <div className="browser-dot browser-dot-green" />
                        </div>
                        <div className="browser-url">{project.url}</div>
                      </div>

                      {/* Browser Content */}
                      <div className="relative bg-[var(--bg-secondary)]" style={{ height: '320px' }}>
                        {isExpanded && (
                          <>
                            {!loadedIframes[project.id] && (
                              <div className="absolute inset-0 flex items-center justify-center z-10 bg-[var(--bg-secondary)]">
                                <div className="flex flex-col items-center gap-3">
                                  <div className="relative">
                                    <div className="w-8 h-8 rounded-full border-2 border-[var(--accent)] border-t-transparent animate-spin" />
                                    <div className="absolute inset-1 w-6 h-6 rounded-full border-2 border-[var(--gradient-3)] border-b-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.5s' }} />
                                  </div>
                                  <span className="text-sm text-[var(--text-muted)]">Loading preview...</span>
                                </div>
                              </div>
                            )}
                            <iframe
                              src={project.url}
                              title={project.title}
                              className="w-full h-full border-0"
                              onLoad={() => setLoadedIframes((prev) => ({ ...prev, [project.id]: true }))}
                            />
                          </>
                        )}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Live preview
                      </span>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold link-accent flex items-center gap-1.5 group/link"
                      >
                        Visit site
                        <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

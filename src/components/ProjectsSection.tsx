'use client';

const projects = [
  {
    id: 'miles-calculator',
    title: 'Miles Calculator',
    description: 'Convert credit card points to KrisFlyer miles instantly. Compare cards and maximize your rewards.',
    url: 'https://milescalculator.app/',
    featured: true,
    redditUrl: 'https://www.reddit.com/r/singaporefi/comments/1q7wkvn/built_a_miles_calculator_for_reward_points/',
    icon: '✈️',
  },
  {
    id: 'mrt-foodie',
    title: 'MRT Foodie',
    description: 'Discover the best eats near Singapore MRT stations. A curated food discovery platform.',
    url: 'https://mrtfoodie.vercel.app/',
    featured: false,
    icon: '🍜',
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className={`project-card ${project.featured ? 'bento-card--accent' : ''}`}>
      {/* Preview Area - Always shows iframe */}
      <div className="project-card__image">
        <iframe
          src={project.url}
          title={project.title}
          className="w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="project-card__content">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">{project.icon}</span>
            <h4 className="font-semibold text-[var(--text-primary)]">{project.title}</h4>
          </div>
          <div className="flex gap-2">
            {project.redditUrl && (
              <a
                href={project.redditUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border)] text-[#FF4500] hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] transition-all"
                title="View on Reddit"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249z"/>
                </svg>
              </a>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] hover:border-[var(--accent)] transition-all"
              title="Visit site"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">{project.description}</p>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <div id="projects" className="bento-card">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="section-label">Side Projects</div>
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            Passion Projects
          </h3>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Building tools that solve real problems
          </p>
        </div>
      </div>

      {/* Projects Grid - Each project on its own row */}
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

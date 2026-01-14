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

function RedditBadge({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full"
    >
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#FF4500] border-2 border-[#FF4500] rounded-full">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249z"/>
        </svg>
        <span className="text-sm font-bold tracking-wide text-white uppercase">
          Featured on Reddit
        </span>
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </a>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div
      className="project-card-simple"
      style={{ width: '80%', maxWidth: '80%', minWidth: '80%', margin: '0 auto' }}
    >
      <div className="project-card__image">
        <iframe
          src={project.url}
          title={project.title}
          className="w-full h-full"
          loading="lazy"
        />
      </div>

      <div className="project-card__content">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <h4 className="text-lg font-bold text-[var(--text-primary)] tracking-tight">{project.title}</h4>
          </div>

          <div className="flex items-center gap-3">
            {project.redditUrl && <RedditBadge url={project.redditUrl} />}

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--bg-tertiary)] border-2 border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] hover:border-[var(--accent)] transition-colors duration-300"
              title="Visit site"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <div id="projects" className="bento-card projects-section">
      <div className="projects-header">
        <div className="projects-header-line"></div>

        <div className="projects-header-label">
          <span className="projects-header-label-dot"></span>
          <span className="font-mono text-xs tracking-widest uppercase">Side Projects</span>
          <span className="projects-header-label-dot"></span>
        </div>

        <h3 className="projects-title">
          <span className="projects-title-text">Passion Projects</span>
        </h3>

        <p className="projects-subtitle">
          Building tools that solve real problems
        </p>

        <div className="projects-header-decoration">
          <div className="projects-header-decoration-line"></div>
          <div className="projects-header-decoration-diamond"></div>
          <div className="projects-header-decoration-line"></div>
        </div>
      </div>

      <div className="flex flex-col gap-8 mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

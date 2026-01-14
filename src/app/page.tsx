import Header from '@/components/Header';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <Header />

        <main className="font-body">
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <AboutSection />
        </main>

        {/* Footer */}
        <footer className="py-12 border-t border-[var(--border)]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-[var(--text-muted)] text-sm">
              &copy; {new Date().getFullYear()} Jeremy Ng
            </p>
            <SocialLinks />
          </div>
        </footer>
      </div>
    </div>
  );
}

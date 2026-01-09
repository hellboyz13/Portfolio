'use client';

import Header from '@/components/Header';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <Header />
        <main className="font-inter">
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <AboutSection />
        </main>

        {/* Footer */}
        <footer className="py-16 border-t border-[#e5e5e5] font-inter">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <SocialLinks />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-[#737373] hover:text-[#22c55e] transition-colors"
            >
              Back to top
            </button>
          </div>

          {/* Big footer text */}
          <div className="mt-16 pt-16 border-t border-[#e5e5e5]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a]">
              Build the world with <span className="font-serif italic">intention</span>
            </h2>
          </div>
        </footer>
      </div>
    </div>
  );
}

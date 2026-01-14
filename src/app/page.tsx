'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Set dark theme as default
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    // Check if banner was dismissed
    const bannerDismissed = sessionStorage.getItem('bannerDismissed');
    if (bannerDismissed) {
      setShowBanner(false);
    }
  }, []);

  const dismissBanner = () => {
    setShowBanner(false);
    sessionStorage.setItem('bannerDismissed', 'true');
  };

  return (
    <div className="min-h-screen">
      {/* Mobile Disclaimer Modal */}
      {showBanner && (
        <div className="md:hidden fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blurred Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={dismissBanner}
          />

          {/* Modal Content */}
          <div className="relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-fade-in-up">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[var(--accent-dim)] border border-[var(--border-accent)] flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-center text-lg font-semibold text-[var(--text-primary)] mb-2">
              Best on Desktop
            </h3>

            {/* Description */}
            <p className="text-center text-sm text-[var(--text-secondary)] mb-6">
              This portfolio is optimized for desktop viewing. For the best experience, please visit on a larger screen.
            </p>

            {/* Button */}
            <button
              onClick={dismissBanner}
              className="btn btn-primary w-full"
            >
              Continue Anyway
            </button>
          </div>
        </div>
      )}

      <Navigation />

      <main className="container">
        {/* Hero Section */}
        <HeroSection mounted={mounted} />

        {/* Stats Row */}
        <StatsSection mounted={mounted} />

        {/* Main Bento Grid */}
        <div className="bento-grid mt-3">
          {/* Experience - Large Card */}
          <div className="col-span-2 row-span-2 sm:col-span-1 md:col-span-2">
            <ExperienceSection />
          </div>

          {/* Skills - Right Column */}
          <div className="col-span-2 row-span-2 sm:col-span-1 md:col-span-2">
            <SkillsSection />
          </div>

          {/* Projects - Full Width */}
          <div className="col-span-4 sm:col-span-1 md:col-span-2 lg:col-span-4">
            <ProjectsSection />
          </div>

          {/* About & Contact Row */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2">
            <AboutSection />
          </div>

          <div className="col-span-2 sm:col-span-1 md:col-span-2">
            <ContactSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

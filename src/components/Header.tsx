'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function Header() {
  const smoothScrollTo = useCallback((targetPosition: number, duration: number = 800) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);
    document.documentElement.setAttribute('data-theme', shouldBeDark ? 'dark' : 'light');

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:jeremyngkaiyong@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setIsContactOpen(false);
    setFormData({ name: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[var(--bg-glass)] backdrop-blur-xl border-b border-[var(--border)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-[var(--gradient-3)] rounded-full opacity-0 group-hover:opacity-50 blur transition-opacity duration-500" />
              <Image
                src="/profile.jpg"
                alt="Jeremy Ng"
                width={40}
                height={40}
                className="relative rounded-full object-cover ring-2 ring-[var(--border)] group-hover:ring-[var(--accent)] transition-all duration-300"
              />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative p-2.5 rounded-xl bg-[var(--bg-glass)] backdrop-blur-sm border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 group"
                aria-label="Toggle theme"
              >
                <div className="relative w-5 h-5">
                  {isDark ? (
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </div>
              </button>

              {/* Contact Button */}
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="btn-primary"
              >
                {isContactOpen ? 'Close' : 'Contact'}
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              isContactOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="card p-5">
              <h3 className="font-display font-semibold text-[var(--text-primary)] mb-4">
                Get in touch
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                  placeholder="Your name"
                />
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="input-field"
                  placeholder="Subject"
                />
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-field resize-none"
                  placeholder="Your message..."
                />
                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>

              <p className="mt-3 text-center text-sm text-[var(--text-muted)]">
                Or call{' '}
                <a href="tel:+6596316875" className="link-accent">
                  +65 9631 6875
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-16" />

      {/* Hero Section */}
      <header className="pt-12 pb-16 md:pt-16 md:pb-24 relative">
        <div className="max-w-2xl">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6 ${
                mounted ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for opportunities
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight mb-6 ${
                mounted ? 'animate-fade-in-up delay-100' : 'opacity-0'
              }`}
            >
              Keeping{' '}
              <span className="text-gradient">IT systems</span>
              <br />
              running{' '}
              <span className="font-serif italic font-normal">effortlessly</span>
            </h1>

            <p
              className={`text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg ${
                mounted ? 'animate-fade-in-up delay-200' : 'opacity-0'
              }`}
            >
              IT Support Specialist ensuring smooth operations across APAC.
              <span className="block mt-1 text-[var(--text-muted)]">Turning complexity into clarity.</span>
            </p>

            <div
              className={`flex flex-wrap items-center gap-4 ${
                mounted ? 'animate-fade-in-up delay-300' : 'opacity-0'
              }`}
            >
              <button onClick={() => setIsContactOpen(true)} className="btn-primary">
                <span>Get in touch</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    const targetPosition = projectsSection.getBoundingClientRect().top + window.scrollY - 80;
                    smoothScrollTo(targetPosition, 1000);
                  }
                }}
                className="btn-secondary"
              >
                View my projects
              </button>
            </div>
        </div>
      </header>
    </>
  );
}

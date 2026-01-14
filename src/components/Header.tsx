'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { useDeviceMotion, useScrollParallax } from './MobileEffects';

export default function Header() {
  const heroRef = useRef<HTMLElement>(null);
  const { tilt, requestPermission, hasPermission, isMobile } = useDeviceMotion();
  const { scrollY } = useScrollParallax();

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

    // Auto-request motion permission on first interaction for mobile
    const handleFirstInteraction = () => {
      if (isMobile && !hasPermission) {
        requestPermission();
      }
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isMobile, hasPermission, requestPermission]);

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

  // Animated words for marquee - based on actual skills
  const marqueeWords = [
    'MICROSOFT 365', 'INTUNE', 'AZURE', 'ENTRA ID',
    'FRESHSERVICE', 'JIRA', 'ZENDESK', 'WORKSPACE ONE',
    'IT SUPPORT', 'TROUBLESHOOTING', 'INFRASTRUCTURE'
  ];

  // Calculate parallax based on device motion (mobile) or scroll (desktop)
  const getShapeTransform = (speed: number) => {
    if (isMobile && hasPermission) {
      // Device motion parallax for mobile
      return `translate(${tilt.y * speed}px, ${tilt.x * speed}px)`;
    } else {
      // Scroll-based parallax for desktop
      const scrollOffset = scrollY * speed * 0.1;
      return `translateY(${scrollOffset}px)`;
    }
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
            <div className="relative group tap-target">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-[var(--gradient-3)] rounded-full opacity-0 group-hover:opacity-50 group-active:opacity-50 blur transition-opacity duration-500" />
              <Image
                src="/profile.jpg"
                alt="Jeremy Ng"
                width={40}
                height={40}
                className="relative rounded-full object-cover ring-2 ring-[var(--border)] group-hover:ring-[var(--accent)] group-active:ring-[var(--accent)] transition-all duration-300"
              />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative p-2.5 rounded-xl bg-[var(--bg-glass)] backdrop-blur-sm border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] active:text-[var(--accent)] active:border-[var(--accent)] active:scale-95 transition-all duration-300 group tap-target"
                aria-label="Toggle theme"
              >
                <div className="relative w-5 h-5">
                  {isDark ? (
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12 group-active:-rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </div>
              </button>

              {/* Contact Button */}
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="btn-primary tap-target"
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
                <button type="submit" className="w-full btn-primary tap-target">
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

      {/* CINEMATIC HERO SECTION */}
      <header ref={heroRef} className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hero-grid" />
        </div>

        {/* Floating geometric shapes - with parallax (reduced for readability) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div
            className={`hero-shape hero-shape-1 ${mounted ? 'animate-float-up' : 'opacity-0'}`}
            style={{ transform: getShapeTransform(2) }}
          />
          <div
            className={`hero-shape hero-shape-2 ${mounted ? 'animate-float-up delay-200' : 'opacity-0'}`}
            style={{ transform: getShapeTransform(-1.5) }}
          />
        </div>

        {/* Main hero content */}
        <div className="relative z-10 pt-8 pb-12">
          {/* Availability badge with glow */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-sm font-semibold mb-8 backdrop-blur-sm tap-target ${
              mounted ? 'animate-reveal' : 'opacity-0'
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            Open to opportunities
          </div>

          {/* Giant headline with staggered reveal */}
          <div className="overflow-hidden mb-4">
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.9] ${
                mounted ? 'animate-slide-up' : 'translate-y-full opacity-0'
              }`}
            >
              <span className="block text-[var(--text-primary)]">
                I keep{' '}
                <span className="text-gradient-animated relative">
                  systems
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[var(--accent)]" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="3" className="animate-draw" />
                  </svg>
                </span>
              </span>
            </h1>
          </div>

          <div className="overflow-hidden mb-8">
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.9] ${
                mounted ? 'animate-slide-up delay-150' : 'translate-y-full opacity-0'
              }`}
            >
              <span className="block text-[var(--text-muted)]">
                running{' '}
                <span className="font-serif italic font-normal text-[var(--text-primary)]">smoothly</span>
              </span>
            </h1>
          </div>

          {/* Subheadline with line reveal */}
          <div className="max-w-xl mb-10">
            <p
              className={`text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed ${
                mounted ? 'animate-reveal delay-300' : 'opacity-0'
              }`}
            >
              IT Support Specialist ensuring seamless operations across{' '}
              <span className="text-[var(--accent)] font-semibold">4 APAC countries</span>.
              <span className="block mt-2 text-[var(--text-muted)]">
                Turning complexity into clarity, one ticket at a time.
              </span>
            </p>
          </div>

          {/* CTA buttons with tap feedback */}
          <div
            className={`flex flex-wrap items-center gap-4 ${
              mounted ? 'animate-reveal delay-500' : 'opacity-0'
            }`}
          >
            <button onClick={() => setIsContactOpen(!isContactOpen)} className="magnetic-btn btn-primary group tap-target">
              <span className="relative z-10 flex items-center gap-2">
                {isContactOpen ? 'Close' : "Let's talk"}
                <svg className={`w-5 h-5 transition-transform duration-300 ${isContactOpen ? 'rotate-45' : 'group-hover:translate-x-1 group-active:translate-x-1'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isContactOpen ? "M6 18L18 6M6 6l12 12" : "M14 5l7 7m0 0l-7 7m7-7H3"} />
                </svg>
              </span>
            </button>
            <button
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  const targetPosition = projectsSection.getBoundingClientRect().top + window.scrollY - 80;
                  smoothScrollTo(targetPosition, 1000);
                }
              }}
              className="magnetic-btn btn-secondary group tap-target"
            >
              <span className="relative z-10 flex items-center gap-2">
                See my work
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1 group-active:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Scrolling marquee */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-6 border-t border-b border-[var(--border)] bg-[var(--bg-glass)] backdrop-blur-sm">
          <div className={`marquee ${mounted ? 'animate-marquee' : ''}`}>
            <div className="marquee-content">
              {[...marqueeWords, ...marqueeWords].map((word, index) => (
                <span key={index} className="marquee-item">
                  <span className="text-[var(--text-muted)] font-display font-semibold text-sm tracking-widest uppercase">
                    {word}
                  </span>
                  <span className="mx-8 text-[var(--accent)]">◆</span>
                </span>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {[...marqueeWords, ...marqueeWords].map((word, index) => (
                <span key={index} className="marquee-item">
                  <span className="text-[var(--text-muted)] font-display font-semibold text-sm tracking-widest uppercase">
                    {word}
                  </span>
                  <span className="mx-8 text-[var(--accent)]">◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile for cleaner look */}
        <div className={`absolute bottom-24 left-1/2 -translate-x-1/2 hidden sm:flex ${mounted ? 'animate-bounce-slow' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 text-[var(--text-muted)]">
            <span className="text-xs font-display uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-[var(--border)] flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-[var(--accent)] animate-scroll-dot" />
            </div>
          </div>
        </div>

        {/* Mobile swipe hint */}
        <div className={`absolute bottom-24 left-1/2 -translate-x-1/2 flex sm:hidden ${mounted ? 'animate-reveal delay-700' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 text-[var(--text-muted)]">
            <span className="text-xs font-display uppercase tracking-widest">Swipe up</span>
            <div className="swipe-hint">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

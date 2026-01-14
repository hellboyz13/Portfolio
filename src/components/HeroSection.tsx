'use client';

import { useEffect, useState, useCallback } from 'react';

const roles = ['IT Support Specialist', 'System Administrator', 'Problem Solver'];

export default function HeroSection({ mounted }: { mounted: boolean }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Smooth scroll function
  const smoothScrollTo = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY - 80;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800;
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

  useEffect(() => {
    if (!mounted) return;

    const currentRole = roles[roleIndex];

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [mounted, displayText, isTyping, roleIndex]);

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center pt-24 pb-8">
      {/* Background Grid */}
      <div className="hero-grid-bg" />

      {/* Glow Effect */}
      <div className="hero-glow -top-40 -right-40 opacity-30" />
      <div className="hero-glow -bottom-40 -left-40 opacity-20" style={{ background: 'radial-gradient(circle, var(--highlight-dim) 0%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative z-10">
        {/* Terminal-style greeting */}
        <div className={`flex items-center gap-3 mb-6 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="terminal-text">~/jeremy-ng</span>
          <span className="text-[var(--text-dim)]">/</span>
          <div className="status-badge">
            <div className="status-dot" />
            <span>Open to opportunities</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className={`hero-title mb-4 ${mounted ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          <span className="text-[var(--text-primary)]">Jeremy </span>
          <span className="text-gradient">Ng</span>
        </h1>

        {/* Typing Effect Role */}
        <div className={`flex items-center gap-2 mb-6 ${mounted ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <span className="text-[var(--accent)] font-mono text-lg">{'>'}</span>
          <span className="font-mono text-xl text-[var(--text-primary)]">
            {displayText}
            <span className="cursor-blink" />
          </span>
        </div>

        {/* Description */}
        <p className={`hero-subtitle mb-8 ${mounted ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          Keeping systems running smoothly across{' '}
          <span className="text-[var(--accent)] font-semibold">4 APAC countries</span>.
          <br className="hidden sm:block" />
          Turning complexity into clarity, one ticket at a time.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-wrap gap-3 ${mounted ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
          <button
            onClick={() => smoothScrollTo('contact')}
            className="btn btn-primary"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let&apos;s talk
          </button>
          <button
            onClick={() => smoothScrollTo('projects')}
            className="btn btn-secondary"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            View projects
          </button>
        </div>
      </div>
    </section>
  );
}

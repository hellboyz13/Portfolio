'use client';

import { useEffect, useState, useCallback } from 'react';

// Hook for device motion (gyroscope) parallax
export function useDeviceMotion() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hasPermission, setHasPermission] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const requestPermission = useCallback(async () => {
    // iOS 13+ requires permission
    if (typeof (DeviceMotionEvent as any).requestPermission === 'function') {
      try {
        const permission = await (DeviceMotionEvent as any).requestPermission();
        setHasPermission(permission === 'granted');
      } catch {
        setHasPermission(false);
      }
    } else {
      // Non-iOS or older iOS
      setHasPermission(true);
    }
  }, []);

  useEffect(() => {
    if (!isMobile || !hasPermission) return;

    const handleMotion = (event: DeviceMotionEvent) => {
      const { accelerationIncludingGravity } = event;
      if (accelerationIncludingGravity) {
        const x = (accelerationIncludingGravity.x || 0) * 3;
        const y = (accelerationIncludingGravity.y || 0) * 3;
        setTilt({ x: Math.max(-30, Math.min(30, x)), y: Math.max(-30, Math.min(30, y)) });
      }
    };

    window.addEventListener('devicemotion', handleMotion);
    return () => window.removeEventListener('devicemotion', handleMotion);
  }, [isMobile, hasPermission]);

  return { tilt, requestPermission, hasPermission, isMobile };
}

// Hook for scroll-based parallax
export function useScrollParallax() {
  const [scrollY, setScrollY] = useState(0);
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    let lastScrollY = 0;
    let lastTime = Date.now();
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentTime = Date.now();
          const currentScrollY = window.scrollY;
          const timeDiff = currentTime - lastTime;

          if (timeDiff > 0) {
            const newVelocity = (currentScrollY - lastScrollY) / timeDiff;
            setVelocity(newVelocity);
          }

          setScrollY(currentScrollY);
          lastScrollY = currentScrollY;
          lastTime = currentTime;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, velocity };
}

// Tap Ripple Effect Component
export function TapRipple({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleTap = (e: React.TouchEvent | React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    const id = Date.now();
    setRipples(prev => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onTouchStart={handleTap}
      onMouseDown={handleTap}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="tap-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </div>
  );
}

// Scroll Progress Indicator
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[var(--accent)] via-[var(--gradient-2)] to-[var(--gradient-3)] transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// Pull-to-refresh style bounce effect
export function usePullEffect() {
  const [pullDistance, setPullDistance] = useState(0);
  const [isPulling, setIsPulling] = useState(false);

  useEffect(() => {
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (window.scrollY === 0) {
        startY = e.touches[0].clientY;
        setIsPulling(true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isPulling || window.scrollY > 0) return;
      const currentY = e.touches[0].clientY;
      const diff = currentY - startY;
      if (diff > 0) {
        setPullDistance(Math.min(diff * 0.3, 100));
      }
    };

    const handleTouchEnd = () => {
      setIsPulling(false);
      setPullDistance(0);
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isPulling]);

  return { pullDistance, isPulling };
}

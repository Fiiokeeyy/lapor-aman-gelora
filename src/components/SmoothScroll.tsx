'use client';

import { useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Accessibility First: Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // 2. Mobile & Desktop Smooth Scrolling (syncTouch enables Lenis momentum on mobile touchscreens)
    const isTouchDevice =
      window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(pointer: fine)').matches;

    const lenis = new Lenis({
      duration: isTouchDevice ? 0.85 : 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.085,
      touchInertiaExponent: 1.55,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.15,
      infinite: false,
    });

    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Global Click Handler for Smooth Anchor Navigation across Header, Hero, Footer, etc.
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      const currentPath = window.location.pathname;

      // Case 1: Clicking home link "/" while already on home page
      if (href === '/' && (currentPath === '/' || currentPath === '')) {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1 });
        window.history.pushState(null, '', '/');
        return;
      }

      // Case 2: Clicking hash links on the current page (e.g. "/#alur" or "#alur" while on "/")
      const isCurrentPageHash =
        href.startsWith('#') ||
        (href.startsWith('/#') && (currentPath === '/' || currentPath === ''));

      if (isCurrentPageHash) {
        const hash = href.startsWith('/#') ? href.slice(1) : href;
        if (hash === '#' || hash === '') {
          e.preventDefault();
          lenis.scrollTo(0, { duration: 1 });
          return;
        }

        const targetEl = document.querySelector(hash);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl as HTMLElement, { offset: -90, duration: 1.05 });
          window.history.pushState(null, '', hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // If loaded with a hash in URL
    if (window.location.hash) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          lenis.scrollTo(target as HTMLElement, { offset: -90, immediate: false });
        }
      }, 350);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    const activeLenis = (window as unknown as { lenis?: Lenis }).lenis;
    if (activeLenis && !window.location.hash) {
      activeLenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}

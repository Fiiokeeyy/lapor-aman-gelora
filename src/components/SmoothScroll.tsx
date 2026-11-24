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

    // 2. Hardware-aware configuration: Keep lightweight on mobile and entry-level chips
    const isMobileTouch = window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(pointer: fine)').matches;

    const lenis = new Lenis({
      duration: isMobileTouch ? 0.8 : 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
      infinite: false,
    });

    (window as any).lenis = lenis;

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
        const hash = href.startsWith('/#') ? href.slice(1) : href; // "#alur"
        if (hash === '#' || hash === '') {
          e.preventDefault();
          lenis.scrollTo(0, { duration: 1 });
          return;
        }

        const targetEl = document.querySelector(hash);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl as HTMLElement, { offset: -90, duration: 1.1 });
          window.history.pushState(null, '', hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // If loaded with a hash in URL (e.g. from external page or reload)
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
      delete (window as any).lenis;
    };
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    if ((window as any).lenis && !window.location.hash) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}

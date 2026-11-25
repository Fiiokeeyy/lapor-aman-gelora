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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // On pure touchscreens (phones/tablets), let native GPU compositor momentum drive finger
    // swipes instead of hijacking touchmove via syncTouch (which dampens fling velocity and stutters).
    const isTouchOnlyDevice =
      window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(pointer: fine)').matches;

    let lenis: Lenis | null = null;
    let animationFrameId: number | null = null;

    if (!isTouchOnlyDevice) {
      lenis = new Lenis({
        duration: 0.95,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 1.05,
        infinite: false,
      });

      (window as unknown as { lenis?: Lenis }).lenis = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      };
      animationFrameId = requestAnimationFrame(raf);
    }

    const scrollToTarget = (targetEl: Element | null, offset = -90) => {
      if (!targetEl) return;
      if (lenis) {
        lenis.scrollTo(targetEl as HTMLElement, { offset, duration: 1.0 });
        return;
      }
      const targetTop = targetEl.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
    };

    const scrollToTop = () => {
      if (lenis) {
        lenis.scrollTo(0, { duration: 0.9 });
        return;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      const currentPath = window.location.pathname;

      if (href === '/' && (currentPath === '/' || currentPath === '')) {
        e.preventDefault();
        scrollToTop();
        window.history.pushState(null, '', '/');
        return;
      }

      const isCurrentPageHash =
        href.startsWith('#') ||
        (href.startsWith('/#') && (currentPath === '/' || currentPath === ''));

      if (isCurrentPageHash) {
        const hash = href.startsWith('/#') ? href.slice(1) : href;
        if (hash === '#' || hash === '') {
          e.preventDefault();
          scrollToTop();
          return;
        }

        const targetEl = document.querySelector(hash);
        if (targetEl) {
          e.preventDefault();
          scrollToTarget(targetEl, -90);
          window.history.pushState(null, '', hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    if (window.location.hash) {
      setTimeout(() => {
        scrollToTarget(document.querySelector(window.location.hash), -90);
      }, 250);
    }

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      document.removeEventListener('click', handleAnchorClick);
      if (lenis) {
        lenis.destroy();
        delete (window as unknown as { lenis?: Lenis }).lenis;
      }
    };
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    if (window.location.hash) return;
    const activeLenis = (window as unknown as { lenis?: Lenis }).lenis;
    if (activeLenis) {
      activeLenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}

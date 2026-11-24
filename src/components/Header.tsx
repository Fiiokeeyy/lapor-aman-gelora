'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { PUBLIC_NAV_ITEMS, LANDING_SECTION_ORDER, resolveActiveNav } from '@/lib/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldAlert, ArrowRight, LogIn } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState<'siswa' | 'admin' | 'guru' | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('/');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === '/') {
        const sectionTops: Record<string, number> = {};
        for (const section of LANDING_SECTION_ORDER) {
          const el = document.getElementById(section.id);
          if (el) {
            sectionTops[section.id] = el.getBoundingClientRect().top;
          }
        }

        const current = resolveActiveNav(
          pathname,
          window.scrollY,
          window.innerHeight,
          document.documentElement.scrollHeight,
          sectionTops,
          170
        );
        setActiveNav(current);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (pathname !== '/') {
        setActiveNav(pathname);
      } else {
        const hash = window.location.hash;
        setActiveNav(hash ? `/${hash}` : '/');
      }
    }
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setActiveNav(href);

    if (pathname === '/') {
      if (href === '/') {
        e.preventDefault();
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(0, { duration: 1 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        window.history.pushState(null, '', '/');
        return;
      }

      if (href.startsWith('/#') || href.startsWith('#')) {
        const hash = href.startsWith('/#') ? href.slice(1) : href;
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          if ((window as any).lenis) {
            (window as any).lenis.scrollTo(target, { offset: -90, duration: 1.1 });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
          window.history.pushState(null, '', hash);
        }
      }
    }
  };

  // Daftar rute di mana header publik HARUS disembunyikan
  const isDashboardApp =
    pathname.startsWith('/admin') ||
    pathname.startsWith('/siswa/dashboard') ||
    pathname.startsWith('/siswa/login') ||
    pathname.startsWith('/siswa/daftar') ||
    pathname === '/login';

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setIsLoggedIn(true);
        try {
          const userRef = doc(db, 'users', currentUser.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            const userData = userSnap.data();
            setUserName(userData.nama?.split(' ')[0] || userData.email?.split('@')[0] || 'Pengguna');
            setUserRole(userData.role || 'siswa');
          } else {
            setUserName(currentUser.email?.split('@')[0] || 'Pengguna');
            setUserRole('siswa');
          }
        } catch {
          setUserName(currentUser.email?.split('@')[0] || 'Pengguna');
          setUserRole('siswa');
        }
      } else {
        setIsLoggedIn(false);
        setUserName('');
        setUserRole(null);
      }
    });

    return () => unsubscribe();
  }, [pathname]);

  // Jika di halaman auth / admin murni, sembunyikan header publik
  if (isDashboardApp && pathname !== '/lapor') {
    return null;
  }

  const dashboardUrl = userRole === 'admin' || userRole === 'guru' ? '/admin/dashboard' : '/siswa/dashboard';

  // Daftar menu publik — disinkronkan dari sumber tunggal @/lib/navigation
  const navItems = PUBLIC_NAV_ITEMS;

  return (
    <>
      {/* Desktop & Mobile Header Bar - Dynamic Scroll Reactive */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'pt-3 px-3 sm:px-6'
            : 'pt-4 px-4 sm:px-8 bg-transparent'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-300 flex items-center justify-between pointer-events-auto ${
            isScrolled
              ? 'max-w-6xl bg-white/92 backdrop-blur-md border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.08)] rounded-2xl sm:rounded-3xl px-5 sm:px-7 py-2.5'
              : 'max-w-7xl bg-transparent border-transparent px-2 sm:px-4 py-2'
          }`}
        >
          {/* Logo & Identitas: Logo Sekolah Ghama Jelas & Terlihat + Teks LAPOR AMAN */}
          <Link href="/" className="flex items-center gap-3.5 group flex-shrink-0" onClick={(e) => handleNavClick(e, '/')}>
            <div className="relative w-16 h-11 sm:w-20 sm:h-12 flex-shrink-0">
              <Image
                src="/LOGO-sekolahGHAMA.png"
                alt="Logo Sekolah Ghama"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="flex items-center text-lg sm:text-xl font-black tracking-tight leading-none text-slate-900">
              <span>LAPOR</span>
              <span className="text-orange-500 ml-1.5">AMAN</span>
            </div>
          </Link>

          {/* Desktop Nav Links - Rapi, Bernapas, Hover & Active 3D HD Tactile Pill */}
          <nav className="hidden lg:flex items-center gap-1.5 text-[13px] font-bold text-slate-700">
            {navItems.map((item) => {
              const isActive = activeNav === item.href || (item.href === '/' && (activeNav === '/' || activeNav === ''));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-xl transition-all duration-200 group text-[13px] font-bold ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-900/6 active:bg-slate-900/10'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span>{item.label}</span>
                  </span>
                  {/* 3D HD Tactile Pill - HANYA MUNCUL DI MENU YANG AKTIF */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-xl bg-orange-500 shadow-[0_4px_12px_rgba(249,115,22,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] -z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    ></motion.span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {isLoggedIn ? (
              <Link
                href={dashboardUrl}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95"
              >
                <span>Buka Dasbor</span>
                <ArrowRight size={14} />
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-xs sm:text-sm font-bold text-slate-700 hover:text-orange-500 px-4 py-2 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  Masuk
                </Link>
                <Link
                  href="/lapor"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold shadow-sm active:scale-95 transition-all"
                >
                  <ShieldAlert size={15} className="stroke-[2.5]" />
                  <span>Lapor Kasus</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="w-10 h-10 rounded-xl bg-white/80 hover:bg-white text-slate-700 border border-slate-200/80 shadow-sm flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Buka Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* CRAVE HRM STYLE MOBILE POPUP CARD (Image 1 Style) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Centered Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 320 }}
              className="relative w-full max-w-[340px] sm:max-w-sm bg-white rounded-[2rem] p-6 shadow-2xl border border-slate-100 z-10 flex flex-col"
            >
              {/* Card Header: Brand + Close (X) */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-10 h-9 sm:w-11 sm:h-10 flex-shrink-0">
                    <Image
                      src="/LOGO-sekolahGHAMA.png"
                      alt="Logo SMP Gelora"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-black tracking-tight text-slate-900 leading-none">
                      LAPOR <span className="text-orange-500">AMAN</span>
                    </h4>
                    <p className="text-[10px] text-slate-400 font-semibold mt-0.5">SMP Gelora</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                  aria-label="Tutup Menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Card Menu Items: Bold uppercase text + blue numbered pill */}
              <nav className="py-5 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      setIsOpen(false);
                      handleNavClick(e, item.href);
                    }}
                    className="flex items-center justify-between py-1 group"
                  >
                    <span className="text-lg font-black tracking-tight text-slate-900 group-hover:text-orange-500 transition-colors">
                      {item.label}
                    </span>
                    <span className="text-xs font-bold text-sky-600 font-mono tracking-wider">
                      {item.num}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Card Divider */}
              <div className="h-px bg-slate-100 my-1" />

              {/* Card Bottom CTA Button */}
              <div className="pt-4 flex flex-col gap-2.5">
                {isLoggedIn ? (
                  <Link
                    href={dashboardUrl}
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3.5 px-4 rounded-2xl bg-slate-900 text-white font-black text-center text-sm shadow-lg hover:bg-slate-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Buka Dasbor ({userName})</span>
                    <ArrowRight size={16} />
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/lapor"
                      onClick={() => setIsOpen(false)}
                      className="w-full py-3.5 px-4 rounded-2xl bg-orange-500 text-white font-black text-center text-sm shadow-lg shadow-orange-500/25 hover:bg-orange-600 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                      <span>Lapor Kasus Sekarang</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/login"
                      onClick={() => setIsOpen(false)}
                      className="w-full py-2.5 px-4 rounded-2xl bg-slate-100 text-slate-700 font-bold text-center text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <LogIn size={14} />
                      <span>Masuk ke Portal Siswa</span>
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

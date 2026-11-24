'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import {
  LayoutDashboard,
  ShieldAlert,
  Clock,
  PhoneCall,
  Menu,
  Plus,
} from 'lucide-react';
import MobileAppDrawer from '@/components/MobileAppDrawer';

export default function MobileAppBottomNav() {
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<'siswa' | 'admin' | 'guru' | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists()) {
            setRole(userDoc.data().role || 'siswa');
          } else {
            setRole('siswa');
          }
        } catch {
          setRole('siswa');
        }
      } else {
        setUser(null);
        setRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Hanya tampil di halaman yang membutuhkan navigasi app mobile:
  // /siswa/dashboard, /lapor, /admin/dashboard, atau bila user sedang login di rute siswa/admin
  const isAppRoute =
    pathname.startsWith('/siswa/dashboard') ||
    pathname.startsWith('/lapor') ||
    pathname.startsWith('/admin/dashboard') ||
    (user !== null && (pathname.startsWith('/siswa') || pathname.startsWith('/admin')));

  // Sembunyikan di rute login/register murni jika belum login
  if (!isAppRoute && pathname !== '/siswa/dashboard' && pathname !== '/lapor' && pathname !== '/admin/dashboard') {
    return null;
  }

  const isAdmin = role === 'admin' || role === 'guru';

  return (
    <>
      {/* Floating Bottom Nav Container (Mobile only: md:hidden) */}
      <nav
        aria-label="Navigasi Aplikasi Mobile"
        className="fixed bottom-4 left-3 right-3 z-40 md:hidden bg-white/92 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl px-2 py-2 flex items-center justify-around"
      >
        {isAdmin ? (
          /* NAVIGASI ADMIN */
          <>
            <Link
              href="/admin/dashboard"
              className={`flex flex-col items-center justify-center flex-1 py-1.5 rounded-2xl transition-all ${
                pathname === '/admin/dashboard'
                  ? 'text-sky-600 font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <LayoutDashboard size={20} className={pathname === '/admin/dashboard' ? 'stroke-[2.5]' : ''} />
              <span className="text-[10px] mt-1 tracking-tight">Konsol</span>
            </Link>

            <Link
              href="/admin/dashboard"
              className="flex flex-col items-center justify-center flex-1 py-1.5 rounded-2xl text-slate-500 hover:text-slate-800 transition-all"
            >
              <ShieldAlert size={20} />
              <span className="text-[10px] mt-1 tracking-tight">Semua Kasus</span>
            </Link>

            <Link
              href="/pusat-bantuan"
              className="flex flex-col items-center justify-center flex-1 py-1.5 rounded-2xl text-slate-500 hover:text-slate-800 transition-all"
            >
              <PhoneCall size={20} />
              <span className="text-[10px] mt-1 tracking-tight">Hotline</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="flex flex-col items-center justify-center flex-1 py-1.5 rounded-2xl text-slate-500 hover:text-slate-800 transition-all focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                <Menu size={18} />
              </div>
              <span className="text-[10px] mt-1 tracking-tight font-semibold">Lainnya</span>
            </button>
          </>
        ) : (
          /* NAVIGASI SISWA */
          <>
            <Link
              href="/siswa/dashboard"
              className={`flex flex-col items-center justify-center flex-1 py-1 rounded-2xl transition-all ${
                pathname === '/siswa/dashboard'
                  ? 'text-sky-600 font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <LayoutDashboard size={20} className={pathname === '/siswa/dashboard' ? 'stroke-[2.5]' : ''} />
              <span className="text-[10px] mt-1 tracking-tight">Dasbor</span>
            </Link>

            <Link
              href="/siswa/dashboard"
              className="flex flex-col items-center justify-center flex-1 py-1 rounded-2xl text-slate-500 hover:text-slate-800 transition-all"
            >
              <Clock size={20} />
              <span className="text-[10px] mt-1 tracking-tight">Riwayat</span>
            </Link>

            {/* Tombol Tengah: Elevated Action Button "Lapor Kasus" */}
            <div className="relative -top-4 flex items-center justify-center flex-1">
              <Link
                href="/lapor"
                className="w-13 h-13 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/30 border-2 border-white flex flex-col items-center justify-center active:scale-95 transition-transform"
                aria-label="Buat Laporan Baru"
              >
                <Plus size={24} className="stroke-[2.8]" />
              </Link>
            </div>

            <Link
              href="/pusat-bantuan"
              className={`flex flex-col items-center justify-center flex-1 py-1 rounded-2xl transition-all ${
                pathname === '/pusat-bantuan'
                  ? 'text-sky-600 font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <PhoneCall size={20} className={pathname === '/pusat-bantuan' ? 'stroke-[2.5]' : ''} />
              <span className="text-[10px] mt-1 tracking-tight">Bantuan</span>
            </Link>

            {/* Tombol Menu "Lainnya" Membuka Slide-Up Drawer */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="flex flex-col items-center justify-center flex-1 py-1 rounded-2xl text-slate-500 hover:text-slate-800 transition-all focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                <Menu size={18} />
              </div>
              <span className="text-[10px] mt-1 tracking-tight font-semibold">Lainnya</span>
            </button>
          </>
        )}
      </nav>

      {/* Slide-Up Bottom Sheet Drawer */}
      <MobileAppDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}

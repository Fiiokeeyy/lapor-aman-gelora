'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import {
  X,
  FileText,
  PhoneCall,
  Lock,
  LogOut,
  ChevronRight,
  School,
  Sun,
  LayoutDashboard,
  ShieldAlert,
} from 'lucide-react';

interface MobileAppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileAppDrawer({ isOpen, onClose }: MobileAppDrawerProps) {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<{ nama: string; role: string; nisn?: string; email?: string } | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setProfile({
              nama: data.nama || currentUser.displayName || 'Siswa',
              role: data.role || 'siswa',
              nisn: data.nisn || '',
              email: currentUser.email || '',
            });
          } else {
            setProfile({
              nama: currentUser.displayName || currentUser.email?.split('@')[0] || 'Pengguna',
              role: 'siswa',
              email: currentUser.email || '',
            });
          }
        } catch {
          setProfile({
            nama: currentUser.email?.split('@')[0] || 'Pengguna',
            role: 'siswa',
            email: currentUser.email || '',
          });
        }
      } else {
        setUser(null);
        setProfile(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      onClose();
      router.push('/login');
    } catch (err) {
      console.error('Gagal logout:', err);
    }
  };

  const isAdmin = profile?.role === 'admin' || profile?.role === 'guru';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 md:hidden"
          />

          {/* Bottom Sheet Drawer */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white rounded-t-[2rem] border-t border-slate-200/80 shadow-2xl max-h-[85vh] flex flex-col overflow-hidden"
          >
            {/* Drag Handle Bar */}
            <div className="pt-3 pb-2 flex justify-center cursor-pointer" onClick={onClose}>
              <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
            </div>

            {/* Header Sheet */}
            <div className="px-6 py-3 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 bg-sky-50 flex items-center justify-center p-1">
                  <Image
                    src="/LOGO-sekolahGHAMA.png"
                    alt="Logo SMP Gelora"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-black tracking-tight text-slate-900 leading-none">
                    LAPOR <span className="text-orange-500">AMAN</span>
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">SMP Gelora Depok</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                aria-label="Tutup Menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {/* Context / Switcher Card */}
              <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 border border-sky-200 text-sky-700 flex items-center justify-center font-bold text-sm">
                    {isAdmin ? 'BK' : 'SG'}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      {isAdmin ? 'Portal Guru BK / Admin' : 'Portal Siswa SMP Gelora'}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {isAdmin ? 'Hak Akses Konseling & Verifikasi' : 'Pelaporan Rahasia & Terlindungi'}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 uppercase tracking-wider">
                  {profile?.role || 'Siswa'}
                </span>
              </div>

              {/* Navigation Group 1: Operasional Utama */}
              <div className="space-y-1">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                  Navigasi Utama
                </p>

                {isAdmin ? (
                  <>
                    <Link
                      href="/admin/dashboard"
                      onClick={onClose}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                        pathname === '/admin/dashboard'
                          ? 'bg-sky-600 text-white shadow-sm'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <LayoutDashboard size={18} />
                        <span>Konsol Laporan Masuk</span>
                      </div>
                      <ChevronRight size={16} className={pathname === '/admin/dashboard' ? 'text-white/80' : 'text-slate-400'} />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/siswa/dashboard"
                      onClick={onClose}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                        pathname === '/siswa/dashboard'
                          ? 'bg-sky-600 text-white shadow-sm'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <LayoutDashboard size={18} />
                        <span>Dasbor Siswa</span>
                      </div>
                      <ChevronRight size={16} className={pathname === '/siswa/dashboard' ? 'text-white/80' : 'text-slate-400'} />
                    </Link>

                    <Link
                      href="/lapor"
                      onClick={onClose}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                        pathname === '/lapor'
                          ? 'bg-orange-500 text-white shadow-sm'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <ShieldAlert size={18} />
                        <span>Buat Laporan Baru</span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">
                        Penting
                      </span>
                    </Link>
                  </>
                )}
              </div>

              {/* Navigation Group 2: Bantuan & Legal */}
              <div className="space-y-1">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                  Pusat Bantuan & Kebijakan
                </p>

                <Link
                  href="/pusat-bantuan"
                  onClick={onClose}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 font-medium text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <PhoneCall size={18} className="text-slate-500" />
                    <span>Kontak Darurat & Hotline BK</span>
                  </div>
                  <ChevronRight size={16} className="text-slate-400" />
                </Link>

                <Link
                  href="/kebijakan-privasi"
                  onClick={onClose}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 font-medium text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Lock size={18} className="text-slate-500" />
                    <span>Jaminan Kerahasiaan & Privasi</span>
                  </div>
                  <ChevronRight size={16} className="text-slate-400" />
                </Link>

                <Link
                  href="/syarat-ketentuan"
                  onClick={onClose}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 font-medium text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-slate-500" />
                    <span>Panduan Etika Pelaporan</span>
                  </div>
                  <ChevronRight size={16} className="text-slate-400" />
                </Link>

                <Link
                  href="/"
                  onClick={onClose}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 font-medium text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <School size={18} className="text-slate-500" />
                    <span>Kembali ke Beranda Utama</span>
                  </div>
                  <ChevronRight size={16} className="text-slate-400" />
                </Link>
              </div>

              {/* Theme / Mode Visual Strip */}
              <div className="p-1 bg-slate-100 rounded-2xl flex items-center gap-1">
                <button
                  type="button"
                  className="flex-1 py-1.5 px-3 rounded-xl bg-white text-slate-800 text-xs font-bold shadow-sm flex items-center justify-center gap-2"
                >
                  <Sun size={14} className="text-amber-500" />
                  <span>Mode Terang</span>
                </button>
                <button
                  type="button"
                  className="flex-1 py-1.5 px-3 rounded-xl text-slate-500 text-xs font-semibold flex items-center justify-center gap-2 hover:text-slate-800 transition-colors"
                  onClick={() => alert('Mode Gelap akan hadir pada pembaruan berikutnya!')}
                >
                  <span>🌙 Gelap</span>
                </button>
              </div>
            </div>

            {/* Footer Profile & Logout Card */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/80">
              {user ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-sky-200 text-sky-800 font-black flex items-center justify-center text-sm flex-shrink-0">
                      {profile?.nama ? profile.nama.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate">
                        {profile?.nama || 'Siswa SMP Gelora'}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate">
                        {profile?.email || 'Akun Siswa Terverifikasi'}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 text-xs font-bold border border-rose-100 transition-colors"
                  >
                    <LogOut size={14} />
                    <span>Keluar</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    href="/login"
                    onClick={onClose}
                    className="flex-1 text-center py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs shadow-md shadow-sky-600/20"
                  >
                    Masuk Akun
                  </Link>
                  <Link
                    href="/siswa/daftar"
                    onClick={onClose}
                    className="flex-1 text-center py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs"
                  >
                    Daftar Siswa
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

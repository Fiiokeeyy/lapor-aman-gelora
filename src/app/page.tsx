'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert,
  CheckCircle2,
  Lock,
  X,
  LogIn,
  HeartHandshake,
  ChevronDown,
  Smartphone,
  Laptop,
  PhoneCall,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import {
  HandcraftedPencilIcon,
  PencilSketchUnderline,
  HanddrawnDownArrow,
  Hero3DShieldLock,
  Hero3DVerifiedMedal,
  Hero3DMegaphone,
  Hero3DSealedEnvelope,
  Icon3DStepLogin,
  Icon3DStepReport,
  Icon3DStepTrack,
  Icon3DSecurity,
  Icon3DTimeline,
  Icon3DCounseling,
  Icon3DEvidence,
  Icon3DAlert,
  Icon3DAnalytics,
  Icon3DRegulationHub,
  Icon3DPillarTPPK,
  Icon3DPillarPrivacy,
  Icon3DPillarChildRights,
  Icon3DPillarRestorative,
} from '@/components/icons/LaporAman3DIcons';
import BullyingExplorer from '@/components/BullyingExplorer';
import TeamShowcase from '@/components/TeamShowcase';

const MOCKUP_PREVIEW_DATA = {
  bulan: {
    resolvedCount: '12',
    resolvedPeriod: 'Bulan Berjalan',
    rows: [
      {
        id: '#48',
        tone: 'orange' as const,
        title: 'Perundungan Siber (Grup WhatsApp Kelas 8)',
        statusLabel: 'Selesai & Mediasi',
        statusTone: 'emerald' as const,
        detail: 'Status: Tuntas • Konselor: Tim BK SMP Gelora',
        time: 'Kemarin, 14:20 WIB',
      },
      {
        id: '#47',
        tone: 'sky' as const,
        title: 'Intimidasi Verbal di Area Kantin Sekolah',
        statusLabel: 'Dalam Konseling BK',
        statusTone: 'sky' as const,
        detail: 'Bukti: 2 Foto Terlampir • Ditangani Guru Piket & BK',
        time: '2 hari lalu',
      },
    ],
  },
  semester: {
    resolvedCount: '48',
    resolvedPeriod: 'Semester Ganjil & Genap',
    rows: [
      {
        id: '#48',
        tone: 'orange' as const,
        title: 'Rekap Mediasi Restoratif Kasus Tingkat 7 & 8',
        statusLabel: 'Tuntas Terpantau',
        statusTone: 'emerald' as const,
        detail: 'Status: Evaluasi TPPK • Pemantauan Pasca-Mediasi',
        time: 'Semester Aktif',
      },
      {
        id: '#35',
        tone: 'sky' as const,
        title: 'Pencegahan Cyberbullying & Literasi Etika Digital',
        statusLabel: 'Tindakan Preventif',
        statusTone: 'sky' as const,
        detail: 'Tindak Lanjut: Sesi Konseling Klasikal Bersama BK',
        time: 'Semester Aktif',
      },
    ],
  },
};

const FAQS = [
  {
    q: 'Apakah saya harus mendaftar atau login untuk membuat laporan?',
    a: 'Ya. Anda cukup mendaftar atau login menggunakan akun email dan password siswa SMP Gelora. Sistem dirancang praktis dan aman tanpa proses rumit agar setiap siswa dapat melapor dengan cepat dan terlindungi.',
  },
  {
    q: 'Bagaimana sekolah menjamin identitas saya aman dari pelaku bullying?',
    a: 'Sistem Lapor Aman menerapkan kontrol akses ketat berbasis peran (Role-Based Access Control). Laporan siswa hanya dapat dibuka oleh Tim Pencegahan dan Penanganan Kekerasan (TPPK) dan Guru BK bersertifikasi.',
  },
  {
    q: 'Berapa lama laporan saya akan mendapatkan respons awal?',
    a: 'Standar Layanan (SLA) SMP Gelora menetapkan bahwa setiap laporan yang masuk akan diverifikasi dan direspons oleh Guru BK dalam waktu kurang dari 24 jam kerja.',
  },
  {
    q: 'Apakah saksi (bukan korban langsung) dapat melaporkan kejadian?',
    a: 'Sangat dianjurkan! Menjadi saksi peduli (upstander) adalah kunci memutus rantai bullying. Anda dapat mengunggah bukti foto, screenshot pesan media sosial, maupun kronologi saksi.',
  },
  {
    q: 'Bagaimana jika kasus yang terjadi adalah perundungan di media sosial (Cyberbullying)?',
    a: 'Lapor Aman menangani seluruh bentuk bullying, termasuk perundungan siber (teror grup chat, penyebaran rumor di medsos). Anda cukup melampirkan bukti tangkapan layar (screenshot) saat mengisi form.',
  },
];

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'bulan' | 'semester'>('bulan');
  const router = useRouter();

  // Auth State Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists()) {
            const role = userDoc.data().role;
            if (role === 'admin' || role === 'guru') {
              router.replace('/admin/dashboard');
            }
          }
        } catch (error) {
          console.error('Error fetching role:', error);
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Accessible Escape key close for Auth Modal
  useEffect(() => {
    if (!showLoginModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowLoginModal(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showLoginModal]);

  const handleLaporClick = () => {
    if (user) {
      router.push('/lapor');
    } else {
      setShowLoginModal(true);
    }
  };

  const mockupData = MOCKUP_PREVIEW_DATA[activeTab];

  return (
    <div className="bg-[#f0f7fb] min-h-screen flex flex-col font-sans overflow-x-clip text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      <div className="flex-grow">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Clean Telur Asin Canvas + Minimal Orbital + 4 3D Icons)  */}
        {/* ========================================================================= */}
        <section id="beranda" className="relative pt-6 sm:pt-12 pb-20 sm:pb-28 bg-[#f0f7fb] overflow-hidden">
          {/* Minimal 2-Ring Orbital Centerpiece Pattern (Clean, No Busy Grid Dots) */}
          <div
            aria-hidden="true"
            className="absolute top-[300px] sm:top-[350px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] sm:w-[880px] sm:h-[880px] lg:w-[1040px] lg:h-[1040px] pointer-events-none -z-0 select-none [mask-image:radial-gradient(circle_at_50%_45%,#000_45%,transparent_78%)]"
          >
            <div className="absolute inset-0 rounded-full bg-radial from-white/75 via-[#E5F4FC]/45 to-transparent blur-2xl"></div>
            <svg className="w-full h-full text-[#9DD2F2]/60" viewBox="0 0 1000 1000" fill="none">
              <circle cx="500" cy="500" r="260" stroke="currentColor" strokeWidth="1.25" />
              <circle cx="500" cy="500" r="410" stroke="currentColor" strokeWidth="1.25" strokeDasharray="6 10" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center relative z-10">
            {/* Upper 3D Static Title Decorations Only */}
            <div
              aria-hidden="true"
              className="hidden lg:flex flex-col items-center gap-1.5 absolute -top-1 left-2 xl:left-6 z-20 pointer-events-none select-none"
            >
              <Hero3DShieldLock />
              <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#BFE3F7] text-[10px] font-extrabold text-sky-900 shadow-2xs">
                Proteksi Enkripsi
              </span>
            </div>

            <div
              aria-hidden="true"
              className="hidden lg:flex flex-col items-center gap-1.5 absolute -top-1 right-2 xl:right-6 z-20 pointer-events-none select-none"
            >
              <Hero3DVerifiedMedal />
              <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#BFE3F7] text-[10px] font-extrabold text-sky-900 shadow-2xs">
                100% Rahasia &amp; Aman
              </span>
            </div>

            <div
              aria-hidden="true"
              className="hidden xl:flex absolute top-40 left-2 2xl:left-8 z-10 pointer-events-none select-none"
            >
              <Hero3DMegaphone />
            </div>

            <div
              aria-hidden="true"
              className="hidden xl:flex absolute top-40 right-2 2xl:right-8 z-10 pointer-events-none select-none"
            >
              <Hero3DSealedEnvelope />
            </div>

            {/* Top Brand Identity Line: Bespoke Pencil Vector + Downward Curved Arrow */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-4 select-none">
              <HandcraftedPencilIcon />
              <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
                Ruang Aman Pengaduan &amp; Perlindungan Siswa
              </span>
              <span className="inline-flex items-center gap-1 font-signature text-orange-500 text-xl sm:text-2xl font-bold select-none -rotate-1">
                <span>SMP Gelora</span>
                <HanddrawnDownArrow />
              </span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black tracking-tight text-slate-900 leading-[1.1] max-w-4xl mx-auto">
              Ruang Aman Bersuara,{' '}
              <span className="relative inline-block text-orange-500">
                Hentikan Perundungan
                <PencilSketchUnderline />
              </span>
            </h1>

            {/* Subtitle (Clean, Punchy & Scannable) */}
            <p className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
              Saluran pelaporan siswa terverifikasi, pemantauan investigasi berkala, hingga pendampingan konseling BK
              resmi dalam satu platform aman.
            </p>

            {/* Primary & Secondary Action CTAs (Solid Warm Orange) */}
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={handleLaporClick}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm sm:text-base shadow-md shadow-orange-500/20 active:scale-95 transition-colors"
              >
                <ShieldAlert size={18} className="stroke-[2.5]" aria-hidden="true" />
                <span>Laporkan Kasus Sekarang</span>
              </button>

              <Link
                href="/#alur"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#E5F4FC] text-sky-900 font-bold text-sm sm:text-base border border-[#9DD2F2] shadow-xs active:scale-95 transition-colors"
              >
                <HeartHandshake size={18} className="text-sky-600" aria-hidden="true" />
                <span>Pelajari Alur Laporan</span>
              </Link>
            </div>

            {/* Clean Editorial Platform Micro-Strip (Zero Boxy Pill Clutter) */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-600 font-semibold">
              <span className="inline-flex items-center gap-1.5">
                <Laptop size={14} className="text-sky-600" aria-hidden="true" /> Web Browser
              </span>
              <span aria-hidden="true" className="text-[#9DD2F2]">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Smartphone size={14} className="text-orange-500" aria-hidden="true" /> Mobile App (PWA)
              </span>
              <span aria-hidden="true" className="text-[#9DD2F2]">•</span>
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 size={14} className="text-emerald-600" aria-hidden="true" /> Didampingi Guru BK
              </span>
            </div>

            {/* ========================================================================= */}
            {/* FLOATING INTERACTIVE DASHBOARD MOCKUP WITH PENCIL ANNOTATIONS & ARROWS    */}
            {/* ========================================================================= */}
            <div className="relative mt-14 sm:mt-20 mx-auto max-w-5xl">
              {/* Annotation 1 (Top Left - points down-right to mockup) */}
              <div className="hidden lg:flex absolute -top-11 -left-8 z-20 items-end gap-2 text-left pointer-events-none select-none">
                <span className="font-signature text-lg text-slate-800 font-bold leading-tight -rotate-3">
                  Validasi akun siswa terproteksi
                </span>
                <svg className="w-10 h-8 text-orange-500" viewBox="0 0 40 32" fill="none" aria-hidden="true">
                  <path d="M4 6C16 6 28 12 34 26M34 26L26 22M34 26L31 16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Annotation 2 (Top Right - points down-left to mockup) */}
              <div className="hidden lg:flex absolute -top-11 -right-8 z-20 items-end gap-2 text-right pointer-events-none select-none">
                <svg className="w-10 h-8 text-sky-600" viewBox="0 0 40 32" fill="none" aria-hidden="true">
                  <path d="M36 6C24 6 12 12 6 26M6 26L14 22M6 26L9 16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-signature text-lg text-slate-800 font-bold leading-tight rotate-2">
                  Respons cepat Guru BK &lt; 24 jam
                </span>
              </div>

              {/* Annotation 3 (Right Middle - 2xl only so never clips at 1280px) */}
              <div className="hidden 2xl:flex absolute top-1/2 -right-24 -translate-y-1/2 z-20 items-center gap-2 text-left pointer-events-none select-none">
                <svg className="w-10 h-8 text-orange-500" viewBox="0 0 40 32" fill="none" aria-hidden="true">
                  <path d="M36 16C24 16 14 16 6 16M6 16L14 10M6 16L14 22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-signature text-lg text-slate-800 font-bold leading-tight -rotate-2 max-w-[120px]">
                  Live Timeline investigasi kasus
                </span>
              </div>

              {/* Annotation 4 (Bottom Left - points up-right to mockup) */}
              <div className="hidden lg:flex absolute -bottom-10 -left-6 z-20 items-start gap-2 text-left pointer-events-none select-none">
                <span className="font-signature text-base text-slate-800 font-bold leading-tight rotate-1">
                  Multiplatform Web &amp; Mobile PWA
                </span>
                <svg className="w-9 h-8 text-sky-600" viewBox="0 0 36 32" fill="none" aria-hidden="true">
                  <path d="M4 26C12 24 20 16 28 6M28 6L18 8M28 6L25 15" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Annotation 5 (Bottom Right - points up-left to mockup) */}
              <div className="hidden lg:flex absolute -bottom-10 -right-6 z-20 items-start gap-2 text-right pointer-events-none select-none">
                <svg className="w-9 h-8 text-emerald-600" viewBox="0 0 36 32" fill="none" aria-hidden="true">
                  <path d="M32 26C24 24 16 16 8 6M8 6L18 8M8 6L11 15" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-signature text-base text-slate-800 font-bold leading-tight -rotate-1">
                  100% Bebas kebocoran identitas
                </span>
              </div>

              {/* Main App Mockup Preview Window */}
              <div className="rounded-[2rem] p-3 sm:p-5 bg-white border border-[#BFE3F7] shadow-[0_20px_50px_-15px_rgba(2,132,199,0.12)] relative">
                {/* Mockup Header Bar */}
                <div className="bg-[#E5F4FC]/70 rounded-2xl p-3 sm:p-4 mb-4 border border-[#BFE3F7] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center text-white text-xs font-black">
                      LA
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-slate-900 leading-none">
                        Pusat Kendali Pengaduan &amp; Konseling
                      </p>
                      <p className="text-[10px] text-slate-600 font-medium mt-0.5">
                        SMP Gelora Depok: Tim Pencegahan &amp; Penanganan Kekerasan (TPPK)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#BFE3F7] text-slate-600 text-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Pratinjau Alur Penanganan</span>
                    </div>
                    <Link
                      href="/admin/login"
                      className="px-3.5 py-2 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold transition-colors"
                    >
                      Portal Guru &amp; BK
                    </Link>
                  </div>
                </div>

                {/* 4 Metrics Summary Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
                  <div className="p-4 rounded-2xl bg-[#0284C7] text-white text-left">
                    <div className="flex items-center justify-between text-sky-100 text-xs font-semibold mb-1">
                      <span>Target Respons BK</span>
                      <span className="text-[11px] font-bold bg-sky-700/70 px-2 py-0.5 rounded-full">
                        SLA Resmi
                      </span>
                    </div>
                    <p className="text-2xl sm:text-3xl font-black tracking-tight">&lt; 24 Jam</p>
                    <p className="text-[11px] text-sky-100 mt-1">Verifikasi Awal Hari Kerja</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-orange-200 text-left">
                    <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1">
                      <span>Simulasi Kasus Tuntas</span>
                      <span className="text-[11px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                        Tercatat
                      </span>
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-orange-500 tracking-tight">
                      {mockupData.resolvedCount}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">{mockupData.resolvedPeriod}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#BFE3F7] text-left">
                    <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1">
                      <span>Kontrol Akses Data</span>
                      <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full">
                        RBAC
                      </span>
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">100%</p>
                    <p className="text-[11px] text-slate-500 mt-1">Hanya Siswa &amp; Guru BK</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-emerald-200 text-left">
                    <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1">
                      <span>Pendekatan Sekolah</span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Aktif
                      </span>
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Restoratif</p>
                    <p className="text-[11px] text-slate-500 mt-1">Mediasi &amp; Bimbingan Moral</p>
                  </div>
                </div>

                {/* Interactive Case Feed Preview */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#BFE3F7] text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                    <div>
                      <h2 className="text-sm sm:text-base font-bold text-slate-900">
                        Simulasi Antrean &amp; Progres Pendampingan Siswa
                      </h2>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Contoh tampilan pemantauan status kasus oleh tim Bimbingan Konseling
                      </p>
                    </div>
                    <div
                      role="tablist"
                      aria-label="Filter Periode Simulasi"
                      className="inline-flex p-1 rounded-xl bg-[#E5F4FC] text-xs font-bold text-slate-600 border border-[#BFE3F7]"
                    >
                      <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'bulan'}
                        onClick={() => setActiveTab('bulan')}
                        className={`px-3 py-1.5 rounded-lg transition-colors ${
                          activeTab === 'bulan' ? 'bg-white text-sky-900 font-extrabold shadow-2xs' : 'hover:text-slate-900'
                        }`}
                      >
                        Bulan Ini
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'semester'}
                        onClick={() => setActiveTab('semester')}
                        className={`px-3 py-1.5 rounded-lg transition-colors ${
                          activeTab === 'semester' ? 'bg-white text-sky-900 font-extrabold shadow-2xs' : 'hover:text-slate-900'
                        }`}
                      >
                        Semester Ini
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2.5">
                    {mockupData.rows.map((row) => (
                      <div
                        key={row.id + row.title}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#F0F8FD] border border-[#BFE3F7]/70 gap-2"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                              row.tone === 'orange' ? 'bg-orange-100 text-orange-700' : 'bg-sky-100 text-sky-700'
                            }`}
                          >
                            {row.id}
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-xs font-bold text-slate-800">{row.title}</span>
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  row.statusTone === 'emerald'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-sky-100 text-sky-800'
                                }`}
                              >
                                {row.statusLabel}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5">{row.detail}</p>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-slate-500 flex-shrink-0">{row.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. KENALI BENTUK PERUNDUNGAN (Interactive Asymmetric Explorer - Non-Slop) */}
        {/* ========================================================================= */}
        <BullyingExplorer onReportClick={handleLaporClick} />

        {/* ========================================================================= */}
        {/* 3. ALUR LAPORAN (Pure White Canvas + 3D Icons Consistent With Hero)       */}
        {/* ========================================================================= */}
        <section id="alur" className="py-20 sm:py-28 bg-white border-b border-[#BFE3F7]/80">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center justify-center gap-1 font-signature text-orange-500 text-lg sm:text-xl font-bold mb-1 select-none">
                <span>Tiga Langkah Terarah</span>
                <HanddrawnDownArrow />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
                Bagaimana Cara Kerjanya?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
                Tiga langkah sederhana dan terenkripsi bagi siswa untuk menyampaikan laporan dengan tenang.
              </p>
            </div>

            {/* Connected Flow Track with 3D Sculpted Icons */}
            <div className="relative">
              {/* Desktop Horizontal Track Line */}
              <div className="hidden md:block absolute top-[62px] left-[17%] right-[17%] h-1 bg-[#E5F4FC] rounded-full -z-0">
                <div className="h-full w-full border-t-2 border-dashed border-[#9DD2F2]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 relative z-10">
                {/* Step 1 */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-32 h-32 rounded-3xl bg-[#F0F8FD] border border-[#BFE3F7] flex items-center justify-center shadow-xs mb-6 relative">
                    <Icon3DStepLogin />
                    <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-[#0284C7] text-white text-xs font-black flex items-center justify-center border-2 border-white shadow-xs">
                      1
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Masuk Akun Siswa</h3>
                  <p className="text-slate-600 text-xs sm:text-sm px-4 leading-relaxed">
                    Login menggunakan akun email dan password siswa SMP Gelora untuk mengakses formulir terproteksi.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-32 h-32 rounded-3xl bg-[#F0F8FD] border border-[#BFE3F7] flex items-center justify-center shadow-xs mb-6 relative">
                    <Icon3DStepReport />
                    <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center border-2 border-white shadow-xs">
                      2
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Kirim Kronologi &amp; Bukti</h3>
                  <p className="text-slate-600 text-xs sm:text-sm px-4 leading-relaxed">
                    Ceritakan kejadian, lokasi, serta lampirkan foto bukti terkompresi otomatis tanpa takut terbongkar.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-32 h-32 rounded-3xl bg-[#F0F8FD] border border-[#BFE3F7] flex items-center justify-center shadow-xs mb-6 relative">
                    <Icon3DStepTrack />
                    <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center border-2 border-white shadow-xs">
                      3
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Pantau Tindak Lanjut</h3>
                  <p className="text-slate-600 text-xs sm:text-sm px-4 leading-relaxed">
                    Pantau status verifikasi, jadwal konseling BK, hingga penyelesaian kasus di dasbor siswa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. MODUL & FITUR UTAMA (Telur Asin + Unified Pattern + Upgraded 3D Icons)  */}
        {/* ========================================================================= */}
        <section id="kategori" className="py-20 sm:py-28 bg-[#f0f7fb] bg-pattern-telur-asin relative">
          <span id="fitur" className="absolute -top-24 pointer-events-none"></span>
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center justify-center gap-1 font-signature text-orange-500 text-lg sm:text-xl font-bold mb-1 select-none">
                <span>Modul &amp; Fitur Utama</span>
                <HanddrawnDownArrow />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                6 Solusi Terpadu Menjawab Keamanan Sekolah
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
                Mengintegrasikan validasi akun siswa, enkripsi data, dan pendampingan konseling BK secara menyeluruh.
              </p>
            </div>

            {/* 6 Cards with Upgraded Multi-Plane 3D Pedestal Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group p-7 rounded-2xl bg-white border border-[#BFE3F7] hover:border-sky-400 transition-colors duration-200 flex flex-col justify-between shadow-[0_8px_24px_-12px_rgba(2,132,199,0.12)]">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <Icon3DSecurity />
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#E5F4FC] text-sky-800 border border-[#BFE3F7]">
                      Akses Praktis
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">Akun Siswa Terverifikasi</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Setiap laporan terhubung dengan akun email siswa SMP Gelora untuk mencegah laporan palsu, dengan
                    perlindungan data sesuai SOP kerahasiaan sekolah.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" aria-hidden="true" />
                    <span>Enkripsi Database Firestore</span>
                  </div>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-orange-500 transition-colors" aria-hidden="true" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="group p-7 rounded-2xl bg-white border border-[#BFE3F7] hover:border-sky-400 transition-colors duration-200 flex flex-col justify-between shadow-[0_8px_24px_-12px_rgba(2,132,199,0.12)]">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <Icon3DTimeline />
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#E5F4FC] text-sky-800 border border-[#BFE3F7]">
                      SLA &lt; 24 Jam
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">Live Timeline Status Kasus</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Pelapor dapat melacak tahap investigasi secara berurutan mulai dari Diterima, Verifikasi BK,
                    Mediasi, hingga Kasus Selesai.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" aria-hidden="true" />
                    <span>Transparansi Tindak Lanjut</span>
                  </div>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-orange-500 transition-colors" aria-hidden="true" />
                </div>
              </div>

              {/* Card 3 */}
              <div className="group p-7 rounded-2xl bg-white border border-[#BFE3F7] hover:border-sky-400 transition-colors duration-200 flex flex-col justify-between shadow-[0_8px_24px_-12px_rgba(2,132,199,0.12)]">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <Icon3DCounseling />
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#E5F4FC] text-sky-800 border border-[#BFE3F7]">
                      Konselor Resmi
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">Pendampingan Konseling BK</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Fasilitas konseling terstruktur bersama guru BK untuk memberikan rasa aman, pemulihan psikologis,
                    dan penyelesaian restoratif bagi seluruh pihak.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" aria-hidden="true" />
                    <span>Pendekatan Humanis &amp; Empati</span>
                  </div>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-orange-500 transition-colors" aria-hidden="true" />
                </div>
              </div>

              {/* Card 4 */}
              <div className="group p-7 rounded-2xl bg-white border border-[#BFE3F7] hover:border-sky-400 transition-colors duration-200 flex flex-col justify-between shadow-[0_8px_24px_-12px_rgba(2,132,199,0.12)]">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <Icon3DEvidence />
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#E5F4FC] text-sky-800 border border-[#BFE3F7]">
                      Cloud Storage
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">Unggah Bukti Foto &amp; Tangkapan Layar</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Dukungan kompresi gambar otomatis di perangkat siswa dan penyimpanan terproteksi untuk membantu
                    pembuktian tanpa membebani kuota internet.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" aria-hidden="true" />
                    <span>Kompresi Cepat &amp; Hemat Kuota</span>
                  </div>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-orange-500 transition-colors" aria-hidden="true" />
                </div>
              </div>

              {/* Card 5 */}
              <div className="group p-7 rounded-2xl bg-white border border-[#BFE3F7] hover:border-sky-400 transition-colors duration-200 flex flex-col justify-between shadow-[0_8px_24px_-12px_rgba(2,132,199,0.12)]">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <Icon3DAlert />
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#E5F4FC] text-sky-800 border border-[#BFE3F7]">
                      Notifikasi Email
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">Notifikasi Darurat Sekolah</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Setiap laporan memicu notifikasi instan ke email resmi tim konselor sekolah agar segera diambil
                    tindakan tanggap darurat sesuai SOP.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" aria-hidden="true" />
                    <span>Terintegrasi SMTP Server</span>
                  </div>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-orange-500 transition-colors" aria-hidden="true" />
                </div>
              </div>

              {/* Card 6 */}
              <div className="group p-7 rounded-2xl bg-white border border-[#BFE3F7] hover:border-sky-400 transition-colors duration-200 flex flex-col justify-between shadow-[0_8px_24px_-12px_rgba(2,132,199,0.12)]">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <Icon3DAnalytics />
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#E5F4FC] text-sky-800 border border-[#BFE3F7]">
                      Evaluasi TPPK
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">Rekapitulasi &amp; Analitik Sekolah</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Rekapitulasi berkala per semester untuk mengevaluasi efektivitas program anti-perundungan serta bahan
                    laporan resmi ke kepala sekolah.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" aria-hidden="true" />
                    <span>Distribusi Kategori &amp; Lokasi</span>
                  </div>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-orange-500 transition-colors" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. POHON REGULASI & AKAR KEPATUHAN HUKUM (Clean Canvas + Seamless Roots)  */}
        {/* ========================================================================= */}
        <section
          id="kepatuhan"
          className="py-20 sm:py-28 bg-[#f0f7fb] border-t border-b border-[#BFE3F7]/80"
        >
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center justify-center gap-1 font-signature text-orange-500 text-lg sm:text-xl font-bold mb-1 select-none">
                <span>Pohon Regulasi &amp; Keamanan</span>
                <HanddrawnDownArrow />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Pondasi Kepatuhan &amp; Jaminan Keamanan
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
                Sistem berakar pada mandat perlindungan anak nasional dan standar kerahasiaan data pribadi Republik Indonesia.
              </p>
            </div>

            {/* Clean Architectural Branching Root System (Zero Stray Dots or Dashed Clutter) */}
            <div className="relative">
              {/* Central Root Hub Card */}
              <div className="max-w-md mx-auto p-6 sm:p-7 rounded-2xl bg-white border-2 border-orange-300 shadow-[0_14px_34px_-14px_rgba(249,115,22,0.22)] text-center relative z-10">
                <div className="mb-3">
                  <Icon3DRegulationHub />
                </div>
                <span className="inline-block px-3 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[10px] font-extrabold text-orange-700 mb-2">
                  Akar Utama Kepatuhan
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  Pusat Mandat Regulasi &amp; Etika
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Standar Terpadu Satuan Pendidikan SMP Gelora Depok
                </p>
              </div>

              {/* Desktop Smooth Unbroken Dual-Layer Root Conduits (Flush Into 4 Card Centers: 141, 447, 753, 1059) */}
              <div className="hidden lg:block w-full h-24 pointer-events-none select-none relative z-0 -my-px">
                <svg className="w-full h-full" viewBox="0 0 1200 96" fill="none" preserveAspectRatio="none" aria-hidden="true">
                  {/* Soft Outer Vascular Sheath */}
                  <path d="M600 0V26" stroke="#BAE6FD" strokeWidth="8" strokeLinecap="round" />
                  <path d="M600 26C600 54 141 38 141 96" stroke="#BAE6FD" strokeWidth="7" strokeLinecap="round" />
                  <path d="M600 26C600 54 447 40 447 96" stroke="#BAE6FD" strokeWidth="7" strokeLinecap="round" />
                  <path d="M600 26C600 54 753 40 753 96" stroke="#BAE6FD" strokeWidth="7" strokeLinecap="round" />
                  <path d="M600 26C600 54 1059 38 1059 96" stroke="#BAE6FD" strokeWidth="7" strokeLinecap="round" />

                  {/* Solid Core Root Conduits */}
                  <path d="M600 0V26" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
                  <path d="M600 26C600 54 141 38 141 96" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M600 26C600 54 447 40 447 96" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M600 26C600 54 753 40 753 96" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M600 26C600 54 1059 38 1059 96" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Mobile / Tablet Simple Solid Root Trunk */}
              <div className="lg:hidden flex justify-center py-3 pointer-events-none select-none" aria-hidden="true">
                <div className="w-0.5 h-7 bg-[#0284C7]/60" />
              </div>

              {/* 4 Branching Compliance Pillar Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pl-5 lg:pl-0 border-l-2 border-[#7DD3FC]/80 lg:border-l-0">
                {/* Pillar 1 */}
                <div className="p-6 rounded-2xl bg-white border border-[#BFE3F7] border-t-[3px] lg:border-t-[#0284C7] hover:border-sky-400 transition-colors relative shadow-[0_8px_24px_-14px_rgba(2,132,199,0.16)]">
                  <div
                    aria-hidden="true"
                    className="lg:hidden absolute top-10 -left-[27px] w-5 h-0.5 bg-[#0284C7]"
                  />
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <Icon3DPillarTPPK />
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#E5F4FC] text-sky-800 border border-[#BFE3F7]">
                      Regulasi Pokok
                    </span>
                  </div>
                  <h4 className="text-base font-black text-slate-900 mb-2">Permendikbudristek 46/2023</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pembentukan dan mandat kerja Tim Pencegahan dan Penanganan Kekerasan (TPPK) dengan alur penanganan tercatat resmi.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="p-6 rounded-2xl bg-white border border-[#BFE3F7] border-t-[3px] lg:border-t-orange-500 hover:border-orange-400 transition-colors relative shadow-[0_8px_24px_-14px_rgba(249,115,22,0.16)]">
                  <div
                    aria-hidden="true"
                    className="lg:hidden absolute top-10 -left-[27px] w-5 h-0.5 bg-orange-500"
                  />
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <Icon3DPillarPrivacy />
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#E5F4FC] text-sky-800 border border-[#BFE3F7]">
                      Privasi Data
                    </span>
                  </div>
                  <h4 className="text-base font-black text-slate-900 mb-2">UU PDP No. 27/2022</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Perlindungan data pribadi siswa dan kerahasiaan catatan konseling BK dari akses pihak yang tidak berwenang.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="p-6 rounded-2xl bg-white border border-[#BFE3F7] border-t-[3px] lg:border-t-emerald-600 hover:border-emerald-400 transition-colors relative shadow-[0_8px_24px_-14px_rgba(16,185,129,0.16)]">
                  <div
                    aria-hidden="true"
                    className="lg:hidden absolute top-10 -left-[27px] w-5 h-0.5 bg-emerald-600"
                  />
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <Icon3DPillarChildRights />
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#E5F4FC] text-sky-800 border border-[#BFE3F7]">
                      Hak Siswa
                    </span>
                  </div>
                  <h4 className="text-base font-black text-slate-900 mb-2">UU Perlindungan Anak 35/2014</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Jaminan fundamental atas hak anak untuk memperoleh rasa aman dan bebas dari perundungan fisik, verbal, maupun psikis.
                  </p>
                </div>

                {/* Pillar 4 */}
                <div className="p-6 rounded-2xl bg-white border border-[#BFE3F7] border-t-[3px] lg:border-t-[#0284C7] hover:border-sky-400 transition-colors relative shadow-[0_8px_24px_-14px_rgba(2,132,199,0.16)]">
                  <div
                    aria-hidden="true"
                    className="lg:hidden absolute top-10 -left-[27px] w-5 h-0.5 bg-[#0284C7]"
                  />
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <Icon3DPillarRestorative />
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#E5F4FC] text-sky-800 border border-[#BFE3F7]">
                      Etika Mediasi
                    </span>
                  </div>
                  <h4 className="text-base font-black text-slate-900 mb-2">Restorative Justice</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pendekatan keadilan restoratif yang menitikberatkan pada pemulihan korban, mediasi kekeluargaan, dan bimbingan moral pelaku.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. TIM PENGEMBANG (REDESIGNED INTERACTIVE SPOTLIGHT CARD - PURE WHITE BG) */}
        {/* ========================================================================= */}
        <TeamShowcase />

        {/* ========================================================================= */}
        {/* 7. FAQ SECTION (Telur Asin Canvas + Single Unified Pattern)               */}
        {/* ========================================================================= */}
        <section id="faq" className="py-20 sm:py-28 bg-[#f0f7fb] bg-pattern-telur-asin">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Heading & BK Helpdesk Card */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1 font-signature text-orange-500 text-lg font-bold mb-1 select-none">
                    <span>Jawaban Lengkap Pertanyaan Anda</span>
                    <HanddrawnDownArrow />
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                    Masih Memiliki Pertanyaan Seputar Lapor Aman?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    Berikut rangkuman jawaban atas pertanyaan yang paling sering diajukan oleh siswa, orang tua, dan
                    warga SMP Gelora Depok.
                  </p>
                </div>

                {/* BK Counseling Helpdesk Card */}
                <div className="p-6 rounded-2xl bg-white border border-[#BFE3F7] shadow-xs space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-orange-500 text-white flex items-center justify-center">
                      <PhoneCall size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Butuh Konsultasi Langsung?</h3>
                      <p className="text-xs text-slate-500">Guru Bimbingan Konseling SMP Gelora</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Jika Anda merasa cemas atau membutuhkan pendampingan tatap muka rahasia, jangan ragu untuk
                    menghubungi layanan konselor kami.
                  </p>
                  <a
                    href="https://wa.me/6282155667735"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    <span>Hubungi Hotline BK SMP Gelora</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Right Column: Accordion FAQ Cards */}
              <div className="lg:col-span-7 space-y-3.5">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={faq.q}
                      className="rounded-2xl bg-white border border-[#BFE3F7]/90 overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#F0F8FD] transition-colors"
                      >
                        <span className="text-sm sm:text-base font-bold text-slate-900">{faq.q}</span>
                        <ChevronDown
                          size={18}
                          aria-hidden="true"
                          className={`text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-orange-500' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. BOTTOM CALL TO ACTION BANNER (Pure White Outer Canvas)                 */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="p-10 sm:p-16 rounded-[2.5rem] bg-[#CCEAFC] border border-[#9DD2F2] text-center relative overflow-hidden shadow-md">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Mari Ciptakan Lingkungan <br className="hidden sm:inline" />
                  <span className="text-orange-500">Sekolah yang Lebih Baik</span>
                </h2>
                <p className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  Perubahan dimulai dari satu langkah kecil. Jangan biarkan perundungan terjadi di sekitar kita. Jadilah
                  pahlawan bagi temanmu.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/siswa/daftar"
                    className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-sky-700 font-extrabold text-sm sm:text-base shadow-sm hover:bg-sky-50 transition-colors active:scale-95"
                  >
                    Daftar Sekarang
                  </Link>

                  <Link
                    href="/#alur"
                    className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white/40 border-2 border-white text-sky-900 font-extrabold text-sm sm:text-base hover:bg-white hover:text-sky-700 transition-colors active:scale-95"
                  >
                    Pelajari Alur Laporan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* 9. AUTH GATE MODAL (Accessible Dialog with Escape Support)                */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showLoginModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLoginModal(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-sm rounded-2xl bg-white p-7 text-center shadow-2xl border border-slate-100 z-10"
            >
              <button
                type="button"
                onClick={() => setShowLoginModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Tutup dialog"
              >
                <X size={18} aria-hidden="true" />
              </button>

              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mx-auto mb-4 border border-orange-100">
                <Lock size={26} aria-hidden="true" />
              </div>

              <h3 id="auth-modal-title" className="text-lg font-black text-slate-900 mb-1">
                Akses Laporan Terproteksi
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Untuk menjamin validitas dan kerahasiaan investigasi, Anda perlu masuk atau mendaftar dengan akun siswa
                SMP Gelora.
              </p>

              <div className="flex flex-col gap-2.5">
                <Link
                  href="/siswa/login"
                  className="w-full min-h-[44px] py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs shadow-sm flex items-center justify-center gap-2 transition-colors active:scale-95"
                >
                  <LogIn size={15} aria-hidden="true" />
                  <span>Masuk Sebagai Siswa</span>
                </Link>
                <Link
                  href="/siswa/daftar"
                  className="w-full min-h-[44px] py-3 rounded-xl bg-white hover:bg-sky-50 text-sky-700 font-bold text-xs border border-sky-200 transition-colors flex items-center justify-center"
                >
                  Daftar Akun Baru
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

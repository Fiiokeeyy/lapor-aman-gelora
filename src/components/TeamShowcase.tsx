'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, UserRound } from 'lucide-react';
import {
  PencilSketchUnderline,
  Icon3DRoleLead,
  Icon3DRoleDev,
  Icon3DRolePM,
} from '@/components/icons/LaporAman3DIcons';

export type TeamMemberKey = 'aufa' | 'ivandhika' | 'wahyu';

interface TeamProfile {
  key: TeamMemberKey;
  tabLabel: string;
  roleTitle: string;
  headlineLead: string;
  headlineHighlight: string;
  desc1: string;
  desc2: string;
  focusPills: [string, string];
  name: string;
  monogram: string;
  /** Letakkan file foto transparan di public/team/ lalu isi path-nya (contoh: '/team/aufa.png') */
  photoSrc?: string;
}

const TEAM_ORDER: TeamMemberKey[] = ['aufa', 'ivandhika', 'wahyu'];

const TEAM_PROFILES: Record<TeamMemberKey, TeamProfile> = {
  aufa: {
    key: 'aufa',
    tabLabel: 'Team Lead',
    roleTitle: 'Lead Project & Lead Software Engineer',
    headlineLead: 'Memimpin arsitektur inti dan',
    headlineHighlight: 'keamanan platform.',
    desc1:
      'Aufa Wafi merancang fondasi arsitektur sistem, skema basis data Cloud Firestore, serta mekanisme otorisasi berbasis peran agar seluruh laporan siswa tersimpan aman dan terlindungi.',
    desc2:
      'Ia mengoordinasikan integrasi layanan pelaporan, kompresi bukti foto, sistem notifikasi otomatis ke tim konselor sekolah, hingga proses code review dan deployment rilis.',
    focusPills: ['Core Architecture & Security', 'Code Review & Deployment'],
    name: 'Aufa Wafi',
    monogram: 'AW',
    // photoSrc: '/team/aufa.png',
  },
  ivandhika: {
    key: 'ivandhika',
    tabLabel: 'Project Development',
    roleTitle: 'Project Development & UI/UX Engineer',
    headlineLead: 'Mengembangkan antarmuka yang',
    headlineHighlight: 'ramah dan mudah digunakan.',
    desc1:
      'Ivandhika membangun komponen UI interaktif, alur formulir pelaporan bertahap, validasi input sisi klien, serta tata letak responsif agar nyaman diakses dari ponsel maupun komputer.',
    desc2:
      'Ia memastikan setiap interaksi berjalan konsisten dengan identitas visual Lapor Aman, memiliki kontras teks yang jelas, serta alur navigasi yang menenangkan bagi siswa.',
    focusPills: ['UI Components & Flows', 'Responsive & Accessibility'],
    name: 'Ivandhika',
    monogram: 'IV',
    // photoSrc: '/team/ivandhika.png',
  },
  wahyu: {
    key: 'wahyu',
    tabLabel: 'Project Manager',
    roleTitle: 'Project Manager & Quality Assurance',
    headlineLead: 'Mengawal perencanaan, kualitas,',
    headlineHighlight: 'dan kepatuhan sistem.',
    desc1:
      'Wahyu Hidayat mengatur perencanaan sprint, prioritas fitur, serta memetakan alur kerja penanganan kasus bersama tim Bimbingan Konseling (BK) dan TPPK sekolah agar tepat sasaran.',
    desc2:
      'Ia memimpin pengujian fungsional (UAT), memverifikasi kesesuaian fitur dengan regulasi perlindungan anak, serta menyusun dokumentasi teknis dan panduan rilis sistem.',
    focusPills: ['Sprint & UAT Quality Gate', 'Kepatuhan & Dokumentasi'],
    name: 'Wahyu Hidayat',
    monogram: 'WH',
    // photoSrc: '/team/wahyu.png',
  },
};

export default function TeamShowcase() {
  const [activeKey, setActiveKey] = useState<TeamMemberKey>('aufa');
  const current = TEAM_PROFILES[activeKey];
  const currentIdx = TEAM_ORDER.indexOf(activeKey);

  const handleCycle = (delta: number) => {
    const nextIdx = (currentIdx + delta + TEAM_ORDER.length) % TEAM_ORDER.length;
    setActiveKey(TEAM_ORDER[nextIdx]);
  };

  return (
    <section id="tim" className="py-20 sm:py-28 bg-white border-b border-[#BFE3F7]/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="font-signature text-orange-500 text-lg sm:text-xl font-bold block mb-1 select-none">
            Tim Pengembang Lapor Aman ⤷
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Mengenal Tim di Balik Platform
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
            Pembagian peran yang terarah dalam merancang, membangun, dan menguji sistem pengaduan siswa.
          </p>
        </div>

        {/* Clean Telur Asin Spotlight Card: 60% Left Content / 40% Right Photo Frame */}
        <div className="relative rounded-[2.5rem] bg-[#CCEAFC] border border-[#9DD2F2] shadow-md overflow-hidden">
          {/* Subtle Concentric Watermark Arcs Behind Right Photo Area */}
          <svg
            aria-hidden="true"
            className="absolute -right-16 -bottom-20 w-[440px] h-[440px] pointer-events-none select-none text-[#9DD2F2]/60"
            viewBox="0 0 400 400"
            fill="none"
          >
            <circle cx="200" cy="200" r="115" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" />
            <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          {/* Exact 60% (3/5) Left & 40% (2/5) Right Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 items-stretch">
            {/* LEFT 60%: Clean Crave-Inspired Content Stack */}
            <div className="lg:col-span-3 p-7 sm:p-11 lg:p-14 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                {/* 1. Segmented Role Pill Switcher */}
                <div
                  role="tablist"
                  aria-label="Pilih Peran Tim Pengembang"
                  className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-full bg-white/60 border border-[#9DD2F2]"
                >
                  {TEAM_ORDER.map((key) => {
                    const item = TEAM_PROFILES[key];
                    const isActive = activeKey === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveKey(key)}
                        className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-colors ${
                          isActive
                            ? 'bg-white text-sky-900 shadow-xs'
                            : 'text-slate-700 hover:bg-white/50 hover:text-slate-900'
                        }`}
                      >
                        {item.tabLabel}
                      </button>
                    );
                  })}
                </div>

                {/* 2. Role Subtitle Pill */}
                <div>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-white/80 border border-[#9DD2F2] text-xs font-bold text-sky-800">
                    {current.roleTitle}
                  </span>
                </div>

                {/* 3. Bold 2-Line Display Headline with Brand Underline */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-[1.18] max-w-xl">
                  {current.headlineLead}{' '}
                  <span className="relative inline-block text-orange-500">
                    {current.headlineHighlight}
                    <PencilSketchUnderline />
                  </span>
                </h3>

                {/* 4. Clean 2-Column Jobdesk Narrative */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>{current.desc1}</p>
                  <p>{current.desc2}</p>
                </div>

                {/* 5. Concise Jobdesk Focus Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {current.focusPills.map((pill) => (
                    <span
                      key={pill}
                      className="px-3.5 py-1.5 rounded-full bg-white/75 border border-[#9DD2F2] text-xs font-bold text-sky-900"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 6. Large Bold Name + Prev/Next Controls Anchored at Bottom-Left */}
              <div className="pt-4 flex flex-wrap items-end justify-between gap-4">
                <p className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-none">
                  {current.name}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCycle(-1)}
                    aria-label="Anggota sebelumnya"
                    className="w-11 h-11 rounded-full bg-white/85 hover:bg-white border border-[#9DD2F2] text-sky-900 flex items-center justify-center transition-colors shadow-2xs"
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCycle(1)}
                    aria-label="Anggota berikutnya"
                    className="w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-colors shadow-xs"
                  >
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT 40%: Dedicated Portrait Photo Frame (Flush to Bottom Edge) */}
            <div className="lg:col-span-2 flex items-end justify-center px-6 pt-4 lg:pt-10 lg:pr-10 lg:pl-2">
              <div className="relative w-full max-w-[300px] lg:max-w-none h-[300px] sm:h-[340px] lg:h-[430px] flex items-end justify-center">
                {current.photoSrc ? (
                  <Image
                    src={current.photoSrc}
                    alt={`Foto ${current.name} - ${current.roleTitle}`}
                    fill
                    className="object-contain object-bottom select-none"
                    sizes="(max-width: 1024px) 320px, 420px"
                  />
                ) : (
                  /* Clean Portrait Slot Placeholder Ready for Real Photo Upload */
                  <div className="w-full h-full rounded-t-[2rem] bg-white/45 border-2 border-b-0 border-dashed border-[#7DD3FC] flex flex-col items-center justify-center p-6 text-center relative">
                    <div className="mb-4">
                      {activeKey === 'aufa' && <Icon3DRoleLead />}
                      {activeKey === 'ivandhika' && <Icon3DRoleDev />}
                      {activeKey === 'wahyu' && <Icon3DRolePM />}
                    </div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#9DD2F2] text-xs font-extrabold text-sky-900 shadow-2xs mb-2">
                      <UserRound size={14} className="text-orange-500" aria-hidden="true" />
                      <span>Slot Foto {current.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 font-medium max-w-[200px] leading-relaxed">
                      Area khusus 40% kanan untuk foto profil {current.name} ({current.monogram}).
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

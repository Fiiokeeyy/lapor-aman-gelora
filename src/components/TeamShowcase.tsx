'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  PencilSketchUnderline,
  HanddrawnDownArrow,
} from '@/components/icons/LaporAman3DIcons';

export type TeamMemberKey = 'aufa' | 'ivandhika s.p.f' | 'wahyu';

interface TeamProfile {
  key: TeamMemberKey;
  tabLabel: string;
  mobileTabLabel: string;
  roleTitle: string;
  headlineLead: string;
  headlineHighlight: string;
  desc1: string;
  desc2: string;
  focusPills: [string, string];
  name: string;
  photoSrc: string;
  photoClassName?: string;
}

const TEAM_ORDER: TeamMemberKey[] = ['aufa', 'ivandhika s.p.f', 'wahyu'];

const TEAM_PROFILES: Record<TeamMemberKey, TeamProfile> = {
  aufa: {
    key: 'aufa',
    tabLabel: 'Team Lead',
    mobileTabLabel: 'Team Lead',
    roleTitle: 'Lead Project & Lead Software Engineer',
    headlineLead: 'Memimpin arsitektur inti dan',
    headlineHighlight: 'keamanan platform.',
    desc1:
      'Aufa Wafi merancang fondasi arsitektur sistem, skema basis data Cloud Firestore, serta mekanisme otorisasi berbasis peran agar seluruh laporan siswa tersimpan aman dan terlindungi.',
    desc2:
      'Ia mengoordinasikan integrasi layanan pelaporan, kompresi bukti foto, sistem notifikasi otomatis ke tim konselor sekolah, hingga proses code review dan deployment rilis.',
    focusPills: ['Core Architecture & Security', 'Code Review & Deployment'],
    name: 'Aufa Wafi',
    photoSrc: '/Foto_Formal_Aufa.png',
    // Scale upward gently from bottom to compensate extra transparent top headroom in PNG
    photoClassName: 'scale-[1.2] origin-bottom',
  },
  'ivandhika s.p.f': {
    key: 'ivandhika s.p.f',
    tabLabel: 'Project Development',
    mobileTabLabel: 'Project Dev',
    roleTitle: 'Project Development & UI/UX Engineer',
    headlineLead: 'Mengembangkan antarmuka yang',
    headlineHighlight: 'ramah dan mudah digunakan.',
    desc1:
      'Ivandhika membangun komponen UI interaktif, alur formulir pelaporan bertahap, validasi input sisi klien, serta tata letak responsif agar nyaman diakses dari ponsel maupun komputer.',
    desc2:
      'Ia memastikan setiap interaksi berjalan konsisten dengan identitas visual Lapor Aman, memiliki kontras teks yang jelas, serta alur navigasi yang menenangkan bagi siswa.',
    focusPills: ['UI Components & Flows', 'Responsive & Accessibility'],
    name: 'Ivandhika S.P.F',
    photoSrc: '/Foto_Ivan.png',
    photoClassName: 'scale-[1.03] origin-bottom',
  },
  wahyu: {
    key: 'wahyu',
    tabLabel: 'Project Manager',
    mobileTabLabel: 'Project PM',
    roleTitle: 'Project Manager & Quality Assurance',
    headlineLead: 'Mengawal perencanaan, kualitas,',
    headlineHighlight: 'dan kepatuhan sistem.',
    desc1:
      'Wahyu Hidayat mengatur perencanaan sprint, prioritas fitur, serta memetakan alur kerja penanganan kasus bersama tim Bimbingan Konseling (BK) dan TPPK sekolah agar tepat sasaran.',
    desc2:
      'Ia memimpin pengujian fungsional (UAT), memverifikasi kesesuaian fitur dengan regulasi perlindungan anak, serta menyusun dokumentasi teknis dan panduan rilis sistem.',
    focusPills: ['Sprint & UAT Quality Gate', 'Kepatuhan & Dokumentasi'],
    name: 'Wahyu Hidayat',
    photoSrc: '/Foto_Wahyu.png',
    photoClassName: 'scale-[1.2] origin-bottom',
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
    <section id="tim" className="py-16 sm:py-28 bg-white border-b border-[#BFE3F7]/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center justify-center gap-1 font-signature text-orange-500 text-lg sm:text-xl font-bold mb-1 select-none">
            <span>Tim Pengembang Lapor Aman</span>
            <HanddrawnDownArrow />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Mengenal Tim di Balik Platform
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 mt-3 sm:mt-4 leading-relaxed font-normal">
            Pembagian peran yang terarah dalam merancang, membangun, dan menguji sistem pengaduan siswa.
          </p>
        </div>

        {/* Clean Pure Telur Asin Spotlight Card (Zero Background Pattern, Responsive 60/40 Split) */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-[#CCEAFC] border border-[#9DD2F2] shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch">
            {/* LEFT 60%: Clean Content Stack */}
            <div className="lg:col-span-3 p-5 sm:p-10 lg:p-12 flex flex-col justify-between gap-6">
              <div className="space-y-5 sm:space-y-6">
                {/* 1. Single-Row Mobile & Desktop Role Pill Switcher */}
                <div
                  role="tablist"
                  aria-label="Pilih Peran Tim Pengembang"
                  className="grid grid-cols-3 sm:inline-flex items-center gap-1 p-1 rounded-full bg-white/65 border border-[#9DD2F2] w-full sm:w-auto"
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
                        className={`min-h-[38px] px-2 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold whitespace-nowrap text-center transition-colors ${
                          isActive
                            ? 'bg-white text-sky-900 shadow-xs'
                            : 'text-slate-700 hover:bg-white/50 hover:text-slate-900'
                        }`}
                      >
                        <span className="sm:hidden">{item.mobileTabLabel}</span>
                        <span className="hidden sm:inline">{item.tabLabel}</span>
                      </button>
                    );
                  })}
                </div>

                {/* 2. Role Subtitle Pill */}
                <div>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-white/85 border border-[#9DD2F2] text-[11px] sm:text-xs font-bold text-sky-900">
                    {current.roleTitle}
                  </span>
                </div>

                {/* 3. Bold Display Headline with Brand Underline */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-[1.18] max-w-xl">
                  {current.headlineLead}{' '}
                  <span className="relative inline-block text-orange-500">
                    {current.headlineHighlight}
                    <PencilSketchUnderline />
                  </span>
                </h3>

                {/* 4. Clean 2-Column Jobdesk Narrative */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                  <p>{current.desc1}</p>
                  <p>{current.desc2}</p>
                </div>

                {/* 5. Concise Jobdesk Focus Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {current.focusPills.map((pill) => (
                    <span
                      key={pill}
                      className="px-3 py-1.5 rounded-full bg-white/80 border border-[#9DD2F2] text-[11px] sm:text-xs font-bold text-sky-900"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 6. Large Bold Name + Prev/Next Controls Anchored cleanly at Bottom-Left */}
              <div className="pt-2 sm:pt-4 flex items-center justify-between gap-3">
                <p className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-none">
                  {current.name}
                </p>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCycle(-1)}
                    aria-label="Anggota sebelumnya"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white border border-[#9DD2F2] text-sky-900 flex items-center justify-center transition-colors shadow-2xs"
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCycle(1)}
                    aria-label="Anggota berikutnya"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-colors shadow-xs"
                  >
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT 40%: Clean Portrait Photo Frame (Flush to Bottom Edge, Zero Background Pattern) */}
            <div className="lg:col-span-2 flex items-end justify-center px-5 pt-2 lg:pt-8 lg:pr-8 lg:pl-0">
              <div className="relative w-full max-w-[290px] sm:max-w-[330px] lg:max-w-none h-[300px] sm:h-[360px] lg:h-[430px] flex items-end justify-center overflow-hidden">
                <Image
                  src={current.photoSrc}
                  alt={`Foto ${current.name} - ${current.roleTitle}`}
                  fill
                  className={`object-contain object-bottom select-none drop-shadow-[0_12px_20px_rgba(2,132,199,0.18)] ${
                    current.photoClassName || ''
                  }`}
                  sizes="(max-width: 1024px) 320px, 420px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

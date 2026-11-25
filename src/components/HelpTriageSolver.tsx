'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, HelpCircle } from 'lucide-react';
import {
  HELP_TRIAGE_SOLUTIONS,
  getHelpTriageSolution,
  type HelpTriageId,
} from '@/lib/legal-support-data';

export default function HelpTriageSolver() {
  const [activeIssue, setActiveIssue] =
    useState<HelpTriageId>('kendala-masuk');
  const solution = getHelpTriageSolution(activeIssue);
  const isExternalAction = solution.actionHref.startsWith('https://');

  return (
    <section
      id="panduan-cepat"
      aria-labelledby="panduan-cepat-heading"
      className="bg-white border border-[#9DD2F2] rounded-2xl p-5 sm:p-8 shadow-[0_14px_34px_-24px_rgba(2,132,199,0.2)]"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2
            id="panduan-cepat-heading"
            className="text-xl sm:text-2xl font-bold text-slate-900"
          >
            Pilih Kendala yang Sedang Anda Hadapi
          </h2>
          <p className="mt-1 text-sm sm:text-base text-slate-600">
            Dapatkan langkah penanganan praktis sesuai kebutuhan Anda sebelum
            menghubungi Guru BK.
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-[#E5F4FC] border border-[#9DD2F2] text-xs font-bold text-sky-900 shrink-0">
          <HelpCircle className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
          <span>Solusi Cepat 3 Langkah</span>
        </div>
      </div>

      {/* Topic Selector (Rounded-XL & 3D Active Navy matching Navbar) */}
      <div
        role="tablist"
        aria-label="Pilih topik kendala pengguna"
        className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 bg-[#E5F4FC] border border-[#9DD2F2] rounded-2xl p-1.5"
      >
        {HELP_TRIAGE_SOLUTIONS.map((item) => {
          const isSelected = item.id === activeIssue;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`triage-tab-${item.id}`}
              aria-selected={isSelected}
              aria-controls={`triage-panel-${item.id}`}
              onClick={() => setActiveIssue(item.id)}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-center transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#0B132B] text-white shadow-[0_8px_18px_-4px_rgba(11,19,43,0.48),inset_0_1px_1px_rgba(255,255,255,0.24)]'
                  : 'text-slate-700 hover:bg-white hover:text-slate-950'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Solution Card */}
      <div
        role="tabpanel"
        id={`triage-panel-${solution.id}`}
        aria-labelledby={`triage-tab-${solution.id}`}
        className="mt-5 rounded-2xl bg-[#F0F8FD] border border-[#BFE3F7] p-5 sm:p-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8">
            <h3 className="text-lg font-bold text-slate-900">
              {solution.issueTitle}
            </h3>
            <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">
              {solution.summary}
            </p>

            <ol className="mt-4 space-y-3">
              {solution.steps.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-lg bg-white border border-[#9DD2F2] text-sky-900 text-xs font-bold flex items-center justify-center mt-0.5 tabular-nums">
                    {index + 1}
                  </span>
                  <span className="text-sm text-slate-700 leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between bg-white border border-[#9DD2F2] rounded-xl p-5 shadow-2xs">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-sky-900">
                Langkah Lanjutan
              </p>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                Lanjutkan langsung ke halaman atau layanan terkait dengan aman.
              </p>
            </div>

            {isExternalAction ? (
              <a
                href={solution.actionHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold shadow-[0_8px_18px_-4px_rgba(249,115,22,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] transition-all"
              >
                <span>{solution.actionLabel}</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            ) : (
              <Link
                href={solution.actionHref}
                className="mt-5 inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold shadow-[0_8px_18px_-4px_rgba(249,115,22,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] transition-all"
              >
                <span>{solution.actionLabel}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

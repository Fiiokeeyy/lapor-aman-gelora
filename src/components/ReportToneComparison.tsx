'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import {
  REPORT_TONE_EXAMPLES,
  getReportToneExample,
  type ReportToneId,
} from '@/lib/legal-support-data';

export default function ReportToneComparison() {
  const [activeTone, setActiveTone] = useState<ReportToneId>('diterima');
  const currentExample = getReportToneExample(activeTone);
  const isAccepted = currentExample.id === 'diterima';

  return (
    <section
      id="contoh-penulisan"
      aria-labelledby="contoh-penulisan-heading"
      className="bg-[#CCEAFC] border border-[#9DD2F2] rounded-2xl p-5 sm:p-7 shadow-sm scroll-mt-24"
    >
      <div>
        <h2
          id="contoh-penulisan-heading"
          className="text-lg sm:text-xl font-bold text-slate-900"
        >
          Simulasi Penulisan Laporan: Objektif vs Ditolak
        </h2>
        <p className="mt-1 text-sm text-slate-700">
          Bandingkan cara penulisan kronologi yang mudah diverifikasi oleh Guru BK
          dengan format yang berisiko ditolak.
        </p>
      </div>

      {/* Mode Switcher (Single-Row Mobile & Desktop, 3D Active Navy matching Navbar) */}
      <div
        role="tablist"
        aria-label="Pilih contoh penulisan laporan"
        className="mt-5 grid grid-cols-2 gap-1.5 sm:gap-2 bg-white border border-[#9DD2F2] rounded-2xl p-1.5"
      >
        {REPORT_TONE_EXAMPLES.map((example) => {
          const isSelected = example.id === activeTone;
          return (
            <button
              key={example.id}
              type="button"
              role="tab"
              id={`tone-tab-${example.id}`}
              aria-selected={isSelected}
              aria-controls={`tone-panel-${example.id}`}
              onClick={() => setActiveTone(example.id)}
              className={`min-w-0 min-h-[44px] px-2 sm:px-4 py-2 rounded-xl text-[11px] sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-[#0B132B] text-white shadow-[0_8px_18px_-4px_rgba(11,19,43,0.48),inset_0_1px_1px_rgba(255,255,255,0.24)]'
                  : 'text-slate-700 hover:bg-[#E5F4FC] hover:text-slate-950'
              }`}
            >
              <span className="sm:hidden">{example.mobileLabel}</span>
              <span className="hidden sm:inline">{example.label}</span>
            </button>
          );
        })}
      </div>

      {/* Example Card */}
      <div
        role="tabpanel"
        id={`tone-panel-${currentExample.id}`}
        aria-labelledby={`tone-tab-${currentExample.id}`}
        className="mt-4 bg-white border border-[#9DD2F2] rounded-xl p-5 shadow-2xs"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E5F4FC]">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold ${
              isAccepted
                ? 'bg-[#E5F4FC] text-sky-900 border border-[#9DD2F2]'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {isAccepted ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
            ) : (
              <AlertTriangle className="w-3.5 h-3.5 text-red-600" aria-hidden="true" />
            )}
            <span>{currentExample.label}</span>
          </span>
          <span className="text-xs font-semibold text-slate-600">
            {currentExample.verdict}
          </span>
        </div>

        <div className="mt-4 rounded-xl bg-[#F0F8FD] border border-[#BFE3F7] p-4">
          <p className="text-sm font-bold text-slate-900">
            {currentExample.sampleTitle}
          </p>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">
            &ldquo;{currentExample.sampleBody}&rdquo;
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xs font-bold uppercase tracking-wide text-slate-600">
            Alasan Evaluasi Sistem & Guru BK
          </h3>
          <ul className="mt-2.5 space-y-2">
            {currentExample.reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-start gap-2.5 text-sm text-slate-700"
              >
                {isAccepted ? (
                  <CheckCircle2
                    className="w-4 h-4 text-sky-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                ) : (
                  <AlertTriangle
                    className="w-4 h-4 text-red-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                )}
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

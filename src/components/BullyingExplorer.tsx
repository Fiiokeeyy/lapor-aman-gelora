'use client';

import { useState } from 'react';
import { ArrowRight, Check, Hand, MessageCircle, Globe, Users, HeartCrack, type LucideIcon } from 'lucide-react';
import {
  BULLYING_CATEGORIES,
  getCategoryById,
  type BullyingCategoryId,
} from '@/lib/bullying-categories';
import { HanddrawnDownArrow } from '@/components/icons/LaporAman3DIcons';

const CATEGORY_ICON_MAP: Record<BullyingCategoryId, LucideIcon> = {
  Fisik: Hand,
  Verbal: MessageCircle,
  Siber: Globe,
  Sosial: Users,
  Emosional: HeartCrack,
};

interface BullyingExplorerProps {
  onReportClick: () => void;
}

export default function BullyingExplorer({ onReportClick }: BullyingExplorerProps) {
  const [selectedId, setSelectedId] = useState<BullyingCategoryId>('Fisik');
  const active = getCategoryById(selectedId);

  return (
    <section aria-labelledby="kenali-heading" className="py-16 sm:py-24 bg-white border-t border-[#BFE3F7]/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Editorial Lead & Tactile Category Selector */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1 font-signature text-orange-500 text-lg sm:text-xl font-bold mb-1 select-none">
                <span>Kenali Batasannya</span>
                <HanddrawnDownArrow />
              </span>
              <h2
                id="kenali-heading"
                className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-[1.14]"
              >
                Apa Saja yang Bisa Dilaporkan di SMP Gelora?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Banyak siswa ragu bersuara karena mengira perlakuan tertentu hanya candaan. Pilih kategori untuk melihat contoh nyata dan panduan bukti.
              </p>
            </div>

            {/* Category Selector Tabs (Mobile horizontal wrap / Desktop stacked selector) */}
            <div
              role="tablist"
              aria-label="Kategori Perundungan"
              className="flex flex-wrap lg:flex-col gap-2"
            >
              {BULLYING_CATEGORIES.map((category) => {
                const isSelected = category.id === selectedId;
                const Icon = CATEGORY_ICON_MAP[category.id];
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    id={`tab-category-${category.id}`}
                    aria-selected={isSelected}
                    aria-controls="panel-category-detail"
                    onClick={() => setSelectedId(category.id)}
                    className={`min-h-[44px] px-3.5 py-2.5 lg:py-3 rounded-xl border text-left flex items-center justify-between gap-3 transition-colors ${
                      isSelected
                        ? 'bg-[#E5F4FC] border-[#0284C7] text-sky-950 font-extrabold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-[#9DD2F2] font-bold'
                    }`}
                  >
                    <span className="flex items-center gap-2.5 text-xs sm:text-sm">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#0284C7] text-white'
                            : 'bg-[#F0F8FD] text-sky-700'
                        }`}
                      >
                        <Icon size={15} aria-hidden="true" />
                      </span>
                      <span>{category.label}</span>
                    </span>
                    <ArrowRight
                      size={15}
                      aria-hidden="true"
                      className={`hidden lg:block flex-shrink-0 transition-colors ${
                        isSelected ? 'text-orange-500' : 'text-slate-300'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Clean Focused Detail Panel (Zero Stacked Card Clutter) */}
          <div
            id="panel-category-detail"
            role="tabpanel"
            aria-labelledby={`tab-category-${active.id}`}
            className="lg:col-span-7 rounded-2xl bg-[#F0F8FD] border border-[#BFE3F7] p-6 sm:p-9 lg:p-10 flex flex-col justify-between gap-7"
          >
            <div className="space-y-6">
              <div className="pb-5 border-b border-[#BFE3F7]">
                <p className="text-xs font-bold text-orange-600 mb-1.5">{active.label}</p>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  {active.headline}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{active.summary}</p>
              </div>

              {/* Concrete Examples List */}
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 mb-3">
                  Contoh Kejadian di Lingkungan Sekolah
                </h4>
                <ul className="space-y-3">
                  {active.examples.map((example) => (
                    <li key={example} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <span className="mt-0.5 w-5 h-5 rounded-md bg-white border border-[#9DD2F2] text-sky-700 flex items-center justify-center flex-shrink-0">
                        <Check size={13} className="stroke-[2.75]" aria-hidden="true" />
                      </span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Evidence Advice */}
              <div className="p-4 rounded-xl bg-white border border-[#BFE3F7]">
                <p className="text-xs font-extrabold text-sky-900 mb-1">Panduan Bukti Pendukung</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{active.evidenceTip}</p>
              </div>
            </div>

            {/* Footer Action Strip */}
            <div className="pt-5 border-t border-[#BFE3F7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Laporan diproses khusus oleh Guru BK &amp; Tim TPPK SMP Gelora Depok.
              </p>
              <button
                type="button"
                onClick={onReportClick}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-extrabold transition-colors flex-shrink-0"
              >
                <span>Laporkan Kasus {active.id}</span>
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

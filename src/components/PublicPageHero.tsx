import React from 'react';
import Link from 'next/link';
import {
  HandcraftedPencilIcon,
  HanddrawnDownArrow,
  PencilSketchUnderline,
} from '@/components/icons/LaporAman3DIcons';
import {
  PUBLIC_DOC_TABS,
  type PublicDocHref,
} from '@/lib/legal-support-data';

interface PublicPageHeroProps {
  currentPath: PublicDocHref;
  signatureLabel: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter?: string;
  description: string;
  metaText: string;
  visualTitle: string;
  visualSubtitle: string;
  rightVisual: React.ReactNode;
}

export default function PublicPageHero({
  currentPath,
  signatureLabel,
  titleBefore,
  titleHighlight,
  titleAfter,
  description,
  metaText,
  visualTitle,
  visualSubtitle,
  rightVisual,
}: PublicPageHeroProps) {
  return (
    <section className="relative bg-[#f0f7fb] border-b border-[#BFE3F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 sm:pt-8 sm:pb-12">
        {/* Sibling Static Pages Rounded-XL Switcher (Konsisten dengan Navbar) */}
        <div className="flex justify-center sm:justify-start pb-6 border-b border-[#CBE7F7]">
          <nav
            aria-label="Halaman Informasi Publik"
            className="flex flex-wrap justify-center sm:justify-start items-center gap-1.5 bg-white border border-[#9DD2F2] rounded-2xl p-1.5 shadow-[0_8px_20px_-14px_rgba(2,132,199,0.22)]"
          >
            {PUBLIC_DOC_TABS.map((tab) => {
              const isActive = tab.href === currentPath;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-flex items-center justify-center min-h-[42px] px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#0B132B] text-white shadow-[0_8px_18px_-4px_rgba(11,19,43,0.48),inset_0_1px_1px_rgba(255,255,255,0.24)]'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-[#E5F4FC]'
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Main Hero Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center pt-7 sm:pt-8">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-1.5 text-orange-600 mb-2">
              <HandcraftedPencilIcon className="w-5 h-5 shrink-0 text-orange-500" />
              <span className="font-signature text-2xl sm:text-[1.7rem] font-bold leading-none">
                {signatureLabel}
              </span>
              <HanddrawnDownArrow className="w-5 h-5 shrink-0 text-orange-500" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-slate-900 leading-[1.16]">
              {titleBefore}{' '}
              <span className="relative inline-block">
                <span className="relative z-10">{titleHighlight}</span>
                <PencilSketchUnderline className="absolute -bottom-1.5 left-0 w-full h-3 text-orange-500" />
              </span>
              {titleAfter ? ` ${titleAfter}` : ''}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
              {description}
            </p>

            <p className="mt-4 text-xs sm:text-sm font-semibold text-slate-600">
              {metaText}
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white border border-[#9DD2F2] rounded-2xl p-5 sm:p-6 shadow-[0_14px_34px_-22px_rgba(2,132,199,0.22)] flex items-center gap-4 lg:flex-col lg:items-start">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#E5F4FC] border border-[#BFE3F7] flex items-center justify-center">
                {rightVisual}
              </div>
              <div className="min-w-0">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {visualTitle}
                </h2>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {visualSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

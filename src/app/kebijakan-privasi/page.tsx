import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import PublicPageHero from '@/components/PublicPageHero';
import PrivacyAccessExplorer from '@/components/PrivacyAccessExplorer';
import { Icon3DPillarPrivacy } from '@/components/icons/LaporAman3DIcons';
import {
  PRIVACY_LAST_UPDATED,
  PRIVACY_SECTIONS,
  SCHOOL_ENTITY_NAME,
} from '@/lib/legal-support-data';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi | Lapor Aman SMP Gelora Depok',
  description:
    'Penjelasan resmi mengenai perlindungan identitas siswa, isolasi laporan per akun di Dashboard Siswa, serta akses admin eksklusif Guru BK SMP Gelora Depok.',
};

const TOC_ITEMS = [
  ...PRIVACY_SECTIONS.map((sec) => ({
    id: sec.id,
    number: sec.number,
    label: sec.title,
    shortLabel: sec.shortTitle,
  })),
  {
    id: 'simulasi-akses',
    number: '05',
    label: 'Simulasi Hak Akses Peran',
    shortLabel: 'Hak Akses Peran',
  },
];

export default function KebijakanPrivasiPage() {
  return (
    <div className="bg-[#f0f7fb]">
      <PublicPageHero
        currentPath="/kebijakan-privasi"
        signatureLabel="Kerahasiaan Terlindungi"
        titleBefore="Kebijakan"
        titleHighlight="Privasi"
        description="Komitmen SMP Gelora Depok untuk melindungi identitas pelapor, menjaga isolasi laporan siswa, serta membatasi akses admin hanya untuk Guru BK."
        metaText={`Terakhir diperbarui: ${PRIVACY_LAST_UPDATED} | Berlaku untuk ${SCHOOL_ENTITY_NAME}`}
        visualTitle="Enkripsi & Akses Terbatas"
        visualSubtitle="Siswa hanya melihat laporannya sendiri, dan admin portal hanya dikelola Guru BK."
        rightVisual={<Icon3DPillarPrivacy />}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Compact Mobile Section Jump Grid */}
        <nav
          aria-label="Navigasi cepat pasal kebijakan privasi"
          className="lg:hidden mb-6 bg-white border border-[#9DD2F2] rounded-2xl p-3.5"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-slate-600 mb-2.5">
            Loncat ke Bagian
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {TOC_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex items-center gap-1.5 min-h-[40px] px-3 py-1.5 rounded-xl bg-[#E5F4FC] border border-[#9DD2F2] text-xs font-bold text-slate-900 hover:bg-[#CCEAFC] transition-colors last:col-span-2 sm:last:col-span-1"
              >
                <span className="text-sky-700 tabular-nums shrink-0">{item.number}</span>
                <span className="truncate">{item.shortLabel}</span>
              </a>
            ))}
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Sticky Sidebar TOC */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 space-y-5">
            <nav
              aria-label="Daftar isi kebijakan privasi"
              className="bg-white border border-[#9DD2F2] rounded-2xl p-5 shadow-[0_14px_34px_-24px_rgba(2,132,199,0.2)]"
            >
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 pb-3 border-b border-[#E5F4FC]">
                Daftar Isi Dokumen
              </h2>
              <ol className="mt-3 space-y-1">
                {TOC_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex items-center gap-3 min-h-[44px] px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-[#E5F4FC]/70 hover:text-slate-950 transition-colors"
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#E5F4FC] border border-[#9DD2F2] text-sky-900 text-xs font-bold flex items-center justify-center shrink-0 tabular-nums">
                        {item.number}
                      </span>
                      <span className="leading-snug">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="bg-white border border-[#9DD2F2] rounded-2xl p-5 shadow-[0_14px_34px_-24px_rgba(2,132,199,0.16)]">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" aria-hidden="true" />
                <span>Masih Ragu Soal Kerahasiaan?</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Anda dapat menghubungi Guru BK terlebih dahulu melalui Pusat
                Bantuan sebelum mengirim laporan resmi.
              </p>
              <Link
                href="/pusat-bantuan"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold shadow-[0_8px_18px_-4px_rgba(249,115,22,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] transition-all"
              >
                <span>Buka Pusat Bantuan</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>

          {/* Editorial Content & Interactive Privacy Matrix */}
          <div className="lg:col-span-8 space-y-8">
            <article className="bg-white border border-[#9DD2F2] rounded-2xl shadow-[0_14px_34px_-24px_rgba(2,132,199,0.2)] divide-y divide-[#E5F4FC]">
              {PRIVACY_SECTIONS.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`heading-${section.id}`}
                  className="p-6 sm:p-8 scroll-mt-24"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="shrink-0 w-9 h-9 rounded-xl bg-[#E5F4FC] border border-[#9DD2F2] text-sky-900 text-sm font-bold flex items-center justify-center tabular-nums mt-0.5">
                      {section.number}
                    </span>
                    <div>
                      <h2
                        id={`heading-${section.id}`}
                        className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug"
                      >
                        {section.title}
                      </h2>
                      <p className="mt-1 text-sm text-slate-600">
                        {section.summary}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-slate-700 leading-relaxed text-[15px] sm:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bullets && (
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {section.bullets.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-xl bg-[#F0F8FD] border border-[#BFE3F7] p-4"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2
                              className="w-4 h-4 text-sky-600 shrink-0"
                              aria-hidden="true"
                            />
                            <h3 className="text-sm font-bold text-slate-900">
                              {item.label}
                            </h3>
                          </div>
                          <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.note && (
                    <div className="mt-5 rounded-xl bg-[#E5F4FC] border border-[#9DD2F2] p-4 flex items-start gap-3 text-sm text-slate-900 font-medium leading-relaxed">
                      <ShieldCheck
                        className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{section.note}</span>
                    </div>
                  )}
                </section>
              ))}
            </article>

            {/* Interactive Role-Based Data Access Explorer */}
            <PrivacyAccessExplorer />

            {/* High-Contrast Footer Accountability Note */}
            <div className="bg-white border border-[#9DD2F2] rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Kepatuhan Tata Kelola Data Sekolah
                </h2>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed max-w-xl">
                  Kebijakan ini disusun khusus untuk ekosistem pelaporan
                  internal {SCHOOL_ENTITY_NAME} dan dikelola langsung oleh Guru
                  BK.
                </p>
              </div>
              <Link
                href="/syarat-ketentuan"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-[#E5F4FC] hover:bg-[#CCEAFC] border border-[#9DD2F2] text-slate-900 text-sm font-bold shrink-0 transition-colors"
              >
                <span>Lihat Syarat & Ketentuan</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

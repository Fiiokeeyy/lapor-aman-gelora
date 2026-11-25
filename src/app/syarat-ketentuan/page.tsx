import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import PublicPageHero from '@/components/PublicPageHero';
import ReportToneComparison from '@/components/ReportToneComparison';
import { Icon3DRegulationHub } from '@/components/icons/LaporAman3DIcons';
import {
  SCHOOL_ENTITY_NAME,
  TERMS_LAST_UPDATED,
  TERMS_SECTIONS,
} from '@/lib/legal-support-data';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan | Lapor Aman SMP Gelora Depok',
  description:
    'Pedoman penggunaan, kejujuran laporan, etika penulisan, serta batasan tanggung jawab layanan pengaduan Lapor Aman SMP Gelora Depok.',
};

const TOC_ITEMS = [
  ...TERMS_SECTIONS.map((sec) => ({
    id: sec.id,
    number: sec.number,
    label: sec.title,
  })),
  {
    id: 'contoh-penulisan',
    number: '05',
    label: 'Simulasi Penulisan Laporan',
  },
];

export default function SyaratKetentuanPage() {
  return (
    <div className="bg-[#f0f7fb]">
      <PublicPageHero
        currentPath="/syarat-ketentuan"
        signatureLabel="Pedoman Pelaporan Adil"
        titleBefore="Syarat &"
        titleHighlight="Ketentuan"
        description="Aturan dasar penggunaan portal Lapor Aman untuk menjaga akurasi penanganan kasus, keadilan bagi seluruh warga sekolah, serta kenyamanan proses mediasi."
        metaText={`Terakhir diperbarui: ${TERMS_LAST_UPDATED} | Dikelola oleh Guru BK ${SCHOOL_ENTITY_NAME}`}
        visualTitle="Standar Regulasi & Etika"
        visualSubtitle="Selaras dengan tata tertib sekolah dan pembinaan peserta didik."
        rightVisual={<Icon3DRegulationHub />}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Mobile Section Jump Strip */}
        <nav
          aria-label="Navigasi cepat pasal syarat dan ketentuan"
          className="lg:hidden mb-6 bg-white border border-[#9DD2F2] rounded-2xl p-4"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-slate-600 mb-3">
            Loncat ke Ketentuan
          </p>
          <div className="flex flex-wrap gap-2">
            {TOC_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex items-center gap-1.5 min-h-[40px] px-3 py-1.5 rounded-xl bg-[#E5F4FC] border border-[#9DD2F2] text-xs font-bold text-slate-900 hover:bg-[#CCEAFC] transition-colors"
              >
                <span className="text-sky-700 tabular-nums">{item.number}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Sticky Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 space-y-5">
            <nav
              aria-label="Daftar isi syarat dan ketentuan"
              className="bg-white border border-[#9DD2F2] rounded-2xl p-5 shadow-[0_14px_34px_-24px_rgba(2,132,199,0.2)]"
            >
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 pb-3 border-b border-[#E5F4FC]">
                Daftar Pasal Ketentuan
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
                <FileText className="w-4 h-4 text-orange-500 shrink-0" aria-hidden="true" />
                <span>Sudah Siap Mengirim Laporan?</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Pastikan kronologi jujur dan sesuai fakta agar Guru BK dapat
                segera menindaklanjuti pengaduan Anda.
              </p>
              <Link
                href="/lapor"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold shadow-[0_8px_18px_-4px_rgba(249,115,22,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] transition-all"
              >
                <span>Buka Formulir Lapor</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>

          {/* Main Legal Sections + Interactive Comparator */}
          <div className="lg:col-span-8 space-y-8">
            <article className="bg-white border border-[#9DD2F2] rounded-2xl shadow-[0_14px_34px_-24px_rgba(2,132,199,0.2)] divide-y divide-[#E5F4FC]">
              {TERMS_SECTIONS.map((section) => (
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
                      <p className="mt-1.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                        {section.lead}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 rounded-xl bg-[#F0F8FD] border border-[#BFE3F7] p-4 text-sm sm:text-[15px] text-slate-700 leading-relaxed"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-sky-600 shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {section.highlight && (
                    <div className="mt-5 rounded-xl bg-[#E5F4FC] border border-[#9DD2F2] p-4 flex items-start gap-3 text-sm text-slate-900 font-medium leading-relaxed">
                      <CheckCircle2
                        className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{section.highlight}</span>
                    </div>
                  )}
                </section>
              ))}
            </article>

            {/* Interactive Good vs Rejected Report Tone Comparator */}
            <ReportToneComparison />

            {/* Agreement Confirmation Banner */}
            <div className="bg-white border border-[#9DD2F2] rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Persetujuan Penggunaan Layanan
                </h2>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed max-w-xl">
                  Dengan menggunakan aplikasi Lapor Aman, Anda menyetujui seluruh
                  ketentuan kejujuran dan etika pelaporan yang ditetapkan oleh{' '}
                  {SCHOOL_ENTITY_NAME}.
                </p>
              </div>
              <Link
                href="/lapor"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold shadow-[0_8px_18px_-4px_rgba(249,115,22,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] shrink-0 transition-all"
              >
                <span>Buat Laporan Sekarang</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Mail,
  MessageCircle,
  Phone,
  AlertOctagon,
  ExternalLink,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import PublicPageHero from '@/components/PublicPageHero';
import HelpTriageSolver from '@/components/HelpTriageSolver';
import { Icon3DCounseling } from '@/components/icons/LaporAman3DIcons';
import {
  EMERGENCY_CRISIS_CONTACTS,
  OFFICIAL_HELP_CHANNELS,
  SCHOOL_ENTITY_NAME,
  type OfficialHelpChannel,
} from '@/lib/legal-support-data';

export const metadata: Metadata = {
  title: 'Pusat Bantuan | Lapor Aman SMP Gelora Depok',
  description:
    'Panduan cepat mengatasi kendala akun, unggah bukti pengaduan, saluran resmi Guru BK SMP Gelora Depok, serta kontak layanan darurat 112 dan SAPA 129.',
};

function renderChannelIcon(id: OfficialHelpChannel['id']) {
  if (id === 'email') {
    return <Mail className="w-5 h-5" aria-hidden="true" />;
  }
  if (id === 'whatsapp-bk') {
    return <MessageCircle className="w-5 h-5" aria-hidden="true" />;
  }
  return <Phone className="w-5 h-5" aria-hidden="true" />;
}

export default function PusatBantuanPage() {
  return (
    <div className="bg-[#f0f7fb]">
      <PublicPageHero
        currentPath="/pusat-bantuan"
        signatureLabel="Dukungan Ramah Siswa"
        titleBefore="Pusat"
        titleHighlight="Bantuan"
        titleAfter="Siswa & Sekolah"
        description={`Temukan solusi cepat kendala akun, panduan mengunggah bukti laporan, serta saluran komunikasi resmi dengan Guru BK ${SCHOOL_ENTITY_NAME}.`}
        metaText={`Jam Layanan Sekolah: Senin - Jumat (07.30 - 15.30 WIB) | ${SCHOOL_ENTITY_NAME}`}
        visualTitle="Pendampingan Konselor BK"
        visualSubtitle="Tersedia secara daring maupun tatap muka tertutup di Ruang BK Gedung B."
        rightVisual={<Icon3DCounseling />}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-10">
        {/* 1. Interactive Self-Service Issue Triage */}
        <HelpTriageSolver />

        {/* 2. Official School Contact Channels */}
        <section aria-labelledby="saluran-resmi-heading">
          <div className="mb-5">
            <h2
              id="saluran-resmi-heading"
              className="text-xl sm:text-2xl font-bold text-slate-900"
            >
              Saluran Resmi {SCHOOL_ENTITY_NAME}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600">
              Hubungi petugas sekolah melalui kanal resmi berikut apabila
              membutuhkan verifikasi akun atau pendampingan langsung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {OFFICIAL_HELP_CHANNELS.map((channel) => (
              <div
                key={channel.id}
                className="bg-white border border-[#9DD2F2] rounded-2xl p-6 shadow-[0_14px_34px_-24px_rgba(2,132,199,0.18)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#E5F4FC] border border-[#9DD2F2] text-sky-600 flex items-center justify-center shrink-0">
                      {renderChannelIcon(channel.id)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-sky-900">
                        {channel.category}
                      </p>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {channel.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-base font-bold text-slate-900 break-words">
                    {channel.value}
                  </p>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {channel.scheduleOrLocation}
                  </p>
                </div>

                <a
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                  className="mt-5 inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#E5F4FC] hover:bg-[#CCEAFC] border border-[#9DD2F2] text-slate-900 text-sm font-bold transition-colors"
                >
                  <span>{channel.actionLabel}</span>
                  {channel.external ? (
                    <ExternalLink className="w-4 h-4 text-sky-700" aria-hidden="true" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-sky-700" aria-hidden="true" />
                  )}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Solid Red Emergency Crisis Card */}
        <section
          aria-labelledby="darurat-heading"
          className="rounded-3xl sm:rounded-[2rem] bg-red-600 border border-red-700 text-white p-7 sm:p-10 shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-700 border border-red-500 text-white font-bold text-xs sm:text-sm">
                <AlertOctagon className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
                <span>Layanan Darurat & Ancaman Keselamatan (24 Jam)</span>
              </div>
              <h2
                id="darurat-heading"
                className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight"
              >
                Sedang Menghadapi Bahaya Fisik atau Ancaman Mendesak?
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-red-50 leading-relaxed font-medium">
                Jika kejadian berlangsung saat jam sekolah dan mengancam
                keselamatan jiwa, segera temui guru piket, wali kelas, atau
                petugas keamanan sekolah. Di luar jam sekolah, akses hotline
                nasional berikut:
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              {EMERGENCY_CRISIS_CONTACTS.map((contact) => {
                const isPrimary = contact.variant === 'primary-crisis';
                return (
                  <a
                    key={contact.id}
                    href={contact.href}
                    target={contact.external ? '_blank' : undefined}
                    rel={contact.external ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-xl text-sm font-extrabold transition-colors active:scale-95 ${
                      isPrimary
                        ? 'bg-white hover:bg-red-50 text-red-700 shadow-sm'
                        : 'bg-red-700 hover:bg-red-800 text-white border-2 border-white shadow-sm'
                    }`}
                  >
                    <span>{contact.label}</span>
                    {contact.external ? (
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <Phone className="w-4 h-4" aria-hidden="true" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Solid Telur Asin CTA Card (Identik dengan Bottom CTA Card di Landing Page) */}
        <section
          aria-labelledby="bridge-faq-heading"
          className="rounded-3xl sm:rounded-[2.5rem] bg-[#CCEAFC] border border-[#9DD2F2] p-8 sm:p-12 shadow-md flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sky-900 text-xs sm:text-sm font-bold">
              <HelpCircle className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
              <span>Pertanyaan Umum Seputar Alur Lapor</span>
            </div>
            <h2
              id="bridge-faq-heading"
              className="mt-2 text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Ingin Mengetahui{' '}
              <span className="text-orange-500">
                Jawaban Cepat dari Siswa Lain?
              </span>
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Telusuri daftar tanya jawab lengkap mengenai proses penanganan
              kasus, keamanan identitas, serta dukungan konseling di halaman
              FAQ.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-white hover:bg-sky-50 text-sky-700 text-sm sm:text-base font-extrabold shadow-sm transition-colors active:scale-95"
            >
              <span>Baca Halaman FAQ</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/lapor"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-extrabold shadow-[0_8px_18px_-4px_rgba(249,115,22,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] transition-all active:scale-95"
            >
              <span>Kirim Laporan</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

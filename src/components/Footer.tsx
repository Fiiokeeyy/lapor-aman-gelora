'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FOOTER_EXPLORE_ITEMS } from '@/lib/navigation';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Globe,
} from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Footer = () => {
  const pathname = usePathname();

  // Daftar rute di mana footer disembunyikan
  const shouldHide =
    pathname?.startsWith('/admin') ||
    pathname?.startsWith('/siswa/login') ||
    pathname?.startsWith('/siswa/daftar') ||
    pathname === '/login';

  if (shouldHide) return null;

  return (
    <footer className="bg-[#0B132B] text-white pt-16 pb-12 mt-auto border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Top Header Row with Orange Signature Brand & Right Copyright (Original Palette) */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-10 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <span className="font-signature text-5xl sm:text-6xl text-orange-500 font-bold tracking-tight select-none">
              SMP Gelora
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium">
            Hak Cipta &copy; {new Date().getFullYear()} Lapor Aman by SMP Gelora Depok. Hak Cipta Dilindungi Undang-Undang.
          </p>
        </div>

        {/* 4-Column Grid: Brand Summary + Jelajahi + Dukungan & Legal + Hubungi Kami */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-slate-800/80">
          
          {/* Kolom 1: Brand Info (4 Kolom) - Logo Sekolah Ghama Lebih Besar & Terlihat Jelas */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-16 h-14 sm:w-20 sm:h-16 flex-shrink-0">
                <Image
                  src="/LOGO-sekolahGHAMA-white.png"
                  alt="Logo Sekolah Ghama"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <div className="border-l border-slate-700/80 pl-3.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none block">
                  LAPOR <span className="text-orange-500">AMAN</span>
                </span>
                <span className="text-xs text-slate-400 font-bold tracking-wider uppercase mt-1 block">
                  SMP Gelora Depok
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Platform pelaporan perundungan yang aman, terpercaya, dan menjamin kerahasiaan siswa di lingkungan SMP Gelora Depok.
            </p>

            <div className="pt-2">
              <span className="text-xs text-slate-400 font-medium">Target Domain: </span>
              <span className="text-xs font-bold text-sky-400">laporaman.smpgelora.sch.id</span>
            </div>
          </div>

          {/* Kolom 2: Jelajahi (3 Kolom) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Jelajahi
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              {FOOTER_EXPLORE_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-orange-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Dukungan & Legalitas (2.5 Kolom) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Dukungan
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <Link href="/kebijakan-privasi" className="hover:text-orange-400 transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan" className="hover:text-orange-400 transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/pusat-bantuan" className="hover:text-orange-400 transition-colors">
                  Pusat Bantuan
                </Link>
              </li>
              <li>
                <Link href="/siswa/daftar" className="hover:text-orange-400 transition-colors">
                  Daftar Akun
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-orange-400 transition-colors">
                  Masuk Akun
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Hubungi Kami & Saluran Darurat (2.5 Kolom) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Hubungi Kami
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>Jl. Raya Grogol, Kec. Limo, Kota Depok, Jawa Barat 16512</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>(021) 775-4635 / BK SMP Gelora</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>info@sekolahghama.com</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/smpgeloradepok/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 transition-colors"
                title="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://sekolahghama.com/smp-gelora/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-600 transition-colors"
                title="Website Resmi"
              >
                <Globe size={16} />
              </a>
              <a
                href="https://wa.me/6282155667735"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors"
                title="WhatsApp Layanan Sekolah"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>
            &copy; {new Date().getFullYear()} LAPOR AMAN - SMP Gelora. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/kebijakan-privasi" className="hover:text-orange-400 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/syarat-ketentuan" className="hover:text-orange-400 transition-colors">
              Ketentuan Layanan
            </Link>
            <Link href="/#tim" className="hover:text-orange-400 transition-colors">
              Tim Pengembang
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

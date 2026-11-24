import Link from 'next/link';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-[#f0f7fb] text-center">
      <div className="max-w-md p-8 sm:p-10 rounded-2xl bg-white border border-[#BFE3F7] shadow-sm">
        <div className="w-16 h-16 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mx-auto mb-5">
          <ShieldAlert size={32} />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Halaman Tidak Ditemukan</h1>
        <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
          Halaman yang Anda tuju mungkin telah dipindahkan atau tautan yang dimasukkan tidak valid.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-all"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </div>
  );
}

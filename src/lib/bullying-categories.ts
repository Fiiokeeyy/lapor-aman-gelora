export type BullyingCategoryId = 'Fisik' | 'Verbal' | 'Siber' | 'Sosial' | 'Emosional';

export interface BullyingCategoryDetail {
  id: BullyingCategoryId;
  label: string;
  headline: string;
  summary: string;
  examples: string[];
  evidenceTip: string;
}

export const BULLYING_CATEGORIES: readonly BullyingCategoryDetail[] = [
  {
    id: 'Fisik',
    label: 'Perundungan Fisik',
    headline: 'Kekerasan langsung terhadap tubuh atau barang milik siswa',
    summary:
      'Tindakan menyakiti secara fisik maupun merusak barang pribadi bukanlah candaan wajar dan wajib segera ditangani sekolah.',
    examples: [
      'Memukul, mendorong, menendang, atau menjegal teman di koridor dan lapangan sekolah.',
      'Merampas, merusak, atau menyembunyikan tas, buku, dan barang pribadi secara paksa.',
    ],
    evidenceTip: 'Catat lokasi dan waktu kejadian, atau unggah foto barang yang rusak serta saksi mata jika ada.',
  },
  {
    id: 'Verbal',
    label: 'Perundungan Verbal',
    headline: 'Ucapan yang merendahkan, mengancam, atau mempermalukan',
    summary:
      'Kata-kata kasar yang diucapkan berulang kali dapat melukai rasa percaya diri siswa sama seriusnya dengan kekerasan fisik.',
    examples: [
      'Menghina bentuk fisik, nama orang tua, maupun memberi julukan yang mempermalukan di kelas.',
      'Mengancam, membentak, atau memaksa siswa melakukan sesuatu dengan intimidasi lisan.',
    ],
    evidenceTip: 'Tuliskan kronologi ucapan, siapa yang berada di sekitar lokasi, dan seberapa sering kejadian berlangsung.',
  },
  {
    id: 'Siber',
    label: 'Perundungan Siber',
    headline: 'Teror, ejekan, atau penyebaran konten di media digital',
    summary:
      'Perundungan melalui grup chat dan media sosial tetap termasuk tanggung jawab pembinaan dan perlindungan siswa sekolah.',
    examples: [
      'Menghina atau mengucilkan teman secara beramai-ramai di grup WhatsApp kelas maupun komentar media sosial.',
      'Menyebarkan foto, tangkapan layar, atau rumor memalukan tanpa izin pemiliknya.',
    ],
    evidenceTip: 'Simpan dan unggah tangkapan layar (screenshot) percakapan atau unggahan sebelum pesan dihapus pelaku.',
  },
  {
    id: 'Sosial',
    label: 'Perundungan Sosial',
    headline: 'Pengucilan terencana dan perusakan hubungan pertemanan',
    summary:
      'Membuat seorang siswa sengaja diisolasi dari pergaulan atau kerja kelompok berdampak langsung pada ketenangan belajarnya.',
    examples: [
      'Mengajak siswa lain untuk menjauhi, mendiamkan, atau menolak bekerja sama dengan seseorang.',
      'Menyebarkan hasutan di lingkungan sekolah agar korban dijauhi teman-teman sekelas.',
    ],
    evidenceTip: 'Jelaskan situasi pengucilan yang dialami serta sejak kapan pola tersebut mulai terjadi.',
  },
  {
    id: 'Emosional',
    label: 'Tekanan Emosional',
    headline: 'Tekanan psikologis, pemalakan mental, atau manipulasi rasa takut',
    summary:
      'Bila seseorang merasa takut pergi ke sekolah, tertekan terus-menerus, atau dipaksa menurut di bawah ancaman halus, itu patut dilaporkan.',
    examples: [
      'Pemalakan uang jajan atau pemaksaan mengerjakan tugas milik siswa lain berulang kali.',
      'Tatapan mengintimidasi dan tekanan batin yang membuat siswa enggan keluar kelas saat istirahat.',
    ],
    evidenceTip: 'Sampaikan perasaan tertekan yang Anda rasakan; Guru BK mendengarkan kronologi tanpa menyalahkan pelapor.',
  },
];

export function getCategoryById(id: string): BullyingCategoryDetail {
  return BULLYING_CATEGORIES.find((item) => item.id === id) ?? BULLYING_CATEGORIES[0];
}

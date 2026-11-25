export type PublicDocHref =
  | '/kebijakan-privasi'
  | '/syarat-ketentuan'
  | '/pusat-bantuan';

export interface PublicDocTab {
  label: string;
  href: PublicDocHref;
}

export const PUBLIC_DOC_TABS: readonly PublicDocTab[] = [
  { label: 'Kebijakan Privasi', href: '/kebijakan-privasi' },
  { label: 'Syarat & Ketentuan', href: '/syarat-ketentuan' },
  { label: 'Pusat Bantuan', href: '/pusat-bantuan' },
];

export const PRIVACY_LAST_UPDATED = '30 November 2025';
export const TERMS_LAST_UPDATED = '30 November 2025';
export const SCHOOL_ENTITY_NAME = 'SMP Gelora Depok';
export const PLATFORM_NAME = 'Lapor Aman (SIP-B)';

export interface PrivacyBullet {
  label: string;
  detail: string;
}

export interface PrivacySection {
  id: string;
  number: string;
  title: string;
  summary: string;
  paragraphs: string[];
  bullets?: PrivacyBullet[];
  note?: string;
}

export const PRIVACY_SECTIONS: readonly PrivacySection[] = [
  {
    id: 'pendahuluan',
    number: '01',
    title: 'Pendahuluan & Cakupan Sistem',
    summary:
      'Komitmen SMP Gelora Depok menjaga kerahasiaan identitas pelapor dan data kasus perundungan.',
    paragraphs: [
      'Selamat datang di Sistem Informasi Pengaduan Bullying (Lapor Aman) SMP Gelora Depok. Kami menyadari bahwa melaporkan perundungan membutuhkan keberanian dan rasa aman, sehingga privasi serta perlindungan data Anda menjadi prioritas utama layanan ini.',
      'Dokumen ini menjelaskan bagaimana informasi yang Anda kirimkan dikumpulkan, dibatasi aksesnya secara ketat, dan ditangani langsung oleh Guru BK SMP Gelora Depok.',
    ],
  },
  {
    id: 'informasi-dikumpulkan',
    number: '02',
    title: 'Informasi yang Kami Kumpulkan',
    summary:
      'Hanya data inti akun masuk dan rincian kejadian yang diperlukan untuk menindaklanjuti laporan.',
    paragraphs: [
      'Untuk mendukung penanganan kasus yang akurat sekaligus menjaga kenyamanan siswa saat melapor, sistem hanya meminta data berikut:',
    ],
    bullets: [
      {
        label: 'Identitas Akun Siswa',
        detail:
          'Nama lengkap, kelas, dan alamat email yang digunakan saat mendaftar atau masuk ke portal Lapor Aman.',
      },
      {
        label: 'Detail Pengaduan',
        detail:
          'Kategori perundungan, tanggal kejadian, lokasi di lingkungan sekolah, kronologi peristiwa, serta pihak yang terlibat.',
      },
      {
        label: 'Lampiran Bukti Pendukung',
        detail:
          'Foto atau tangkapan layar yang Anda unggah secara sukarela guna membantu proses verifikasi oleh Guru BK.',
      },
      {
        label: 'Catatan Waktu Sistem',
        detail:
          'Waktu pembuatan dan pembaruan status laporan untuk memantau ketepatan respons penanganan di sekolah.',
      },
    ],
  },
  {
    id: 'keamanan-kerahasiaan',
    number: '03',
    title: 'Keamanan & Kerahasiaan Data',
    summary:
      'Setiap siswa hanya dapat melihat laporannya sendiri, dan akses admin sistem hanya dipegang oleh Guru BK.',
    paragraphs: [
      'Seluruh laporan disimpan secara terstruktur di infrastruktur Cloud Firestore dengan aturan isolasi akses berbasis peran (Role-Based Access Control).',
      'Di Dashboard Siswa, akun pelapor hanya dapat melihat riwayat serta status laporan miliknya sendiri. Siswa lain sama sekali tidak dapat melihat, mencari, maupun mengetahui keberadaan laporan milik siswa lainnya.',
    ],
    note: 'Satu-satunya akses admin pada portal Lapor Aman hanyalah Guru Bimbingan Konseling (BK) SMP Gelora Depok. Identitas pelapor dan detail kasus tidak dibuka untuk akun siswa lain ataupun pihak luar.',
  },
  {
    id: 'penggunaan-informasi',
    number: '04',
    title: 'Tujuan Penggunaan Informasi',
    summary:
      'Pemanfaatan data murni untuk perlindungan korban, mediasi, dan pemetaan keamanan sekolah.',
    paragraphs: [
      'Informasi yang terkumpul melalui portal Lapor Aman hanya digunakan oleh Guru BK SMP Gelora Depok untuk keperluan penanganan berikut:',
    ],
    bullets: [
      {
        label: 'Penyelidikan & Mediasi Terarah',
        detail:
          'Memverifikasi fakta kejadian secara tertutup serta menjadwalkan pendampingan atau mediasi bersama konselor BK.',
      },
      {
        label: 'Perlindungan Pelapor & Saksi',
        detail:
          'Memastikan pelapor mendapatkan pendampingan aman dan terhindar dari tindakan balasan di lingkungan sekolah.',
      },
      {
        label: 'Evaluasi Keamanan Sekolah',
        detail:
          'Membantu Guru BK memetakan titik rawan perundungan di sekolah agar langkah pencegahan berjalan lebih efektif.',
      },
    ],
  },
];

export type AccessRoleId = 'siswa-pelapor' | 'siswa-lain' | 'guru-bk';

export interface RoleFieldPermission {
  field: string;
  status: 'Tersamar' | 'Penuh';
  detail: string;
}

export interface RoleVisibilityRule {
  id: AccessRoleId;
  label: string;
  badge: string;
  accessSummary: string;
  fields: RoleFieldPermission[];
}

export const ROLE_VISIBILITY_RULES: readonly RoleVisibilityRule[] = [
  {
    id: 'siswa-pelapor',
    label: 'Siswa Pelapor (Sendiri)',
    badge: 'Hanya Laporan Milik Sendiri',
    accessSummary:
      'Di Dashboard Siswa, Anda hanya dapat melihat riwayat, kronologi, serta pembaruan status dari laporan yang Anda kirimkan sendiri.',
    fields: [
      {
        field: 'Daftar Laporan Sendiri',
        status: 'Penuh',
        detail: 'Dapat memantau progres kasus dan catatan tindak lanjut Guru BK.',
      },
      {
        field: 'Laporan Milik Siswa Lain',
        status: 'Tersamar',
        detail: 'Tidak pernah tampil di dashboard akun siswa mana pun.',
      },
      {
        field: 'Bukti Lampiran Sendiri',
        status: 'Penuh',
        detail: 'Tersimpan privat untuk keperluan peninjauan laporan pribadi.',
      },
    ],
  },
  {
    id: 'siswa-lain',
    label: 'Siswa Lain',
    badge: 'Tertutup Total',
    accessSummary:
      'Siswa lain sama sekali tidak memiliki akses untuk melihat identitas pelapor, isi kronologi, maupun laporan siswa lain di seluruh portal.',
    fields: [
      {
        field: 'Nama, Kelas & Email Pelapor',
        status: 'Tersamar',
        detail: 'Tertutup penuh dari seluruh akun siswa lain.',
      },
      {
        field: 'Kronologi & Bukti Foto',
        status: 'Tersamar',
        detail: 'Diblokir langsung melalui aturan otorisasi basis data.',
      },
      {
        field: 'Status Penanganan Kasus',
        status: 'Tersamar',
        detail: 'Hanya pelapor asli dan Admin Guru BK yang mengetahuinya.',
      },
    ],
  },
  {
    id: 'guru-bk',
    label: 'Admin (Hanya Guru BK)',
    badge: 'Satu-satunya Otoritas Admin',
    accessSummary:
      'Hanya Guru Bimbingan Konseling (BK) SMP Gelora Depok yang memegang akun admin untuk membuka, meninjau, dan menindaklanjuti seluruh laporan masuk.',
    fields: [
      {
        field: 'Nama, Kelas & Email Pelapor',
        status: 'Penuh',
        detail: 'Digunakan Guru BK untuk menghubungi pelapor dan penjadwalan konseling.',
      },
      {
        field: 'Kronologi & Bukti Pendukung',
        status: 'Penuh',
        detail: 'Ditelaah secara tertutup sebagai dasar verifikasi dan mediasi.',
      },
      {
        field: 'Pembaruan Status & Catatan',
        status: 'Penuh',
        detail: 'Guru BK memperbarui status laporan agar pelapor terinformasi.',
      },
    ],
  },
];

export function getRoleVisibilityRule(id: AccessRoleId): RoleVisibilityRule {
  return (
    ROLE_VISIBILITY_RULES.find((rule) => rule.id === id) ??
    ROLE_VISIBILITY_RULES[0]
  );
}

export interface TermsSection {
  id: string;
  number: string;
  title: string;
  lead: string;
  points: string[];
  highlight?: string;
}

export const TERMS_SECTIONS: readonly TermsSection[] = [
  {
    id: 'kejujuran-laporan',
    number: '01',
    title: 'Kejujuran & Akurasi Laporan',
    lead: 'Setiap pengaduan wajib disampaikan berdasarkan kejadian nyata dengan iktikad baik untuk mencari penyelesaian.',
    points: [
      'Cantumkan waktu, lokasi, serta kronologi kejadian sedetail mungkin agar Guru BK dapat memverifikasi laporan secara objektif.',
      'Unggah bukti pendukung asli tanpa rekayasa, suntingan menyesatkan, atau manipulasi gambar.',
      'Dilarang keras membuat laporan palsu, menjebak siswa lain, atau menyebarkan fitnah melalui portal pengaduan.',
    ],
  },
  {
    id: 'etika-bahasa',
    number: '02',
    title: 'Etika Bahasa & Penulisan',
    lead: 'Gunakan bahasa Indonesia yang sopan, lugas, dan berfokus pada peristiwa meskipun situasi sedang emosional.',
    points: [
      'Hindari kata-kata kasar, cacian, makian, maupun ancaman balik terhadap pihak terlapor di kolom kronologi.',
      'Fokuskan cerita pada tindakan atau ucapan yang dialami, bukan pada penghinaan pribadi atau fisik seseorang.',
    ],
  },
  {
    id: 'hak-sanksi',
    number: '03',
    title: 'Ketentuan Peninjauan & Sanksi',
    lead: 'Guru BK SMP Gelora Depok berhak memverifikasi kelayakan laporan dan menindaklanjuti penyalahgunaan portal sesuai tata tertib.',
    points: [
      'Admin Guru BK berhak menolak atau mengarsipkan laporan yang tidak memiliki dasar fakta, bersifat spam, atau melanggar ketentuan hukum seperti muatan SARA dan konten asusila.',
      'Pengiriman laporan palsu yang terbukti sengaja merugikan nama baik orang lain dapat dikenakan pembinaan serta sanksi kedisiplinan sesuai peraturan sekolah.',
    ],
    highlight:
      'Semua laporan valid tetap dijamin kerahasiaannya meskipun masih dalam tahap klarifikasi awal oleh Guru BK.',
  },
  {
    id: 'batasan-layanan',
    number: '04',
    title: 'Batasan Sistem & Konseling Tatap Muka',
    lead: 'Lapor Aman adalah gerbang pelaporan digital yang terhubung langsung dengan penanganan luring di ruang BK.',
    points: [
      'Sistem digital ini membantu pencatatan dan pemantauan awal, namun penyelesaian masalah maupun pemulihan psikologis tetap memerlukan sesi konsultasi atau mediasi tatap muka bersama Guru BK.',
      'Dalam kondisi bahaya fisik mendadak yang membutuhkan pertolongan segera, siswa atau orang tua harus langsung melapor ke guru piket, satpam sekolah, atau layanan darurat 112.',
    ],
  },
];

export type ReportToneId = 'diterima' | 'ditolak';

export interface ReportToneExample {
  id: ReportToneId;
  label: string;
  verdict: string;
  sampleTitle: string;
  sampleBody: string;
  reasons: string[];
}

export const REPORT_TONE_EXAMPLES: readonly ReportToneExample[] = [
  {
    id: 'diterima',
    label: 'Laporan Objektif (Diterima)',
    verdict: 'Memenuhi standar kronologi dan langsung diproses BK',
    sampleTitle: 'Intimidasi & Pemalakan di Area Kantin Belakang',
    sampleBody:
      'Pada hari Selasa pukul 09.40 WIB saat jam istirahat pertama di kantin belakang, dua siswa kelas 8B meminta uang jajan secara paksa dan mengancam akan merusak tas saya jika tidak memberi. Kejadian disaksikan oleh teman sekelas saya.',
    reasons: [
      'Menyebutkan hari, jam, dan lokasi spesifik di area sekolah.',
      'Menjelaskan peristiwa secara faktual tanpa kata makian.',
      'Menyertakan informasi saksi untuk membantu verifikasi tertutup oleh Guru BK.',
    ],
  },
  {
    id: 'ditolak',
    label: 'Fitnah / Kata Kasar (Ditolak)',
    verdict: 'Tidak jelas kronologinya dan melanggar etika penulisan',
    sampleTitle: 'Anak kelas sebelah rese banget!!',
    sampleBody:
      'Si X orangnya nyebelin dan kasar banget pokoknya kasih skor pelanggaran aja sekarang juga, kalau nggak aku balas sendiri di luar gerbang nanti pulang sekolah.',
    reasons: [
      'Tidak memuat waktu, lokasi, maupun kronologi tindakan perundungan.',
      'Mengandung ancaman balasan dan kalimat emosional tanpa fakta.',
      'Berpotensi menjadi aduan tidak berdasar yang menyulitkan proses mediasi.',
    ],
  },
];

export function getReportToneExample(id: ReportToneId): ReportToneExample {
  return (
    REPORT_TONE_EXAMPLES.find((example) => example.id === id) ??
    REPORT_TONE_EXAMPLES[0]
  );
}

export type HelpTriageId =
  | 'kendala-masuk'
  | 'unggah-bukti'
  | 'konseling-langsung';

export interface HelpTriageSolution {
  id: HelpTriageId;
  label: string;
  issueTitle: string;
  summary: string;
  steps: string[];
  actionLabel: string;
  actionHref: string;
}

export const HELP_TRIAGE_SOLUTIONS: readonly HelpTriageSolution[] = [
  {
    id: 'kendala-masuk',
    label: 'Lupa Akun / Sulit Masuk',
    issueTitle: 'Mengatasi kendala login akun siswa Lapor Aman',
    summary:
      'Jika Anda lupa kata sandi atau akun belum aktif saat ingin mengirim pengaduan, ikuti langkah pemulihan berikut:',
    steps: [
      'Pastikan Anda masuk menggunakan alamat email dan kata sandi yang didaftarkan saat registrasi akun.',
      'Gunakan fitur lupa kata sandi di halaman Masuk untuk mengirim tautan pemulihan ke kotak masuk email Anda.',
      'Jika email belum terdaftar atau tidak bisa diakses, hubungi Guru BK melalui WhatsApp layanan BK untuk bantuan aktivasi ulang.',
    ],
    actionLabel: 'Buka Halaman Masuk',
    actionHref: '/login',
  },
  {
    id: 'unggah-bukti',
    label: 'Cara Mengirim Bukti',
    issueTitle: 'Panduan melampirkan foto atau tangkapan layar dengan aman',
    summary:
      'Bukti visual membantu Guru BK memverifikasi kasus siber maupun perundungan fisik secara lebih cepat.',
    steps: [
      'Siapkan foto atau tangkapan layar yang memperlihatkan waktu dan isi percakapan atau kondisi kejadian secara jelas.',
      'Pilih format gambar standar (JPG atau PNG); sistem Lapor Aman akan mengompresi ukuran file secara otomatis sebelum diunggah.',
      'Belum sempat mengambil foto? Anda tetap dapat mengirim laporan hanya dengan menulis kronologi secara jujur dan lengkap.',
    ],
    actionLabel: 'Buat Laporan Sekarang',
    actionHref: '/lapor',
  },
  {
    id: 'konseling-langsung',
    label: 'Butuh Konseling Langsung',
    issueTitle: 'Menghubungi Guru BK untuk pendampingan tatap muka',
    summary:
      'Selain melalui formulir daring, Anda dapat langsung menemui konselor SMP Gelora Depok kapan saja pada jam operasional sekolah.',
    steps: [
      'Datang langsung ke Ruang Bimbingan Konseling (Gedung B, Lantai 2) pada jam istirahat atau setelah pulang sekolah.',
      'Atau kirim pesan ke WhatsApp resmi layanan BK untuk menjadwalkan pertemuan tertutup tanpa mengganggu jam pelajaran.',
      'Sampaikan bahwa Anda sudah atau ingin mengajukan laporan di Lapor Aman agar Guru BK dapat menyiapkan pendampingan yang nyaman.',
    ],
    actionLabel: 'Chat Layanan BK',
    actionHref: 'https://wa.me/6282155667735',
  },
];

export function getHelpTriageSolution(id: HelpTriageId): HelpTriageSolution {
  return (
    HELP_TRIAGE_SOLUTIONS.find((item) => item.id === id) ??
    HELP_TRIAGE_SOLUTIONS[0]
  );
}

export interface OfficialHelpChannel {
  id: 'email' | 'ruang-bk' | 'whatsapp-bk';
  category: string;
  title: string;
  value: string;
  scheduleOrLocation: string;
  actionLabel: string;
  href: string;
  external?: boolean;
}

export const OFFICIAL_HELP_CHANNELS: readonly OfficialHelpChannel[] = [
  {
    id: 'email',
    category: 'Korespondensi Resmi',
    title: 'Email Sekolah & Dukungan Akun',
    value: 'info@sekolahghama.com',
    scheduleOrLocation: 'Direspon pada hari kerja Senin - Jumat (07.30 - 15.30 WIB)',
    actionLabel: 'Kirim Email',
    href: 'mailto:info@sekolahghama.com',
  },
  {
    id: 'whatsapp-bk',
    category: 'Konsultasi Cepat Siswa',
    title: 'WhatsApp Layanan Guru BK',
    value: '+62 821-5566-7735',
    scheduleOrLocation: 'Saluran ramah siswa untuk konsultasi privat & bantuan akun',
    actionLabel: 'Hubungi via WhatsApp',
    href: 'https://wa.me/6282155667735',
    external: true,
  },
  {
    id: 'ruang-bk',
    category: 'Tatap Muka & Telepon Sekolah',
    title: 'Ruang BK SMP Gelora Depok',
    value: '(021) 775-4635',
    scheduleOrLocation:
      'Gedung B, Lantai 2, Jl. Raya Grogol, Kec. Limo, Kota Depok',
    actionLabel: 'Telepon Sekolah',
    href: 'tel:0217754635',
  },
];

export interface CrisisContact {
  id: string;
  label: string;
  href: string;
  variant: 'primary-crisis' | 'secondary-crisis';
  external?: boolean;
}

export const EMERGENCY_CRISIS_CONTACTS: readonly CrisisContact[] = [
  {
    id: 'darurat-112',
    label: 'Panggil Layanan Darurat (112)',
    href: 'tel:112',
    variant: 'primary-crisis',
  },
  {
    id: 'sapa-129',
    label: 'WhatsApp SAPA 129 KemenPPPA',
    href: 'https://wa.me/628111129129',
    variant: 'secondary-crisis',
    external: true,
  },
];

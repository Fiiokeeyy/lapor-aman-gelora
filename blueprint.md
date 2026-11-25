# Lapor Aman Gelora - Project Blueprint

## 1. Overview & Purpose

**Lapor Aman Gelora** adalah platform digital berbasis web yang dirancang khusus untuk memfasilitasi pelaporan dan penanganan kasus perundungan (bullying) di lingkungan sekolah SMP Gelora Depok. Platform ini menjamin kerahasiaan identitas siswa (opsi anonim 100%), menyediakan saluran pengaduan yang aman dan tidak mengintimidasi, serta menghubungkan siswa secara langsung dengan Tim Bimbingan Konseling (BK) dan pihak sekolah untuk penanganan yang cepat, terukur, dan transparan.

Proyek ini awalnya dikembangkan sebagai proposal PKM mahasiswa (Semester 5) dan kini direvitalisasi pada **Semester 7 untuk Mata Kuliah Manajemen Proyek TI (MPI)** oleh tim 3 orang:
- **Aufa Wafi:** Lead Project & Lead UI/UX Frontend Architect
- **Ivan:** Frontend & Interaction Engineer
- **Wahyu:** Backend, Security & QA Engineer

---

## 2. Architecture & Tech Stack

- **Framework:** Next.js 15 (App Router), React 19
- **Styling:** Tailwind CSS v4, Lucide React Icons
- **Animation & Motion:** Framer Motion (micro-interactions & page transitions)
- **Database & Auth:** Firebase Authentication & Cloud Firestore
- **Storage & Media:** Cloudinary & `browser-image-compression` (client-side compression)
- **Notification:** Nodemailer (SMTP email notification)
- **Documentation Standard:** PRD, Implementation Plan, and Sprint Roadmap terstruktur (mengadopsi standar Crave)

---

## 3. Current Implemented Features (Base V1 PKM)

### 3.1 Design & Layout (Kondisi Awal - Prior Revamp)
- **Color Palette:** Biru Muda/Langit (`bg-blue-100`) sebagai background utama dan Oranye (`bg-orange-500`) sebagai warna aksen dan call-to-action.
- **Karakteristik Awal (AI-Slop Detected):**
  - Menggunakan floating gradient blur blobs (`animate-blob`) dan wave separator SVG kaku pada beranda.
  - Kartu-kartu alur 3 kolom konvensional dengan visualisasi standar.
  - Formulir pelaporan `/lapor` berbentuk form panjang satu halaman yang berat dan intimidatif.
  - Dashboard siswa dan admin berformat tabel standar tanpa visualisasi status yang empatik.

### 3.2 Alur Sistem & Modul Fungsional (Tetap Dipertahankan 100%)
- **Autentikasi & Otorisasi Berbasis Peran (RBAC):**
  - Role Siswa: Login/Daftar dengan validasi NISN, akses dashboard pribadi untuk melacak status laporan.
  - Role Guru / Admin: Login admin khusus (`/admin/login`), akses admin console untuk meninjau, mengubah status kasus, dan memberi catatan penanganan.
- **Modul Pelaporan (`/lapor`):**
  - Pilihan jenis perundungan: Fisik, Verbal, Siber, Sosial, Emosional.
  - Form input: Lokasi, deskripsi detail, lampiran bukti gambar.
  - Kompresi gambar otomatis sisi klien sebelum dikirim ke Cloudinary.
  - Fitur Anonimitas: Siswa dapat memilih untuk melapor tanpa menyertakan identitas publik.
  - Limit Kuota Harian: Pembatasan jumlah laporan per hari per akun untuk mencegah spam/flood.
- **Notifikasi Email:** Notifikasi otomatis ke email admin/siswa saat status laporan diperbarui.

---

## 4. Revitalization Plan & Sprint Progress

### 4.1 Sprint 1 & 2 Completed Deliverables
1. **Design System & Authentic School Palette:**
   - Universal font stack: **Plus Jakarta Sans** (`--font-plus-jakarta`) loaded via `next/font/google` and configured through Tailwind v4 `@theme`.
   - Signature handwritten font: **Caveat** (`--font-signature`) for signature brand elements (`SMP Gelora ⤷`).
   - **Kombinasi Warna Asli Telur Asin & Oranye Aksi (Dipertahankan 100% Konsisten):**
     - Biru Muda Telur Asin (`#BFE3F7`, `#E5F4FC`, `#9DD2F2`, `#f0f7fb`) sebagai kanvas utama yang menenangkan dan ramah siswa.
     - Warm Action Orange (`#F97316`, `#EA580C`, `#FB923C`) untuk aksen tindakan utama, badge teks, dan tombol laporan.
     - Dark Navy (`#0B132B`) khusus untuk Footer resmi sesuai versi awal.
2. **Scroll-Reactive Navbar (Bentuk Kreatif & Tidak Numpuk):**
   - Bentuk kontainer saat timbul/scrolled: `rounded-2xl sm:rounded-3xl` (bukan kapsul full rounded), bersih dan lega.
   - Logo Sekolah Ghama diperbesar secara proporsional (`w-14 h-11 sm:w-16 sm:h-12`) dengan `object-contain object-left` agar lambang dan teks terbaca jelas.
   - Teks nama sekolah dihilangkan dari navbar, hanya menampilkan `LAPOR AMAN` agar tidak menumpuk.
   - Jarak menu navigasi desktop dibuat lega dan bernapas.
3. **Hero Section Motif Pensil Sekolah (Anti AI Slop):**
   - Badge kapsul dengan titik hijau berkedip diganti dengan **motif pensil sekolah kreatif**: `✏️ Ruang Aman Pengaduan & Perlindungan Siswa SMP Gelora ⤷`.
4. **6 Kartu Modul Solusi (Palet Seragam & Kohesif):**
   - Menghilangkan warna-warni pelangi acak (AI slop pattern). Seluruh kartu memakai latar putih bersih, border biru muda telur asin, dan wadah ikon seragam (`bg-[#E5F4FC] text-sky-700 group-hover:text-orange-500`).
5. **Alur Laporan "Bagaimana Cara Kerjanya?":**
   - Dilengkapi garis penghubung alur horizontal (*connected horizontal track*) menghubungkan 3 tahapan (1. Masuk Akun -> 2. Kirim Laporan -> 3. Pantau Proses).
   - Label di atas judul menggunakan teks oranye murni `ALUR LAPORAN` tanpa rounded pill background.
6. **Footer Resmi (Dark Navy & Orange Signature):**
   - Background dikembalikan ke warna footer awal: **Dark Navy (`#0B132B`)**.
   - Tulisan script tanda tangan `SMP Gelora` diubah ke warna **Oranye (`text-orange-500`)**.
   - Logo Sekolah Ghama diperbesar signifikan (`w-16 h-14 sm:w-20 sm:h-16`) dengan pembatas vertikal rapi (`border-l border-slate-700/80 pl-3.5`) mengadopsi layout web awal.
7. **Bottom CTA Banner (Persis Gambar Acuan User):**
   - Gradien Biru Muda Telur Asin (`from-[#B9E2F8] via-[#CCEAFC] to-[#B9E2F8]`), judul tegas beraksen oranye, tombol solid putih "Daftar Sekarang", dan tombol outlined putih "Pelajari Lebih Lanjut".
8. **Elevasi Desain Beranda & Navbar (Sesuai Arahan & Inspirasi Crave + DrawKit):**
   - **Navbar Interaktif 3D HD & Scroll Spy Terpadu:** Menu navigasi memiliki efek pill 3D HD taktil aktif dan hover bergradien oranye (`from-orange-500 to-orange-600 shadow-[0_4px_12px_rgba(249,115,22,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)]`), mendeteksi rute dan link aktif secara dinamis melalui Scroll Spy terpadu.
   - **Perbaikan Navigasi & Anchor Link Lenis:** Memperbaiki handler klik jangkar (*anchor links*) global pada `SmoothScroll.tsx` dan `Header.tsx`, menyinkronkan ID seksi (`#beranda`, `#alur`, `#kategori`, `#kepatuhan`, `#tim`, `#faq`), menghilangkan `pointer-events-none` yang menghalangi klik, dan memastikan seluruh tautan di Navbar serta Footer berfungsi 100% mulus (smooth scroll ke seksi terkait).
   - **Bespoke 3D HD Volumetric Icons (6 Modul):** Ikon kustom 3D dengan gradien Sky Blue (`#38BDF8` / `#0284C7`) dan aksen Warm Gold (`#F59E0B`), menghilangkan kesan warna-warni pelangi (AI slop). Seluruh tag atas seragam (`bg-[#E5F4FC] text-sky-800 border border-[#BFE3F7]`) dan dilengkapi status validasi berpanah `→`.
   - **Anotasi Sketsa Pensil & Panah Melengkung (DrawKit Style):** Di sekeliling mockup dashboard ditambahkan 5 anotasi tulisan tangan autentik (`font-signature`) dengan panah lengkung SVG mengarah ke elemen UI penting.
   - **Pondasi Kepatuhan Model Akar / Pohon Regulasi:** Kanvas terang seragam dengan node hub pusat terhubung ke 4 pilar hukum melalui cabang akar SVG melengkung (*branching tree network*).
   - **Showcase Interaktif Tim Pengembang:** Tab tersegmentasi taktil (`[ Aufa Wafi ] [ Ivan ] [ Wahyu ]`), kutipan besar beraksen garis bawah sketsa pensil (`PencilSketchUnderline`), dan narasi peran nyata.
9. **Quality Assurance & Verification:**
   - Dedicated [src/app/not-found.tsx](file:///d:/lapor-aman-gelora/src/app/not-found.tsx) dibuat untuk stabilitas App Router Next.js 15.
   - `npm.cmd run lint`: Lolos dengan **0 Errors**.
   - `npm.cmd run build`: Lolos dengan **0 Errors** (19/19 rute statis terkompilasi optimal).
10. **Elevasi Desain Beranda & Navigasi Terpadu (Revisi Terkini):**
   - **Scroll Spy Presisi & Hover Menu Non-Aktif:** Memperbaiki algoritma Scroll Spy pada `Header.tsx` agar sinkron dengan viewport tanpa terjebak di satu menu. Menu yang belum aktif memiliki hover transparan lembut (`hover:bg-slate-900/6`), sementara pil oranye 3D HD taktil hanya muncul pada menu yang sedang aktif.
   - **Hero Section Pinterest / Cycle Orbital Pattern & 6 Elemen 3D:** Background judul dihiasi pola konsentris cincin orbital putus-putus (*dashed rings*) dan radial aura lembut, dilengkapi 6 elemen dekorasi 3D bertema perlindungan siswa (Kartu Ruang Curhat BK, Lencana 100% Rahasia & Aman, Token Plus Oranye 3D, Orb Biru Mengkilap 3D, Busur Teal 3D, dan Kartu Kamu Tidak Sendiri).
   - **Pembersihan Gradien AI Slop pada Tombol:** Seluruh tombol aksi utama ("Laporkan Kasus Sekarang", "Lapor Kasus", tombol modal masuk siswa, dan Bottom Bar) diubah dari gradien oranye-amber AI menjadi warna solid **Warm Action Orange (`bg-orange-500 hover:bg-orange-600`)** yang tegas, modern, dan profesional.
   - **Eliminasi Total Referensi NISN:** FAQ, modul solusi, teks deskripsi, dan stats bar dibersihkan dari penyebutan NISN. Autentikasi siswa resmi ditegaskan menggunakan akun **Email dan Password siswa**, menjamin kemudahan akses tanpa mempersulit siswa SMP.
   - **Penataan Urutan Seksi Harmonis:** Memindahkan seksi Alur Laporan (`#alur` - Bagaimana Cara Kerjanya) tepat setelah Hero, diikuti oleh Modul Solusi (`#kategori` - 6 Solusi Terpadu), sehingga urutan scroll di halaman sinkron 1:1 dengan menu navigasi (`01 Beranda` -> `02 Alur Lapor` -> `03 Kenali Kasus`).
   - **Koreksi Arah 5 Panah Anotasi Sketsa Pensil:** Seluruh panah kurva SVG pada anotasi mockup dashboard disesuaikan sudut dan koordinatnya agar mengarah tepat ke elemen UI tujuan tanpa terbalik.
   - **Teks Eyebrow Bersih Tanpa Box Kontainer:** `✏️ Ruang Aman Pengaduan & Perlindungan Siswa SMP Gelora ⤷` tampil sebagai tipografi murni tanpa rounded container border yang terkesan klise AI.
11. **Penyempurnaan Dekorasi 3D Statis, Background Pattern, & Sinkronisasi Navbar (Revisi Terbaru):**
   - **6 Elemen Dekorasi 3D Volumetric Statis di Hero:** Seluruh ikon dekoratif di Hero diperbarui menjadi ilustrasi 3D isometrik & *claymorphic* berdimensi nyata (Perisai & Gembok Enkripsi 3D, Medali Verifikasi 3D, Megafon Suara Berani 3D, Amplop Laporan Tersegel 3D, Hati Empati di Bantalan 3D, dan Balon Konseling 3D) yang **100% statis tanpa animasi gerak/mengambang**.
   - **Pola Latar Belakang (*Background Patterns*) Konsisten:** Menambahkan utilitas CSS ringan (`.bg-pattern-grid`, `.bg-pattern-dots`, `.bg-pattern-plus` di `globals.css`) serta watermark cincin orbital halus pada seluruh seksi landing page agar visual terasa kaya, terstruktur, dan tetap ringan di perangkat entry-level.
   - **Penyesuaian Menu Navbar & Scroll Spy:** Menghapus menu `Privasi` dari navbar (ditempatkan eksklusif di Footer karena merupakan halaman terpisah), mengganti label `Kenali Kasus` menjadi `Fitur Utama`, menambahkan `Kepatuhan` (`04`) sehingga seluruh menu navbar (`01 Beranda` -> `02 Alur Lapor` -> `03 Fitur Utama` -> `04 Kepatuhan` -> `05 Tim Pengembang` -> `06 FAQ`) sinkron 1:1 dengan urutan *section* dan Scroll Spy pada landing page.
   - **Pembersihan Sisa Gradien AI:** Mengubah tombol tab aktif pada seksi Tim Pengembang dan kontainer mockup menjadi warna solid konsisten tanpa gradien AI serta menjaga komponen tetap statis tanpa pergeseran posisi (*translate-y*).
12. **Konsolidasi Pattern, Upgrade Sistem Ikon 3D Terpadu, Root Tree Kepatuhan, & Redesain Tim Pengembang (Revisi Terbaru):**
   - **Pola Latar Belakang Tunggal Konsisten:** Mengganti pola yang beragam menjadi satu pola titik lembut terpadu (`.bg-pattern-telur-asin`) yang diterapkan khusus pada *section* berlatar Biru Muda Telur Asin (`#beranda`, `#kategori`, `#kepatuhan`, `#faq`), sementara *section* berlatar putih (`Stats`, `#alur`, `#tim`, `Bottom CTA`) dibiarkan bersih kontras tanpa pola.
   - **Pembersihan Dekorasi 3D Hero:** Menghapus ikon 3D *Love* dan *"Kamu Tidak Sendiri"* di bagian bawah Hero agar tidak menumpuk di atas jendela pratinjau dasbor; menyisakan 4 ikon 3D statis di area atas mengapit judul (`Hero3DShieldLock`, `Hero3DVerifiedMedal`, `Hero3DMegaphone`, `Hero3DSealedEnvelope`), serta mengganti emoji pensil dengan vektor `HandcraftedPencilIcon`.
   - **Sistem Ikon 3D Terpadu (`src/components/icons/LaporAman3DIcons.tsx`):** Meng-upgrade seluruh ikon pada **Alur Laporan** (`Icon3DStepLogin`, `Icon3DStepReport`, `Icon3DStepTrack`), **Fitur Utama** (6 ikon 3D isometrik/pedestal berbayangan), dan **Pondasi Kepatuhan** (`Icon3DRegulationHub` + 4 ikon pilar 3D).
   - **Upgrade Pohon Regulasi / Akar Kepatuhan:** Memperbarui jaringan akar penghubung pada `#kepatuhan` dengan saluran cabang *dual-layer bezier* presisi menuju pusat 4 kartu di desktop serta *root spine* vertikal terhubung di tampilan tablet/mobile.
   - **Redesain Kartu Tim Pengembang ([TeamShowcase.tsx](file:///d:/lapor-aman-gelora/src/components/TeamShowcase.tsx)):** Disederhanakan menjadi kartu *spotlight* berlatar `#CCEAFC` + border `#9DD2F2` (seragam dengan kartu CTA bawah), rasio 60% konten kiri dan 40% slot khusus foto anggota kanan, pembagian peran standar Crave (`Team Lead` Aufa Wafi, `Project Development` Ivandhika, `Project Manager` Wahyu Hidayat), fokus murni pada jobdesk tanpa penyebutan semester/PKM/MPI, serta ikon peran 3D yang konsisten.
   - **Optimasi Lenis Mobile Touch & Transisi Navbar 60fps ([SmoothScroll.tsx](file:///d:/lapor-aman-gelora/src/components/SmoothScroll.tsx), [Header.tsx](file:///d:/lapor-aman-gelora/src/components/Header.tsx)):** Mengaktifkan `syncTouch: true` (`syncTouchLerp: 0.085`, `touchInertiaExponent: 1.55`) agar *smooth scroll* Lenis aktif di perangkat sentuh mobile, mengganti `overflow-x-hidden` ke `overflow-x-clip` untuk menjaga keandalan `sticky`, serta memisahkan lapisan latar navbar ke layer khusus GPU (`opacity` + `transform` tanpa *layout reflow* / `transition-all`) dengan Scroll Spy ter-throttle `requestAnimationFrame`.
13. **Pemasangan Foto Tim, Perbaikan Tab Mobile, Panah Bawah, & Pembersihan Visual ([TeamShowcase.tsx](file:///d:/lapor-aman-gelora/src/components/TeamShowcase.tsx), [page.tsx](file:///d:/lapor-aman-gelora/src/app/page.tsx)):**
   - **Kartu Tim Pengembang Mobile-First & Foto Nyata:** Memasang foto formal berlatar transparan untuk ketiga anggota tim — Aufa Wafi (`/Foto_Formal_Aufa.png`), Ivandhika (`/Foto_Ivan.png`), dan Wahyu Hidayat (`/Foto_Wahyu.png`) — di slot 40% kanan rata bawah (*flush-bottom*), menyelaraskan tab peran menjadi 1 baris rapi (`grid-cols-3 sm:inline-flex`), serta menghapus seluruh pattern lingkaran di dalam kartu agar bersih.
   - **Panah Pensil Mengarah ke Bawah (`HanddrawnDownArrow`):** Mengganti seluruh simbol `⤷` (mengarah samping) dengan vektor SVG kurva panah tangan mengarah vertikal ke bawah menuju judul/konten terkait, serta menurunkan posisi garis bawah `PencilSketchUnderline` agar tidak memotong huruf `g`.
   - **Pembersihan Hero & Akar Kepatuhan:** Menghapus *dot pattern* dari `#beranda` dan `#kepatuhan`, menyederhanakan orbit Hero menjadi 2 cincin tipis bergradasi halus agar area judul bersih, dan menghilangkan komponen titik-titik serta garis putus-putus pengganggu pada diagram akar kepatuhan.
   - **Penggantian Hero-Metric Bar Menjadi Eksplorer Interaktif 5 Kategori ([BullyingExplorer.tsx](file:///d:/lapor-aman-gelora/src/components/BullyingExplorer.tsx), [bullying-categories.ts](file:///d:/lapor-aman-gelora/src/lib/bullying-categories.ts)):** Menghapus pola AI-slop 4-kolom metrik (*kicker uppercase*, *capsule pill*, *decorative status dot*, pengulangan angka mockup) dan menggantinya dengan seksi asimetris 5/7 yang fungsional agar siswa dapat mengenali contoh nyata 5 kategori perundungan (`/lapor`) beserta panduan bukti sebelum melapor.
   - **Kontrak Navigasi & Pengujian TDD (`src/lib/navigation.ts`, `src/lib/__tests__/navigation.test.ts`):** Memisahkan logika Scroll Spy dan sinkronisasi rute navbar/footer ke modul murni teruji dengan Node test runner (*9/9 tests pass*).
14. **Redesain Konsisten Halaman Statis Publik & Sinkronisasi Navbar ([PublicPageHero.tsx](file:///d:/lapor-aman-gelora/src/components/PublicPageHero.tsx), [Header.tsx](file:///d:/lapor-aman-gelora/src/components/Header.tsx), [legal-support-data.ts](file:///d:/lapor-aman-gelora/src/lib/legal-support-data.ts)):**
   - **Pembersihan AI Slop, Konsistensi `rounded-xl`, & Efek 3D Navbar:** Menghapus pola eksternal, gradien banner besar, garis strip kartu, `animate-pulse`, kontras rendah, `<main>` bersarang, serta *breadcrumb* beranda. Menyeragamkan sudut seluruh tombol halaman statis menjadi `rounded-xl` seperti Navbar, serta menerapkan efek 3D tombol aktif Dark Navy `#0B132B` (*3D layered shadow*) secara konsisten pada navigasi aktif di [`Header.tsx`](file:///d:/lapor-aman-gelora/src/components/Header.tsx) (desktop, rute `/lapor` & `/faq`, serta drawer mobile) dan ketiga halaman statis.
   - **Akurasi RBAC Dashboard Siswa & Admin Guru BK:** Menyesuaikan Kebijakan Privasi & simulator izin data ([PrivacyAccessExplorer.tsx](file:///d:/lapor-aman-gelora/src/components/PrivacyAccessExplorer.tsx)) agar mencerminkan aturan sistem sebenarnya: login **Nama, Kelas, dan Email** tanpa NIS/NISN, siswa hanya dapat melihat laporan miliknya sendiri (`Siswa Pelapor`), siswa lain tertutup penuh (`Siswa Lain`), dan satu-satunya akun admin penanganan hanyalah **Guru BK**.
   - **Kebijakan Privasi ([src/app/kebijakan-privasi/page.tsx](file:///d:/lapor-aman-gelora/src/app/kebijakan-privasi/page.tsx)):** Server Component dengan daftar isi *sticky* desktop / *jump pills* mobile serta simulator hak akses 3 peran.
   - **Syarat & Ketentuan ([src/app/syarat-ketentuan/page.tsx](file:///d:/lapor-aman-gelora/src/app/syarat-ketentuan/page.tsx), [ReportToneComparison.tsx](file:///d:/lapor-aman-gelora/src/components/ReportToneComparison.tsx)):** Server Component berpasal rapi dengan simulasi perbandingan interaktif penulisan laporan (`Laporan Objektif (Diterima)` vs `Fitnah / Kata Kasar (Ditolak)`).
   - **Pusat Bantuan ([src/app/pusat-bantuan/page.tsx](file:///d:/lapor-aman-gelora/src/app/pusat-bantuan/page.tsx), [HelpTriageSolver.tsx](file:///d:/lapor-aman-gelora/src/components/HelpTriageSolver.tsx)):** Pemecah kendala mandiri 3 topik interaktif (`Lupa Akun / Sulit Masuk`, `Cara Mengirim Bukti`, `Butuh Konseling Langsung`), 3 kartu kanal resmi sekolah (`info@sekolahghama.com`, WhatsApp BK `6282155667735`, `(021) 775-4635`, Ruang BK Gedung B Lantai 2), kartu darurat merah solid (`bg-red-600`, `112` & `SAPA 129`), dan kartu CTA biru solid (`bg-[#CCEAFC] border-[#9DD2F2]`) identik dengan kartu terbawah beranda.
   - **Pengujian Kontrak Data (`src/lib/__tests__/legal-support-data.test.ts`):** Validasi otomatis tanpa em-dash, tanpa NIS/NISN/TPPK, akurasi RBAC Guru BK, konsistensi `mailto:`, dan validitas tautan bantuan.

### 4.1 Tujuan Perubahan & Desain Benchmark Crave HRM
1. **Mengeliminasi 100% Karakteristik AI-Slop:**
   - Membersihkan efek blur blob mengambang dan wave divider kaku.
   - Mengganti teks klise AI dengan copywriting berempati, manusiawi, dan lugas.
   - Mengadopsi editorial Bento Grid & Floating Perspective App Mockup setara **Crave HRM (`hrm.craveservices.my.id`)**.
2. **Mempertahankan Nilai Inti & Skema Warna Asli:**
   - Alur sistem dan logika bisnis (Firebase, Cloudinary, Role RBAC) tidak diubah.
   - Skema warna identitas (**Light Sky Blue** `#E0F2FE` / `#0284C7` & **Action Orange** `#F97316`) tetap dipertahankan dengan token semantik modern.
3. **Penyusunan Dokumentasi Acuan Pengembangan MPI:**
   - `docs/PRD.md` (Product Requirement Document).
   - `docs/IMPLEMENTATION_PLAN.md` (Rencana Implementasi & RACI).
   - `docs/SPRINT.md` (Roadmap Sprint 1, 2, 3 dengan pembagian peran Aufa, Ivan, Wahyu).
4. **Penerapan Koleksi AI Skills:**
   - `impeccable`, `frontend-ui-engineering`, `antislop`, `antislop-ui`, `antislop-code`, `antislop-human`, `antislop-layoutmobile`, `security-and-hardening`, `test-driven-development`.

### 4.2 Actionable Steps

- [x] **Langkah 1: Pemeriksaan Environment & Instalasi Dependensi**
  - Mengecek versi Node.js (`v22.23.2`) dan npm (`10.9.8`).
  - Menjalankan `npm install` hingga selesai (612 paket terpasang).
  - Verifikasi build (`npm run build`) dan linting (`npm run lint`) sukses exit code 0.
- [x] **Langkah 2: Pembuatan Dokumen Acuan Lengkap (Format Crave Standard)**
  - Menyusun `docs/PRD.md` mencakup spesifikasi 13 seksi landing page ala Crave HRM.
  - Menyusun `docs/IMPLEMENTATION_PLAN.md` mencakup RACI matrix tim, constraints, dan rincian task.
  - Menyusun `docs/SPRINT.md` mencakup backlog kerja Sprint 1, Sprint 2, dan Sprint 3 untuk Aufa, Ivan, dan Wahyu.
- [x] **Langkah 3: Eksekusi Sprint 1 (Foundation & Layout Shell) [SELESAI 100%]**
  - [x] Konfigurasi variable font modern Plus Jakarta Sans (bukan Inter) & utilitas `cn()` di `src/lib/utils.ts`.
  - [x] Modernisasi Header (`Header.tsx`): Floating Frosted Navbar (Desktop) & Crave Floating Popup Modal (Mobile).
  - [x] Pembuatan Mobile App Bottom Bar (`MobileAppBottomNav.tsx`) & Slide-Up Drawer (`MobileAppDrawer.tsx`).
  - [x] Redesain Footer (`Footer.tsx`): 3 zona berimbang, kontak resmi & hotline darurat (KPAI & Sahabat Anak).
  - [x] Pembuatan komponen atomik UI (`src/components/ui/`): `Button.tsx`, `Badge.tsx`, dan `Card.tsx`.
  - [x] Quality Gate Sprint 1: Lolos verifikasi build & linting bebas error (19/19 rute sukses).
- [ ] **Langkah 4: Eksekusi Sprint 2 (Beranda Crave Aesthetic & Stepper Form Lapor) [NEXT]**
  - Redesain Beranda (`src/app/page.tsx`): 13 seksi Crave HRM Parity (Hero Mockup Lift, Bento Grid, 6 Fitur, Dark Security Section, Developer Card Aufa/Ivan/Wahyu).
  - Redesain Form Pelaporan (`src/app/lapor/page.tsx`): Multi-step Wizard 4 langkah ramah siswa.
- [ ] **Langkah 5: Eksekusi Sprint 3 (Dashboard Siswa, Admin Console, UAT & Presentasi MPI)**
  - Modernisasi Dashboard Siswa (`/siswa/dashboard`): Status tracking timeline.
  - Modernisasi Admin Console (`/admin/dashboard`): Filter multi-kategori, drawer investigasi, lightbox bukti.
  - UAT menyeluruh dan persiapan demo presentasi mata kuliah MPI.

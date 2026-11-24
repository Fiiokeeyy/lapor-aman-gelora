# 📅 SPRINT ROADMAP & WORK BREAKDOWN
## Proyek: Lapor Aman Gelora (Revitalisasi UI/UX Modern & Anti-AI Slop)
### Desain Benchmark: Crave HRM Aesthetic (`hrm.craveservices.my.id`)
### Target Presentasi: Mata Kuliah MPI (Manajemen Proyek TI) — Semester 7

---

## 👥 Tim Pengembang & RACI Matrix

| Nama | Peran | Fokus Utama | Rekomendasi Skills Utama |
| :--- | :--- | :--- | :--- |
| **Aufa Wafi** | *Lead Project & UI/UX Architect* | Arsitektur Next.js 15, Standar Anti-Slop, Bento Grid Beranda, Header Frosted Modern, Admin Console, Code Review & Merge | `impeccable`, `frontend-ui-engineering`, `antislop-ui`, `antislop-code` |
| **Ivan** | *Frontend & Interaction Engineer* | Framer Motion micro-interactions, Stepper Form `/lapor`, Mobile ergonomics & bottom drawer, Card kategori kasus, A11Y | `frontend-ui-engineering`, `antislop-human`, `antislop-layoutmobile` |
| **Wahyu** | *Backend, Security & QA Engineer* | Firestore Security Rules, Image compression & Cloudinary check, Sanitasi input API, UAT & Presentasi MPI Sign-off | `security-and-hardening`, `test-driven-development`, `performance-optimization` |

*(Catatan: Status checkbox `[ ]` dan PIC dapat diperbarui secara mandiri oleh tim seiring progres harian).*

---

## 🛠️ Pemetaan AI Skills yang Diaktifkan untuk Tim

Berikut adalah pemetaan spesifik skill-skill AI yang terpasang di sistem dan siap memandu pengerjaan task:

1. **`impeccable` (Visual Craft & Crave Parity):**
   - Menghasilkan antarmuka berstandar *design award* setara Crave HRM.
   - Mengatur rasio tipografi tajam, sudut kartu `rounded-3xl` (24px), kedalaman bayangan berlapis (*ambient multi-stop shadow*), dan *perspective lifted mockup* di hero section.
2. **`frontend-ui-engineering` (Komponen & Arsitektur React 19):**
   - Membangun komponen Next.js 15 yang modular, modularisasi RSC/Client boundaries, dan integrasi Framer Motion tanpa menyebabkan *layout shift*.
3. **`antislop`, `antislop-ui`, `antislop-code` (Eliminasi AI-Slop):**
   - Menghilangkan elemen generik AI: tidak ada blob blur mengambang (`animate-blob`), tidak ada wave separator SVG kaku, tidak ada komentar kode AI yang tidak perlu, dan memastikan kontras warna memenuhi WCAG AA.
4. **`antislop-human`, `antislop-layoutmobile` (Ergonomi & Pengguna Remaja):**
   - Memastikan tombol aksi nyaman dijangkau jempol siswa di smartphone (tap-target > 44px), form wizard bertahap yang tidak membuat cemas, dan bottom drawer yang natural.
5. **`antislop-copywriting` (Nada Bicara Berempati):**
   - Mengganti teks klise promosi AI menjadi copywriting yang menenangkan, berani, dan melindungi privasi siswa.
6. **`security-and-hardening` (Privasi & Keamanan Siswa):**
   - Mengamankan database Firestore agar data siswa anonim terlindungi 100% dan tidak ada kebocoran identitas ke siswa lain.
7. **`test-driven-development`, `code-review-and-quality` (Quality Gate):**
   - Memverifikasi build dan alur fungsional end-to-end sebelum demo presentasi mata kuliah MPI.

---

## 🧭 Ringkasan Garis Waktu Sprint

```
[SPRINT 1: Foundation, Anti-Slop Design System & Layout Shell]
 Target: Scaffolding, typography modern (Plus Jakarta Sans), Floating Frosted Header, Footer 3-zone
                          │
                          ▼
[SPRINT 2: Beranda Crave Aesthetic & Stepper Form Pelaporan (/lapor)]
 Target: 13 Seksi Beranda Crave Parity, Perspective Hero Mockup, Stepper Wizard 4 langkah
                          │
                          ▼
[SPRINT 3: Portal Siswa, Admin Console, Testing & Presentasi MPI]
 Target: Dashboard siswa (Timeline status kasus), Admin console BK, UAT end-to-end, Slide demo MPI
```

---

# 🚀 SPRINT 1: Foundation, Anti-Slop Design System & Layout Core

**Fokus Utama:** Membersihkan scaffolding awal, mengonfigurasi tipografi modern, merombak layout shell (Header & Footer), dan menyiapkan fondasi komponen UI reusable tanpa AI-slop.

### Task 1.1: Scaffolding Environment & Dependency Verification
- **PIC:** Wahyu
- **Reviewer:** Aufa Wafi
- **Skill Rekomendasi:** `performance-optimization`, `frontend-ui-engineering`
- **Status:** `[x] Selesai`
- **Deskripsi:** Menyiapkan dependensi lokal proyek dan memastikan Next.js 15 + React 19 berjalan tanpa konflik.

* [x] Jalankan `npm install` hingga seluruh dependensi terpasang lengkap (612 paket terpasang).
* [x] Verifikasi `npm run build` dan `npm run lint` awal (0 errors, build lulus).
* [x] Konfigurasi variable font `Plus Jakarta Sans` pada `src/app/layout.tsx` (bukan Inter).
* [x] Buat file utility `src/lib/utils.ts` berisi fungsi helper `cn()` (clsx + tailwind-merge).

### Task 1.2: Redesain Header, Crave Mobile Popup & App Bottom Bar
- **PIC:** Aufa Wafi
- **Reviewer:** Ivan
- **Skill Rekomendasi:** `frontend-ui-engineering`, `impeccable`, `antislop-human`, `antislop-layoutmobile`
- **Status:** `[x] Selesai`
- **Deskripsi:** Membangun sistem navigasi responsif dengan 2 paradigma: Crave Floating Popup di Beranda publik, dan Mobile App Floating Bottom Bar + Slide-Up Bottom Sheet di area terautentikasi (Dashboard & Form Lapor).

* [x] **Header Desktop:** Floating frosted glass navbar (`backdrop-blur-md bg-white/85 border border-slate-200/80 shadow-sm sticky top-3 z-40 mx-auto max-w-6xl rounded-full`).
* [x] **Crave Mobile Popup Menu (Public Landing Page):** Modal kartu melayang di tengah (`rounded-[2rem]` dengan backdrop gelap blur), typography link berhuruf kapital tebal dengan nomor indeks biru (`BERANDA 01`, `ALUR LAPORAN 02`, `BENTUK BULLYING 03`, `KEAMANAN 04`, `FAQ 05`, `TIM 06`), dan tombol CTA oranye di bawah.
* [x] **Mobile App Bottom Bar (`src/components/MobileAppBottomNav.tsx`):** Docking mengambang di bawah layar (`fixed bottom-4 left-3 right-3 z-40 rounded-3xl bg-white/92 shadow-2xl`) untuk Siswa (`/siswa/dashboard`, `/lapor`) dan Admin (`/admin/dashboard`) yang 100% ramah jempol satu tangan.
* [x] **Slide-Up Bottom Sheet Drawer (`src/components/MobileAppDrawer.tsx`):** Drawer popup meluncur ke atas saat tombol "Lainnya" disentuh, menampilkan profil user, ganti role, hotline darurat, panduan, dan tombol logout.

### Task 1.3: Redesain Footer & Desain Sistem Reusable UI
- **PIC:** Ivan
- **Reviewer:** Aufa Wafi
- **Skill Rekomendasi:** `antislop-human`, `antislop-ui`, `frontend-ui-engineering`
- **Status:** `[x] Selesai`
- **Deskripsi:** Merapikan footer halaman publik dengan hierarki informasi yang seimbang dan membuat komponen atom UI (`Button`, `Badge`, `Card`).

* [x] Susun ulang grid footer menjadi 3 zona informasi yang seimbang (Identitas & Kontak SMP Gelora, Navigasi Pintas, Saluran Bantuan Darurat/KPAI/Sahabat Anak).
* [x] Bersihkan kontras warna teks footer agar memenuhi rasio WCAG AA (> 4.5:1).
* [x] Buat komponen `src/components/ui/Button.tsx` (variant primary orange, secondary sky, ghost, outline, danger + micro-haptics).
* [x] Buat komponen `src/components/ui/Badge.tsx` (status tiket laporan: Menunggu Verifikasi, Dalam Investigasi, Selesai, Ditolak).
* [x] Buat komponen `src/components/ui/Card.tsx` (container kartu konsisten `rounded-3xl` dengan ambient shadow).

**Quality Gate Sprint 1:**
- [x] Header dan Footer tampil rapi di desktop (1440px) dan mobile (375px).
- [x] Tidak ada font default Arial atau Times New Roman (menggunakan Variable Font Plus Jakarta Sans).
- [x] Build Next.js lolos tanpa error TypeScript atau linting (Exit Code 0, 19/19 rute sukses).

---

# 🛡️ SPRINT 2: Beranda Crave Aesthetic & Stepper Form Pelaporan

**Fokus Utama:** Merombak Beranda menjadi landing page produk berdaya pikat tinggi dengan standar Crave HRM (13 seksi terstruktur) dan menyulap form laporan menjadi Stepper Wizard interaktif yang ramah siswa.

### Task 2.1: Revamp Beranda (Homepage `/`) — Crave HRM Parity & Zero AI-Slop
- **PIC:** Aufa Wafi
- **Reviewer:** Ivan
- **Skill Rekomendasi:** `impeccable`, `antislop-ui`, `frontend-ui-engineering`, `antislop-copywriting`
- **Status:** `[ ] Pending`
- **Deskripsi:** Merombak total `src/app/page.tsx` mengadopsi 13 seksi terstruktur berstandar Crave HRM dengan tema perlindungan siswa dan warna asli (Sky Blue & Orange).

* [ ] **Seksi 1 (Hero & Perspective Mockup Lift):**
  - Hapus seluruh blob blur ungu/biru mengambang (`animate-blob`) dan wave separator SVG kaku.
  - Tampilkan Badge Pill Status: *"Platform Digital Resmi Penanganan Perundungan SMP Gelora"*.
  - Headline Kuat: *"Hentikan Perundungan. Lindungi Temanmu, Suarakan Kebenaran."*
  - Dual CTA: Tombol Oranye *"Lapor Kasus Sekarang"* + Tombol Putih/Ghost *"Pelajari Cara Kerja"*.
  - Micro Trust Bar: 100% Rahasia & Anonim • Didampingi Konselor BK • Respon Cepat < 24 Jam.
  - **Hero App Showcase:** Mockup card interaktif preview dashboard/pelaporan dengan sudut membulat `rounded-3xl`, bayangan bertingkat lembut, dan ambient glow biru langit.
* [ ] **Seksi 2 (School & Ministry Trust Bar):** Bar logo resmi mitra & lembaga pengawas (SMP Gelora, Kemendikbud, Sahabat Anak, KPAI).
* [ ] **Seksi 3 (Bento Grid Nilai Inti):**
  - Kartu Utama: Metrik Resolusi Kasus dengan grafik progres penanganan kasus.
  - Kartu Sekunder: Jaminan Enkripsi & Perlindungan Siswa Anonim.
  - Mini Stats Strip: Statistik laporan selesai, respon < 24 jam, dan bebas biaya pendampingan.
* [ ] **Seksi 4 (6-Feature Cards Grid):** Grid 3x2 kartu fitur perlindungan (Lapor Anonim, Enkripsi Berkas, Konseling Terpandu, Kompresi Gambar Cepat, Live Tracker Status, Saluran Darurat).
* [ ] **Seksi 5 (Interactive Workflow Deep-Dive):** Alur 3 langkah pelaporan di kiri berdampingan dengan interactive card visualizer di kanan.
* [ ] **Seksi 6 (Dark Slate Security & Anti-Retaliation Section):** Kontainer dark slate premium ala Crave HRM bertema jaminan anti-balas dendam dan perlindungan identitas.
* [ ] **Seksi 7 (Interactive Category Explorer):** Tab interaktif 5 kategori bullying (Fisik, Verbal, Siber, Sosial, Emosional) dengan contoh nyata.
* [ ] **Seksi 8 (Counselor & Educator Voice):** Kartu testimoni guru BK dan kepala sekolah SMP Gelora.
* [ ] **Seksi 9 (Interactive FAQ Accordion):** Pertanyaan & jawaban seputar kerahasiaan NISN dan keamanan pelapor.
* [ ] **Seksi 10 (Developer Team Spotlight):** Kartu profil pengembang (Aufa Wafi, Ivan, Wahyu) bergaya kartu Crave (seperti Eka Revandi di Crave) untuk memperkuat portofolio PKM & MPI.
* [ ] **Seksi 11 (High-Impact CTA Banner):** Kartu penutup beraksen oranye/biru mengajak siswa tidak takut bersuara.

### Task 2.2: Transformasi Formulir Pelaporan (`/lapor`) Menjadi Interactive Stepper Wizard
- **PIC:** Ivan
- **Reviewer:** Wahyu
- **Skill Rekomendasi:** `frontend-ui-engineering`, `antislop-human`
- **Status:** `[ ] Pending`
- **Deskripsi:** Membagi formulir laporan yang menakutkan menjadi 4 langkah bertahap yang tenang dan terarah.

* [ ] Buat *Step Progress Bar* di bagian atas layar (*1. Kategori $\rightarrow$ 2. Cerita $\rightarrow$ 3. Bukti $\rightarrow$ 4. Konfirmasi*).
* [ ] **Langkah 1 (Kategori):** Kartu seleksi visual jenis perundungan dengan feedback seleksi yang tegas (*active border & glow*).
* [ ] **Langkah 2 (Kronologi):** Input lokasi kejadian dengan chip cepat (*Ruang Kelas, Kantin, Toilet, Lapangan, Media Sosial*), tanggal insiden, dan textarea deskripsi dengan panduan pertanyaan (*Siapa, Di mana, Apa yang terjadi*).
* [ ] **Langkah 3 (Bukti Foto):** Dropzone modern dengan area drag-and-drop jelas, preview thumbnail gambar, indikator progres kompresi, dan tombol hapus cepat.
* [ ] **Langkah 4 (Privasi & Kirim):** Saklar toggle pelaporan anonim dengan kotak penjelasan rasa aman, ringkasan data sebelum tombol final *Kirim Laporan*.
* [ ] Integrasikan pill kuota harian pelaporan agar siswa tahu sisa batas pengiriman hari ini.

### Task 2.3: Optimasi Pipeline Gambar & Sanitasi Input
- **PIC:** Wahyu
- **Reviewer:** Aufa Wafi
- **Skill Rekomendasi:** `security-and-hardening`, `performance-optimization`
- **Status:** `[ ] Pending`
- **Deskripsi:** Memastikan proses kompresi di browser ringan dan data yang dikirim aman.

* [ ] Verifikasi `browser-image-compression` menghasilkan file di bawah 500 KB sebelum diunggah.
* [ ] Pasang validasi tipe file foto (JPG, PNG, WEBP) dan tolak file berekstensi berbahaya.
* [ ] Bersihkan teks deskripsi dari karakter script berbahaya sebelum disimpan ke Firestore.

**Quality Gate Sprint 2:**
- Alur pelaporan dari Beranda $\rightarrow$ Form Lapor $\rightarrow$ Berhasil Terkirim berjalan mulus tanpa reload halaman.
- Kompresi gambar tidak membuat browser smartphone *lag*.
- Toggle anonim berfungsi 100% dan tersimpan dengan benar di dokumen database.

---

# 📊 SPRINT 3: Portal Siswa, Admin Console, Testing & Presentasi MPI

**Fokus Utama:** Memodernisasi dashboard pelacak kasus siswa, konsol penanganan guru BK/Admin, pengujian menyeluruh (UAT), dan persiapan demo mata kuliah MPI.

### Task 3.1: Redesain Dashboard Siswa (`/siswa/dashboard`)
- **PIC:** Ivan
- **Reviewer:** Aufa Wafi
- **Skill Rekomendasi:** `frontend-ui-engineering`, `antislop-ui`
- **Status:** `[ ] Pending`
- **Deskripsi:** Memberikan siswa rasa tenang dengan melihat status pelaporan mereka diproses secara transparan.

* [ ] Buat kartu ringkasan status kasus dengan badge warna semantik (*Menunggu Verifikasi [Amber], Sedang Ditangani [Biru], Selesai [Hijau]*).
* [ ] Desain *Timeline Tracker Vertikal* untuk setiap laporan, menampilkan tanggal pengiriman dan catatan respons dari guru BK.
* [ ] Buat modal dialog detail laporan untuk melihat kembali bukti foto dan kronologi lengkap.
* [ ] Sediakan empty state yang ramah dan menenangkan saat belum ada laporan aktif.

### Task 3.2: Modernisasi Console Admin/Guru BK (`/admin/dashboard`)
- **PIC:** Aufa Wafi
- **Reviewer:** Wahyu
- **Skill Rekomendasi:** `impeccable`, `frontend-ui-engineering`
- **Status:** `[ ] Pending`
- **Deskripsi:** Menghadirkan konsol kerja yang efisien bagi guru bimbingan konseling untuk menindaklanjuti laporan.

* [ ] Buat KPI Metrics bar di puncak dashboard (Total Masuk, Butuh Respons Segera, Dalam Penanganan, Selesai).
* [ ] Rancang data table dengan filter multi-kategori (Status, Jenis Kasus, Anonim/Identitas Terbuka) dan kolom pencarian instan.
* [ ] Sediakan drawer/modal investigasi kasus: pratinjau bukti foto resolusi penuh (lightbox), input catatan guru, dan pengubah status kasus.
* [ ] Pastikan trigger API email notifikasi (`/api/admin/send-notification`) terpanggil saat status laporan diperbarui.

### Task 3.3: UAT End-to-End, Security Check & Persiapan Presentasi MPI
- **PIC:** Wahyu & Seluruh Tim
- **Reviewer:** Aufa Wafi, Ivan, Wahyu
- **Skill Rekomendasi:** `code-review-and-quality`, `security-and-hardening`
- **Status:** `[ ] Pending`
- **Deskripsi:** Pengujian kelayakan sistem dan penyusunan materi presentasi matakuliah MPI.

* [ ] Uji skenario UAT lengkap (Pendaftaran akun siswa $\rightarrow$ Pembuatan laporan $\rightarrow$ Penanganan oleh admin BK $\rightarrow$ Siswa menerima notifikasi status).
* [ ] Audit keamanan Firestore rules agar hak akses antar role (Siswa vs Guru) terisolasi sempurna.
* [ ] Jalankan audit Lighthouse (Mobile & Desktop) dengan target skor performa & aksesibilitas hijau.
* [ ] Dokumentasikan perbandingan UI/UX (Before vs After) sebagai bukti pencapaian dalam laporan proyek MPI.

**Quality Gate Sprint 3:**
- Seluruh alur sistem berfungsi 100% tanpa error di console browser.
- Tampilan responsif di semua ukuran layar tanpa horizontal overflow.
- Tim siap melakukan live demo saat jadwal presentasi mata kuliah MPI.

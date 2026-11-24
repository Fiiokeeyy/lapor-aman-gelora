# "Lapor Aman Gelora" Implementation Plan & Sprint Roadmap
## Revitalisasi UI/UX Modern & Anti-AI Slop (Mata Kuliah MPI Semester 7)

> **Untuk Tim Pengembang (Aufa, Ivan, Wahyu):** Dokumen ini adalah acuan kerja teknis resmi untuk merombak tampilan dan pengalaman pengguna (UI/UX) aplikasi **Lapor Aman SMP Gelora**. Gunakan format checkbox (`- [ ]`) untuk melacak progres tugas harian.

- **Goal:** Menghidupkan kembali dan memodernisasi antarmuka aplikasi "Lapor Aman" dari format purwarupa PKM Semester 5 yang masih bertampilan *AI-Slop generic* menjadi platform pelaporan bullying modern, interaktif, responsif, dan manusiawi untuk presentasi Mata Kuliah MPI.
- **Target Penyelesaian:** Desember 2026 (Siap Demo & UAT Mata Kuliah MPI)
- **Spesifikasi Acuan:** [`docs/PRD.md`](file:///d:/lapor-aman-gelora/docs/PRD.md)
- **Alur & Fitur Backend:** Tetap 100% konsisten (Firebase Auth, Firestore, Cloudinary, Nodemailer, Role Admin/Guru/Siswa).

---

## 👥 Tim Pengembang & Pembagian Peran (RACI Matrix)

| Nama | Peran | Tanggung Jawab Utama | Rekomendasi Skills Utama |
| :--- | :--- | :--- | :--- |
| **Aufa Wafi** | *Lead Project & UI/UX Architect* | Arsitektur frontend Next.js 15, standar Anti-Slop, redesign Beranda (Bento Grid), Header/Navbar modern, Dashboard Utama, Code Review & Integrasi | `impeccable`, `frontend-ui-engineering`, `antislop-ui`, `antislop-code` |
| **Ivan** | *Frontend & Interaction Engineer* | Desain mikro-interaksi (Framer Motion), Stepper Form `/lapor`, Mobile ergonomics & bottom drawer, komponen kartu kategori edukatif, A11Y | `frontend-ui-engineering`, `antislop-human`, `antislop-layoutmobile` |
| **Wahyu** | *Backend, Security & QA Engineer* | Verifikasi aturan keamanan Firestore, pengujian kompresi gambar & Cloudinary, audit sanitasi input form, UAT testing, checklist kelayakan demo MPI | `security-and-hardening`, `test-driven-development`, `performance-optimization` |

*(Catatan: Kolom **PIC / Assignee** pada setiap task di bawah dapat dikoordinasikan atau disesuaikan bersama antar anggota tim).*

---

## 🎨 Global Design & Engineering Constraints

1. **Anti-AI Slop Mandate:**
   - Hapus semua animasi blob blur mengambang (`blur-3xl`, `mix-blend-multiply`, `animate-blob`).
   - Hapus pemisah ombak SVG kaku (*wave separator*).
   - Terapkan tata letak berbasis struktur editorial/bento grid yang teratur dan bermakna.
   - Ganti copywriting klise AI ("Platform Masa Depan", "Solusi Holistik") dengan bahasa empati yang ramah siswa SMP, lugas, dan terpercaya.
2. **Identitas Warna (Tetap Dipertahankan):**
   - **Primary Canvas & Accents:** Light Sky Blue (`#F0F7FF` canvas, `#BAE6FD` borders, `#0284C7` / `#2563EB` solid brand).
   - **Action & Urgency Accents:** Energetic Orange (`#F97316` / `#EA580C`) untuk tombol aksi utama (*Call-to-Action*) dan lencana peringatan.
   - **Neutral Deep Slate:** `#0F172A` untuk teks judul tajam, `#475569` untuk body teks terbaca nyaman.
3. **Komponen & Arsitektur:**
   - Next.js 15 App Router, React 19 Server/Client Components yang seimbang.
   - Tailwind CSS v4 untuk styling yang presisi dan cepat.
   - Framer Motion untuk transisi mikro yang halus (*subtle springs*, bukan over-animated).
   - Mobile-First: Form pelaporan dan dashboard harus nyaman dioperasikan satu tangan dengan jempol pada layar smartphone.

---

## 🧭 Ringkasan Jadwal Sprint

```
[SPRINT 1: Foundation, Anti-Slop Design System & Layout Core]
 (Setup Environment, Token Warna, Navbar & Footer Redesign, Komponen Atom UI)
                           │
                           ▼
[SPRINT 2: Beranda Modern & Stepper Form Pelaporan (/lapor)]
 (Bento Grid Hero, Alur Edukasi Kasus, Form Wizard Ramah Siswa, Dropzone Kompresi)
                           │
                           ▼
[SPRINT 3: Portal Siswa, Admin Console, Testing & Final Polish]
 (Dashboard Siswa, Timeline Tracker, Admin Management Sheet, UAT & Presentasi MPI)
```

---

## 📋 Rincian Task Pengembangan

### SPRINT 1: Foundation, Anti-Slop Design System & Layout Core (Active Sprint)

#### Task 1.1: Scaffolding Environment & Dependency Verification
- **Target Selesai:** Hari 1–2
- **PIC:** Wahyu
- **Reviewer:** Aufa Wafi
- **Skill Rekomendasi:** `performance-optimization`, `frontend-ui-engineering`
- **Status:** `[x] Selesai`
- **Tugas:**
  - [x] Selesaikan instalasi paket npm (`npm install`) di lokal (612 paket terpasang).
  - [x] Verifikasi build Next.js (`npm run build`) dan linting (`npm run lint`) sukses exit code 0.
  - [x] Konfigurasi variable font `Plus Jakarta Sans` pada `layout.tsx` dan hapus seluruh referensi Arial/Inter.
  - [x] Siapkan utility helper `cn` (clsx + tailwind-merge) di `src/lib/utils.ts`.

#### Task 1.2: Redesain Komponen Navigasi (Header, Mobile Crave Popup & App Bottom Nav)
- **Target Selesai:** Hari 3–4
- **PIC:** Aufa Wafi
- **Reviewer:** Ivan
- **Skill Rekomendasi:** `frontend-ui-engineering`, `impeccable`, `antislop-human`, `antislop-layoutmobile`
- **Status:** `[ ] In Progress / Ready for Final Polish`
- **Tugas:**
  - [x] **Header Publik Desktop:** Rombak `src/components/Header.tsx` menjadi floating frosted glass navbar (`backdrop-blur-md bg-white/85 border border-slate-200/80 shadow-sm sticky top-3 z-40 rounded-full`).
  - [x] **Mobile Landing Page Popup (Crave HRM Parity):** Buat modal menu melayang di tengah layar (`rounded-[2rem]` dengan backdrop gelap blur), daftar menu kapital tebal dengan nomor indeks biru (`BERANDA 01`, `ALUR LAPORAN 02`, dll), dan tombol CTA di bawah.
  - [x] **Mobile App Bottom Bar (`src/components/MobileAppBottomNav.tsx`):** Komponen navigasi bawah mengambang (`fixed bottom-4 left-3 right-3 z-40 rounded-3xl bg-white/92 shadow-2xl`) khusus untuk halaman yang memerlukan login (`/siswa/dashboard`, `/lapor`, `/admin/dashboard`) yang ramah jempol satu tangan.
  - [x] **Slide-Up Bottom Sheet Drawer (`src/components/MobileAppDrawer.tsx`):** Drawer popup ke atas saat tombol "Lainnya" diklik, lengkap dengan drag handle, profil user, tautan bantuan, dan tombol logout.
  - [ ] Uji responsivitas navigasi pada resolusi mobile (375px), tablet (768px), dan desktop (1440px).

#### Task 1.3: Redesain Footer & Desain Sistem Reusable UI Tokens
- **Target Selesai:** Hari 4–5
- **PIC:** Ivan
- **Reviewer:** Aufa Wafi
- **Skill Rekomendasi:** `antislop-human`, `antislop-ui`, `frontend-ui-engineering`
- **Status:** `[x] Selesai`
- **Tugas:**
  - [x] **Redesain Footer Modern (`src/components/Footer.tsx`):**
    - Bersihkan tampilan footer lama menjadi tata letak editorial modern 3 kolom seimbang.
    - Cantumkan identitas resmi SMP Gelora Depok, saluran kontak resmi, dan tautan media sosial.
    - Tambahkan saluran hotline darurat terpercaya: KPAI (119 ext. 8), Sahabat Anak (1500-771), dan Tim Konseling SMP Gelora.
    - Pastikan rasio kontras teks terhadap background gelap memenuhi standar aksesibilitas WCAG AA (> 4.5:1).
  - [x] **Membangun Koleksi Komponen Atomik UI (`src/components/ui/`):**
    - **`Button.tsx`:** Variasi tombol `primary` (oranye vibran), `secondary` (sky blue halus), `ghost`, `danger`, `outline`, lengkap dengan transisi micro-haptics `active:scale-[0.98]` dan state loading spinner.
    - **`Badge.tsx`:** Lencana status kasus (`Menunggu Verifikasi` [amber], `Dalam Investigasi` [biru], `Selesai` [emerald], `Ditolak` [rose], `Netral` [sky]) berformat pill membulat halus (`rounded-full`).
    - **`Card.tsx`:** Kontainer kartu dengan radius konsisten `rounded-3xl` (24px), border halus, dan bayangan berlapis ambient (*soft multi-layered shadows*).
  - [x] Jalankan verifikasi linting (`npm run lint`) dan build (`npm run build`) untuk mengonfirmasi Sprint 1 rampung 100%.

---

### SPRINT 2: Beranda Modern & Stepper Form Pelaporan

#### Task 2.1: Revamp Beranda (Homepage `/`) — Crave HRM Parity & Zero AI-Slop
- **Target Selesai:** Hari 6–8
- **PIC:** Aufa Wafi
- **Reviewer:** Ivan
- **Skill Rekomendasi:** `impeccable`, `antislop-ui`, `frontend-ui-engineering`, `antislop-copywriting`
- **Tugas (13 Seksi Terstruktur Berstandar Crave HRM):**
  - [ ] **Seksi 1 (Hero & Mockup Lift):** Hapus blob blur dan wave separator. Buat Hero berdaya tarik tinggi dengan status pill, headline berkarakter tegas, dual CTA (oranye lapor + ghost pelajari), serta **Floating App Mockup Card** (tampilan dashboard preview diangkat dengan ambient shadow biru).
  - [ ] **Seksi 2 (Trust Bar):** Marquee/bar logo mitra sekolah (SMP Gelora, Kemendikbud, Sahabat Anak, KPAI).
  - [ ] **Seksi 3 (Bento Grid Nilai Inti):** Bento grid interaktif (resolusi kasus transparan, enkripsi identitas 100%, dan status tim BK siap dampingi).
  - [ ] **Seksi 4 (6-Feature Grid):** Grid 3x2 fitur unggulan perlindungan siswa dengan ikon lucide dan pill status modern.
  - [ ] **Seksi 5 (Interactive Workflow):** Split view langkah penanganan kasus (alur kiri 1-2-3 berdampingan dengan interactive card visualizer di kanan).
  - [ ] **Seksi 6 (Dark Slate Security Section):** Kontainer dark slate premium bertema privasi, perlindungan data, dan jaminan anti-retaliasi.
  - [ ] **Seksi 7 (Category Tabs):** Tab interaktif 5 kategori bullying (Fisik, Verbal, Siber, Sosial, Emosional) dengan contoh nyata.
  - [ ] **Seksi 8 (Counselor Voice):** Kartu testimoni guru BK / kepala sekolah dengan avatar dan kutipan empati.
  - [ ] **Seksi 9 (Interactive FAQ):** Accordion tanya jawab seputar kerahasiaan dan keamanan pelapor.
  - [ ] **Seksi 10 (Developer Team Spotlight):** Kartu profil pengembang (Aufa Wafi, Ivan, Wahyu) bergaya kartu Crave (seperti Eka Revandi di Crave) untuk memperkuat portofolio PKM & MPI.
  - [ ] **Seksi 11 (High-Impact CTA Banner):** Kartu penutup beraksen oranye/biru mengajak siswa tidak takut bersuara.

#### Task 2.2: Transformasi Formulir Pelaporan (`/lapor`) Menjadi Interactive Stepper Wizard
- **Target Selesai:** Hari 9–11
- **PIC:** Ivan
- **Reviewer:** Wahyu
- **Skill Rekomendasi:** `frontend-ui-engineering`, `antislop-human`
- **Tugas:**
  - [ ] Refactor formulir panjang di `src/app/lapor/page.tsx` menjadi 3–4 langkah bertahap (*Stepper Wizard*).
  - [ ] **Step 1 (Kategori):** Pilihan visual jenis kasus dengan ikon dan tooltip penjelasan.
  - [ ] **Step 2 (Kronologi Kejadian):** Kolom lokasi kejadian, waktu/tanggal, dan deskripsi kejadian dengan indikator panjang karakter yang memandu.
  - [ ] **Step 3 (Lampiran Bukti):** Redesain dropzone upload bukti foto dengan preview instan, tombol hapus, dan badge proses kompresi gambar.
  - [ ] **Step 4 (Privasi & Submit):** Toggle saklar anonimitas yang dilengkapi penjelasan hak siswa, serta review ringkasan laporan sebelum dikirim.
  - [ ] Tambahkan pill kuota harian yang ramah di bagian atas formulir.

#### Task 2.3: Optimasi Pipeline Gambar & Sanitasi Input Form
- **Target Selesai:** Hari 11–12
- **PIC:** Wahyu
- **Reviewer:** Aufa Wafi
- **Skill Rekomendasi:** `security-and-hardening`, `performance-optimization`
- **Tugas:**
  - [ ] Validasi ukuran file dan tipe MIME (JPG/PNG/WEBP saja) sebelum proses kompresi.
  - [ ] Pastikan `browser-image-compression` bekerja mulus tanpa membekukan antarmuka browser siswa di smartphone spek rendah.
  - [ ] Audit Firestore payload agar tidak ada injeksi script HTML pada kolom deskripsi laporan.

---

### SPRINT 3: Portal Siswa, Admin Console, UAT & Presentasi MPI

#### Task 3.1: Redesain Dashboard Siswa (`/siswa/dashboard`)
- **Target Selesai:** Hari 13–15
- **PIC:** Ivan
- **Reviewer:** Aufa Wafi
- **Skill Rekomendasi:** `frontend-ui-engineering`, `antislop-ui`
- **Tugas:**
  - [ ] Rombak tampilan riwayat laporan siswa menjadi kartu-kartu status modern dengan timeline progres vertikal.
  - [ ] Sediakan modal dialog interaktif untuk melihat detail laporan lengkap beserta tanggapan/catatan guru BK.
  - [ ] Buat empty state yang menenangkan jika siswa belum pernah mengirimkan laporan.
  - [ ] Sediakan shortcut cepat untuk mengirim laporan baru jika terjadi insiden darurat.

#### Task 3.2: Modernisasi Console Admin/Guru BK (`/admin/dashboard`)
- **Target Selesai:** Hari 16–18
- **PIC:** Aufa Wafi
- **Reviewer:** Wahyu
- **Skill Rekomendasi:** `impeccable`, `frontend-ui-engineering`
- **Tugas:**
  - [ ] Rombak tabel laporan admin menjadi data table modern dengan pencarian instan, filter kategori perundungan, dan tab status (*Semua, Menunggu, Dalam Proses, Selesai*).
  - [ ] Desain Drawer/Modal detail investigasi kasus: tampilkan bukti foto dengan fitur lightbox zoom, info pelapor (atau badge Anonim), dan formulir respons cepat.
  - [ ] Integrasikan dropdown pembaruan status laporan yang memicu email otomatis ke pelapor.
  - [ ] Sediakan ringkasan metrik statistik (Total Kasus, Kasus Aktif, Kasus Tuntas).

#### Task 3.3: Security Review, UAT & Persiapan Demo MPI
- **Target Selesai:** Hari 19–20
- **PIC:** Wahyu
- **Reviewer:** Aufa Wafi & Ivan
- **Skill Rekomendasi:** `security-and-hardening`, `code-review-and-quality`
- **Tugas:**
  - [ ] Verifikasi Firebase Security Rules: Pastikan siswa biasa tidak dapat mengakses data laporan siswa lain atau membuka dashboard admin.
  - [ ] Jalankan audit performa Lighthouse (Target score > 90 untuk Performance, Accessibility, dan Best Practices).
  - [ ] Jalankan skenario UAT lengkap: Siswa mendaftar -> login -> lapor anonim -> guru memverifikasi -> siswa melihat update status.
  - [ ] Buat slide dek ringkasan arsitektur dan perbandingan before/after UI untuk presentasi mata kuliah MPI.

# Product Requirement Document (PRD) & Technical Design Spec
# Project: "Lapor Aman Gelora" — Platform Pelaporan & Penanganan Kasus Bullying Sekolah

- **Status:** Final Draft / Acuan Pengembangan Mata Kuliah MPI
- **Date:** 2026-11-24
- **Target Deadline:** Presentasi Mata Kuliah MPI (Target Rilis Revitalisasi: Desember 2026)
- **Project Team & Roles (Tim 3 Orang):**
  * **Aufa Wafi** — *Lead Project & Lead UI/UX Frontend Engineer* (Arsitektur Next.js 15, Anti-Slop Design Language, Redesain Beranda & Dashboard Utama, Code Review & Integrasi)
  * **Ivan** — *Frontend & Interaction Engineer* (Micro-interactions Framer Motion, Mobile-first Ergonomics & Bottom Sheet, Form Wizard `/lapor`, Aksesibilitas WCAG/A11Y)
  * **Wahyu** — *Backend, Security & QA Engineer* (Firebase Firestore Rules Hardening, API Route Sanitization, Pipeline Optimasi Gambar Cloudinary, Pengujian UAT, Deployment & Quality Gate)
- **Target Platform:** Web Desktop & Mobile Responsive PWA-ready
- **Tech Stack:** Next.js 15 (App Router), React 19, Tailwind CSS v4, Lucide React, Framer Motion, Firebase (Auth & Firestore), Cloudinary, Nodemailer.
- **Design Reference & Aesthetic Benchmark:** **Crave HRM Landing Page (`https://hrm.craveservices.my.id/`)** disesuaikan ke identitas Lapor Aman SMP Gelora.
- **Filosofi Desain:** **100% Anti-AI Slop**, High-Craft Modern EdTech/SaaS Aesthetic, Bento Grid, Floating Mockup Showcase, Empathetic Copywriting.

---

## 1. Objective & Vision

### 1.1 Latar Belakang & Konteks Proyek
Proyek **Lapor Aman** berawal dari ide Program Kreativitas Mahasiswa (PKM) pada Semester 5 untuk menciptakan kanal pelaporan kasus perundungan (bullying) yang aman, rahasia, dan kredibel di lingkungan SMP Gelora Depok. Memasuki **Semester 7 pada Mata Kuliah Manajemen Proyek TI (MPI)**, proyek ini direvitalisasi secara menyeluruh dari sisi **UI/UX dan Engineering Quality** untuk dipresentasikan dan diuji kelayakannya sebagai produk siap pakai.

### 1.2 Masalah Desain Sebelumnya (The "AI-Slop" Disease)
Versi awal aplikasi ini dibangun dengan bantuan scaffold AI awal yang menghasilkan pola **AI Slop** yang sangat kentara:
1. **Generic Hero Section:** Gradien background blur blob mengambang ungu/biru tanpa fungsi (`animate-blob`), dipadu potongan gelombang SVG kaku (*wave separator*).
2. **Ketiadaan Hirarki Visual:** Elemen teks judul besar, kartu-kartu berjejer 3 kolom standar dengan ikon di dalam lingkaran generik (*Masuk Akun*, *Kirim Laporan*, *Pantau Proses*) tanpa kedalaman interaksi atau *storytelling*.
3. **Copywriting AI Slop Klise:** Kalimat-kalimat hampa seperti *"Platform Pelaporan Modern untuk Sekolah Masa Depan"* yang tidak berbicara langsung kepada psikologi korban/pelapor bullying.
4. **Formulir Kaku:** Halaman `/lapor` berbentuk form panjang yang intimidatif bagi siswa yang sedang tertekan atau cemas, minim panduan visual, serta feedback upload yang dingin.
5. **Dashboard Statis:** Tampilan dashboard siswa dan admin menyerupai template admin bootstrap dasar yang tidak ramah sentuhan mobile dan kurang mencerminkan urgensi status penanganan kasus.

### 1.3 Solusi Desain: Mengadopsi Desain Berstandar Crave HRM (`hrm.craveservices.my.id`)
Melihat kesuksesan antarmuka modern pada **Crave HRM**, seluruh struktur landing page dan komponen interaktif Lapor Aman akan direka ulang mengikuti bahasa desain Crave:
- **Floating Hero App Mockup:** Menampilkan preview antarmuka aplikasi pelaporan yang diangkat (*lifted perspective card*) dengan bayangan bertingkat halus dan ambient soft glow.
- **Editorial Bento Grid:** Membagi nilai inti perlindungan siswa ke dalam grid bento fungsional (kartu utama metrik penanganan kasus, kartu live status tiket, dan jaminan enkripsi).
- **Struktur 6 Kartu Fitur Unggulan:** 3x2 grid dengan aksen pill dan ikon modern.
- **Dark Contrast Section (Privasi & Keamanan Siswa):** Kontainer dark slate premium yang menegaskan perlindungan identitas, hak anonim, dan komitmen anti-retaliasi.
- **Alur Pelaporan Interaktif Berdampingan:** Alur langkah 1-2-3 di sisi kiri berdampingan dengan interactive card visualizer di sisi kanan.
- **Creator Spotlight Card (Crave Parity):** Bagian profil pengembang tim mahasiswa (Aufa Wafi, Ivan, Wahyu) bergaya kartu pengembang Crave (seperti kartu Eka Revandi) sebagai penguat kredibilitas PKM & MPI.
- **Tetap Konsisten dengan Warna Identitas:** Biru Muda/Sky Blue (`#E0F2FE`, `#0284C7`) sebagai warna dasar ketenangan/kepercayaan dan Oranye Enerjik (`#F97316`) sebagai aksen tombol aksi dan penegasan stop-bullying.

---

## 2. Pemetaan AI Skills yang Digunakan Tim

Sistem telah dilengkapi dengan koleksi skill AI spesialis yang diaktifkan untuk menjaga mutu kode dan estetika:

| Kategori Skill | Nama Skill | Peran & Penggunaan dalam Proyek |
| :--- | :--- | :--- |
| **Visual & Aesthetic Craft** | `impeccable` | Mengimplementasikan desain selevel Crave HRM: tipografi berbobot tajam, sudut membulat 24px (`rounded-3xl`), bayangan bertingkat (*ambient layered shadows*), dan tata letak editorial bebas template generik. |
| **Frontend Architecture** | `frontend-ui-engineering` | Membangun komponen Next.js 15 / React 19 yang kokoh, modular, performan, minim re-render, dan terintegrasi mulus dengan Framer Motion. |
| **Filter Anti AI-Slop** | `antislop`, `antislop-ui`, `antislop-code` | Mematikan segala bentuk AI-slop: menghapus animasi blob blur mengambang, wave divider SVG kaku, komentar kode AI berlebihan, dan menjaga rasio kontras WCAG AA. |
| **Mobile & Human Ergonomics** | `antislop-human`, `antislop-layoutmobile` | Memastikan zona sentuh jempol (minimal 44px), mobile-first drawer, bottom actions pada form stepper, dan kenyamanan visual bagi siswa remaja. |
| **Copywriting & Empati** | `antislop-copywriting` | Menyusun copywriting yang berempati, manusiawi, hangat, dan tidak klise untuk membesarkan hati korban bullying agar berani melapor. |
| **Keamanan & Validasi** | `security-and-hardening` | Mengaudit Firebase Firestore security rules, mengamankan identitas anonim siswa, dan sanitasi payload laporan. |
| **Testing & Quality Gate** | `test-driven-development`, `code-review-and-quality` | Memastikan setiap alur pelaporan, kompresi gambar, dan update status lulus verifikasi sebelum dinyatakan rampung. |

---

## 2. Design System & Anti-Slop Guidelines

### 2.1 Palet Warna & Semantic Tokens (Konsisten dengan Identitas Asli)
* **Primary Sky Blue (Kenyamanan & Kepercayaan):**
  - Light Canvas: `#F0F7FF` / `bg-blue-50/60`
  - Subtle Border: `#BAE6FD` / `border-sky-200`
  - Solid Primary Brand: `#0284C7` (Sky 600) / `#2563EB` (Blue 600)
* **Accent Warning/Action Orange (Keberanian & Aksi Lapor):**
  - Brand Orange: `#F97316` (Orange 500)
  - Hover/Active Orange: `#EA580C` (Orange 600)
  - Soft Orange Badge Surface: `#FFF7ED` (Orange 50) dengan border `#FFEDD5` (Orange 100)
* **Neutral & Typography Tokens:**
  - Foreground / Deep Slate (Judul & Heading): `#0F172A` (Slate 900)
  - Secondary Slate (Deskripsi & Paragraf): `#475569` (Slate 600)
  - Muted / Caption (Metadata & Subtitle): `#94A3B8` (Slate 400)
  - Card Surface: Pure White `#FFFFFF` dengan bayangan *multi-layered ambient* halus: `box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 8px 24px -4px rgba(15,23,42,0.06)`
* **Status Indikator Kasus (Tetap & Presisi):**
  - *Menunggu Verifikasi:* `#F59E0B` (Amber) / Surface `#FEF3C7`
  - *Dalam Investigasi:* `#3B82F6` (Blue) / Surface `#DBEAFE`
  - *Selesai / Ditangani:* `#10B981` (Emerald) / Surface `#D1FAE5`
  - *Ditolak / Kasus Palsu:* `#EF4444` (Rose) / Surface `#FFE4E6`

### 2.2 Prinsip Anti-AI Slop (Wajib Dipatuhi)
1. **Dilarang Menggunakan Blur Blobs Mengambang:** Hapus semua `rounded-full blur-3xl opacity-70 animate-blob` yang tidak memiliki fungsi visual.
2. **Dilarang Menggunakan Wave Divider Kaku:** Hapus pemisah ombak SVG generik antara hero dan fitur. Gunakan pembagian kontainer alami dengan margin terukur atau subtle card layering.
3. **Hindari Kalimat Klise AI:** Hindari frasa "Solusi masa depan", "revolusi teknologi", "ekosistem holistik". Gunakan instruksi tegas, ramah anak, berempati, dan jelas ("Laporanmu Diterima Guru BK", "Identitasmu Dijamin 100% Rahasia").
4. **Sentuhan Interaktif Bermakna:** Animasi bukan sekadar `scale: 1.05` saat hover. Terapkan feedback aktif: klik tombol ada haptic visual (`scale: 0.98`), drag file dropzone memiliki transisi border berpendar lembut, tab filter bergerak halus dengan layoutId Framer Motion.
5. **Mobile-First Ergonomics:** Tombol aksi utama (CTA Lapor) mudah dijangkau jempol satu tangan di smartphone.

---

## 3. Arsitektur Antarmuka (Peta Halaman & Komponen)

```text
src/
├── app/
│   ├── layout.tsx                   # Root Layout, font Plus Jakarta Sans/Inter, Toast provider
│   ├── globals.css                  # Tailwind v4 import, token warna & utility anti-slop
│   ├── page.tsx                     # [REVAMP] Beranda Modern (Bento Hero, Live Ticker, Alur Interaktif)
│   ├── lapor/
│   │   └── page.tsx                 # [REVAMP] Stepper Form Lapor (Kategori, Detail, Bukti, Anonimitas)
│   ├── login/
│   │   └── page.tsx                 # [POLISH] Portal Masuk Terpadu (Siswa & Guru/Admin)
│   ├── siswa/
│   │   ├── login/page.tsx           # Login Siswa
│   │   ├── daftar/page.tsx          # Registrasi Siswa dengan verifikasi NISN
│   │   └── dashboard/page.tsx       # [REVAMP] Dashboard Siswa (Kartu Status Kasus, Riwayat, Detail Dialog)
│   ├── admin/
│   │   ├── login/page.tsx           # Login Petugas/Admin BK
│   │   └── dashboard/page.tsx       # [REVAMP] Admin Console (Filter Status, Prioritas, Aksi Verifikasi, Catatan)
│   ├── tentang-kami/page.tsx        # [POLISH] Profil SMP Gelora, Visi Perlindungan Anak
│   ├── pusat-bantuan/page.tsx       # Panduan Siswa & Kontak Darurat Hotline
│   ├── faq/page.tsx                 # Pertanyaan yang sering diajukan seputar kerahasiaan
│   ├── kebijakan-privasi/page.tsx   # Penjelasan perlindungan data siswa
│   ├── syarat-ketentuan/page.tsx    # Kebijakan etika pelaporan (anti laporan palsu)
│   └── api/
│       ├── admin/send-notification/ # Endpoint trigger email notifikasi (Nodemailer)
│       ├── auth/reset-password/     # Endpoint reset password
│       └── delete-image/            # Endpoint hapus berkas gambar
├── components/
│   ├── Header.tsx                   # [REVAMP] Floating Frosted Navbar (Desktop) & Crave Popup Modal (Mobile)
│   ├── Footer.tsx                   # [REVAMP] Footer editorial rapi, legal links, kontak sekolah
│   ├── MobileAppBottomNav.tsx       # [NEW] Mobile App Bottom Bar (Khusus Siswa & Admin yang login)
│   ├── MobileAppDrawer.tsx          # [NEW] Slide-Up Bottom Sheet Drawer (Menu "Lainnya" & Profil)
│   ├── ui/                          # Sub-komponen modular (Button, Badge, Modal, Tabs, StepIndicator)
│   └── icons/                       # Icon pack konsisten (Lucide React)
└── lib/
    ├── firebase.ts                  # Inisialisasi Firebase Client
    └── utils.ts                     # Helper date-formatter, classname merger
```

### 3.1 Pola Navigasi Mobile Spesifik (Dual Mobile Navigation Paradigms)

Untuk memastikan pengalaman mobile ramah satu tangan (*thumb-zone friendly*), aplikasi menggunakan 2 pola navigasi mobile yang berbeda sesuai konteks pengguna:

#### A. Landing Page & Halaman Publik (Crave HRM Floating Popup Modal)
- **Pemicu:** Tombol burger di navbar atas.
- **Tampilan:** Modal kartu melayang di tengah layar (*Floating Centered Card*) dengan sudut membulat lebar `rounded-[2rem]`, latar belakang gelap transparan dengan efek `backdrop-blur-md bg-black/40`.
- **Anatomi:**
  - Header: Logo SMP Gelora + brand "LAPOR AMAN" + tombol tutup silang (X).
  - Menu Navigasi Bergaya Editorial: Teks huruf besar tebal berukuran `text-xl` dengan indeks angka biru kecil di sampingnya:
    - `BERANDA 01`
    - `ALUR LAPORAN 02`
    - `BENTUK BULLYING 03`
    - `KEAMANAN & PRIVASI 04`
    - `FAQ 05`
    - `TIM PENGEMBANG 06`
  - Tombol CTA Bawah: Tombol pil tegas berwarna oranye/dark: *"Buat Laporan Sekarang"* atau *"Masuk Portal Siswa"*.

#### B. Dashboard Siswa, Admin & Form Laporan (Mobile App Floating Bottom Bar & Slide-Up Drawer)
- **Konsep:** Seperti aplikasi native modern (iOS/Android PWA), seluruh navigasi ditempatkan di **bagian bawah layar** agar 100% mudah dijangkau jempol satu tangan tanpa harus meraih ke atas layar ponsel.
- **Bottom Navigation Bar:**
  - Mengambang di bagian bawah: `fixed bottom-4 left-4 right-4 z-40 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-2xl rounded-full px-3 py-2 flex justify-around items-center`.
  - Item Navigasi Siswa:
    1. **Dasbor** (Icon `LayoutDashboard`)
    2. **Lapor** (Icon `PlusCircle` dengan sorotan aksen oranye mencolok di tengah)
    3. **Riwayat** (Icon `Clock`)
    4. **Konseling** (Icon `HeartHandshake`)
    5. **Lainnya** (Icon `Menu`) $\rightarrow$ Membuka **Slide-Up Bottom Sheet**!
  - Item Navigasi Admin:
    1. **Dasbor** (Icon `LayoutDashboard`)
    2. **Kasus Masuk** (Icon `ShieldAlert`)
    3. **Investigasi** (Icon `Search`)
    4. **Lainnya** (Icon `Menu`) $\rightarrow$ Membuka **Slide-Up Bottom Sheet**!
- **Slide-Up Bottom Sheet Drawer ("Popup ke Atas"):**
  - Dipicu saat tombol **"Lainnya"** ditekan (atau gesture geser ke atas).
  - Meluncur halus dari bawah (`translate-y-0` dengan Framer Motion *spring damping*).
  - Dilengkapi *drag handle indicator* (`w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-4`).
  - Berisi:
    - Header Sheet: Logo sekolah + Identitas Lapor Aman + Tombol Tutup (X).
    - Status Akun & Switch Peran (jika admin/guru).
    - Daftar Menu Lengkap: Pengaturan Akun, Bantuan & Darurat Hotline, Panduan Etika Pelaporan, Kebijakan Privasi.
    - Kartu Profil Pengguna di Bawah: Avatar, Nama Siswa/Guru, NISN/Email, dan tombol Logout berwarna merah lembut.

---

## 4. Rincian Modul & Arsitektur Landing Page (Crave HRM Parity)

### 4.1 Anatomi Landing Page Berstandar Crave HRM (`/`)

Landing page akan disusun mengikuti hierarki visual bertingkat dari Crave HRM, dengan adaptasi tema perlindungan anti-bullying sekolah:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. Floating Frosted Navbar (Logo SMP Gelora, Menu Navigasi, CTA Lapor) │
├────────────────────────────────────────────────────────────────────────┤
│ 2. Hero Section:                                                       │
│    - Status Pill: "Platform Resmi Pengaduan Siswa SMP Gelora"          │
│    - Headline Utama: "Hentikan Perundungan. Suarakan Kebenaran."       │
│    - Subtitle Empatik + Dual CTA (Oranye Lapor + Ghost Pelajari)      │
│    - Micro Trust Badges (100% Rahasia • Respon < 24 Jam • Tim BK Ahli) │
│    - [HERO APP SHOWCASE] Perspective Lifted Mockup Card dengan         │
│      tampilan preview dashboard & status laporan aktif                 │
├────────────────────────────────────────────────────────────────────────┤
│ 3. School & Ministry Trust Bar (SMP Gelora, Kemendikbud, KPAI)         │
├────────────────────────────────────────────────────────────────────────┤
│ 4. Bento Grid Showcase (Nilai Inti & Statistik Transparan Penanganan)  │
│    - Kartu Utama: Metrik Resolusi Kasus dengan Grafik Progres Halus    │
│    - Kartu Sekunder: Jaminan Enkripsi & Perlindungan Anonim Siswa      │
│    - Mini Stats Strip (Total Selesai, Respon Cepat, Bebas Biaya)       │
├────────────────────────────────────────────────────────────────────────┤
│ 5. 6-Feature Cards Grid (3x2 Kartu Layanan Perlindungan Anak)          │
│    - Lapor Anonim • Enkripsi Berkas • Konseling BK Terpandu •         │
│    - Kompresi Gambar Cepat • Pelacak Status Realtime • Hotline 24 Jam  │
├────────────────────────────────────────────────────────────────────────┤
│ 6. Interactive Workflow Deep-Dive (Alur Penanganan Kasus):             │
│    - Sisi Kiri: 3 Langkah Alur Bertahap (Tulis -> Verifikasi -> Solusi)│
│    - Sisi Kanan: Interactive Card Preview Menampilkan Detail Simulasi  │
├────────────────────────────────────────────────────────────────────────┤
│ 7. Dark Slate Security & Anti-Retaliation Section (Crave Dark Style):  │
│    - Kontras tinggi dark slate container: Jaminan Anti-Balas Dendam,   │
│      Kerahasiaan NISN, dan Ruang Aman Konseling                        │
├────────────────────────────────────────────────────────────────────────┤
│ 8. Interactive Category Explorer (5 Bentuk Perundungan):               │
│    - Tab Navigasi: Fisik, Verbal, Siber, Sosial, Emosional             │
│    - Kartu Edukasi Interaktif dengan Ciri-Ciri & Contoh Kasus Nyata    │
├────────────────────────────────────────────────────────────────────────┤
│ 9. Educator & Counselor Voice (Testimoni Tim Bimbingan Konseling)      │
├────────────────────────────────────────────────────────────────────────┤
│ 10. Interactive FAQ Accordion (Jawaban untuk Kekhawatiran Siswa)       │
├────────────────────────────────────────────────────────────────────────┤
│ 11. Developer Team Spotlight (Kartu Profil Pengembang Mahasiswa MPI):  │
│     - Showcase Aufa Wafi, Ivan, dan Wahyu (Gaya Kartu Eka Revandi)    │
│     - Kredibilitas Proyek PKM & Matakuliah Manajemen Proyek TI         │
├────────────────────────────────────────────────────────────────────────┤
│ 12. Final High-Impact CTA Banner (Ajakan Berani Bersuara)              │
├────────────────────────────────────────────────────────────────────────┤
│ 13. Modern Editorial Footer (Kontak Sekolah, Hotline Darurat, Legal)   │
└────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Formulir Pelaporan (`/lapor`) — Empathetic Stepper Form
- **Multi-Step Wizard Ramah Siswa:**
  - *Langkah 1: Jenis Kasus* (Kartu pilihan visual dengan ikon & penjelasan singkat, bukan sekadar radio button polos).
  - *Langkah 2: Ceritakan Kejadian* (Input lokasi, tanggal/waktu kejadian, dan kolom deskripsi terpandu dengan placeholder yang memancing detail penting tanpa memaksa).
  - *Langkah 3: Bukti Pendukung* (Dropzone drag & drop interaktif, indikator kompresi gambar real-time otomatis dari `browser-image-compression` untuk menghemat kuota).
  - *Langkah 4: Opsi Anonimitas & Konfirmasi* (Toggle anonim dengan visual badge yang menjelaskan identitas apa yang disembunyikan dari guru/siswa lain).
- **Quota Warning Pill:** Menampilkan sisa laporan hari ini dengan gaya lembut tanpa intimidasi.

### 4.3 Portal Siswa (`/siswa/dashboard`)
- **Status Tracker Visual:** Timeline perjalanan laporan (*Terkirim -> Diverifikasi Tim BK -> Investigasi & Konseling -> Selesai*).
- **Modal Detail Laporan:** Menampilkan detail laporan, tanggapan/catatan dari pihak guru BK, dan tautan lampiran bukti yang aman.
- **Empty State Manis & Bermakna:** Jika belum ada laporan, tampilkan ilustrasi menenangkan dan ajakan untuk selalu menjaga teman di sekolah.

### 4.4 Console Petugas / Admin BK (`/admin/dashboard`)
- **Metrics Bar:** Total laporan masuk, laporan butuh aksi segera (*urgent*), laporan dalam proses, dan laporan terselesaikan.
- **Tabel Kasus dengan Filter Cepat:** Filter berdasarkan jenis perundungan, status proses, tanggal laporan, dan opsi pelaporan anonim.
- **Drawer / Sheet Penanganan Kasus:** Panel aksi cepat untuk mengubah status (*Diverifikasi*, *Dalam Penanganan*, *Selesai*), menambahkan catatan investigasi guru BK, dan memicu notifikasi pembaruan ke siswa.

---

## 5. Non-Functional Requirements & Security
- **Privacy Assurance:** Laporan berstatus anonim wajib menyamarkan data NISN, nama, dan foto profil siswa dari tampilan publik.
- **Responsiveness:** Sempurna pada layar Smartphone (360px–480px), Tablet (768px–1024px), dan Desktop (>1280px).
- **Aksesibilitas (WCAG 2.1 AA):** Rasio kontras teks terhadap latar belakang minimal 4.5:1. Seluruh tombol interaktif memiliki state fokus keyboard yang jelas.
- **Fast Load:** File gambar diunggah melalui kompresi sisi klien sebelum disimpan di Cloudinary untuk memastikan proses unggah instan bahkan dengan koneksi internet seluler sekolah yang lambat.

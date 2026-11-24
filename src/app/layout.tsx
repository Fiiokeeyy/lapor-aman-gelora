import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";
import MobileAppBottomNav from "@/components/MobileAppBottomNav";
import SmoothScroll from "@/components/SmoothScroll";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lapor Aman - Platform Pengaduan & Perlindungan Siswa SMP Gelora",
  description: "Platform pelaporan dan penanganan perundungan (bullying) yang aman, rahasia, dan terpercaya bagi siswa SMP Gelora Depok.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${caveat.variable}`}>
      <body className={`${plusJakartaSans.className} antialiased bg-[#f8fafc] text-slate-900 min-h-screen flex flex-col font-sans`} suppressHydrationWarning={true}>
        <SmoothScroll>
          <Header />
          <main className="flex-1 pb-20 md:pb-0">
            {children}
          </main>
          <Footer />
          <MobileAppBottomNav />
        </SmoothScroll>
      </body>
    </html>
  );
}

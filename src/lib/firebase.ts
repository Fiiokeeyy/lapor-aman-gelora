import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Logika Konfigurasi:
// 1. Cek apakah ada config otomatis dari environment preview ini (__firebase_config).
// 2. Jika tidak ada (sedang di localhost), gunakan process.env dari file .env.local.
const previewConfig = (typeof window !== 'undefined' && (window as any).__firebase_config) 
  ? JSON.parse((window as any).__firebase_config) 
  : null;

const firebaseConfig = previewConfig || {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDummyKeyForBuildPreRendering123",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "lapor-aman-gelora.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "lapor-aman-gelora",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "lapor-aman-gelora.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:1234567890:web:1234567890",
};

// Inisialisasi Firebase (Singleton Pattern)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Inisialisasi layanan
const auth = getAuth(app);
const db = getFirestore(app);

// Export layanan
export { app, auth, db };
import React from 'react';

// =========================================================================
// 0. BRAND SIGNATURE STROKES (Pen Nib & Hand-Drawn Highlighter Underline)
// =========================================================================

export const HandcraftedPencilIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 20 20"
    className={className || 'w-4 h-4 text-orange-500 flex-shrink-0'}
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M14.2 2.8a2.1 2.1 0 0 1 3 3L6.5 16.5l-3.8.8.8-3.8L14.2 2.8Z"
      fill="#FFEDD5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.2 4.8l3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export const PencilSketchUnderline = ({ className }: { className?: string }) => (
  <svg
    className={`absolute -bottom-3 left-0 w-full h-3.5 text-orange-500/90 pointer-events-none select-none ${className || ''}`}
    viewBox="0 0 250 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 10C50 3.5 130 2 247 8.5M15 12C70 6 180 5.5 240 11"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HanddrawnDownArrow = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 22"
    className={className || 'w-5 h-5 text-orange-500 inline-block flex-shrink-0 translate-y-1'}
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 4C12 4 17 8.5 17 18M17 18L12.5 13.5M17 18L21 13.5"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// =========================================================================
// 1. HERO 3D STATIC ICONS (4 Upper Flanking Icons Only - Zero Mockup Overlap)
// =========================================================================

export const Hero3DShieldLock = () => (
  <svg viewBox="0 0 96 96" className="w-22 h-22 drop-shadow-[0_16px_22px_rgba(3,105,161,0.26)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="hShieldExtrude" x1="16" y1="14" x2="80" y2="86" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#0C4A6E" />
      </linearGradient>
      <linearGradient id="hShieldFace" x1="20" y1="10" x2="72" y2="78" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BAE6FD" />
        <stop offset="0.35" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="hShieldRim" x1="20" y1="10" x2="66" y2="72" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" stopOpacity="0.88" />
        <stop offset="1" stopColor="#7DD3FC" stopOpacity="0.25" />
      </linearGradient>
      <linearGradient id="hLockBody" x1="36" y1="42" x2="60" y2="66" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDBA74" />
        <stop offset="0.45" stopColor="#F97316" />
        <stop offset="1" stopColor="#C2410C" />
      </linearGradient>
    </defs>
    <ellipse cx="50" cy="88" rx="22" ry="4" fill="#0369A1" fillOpacity="0.16" />
    <path d="M52 14L24 25V46C24 64 35 76 52 84C69 76 80 64 80 46V25L52 14Z" fill="url(#hShieldExtrude)" />
    <path d="M46 10L18 21V42C18 60 29 72 46 80C63 72 74 60 74 42V21L46 10Z" fill="url(#hShieldFace)" stroke="url(#hShieldRim)" strokeWidth="2.2" />
    <path d="M46 14L22 23.5V41C22 50 25 58 31 64C28 50 30 32 46 14Z" fill="#FFFFFF" fillOpacity="0.34" />
    <rect x="37" y="45" width="22" height="20" rx="5" fill="#075985" fillOpacity="0.38" />
    <path d="M39 42V35C39 30.5 42 27.5 46 27.5C50 27.5 53 30.5 53 35V42" stroke="#9A3412" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M38 42V35C38 30.5 41.5 27.5 45.5 27.5C49.5 27.5 52.5 30.5 52.5 35V42" stroke="#FEF3C7" strokeWidth="3.2" strokeLinecap="round" />
    <rect x="36" y="43" width="22" height="19" rx="5" fill="#9A3412" />
    <rect x="34" y="41" width="22" height="19" rx="5" fill="url(#hLockBody)" stroke="#FFEDD5" strokeWidth="1.2" />
    <circle cx="45" cy="49" r="2.2" fill="#7C2D12" />
    <path d="M45 50.5V54" stroke="#7C2D12" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const Hero3DVerifiedMedal = () => (
  <svg viewBox="0 0 96 96" className="w-22 h-22 drop-shadow-[0_16px_22px_rgba(2,132,199,0.24)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="hMedalDepth" x1="20" y1="18" x2="78" y2="78" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0369A1" />
        <stop offset="1" stopColor="#082F49" />
      </linearGradient>
      <radialGradient id="hMedalFace" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#E0F2FE" />
        <stop offset="45%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </radialGradient>
      <linearGradient id="hCheck3d" x1="30" y1="36" x2="62" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#E0F2FE" />
      </linearGradient>
    </defs>
    <ellipse cx="50" cy="86" rx="22" ry="4" fill="#0369A1" fillOpacity="0.16" />
    <circle cx="52" cy="50" r="30" fill="url(#hMedalDepth)" />
    <circle cx="49" cy="47" r="30" fill="#0369A1" />
    <circle cx="46" cy="44" r="30" fill="url(#hMedalFace)" stroke="#BAE6FD" strokeWidth="2" />
    <circle cx="46" cy="44" r="23" fill="#0284C7" fillOpacity="0.25" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1.2" />
    <path d="M25 32C30 21 44 16 58 20C44 21 34 27 25 32Z" fill="#FFFFFF" fillOpacity="0.55" />
    <path d="M35 46L43 54L60 36" stroke="#075985" strokeOpacity="0.55" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33 44L41 52L58 34" stroke="url(#hCheck3d)" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Hero3DMegaphone = () => (
  <svg viewBox="0 0 88 88" className="w-20 h-20 drop-shadow-[0_14px_18px_rgba(249,115,22,0.26)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="hMegaBody" x1="18" y1="22" x2="62" y2="56" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FED7AA" />
        <stop offset="0.4" stopColor="#F97316" />
        <stop offset="1" stopColor="#C2410C" />
      </linearGradient>
      <linearGradient id="hMegaHorn" x1="48" y1="14" x2="70" y2="58" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7DD3FC" />
        <stop offset="0.5" stopColor="#0284C7" />
        <stop offset="1" stopColor="#075985" />
      </linearGradient>
    </defs>
    <ellipse cx="44" cy="78" rx="20" ry="3.5" fill="#9A3412" fillOpacity="0.15" />
    <path d="M27 49L34 69C35 71 38 72 41 71L45 69L36 47H27Z" fill="#075985" />
    <path d="M24 48L31 68C32 70 35 71 38 70L41 68L33 47H24Z" fill="#0284C7" />
    <ellipse cx="18" cy="40" rx="6" ry="10" fill="#9A3412" />
    <path d="M18 30L56 16V58L18 50V30Z" fill="url(#hMegaBody)" />
    <path d="M20 32L53 20V26L20 36V32Z" fill="#FFEDD5" fillOpacity="0.55" />
    <ellipse cx="59" cy="37" rx="11" ry="22" fill="#0369A1" />
    <ellipse cx="56" cy="37" rx="10.5" ry="21.5" fill="url(#hMegaHorn)" stroke="#E0F2FE" strokeWidth="1.5" />
    <ellipse cx="55" cy="37" rx="6" ry="13" fill="#0C4A6E" />
    <path d="M72 28C76 32 76 42 72 46" stroke="#F97316" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M78 22C84 29 84 45 78 52" stroke="#FB923C" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const Hero3DSealedEnvelope = () => (
  <svg viewBox="0 0 88 88" className="w-20 h-20 drop-shadow-[0_14px_18px_rgba(2,132,199,0.24)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="hEnvBack" x1="12" y1="20" x2="76" y2="70" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0369A1" />
      </linearGradient>
      <linearGradient id="hEnvFront" x1="12" y1="28" x2="72" y2="66" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#E0F2FE" />
      </linearGradient>
      <radialGradient id="hWaxSeal" cx="35%" cy="32%" r="68%">
        <stop offset="0%" stopColor="#FED7AA" />
        <stop offset="45%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#9A3412" />
      </radialGradient>
    </defs>
    <ellipse cx="46" cy="78" rx="26" ry="4" fill="#0369A1" fillOpacity="0.16" />
    <rect x="16" y="26" width="60" height="42" rx="9" fill="url(#hEnvBack)" />
    <rect x="11" y="21" width="60" height="42" rx="9" fill="url(#hEnvFront)" stroke="#9DD2F2" strokeWidth="1.8" />
    <path d="M14 25L41 44L68 25" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 59L31 44M68 59L51 44" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
    <circle cx="43" cy="46" r="11" fill="#0369A1" fillOpacity="0.22" />
    <circle cx="41" cy="43" r="11" fill="url(#hWaxSeal)" stroke="#FFEDD5" strokeWidth="1.4" />
    <path d="M41 37L36 39.5V43C36 46.2 38.1 48.5 41 49.8C43.9 48.5 46 46.2 46 43V39.5L41 37Z" fill="#FFFFFF" />
  </svg>
);

// =========================================================================
// 2. ALUR LAPORAN 3D STEP ICONS (Consistent 3D Volumetric Style)
// =========================================================================

export const Icon3DStepLogin = () => (
  <svg viewBox="0 0 88 88" className="w-20 h-20 drop-shadow-[0_14px_18px_rgba(2,132,199,0.2)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="step1Depth" x1="18" y1="16" x2="72" y2="72" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#075985" />
      </linearGradient>
      <linearGradient id="step1Card" x1="14" y1="12" x2="68" y2="66" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E0F2FE" />
        <stop offset="0.45" stopColor="#7DD3FC" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <radialGradient id="step1Avatar" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#BAE6FD" />
      </radialGradient>
      <radialGradient id="step1Badge" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FED7AA" />
        <stop offset="45%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#C2410C" />
      </radialGradient>
    </defs>
    <ellipse cx="44" cy="79" rx="24" ry="4" fill="#0369A1" fillOpacity="0.16" />
    {/* 3D Extruded Student ID Card */}
    <rect x="20" y="19" width="52" height="54" rx="14" fill="url(#step1Depth)" />
    <rect x="14" y="14" width="52" height="54" rx="14" fill="url(#step1Card)" stroke="#FFFFFF" strokeWidth="2" />
    {/* Specular gleam */}
    <path d="M22 18H56C59 18 62 20 62 24H18C18 20 20 18 22 18Z" fill="#FFFFFF" fillOpacity="0.5" />
    {/* 3D Student Head & Bust Shadow + Shape */}
    <circle cx="41" cy="34" r="9.5" fill="#0369A1" fillOpacity="0.3" />
    <circle cx="40" cy="32" r="9" fill="url(#step1Avatar)" />
    <path d="M25 56C25 47.5 31.5 44 40 44C48.5 44 55 47.5 55 56" fill="url(#step1Avatar)" />
    {/* Raised 3D Warm Orange Key/Shield Badge */}
    <circle cx="65" cy="57" r="13" fill="#9A3412" />
    <circle cx="63" cy="55" r="13" fill="url(#step1Badge)" stroke="#FFEDD5" strokeWidth="1.6" />
    <path d="M58 55H68M64 51L68 55L64 59" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Icon3DStepReport = () => (
  <svg viewBox="0 0 88 88" className="w-20 h-20 drop-shadow-[0_14px_18px_rgba(249,115,22,0.2)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="step2Depth" x1="20" y1="16" x2="70" y2="74" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#0C4A6E" />
      </linearGradient>
      <linearGradient id="step2Page" x1="16" y1="12" x2="62" y2="68" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#E0F2FE" />
      </linearGradient>
      <linearGradient id="step2Pen" x1="48" y1="20" x2="76" y2="62" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FED7AA" />
        <stop offset="0.45" stopColor="#F97316" />
        <stop offset="1" stopColor="#C2410C" />
      </linearGradient>
    </defs>
    <ellipse cx="44" cy="79" rx="25" ry="4" fill="#9A3412" fillOpacity="0.14" />
    {/* 3D Extruded Sheet */}
    <rect x="21" y="18" width="46" height="55" rx="11" fill="url(#step2Depth)" />
    <rect x="16" y="13" width="46" height="55" rx="11" fill="url(#step2Page)" stroke="#9DD2F2" strokeWidth="1.8" />
    {/* Top clipboard clasp */}
    <rect x="29" y="9" width="20" height="8" rx="4" fill="#F97316" stroke="#FFEDD5" strokeWidth="1.5" />
    {/* Form report bars */}
    <rect x="24" y="27" width="26" height="5" rx="2.5" fill="#0284C7" />
    <rect x="24" y="37" width="30" height="4.5" rx="2.25" fill="#9DD2F2" />
    <rect x="24" y="46" width="22" height="4.5" rx="2.25" fill="#9DD2F2" />
    <rect x="24" y="55" width="16" height="4.5" rx="2.25" fill="#FED7AA" />
    {/* Raised 3D Pen / Stylus on Right */}
    <path d="M51 54L69 27L76 32L58 59L49 62L51 54Z" fill="#9A3412" opacity="0.3" transform="translate(2 3)" />
    <path d="M49 53L67 26L74 31L56 58L47 61L49 53Z" fill="url(#step2Pen)" stroke="#FFEDD5" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M64 30L71 35" stroke="#FFF7ED" strokeWidth="2" />
  </svg>
);

export const Icon3DStepTrack = () => (
  <svg viewBox="0 0 88 88" className="w-20 h-20 drop-shadow-[0_14px_18px_rgba(16,185,129,0.2)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="step3Depth" x1="18" y1="18" x2="72" y2="74" gradientUnits="userSpaceOnUse">
        <stop stopColor="#047857" />
        <stop offset="1" stopColor="#064E3B" />
      </linearGradient>
      <radialGradient id="step3Face" cx="35%" cy="28%" r="72%">
        <stop offset="0%" stopColor="#A7F3D0" />
        <stop offset="45%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </radialGradient>
      <linearGradient id="step3Orb" x1="50" y1="50" x2="76" y2="76" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BAE6FD" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    <ellipse cx="44" cy="79" rx="24" ry="4" fill="#047857" fillOpacity="0.16" />
    {/* 3D Extruded Check Disc */}
    <circle cx="48" cy="48" r="28" fill="url(#step3Depth)" />
    <circle cx="43" cy="43" r="28" fill="url(#step3Face)" stroke="#D1FAE5" strokeWidth="2" />
    {/* Inner glass bevel */}
    <circle cx="43" cy="43" r="21" fill="#047857" fillOpacity="0.2" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1.2" />
    <path d="M24 31C30 21 42 17 55 21C42 22 33 27 24 31Z" fill="#FFFFFF" fillOpacity="0.5" />
    {/* 3D Checkmark */}
    <path d="M33 45L40 52L55 36" stroke="#064E3B" strokeOpacity="0.45" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M31 43L38 50L53 34" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    {/* Floating 3D Sky Status Orb */}
    <circle cx="66" cy="60" r="10.5" fill="#075985" />
    <circle cx="64" cy="58" r="10.5" fill="url(#step3Orb)" stroke="#FFFFFF" strokeWidth="1.5" />
    <circle cx="64" cy="58" r="3.5" fill="#FFFFFF" />
  </svg>
);

// =========================================================================
// 3. FITUR UTAMA 6 UPGRADED 3D VOLUMETRIC ICONS (Isometric Pedestals & Shadows)
// =========================================================================

export const Icon3DSecurity = () => (
  <svg viewBox="0 0 88 88" className="w-16 h-16 flex-shrink-0 drop-shadow-[0_12px_16px_rgba(2,132,199,0.22)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="f1Deck" x1="12" y1="54" x2="76" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E0F2FE" />
        <stop offset="1" stopColor="#7DD3FC" />
      </linearGradient>
      <linearGradient id="f1ShieldDepth" x1="20" y1="12" x2="68" y2="72" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#075985" />
      </linearGradient>
      <linearGradient id="f1ShieldFace" x1="20" y1="10" x2="64" y2="66" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BAE6FD" />
        <stop offset="0.4" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="f1Lock" x1="36" y1="36" x2="56" y2="58" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FED7AA" />
        <stop offset="0.45" stopColor="#F97316" />
        <stop offset="1" stopColor="#C2410C" />
      </linearGradient>
    </defs>
    {/* Ground shadow */}
    <ellipse cx="44" cy="79" rx="28" ry="4.5" fill="#0369A1" fillOpacity="0.16" />
    {/* Isometric 3D Base Slab */}
    <path d="M14 60L44 50L74 60V67L44 77L14 67V60Z" fill="#0369A1" />
    <path d="M14 60L44 49L74 60L44 71L14 60Z" fill="url(#f1Deck)" stroke="#FFFFFF" strokeWidth="1.4" />
    {/* 3D Shield Depth + Face */}
    <path d="M48 12L24 21V39C24 53 33 62 48 68C63 62 72 53 72 39V21L48 12Z" fill="url(#f1ShieldDepth)" />
    <path d="M43 9L19 18V36C19 50 28 59 43 65C58 59 67 50 67 36V18L43 9Z" fill="url(#f1ShieldFace)" stroke="#FFFFFF" strokeWidth="1.8" />
    <path d="M43 12L23 20V36C23 44 26 50 31 55C29 44 31 28 43 12Z" fill="#FFFFFF" fillOpacity="0.32" />
    {/* Raised 3D Orange Lock */}
    <path d="M38 38V32C38 28.5 40.5 26 43.5 26C46.5 26 49 28.5 49 32V38" stroke="#9A3412" strokeWidth="4" strokeLinecap="round" />
    <path d="M37 38V32C37 28.5 40 26 43 26C46 26 48.5 28.5 48.5 32V38" stroke="#FEF3C7" strokeWidth="2.8" strokeLinecap="round" />
    <rect x="35" y="38" width="19" height="16" rx="4.5" fill="#9A3412" />
    <rect x="33" y="36" width="19" height="16" rx="4.5" fill="url(#f1Lock)" stroke="#FFEDD5" strokeWidth="1.2" />
    <circle cx="42.5" cy="43" r="1.8" fill="#7C2D12" />
    <path d="M42.5 44.5V47.5" stroke="#7C2D12" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const Icon3DTimeline = () => (
  <svg viewBox="0 0 88 88" className="w-16 h-16 flex-shrink-0 drop-shadow-[0_12px_16px_rgba(2,132,199,0.22)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="f2Depth" x1="20" y1="16" x2="72" y2="74" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#075985" />
      </linearGradient>
      <linearGradient id="f2Ring" x1="14" y1="14" x2="64" y2="68" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BAE6FD" />
        <stop offset="0.5" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <radialGradient id="f2Badge" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FED7AA" />
        <stop offset="50%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#C2410C" />
      </radialGradient>
    </defs>
    <ellipse cx="44" cy="79" rx="25" ry="4.5" fill="#0369A1" fillOpacity="0.16" />
    {/* Crown top */}
    <rect x="37" y="7" width="12" height="7" rx="3" fill="#0369A1" />
    <rect x="35" y="6" width="12" height="6" rx="3" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.2" />
    {/* 3D Thick Clock Barrel */}
    <circle cx="46" cy="46" r="27" fill="url(#f2Depth)" />
    <circle cx="41" cy="42" r="27" fill="url(#f2Ring)" stroke="#FFFFFF" strokeWidth="1.8" />
    {/* Inner Dial Recessed */}
    <circle cx="41" cy="42" r="20" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
    {/* Markers */}
    <circle cx="41" cy="26" r="1.8" fill="#0284C7" />
    <circle cx="57" cy="42" r="1.8" fill="#94A3B8" />
    <circle cx="41" cy="58" r="1.8" fill="#94A3B8" />
    <circle cx="25" cy="42" r="1.8" fill="#94A3B8" />
    {/* 3D Hands */}
    <path d="M41 42V29" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M41 42L51 46" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
    <circle cx="41" cy="42" r="3.5" fill="#0F172A" />
    {/* Floating 3D Orange Verification Sphere */}
    <circle cx="64" cy="61" r="11.5" fill="#9A3412" />
    <circle cx="62" cy="59" r="11.5" fill="url(#f2Badge)" stroke="#FFEDD5" strokeWidth="1.5" />
    <path d="M57.5 59L60.8 62.2L66.8 55.8" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Icon3DCounseling = () => (
  <svg viewBox="0 0 88 88" className="w-16 h-16 flex-shrink-0 drop-shadow-[0_12px_16px_rgba(2,132,199,0.2)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="f3BackWall" x1="28" y1="14" x2="76" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#075985" />
      </linearGradient>
      <linearGradient id="f3FrontBubble" x1="12" y1="22" x2="58" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E0F2FE" />
        <stop offset="0.45" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <radialGradient id="f3Heart" cx="35%" cy="30%" r="72%">
        <stop offset="0%" stopColor="#FED7AA" />
        <stop offset="45%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#C2410C" />
      </radialGradient>
    </defs>
    <ellipse cx="44" cy="79" rx="26" ry="4.5" fill="#0369A1" fillOpacity="0.16" />
    {/* Back Right 3D Counselor Bubble */}
    <rect x="34" y="14" width="42" height="34" rx="12" fill="url(#f3BackWall)" />
    <rect x="30" y="11" width="42" height="34" rx="12" fill="#BAE6FD" stroke="#FFFFFF" strokeWidth="1.5" />
    <circle cx="43" cy="28" r="2.8" fill="#0284C7" />
    <circle cx="52" cy="28" r="2.8" fill="#0284C7" />
    <circle cx="61" cy="28" r="2.8" fill="#0284C7" />
    {/* Front Left 3D Student Support Bubble */}
    <path d="M22 31H56C62.6 31 68 36.4 68 43V57C68 63.6 62.6 69 56 69H36L24 77V69H22C15.4 69 10 63.6 10 57V43C10 36.4 15.4 31 22 31Z" fill="#075985" />
    <path d="M18 28H52C58.6 28 64 33.4 64 40V54C64 60.6 58.6 66 52 66H32L20 74V66H18C11.4 66 6 60.6 6 54V40C6 33.4 11.4 28 18 28Z" fill="url(#f3FrontBubble)" stroke="#FFFFFF" strokeWidth="1.6" />
    {/* Raised 3D Care Emblem Inside */}
    <path d="M35 44C33 37 24 38 24 44C24 49 30 54 35 57C40 54 46 49 46 44C46 38 37 37 35 44Z" fill="#075985" fillOpacity="0.3" transform="translate(1.5 2)" />
    <path d="M35 44C33 37 24 38 24 44C24 49 30 54 35 57C40 54 46 49 46 44C46 38 37 37 35 44Z" fill="url(#f3Heart)" stroke="#FFEDD5" strokeWidth="1" />
  </svg>
);

export const Icon3DEvidence = () => (
  <svg viewBox="0 0 88 88" className="w-16 h-16 flex-shrink-0 drop-shadow-[0_12px_16px_rgba(2,132,199,0.22)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="f4Back" x1="14" y1="18" x2="74" y2="70" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#075985" />
      </linearGradient>
      <linearGradient id="f4Front" x1="14" y1="30" x2="74" y2="72" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BAE6FD" />
        <stop offset="0.5" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <radialGradient id="f4Lens" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FED7AA" />
        <stop offset="45%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#C2410C" />
      </radialGradient>
    </defs>
    <ellipse cx="44" cy="79" rx="27" ry="4.5" fill="#0369A1" fillOpacity="0.16" />
    {/* Folder Back Wall + 3D Depth */}
    <path d="M16 20C16 17 18.5 14 22 14H36L42 21H70C73.5 21 76 23.5 76 27V62C76 65.5 73.5 68 70 68H22C18.5 68 16 65.5 16 62V20Z" fill="url(#f4Back)" />
    {/* Lifted Crisp White Screenshot Card inside folder */}
    <rect x="24" y="16" width="42" height="38" rx="6" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" transform="rotate(-4 45 35)" />
    <path d="M29 44L39 33L46 40L53 31L61 44H29Z" fill="#7DD3FC" />
    <circle cx="36" cy="27" r="3.5" fill="#F97316" />
    {/* 3D Front Pocket Flap */}
    <path d="M12 36C12 32.5 14.5 30 18 30H70C73.5 30 76 32.5 76 36V64C76 67.5 73.5 70 70 70H18C14.5 70 12 67.5 12 64V36Z" fill="url(#f4Front)" stroke="#E0F2FE" strokeWidth="1.6" />
    {/* Raised 3D Cloud / Compression Badge */}
    <circle cx="63" cy="60" r="11" fill="#9A3412" />
    <circle cx="61" cy="58" r="11" fill="url(#f4Lens)" stroke="#FFEDD5" strokeWidth="1.4" />
    <path d="M61 63V54M57.5 57.5L61 54L64.5 57.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Icon3DAlert = () => (
  <svg viewBox="0 0 88 88" className="w-16 h-16 flex-shrink-0 drop-shadow-[0_12px_16px_rgba(2,132,199,0.22)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="f5BellDepth" x1="24" y1="16" x2="66" y2="66" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0369A1" />
        <stop offset="1" stopColor="#082F49" />
      </linearGradient>
      <linearGradient id="f5BellFace" x1="20" y1="12" x2="60" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BAE6FD" />
        <stop offset="0.45" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <radialGradient id="f5Ping" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FED7AA" />
        <stop offset="45%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#C2410C" />
      </radialGradient>
    </defs>
    <ellipse cx="44" cy="79" rx="24" ry="4" fill="#0369A1" fillOpacity="0.16" />
    {/* Clapper 3D Gold/Orange Sphere */}
    <circle cx="44" cy="65" r="7.5" fill="#9A3412" />
    <circle cx="43" cy="64" r="7" fill="url(#f5Ping)" />
    {/* 3D Bell Extrusion Back */}
    <path d="M24 54C27 46 29 36 29 29C29 19 36 16 46 16C56 16 63 19 63 29C63 36 65 46 68 54C69.5 57.5 66 60 62 60H30C26 60 22.5 57.5 24 54Z" fill="url(#f5BellDepth)" />
    {/* 3D Sculpted Bell Dome Front */}
    <path d="M20 51C23 43 25 33 25 26C25 16 32 13 42 13C52 13 59 16 59 26C59 33 61 43 64 51C65.5 54.5 62 57 58 57H26C22 57 18.5 54.5 20 51Z" fill="url(#f5BellFace)" stroke="#FFFFFF" strokeWidth="1.6" />
    {/* Gloss Arc */}
    <path d="M29 22C28 30 26 40 24 49H31C32 40 34 30 36 19C32 19 30 20 29 22Z" fill="#FFFFFF" fillOpacity="0.45" />
    {/* Floating 3D Notification Sphere Top-Right */}
    <circle cx="64" cy="23" r="10.5" fill="#9A3412" />
    <circle cx="62" cy="21" r="10.5" fill="url(#f5Ping)" stroke="#FFEDD5" strokeWidth="1.5" />
    <path d="M62 16.5V21.5M62 24.8V25.2" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);

export const Icon3DAnalytics = () => (
  <svg viewBox="0 0 88 88" className="w-16 h-16 flex-shrink-0 drop-shadow-[0_12px_16px_rgba(2,132,199,0.22)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="f6Deck" x1="12" y1="54" x2="76" y2="78" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E0F2FE" />
        <stop offset="1" stopColor="#7DD3FC" />
      </linearGradient>
    </defs>
    <ellipse cx="44" cy="79" rx="28" ry="4.5" fill="#0369A1" fillOpacity="0.16" />
    {/* Isometric Base Pedestal */}
    <path d="M12 61L44 50L76 61V67L44 77L12 67V61Z" fill="#075985" />
    <path d="M12 61L44 49L76 61L44 72L12 61Z" fill="url(#f6Deck)" stroke="#FFFFFF" strokeWidth="1.3" />
    {/* Isometric Bar 1 (Sky Left) */}
    <path d="M19 42L26 39L33 42L26 45L19 42Z" fill="#BAE6FD" />
    <path d="M19 42L26 45V61L19 58V42Z" fill="#38BDF8" />
    <path d="M26 45L33 42V58L26 61V45Z" fill="#0284C7" />
    {/* Isometric Bar 2 (Mid Blue) */}
    <path d="M37 30L44 27L51 30L44 33L37 30Z" fill="#7DD3FC" />
    <path d="M37 30L44 33V61L37 58V30Z" fill="#0284C7" />
    <path d="M44 33L51 30V58L44 61V33Z" fill="#0369A1" />
    {/* Isometric Bar 3 (Tall Solid Deep Sky) */}
    <path d="M55 18L62 15L69 18L62 21L55 18Z" fill="#38BDF8" />
    <path d="M55 18L62 21V61L55 58V18Z" fill="#0369A1" />
    <path d="M62 21L69 18V58L62 61V21Z" fill="#075985" />
    {/* 3D Floating Warm Orange Trend Line */}
    <path d="M18 33L38 22L50 26L68 10" stroke="#9A3412" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" transform="translate(0 3)" />
    <path d="M18 32L38 21L50 25L68 9M68 9H59M68 9V18" stroke="#F97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// =========================================================================
// 4. KEPATUHAN HUB & 4 PILLARS 3D ICONS (Tree Regulation Hierarchy)
// =========================================================================

export const Icon3DRegulationHub = () => (
  <svg viewBox="0 0 88 88" className="w-16 h-16 mx-auto drop-shadow-[0_12px_18px_rgba(249,115,22,0.28)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="hubDepth" x1="20" y1="14" x2="72" y2="76" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C2410C" />
        <stop offset="1" stopColor="#7C2D12" />
      </linearGradient>
      <linearGradient id="hubFace" x1="18" y1="10" x2="66" y2="68" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FED7AA" />
        <stop offset="0.38" stopColor="#F97316" />
        <stop offset="1" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    <ellipse cx="44" cy="80" rx="22" ry="4" fill="#9A3412" fillOpacity="0.18" />
    <path d="M48 13L22 23V42C22 57 32 68 48 75C64 68 74 57 74 42V23L48 13Z" fill="url(#hubDepth)" />
    <path d="M42 10L16 20V39C16 54 26 65 42 72C58 65 68 54 68 39V20L42 10Z" fill="url(#hubFace)" stroke="#FFEDD5" strokeWidth="2" />
    <path d="M42 14L20 22V39C20 48 23 55 28 60C26 48 27 30 42 14Z" fill="#FFFFFF" fillOpacity="0.3" />
    {/* Inner 3D Sky Blue Seal */}
    <circle cx="42" cy="40" r="14" fill="#075985" />
    <circle cx="41" cy="39" r="14" fill="#38BDF8" stroke="#E0F2FE" strokeWidth="1.5" />
    <path d="M35 39L39 43L48 34" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Icon3DPillarTPPK = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12 flex-shrink-0 drop-shadow-[0_8px_12px_rgba(2,132,199,0.2)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="p1Face" x1="12" y1="8" x2="48" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#BAE6FD" />
      </linearGradient>
    </defs>
    <rect x="16" y="12" width="36" height="42" rx="8" fill="#0369A1" />
    <rect x="12" y="8" width="36" height="42" rx="8" fill="url(#p1Face)" stroke="#7DD3FC" strokeWidth="1.5" />
    <rect x="19" y="18" width="22" height="4" rx="2" fill="#0284C7" />
    <rect x="19" y="26" width="18" height="3.5" rx="1.75" fill="#7DD3FC" />
    <rect x="19" y="33" width="14" height="3.5" rx="1.75" fill="#7DD3FC" />
    <circle cx="46" cy="44" r="9" fill="#9A3412" />
    <circle cx="44" cy="42" r="9" fill="#F97316" stroke="#FFEDD5" strokeWidth="1.4" />
    <path d="M41 42L43.2 44.2L47.5 39.8" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Icon3DPillarPrivacy = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12 flex-shrink-0 drop-shadow-[0_8px_12px_rgba(249,115,22,0.2)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="p2Vault" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BAE6FD" />
        <stop offset="0.5" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    <rect x="16" y="14" width="38" height="38" rx="11" fill="#075985" />
    <rect x="11" y="10" width="38" height="38" rx="11" fill="url(#p2Vault)" stroke="#FFFFFF" strokeWidth="1.5" />
    <path d="M24 27V22C24 18.7 26.7 16 30 16C33.3 16 36 18.7 36 22V27" stroke="#FEF3C7" strokeWidth="3" strokeLinecap="round" />
    <rect x="21" y="27" width="18" height="14" rx="4" fill="#9A3412" transform="translate(2 2)" />
    <rect x="21" y="27" width="18" height="14" rx="4" fill="#F97316" stroke="#FFEDD5" strokeWidth="1.2" />
    <circle cx="30" cy="34" r="2" fill="#7C2D12" />
  </svg>
);

export const Icon3DPillarChildRights = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12 flex-shrink-0 drop-shadow-[0_8px_12px_rgba(16,185,129,0.2)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="p3Dome" x1="14" y1="12" x2="50" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A7F3D0" />
        <stop offset="0.5" stopColor="#10B981" />
        <stop offset="1" stopColor="#047857" />
      </linearGradient>
    </defs>
    <circle cx="35" cy="35" r="21" fill="#064E3B" />
    <circle cx="31" cy="31" r="21" fill="url(#p3Dome)" stroke="#D1FAE5" strokeWidth="1.5" />
    <path d="M16 23C20 15 30 12 39 15C30 16 23 20 16 23Z" fill="#FFFFFF" fillOpacity="0.45" />
    <circle cx="31" cy="26" r="5" fill="#FFFFFF" />
    <path d="M22 41C22 35.5 26 33 31 33C36 33 40 35.5 40 41" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

export const Icon3DPillarRestorative = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12 flex-shrink-0 drop-shadow-[0_8px_12px_rgba(2,132,199,0.2)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="p4Disc" x1="12" y1="14" x2="50" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E0F2FE" />
        <stop offset="0.5" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    {/* Back Isometric Layer */}
    <rect x="20" y="16" width="32" height="32" rx="10" fill="#075985" />
    <rect x="14" y="11" width="32" height="32" rx="10" fill="url(#p4Disc)" stroke="#FFFFFF" strokeWidth="1.5" />
    {/* Balance Scale Geometry */}
    <path d="M30 17V36M22 36H38" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M20 22H40" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
    <circle cx="20" cy="26" r="3.5" fill="#FFEDD5" stroke="#F97316" strokeWidth="1.5" />
    <circle cx="40" cy="26" r="3.5" fill="#FFEDD5" stroke="#F97316" strokeWidth="1.5" />
  </svg>
);

// =========================================================================
// 5. TIM PENGEMBANG 3D ROLE EMBLEMS (Team Lead, Project Dev, Project Manager)
// =========================================================================

export const Icon3DRoleLead = () => (
  <svg viewBox="0 0 96 96" className="w-24 h-24 drop-shadow-[0_14px_20px_rgba(2,132,199,0.24)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="role1Depth" x1="20" y1="16" x2="78" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#075985" />
      </linearGradient>
      <linearGradient id="role1Face" x1="16" y1="12" x2="72" y2="74" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E0F2FE" />
        <stop offset="0.4" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    <ellipse cx="48" cy="86" rx="24" ry="4" fill="#0369A1" fillOpacity="0.18" />
    {/* 3D Layered Architecture Blocks */}
    <rect x="20" y="20" width="58" height="58" rx="16" fill="url(#role1Depth)" />
    <rect x="14" y="14" width="58" height="58" rx="16" fill="url(#role1Face)" stroke="#FFFFFF" strokeWidth="2" />
    <path d="M22 18H62C65 18 68 20 68 24H18C18 20 20 18 22 18Z" fill="#FFFFFF" fillOpacity="0.45" />
    {/* Sculpted Code / Shield Core */}
    <path d="M35 37L26 44L35 51" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M51 37L60 44L51 51" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M46 34L40 54" stroke="#FED7AA" strokeWidth="3.5" strokeLinecap="round" />
    {/* Raised 3D Orange Crown/Lead Star */}
    <circle cx="67" cy="61" r="12" fill="#9A3412" />
    <circle cx="65" cy="59" r="12" fill="#F97316" stroke="#FFEDD5" strokeWidth="1.5" />
    <path d="M65 53L67 57L71 57.5L68 60.5L68.8 64.5L65 62.5L61.2 64.5L62 60.5L59 57.5L63 57L65 53Z" fill="#FFFFFF" />
  </svg>
);

export const Icon3DRoleDev = () => (
  <svg viewBox="0 0 96 96" className="w-24 h-24 drop-shadow-[0_14px_20px_rgba(2,132,199,0.24)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="role2Face" x1="14" y1="14" x2="76" y2="72" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#BAE6FD" />
      </linearGradient>
      <linearGradient id="role2Pen" x1="48" y1="24" x2="80" y2="66" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FED7AA" />
        <stop offset="0.45" stopColor="#F97316" />
        <stop offset="1" stopColor="#C2410C" />
      </linearGradient>
    </defs>
    <ellipse cx="48" cy="86" rx="25" ry="4" fill="#0369A1" fillOpacity="0.18" />
    {/* 3D UI Canvas Frame */}
    <rect x="18" y="20" width="60" height="52" rx="14" fill="#0369A1" />
    <rect x="12" y="14" width="60" height="52" rx="14" fill="url(#role2Face)" stroke="#FFFFFF" strokeWidth="2" />
    {/* UI Header + Layout Grid */}
    <rect x="20" y="23" width="44" height="8" rx="4" fill="#0284C7" />
    <rect x="20" y="36" width="20" height="22" rx="5" fill="#7DD3FC" />
    <rect x="44" y="36" width="20" height="10" rx="4" fill="#38BDF8" />
    <rect x="44" y="49" width="20" height="9" rx="4" fill="#FED7AA" />
    {/* Raised 3D Design Stylus */}
    <path d="M56 58L74 30L81 35L63 63L54 66L56 58Z" fill="#9A3412" opacity="0.3" transform="translate(2 3)" />
    <path d="M54 57L72 29L79 34L61 62L52 65L54 57Z" fill="url(#role2Pen)" stroke="#FFEDD5" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const Icon3DRolePM = () => (
  <svg viewBox="0 0 96 96" className="w-24 h-24 drop-shadow-[0_14px_20px_rgba(2,132,199,0.24)]" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="role3Board" x1="16" y1="14" x2="72" y2="76" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E0F2FE" />
        <stop offset="0.45" stopColor="#7DD3FC" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    <ellipse cx="48" cy="86" rx="24" ry="4" fill="#0369A1" fillOpacity="0.18" />
    {/* 3D Sprint Roadmap Clipboard */}
    <rect x="20" y="19" width="54" height="58" rx="14" fill="#075985" />
    <rect x="14" y="14" width="54" height="58" rx="14" fill="url(#role3Board)" stroke="#FFFFFF" strokeWidth="2" />
    <rect x="30" y="9" width="22" height="9" rx="4.5" fill="#F97316" stroke="#FFEDD5" strokeWidth="1.5" />
    {/* Checklist Rows */}
    <circle cx="26" cy="33" r="4" fill="#FFFFFF" />
    <rect x="34" y="30.5" width="24" height="5" rx="2.5" fill="#FFFFFF" />
    <circle cx="26" cy="46" r="4" fill="#FFFFFF" />
    <rect x="34" y="43.5" width="20" height="5" rx="2.5" fill="#E0F2FE" />
    <circle cx="26" cy="59" r="4" fill="#FED7AA" />
    <rect x="34" y="56.5" width="16" height="5" rx="2.5" fill="#FED7AA" />
    {/* Floating 3D Check Seal */}
    <circle cx="67" cy="61" r="12" fill="#064E3B" />
    <circle cx="65" cy="59" r="12" fill="#10B981" stroke="#D1FAE5" strokeWidth="1.5" />
    <path d="M59.5 59L63.5 63L70.5 55" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


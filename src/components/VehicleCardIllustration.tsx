import React from 'react';

interface Props {
  category: 'sedan' | 'microbus' | 'suv' | 'vip_van';
  name: string;
  className?: string;
}

export const VehicleCardIllustration: React.FC<Props> = ({ category, name, className = '' }) => {
  return (
    <div className={`relative w-full h-44 sm:h-52 overflow-hidden rounded-t-2xl flex items-center justify-center bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 border-b border-neutral-800/80 ${className}`}>
      {/* Background ambient lighting glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(245,158,11,0.08),transparent_70%)] pointer-events-none" />
      
      {/* Subtle isometric grid / road line floor */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-neutral-900/60 to-transparent pointer-events-none">
        <div className="w-full h-px bg-neutral-800 absolute bottom-3" />
        <div className="w-32 h-0.5 bg-amber-500/40 rounded-full mx-auto blur-[1px] absolute bottom-3 left-1/2 -translate-x-1/2" />
      </div>

      {/* SVG Automotive Render based on category */}
      <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] transition-transform duration-500 group-hover:scale-105">
        {category === 'sedan' && (
          <svg viewBox="0 0 340 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]">
            <defs>
              <linearGradient id="bodySedan" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#262626" />
                <stop offset="35%" stopColor="#404040" />
                <stop offset="70%" stopColor="#262626" />
                <stop offset="100%" stopColor="#171717" />
              </linearGradient>
              <linearGradient id="glassSedan" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="rimMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4d4d4" />
                <stop offset="50%" stopColor="#525252" />
                <stop offset="100%" stopColor="#e5e5e5" />
              </linearGradient>
            </defs>

            {/* Ground shadow */}
            <ellipse cx="170" cy="124" rx="140" ry="10" fill="#000000" fillOpacity="0.7" />

            {/* Aerodynamic Sedan Body Profile */}
            <path
              d="M32 94 C32 94 48 86 70 82 C82 72 108 44 142 42 C185 40 230 46 256 68 C278 72 308 78 312 88 C316 94 312 104 300 106 L278 106 C276 96 264 88 250 88 C236 88 224 96 222 106 L120 106 C118 96 106 88 92 88 C78 88 66 96 64 106 L38 106 C30 106 28 98 32 94 Z"
              fill="url(#bodySedan)"
              stroke="#525252"
              strokeWidth="1.2"
            />

            {/* Windows / Windshield */}
            <path
              d="M106 76 L144 48 C176 46 216 48 240 68 L246 76 Z"
              fill="url(#glassSedan)"
              stroke="#0ea5e9"
              strokeWidth="0.8"
            />
            {/* Center Pillar */}
            <line x1="172" y1="46" x2="170" y2="76" stroke="#171717" strokeWidth="3" />

            {/* Headlights (Amber glow & LED signature) */}
            <path d="M298 84 L310 87 L304 94 Z" fill="#fbbf24" fillOpacity="0.9" />
            <circle cx="308" cy="88" r="2.5" fill="#fef08a" className="animate-pulse" />
            
            {/* Tail light */}
            <path d="M34 88 L46 88 L44 94 L34 94 Z" fill="#ef4444" />

            {/* Front Wheel */}
            <circle cx="250" cy="106" r="20" fill="#171717" stroke="#404040" strokeWidth="2" />
            <circle cx="250" cy="106" r="13" fill="url(#rimMetal)" />
            <circle cx="250" cy="106" r="5" fill="#171717" />
            <line x1="250" y1="94" x2="250" y2="118" stroke="#171717" strokeWidth="1.5" />
            <line x1="238" y1="106" x2="262" y2="106" stroke="#171717" strokeWidth="1.5" />

            {/* Rear Wheel */}
            <circle cx="92" cy="106" r="20" fill="#171717" stroke="#404040" strokeWidth="2" />
            <circle cx="92" cy="106" r="13" fill="url(#rimMetal)" />
            <circle cx="92" cy="106" r="5" fill="#171717" />
            <line x1="92" y1="94" x2="92" y2="118" stroke="#171717" strokeWidth="1.5" />
            <line x1="80" y1="106" x2="104" y2="106" stroke="#171717" strokeWidth="1.5" />

            {/* Door seam and handle */}
            <line x1="170" y1="76" x2="170" y2="102" stroke="#404040" strokeWidth="1" />
            <rect x="180" y="80" width="8" height="2" rx="1" fill="#737373" />
            <rect x="120" y="80" width="8" height="2" rx="1" fill="#737373" />
          </svg>
        )}

        {category === 'microbus' && (
          <svg viewBox="0 0 340 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]">
            <defs>
              <linearGradient id="bodyMpv" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1f2937" />
                <stop offset="40%" stopColor="#374151" />
                <stop offset="80%" stopColor="#1f2937" />
                <stop offset="100%" stopColor="#111827" />
              </linearGradient>
              <linearGradient id="glassMpv" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#047857" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Ground shadow */}
            <ellipse cx="170" cy="124" rx="145" ry="10" fill="#000000" fillOpacity="0.75" />

            {/* MPV / Noah Body Profile */}
            <path
              d="M34 102 L34 56 C34 50 42 46 54 44 L200 38 C232 38 252 48 268 62 L298 74 C310 79 314 88 312 98 L298 104 L276 104 C274 94 262 86 248 86 C234 86 222 94 220 104 L122 104 C120 94 108 86 94 86 C80 86 68 94 66 104 L40 104 C34 104 34 102 34 102 Z"
              fill="url(#bodyMpv)"
              stroke="#4b5563"
              strokeWidth="1.2"
            />

            {/* Continuous Glass Strip */}
            <path
              d="M52 50 L198 44 C222 44 238 52 250 62 L280 72 L278 76 L52 76 Z"
              fill="url(#glassMpv)"
              stroke="#059669"
              strokeWidth="0.8"
            />
            {/* Window Dividers for MPV */}
            <line x1="112" y1="46" x2="112" y2="76" stroke="#111827" strokeWidth="2.5" />
            <line x1="175" y1="44" x2="175" y2="76" stroke="#111827" strokeWidth="2.5" />
            <line x1="230" y1="52" x2="230" y2="76" stroke="#111827" strokeWidth="2.5" />

            {/* Front Headlight */}
            <path d="M296 78 L310 82 L306 90 Z" fill="#34d399" fillOpacity="0.9" />

            {/* Wheels */}
            <circle cx="248" cy="104" r="20" fill="#111827" stroke="#4b5563" strokeWidth="2" />
            <circle cx="248" cy="104" r="12" fill="#9ca3af" />
            <circle cx="248" cy="104" r="5" fill="#111827" />

            <circle cx="94" cy="104" r="20" fill="#111827" stroke="#4b5563" strokeWidth="2" />
            <circle cx="94" cy="104" r="12" fill="#9ca3af" />
            <circle cx="94" cy="104" r="5" fill="#111827" />

            {/* Sliding Door Rail */}
            <line x1="108" y1="84" x2="216" y2="84" stroke="#6b7280" strokeWidth="1" strokeDasharray="3 2" />
          </svg>
        )}

        {category === 'vip_van' && (
          <svg viewBox="0 0 340 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]">
            <defs>
              <linearGradient id="bodyHiace" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="45%" stopColor="#334155" />
                <stop offset="85%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="glassHiace" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Shadow */}
            <ellipse cx="170" cy="124" rx="148" ry="10" fill="#000000" fillOpacity="0.8" />

            {/* High-Roof HiAce Body */}
            <path
              d="M28 102 L28 42 C28 35 34 30 42 30 L220 30 C242 30 258 40 268 54 L294 72 C304 80 308 88 308 96 L298 104 L276 104 C274 94 262 86 248 86 C234 86 222 94 220 104 L120 104 C118 94 106 86 92 86 C78 86 66 94 64 104 L34 104 C30 104 28 102 28 102 Z"
              fill="url(#bodyHiace)"
              stroke="#475569"
              strokeWidth="1.2"
            />

            {/* Large Executive Windows */}
            <path
              d="M44 38 L220 38 C236 38 248 44 256 54 L282 72 L280 76 L44 76 Z"
              fill="url(#glassHiace)"
              stroke="#3b82f6"
              strokeWidth="0.8"
            />
            <line x1="95" y1="38" x2="95" y2="76" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="150" y1="38" x2="150" y2="76" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="205" y1="38" x2="205" y2="76" stroke="#0f172a" strokeWidth="2.5" />

            {/* Chrome Grille and LED */}
            <line x1="292" y1="84" x2="306" y2="88" stroke="#93c5fd" strokeWidth="2" />
            <line x1="290" y1="90" x2="304" y2="94" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Wheels */}
            <circle cx="248" cy="104" r="20" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
            <circle cx="248" cy="104" r="12" fill="#cbd5e1" />
            <circle cx="248" cy="104" r="5" fill="#0f172a" />

            <circle cx="92" cy="104" r="20" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
            <circle cx="92" cy="104" r="12" fill="#cbd5e1" />
            <circle cx="92" cy="104" r="5" fill="#0f172a" />
          </svg>
        )}

        {category === 'suv' && (
          <svg viewBox="0 0 340 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]">
            <defs>
              <linearGradient id="bodySuv" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#292524" />
                <stop offset="40%" stopColor="#44403c" />
                <stop offset="80%" stopColor="#292524" />
                <stop offset="100%" stopColor="#1c1917" />
              </linearGradient>
              <linearGradient id="glassSuv" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Shadow */}
            <ellipse cx="170" cy="126" rx="146" ry="10" fill="#000000" fillOpacity="0.8" />

            {/* Roof Rails */}
            <line x1="80" y1="36" x2="210" y2="36" stroke="#a8a29e" strokeWidth="2" strokeLinecap="round" />

            {/* Muscular Land Cruiser Prado Profile */}
            <path
              d="M32 98 L36 54 C36 48 44 42 56 40 L216 40 C234 40 252 50 264 64 L296 74 C308 78 314 86 312 96 L298 100 L274 100 C270 88 256 80 240 80 C224 80 210 88 206 100 L124 100 C120 88 106 80 90 80 C74 80 60 88 56 100 L36 100 C32 100 32 98 32 98 Z"
              fill="url(#bodySuv)"
              stroke="#57534e"
              strokeWidth="1.2"
            />

            {/* Windows */}
            <path
              d="M52 48 L214 48 C228 48 240 54 250 64 L276 72 L274 76 L52 76 Z"
              fill="url(#glassSuv)"
              stroke="#f59e0b"
              strokeWidth="0.8"
            />
            <line x1="115" y1="48" x2="115" y2="76" stroke="#1c1917" strokeWidth="2.5" />
            <line x1="180" y1="48" x2="180" y2="76" stroke="#1c1917" strokeWidth="2.5" />

            {/* Aggressive Headlamp */}
            <path d="M292 78 L310 82 L304 90 Z" fill="#f59e0b" />
            <circle cx="305" cy="84" r="2.5" fill="#fef3c7" />

            {/* High Clearance Wheels */}
            <circle cx="240" cy="100" r="22" fill="#1c1917" stroke="#57534e" strokeWidth="2.5" />
            <circle cx="240" cy="100" r="14" fill="#a8a29e" />
            <circle cx="240" cy="100" r="6" fill="#1c1917" />

            <circle cx="90" cy="100" r="22" fill="#1c1917" stroke="#57534e" strokeWidth="2.5" />
            <circle cx="90" cy="100" r="14" fill="#a8a29e" />
            <circle cx="90" cy="100" r="6" fill="#1c1917" />

            {/* Flared Wheel Arches */}
            <path d="M68 98 C72 86 80 82 90 82 C100 82 108 86 112 98" stroke="#78716c" strokeWidth="1.5" fill="none" />
            <path d="M218 98 C222 86 230 82 240 82 C250 82 258 86 262 98" stroke="#78716c" strokeWidth="1.5" fill="none" />
          </svg>
        )}
      </div>

      {/* Subtle vehicle classification watermark */}
      <div className="absolute top-3 left-4 text-[10px] tracking-wider uppercase font-semibold text-neutral-400">
        {name}
      </div>
    </div>
  );
};

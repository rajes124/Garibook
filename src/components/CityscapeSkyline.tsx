import React, { useState } from 'react';
import { Sparkles, Gauge, Car, Zap, Volume2, Shield } from 'lucide-react';

interface CityscapeSkylineProps {
  theme?: 'blue' | 'dark' | 'amber';
  language?: 'en' | 'bn';
  showControls?: boolean;
}

export const CityscapeSkyline: React.FC<CityscapeSkylineProps> = ({
  theme = 'blue',
  language = 'en',
  showControls = true,
}) => {
  const [carType, setCarType] = useState<'sedan' | 'mpv' | 'suv'>('sedan');
  const [speed, setSpeed] = useState<'normal' | 'fast'>('normal');
  const [headlightsOn, setHeadlightsOn] = useState(true);
  const [isHonking, setIsHonking] = useState(false);

  const handleHonk = () => {
    setIsHonking(true);
    setTimeout(() => setIsHonking(false), 900);
  };

  const isBn = language === 'bn';

  // Animation duration based on speed
  const animationDuration = speed === 'fast' ? '7s' : '13s';

  return (
    <div className="relative w-full overflow-hidden select-none">
      {/* City skyline SVG graphic matching the user's reference */}
      <div className="w-full relative h-36 sm:h-44 md:h-52 flex items-end">
        {/* Layer 1: Ambient Backdrop glow */}
        <div className={`absolute inset-0 pointer-events-none ${
          theme === 'blue'
            ? 'bg-gradient-to-t from-blue-950/80 via-blue-900/20 to-transparent'
            : 'bg-gradient-to-t from-neutral-950 via-neutral-900/30 to-transparent'
        }`} />

        {/* Layer 2: Detailed Architectural Cityscape Vector Silhouette */}
        <svg
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            theme === 'blue' ? 'text-blue-300/40' : 'text-amber-400/25'
          }`}
          viewBox="0 0 1400 240"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle bridge cables (Padma Bridge inspired) */}
          <path
            d="M -50 210 Q 150 120 350 210 Q 550 120 750 210 Q 950 120 1150 210 Q 1350 120 1550 210"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.5"
          />
          <line x1="150" y1="120" x2="150" y2="210" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
          <line x1="550" y1="120" x2="550" y2="210" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
          <line x1="950" y1="120" x2="950" y2="210" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
          <line x1="1350" y1="120" x2="1350" y2="210" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />

          {/* Building Outlines & Windows Grid (Dense Skyline) */}
          {/* Cluster 1: Left Tower & Complex */}
          <rect x="20" y="80" width="45" height="130" stroke="currentColor" strokeWidth="1.6" />
          <line x1="42.5" y1="40" x2="42.5" y2="80" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="42.5" cy="38" r="2.5" fill="currentColor" />
          {/* Windows */}
          <rect x="28" y="95" width="8" height="10" stroke="currentColor" strokeWidth="1" />
          <rect x="44" y="95" width="8" height="10" stroke="currentColor" strokeWidth="1" />
          <rect x="28" y="115" width="8" height="10" stroke="currentColor" strokeWidth="1" />
          <rect x="44" y="115" width="8" height="10" stroke="currentColor" strokeWidth="1" />
          <rect x="28" y="135" width="8" height="10" stroke="currentColor" strokeWidth="1" />
          <rect x="44" y="135" width="8" height="10" stroke="currentColor" strokeWidth="1" />
          <rect x="28" y="155" width="8" height="10" stroke="currentColor" strokeWidth="1" />
          <rect x="44" y="155" width="8" height="10" stroke="currentColor" strokeWidth="1" />

          {/* Building 2: Mid-rise */}
          <rect x="75" y="120" width="55" height="90" stroke="currentColor" strokeWidth="1.6" />
          <line x1="88" y1="135" x2="117" y2="135" stroke="currentColor" strokeWidth="1" />
          <line x1="88" y1="155" x2="117" y2="155" stroke="currentColor" strokeWidth="1" />
          <line x1="88" y1="175" x2="117" y2="175" stroke="currentColor" strokeWidth="1" />

          {/* Building 3: Skyscraper */}
          <path d="M 145 210 L 145 60 L 165 30 L 185 60 L 185 210 Z" stroke="currentColor" strokeWidth="1.6" />
          <line x1="165" y1="15" x2="165" y2="30" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="165" cy="14" r="2.5" fill="#f59e0b" className="animate-ping" />
          {/* Windows column */}
          <rect x="155" y="75" width="20" height="8" stroke="currentColor" strokeWidth="1" />
          <rect x="155" y="95" width="20" height="8" stroke="currentColor" strokeWidth="1" />
          <rect x="155" y="115" width="20" height="8" stroke="currentColor" strokeWidth="1" />
          <rect x="155" y="135" width="20" height="8" stroke="currentColor" strokeWidth="1" />
          <rect x="155" y="155" width="20" height="8" stroke="currentColor" strokeWidth="1" />

          {/* Low residential blocks with trees */}
          <rect x="200" y="140" width="70" height="70" stroke="currentColor" strokeWidth="1.6" />
          <rect x="280" y="110" width="40" height="100" stroke="currentColor" strokeWidth="1.6" />
          {/* Decorative street trees */}
          <circle cx="335" cy="190" r="14" stroke="currentColor" strokeWidth="1.4" />
          <line x1="335" y1="204" x2="335" y2="210" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="360" cy="186" r="11" stroke="currentColor" strokeWidth="1.4" />
          <line x1="360" y1="197" x2="360" y2="210" stroke="currentColor" strokeWidth="1.5" />

          {/* Cluster 2: Center Commercial Center */}
          <rect x="385" y="70" width="60" height="140" stroke="currentColor" strokeWidth="1.6" />
          <path d="M 385 70 L 415 45 L 445 70" stroke="currentColor" strokeWidth="1.6" />
          {/* Windows */}
          <rect x="395" y="85" width="10" height="12" stroke="currentColor" strokeWidth="1" />
          <rect x="420" y="85" width="10" height="12" stroke="currentColor" strokeWidth="1" />
          <rect x="395" y="110" width="10" height="12" stroke="currentColor" strokeWidth="1" />
          <rect x="420" y="110" width="10" height="12" stroke="currentColor" strokeWidth="1" />
          <rect x="395" y="135" width="10" height="12" stroke="currentColor" strokeWidth="1" />
          <rect x="420" y="135" width="10" height="12" stroke="currentColor" strokeWidth="1" />
          <rect x="395" y="160" width="10" height="12" stroke="currentColor" strokeWidth="1" />
          <rect x="420" y="160" width="10" height="12" stroke="currentColor" strokeWidth="1" />

          {/* Highrise Twin Towers with Skybridge */}
          <rect x="460" y="50" width="48" height="160" stroke="currentColor" strokeWidth="1.6" />
          <rect x="530" y="50" width="48" height="160" stroke="currentColor" strokeWidth="1.6" />
          {/* Skybridge */}
          <rect x="508" y="100" width="22" height="18" stroke="currentColor" strokeWidth="1.5" />
          <line x1="484" y1="20" x2="484" y2="50" stroke="currentColor" strokeWidth="1.5" />
          <line x1="554" y1="20" x2="554" y2="50" stroke="currentColor" strokeWidth="1.5" />

          {/* Stepped Pyramid Tower */}
          <path
            d="M 595 210 L 595 100 L 610 100 L 610 80 L 625 80 L 625 55 L 635 55 L 635 35 L 645 35 L 645 55 L 655 55 L 655 80 L 670 80 L 670 100 L 685 100 L 685 210 Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          {/* Modern Financial Center (Center right) */}
          <rect x="700" y="90" width="65" height="120" stroke="currentColor" strokeWidth="1.6" />
          <rect x="780" y="65" width="55" height="145" stroke="currentColor" strokeWidth="1.6" />
          {/* Diagonal Glass pattern */}
          <line x1="780" y1="65" x2="835" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="780" y1="120" x2="835" y2="175" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />

          {/* Airport Radar Tower */}
          <line x1="860" y1="70" x2="860" y2="210" stroke="currentColor" strokeWidth="2.5" />
          <ellipse cx="860" cy="70" rx="16" ry="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 850 70 A 10 10 0 0 1 870 70" stroke="#f59e0b" strokeWidth="1.8" />

          {/* Cluster 3: Modern Skyline to the right */}
          <rect x="890" y="85" width="45" height="125" stroke="currentColor" strokeWidth="1.6" />
          <rect x="945" y="110" width="55" height="100" stroke="currentColor" strokeWidth="1.6" />
          <rect x="1015" y="60" width="65" height="150" stroke="currentColor" strokeWidth="1.6" />
          {/* Windows */}
          <rect x="1025" y="75" width="15" height="8" stroke="currentColor" strokeWidth="1" />
          <rect x="1050" y="75" width="15" height="8" stroke="currentColor" strokeWidth="1" />
          <rect x="1025" y="95" width="15" height="8" stroke="currentColor" strokeWidth="1" />
          <rect x="1050" y="95" width="15" height="8" stroke="currentColor" strokeWidth="1" />
          <rect x="1025" y="115" width="15" height="8" stroke="currentColor" strokeWidth="1" />
          <rect x="1050" y="115" width="15" height="8" stroke="currentColor" strokeWidth="1" />
          <rect x="1025" y="135" width="15" height="8" stroke="currentColor" strokeWidth="1" />
          <rect x="1050" y="135" width="15" height="8" stroke="currentColor" strokeWidth="1" />

          {/* Right edge buildings & trees */}
          <rect x="1095" y="130" width="50" height="80" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="1160" cy="190" r="13" stroke="currentColor" strokeWidth="1.4" />
          <line x1="1160" y1="203" x2="1160" y2="210" stroke="currentColor" strokeWidth="1.5" />
          <rect x="1185" y="90" width="55" height="120" stroke="currentColor" strokeWidth="1.6" />
          <rect x="1255" y="70" width="60" height="140" stroke="currentColor" strokeWidth="1.6" />
          <rect x="1330" y="105" width="55" height="105" stroke="currentColor" strokeWidth="1.6" />

          {/* Solid ground line */}
          <line x1="0" y1="210" x2="1400" y2="210" stroke="currentColor" strokeWidth="2.5" />
        </svg>

        {/* Road & Highway Lane Markings */}
        <div className="absolute bottom-0 inset-x-0 h-9 sm:h-12 bg-neutral-950/90 border-t border-white/20 backdrop-blur-sm flex flex-col justify-center">
          {/* Animated dashed road lane divider */}
          <div className="w-full h-0.5 border-t border-dashed border-amber-400/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent animate-pulse" />
          </div>
          <div className="flex items-center justify-between px-4 text-[10px] text-neutral-400 font-mono tracking-wider pt-1">
            <span>DHAKA ELEVATED EXPRESSWAY · PADMA BRIDGE CORRIDOR</span>
            <span className="hidden sm:inline">LIVE SATELLITE TELEMETRY ACTIVE</span>
          </div>
        </div>

        {/* Moving Car Driving on the Road (CSS Animation with smooth infinite translate) */}
        <div 
          className="absolute bottom-2.5 sm:bottom-3 z-20 pointer-events-auto cursor-pointer"
          style={{
            animation: `driveAcross ${animationDuration} linear infinite`,
          }}
          onClick={handleHonk}
          title={isBn ? 'গাড়িতে ক্লিক করে হর্ন বাজান!' : 'Click car to honk!'}
        >
          {/* Honk bubble micro-interaction */}
          {isHonking && (
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-amber-400 text-neutral-950 font-bold text-[10px] whitespace-nowrap shadow-lg animate-bounce z-30 flex items-center gap-1">
              <Volume2 className="w-3 h-3" />
              <span>BEEP BEEP! 🚗</span>
            </div>
          )}

          {/* White Luxury Car Render */}
          <div className="relative group transition-transform active:scale-95">
            {/* Headlight beam */}
            {headlightsOn && (
              <div 
                className="absolute top-4 sm:top-5 left-[88%] w-48 sm:w-64 h-12 sm:h-16 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, rgba(254, 240, 138, 0.45) 0%, rgba(254, 240, 138, 0.15) 50%, transparent 100%)',
                  clipPath: 'polygon(0% 45%, 100% 0%, 100% 100%, 0% 55%)',
                  filter: 'blur(3px)',
                }}
              />
            )}

            {/* Car body based on selected type */}
            {carType === 'sedan' && (
              /* Sleek Executive White Sedan */
              <div className="relative w-40 sm:w-48 md:w-56 drop-shadow-2xl">
                <svg viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  {/* Car shadow */}
                  <ellipse cx="120" cy="62" rx="100" ry="6" fill="black" fillOpacity="0.6" filter="blur(3px)" />

                  {/* Car Body Shell (Pure Pristine White Metallic) */}
                  <path
                    d="M 15 50 
                       C 20 48, 30 45, 45 44 
                       L 70 32 
                       C 85 24, 105 18, 135 18 
                       L 170 18 
                       C 185 18, 195 24, 205 34 
                       L 225 42 
                       C 235 46, 238 52, 230 55 
                       L 218 55 
                       C 215 48, 200 48, 192 55 
                       L 78 55 
                       C 72 48, 55 48, 48 55 
                       L 15 55 
                       C 10 53, 10 51, 15 50 Z"
                    fill="url(#carWhiteMetallic)"
                    stroke="#cbd5e1"
                    strokeWidth="1.2"
                  />

                  {/* Dark Tinted Cabin Glass & Chrome Trim */}
                  <path
                    d="M 72 32 
                       L 95 21 
                       L 135 21 
                       L 165 21 
                       L 198 33 
                       C 180 33, 85 33, 72 32 Z"
                    fill="#0f172a"
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  {/* Window divider pillars */}
                  <line x1="125" y1="21" x2="128" y2="33" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="162" y1="21" x2="167" y2="33" stroke="#cbd5e1" strokeWidth="2" />

                  {/* Headlight & Taillight */}
                  <polygon points="220,44 230,46 226,50 216,48" fill="#fef08a" stroke="#facc15" strokeWidth="0.8" />
                  <polygon points="15,48 20,48 18,52 14,52" fill="#ef4444" />

                  {/* Wheel Arches & Rotating Wheels */}
                  {/* Front Wheel */}
                  <g className="animate-spin" style={{ transformOrigin: '205px 54px', animationDuration: speed === 'fast' ? '0.4s' : '0.8s' }}>
                    <circle cx="205" cy="54" r="14" fill="#18181b" stroke="#71717a" strokeWidth="1.5" />
                    <circle cx="205" cy="54" r="8" fill="#e2e8f0" stroke="#475569" strokeWidth="1" />
                    <circle cx="205" cy="54" r="3" fill="#0f172a" />
                    {/* Spokes */}
                    <line x1="205" y1="46" x2="205" y2="62" stroke="#475569" strokeWidth="1.5" />
                    <line x1="197" y1="54" x2="213" y2="54" stroke="#475569" strokeWidth="1.5" />
                    <line x1="199" y1="48" x2="211" y2="60" stroke="#475569" strokeWidth="1.5" />
                    <line x1="199" y1="60" x2="211" y2="48" stroke="#475569" strokeWidth="1.5" />
                  </g>

                  {/* Rear Wheel */}
                  <g className="animate-spin" style={{ transformOrigin: '63px 54px', animationDuration: speed === 'fast' ? '0.4s' : '0.8s' }}>
                    <circle cx="63" cy="54" r="14" fill="#18181b" stroke="#71717a" strokeWidth="1.5" />
                    <circle cx="63" cy="54" r="8" fill="#e2e8f0" stroke="#475569" strokeWidth="1" />
                    <circle cx="63" cy="54" r="3" fill="#0f172a" />
                    {/* Spokes */}
                    <line x1="63" y1="46" x2="63" y2="62" stroke="#475569" strokeWidth="1.5" />
                    <line x1="55" y1="54" x2="71" y2="54" stroke="#475569" strokeWidth="1.5" />
                    <line x1="57" y1="48" x2="69" y2="60" stroke="#475569" strokeWidth="1.5" />
                    <line x1="57" y1="60" x2="69" y2="48" stroke="#475569" strokeWidth="1.5" />
                  </g>

                  <defs>
                    <linearGradient id="carWhiteMetallic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="50%" stopColor="#f8fafc" />
                      <stop offset="100%" stopColor="#e2e8f0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}

            {carType === 'mpv' && (
              /* Noah / Esquire Hybrid Luxury MPV */
              <div className="relative w-44 sm:w-52 md:w-60 drop-shadow-2xl">
                <svg viewBox="0 0 250 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <ellipse cx="125" cy="72" rx="110" ry="7" fill="black" fillOpacity="0.6" filter="blur(3px)" />
                  {/* MPV Tall Cabin Body */}
                  <path
                    d="M 18 60 
                       L 18 36 
                       C 20 28, 30 22, 50 20 
                       L 180 20 
                       L 215 38 
                       L 240 50 
                       C 245 56, 240 64, 230 65 
                       L 218 65 
                       C 214 56, 196 56, 188 65 
                       L 80 65 
                       C 74 56, 56 56, 48 65 
                       L 18 65 Z"
                    fill="#f8fafc"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                  />
                  {/* High panoramic windows */}
                  <rect x="35" y="24" width="40" height="20" rx="3" fill="#0f172a" stroke="#94a3b8" />
                  <rect x="80" y="24" width="48" height="20" rx="3" fill="#0f172a" stroke="#94a3b8" />
                  <rect x="133" y="24" width="45" height="20" rx="3" fill="#0f172a" stroke="#94a3b8" />
                  <polygon points="182,24 212,38 182,44" fill="#0f172a" stroke="#94a3b8" />

                  {/* Front/Rear Lights */}
                  <polygon points="230,52 240,54 235,58 225,56" fill="#fef08a" />
                  <rect x="18" y="40" width="6" height="15" fill="#ef4444" rx="2" />

                  {/* Wheels */}
                  <circle cx="203" cy="64" r="14" fill="#18181b" stroke="#71717a" strokeWidth="1.5" />
                  <circle cx="203" cy="64" r="8" fill="#e2e8f0" />
                  <circle cx="64" cy="64" r="14" fill="#18181b" stroke="#71717a" strokeWidth="1.5" />
                  <circle cx="64" cy="64" r="8" fill="#e2e8f0" />
                </svg>
              </div>
            )}

            {carType === 'suv' && (
              /* Toyota Prado VIP Luxury SUV */
              <div className="relative w-44 sm:w-52 md:w-60 drop-shadow-2xl">
                <svg viewBox="0 0 250 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <ellipse cx="125" cy="76" rx="112" ry="7" fill="black" fillOpacity="0.6" filter="blur(3px)" />
                  {/* SUV High Ground Clearance Body */}
                  <path
                    d="M 20 62 
                       L 20 30 
                       L 60 22 
                       L 175 22 
                       L 210 38 
                       L 242 50 
                       C 246 56, 242 66, 230 67 
                       L 218 67 
                       C 214 55, 194 55, 186 67 
                       L 84 67 
                       C 78 55, 58 55, 50 67 
                       L 20 67 Z"
                    fill="#ffffff"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                  />
                  {/* Roof rails */}
                  <line x1="65" y1="18" x2="170" y2="18" stroke="#64748b" strokeWidth="2.5" />
                  <line x1="80" y1="18" x2="80" y2="22" stroke="#64748b" strokeWidth="2" />
                  <line x1="155" y1="18" x2="155" y2="22" stroke="#64748b" strokeWidth="2" />

                  {/* Dark Windows */}
                  <rect x="40" y="27" width="38" height="18" rx="2" fill="#0f172a" stroke="#94a3b8" />
                  <rect x="83" y="27" width="46" height="18" rx="2" fill="#0f172a" stroke="#94a3b8" />
                  <rect x="134" y="27" width="40" height="18" rx="2" fill="#0f172a" stroke="#94a3b8" />
                  <polygon points="178,27 207,38 178,44" fill="#0f172a" stroke="#94a3b8" />

                  {/* Lights */}
                  <polygon points="232,52 242,54 237,59 227,57" fill="#fef08a" />
                  <rect x="20" y="38" width="6" height="18" fill="#ef4444" rx="2" />

                  {/* Heavy Duty Wheels */}
                  <circle cx="202" cy="65" r="16" fill="#18181b" stroke="#71717a" strokeWidth="2" />
                  <circle cx="202" cy="65" r="9" fill="#94a3b8" />
                  <circle cx="67" cy="65" r="16" fill="#18181b" stroke="#71717a" strokeWidth="2" />
                  <circle cx="67" cy="65" r="9" fill="#94a3b8" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Micro Controls: Car Model, Speed, and Headlight Toggles */}
      {showControls && (
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2 bg-neutral-900/80 border-t border-neutral-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-neutral-400 font-medium">
              {isBn ? 'গাড়ির মডেল:' : 'Fleet Preview:'}
            </span>
            <div className="inline-flex rounded-lg bg-neutral-950 p-0.5 border border-neutral-800">
              <button
                type="button"
                onClick={() => setCarType('sedan')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  carType === 'sedan' ? 'bg-amber-400 text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {isBn ? 'সেডান' : 'Executive Sedan'}
              </button>
              <button
                type="button"
                onClick={() => setCarType('mpv')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  carType === 'mpv' ? 'bg-amber-400 text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {isBn ? 'নোয়া এমপিভি' : 'Noah MPV'}
              </button>
              <button
                type="button"
                onClick={() => setCarType('suv')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  carType === 'suv' ? 'bg-amber-400 text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {isBn ? 'প্রাডো এসইউভি' : 'Prado VIP SUV'}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Speed Toggle */}
            <button
              type="button"
              onClick={() => setSpeed(speed === 'normal' ? 'fast' : 'normal')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-all ${
                speed === 'fast'
                  ? 'bg-amber-400/10 border-amber-400 text-amber-400'
                  : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
              }`}
            >
              <Zap className="w-3 h-3" />
              <span>{speed === 'fast' ? (isBn ? 'টার্বো গতি' : 'Turbo Speed') : (isBn ? 'স্বাভাবিক ক্রুজ' : 'Cruise Speed')}</span>
            </button>

            {/* Headlights Toggle */}
            <button
              type="button"
              onClick={() => setHeadlightsOn(!headlightsOn)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-all ${
                headlightsOn
                  ? 'bg-amber-400/10 border-amber-400 text-amber-400'
                  : 'bg-neutral-950 border-neutral-800 text-neutral-500'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>{headlightsOn ? (isBn ? 'হেডলাইট চালু' : 'Headlights ON') : (isBn ? 'হেডলাইট বন্ধ' : 'Lights OFF')}</span>
            </button>

            {/* Beep Honk Button */}
            <button
              type="button"
              onClick={handleHonk}
              className="px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 text-[11px] font-semibold flex items-center gap-1 active:scale-95 transition-all"
            >
              <Volume2 className="w-3 h-3 text-amber-400" />
              <span>{isBn ? 'হর্ন বাজান' : 'Honk'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Embedded Keyframes for driving car */}
      <style>{`
        @keyframes driveAcross {
          0% {
            transform: translateX(-160px);
          }
          100% {
            transform: translateX(calc(100vw + 60px));
          }
        }
      `}</style>
    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { 
  ShieldCheck, 
  Clock, 
  BadgePercent, 
  MapPin, 
  Compass, 
  Plane, 
  CheckCircle2, 
  PhoneCall, 
  Sparkles, 
  Zap, 
  Check 
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLHeadingElement>(null);
  const [activeInteractiveTab, setActiveInteractiveTab] = useState<'all' | 'transparency' | 'chauffeurs' | 'gps'>('all');

  // GSAP Animations (2 key animations applied properly):
  // 1. Text Section Animation: Word-by-Word Kinetic Gliding with 3D RotateX perspective & Stagger
  // 2. Features Bento Grid Animation: Cascading Cards Elevation with Scale & Opacity Stagger
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ctx = gsap.context(() => {
              // Animation 1: Kinetic Text Reveal (Words stagger entrance)
              const words = wordsRef.current?.querySelectorAll('.feature-word');
              if (words && words.length > 0) {
                gsap.fromTo(
                  words,
                  { y: 35, opacity: 0, rotateX: 40 },
                  {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    stagger: 0.05,
                    duration: 0.8,
                    ease: 'power3.out',
                  }
                );
              }

              // Animation 2: Bento Cards Staggered Spring Lift
              const cards = sectionRef.current?.querySelectorAll('.feature-bento-card');
              if (cards && cards.length > 0) {
                gsap.fromTo(
                  cards,
                  { opacity: 0, y: 40, scale: 0.96 },
                  {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.1,
                    duration: 0.75,
                    ease: 'power3.out',
                    clearProps: 'transform',
                  }
                );
              }
            }, sectionRef);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const headlineWords = "Engineered for safety, reliability, and total peace of mind.".split(" ");

  return (
    <section 
      id="safety" 
      ref={sectionRef}
      className="py-20 sm:py-28 bg-neutral-900/60 border-b border-neutral-800/80 relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/3 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Word-by-Word GSAP Text Animation */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>The Garibook Standard</span>
          </div>

          {/* Animated Header with split word spans (Animation 1) */}
          <h2 
            ref={wordsRef}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance overflow-hidden py-1"
          >
            {headlineWords.map((word, i) => (
              <span 
                key={i} 
                className="feature-word inline-block mr-2.5 will-change-transform drop-shadow-sm"
              >
                {word === 'safety,' ? (
                  <span className="text-amber-400">{word}</span>
                ) : word === 'reliability,' ? (
                  <span className="text-neutral-100">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Unlike informal street rentals or chaotic highway haggling, Garibook delivers institutional rigor, vetted professional chauffeurs, and transparent upfront pricing across all 64 districts.
          </p>

          {/* Interactive Feature Category Filter Pills (UI/UX enhancement with icons) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Guarantees', icon: ShieldCheck },
              { id: 'transparency', label: '100% Upfront Pricing', icon: BadgePercent },
              { id: 'chauffeurs', label: 'Verified Chauffeurs', icon: CheckCircle2 },
              { id: 'gps', label: 'Live Central GPS', icon: Compass },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveInteractiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeInteractiveTab === tab.id
                      ? 'bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-400/20'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid (Animation 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1 (Large 2-column span) */}
          <div className={`feature-bento-card md:col-span-2 rounded-2xl bg-neutral-900/90 border p-6 sm:p-8 hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group shadow-lg ${
            activeInteractiveTab === 'transparency' ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-neutral-800/80'
          }`}>
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-colors" />
            
            <div className="flex items-center justify-between gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <BadgePercent className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 font-semibold">
                Guaranteed Upfront
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Zero Hidden Charges & Fixed Upfront Guarantees
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xl">
              What you see is exactly what you pay. Standard driver meals, fuel allowances, and clean cabin policies are all locked prior to departure. No sudden highway surcharges, bridge toll disputes, or awkward negotiations at the end of your trip.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-neutral-800">
              <div className="text-xs p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800/60">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  Itemized Fares
                </div>
                <div className="text-neutral-400 mt-1">Transparent breakdowns for all highway routes</div>
              </div>
              <div className="text-xs p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800/60">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  Prepaid Tolls
                </div>
                <div className="text-neutral-400 mt-1">Expressway FASTag integration available</div>
              </div>
              <div className="text-xs p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800/60">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  No Surge Spikes
                </div>
                <div className="text-neutral-400 mt-1">Flat fair rate during rain or peak rush hours</div>
              </div>
            </div>
          </div>

          {/* Bento Card 2 */}
          <div className={`feature-bento-card rounded-2xl bg-neutral-900/90 border p-6 sm:p-8 hover:border-emerald-500/50 transition-all duration-300 group shadow-lg ${
            activeInteractiveTab === 'chauffeurs' ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-neutral-800/80'
          }`}>
            <div className="flex items-center justify-between gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 font-semibold">
                NID Verified
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Vetted & Courteous Chauffeurs
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Every driver undergoes complete national identity verification, police record clearance, and highway safety audits. Uniformed, non-smoking, and trained in passenger courtesy.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Background Screened</span>
            </div>
          </div>

          {/* Bento Card 3 */}
          <div className={`feature-bento-card rounded-2xl bg-neutral-900/90 border p-6 sm:p-8 hover:border-blue-500/50 transition-all duration-300 group shadow-lg ${
            activeInteractiveTab === 'gps' ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-neutral-800/80'
          }`}>
            <div className="flex items-center justify-between gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-blue-400/10 border border-blue-400/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-blue-400/10 text-blue-400 border border-blue-400/20 font-semibold">
                24/7 Operations
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Live GPS & Central Monitoring
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Our Dhaka operations headquarters tracks your vehicle’s live coordinates, speed metrics, and trip progress in real time, with instant SOS escalation.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-neutral-300 bg-neutral-950 p-2.5 rounded-lg border border-neutral-800">
              <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-mono">Central Hotline: 09613-822822</span>
            </div>
          </div>

          {/* Bento Card 4 */}
          <div className="feature-bento-card rounded-2xl bg-neutral-900/90 border border-neutral-800/80 p-6 sm:p-8 hover:border-amber-400/50 transition-all duration-300 group shadow-lg">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Plane className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 font-semibold">
                DAC Terminal 1-3
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Flight Delay Protection
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              International arrivals receive 60 minutes complimentary waiting time at Hazrat Shahjalal Airport. Chauffeur schedules automatically calibrate to actual flight touch-down times.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-amber-300">
              <Clock className="w-3.5 h-3.5" />
              <span>60-Min Grace Period Included</span>
            </div>
          </div>

          {/* Bento Card 5 (Large 2-column span) */}
          <div className="feature-bento-card md:col-span-2 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden group shadow-lg">
            <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Pristine Interiors & Chilled AC Test Pass
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xl">
              Bangladesh's tropical weather demands high-performance cooling. Every Garibook vehicle must pass a thermal inspection before dispatch to ensure crisp, chilled air throughout the trip.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Sanitized & Dust-Free Cabins
              </span>
              <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Complimentary Bottled Water
              </span>
              <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Mobile Device Fast-Charging Cables
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

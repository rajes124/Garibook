import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronRight, 
  Car, 
  Sparkles, 
  ArrowRight,
  Compass,
  Briefcase,
  HelpCircle,
  Star
} from 'lucide-react';

interface Props {
  currency: 'BDT' | 'USD';
  onToggleCurrency: () => void;
  onOpenBooking: () => void;
  onOpenAssignmentInfo: () => void;
}

export const Navbar: React.FC<Props> = ({
  currency,
  onToggleCurrency,
  onOpenBooking,
  onOpenAssignmentInfo,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavLinks = [
    { label: 'Services', href: '#services', icon: Briefcase, priority: 'always' },
    { label: 'Fleet', href: '#fleet', icon: Car, priority: 'always' },
    { label: 'Routes', href: '#routes', icon: Compass, priority: 'always' },
    { label: 'Safety', href: '#safety', icon: ShieldCheck, priority: 'always' },
    { label: 'How It Works', href: '#how-it-works', icon: HelpCircle, priority: 'xl' },
    { label: 'Reviews', href: '#reviews', icon: Star, priority: 'xl' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          scrolled
            ? 'bg-neutral-950/95 backdrop-blur-xl border-neutral-800/90 shadow-2xl shadow-black/70 py-2.5 sm:py-3'
            : 'bg-neutral-950/85 backdrop-blur-lg border-neutral-800/40 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Zone 1 (Left): Brand Identity */}
            <a
              href="#"
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 flex items-center justify-center text-neutral-950 font-black shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform shrink-0">
                <Car className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.3]" />
              </div>
              <div className="hidden min-[360px]:flex flex-col">
                <div className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none flex items-center">
                  <span>Gari</span>
                  <span className="text-amber-400">book</span>
                </div>
                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest leading-none mt-1">
                  Premier Mobility · BD
                </span>
              </div>
            </a>

            {/* Zone 2 (Center): Modern Floating Dock Navigation Pill */}
            <nav className="hidden lg:flex items-center p-1 rounded-full bg-neutral-900/80 border border-neutral-800/90 shadow-inner backdrop-blur-md">
              {primaryNavLinks.map((link) => {
                const Icon = link.icon;
                const isXlOnly = link.priority === 'xl';
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/90 transition-all whitespace-nowrap group ${
                      isXlOnly ? 'hidden xl:flex' : 'flex'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400 transition-colors shrink-0" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Zone 3 (Right): Quick Actions Cluster */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              
              {/* 24/7 Hotline Badge (Wide desktop) */}
              <a
                href="tel:+8809613822822"
                className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-amber-400 hover:border-amber-400/40 transition-colors whitespace-nowrap"
                title="24/7 National Dispatch Hotline"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>09613-822822</span>
              </a>

              {/* Technical / GSAP Architecture Specs (Neat non-overlapping button) */}
              <button
                onClick={onOpenAssignmentInfo}
                type="button"
                className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 hover:bg-amber-400/20 hover:text-amber-200 transition-all cursor-pointer whitespace-nowrap shadow-sm"
                title="View GSAP & Technical Architecture Specifications"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Tech Specs</span>
              </button>

              {/* Currency Segmented Toggle (BDT / USD) */}
              <div 
                onClick={onToggleCurrency}
                className="inline-flex items-center p-0.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs font-medium cursor-pointer select-none hover:border-neutral-700 transition-colors"
                title={`Switch Currency (Current: ${currency})`}
              >
                <span
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold font-mono transition-all ${
                    currency === 'BDT'
                      ? 'bg-amber-400 text-neutral-950 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  ৳ BDT
                </span>
                <span
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold font-mono transition-all ${
                    currency === 'USD'
                      ? 'bg-amber-400 text-neutral-950 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  $ USD
                </span>
              </div>

              {/* Primary Action CTA: Solid Luxury Gold with Uiverse animated sweep */}
              <button
                onClick={onOpenBooking}
                type="button"
                className="btn-uiverse-solid px-2.5 sm:px-5 py-2 text-xs sm:text-sm font-extrabold rounded-xl whitespace-nowrap flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <span className="hidden sm:inline">Book Chauffeur</span>
                <span className="sm:hidden">Book</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              {/* Mobile Drawer Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="lg:hidden p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with Smooth Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-neutral-950/95 backdrop-blur-2xl pt-20 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2 pb-2 border-b border-neutral-900">
              <span>Navigation Menu</span>
              <span className="text-amber-400 font-mono">Garibook BD</span>
            </div>

            {primaryNavLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-semibold text-neutral-200 hover:text-amber-400 py-2.5 border-b border-neutral-900/80 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 group-hover:border-amber-400/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-amber-400 transition-colors" />
                </a>
              );
            })}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssignmentInfo();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-sm text-amber-300 font-semibold"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Tech Architecture & Specs</span>
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-800 space-y-3">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Vetted Drivers & AC Fleet</span>
              </span>
              <span className="font-mono text-amber-400">24/7 Hotline</span>
            </div>

            <a
              href="tel:+8809613822822"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-100 font-mono text-sm hover:border-amber-400/40"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Call Hotline: +880 9613-822822</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-uiverse-solid w-full py-3.5 rounded-xl font-bold text-center active:scale-98 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Instant Chauffeur Reservation</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

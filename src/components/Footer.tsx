import React, { useState } from 'react';
import { 
  Car, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Send, 
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp,
  Sparkles,
  Smartphone,
  QrCode,
  Clock,
  Compass,
  CreditCard,
  ChevronRight,
  Headphones
} from 'lucide-react';

interface FooterProps {
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/80 text-neutral-400 text-xs relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.05),transparent_70%)] pointer-events-none" />

      {/* 1. VIP Pre-Footer Call-To-Action Banner */}
      <div className="border-b border-neutral-800/80 bg-gradient-to-b from-neutral-900/60 to-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div 
            data-aos="fade-up" 
            data-aos-duration="700"
            className="rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-amber-950/40 border border-neutral-800/90 p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            {/* Ambient gold glow */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Ready for Seamless Travel?</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Reserve your executive chauffeur in less than 60 seconds.
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Guaranteed upfront pricing, vetted chauffeurs with NID verification, and chilled AC cabins across all 64 districts of Bangladesh.
              </p>

              {/* Key Trust Chips */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-neutral-300">
                <span className="flex items-center gap-1.5 bg-neutral-950/70 px-3 py-1.5 rounded-lg border border-neutral-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  No Surge or Hidden Fares
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-950/70 px-3 py-1.5 rounded-lg border border-neutral-800">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Punctuality Guarantee
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-950/70 px-3 py-1.5 rounded-lg border border-neutral-800">
                  <Headphones className="w-3.5 h-3.5 text-cyan-400" />
                  24/7 Operations Desk
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="tel:+8809613822822"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-neutral-800/90 hover:bg-neutral-800 border border-neutral-700/80 text-neutral-200 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>09613-822822</span>
              </a>

              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  type="button"
                  className="btn-uiverse w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold active:scale-95 transition-all text-center cursor-pointer"
                >
                  <span>Book Chauffeur Now</span>
                </button>
              ) : (
                <a
                  href="#fleet"
                  className="btn-uiverse w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold active:scale-95 transition-all text-center cursor-pointer"
                >
                  <span>Book Chauffeur Now</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
          
          {/* Brand Info & Contacts (Col 1-4) */}
          <div data-aos="fade-up" data-aos-duration="700" className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 flex items-center justify-center text-neutral-950 font-black shadow-lg shadow-amber-500/20">
                <Car className="w-5 h-5 stroke-[2.3]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none">
                  Gari<span className="text-amber-400">book</span>
                </span>
                <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest leading-none mt-1">
                  Premier Mobility Platform
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Bangladesh’s premier tech-enabled ground transportation network. We specialize in verified executive sedans, spacious microbuses, airport VIP transfers, and reliable intercity connections across 64 districts.
            </p>

            {/* Direct Contact Cards */}
            <div className="pt-2 space-y-2.5 text-xs">
              <a
                href="tel:+8809613822822"
                className="flex items-center gap-2.5 text-neutral-300 hover:text-amber-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-amber-400/40 transition-colors">
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span className="font-mono font-medium">+880 9613-822822 (24/7 Operations)</span>
              </a>

              <a
                href="mailto:support@garibook.com"
                className="flex items-center gap-2.5 text-neutral-300 hover:text-amber-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-amber-400/40 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span>support@garibook.com / booking@garibook.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-neutral-300">
                <div className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span>Garibook HQ: Road 11, Block D, Banani, Dhaka-1213, Bangladesh</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter / X' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:border-amber-400/50 hover:bg-neutral-800 transition-all cursor-pointer"
                    aria-label={item.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links: Mobility Fleet (Col 5-6) */}
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="700" className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-amber-400" />
              <span>Chauffeur Fleet</span>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-amber-400" />
                  <span>Executive Sedans</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-amber-400" />
                  <span>Toyota Noah 7-Seater</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-amber-400" />
                  <span>HiAce Grand Cabin</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-amber-400" />
                  <span>Prado Flagship SUV</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-amber-400" />
                  <span>Hyundai Staria Lounge</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-amber-400" />
                  <span>Electric Vehicles (EV)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links: Popular Corridors (Col 7-9) */}
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="700" className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>National Corridors</span>
            </div>
            <ul className="space-y-2">
              {[
                { title: 'Dhaka ↔ Cox’s Bazar', time: '8.0 hrs', href: '#routes' },
                { title: 'Dhaka ↔ Chittagong Port', time: '4.5 hrs', href: '#routes' },
                { title: 'Dhaka ↔ Sylhet Tea Valley', time: '5.0 hrs', href: '#routes' },
                { title: 'Padma Bridge Expressway', time: '3.5 hrs', href: '#routes' },
                { title: 'Dhaka ↔ Rajshahi Silk City', time: '4.5 hrs', href: '#routes' },
                { title: 'Hazrat Shahjalal Airport (DAC)', time: 'Fast Track', href: '#services' },
              ].map((route) => (
                <li key={route.title}>
                  <a
                    href={route.href}
                    className="hover:text-amber-400 transition-colors flex items-center justify-between text-xs group"
                  >
                    <span className="flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-amber-400" />
                      <span>{route.title}</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-500 group-hover:text-amber-400 group-hover:border-amber-400/30">
                      {route.time}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Mobile Pass (Col 10-12) */}
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="700" className="lg:col-span-3 space-y-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Highway Bulletin</span>
              </div>
              <p className="text-neutral-400 text-xs mt-1.5">
                Subscribe for live highway alerts, toll rate changes, and exclusive corporate charter offers.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter work or personal email"
                  required
                  className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="btn-uiverse w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
              >
                {subscribed ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Subscribed to Highway Bulletin!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Get Travel & Route Alerts</span>
                  </>
                )}
              </button>
            </form>

            {/* Mobile App Booking Callout */}
            <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800/80 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-amber-400 shrink-0">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white">Download Garibook App</div>
                <div className="text-[10px] text-neutral-400">Available on iOS & Google Play Store</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar: Legal, Accepted Gateways & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-neutral-400 text-xs font-medium">
              © {new Date().getFullYear()} Garibook Technologies Ltd. All rights reserved.
            </div>
            <div className="text-neutral-600 text-[11px]">
              Registered in Bangladesh under the Companies Act 1994. Licensed Ground Mobility Operator.
            </div>
          </div>

          {/* Payment Badges (Styled specifically for Bangladesh) */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-[11px] text-neutral-500 mr-1 flex items-center gap-1">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Gateways:</span>
            </span>

            {/* bKash */}
            <span className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-pink-400 font-bold hover:border-pink-500/40 transition-colors">
              bKash
            </span>

            {/* Nagad */}
            <span className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-orange-400 font-bold hover:border-orange-500/40 transition-colors">
              Nagad
            </span>

            {/* Upay */}
            <span className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-amber-300 font-bold hover:border-amber-400/40 transition-colors">
              Upay
            </span>

            {/* VISA */}
            <span className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-blue-400 font-bold hover:border-blue-500/40 transition-colors">
              VISA
            </span>

            {/* Mastercard */}
            <span className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-amber-500 font-bold hover:border-amber-500/40 transition-colors">
              Mastercard
            </span>

            {/* Cash */}
            <span className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-emerald-400 font-bold hover:border-emerald-500/40 transition-colors">
              Cash on Trip
            </span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            type="button"
            className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-400 hover:border-amber-400/50 hover:bg-neutral-800 transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer shrink-0"
            title="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Car, 
  Plane, 
  MapPin, 
  Calendar, 
  Clock, 
  Search, 
  ArrowRightLeft, 
  Users, 
  Sparkles, 
  Bus, 
  Ship, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Star,
  Tag,
  Navigation,
  RotateCcw,
  Languages,
  Layout,
  Layers,
  Crown,
  Check,
  PhoneCall,
  ChevronUp,
  MessageCircle,
  Eye,
  Camera,
  X,
  Compass
} from 'lucide-react';
import { ServiceType, BookingFormData } from '../types';
import { BANGLADESH_LOCATIONS, VEHICLES } from '../data/mockData';
import { CityscapeSkyline } from './CityscapeSkyline';

export type HeroDesignMode = 'skyline_luxe' | 'console_dark' | 'vip_split';

interface Props {
  currency: 'BDT' | 'USD';
  onSearch: (formData: BookingFormData) => void;
  onQuickBookVehicle: (vehicleId: string) => void;
}

export const HeroSection: React.FC<Props> = ({ currency, onSearch, onQuickBookVehicle }) => {
  // Multiple Hero Design Modes State
  const [designMode, setDesignMode] = useState<HeroDesignMode>('skyline_luxe');
  // Language Switcher State (English vs Bengali, as shown in user's reference)
  const [language, setLanguage] = useState<'en' | 'bn'>('en');

  // Service Tab State
  const [activeTab, setActiveTab] = useState<ServiceType>('hourly');
  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way');
  const [pickup, setPickup] = useState(BANGLADESH_LOCATIONS[0]);
  const [dropoff, setDropoff] = useState(BANGLADESH_LOCATIONS[1]);
  const [pickupDate, setPickupDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [pickupTime, setPickupTime] = useState('09:00');
  const [flightNumber, setFlightNumber] = useState('EK 582 (Emirates)');
  const [passengers, setPassengers] = useState(3);
  const [isCalculating, setIsCalculating] = useState(false);

  // VIP Showcase active vehicle index
  const [spotlightVehicleIndex, setSpotlightVehicleIndex] = useState(0);
  const [spotlightPhotoView, setSpotlightPhotoView] = useState<'exterior' | 'interior'>('exterior');

  // Floating Chat Widget open state
  const [chatOpen, setChatOpen] = useState(false);

  // GSAP animation refs
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  const isBn = language === 'bn';

  // Currency Formatter
  const formatPrice = (amountBDT: number) => {
    if (currency === 'USD') {
      return `$${(amountBDT / 122).toFixed(0)}`;
    }
    return `৳${amountBDT.toLocaleString('en-IN')}`;
  };

  // Re-run GSAP entrance animation when designMode changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headlineRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85 }
      )
      .fromTo(
        subtextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(
        widgetRef.current,
        { y: 28, opacity: 0, scale: 0.99 },
        { y: 0, opacity: 1, scale: 1, duration: 0.75 },
        '-=0.45'
      );
    }, heroContainerRef);

    return () => ctx.revert();
  }, [designMode, language]);

  // Quick swap pickup and dropoff
  const handleSwap = () => {
    const temp = pickup;
    setPickup(dropoff);
    setDropoff(temp);
  };

  // Estimated fare calculation preview
  const getEstimatedPreview = () => {
    if (activeTab === 'airport') return { km: 14, time: '35 mins', estBDT: 1650 };
    if (activeTab === 'intercity') return { km: 245, time: '4.5 hrs', estBDT: 8200 };
    if (activeTab === 'bus_launch') return { km: 280, time: '5.5 hrs', estBDT: 1850 };
    if (activeTab === 'multiday') return { km: 150, time: 'Full Day Charter', estBDT: 5800 };
    return { km: 35, time: '4 hrs City Tour', estBDT: 2600 };
  };

  const preview = getEstimatedPreview();

  const handleSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      onSearch({
        serviceType: activeTab,
        pickupLocation: pickup,
        dropoffLocation: dropoff,
        pickupDate,
        pickupTime,
        tripType,
        passengers,
        vehicleCategory: 'all',
        flightNumber: activeTab === 'airport' ? flightNumber : undefined
      });
      // Scroll smoothly to fleet section
      const fleetEl = document.getElementById('fleet');
      if (fleetEl) {
        fleetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 350);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const spotlightVehicle = VEHICLES[spotlightVehicleIndex] || VEHICLES[0];

  return (
    <section 
      ref={heroContainerRef}
      className={`relative pt-4 pb-14 md:pt-6 md:pb-20 overflow-hidden border-b border-neutral-800/80 transition-colors duration-700 ${
        designMode === 'skyline_luxe'
          ? 'bg-gradient-to-b from-[#092b77] via-[#081f56] to-neutral-950 text-white'
          : designMode === 'vip_split'
          ? 'bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950'
          : 'bg-neutral-950'
      }`}
    >
      {/* Ambient background glow patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Controls Bar: Multiple Hero Design Switcher & Language Switcher (English / বাংলা) */}
        <div className="mb-6 pb-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          
          {/* Multiple Hero Designs Switcher Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-neutral-900/90 border border-neutral-700/80 p-1 rounded-2xl backdrop-blur-md shadow-lg">
            <span className="text-[11px] font-semibold text-neutral-400 px-2.5 hidden sm:inline-flex items-center gap-1">
              <Layout className="w-3.5 h-3.5 text-amber-400" />
              <span>{isBn ? 'হিরো ডিজাইন:' : 'Hero Layout:'}</span>
            </span>

            {/* Design 1: Luxe Skyline (User's image style) */}
            <button
              type="button"
              onClick={() => setDesignMode('skyline_luxe')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                designMode === 'skyline_luxe'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
              title="Modern Royal Blue with animated driving car along city skyline"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{isBn ? 'লাক্স স্কাইলাইন' : 'Luxe Skyline'}</span>
            </button>

            {/* Design 2: Smart Booking Console */}
            <button
              type="button"
              onClick={() => setDesignMode('console_dark')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                designMode === 'console_dark'
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-400/25'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
              title="Comprehensive dark luxury multi-tab booking console"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isBn ? 'বুকিং কনসোল' : 'Smart Console'}</span>
            </button>

            {/* Design 3: VIP Split Showcase */}
            <button
              type="button"
              onClick={() => setDesignMode('vip_split')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                designMode === 'vip_split'
                  ? 'bg-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-500/25'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
              title="Split showcase with interactive vehicle spotlight and chauffeur profile"
            >
              <Crown className="w-3.5 h-3.5" />
              <span>{isBn ? 'ভিআইপি স্প্লিট' : 'VIP Split'}</span>
            </button>
          </div>

          {/* Right Action: Language Switcher (Exactly like "文A English" in user's image) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-semibold text-white transition-all shadow-md active:scale-95 cursor-pointer backdrop-blur-md"
              title="Switch language between English and বাংলা"
            >
              <Languages className="w-4 h-4 text-amber-400" />
              <span>{language === 'en' ? '文A English' : 'বাং বাংলা'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-400 text-neutral-950 font-bold ml-0.5">
                {language === 'en' ? 'BN' : 'EN'}
              </span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESIGN MODE 1: LUXE SKYLINE & JOURNEYS (Directly matching user screenshot) */}
        {/* ========================================================================= */}
        {designMode === 'skyline_luxe' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Top kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>{isBn ? 'বাংলাদেশের শীর্ষস্থানীয় কার রেন্টাল নেটওয়ার্ক' : 'BANGLADESH’S PREMIER MOBILITY & CAR RENTAL NETWORK'}</span>
              <span className="text-white/40 hidden sm:inline">·</span>
              <span className="text-blue-100 hidden sm:inline">64 Districts · Airport Transfers · Highway VIP Charters</span>
            </div>

            {/* Bold Headline (Matching user's reference: "From Everyday Rides to Meaningful Journeys") */}
            <div className="max-w-4xl">
              <h1 
                ref={headlineRef}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] text-balance drop-shadow-md"
              >
                {isBn ? (
                  <>
                    দৈনন্দিন যাত্রা থেকে <br />
                    <span className="text-amber-400">অর্থপূর্ণ সফল ভ্রমণ।</span>
                  </>
                ) : (
                  <>
                    From Everyday Rides to <br />
                    <span className="text-amber-400">Meaningful Journeys.</span>
                  </>
                )}
              </h1>

              <p 
                ref={subtextRef}
                className="mt-4 text-base sm:text-xl text-blue-100/90 max-w-2xl leading-relaxed"
              >
                {isBn
                  ? 'হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর পিকআপ থেকে পদ্মা সেতু হয়ে দেশের ৬৪ জেলায় নিরাপদ, শীতাতপ নিয়ন্ত্রিত প্রিমিয়াম ভ্রমণ।'
                  : 'Experience seamless airport transfers, corporate hourly charters, and cross-country journeys across the Padma Bridge expressway with verified chauffeurs.'}
              </p>
            </div>

            {/* Quick Floating Booking Bar */}
            <div 
              ref={widgetRef}
              className="rounded-2xl bg-neutral-900/95 border border-white/20 p-4 sm:p-6 shadow-2xl backdrop-blur-xl"
            >
              <form onSubmit={handleSubmitSearch} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {/* Pickup */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isBn ? 'পিকআপ স্থান' : 'Pickup Location'}</span>
                    </label>
                    <select
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-medium"
                    >
                      {BANGLADESH_LOCATIONS.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  {/* Dropoff */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{isBn ? 'গন্তব্য স্থান' : 'Destination'}</span>
                    </label>
                    <select
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-medium"
                    >
                      {BANGLADESH_LOCATIONS.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{isBn ? 'তারিখ ও সময়' : 'Pickup Date & Time'}</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-2/3 bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                      />
                      <input
                        type="time"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="w-1/3 bg-neutral-950 border border-neutral-700 rounded-xl px-2 py-2 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                      />
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="flex items-end">
                    <button
                      type="submit"
                      disabled={isCalculating}
                      className="btn-uiverse w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
                    >
                      {isCalculating ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          <span>{isBn ? 'অনুসন্ধান চলছে...' : 'Checking Fares...'}</span>
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4 stroke-[2.5]" />
                          <span>{isBn ? 'গাড়ির ভাড়া দেখুন' : 'Explore Fleet & Fares'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Micro guarantees */}
                <div className="pt-3 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 font-bold text-white font-mono bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>4.92</span>
                    </span>
                    <span>150,000+ Verified Trips</span>
                  </div>

                  <div className="flex items-center gap-4 text-neutral-300">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>100% Chilled AC Fleet</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>Zero Surge Pricing</span>
                    </span>
                  </div>
                </div>
              </form>
            </div>

            {/* The Cityscape Skyline with animated driving white car (from user's image) */}
            <div className="rounded-2xl border border-white/20 overflow-hidden shadow-2xl bg-neutral-950/70 backdrop-blur-md">
              <CityscapeSkyline theme="blue" language={language} showControls={true} />
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* DESIGN MODE 2: SMART CHAUFFEUR CONSOLE (High-density dark luxury power engine) */}
        {/* ========================================================================= */}
        {designMode === 'console_dark' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Trust badge kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-amber-400 tracking-wide">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>BANGLADESH’S PREMIER MOBILITY & CAR RENTAL NETWORK</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400">Dhaka · Chittagong · Sylhet · 64 Districts</span>
            </div>

            {/* Headline */}
            <h1 
              ref={headlineRef}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl text-balance"
            >
              {isBn 
                ? 'যাচাইকৃত ড্রাইভার ও নিশ্চিত ভাড়ায় উপভোগ করুন নির্ভার ভ্রমণ।' 
                : 'Travel in effortless comfort with vetted chauffeurs & guaranteed upfront fares.'}
            </h1>

            {/* Subtitle */}
            <p 
              ref={subtextRef}
              className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed"
            >
              {isBn
                ? 'বিমানবন্দর পিকআপ থেকে বিলাসবহুল আন্তঃনগর ট্রিপ—সকল রুটে পান পরিচ্ছন্ন গাড়ি, পেশাদার চালক এবং অন-টাইম গ্যারান্টি।'
                : 'From seamless Hazrat Shahjalal Airport transfers to luxury intercity charters across the Padma Bridge expressway. Experience pristine executive sedans, spacious microbuses, and guaranteed on-time pickups.'}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-neutral-400 border-t border-neutral-900 pt-3 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 font-bold text-white font-mono bg-neutral-900/90 px-2.5 py-0.5 rounded-lg border border-neutral-800">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.92</span>
                </span>
                <span>Average Chauffeur Rating</span>
              </div>
              <span className="text-neutral-700 hidden sm:inline">/</span>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 font-bold text-white font-mono bg-neutral-900/90 px-2.5 py-0.5 rounded-lg border border-neutral-800">
                  <Car className="w-3.5 h-3.5 text-amber-400" />
                  <span>150,000+</span>
                </span>
                <span>Safe Trips Dispatched</span>
              </div>
              <span className="text-neutral-700 hidden sm:inline">/</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-neutral-300">100% Guaranteed AC Fleet</span>
              </div>
            </div>

            {/* Interactive Booking & Search Console */}
            <div 
              ref={widgetRef}
              className="rounded-2xl bg-neutral-900/90 border border-neutral-800 p-4 sm:p-6 shadow-2xl shadow-black/80 backdrop-blur-md"
            >
              {/* Service Tabs */}
              <div className="flex items-center gap-1 sm:gap-2 pb-4 border-b border-neutral-800 overflow-x-auto no-scrollbar">
                {[
                  { id: 'hourly', label: isBn ? 'শহর / ঘণ্টাভিক্তিক' : 'City / Hourly', icon: Car },
                  { id: 'airport', label: isBn ? 'এয়ারপোর্ট ড্রপ / পিকআপ' : 'Airport Pickup', icon: Plane },
                  { id: 'intercity', label: isBn ? 'আন্তঃনগর ট্রানজিট' : 'Intercity One-Way', icon: Compass },
                  { id: 'bus_launch', label: isBn ? 'টার্মিনাল কানেক্ট' : 'Terminal Express', icon: Bus },
                  { id: 'multiday', label: isBn ? 'মাল্টি-ডে ট্যুর' : 'Multi-Day Charter', icon: Users },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id as ServiceType)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-400/20'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Console Form Fields */}
              <form onSubmit={handleSubmitSearch} className="mt-5 space-y-4">
                {/* Trip Type Selector */}
                <div className="flex items-center gap-4 text-xs font-medium text-neutral-300">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="tripType"
                      checked={tripType === 'one-way'}
                      onChange={() => setTripType('one-way')}
                      className="accent-amber-400 text-amber-400"
                    />
                    <span className="flex items-center gap-1.5 text-neutral-200 group-hover:text-white">
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isBn ? 'ওয়ান ওয়ে ট্রিপ' : 'One Way Trip'}</span>
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="tripType"
                      checked={tripType === 'round-trip'}
                      onChange={() => setTripType('round-trip')}
                      className="accent-amber-400 text-amber-400"
                    />
                    <span className="flex items-center gap-1.5 text-neutral-200 group-hover:text-white">
                      <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isBn ? 'রাউন্ড ট্রিপ / একই দিনে ফিরতি' : 'Round Trip / Same Day Return'}</span>
                    </span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
                  {/* Pickup */}
                  <div className="md:col-span-4 relative">
                    <label className="block text-xs font-semibold text-neutral-400 mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>Pickup Location</span>
                    </label>
                    <select
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      {BANGLADESH_LOCATIONS.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  {/* Swap Button */}
                  <div className="hidden md:flex md:col-span-1 justify-center pb-1">
                    <button
                      type="button"
                      onClick={handleSwap}
                      className="p-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-amber-400 transition-colors border border-neutral-700"
                      title="Swap Pickup and Dropoff"
                    >
                      <ArrowRightLeft className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Dropoff */}
                  <div className="md:col-span-4 relative">
                    <label className="block text-xs font-semibold text-neutral-400 mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Destination</span>
                    </label>
                    <select
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      {BANGLADESH_LOCATIONS.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div className="md:col-span-3">
                    <label className="block text-xs font-semibold text-neutral-400 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Date & Time</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-2/3 bg-neutral-950 border border-neutral-700 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                      />
                      <input
                        type="time"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="w-1/3 bg-neutral-950 border border-neutral-700 rounded-xl px-2 py-2 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Fare Estimation & Search CTA */}
                <div className="pt-3 border-t border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-xs text-neutral-300">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-800 font-mono text-amber-400">
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Est. {preview.km} km · {preview.time}</span>
                    </div>
                    <div className="text-neutral-400 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Starting from <span className="font-bold text-white font-mono text-sm">{formatPrice(preview.estBDT)}</span></span>
                      <span className="text-[11px] text-neutral-500 ml-1">(All-Inclusive)</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isCalculating}
                    className="btn-uiverse inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm active:scale-98 transition-all cursor-pointer whitespace-nowrap"
                  >
                    {isCalculating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>Checking Fleet Availability...</span>
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4 stroke-[2.5]" />
                        <span>Search Available Fleet & Fares</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* DESIGN MODE 3: VIP SPLIT SHOWCASE (Left copy, Right Interactive 3D Showcase) */}
        {/* ========================================================================= */}
        {designMode === 'vip_split' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            {/* Left Side: Brand Proposition & Fast Booking */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Crown className="w-3.5 h-3.5" />
                <span>{isBn ? 'ভিআইপি এক্সিকিউটিভ মোবিলিটি' : 'VIP Executive Chauffeur Class'}</span>
              </div>

              <h1 
                ref={headlineRef}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
              >
                {isBn ? (
                  <>
                    বিশ্বস্ত চালক ও বিলাসবহুল বহরে <br />
                    <span className="text-amber-400">অনবদ্য ভিআইপি সফর।</span>
                  </>
                ) : (
                  <>
                    Executive Luxury Fleet & <br />
                    <span className="text-amber-400">Dedicated Chauffeurs.</span>
                  </>
                )}
              </h1>

              <p 
                ref={subtextRef}
                className="text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed"
              >
                {isBn
                  ? 'উচ্চপদস্থ কর্মকর্তা, কর্পোরেট টিম এবং সম্মানিত প্রবাসী অতিথিদের জন্য সুসজ্জিত সেডান, নোয়া মাইক্রোবাস ও প্রাডো জীপের নির্ভরযোগ্য সেবা।'
                  : 'Tailored for corporate dignitaries, embassies, and elite family excursions. Guaranteed chilled climate control, automated toll tag passes, and 24/7 central flight delay tracking.'}
              </p>

              {/* VIP Bullet Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  isBn ? 'পদ্মা সেতু ও এক্সপ্রেসওয়ে ফাস্ট্যাগ যুক্ত' : 'Padma Bridge FASTag Automated Pass',
                  isBn ? '১০০% পরীক্ষিত ও পেশাদার চালক' : '100% NID & Background Verified Chauffeurs',
                  isBn ? 'শীতাতপ নিয়ন্ত্রিত ও পরিচ্ছন্ন কেবিন' : 'Sanitized Cabin & Complimentary Water',
                  isBn ? 'কোনো হিডেন বা বর্ধিত ভাড়া নেই' : 'Zero Hidden Charges or Surge Multipliers',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Fast Booking Inputs Bar */}
              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-neutral-400 font-semibold block mb-1">Pickup</label>
                    <select
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white"
                    >
                      {BANGLADESH_LOCATIONS.map((l) => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] text-neutral-400 font-semibold block mb-1">Destination</label>
                    <select
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white"
                    >
                      {BANGLADESH_LOCATIONS.map((l) => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                  <div className="text-xs text-neutral-400">
                    Est. Daily Rate from <strong className="text-white font-mono text-sm">{formatPrice(spotlightVehicle.pricePerDayBDT)}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => onQuickBookVehicle(spotlightVehicle.id)}
                    className="btn-uiverse py-2 px-5 rounded-xl font-bold text-xs active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Reserve VIP Chauffeur</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive 3D Vehicle Spotlight Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-neutral-900/90 border border-neutral-800 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md group hover:border-amber-400/40 transition-all duration-500">
                {/* Vehicle Selector Tabs */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-xl border border-neutral-800">
                    {VEHICLES.slice(0, 3).map((v, idx) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => {
                          setSpotlightVehicleIndex(idx);
                          setSpotlightPhotoView('exterior');
                        }}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                          spotlightVehicleIndex === idx
                            ? 'bg-amber-400 text-neutral-950'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        {v.category === 'sedan' ? 'Premio' : v.category === 'microbus' ? 'Noah' : 'Prado'}
                      </button>
                    ))}
                  </div>

                  {/* Photo View toggle */}
                  <div className="flex items-center gap-1 bg-black/60 p-1 rounded-lg border border-neutral-800 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setSpotlightPhotoView('exterior')}
                      className={`flex items-center gap-1 px-2 py-0.5 rounded ${
                        spotlightPhotoView === 'exterior' ? 'bg-white/20 text-white font-bold' : 'text-neutral-400'
                      }`}
                    >
                      <Camera className="w-3 h-3" />
                      <span>Exterior</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpotlightPhotoView('interior')}
                      className={`flex items-center gap-1 px-2 py-0.5 rounded ${
                        spotlightPhotoView === 'interior' ? 'bg-white/20 text-white font-bold' : 'text-neutral-400'
                      }`}
                    >
                      <Eye className="w-3 h-3" />
                      <span>Cabin</span>
                    </button>
                  </div>
                </div>

                {/* Main Vehicle Image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800">
                  <img
                    src={
                      spotlightPhotoView === 'interior' && spotlightVehicle.interiorImage
                        ? spotlightVehicle.interiorImage
                        : spotlightVehicle.image
                    }
                    alt={spotlightVehicle.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-amber-400 text-xs font-semibold border border-white/10">
                      {spotlightVehicle.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white drop-shadow">
                        {spotlightVehicle.name}
                      </h3>
                      <p className="text-xs text-neutral-300">
                        {spotlightVehicle.passengers} Seats · {spotlightVehicle.luggage} Bags · {spotlightVehicle.acType}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-neutral-400 uppercase block">Daily Charter</span>
                      <span className="text-base font-extrabold text-amber-400 font-mono">
                        {formatPrice(spotlightVehicle.pricePerDayBDT)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Verified Chauffeur Bio Badge */}
                <div className="mt-4 p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center font-bold text-amber-400 text-sm">
                      MR
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>Chauffeur: Md. Rafiqul Islam</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        12+ Yrs Highway · English & Bengali · 4.95★
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onQuickBookVehicle(spotlightVehicle.id)}
                    className="btn-uiverse px-3.5 py-1.5 rounded-xl font-bold text-xs whitespace-nowrap active:scale-95 transition-all"
                  >
                    <span>Select</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Buttons on Bottom Right (As shown in user's reference image!) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2.5">
        {/* Chat Popup if toggled */}
        {chatOpen && (
          <div className="mb-2 w-72 rounded-2xl bg-neutral-900 border border-neutral-700 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white">Garibook 24/7 Desk</span>
              </div>
              <button 
                type="button"
                onClick={() => setChatOpen(false)}
                className="text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
              Need immediate car dispatch or airport pickup assistance? Our duty supervisors are ready.
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="tel:+8809613822822"
                className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call 09613-822822</span>
              </a>
              <a
                href="https://wa.me/8801711000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Dispatch</span>
              </a>
            </div>
          </div>
        )}

        {/* Scroll To Top Button (As in user's image) */}
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 hover:text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Live Chat Bubble Button (As in user's image) */}
        <button
          type="button"
          onClick={() => setChatOpen(!chatOpen)}
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ring-4 ring-blue-600/30"
          title="Open 24/7 Operations Desk"
          aria-label="Open 24/7 Operations Desk"
        >
          {chatOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </section>
  );
};

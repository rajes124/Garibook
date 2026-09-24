import React, { useState } from 'react';
import { Search, CheckCircle, Shield, Car, Smartphone, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Search & Tailor Your Journey',
      short: 'Select pickup, destination & vehicle',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
      description: 'Choose your desired service type—hourly city rental, airport pickup with flight delay tracking, or one-way intercity transit. Select from premium sedans, 7-seater MPVs, or executive HiAce VIP vans.',
      features: ['All 64 districts covered', 'Airport terminal pickup details', 'Luggage & seating match'],
      icon: Search,
      highlight: 'Instant fare quotation with zero hidden markups.'
    },
    {
      num: '02',
      title: 'Lock Upfront Fare & Match Chauffeur',
      short: 'Guaranteed booking & verified driver assigned',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
      description: 'Confirm with your preferred payment method (Cash to driver, bKash/Nagad, or corporate invoice). Our automated dispatch assigns a vetted, background-verified chauffeur with license plate and phone number.',
      features: ['Real-time SMS & WhatsApp alerts', 'Direct chauffeur contact link', 'Vehicle sanitization check'],
      icon: CheckCircle,
      highlight: 'Driver details and live GPS link dispatched 2 hours before pickup.'
    },
    {
      num: '03',
      title: 'Board & Glide in Pure Comfort',
      short: 'Chilled AC cabin & safe highway travel',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80',
      description: 'Your uniformed driver arrives 15 minutes ahead of schedule, greets you warmly, assists with heavy baggage, and escorts you into a pristine, climate-controlled cabin.',
      features: ['100% Guaranteed chilled air conditioning', 'Complimentary bottled water', 'Real-time operations center monitoring'],
      icon: Car,
      highlight: 'Relax, make business calls, or nap while your chauffeur navigates the traffic.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-neutral-900/40 border-b border-neutral-800/80 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="700" className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seamless Three-Step Experience</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How booking with Garibook works.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Effortless reservation in less than 60 seconds. No bargaining with roadside operators or wondering if your driver will show up.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                data-aos-duration="700"
                onClick={() => setActiveStep(idx)}
                className={`rounded-2xl cursor-pointer transition-all duration-500 relative border flex flex-col justify-between overflow-hidden group shadow-lg ${
                  isSelected
                    ? 'bg-neutral-900 border-amber-400/80 shadow-2xl shadow-amber-400/10 ring-1 ring-amber-400/30'
                    : 'bg-neutral-900/70 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                }`}
              >
                <div>
                  {/* Step Image Cover */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-neutral-950">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-black/60" />

                    {/* Step Number & Icon Badges */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                      <span className="text-xl font-mono font-extrabold text-amber-400 bg-black/75 px-3 py-1 rounded-xl backdrop-blur-md border border-white/10 shadow-md">
                        {step.num}
                      </span>

                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-md border transition-all ${
                        isSelected 
                          ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400 shadow-md shadow-amber-400/30' 
                          : 'bg-black/75 text-neutral-300 border-white/10 group-hover:text-amber-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3.5 right-3.5">
                      <div className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wide">
                        {step.short}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-neutral-800">
                      {step.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-3 border-t border-neutral-800/80 bg-neutral-950/50">
                  <div className="text-[11px] font-semibold text-amber-400 mb-1 uppercase tracking-wider">
                    Garibook Assurance:
                  </div>
                  <div className="text-xs text-neutral-300 italic">
                    "{step.highlight}"
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Corporate Fleet CTA */}
        <div 
          data-aos="zoom-in-up"
          data-aos-duration="700"
          className="mt-14 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-amber-950/40 border border-neutral-800 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Corporate & Long-Term Leases</span>
            <h4 className="text-lg sm:text-2xl font-bold text-white mt-1">
              Need monthly company transportation or dedicated event fleets?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl leading-relaxed">
              Custom GST-invoiced monthly car contracts, fuel billing, and backup vehicles available with 24/7 dedicated account manager support.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+8809613822822"
              className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors whitespace-nowrap border border-neutral-700/60"
            >
              Talk to Fleet Desk
            </a>
            <a
              href="#fleet"
              className="btn-uiverse px-5 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95"
            >
              <span>Browse All Cars</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

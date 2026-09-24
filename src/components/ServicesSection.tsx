import React from 'react';
import { 
  Plane, 
  Clock, 
  MapPin, 
  HeartHandshake, 
  Ship, 
  Building2, 
  ArrowRight, 
  Check, 
  ShieldCheck,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { ServiceType } from '../types';

interface Props {
  currency: 'BDT' | 'USD';
  onSelectServiceType: (service: ServiceType) => void;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<Props> = ({ currency, onSelectServiceType, onOpenBooking }) => {
  const formatPrice = (amountBDT: number) => {
    if (currency === 'USD') {
      return `$${(amountBDT / 122).toFixed(0)}`;
    }
    return `৳${amountBDT.toLocaleString('en-IN')}`;
  };

  const services = [
    {
      type: 'airport' as ServiceType,
      title: 'Airport Transfers (DAC / CGP)',
      tag: 'Flight Synchronized',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      price: 1650,
      period: 'Starting fare',
      icon: Plane,
      description: 'Punctual meet & greet at Hazrat Shahjalal Airport Terminal 1, 2, and 3. Complimentary flight delay tracking and 60 minutes free luggage wait time.',
      benefits: ['Nameboard meet at arrival exit', 'Toll-free Elevated Expressway ride', 'No midnight surge surcharges']
    },
    {
      type: 'intercity' as ServiceType,
      title: 'Intercity One-Way & Round Trip',
      tag: 'All 64 Districts',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
      price: 7500,
      period: 'Starting fare',
      icon: MapPin,
      description: 'Direct highway journeys from Dhaka to Chittagong, Sylhet, Cox’s Bazar, Rajshahi, and Khulna via Bangladesh’s high-speed expressways and bridges.',
      benefits: ['Certified national highway driver', 'Pre-calculated fuel & bridge tolls', 'Optional same-day round trip discount']
    },
    {
      type: 'hourly' as ServiceType,
      title: 'City Rental (4h / 8h / 12h Packages)',
      tag: 'Flexible Day Charter',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80',
      price: 2400,
      period: '4-Hour Package',
      icon: Clock,
      description: 'Retain a dedicated vehicle and chauffeur for business meetings across Gulshan, Motijheel, and Uttara, or family shopping excursions.',
      benefits: ['Chauffeur stays on standby', 'Unlimited stops within city limits', 'Extendable by the hour anytime']
    },
    {
      type: 'multiday' as ServiceType,
      title: 'Weddings & VIP Protocol Entourage',
      tag: 'Special Occasions',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      price: 18500,
      period: 'Luxury SUV / Prado',
      icon: HeartHandshake,
      description: 'Decorated luxury vehicles, Land Cruiser Prados, and matching HiAce convoys for family weddings, dignitary visits, and international delegates.',
      benefits: ['Uniformed white-glove chauffeurs', 'Polished & decorated exterior ready', 'Dedicated fleet coordinator']
    },
    {
      type: 'bus_launch' as ServiceType,
      title: 'VIP River Launch & Express Bus',
      tag: 'Water & Highway Transit',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      price: 1800,
      period: 'VIP Cabin starting',
      icon: Ship,
      description: 'Book luxury VIP air-conditioned river launch cabins (Dhaka ↔ Barisal / Bhola) and premium sleeper/business coach highway tickets.',
      benefits: ['Direct berth & cabin reservation', 'Instant digital e-ticket via SMS', 'Safe river port boarding assistance']
    },
    {
      type: 'hourly' as ServiceType,
      title: 'Corporate Long-Term Fleet Leasing',
      tag: 'B2B Enterprise Contracts',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      price: 65000,
      period: 'Monthly starting',
      icon: Building2,
      description: 'Outsource company transportation with custom monthly billing, dedicated drivers, comprehensive vehicle maintenance, and immediate backup units.',
      benefits: ['Full GST & Tax compliant invoices', 'Replacement car within 2 hours', 'Dedicated 24/7 key account executive']
    }
  ];

  return (
    <section id="services" className="py-24 bg-neutral-900/50 border-b border-neutral-800/80 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div data-aos="fade-up" data-aos-duration="700">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Mobility Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              One platform for every way Bangladesh travels.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
              Replacing informal negotiations with institutional reliability, transparent rates, and guaranteed clean vehicles across all major districts.
            </p>
          </div>

          <div 
            data-aos="fade-left" 
            data-aos-duration="700" 
            className="flex items-center gap-2.5 text-xs text-neutral-300 p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Guaranteed Chilled AC & Sanitized Interiors Across All Services</span>
          </div>
        </div>

        {/* Services Grid with Next-Level Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 150}
                data-aos-duration="700"
                className="rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-400/40 transition-all duration-500 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10 group backdrop-blur-sm"
              >
                <div>
                  {/* Service Visual Photo Header */}
                  <div className="relative aspect-[16/8] overflow-hidden bg-neutral-950">
                    <img 
                      src={svc.image} 
                      alt={svc.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-black/50" />

                    {/* Overlay Icon & Tag */}
                    <div className="absolute top-3 inset-x-3.5 flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-center text-amber-400 shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>

                      <span className="text-[11px] font-semibold text-neutral-200 bg-black/75 border border-white/10 px-2.5 py-1 rounded-lg backdrop-blur-md">
                        {svc.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                      {svc.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                      {svc.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-neutral-800/70">
                      {svc.benefits.map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="p-5 sm:p-6 pt-3 border-t border-neutral-800/90 bg-neutral-950/50 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-neutral-500 block uppercase font-medium">{svc.period}</span>
                    <span className="text-lg sm:text-xl font-extrabold text-white font-mono">
                      {formatPrice(svc.price)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onSelectServiceType(svc.type);
                      onOpenBooking();
                    }}
                    className="btn-uiverse py-2 px-5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

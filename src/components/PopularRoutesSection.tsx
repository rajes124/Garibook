import React from 'react';
import { MapPin, Navigation, Clock, ArrowRight, ShieldCheck, Sparkles, Compass, Milestone, Car, Tag } from 'lucide-react';
import { PopularRoute } from '../types';
import { POPULAR_ROUTES } from '../data/mockData';

interface Props {
  currency: 'BDT' | 'USD';
  onSelectRoute: (route: PopularRoute) => void;
}

export const PopularRoutesSection: React.FC<Props> = ({ currency, onSelectRoute }) => {
  const formatPrice = (amountBDT: number) => {
    if (currency === 'USD') {
      return `$${(amountBDT / 122).toFixed(0)}`;
    }
    return `৳${amountBDT.toLocaleString('en-IN')}`;
  };

  return (
    <section id="routes" className="py-24 bg-neutral-950 border-b border-neutral-800/80 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div data-aos="fade-up" data-aos-duration="700">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>National Highway Corridors</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Popular intercity travel routes.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
              Transparent upfront fixed fares. Travel across the nation with seasoned highway chauffeurs expert in the Padma Bridge Expressway, Chittagong Highway, and regional routes.
            </p>
          </div>

          <div 
            data-aos="fade-left"
            data-aos-duration="700"
            className="text-xs text-neutral-300 flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>FASTag Tolls & Driver Meal Allowance Itemized Upfront</span>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {POPULAR_ROUTES.map((route, idx) => (
            <div
              key={route.id}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 150}
              data-aos-duration="700"
              className="rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-400/40 transition-all duration-500 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10 group backdrop-blur-sm"
            >
              <div>
                {/* Destination Real Photography Cover */}
                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-950">
                  <img 
                    src={route.image} 
                    alt={`${route.from} to ${route.to}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-black/40" />

                  {/* Top tags */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-amber-400 bg-black/75 border border-amber-400/30 px-2.5 py-1 rounded-lg backdrop-blur-md">
                      {route.popularFor}
                    </span>

                    <div className="flex items-center gap-1 text-[11px] text-neutral-200 bg-black/75 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10 font-mono">
                      <Navigation className="w-3 h-3 text-amber-400" />
                      <span>{route.distanceKm} km</span>
                    </div>
                  </div>

                  {/* Destination Overlay Badge at bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wide">Destination Corridor</div>
                    <div className="text-base font-bold text-white drop-shadow truncate">
                      {route.to}
                    </div>
                  </div>
                </div>

                {/* Cities Flow and Details */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Cities Flow */}
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center shrink-0">
                        <MapPin className="w-3 h-3 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-[10px] text-neutral-500 uppercase font-semibold">Origin Pickup</div>
                        <div className="text-xs sm:text-sm font-semibold text-neutral-200">{route.from}</div>
                      </div>
                    </div>

                    <div className="pl-2.5 border-l-2 border-dashed border-neutral-700 ml-2.5 h-3" />

                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-emerald-400/10 border border-emerald-400/40 flex items-center justify-center shrink-0">
                        <MapPin className="w-3 h-3 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-[10px] text-neutral-500 uppercase font-semibold">Dropoff Arrival</div>
                        <div className="text-xs sm:text-sm font-semibold text-white">{route.to}</div>
                      </div>
                    </div>
                  </div>

                  {/* Highway & Travel Time Info */}
                  <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80 space-y-1.5 text-xs text-neutral-400">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Estimated Transit:</span>
                      </div>
                      <strong className="text-neutral-100 font-mono">{route.durationHours}</strong>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 truncate pt-1 border-t border-neutral-800/60">
                      <Milestone className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                      <span>Corridor: <span className="text-neutral-300 font-medium">{route.highways}</span></span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                      <Car className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Recommended: <span className="text-amber-300 font-medium">{route.recommendedVehicle}</span></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Price & Action */}
              <div className="p-5 sm:p-6 pt-3 border-t border-neutral-800/90 bg-neutral-950/50 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-neutral-500 block uppercase font-medium">Fixed Fare from</span>
                  <span className="text-lg sm:text-xl font-extrabold text-white font-mono">
                    {formatPrice(route.startingPriceBDT)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectRoute(route)}
                  className="btn-uiverse py-2.5 px-4 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all duration-300 cursor-pointer active:scale-95"
                >
                  <span>Select Route</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

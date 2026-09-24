import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Users, 
  Briefcase, 
  Wind, 
  Star, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Info, 
  X,
  Gauge,
  Sparkles,
  Camera,
  CheckCircle2,
  Clock,
  Car,
  Bus,
  Shield,
  LayoutGrid,
  Eye,
  Fuel
} from 'lucide-react';
import { Vehicle, VehicleCategory } from '../types';
import { VEHICLES } from '../data/mockData';

interface Props {
  currency: 'BDT' | 'USD';
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const VehicleFleetSection: React.FC<Props> = ({ currency, onSelectVehicle }) => {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>('all');
  const [specModalVehicle, setSpecModalVehicle] = useState<Vehicle | null>(null);
  const [activePhotoView, setActivePhotoView] = useState<{ [vehicleId: string]: 'exterior' | 'interior' }>({});
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Currency Formatter
  const formatPrice = (amountBDT: number) => {
    if (currency === 'USD') {
      return `$${(amountBDT / 122).toFixed(0)}`;
    }
    return `৳${amountBDT.toLocaleString('en-IN')}`;
  };

  const filteredVehicles = selectedCategory === 'all'
    ? VEHICLES
    : VEHICLES.filter((v) => {
        if (selectedCategory === 'vip_van') return v.category === 'vip_van';
        if (selectedCategory === 'microbus') return v.category === 'microbus';
        if (selectedCategory === 'suv') return v.category === 'suv';
        if (selectedCategory === 'sedan') return v.category === 'sedan';
        return true;
      });

  // Toggle between exterior and cabin photography for a vehicle
  const togglePhotoView = (vehicleId: string, view: 'exterior' | 'interior') => {
    setActivePhotoView((prev) => ({
      ...prev,
      [vehicleId]: view
    }));
  };

  // GSAP Animation: Smooth staggered cards transition when filter category changes
  useEffect(() => {
    if (!cardsContainerRef.current) return;
    const cards = cardsContainerRef.current.querySelectorAll('.vehicle-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 25, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
        clearProps: 'transform'
      }
    );
  }, [selectedCategory]);

  return (
    <section id="fleet" className="py-24 bg-neutral-950 border-b border-neutral-800/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div data-aos="fade-up" data-aos-duration="700">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chauffeur-Driven Executive Fleet</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Pristine vehicles for every journey.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
              From flagship business sedans for city meetings to 14-seater VIP high-roof vans for group tours. Every car is deep-cleaned, dual-AC tested, and driven by a verified highway chauffeur.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div 
            data-aos="fade-left"
            data-aos-duration="700"
            className="flex items-center gap-1.5 p-1.5 bg-neutral-900/90 border border-neutral-800 rounded-2xl overflow-x-auto no-scrollbar backdrop-blur-md"
          >
            {[
              { id: 'all', label: 'All Fleet', icon: LayoutGrid },
              { id: 'sedan', label: 'Sedans', icon: Car },
              { id: 'microbus', label: 'MPV / Noah', icon: Users },
              { id: 'vip_van', label: 'VIP Commuters', icon: Bus },
              { id: 'suv', label: 'Luxury SUVs', icon: Shield },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as VehicleCategory)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-400/25 scale-[1.02]'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div 
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {filteredVehicles.map((vehicle) => {
            const currentView = activePhotoView[vehicle.id] || 'exterior';
            const displayImage = currentView === 'interior' && vehicle.interiorImage 
              ? vehicle.interiorImage 
              : vehicle.image;

            return (
              <div
                key={vehicle.id}
                className="vehicle-card group rounded-2xl bg-neutral-900/80 border border-neutral-800/90 hover:border-amber-400/40 transition-all duration-500 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10 backdrop-blur-sm"
              >
                <div>
                  {/* Real Photography Header with Ambient Overlays */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                    <img 
                      src={displayImage} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Gradient shading */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-black/40" />

                    {/* Top Row Badges */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-neutral-200">
                        {vehicle.tag}
                      </span>

                      {vehicle.badge && (
                        <span className="px-2.5 py-1 rounded-lg bg-amber-400/90 backdrop-blur-md text-[11px] font-bold text-neutral-950 shadow-md shadow-amber-400/30">
                          {vehicle.badge}
                        </span>
                      )}
                    </div>

                    {/* Bottom overlay with Photo Switcher & Rating */}
                    <div className="absolute bottom-3 inset-x-3.5 flex items-center justify-between">
                      {/* Photo switcher (Exterior vs Cabin) */}
                      {vehicle.interiorImage && (
                        <div className="flex items-center gap-1 p-0.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[10px]">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              togglePhotoView(vehicle.id, 'exterior');
                            }}
                            className={`flex items-center gap-1 px-2 py-0.5 rounded-md font-medium transition-all ${
                              currentView === 'exterior'
                                ? 'bg-amber-400 text-neutral-950 font-bold'
                                : 'text-neutral-400 hover:text-white'
                            }`}
                          >
                            <Camera className="w-2.5 h-2.5" />
                            <span>Exterior</span>
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              togglePhotoView(vehicle.id, 'interior');
                            }}
                            className={`flex items-center gap-1 px-2 py-0.5 rounded-md font-medium transition-all ${
                              currentView === 'interior'
                                ? 'bg-amber-400 text-neutral-950 font-bold'
                                : 'text-neutral-400 hover:text-white'
                            }`}
                          >
                            <Eye className="w-2.5 h-2.5" />
                            <span>Cabin</span>
                          </button>
                        </div>
                      )}

                      {/* Live Rating pill */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono font-semibold text-amber-400 ml-auto">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{vehicle.rating}</span>
                        <span className="text-neutral-400 font-sans text-[11px]">({vehicle.tripsCompleted})</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    {/* Title & Model */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                          {vehicle.name}
                        </h3>
                        <p className="text-xs text-neutral-400 mt-1">
                          {vehicle.model}
                        </p>
                      </div>
                    </div>

                    {/* Modern Glass Spec Pills Grid */}
                    <div className="mt-4 grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 text-xs text-neutral-300">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-400" />
                        <span className="truncate">{vehicle.passengers} Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                        <span className="truncate">{vehicle.luggage} Bags</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Wind className="w-3.5 h-3.5 text-amber-400" />
                        <span className="truncate">{vehicle.acType}</span>
                      </div>
                    </div>

                    {/* Features checklist */}
                    <div className="mt-4 space-y-1.5">
                      {vehicle.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Guarantee note */}
                    <div className="mt-3.5 pt-3 border-t border-neutral-800/60 flex items-center gap-2 text-[11px] text-neutral-400">
                      <Fuel className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{vehicle.fuelPolicy}</span>
                    </div>
                  </div>
                </div>

                {/* Pricing & Booking Footer */}
                <div className="p-5 sm:p-6 pt-3 border-t border-neutral-800/90 bg-neutral-950/50">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[11px] text-neutral-500 block uppercase font-medium">Daily Charter</span>
                      <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight">
                        {formatPrice(vehicle.pricePerDayBDT)}
                        <span className="text-xs font-normal text-neutral-400 ml-1">/ day</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] text-neutral-500 block uppercase font-medium">City Hourly</span>
                      <div className="text-sm font-semibold text-amber-400 font-mono">
                        {formatPrice(vehicle.pricePerHourBDT)}/hr
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSpecModalVehicle(vehicle)}
                      className="py-2.5 px-3 rounded-xl bg-neutral-800/90 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-neutral-700/60 hover:border-neutral-600"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Specifications</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectVehicle(vehicle)}
                      className="btn-uiverse py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Reserve Now</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Vehicle Specification Modal with Rich Imagery */}
      {specModalVehicle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
          <div className="relative w-full max-w-xl rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden my-6">
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] bg-neutral-950">
              <img 
                src={specModalVehicle.image} 
                alt={specModalVehicle.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/60" />
              
              <button
                onClick={() => setSpecModalVehicle(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-black/70 border border-white/10 text-neutral-300 hover:text-white hover:bg-black transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2.5 py-1 rounded-md bg-amber-400 text-neutral-950 text-xs font-bold uppercase tracking-wider">
                  {specModalVehicle.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                  {specModalVehicle.name}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {specModalVehicle.description}
              </p>

              {/* Cabin interior preview if available */}
              {specModalVehicle.interiorImage && (
                <div className="mt-4 p-3 rounded-xl bg-neutral-950/70 border border-neutral-800 flex items-center gap-3">
                  <img 
                    src={specModalVehicle.interiorImage} 
                    alt="Interior Cabin" 
                    className="w-16 h-12 rounded-lg object-cover"
                  />
                  <div className="text-xs">
                    <div className="font-semibold text-white">Guaranteed Luxury Interior</div>
                    <div className="text-neutral-400">Deep-sanitized leatherette/captain armchairs with dual climate control</div>
                  </div>
                </div>
              )}

              {/* Core Specifications */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="text-neutral-500 mb-1">Seating Capacity</div>
                  <div className="text-sm font-bold text-white">{specModalVehicle.passengers} Passengers</div>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="text-neutral-500 mb-1">Luggage Allowance</div>
                  <div className="text-sm font-bold text-white">{specModalVehicle.luggage} Heavy Suitcases</div>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="text-neutral-500 mb-1">Air Conditioning</div>
                  <div className="text-sm font-bold text-white">{specModalVehicle.acType} Guaranteed</div>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="text-neutral-500 mb-1">Highway Certified Chauffeur</div>
                  <div className="text-sm font-bold text-emerald-400">Verified & Uniformed</div>
                </div>
              </div>

              {/* Complete Inclusions */}
              <div className="mt-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="text-xs font-semibold text-neutral-200">Included In Every Garibook Charter:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {specModalVehicle.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Booking Footer */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-neutral-800">
                <div>
                  <div className="text-xs text-neutral-500">Day Charter Rate</div>
                  <div className="text-xl font-extrabold text-white font-mono">
                    {formatPrice(specModalVehicle.pricePerDayBDT)}
                    <span className="text-xs font-normal text-neutral-400 ml-1">/ day</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const v = specModalVehicle;
                    setSpecModalVehicle(null);
                    onSelectVehicle(v);
                  }}
                  className="btn-uiverse py-2.5 px-6 rounded-xl text-sm font-bold active:scale-95 transition-all cursor-pointer"
                >
                  <span>Proceed to Reserve</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

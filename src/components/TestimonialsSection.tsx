import React, { useState } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  ShieldCheck, 
  CheckCircle,
  HeartHandshake,
  Clock,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-neutral-950 border-b border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div data-aos="fade-up" data-aos-duration="700">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Passenger Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted by corporate leaders, families & international travelers.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl">
              Real feedback from travelers who rely on Garibook for daily executive meetings, airport pickups, and unforgettable family holidays.
            </p>
          </div>

          {/* Slider Navigation Buttons */}
          <div data-aos="fade-left" data-aos-duration="700" className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              type="button"
              className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Review & Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Showcase Review Card */}
          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:col-span-8 rounded-2xl bg-neutral-900 border border-neutral-800 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-6 right-6 opacity-10 text-amber-400">
              <Quote className="w-24 h-24" />
            </div>

            <div>
              {/* Rating stars & verified badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-mono font-bold text-amber-400 ml-2">5.0 / 5.0</span>
                </div>

                <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Trip: {active.tripType}
                </span>
              </div>

              {/* Quote */}
              <p className="text-base sm:text-lg lg:text-xl text-neutral-200 font-normal leading-relaxed relative z-10 italic">
                "{active.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                {active.avatarImage ? (
                  <img
                    src={active.avatarImage}
                    alt={active.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-400/40 shadow-md shrink-0"
                  />
                ) : (
                  <div className={`w-12 h-12 rounded-full ${active.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md shrink-0`}>
                    {active.avatarInitials}
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-bold text-white">{active.name}</h4>
                  <div className="text-xs text-neutral-400">{active.role}</div>
                  <div className="text-[11px] text-neutral-500">{active.companyOrCity} · {active.date}</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Garibook Verified Passenger</span>
              </div>
            </div>
          </div>

          {/* Quick Stats & Trust Anchor */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div 
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="700"
              className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Customer Satisfaction
                </div>
              </div>
              <div className="text-4xl font-extrabold text-white font-mono">
                98.8%
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Based on post-trip ratings across 150,000+ completed chauffeur trips in Bangladesh.
              </p>
            </div>

            <div 
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="700"
              className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Punctuality Rate
                </div>
              </div>
              <div className="text-4xl font-extrabold text-amber-400 font-mono">
                99.4%
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Chauffeurs arrive at least 15 minutes before the scheduled pickup time.
              </p>
            </div>

            <div 
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="700"
              className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-neutral-900 border border-amber-500/30 p-6"
            >
              <div className="flex items-center gap-2 mb-1">
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <div className="text-xs font-bold text-amber-300">
                  24/7 Operations Support
                </div>
              </div>
              <p className="text-xs text-neutral-300 mt-1">
                Speak directly with an operations supervisor anytime at <strong className="text-white font-mono">09613-822822</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

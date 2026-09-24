

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { VehicleFleetSection } from './components/VehicleFleetSection';
import { PopularRoutesSection } from './components/PopularRoutesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AssignmentInfoModal } from './components/AssignmentInfoModal';
import { Vehicle, PopularRoute, BookingFormData, ServiceType } from './types';
import { VEHICLES } from './data/mockData';
import { PhoneCall, Car, Check } from 'lucide-react';

export default function App() {
  // Currency state: BDT (৳) vs USD ($)
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<PopularRoute | null>(null);
  const [searchFormData, setSearchFormData] = useState<BookingFormData | null>(null);

  // Assignment / GSAP Info Modal
  const [isAssignmentInfoOpen, setIsAssignmentInfoOpen] = useState(false);

  // Notification Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize AOS (Animate On Scroll) for all sections
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
      mirror: false,
    });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'BDT' ? 'USD' : 'BDT'));
    showToast(currency === 'BDT' ? 'Switched to USD ($) pricing' : 'Switched to BDT (৳) pricing');
  };

  const handleSearch = (formData: BookingFormData) => {
    setSearchFormData(formData);
    setSelectedRoute(null);
    showToast(`Found available fleet for ${formData.tripType === 'one-way' ? 'One-Way' : 'Round-Trip'} trip`);
  };

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setSelectedRoute(null);
    setIsBookingOpen(true);
  };

  const handleSelectRoute = (route: PopularRoute) => {
    setSelectedRoute(route);
    // Find matching vehicle or default to sedan
    const matchedVehicle = VEHICLES.find((v) => v.category === 'sedan') || VEHICLES[0];
    setSelectedVehicle(matchedVehicle);
    setIsBookingOpen(true);
  };

  const handleSelectServiceType = (serviceType: ServiceType) => {
    setSelectedRoute(null);
    setSelectedVehicle(VEHICLES[0]);
    setIsBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedRoute(null);
    if (!selectedVehicle) {
      setSelectedVehicle(VEHICLES[0]);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-neutral-900 border border-amber-500/50 text-neutral-200 px-4 py-2.5 rounded-xl shadow-2xl shadow-black/80 text-xs flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <Check className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Primary Sticky Top Bar Contract */}
      <Navbar
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        onOpenBooking={handleOpenGeneralBooking}
        onOpenAssignmentInfo={() => setIsAssignmentInfoOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with GSAP Entrance Animation & Search Widget */}
        <HeroSection
          currency={currency}
          onSearch={handleSearch}
          onQuickBookVehicle={(id) => {
            const v = VEHICLES.find((item) => item.id === id);
            if (v) handleSelectVehicle(v);
          }}
        />

        {/* Mobility Services Breakdown */}
        <ServicesSection
          currency={currency}
          onSelectServiceType={handleSelectServiceType}
          onOpenBooking={handleOpenGeneralBooking}
        />

        {/* Vehicle Fleet Showcase with GSAP Staggered Filter Animation */}
        <VehicleFleetSection
          currency={currency}
          onSelectVehicle={handleSelectVehicle}
        />

        {/* Popular Intercity Routes Showcase with Instant Bookings */}
        <PopularRoutesSection
          currency={currency}
          onSelectRoute={handleSelectRoute}
        />

        {/* Features & Safety Standards with GSAP Scroll Reveal */}
        <FeaturesSection />

        {/* 3-Step How It Works Guide */}
        <HowItWorksSection />

        {/* Attributable Passenger Testimonials & Reviews */}
        <TestimonialsSection />
      </main>

      {/* Comprehensive Modern Footer */}
      <Footer onOpenBooking={handleOpenGeneralBooking} />

      {/* Mobile Sticky Quick-Action Bar (Capped <= 15% viewport height) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href="tel:+8809613822822"
          className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2"
        >
          <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
          <span>09613-822822</span>
        </a>

        <button
          onClick={handleOpenGeneralBooking}
          type="button"
          className="flex-1 py-2.5 px-3 rounded-xl bg-amber-400 text-neutral-950 text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-amber-400/20 active:scale-95"
        >
          <Car className="w-3.5 h-3.5" />
          <span>Instant Book</span>
        </button>
      </div>

      {/* Functional Chauffeur Booking & Reservation Drawer Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        currency={currency}
        initialVehicle={selectedVehicle}
        initialRoute={selectedRoute}
        initialFormData={searchFormData}
      />

      {/* Assignment Setup Instructions & GSAP Animation Architecture Modal */}
      <AssignmentInfoModal
        isOpen={isAssignmentInfoOpen}
        onClose={() => setIsAssignmentInfoOpen(false)}
      />
    </div>
  );
}

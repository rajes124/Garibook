import React, { useState } from 'react';
import { 
  X, 
  Car, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  Mail, 
  User, 
  CreditCard, 
  Sparkles,
  Plane,
  Download,
  AlertCircle,
  Smartphone,
  Banknote,
  Building2,
  Navigation,
  Users
} from 'lucide-react';
import { Vehicle, PopularRoute, BookingFormData, ConfirmedBooking } from '../types';
import { BANGLADESH_LOCATIONS, VEHICLES } from '../data/mockData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currency: 'BDT' | 'USD';
  initialVehicle?: Vehicle | null;
  initialRoute?: PopularRoute | null;
  initialFormData?: BookingFormData | null;
}

export const BookingModal: React.FC<Props> = ({
  isOpen,
  onClose,
  currency,
  initialVehicle,
  initialRoute,
  initialFormData
}) => {
  // Form state
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(() => {
    return initialVehicle || VEHICLES[0];
  });

  const [pickup, setPickup] = useState(() => {
    if (initialRoute) return initialRoute.from;
    if (initialFormData) return initialFormData.pickupLocation;
    return BANGLADESH_LOCATIONS[0];
  });

  const [dropoff, setDropoff] = useState(() => {
    if (initialRoute) return initialRoute.to;
    if (initialFormData) return initialFormData.dropoffLocation;
    return BANGLADESH_LOCATIONS[1];
  });

  const [date, setDate] = useState(() => {
    if (initialFormData) return initialFormData.pickupDate;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });

  const [time, setTime] = useState(() => {
    return initialFormData?.pickupTime || '09:00';
  });

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'bkash' | 'card' | 'corporate'>('bkash');
  const [specialNotes, setSpecialNotes] = useState('');
  
  // Confirmation state
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const formatPrice = (amountBDT: number) => {
    if (currency === 'USD') {
      return `$${(amountBDT / 122).toFixed(0)}`;
    }
    return `৳${amountBDT.toLocaleString('en-IN')}`;
  };

  // Calculate fare estimate
  const estimatedBDT = initialRoute 
    ? initialRoute.startingPriceBDT 
    : selectedVehicle.pricePerDayBDT;

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      setErrorMsg('Please enter your full name and valid contact number.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const bookingCode = `GB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedBooking({
        bookingId: bookingCode,
        serviceType: 'intercity',
        pickupLocation: pickup,
        dropoffLocation: dropoff,
        pickupDate: date,
        pickupTime: time,
        tripType: 'one-way',
        vehicle: selectedVehicle,
        totalEstimatedBDT: estimatedBDT,
        customerName,
        customerPhone,
        paymentMethod: paymentMethod === 'bkash' ? 'bKash Mobile Banking' : paymentMethod === 'cash' ? 'Cash to Chauffeur' : paymentMethod === 'card' ? 'Visa / Mastercard' : 'Corporate Account Billing',
        assignedDriver: {
          name: 'Mohammad Rafiqul Islam',
          phone: '+880 1819-334455',
          vehiclePlate: 'Dhaka Metro Ga 38-4921',
          rating: 4.96
        },
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 700);
  };

  const handleResetAndClose = () => {
    setConfirmedBooking(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-4 border-b border-neutral-800 flex items-center justify-between gap-3 bg-neutral-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-neutral-950 font-bold">
              <Car className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                {confirmedBooking ? 'Reservation Confirmed' : 'Chauffeur Booking & Reservation'}
              </h3>
              <div className="text-[11px] text-neutral-400">
                Garibook Premium Mobility Network
              </div>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confirmation Screen */}
        {confirmedBooking ? (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center py-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-2 animate-bounce" />
              <div className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">
                Booking Dispatched Successfully
              </div>
              <h4 className="text-2xl font-extrabold text-white mt-1 font-mono">
                {confirmedBooking.bookingId}
              </h4>
              <p className="text-xs text-neutral-300 mt-1 max-w-md mx-auto">
                A confirmation SMS & WhatsApp message has been dispatched to <strong className="text-white">{confirmedBooking.customerPhone}</strong>.
              </p>
            </div>

            {/* Assigned Driver Details */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-neutral-800/80">
                <span className="text-amber-400 font-semibold uppercase tracking-wider">Assigned Highway Chauffeur</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Police Verified
                </span>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                <div>
                  <div className="font-bold text-white text-sm">{confirmedBooking.assignedDriver.name}</div>
                  <div className="text-neutral-400">Vehicle Plate: <span className="font-mono text-neutral-200">{confirmedBooking.assignedDriver.vehiclePlate}</span></div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-amber-400">{confirmedBooking.assignedDriver.phone}</div>
                  <div className="text-neutral-500 text-[11px]">Rating: 4.96★ (920+ trips)</div>
                </div>
              </div>
            </div>

            {/* Trip Summary Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-500 block text-[11px]">Pickup Location</span>
                <strong className="text-neutral-200">{confirmedBooking.pickupLocation}</strong>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-500 block text-[11px]">Destination</span>
                <strong className="text-neutral-200">{confirmedBooking.dropoffLocation}</strong>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-500 block text-[11px]">Date & Time</span>
                <strong className="text-neutral-200">{confirmedBooking.pickupDate} at {confirmedBooking.pickupTime}</strong>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-500 block text-[11px]">Total Locked Fare</span>
                <strong className="text-amber-400 font-mono text-sm">{formatPrice(confirmedBooking.totalEstimatedBDT)}</strong>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-800">
              <button
                onClick={() => window.print()}
                type="button"
                className="px-4 py-2 rounded-xl bg-neutral-800 text-neutral-300 text-xs font-semibold hover:text-white flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print Receipt</span>
              </button>
              <button
                onClick={handleResetAndClose}
                type="button"
                className="px-6 py-2 rounded-xl bg-amber-400 text-neutral-950 text-xs font-bold hover:bg-amber-300"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleConfirmReservation} className="p-4 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Selected Vehicle or Route Snapshot */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {selectedVehicle.image && (
                  <img 
                    src={selectedVehicle.image} 
                    alt={selectedVehicle.name} 
                    className="w-16 h-12 rounded-lg object-cover border border-neutral-800 shrink-0"
                  />
                )}
                <div>
                  <span className="text-[11px] text-amber-400 font-semibold uppercase">Selected Vehicle Class</span>
                  <div className="text-sm font-bold text-white mt-0.5">{selectedVehicle.name}</div>
                  <div className="text-xs text-neutral-400">
                    {selectedVehicle.passengers} Seats · {selectedVehicle.luggage} Luggage · {selectedVehicle.acType}
                  </div>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[11px] text-neutral-500">Estimated Fare</span>
                <div className="text-lg font-extrabold text-white font-mono">
                  {formatPrice(estimatedBDT)}
                </div>
              </div>
            </div>

            {/* Change vehicle dropdown if desired */}
            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1">
                Change Vehicle Model
              </label>
              <select
                value={selectedVehicle.id}
                onChange={(e) => {
                  const found = VEHICLES.find((v) => v.id === e.target.value);
                  if (found) setSelectedVehicle(found);
                }}
                className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
              >
                {VEHICLES.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} ({formatPrice(v.pricePerDayBDT)}/day)
                  </option>
                ))}
              </select>
            </div>

            {/* Pickup & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-400 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pickup Location</span>
                </label>
                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Drop-off Destination</span>
                </label>
                <input
                  type="text"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-400 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Pickup Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Pickup Time</span>
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
            </div>

            {/* Passenger Contact Information */}
            <div className="pt-2 border-t border-neutral-800 space-y-3">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>Passenger Details</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Asif Mahmud"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="+880 1711-XXXXXX"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 mb-1 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Email (for receipt)</span>
                </label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="pt-2 border-t border-neutral-800 space-y-2">
              <label className="block text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                <span>Payment Option</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'bkash', label: 'bKash / Nagad', icon: Smartphone },
                  { id: 'cash', label: 'Cash to Driver', icon: Banknote },
                  { id: 'card', label: 'Card / POS', icon: CreditCard },
                  { id: 'corporate', label: 'Corporate Billing', icon: Building2 },
                ].map((m) => {
                  const Icon = m.icon;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id as any)}
                      className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border text-xs font-semibold transition-all ${
                        paymentMethod === m.id
                          ? 'bg-amber-400/10 border-amber-400 text-amber-400 shadow-sm'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{m.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
              <div className="text-xs text-neutral-400">
                Zero cancellation fee up to 6 hrs before trip
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-uiverse px-6 py-2.5 rounded-xl font-bold text-xs active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Confirming...</span>
                  </>
                ) : (
                  <span>Lock & Confirm Reservation</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

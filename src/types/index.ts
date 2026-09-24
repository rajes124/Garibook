export type ServiceType = 
  | 'hourly'
  | 'airport'
  | 'intercity'
  | 'multiday'
  | 'bus_launch';

export type VehicleCategory = 
  | 'all'
  | 'sedan'
  | 'microbus'
  | 'suv'
  | 'vip_van';

export interface Vehicle {
  id: string;
  name: string;
  model: string;
  category: 'sedan' | 'microbus' | 'suv' | 'vip_van';
  tag: string;
  image: string;
  interiorImage?: string;
  passengers: number;
  luggage: number;
  transmission: 'Automatic' | 'Manual';
  acType: 'Dual AC' | 'Climate Control' | 'Executive AC';
  pricePerHourBDT: number;
  pricePerDayBDT: number;
  pricePerKmBDT: number;
  features: string[];
  fuelPolicy: string;
  rating: number;
  tripsCompleted: number;
  badge?: string;
  accentColor: string;
  description: string;
}

export interface PopularRoute {
  id: string;
  from: string;
  to: string;
  image: string;
  distanceKm: number;
  durationHours: string;
  highways: string;
  startingPriceBDT: number;
  popularFor: string;
  recommendedVehicle: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrCity: string;
  rating: number;
  date: string;
  avatarInitials: string;
  avatarBg: string;
  avatarImage?: string;
  quote: string;
  tripType: string;
}

export interface BookingFormData {
  serviceType: ServiceType;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate?: string;
  tripType: 'one-way' | 'round-trip';
  passengers: number;
  vehicleCategory: VehicleCategory;
  flightNumber?: string;
  selectedVehicleId?: string;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  paymentMethod?: 'cash' | 'bkash' | 'card' | 'corporate';
  specialNotes?: string;
}

export interface ConfirmedBooking {
  bookingId: string;
  serviceType: ServiceType;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  pickupTime: string;
  tripType: 'one-way' | 'round-trip';
  vehicle: Vehicle;
  totalEstimatedBDT: number;
  customerName: string;
  customerPhone: string;
  paymentMethod: string;
  assignedDriver: {
    name: string;
    phone: string;
    vehiclePlate: string;
    rating: number;
  };
  createdAt: string;
}

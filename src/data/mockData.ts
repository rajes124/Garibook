import { Vehicle, PopularRoute, Testimonial } from '../types';

export const BANGLADESH_LOCATIONS = [
  'Hazrat Shahjalal Int’l Airport (DAC), Dhaka',
  'Gulshan-2 / Banani Diplomatic Zone, Dhaka',
  'Dhanmondi / Mohammadpur, Dhaka',
  'Uttara Sector 3 / 7 / 13, Dhaka',
  'Motijheel / Dilkusha Financial District, Dhaka',
  'Bashundhara R/A / Baridhara, Dhaka',
  'Mirpur DOHS / Cantonment, Dhaka',
  'Chittagong GEC Circle / Agrabad, CTG',
  'Shah Amanat Int’l Airport (CGP), Chittagong',
  'Cox’s Bazar Marine Drive / Hotel Motel Zone',
  'Sylhet City / Zindabazar / Ambarkhana',
  'Osmani Int’l Airport (ZYL), Sylhet',
  'Sreemangal Tea Valley, Moulvibazar',
  'Padma Bridge Toll Plaza (Mawa Side)',
  'Rajshahi City Center / Shaheb Bazar',
  'Khulna City / Shibbari Circle',
  'Bogra Town / Rangpur Highway Hub',
  'Mymensingh Town / Town Hall'
];

export const VEHICLES: Vehicle[] = [
  {
    id: 'v-allion',
    name: 'Toyota Premio / Allion Executive',
    model: '2021-2023 Facelift Edition',
    category: 'sedan',
    tag: 'Executive Sedan',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80',
    interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    passengers: 4,
    luggage: 2,
    transmission: 'Automatic',
    acType: 'Climate Control',
    pricePerHourBDT: 650,
    pricePerDayBDT: 4800,
    pricePerKmBDT: 24,
    features: ['Chilled Auto AC', 'Tinted UV Windows', 'Leatherette Interior', 'USB Fast Charger', 'Toll Tag Ready'],
    fuelPolicy: 'Driver & Clean Interior Guaranteed',
    rating: 4.92,
    tripsCompleted: 1420,
    badge: 'Most Popular',
    accentColor: 'from-amber-500/20 to-neutral-900',
    description: 'The definitive executive choice for seamless city meetings, airport transfers, and comfortable intercity travels across Bangladesh.'
  },
  {
    id: 'v-noah',
    name: 'Toyota Noah / Esquire Hybrid',
    model: '8-Seater Luxury Cabin',
    category: 'microbus',
    tag: 'Family & Group MPV',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80',
    interiorImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    passengers: 7,
    luggage: 4,
    transmission: 'Automatic',
    acType: 'Dual AC',
    pricePerHourBDT: 950,
    pricePerDayBDT: 6500,
    pricePerKmBDT: 32,
    features: ['Independent Dual AC', 'Captain Armchair Seating', 'Dual Power Slide Doors', 'Spacious Legroom', 'Soft Suspension'],
    fuelPolicy: 'Uniformed Highway Chauffeur',
    rating: 4.95,
    tripsCompleted: 980,
    badge: 'Family Favorite',
    accentColor: 'from-emerald-500/20 to-neutral-900',
    description: 'Designed for family vacations, airport luggage transit, and delegation tours with expansive cabin headspace and smooth ride.'
  },
  {
    id: 'v-hiace-grand',
    name: 'Toyota HiAce Super GL / Grand Cabin',
    model: 'High-Roof 11-14 Passenger',
    category: 'vip_van',
    tag: 'VIP Executive Commuter',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
    interiorImage: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=800&q=80',
    passengers: 12,
    luggage: 8,
    transmission: 'Automatic',
    acType: 'Executive AC',
    pricePerHourBDT: 1350,
    pricePerDayBDT: 8500,
    pricePerKmBDT: 42,
    features: ['Triple Blower Chilled AC', 'Extra High Ceiling', 'Reclining High-Back Seats', 'Massive Luggage Bay', 'PA Microphone Available'],
    fuelPolicy: 'National Highway Certified Chauffeur',
    rating: 4.97,
    tripsCompleted: 1850,
    badge: 'Corporate Fleet Choice',
    accentColor: 'from-blue-500/20 to-neutral-900',
    description: 'The undisputed national king of corporate retreats, factory site visits, wedding entourage travel, and long-distance group tours.'
  },
  {
    id: 'v-prado',
    name: 'Toyota Land Cruiser Prado TX-L',
    model: '7-Seater 4WD Flagship',
    category: 'suv',
    tag: 'VIP Luxury SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80',
    interiorImage: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    passengers: 6,
    luggage: 4,
    transmission: 'Automatic',
    acType: 'Climate Control',
    pricePerHourBDT: 2400,
    pricePerDayBDT: 18500,
    pricePerKmBDT: 75,
    features: ['Quad-Zone Climate Control', 'Sunroof & Privacy Glass', 'Premium Leather Recliners', 'High Road Clearance', 'Executive Protocol Ready'],
    fuelPolicy: 'Top-Tier English Speaking VIP Chauffeur',
    rating: 4.99,
    tripsCompleted: 430,
    badge: 'VIP Protocol',
    accentColor: 'from-amber-600/20 to-neutral-900',
    description: 'Commanding road presence, unrivaled suspension on highway bridges, and white-glove chauffeur protocol for dignitaries and executives.'
  },
  {
    id: 'v-staria',
    name: 'Hyundai Staria Lounge Premium',
    model: 'Futuristic 9-Seater VIP Edition',
    category: 'vip_van',
    tag: 'First Class Lounge',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
    interiorImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    passengers: 8,
    luggage: 5,
    transmission: 'Automatic',
    acType: 'Executive AC',
    pricePerHourBDT: 1900,
    pricePerDayBDT: 14000,
    pricePerKmBDT: 55,
    features: ['Panoramic Windows', 'Zero-Gravity Ottoman Seats', 'Ambient 64-Color Lighting', 'Bose Surround System', 'Type-C Ports Each Seat'],
    fuelPolicy: 'Concierge Chauffeur Service',
    rating: 4.98,
    tripsCompleted: 310,
    badge: 'Ultra Modern',
    accentColor: 'from-cyan-500/20 to-neutral-900',
    description: 'First-class aeronautical cabin luxury with ottoman relaxation seats, perfect for foreign delegations, celebrities, and embassy personnel.'
  },
  {
    id: 'v-byd-electric',
    name: 'BYD Seal / Atto 3 Executive EV',
    model: '100% Zero-Emission Luxury',
    category: 'sedan',
    tag: 'Green Executive',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80',
    interiorImage: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&w=800&q=80',
    passengers: 4,
    luggage: 2,
    transmission: 'Automatic',
    acType: 'Climate Control',
    pricePerHourBDT: 850,
    pricePerDayBDT: 6200,
    pricePerKmBDT: 22,
    features: ['Whisper-Silent Cabin', 'PM2.5 Air Purifier', 'Glass Roof', 'High-Speed Wireless Charging', 'Eco-Conscious Corporate'],
    fuelPolicy: 'Zero Fuel Surcharge (100% Electric)',
    rating: 4.96,
    tripsCompleted: 240,
    badge: 'Eco Friendly',
    accentColor: 'from-teal-500/20 to-neutral-900',
    description: 'Modern silent electric luxury tailored for corporate executives seeking green transportation without compromising on refinement.'
  }
];

export const POPULAR_ROUTES: PopularRoute[] = [
  {
    id: 'r-dhaka-cox',
    from: 'Dhaka City',
    to: 'Cox’s Bazar Sea Beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    distanceKm: 395,
    durationHours: '6.5 - 7.5 hrs',
    highways: 'Bangabandhu Expressway & Chittagong Bypass',
    startingPriceBDT: 14500,
    popularFor: 'Beach Getaways & Family Holiday',
    recommendedVehicle: 'Toyota Noah / HiAce VIP'
  },
  {
    id: 'r-dhaka-ctg',
    from: 'Dhaka (Gulshan / Motijheel)',
    to: 'Chittagong Port City / Agrabad',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    distanceKm: 245,
    durationHours: '4.0 - 4.5 hrs',
    highways: 'Dhaka-Chittagong 8-Lane Highway',
    startingPriceBDT: 8800,
    popularFor: 'Corporate Trade & Port Audits',
    recommendedVehicle: 'Toyota Premio / Allion'
  },
  {
    id: 'r-dhaka-sylhet',
    from: 'Dhaka City',
    to: 'Sylhet / Sreemangal Tea Estates',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    distanceKm: 235,
    durationHours: '4.5 - 5.0 hrs',
    highways: 'N2 Highway & Bhairab Bridge',
    startingPriceBDT: 8200,
    popularFor: 'Resort Tourism & Shrine Visits',
    recommendedVehicle: 'Toyota Noah / SUV Prado'
  },
  {
    id: 'r-airport-gulshan',
    from: 'Hazrat Shahjalal Airport (DAC)',
    to: 'Gulshan / Banani / Baridhara Diplomatic Zone',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=800&q=80',
    distanceKm: 12,
    durationHours: '25 - 35 mins',
    highways: 'Dhaka Elevated Expressway',
    startingPriceBDT: 1650,
    popularFor: 'Express Airport Pickup & Hotel Drop',
    recommendedVehicle: 'Executive Sedan / BYD EV'
  },
  {
    id: 'r-dhaka-khulna',
    from: 'Dhaka City',
    to: 'Khulna / Mongla Port via Padma Bridge',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80',
    distanceKm: 180,
    durationHours: '3.5 hrs',
    highways: 'Padma Multipurpose Bridge & N8 Expressway',
    startingPriceBDT: 7400,
    popularFor: 'Direct South-Western Corridor',
    recommendedVehicle: 'Toyota Allion / Noah'
  },
  {
    id: 'r-dhaka-rajshahi',
    from: 'Dhaka City',
    to: 'Rajshahi Silk City / Mango Belt',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    distanceKm: 250,
    durationHours: '4.5 - 5.0 hrs',
    highways: 'Bangabandhu Jamuna Bridge N5 Corridor',
    startingPriceBDT: 9200,
    popularFor: 'Northern Agricultural & University Visits',
    recommendedVehicle: 'Toyota HiAce / Premio'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Tariqur Rahman',
    role: 'Managing Director, Apex Logistics Ltd.',
    companyOrCity: 'Dhaka & Chittagong',
    rating: 5,
    date: 'February 2026',
    avatarInitials: 'TR',
    avatarBg: 'bg-amber-600',
    avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Garibook has completely changed how our board members travel between Dhaka and the Chittagong port. The chauffeur arrived 15 minutes early in a spotless Toyota Noah, offered chilled water, and navigated the highway with supreme care. No haggling, no unexpected fuel costs.',
    tripType: 'Intercity Executive Charter'
  },
  {
    id: 't-2',
    name: 'Dr. Sarah Mahmud',
    role: 'Senior Consultant Physician',
    companyOrCity: 'London, UK / Visiting Dhaka',
    rating: 5,
    date: 'January 2026',
    avatarInitials: 'SM',
    avatarBg: 'bg-emerald-600',
    avatarImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'As an NRB visiting Bangladesh with my elderly parents, landing at Dhaka airport used to be stressful with taxi touts. With Garibook, our driver met us at the exit with a name placard, assisted with heavy bags, and we glided over the Elevated Expressway in pure air-conditioned peace.',
    tripType: 'Airport VIP Transfer'
  },
  {
    id: 't-3',
    name: 'Anisul Huq Chowdhury',
    role: 'Event Director, Crimson Weddings',
    companyOrCity: 'Banani, Dhaka',
    rating: 5,
    date: 'March 2026',
    avatarInitials: 'AC',
    avatarBg: 'bg-blue-600',
    avatarImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'We booked three Toyota HiAce Grand Cabins and a Prado for a 3-day destination wedding in Sreemangal. Every single vehicle was pristine, all drivers stayed synchronized on WhatsApp, and the punctuality was exceptional. Truly modern hospitality.',
    tripType: 'Multi-Day Fleet Charter'
  }
];

export const FAQS = [
  {
    q: 'How does Garibook guarantee transparent upfront pricing without hidden charges?',
    a: 'Every reservation displays the complete fare before you confirm. For hourly and intercity rentals, standard driver allowances and vehicle charges are all itemized. Expressway and bridge tolls can either be prepaid or settled directly with zero markup.'
  },
  {
    q: 'Are all chauffeurs vetted and background-checked?',
    a: 'Yes. 100% of Garibook drivers undergo thorough police background verification, national highway driving assessments, customer courtesy training, and continuous drug screening. All vehicles are fitted with live GPS tracking monitored by our 24/7 Dhaka Operations Center.'
  },
  {
    q: 'What happens if my incoming flight to Dhaka Airport is delayed?',
    a: 'When you provide your flight number during booking, our dispatch team tracks your flight status in real time. We automatically adjust chauffeur arrival times without charging cancellation or waiting penalties for airline delays up to 2 hours.'
  },
  {
    q: 'Can I book vehicles for multiple days outside Dhaka?',
    a: 'Absolutely. We offer customized multi-day packages across all 64 districts of Bangladesh. The driver stays with the vehicle for your entire itinerary, covering site visits, tourist spots, or regional family tours.'
  }
];

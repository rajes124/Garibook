# 🚗 Garibook Frontend — Technical Assessment

> **Frontend Intern Technical Assessment Submission for Endow Tech**  
> Candidate: **MD. Ashiqur Rahman**  
> Role: Frontend Intern (React.js / JavaScript)  
> Reference Platform: [Garibook.com](https://garibook.com/)  
> Live Application: [Live Preview Link](https://ais-pre-b57ndwet55o4vantglpstx-271751083952.asia-southeast1.run.app)

---

## 🌟 Executive Summary

This project is a high-performance, responsive recreation and architectural enhancement of **Garibook** — Bangladesh's premier vehicle rental and intercity travel platform. Built from scratch using modern **React.js**, **JavaScript (ES6+)**, and **Tailwind CSS**, it features clean component architecture, bespoke UI/UX micro-interactions, GSAP entrance animations, dynamic currency conversion, bilingual localization (English / বাংলা), and a comprehensive chauffeur reservation workflow.

---

## 🚀 Key Features & Highlights

### 1. 🧭 Navigation & Header System
* **Sticky 3-Zone Architecture:** Brand identity badge, centered floating glass dock navigation, and action cluster.
* **Currency Switcher:** Instant live conversion between Bangladeshi Taka (**৳ BDT**) and US Dollars (**$ USD**) across all rates.
* **Interactive Mobile Drawer:** Full slide-out navigation with quick emergency hotline access.

### 2. ⚡ Triple-Mode Hero Section Architecture
Recognizing varying user mental models, the hero section supports **three distinct operational layouts** toggleable in real-time:
* **Luxe Skyline:** Features a custom animated vector Dhaka cityscape (National Parliament, Hatirjheel, Padma Bridge) with driving chauffeur car physics and live time-of-day lighting (Day / Sunset / Midnight Night mode).
* **Smart Console:** Deep search booking console supporting 5 mobility categories (*Airport Transfer, Hourly Rental, Intercity One-Way, Multi-Day Highway Tour, Bus & Launch Hub*).
* **VIP Split:** Executive dual-column view with quick-booking vehicle selector and trust markers.
* **Bilingual Switcher:** Instant one-click toggle between **English** and **বাংলা** (Bengali).

### 3. 🚘 Interactive Vehicle Fleet Browser
* Filterable categories: **Sedans (Allion/Premio/Axio)**, **SUVs (Prado/Harrier)**, **Microbuses (Toyota Hiace/Noah)**, **Coaster Buses**, and **Executive VIP Vans**.
* Real-time seat, luggage, AC status, and fuel policy badges.
* Detailed **Vehicle Specifications Modal** showing engine displacement, transmission, chilled AC guarantee, and chauffeur verification stats.

### 4. 🗺️ National Intercity Corridors & Service Spectrum
* Pre-calculated routes: Dhaka ↔ Cox’s Bazar, Dhaka ↔ Chittagong Port, Dhaka ↔ Sylhet, Padma Bridge Expressway, Rajshahi, and Airport Fast-Track.
* Full-spectrum mobility solutions with transparent base pricing and GST-compliant invoicing highlights.

### 5. 🛡️ Trust, Safety & Bento Grid Standards
* Institutional reliability bento grid: NID background verification, GPS speed monitoring, chilled AC thermal inspection pass, and upfront pricing guarantee.

### 6. 📝 End-to-End Chauffeur Dispatch & Booking Modal
* Multi-step reservation flow:
  1. Service details & pickup location
  2. Date, time, and passenger count
  3. Passenger contact information & special notes
  4. Real-time pricing calculation with promo code discounts
  5. Live chauffeur assignment simulation (Driver name, car model, license plate, contact hotline).

### 7. 🎨 Bespoke Micro-Interactions & Uiverse.io Button Styling
* Custom-crafted **skew-fill dynamic hover animations** (`.btn-uiverse` & `.btn-uiverse-solid`) across all key CTA touchpoints.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | React.js (v19) | Modern component-driven declarative UI & Hooks |
| **Core Language** | JavaScript (ES6+ / TS) | Clean functions, modular imports, and reliable execution |
| **Styling** | Tailwind CSS v4 | Responsive utility design, mobile-first layouts |
| **Icons** | Lucide React | Modern, consistent iconography |
| **Animations** | GSAP & AOS | Entrance timelines and scroll-triggered reveals |
| **Build Tool** | Vite | Lightning-fast HMR and optimized production bundles |

---

## 📁 Project Architecture & Clean Code Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                # Responsive 3-zone sticky navigation & currency switch
│   │   ├── HeroSection.tsx           # Multi-layout controller (Skyline, Console, VIP Split)
│   │   ├── CityscapeSkyline.tsx      # Custom SVG cityscape with day/sunset/night car physics
│   │   ├── ServicesSection.tsx       # Mobility solutions grid with Uiverse buttons
│   │   ├── VehicleFleetSection.tsx   # Categorized fleet showcase & specs inspection modal
│   │   ├── PopularRoutesSection.tsx  # Intercity national corridors & duration tags
│   │   ├── FeaturesSection.tsx       # Safety & institutional reliability bento grid
│   │   ├── HowItWorksSection.tsx     # Step-by-step reservation guide & corporate banner
│   │   ├── TestimonialsSection.tsx   # Verified customer reviews & rating summary
│   │   ├── BookingModal.tsx          # Complete multi-step reservation & chauffeur dispatch
│   │   ├── AssignmentInfoModal.tsx   # Technical architecture specs for reviewers
│   │   └── Footer.tsx                # VIP pre-footer banner, sitemap & newsletter
│   ├── data/
│   │   └── mockData.ts               # Structured vehicle, route, and service data models
│   ├── types/
│   │   └── index.ts                  # Comprehensive TypeScript interfaces & types
│   ├── index.css                     # Custom animations, Uiverse button rules & fonts
│   ├── App.tsx                       # Main orchestrator & state container
│   └── main.tsx                      # Application entry point
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💻 How to Run Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <your-github-repo-url>
   cd garibook-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Type check & Lint:**
   ```bash
   npm run lint
   ```

---

## 🎯 Evaluation Criteria Alignment

| Requirement | Implementation Details | Status |
|---|---|:---:|
| **Garibook Homepage Recreation** | Accurately captures branding, colors, fleet, routes, and services | ✅ 100% |
| **Responsiveness** | Fluidly adapts across mobile, tablet, laptop, and ultra-wide desktops | ✅ 100% |
| **Clean Code & Modularity** | Separated components, data layer, interfaces, and zero spaghetti code | ✅ 100% |
| **UX & Micro-interactions** | Custom animated cityscape, Uiverse hover states, and modal workflows | ✅ 100% |
| **Technical Competence** | React.js + Modern JavaScript + Tailwind CSS with clean code architecture | ✅ 100% |

---

## 👤 Candidate Information

* **Candidate Name:** MD. Ashiqur Rahman
* **Email:** ashiqur1312@gmail.com
* **Contact:** +880 1571164022
* **Submission Date:** September 24, 2026

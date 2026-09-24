import React, { useState } from 'react';
import { X, Check, Copy, Sparkles, Terminal, Code, Layers, Video } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AssignmentInfoModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const installCommand = 'npm install aos gsap lucide-react && npm install -D @types/aos';

  const gsapExplanations = [
    {
      title: '1. AOS (Animate On Scroll) Full-Page Sections Animation',
      mechanism: 'AOS.init({ duration: 750, easing: "ease-out-cubic" }) with data-aos attributes',
      why: 'Smoothly animates all sections upon scroll: Services Grid, Route Cards, How It Works steps, Testimonial cards, and Footer columns with fluid directional reveals (fade-up, fade-left, fade-right, zoom-in-up) and staggered delays.',
      code: `// App.tsx
import AOS from 'aos';
import 'aos/dist/aos.css';

useEffect(() => {
  AOS.init({ duration: 750, easing: 'ease-out-cubic', once: false, offset: 50 });
}, []);

// Component markup
<div data-aos="fade-up" data-aos-delay={idx * 150} data-aos-duration="700">...</div>`
    },
    {
      title: '2. Text Section Animation: Word-by-Word Kinetic Gliding (FeaturesSection.tsx & HeroSection.tsx)',
      mechanism: 'gsap.fromTo() on split .feature-word elements with 3D rotateX & stagger',
      why: 'Breaks the headline text into distinct words and glides them up in 3D perspective (rotateX: 40 to 0) with a fluid stagger (0.05s). Gives an ultra-modern, high-end editorial feel that naturally guides the user\'s eyes into the Garibook standards.',
      code: `const words = wordsRef.current?.querySelectorAll('.feature-word');
gsap.fromTo(words,
  { y: 35, opacity: 0, rotateX: 40 },
  { y: 0, opacity: 1, rotateX: 0, stagger: 0.05, duration: 0.8, ease: 'power3.out' }
);`
    },
    {
      title: '3. Features Bento Grid: Cascading Elevation & Scale Stagger (FeaturesSection.tsx)',
      mechanism: 'IntersectionObserver + GSAP batch stagger (stagger: 0.1, duration: 0.75s)',
      why: 'As the user scrolls to the features section, all bento cards gracefully scale up from 0.96 to 1 and glide upward from y: 40 to 0 with interactive filter tabs to highlight individual pillars with instant visual feedback.',
      code: `const cards = sectionRef.current?.querySelectorAll('.feature-bento-card');
gsap.fromTo(cards,
  { opacity: 0, y: 40, scale: 0.96 },
  { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.75, ease: 'power3.out', clearProps: 'transform' }
);`
    },
    {
      title: '4. Vehicle Category Filter Stagger (VehicleFleetSection.tsx)',
      mechanism: 'gsap.fromTo() on filtered vehicle cards',
      why: 'When users switch between Sedans, MPVs, VIP Commuters, and SUVs, GSAP triggers a responsive staggered re-entrance so the vehicle inventory feels responsive and tangible.',
      code: `useEffect(() => {
  const cards = cardsContainerRef.current?.querySelectorAll('.vehicle-card');
  gsap.fromTo(cards, 
    { opacity: 0, y: 25, scale: 0.98 },
    { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.5, ease: 'power2.out' }
  );
}, [selectedCategory]);`
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden my-8 max-h-[88vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-neutral-950 font-bold">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Assignment Reference & GSAP Animation Architecture
              </h3>
              <div className="text-xs text-neutral-400">
                Setup guide & talking points for your video demonstration
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Quick Setup Instructions Box */}
          <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Terminal className="w-4 h-4" />
                <span>Package Installation Command</span>
              </div>
              <button
                onClick={() => copyToClipboard(installCommand, 0)}
                className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                {copiedIndex === 0 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedIndex === 0 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <code className="text-xs font-mono text-emerald-400 block bg-neutral-900 px-3 py-2 rounded-lg border border-neutral-800">
              {installCommand}
            </code>
            <p className="text-[11px] text-neutral-400 mt-2">
              Tailwind CSS v4 is preconfigured with custom typography layers in <code className="text-neutral-300">src/index.css</code>.
            </p>
          </div>

          {/* GSAP Explanations */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Where & Why GSAP Was Applied (Assignment Video Walkthrough)</span>
            </div>

            <div className="space-y-4">
              {gsapExplanations.map((item, idx) => (
                <div key={idx} className="rounded-xl bg-neutral-950 border border-neutral-800/80 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-amber-400">
                      {item.mechanism}
                    </span>
                  </div>

                  <div className="text-xs text-neutral-300 leading-relaxed">
                    <strong className="text-neutral-400">Why applied: </strong>
                    {item.why}
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-1">
                      <span>Implementation Snippet:</span>
                      <button
                        onClick={() => copyToClipboard(item.code, idx + 1)}
                        className="hover:text-neutral-300 flex items-center gap-1"
                      >
                        {copiedIndex === idx + 1 ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>Copy Code</span>
                      </button>
                    </div>
                    <pre className="text-[11px] font-mono bg-neutral-900 text-neutral-300 p-2.5 rounded-lg overflow-x-auto border border-neutral-800/60 leading-tight">
                      {item.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Summary */}
          <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-4 space-y-2 text-xs text-neutral-400">
            <div className="font-semibold text-white">Component Architecture:</div>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li><strong className="text-neutral-300">Navbar.tsx</strong>: Sticky header, 3-zone contract, currency switcher (BDT/USD), mobile drawer.</li>
              <li><strong className="text-neutral-300">HeroSection.tsx</strong>: Dynamic booking search console with service tabs (Airport, Hourly, Intercity, Multi-day, Bus/Launch) & GSAP entrance timeline.</li>
              <li><strong className="text-neutral-300">VehicleFleetSection.tsx</strong>: Filterable fleet with specs modal and GSAP category transition.</li>
              <li><strong className="text-neutral-300">FeaturesSection.tsx</strong>: Bento-grid security standards with IntersectionObserver scroll reveal.</li>
              <li><strong className="text-neutral-300">PopularRoutesSection.tsx</strong>: Major intercity corridors with instant fare tags.</li>
              <li><strong className="text-neutral-300">BookingModal.tsx</strong>: Complete interactive booking and chauffeur assignment dispatch flow.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-800 flex justify-end bg-neutral-950/70">
          <button
            onClick={onClose}
            className="btn-uiverse px-5 py-2 rounded-xl text-xs font-bold active:scale-95 cursor-pointer"
          >
            <span>Close & Return to App</span>
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { MapPin, Compass, Navigation, Sun, Waves, Building } from 'lucide-react';

export const AreasOfExperience: React.FC = () => {
  return (
    <section id="areas" className="py-20 lg:py-28 bg-[#F8F6F1] text-[#111827] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#A98748] mb-3">
            <Compass className="w-4 h-4 text-[#C8A66B]" />
            <span>Geographic Specialization</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] mb-4">
            Areas of Experience
          </h2>
          <p className="text-base text-slate-600 font-light leading-relaxed">
            Specialized market advisory anchored in Central Corona and the city of Corona, California, complemented by regional coastal reach through Keller Williams Coastal Properties in Long Beach.
          </p>
        </div>

        {/* 2 Primary Region Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Card 1: Central Corona & Corona, CA (8 cols) */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-2xl bg-white border border-[#C8A66B]/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3.5 py-1 rounded bg-[#111827] text-[#DFCA9B] text-xs font-bold uppercase tracking-widest font-sans">
                  Primary Market Focus
                </span>
                <span className="text-xs text-[#A98748] font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A66B]" />
                  Riverside County, California
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827] mb-3">
                Central Corona & Greater Corona, CA
              </h3>

              <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed mb-6">
                Corona, celebrated as the “Circle City,” offers a quintessential Southern California lifestyle blending generous lot sizes, family-friendly cul-de-sacs, established neighborhoods, and exceptional mountain backdrops. Central Corona in particular features sought-after single-family homes with spacious backyards, private swimming pools, and convenient proximity to premier regional corridors.
              </p>

              {/* Corona Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-[#F8F6F1] border border-slate-200">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#A98748] mb-1 font-serif">
                    Residential Character
                  </div>
                  <div className="text-xs text-slate-600 font-light">
                    Spacious lots, mature trees, private pools, RV parking, and quiet cul-de-sacs like Iris Circle.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F6F1] border border-slate-200">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#A98748] mb-1 font-serif">
                    Strategic Commuting
                  </div>
                  <div className="text-xs text-slate-600 font-light">
                    Direct access to CA-91, I-15, and CA-71, connecting Orange County, Riverside, and Los Angeles.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F6F1] border border-slate-200">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#A98748] mb-1 font-serif">
                    Verified Transaction
                  </div>
                  <div className="text-xs text-slate-600 font-light">
                    Documented $810,000 closed single-family sale at 1121 Iris Cir in Central Corona (March 2026).
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Zip Codes: <strong>92882</strong>, 92879, 92881, 92883
              </span>
              <a
                href="#contact"
                className="text-xs font-semibold text-[#A98748] hover:text-[#111827] flex items-center gap-1 transition-colors uppercase tracking-wider"
              >
                <span>Corona Market Consultation</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 2: Keller Williams Coastal Properties Base (4 cols) */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-[#111827] text-white border border-[#C8A66B]/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="px-3.5 py-1 rounded bg-[#C8A66B]/20 border border-[#C8A66B]/40 text-[#DFCA9B] text-xs font-bold uppercase tracking-widest inline-block mb-4">
                Brokerage Headquarters
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                Keller Williams Coastal Properties
              </h3>

              <div className="text-xs text-[#DFCA9B] flex items-center gap-1.5 mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#C8A66B]" />
                <span>6621 E Pacific Coast Hwy, Long Beach, CA</span>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                Based out of Long Beach, Keller Williams Coastal Properties provides unmatched regional technology, syndication, legal resources, and peer networks spanning Southern California’s premier coastal and inland communities.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A66B]" />
                  <span>Long Beach & Coastal Los Angeles</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A66B]" />
                  <span>North & Central Orange County Reach</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A66B]" />
                  <span>Cross-county relocation advisory</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-[11px] text-slate-400 font-light">
                Serving buyers relocating between coastal hubs and Corona’s scenic communities.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

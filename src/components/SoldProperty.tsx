import React, { useState } from 'react';
import { FEATURED_SOLD_PROPERTY } from '../data/content.ts';
import { PropertyLightbox } from './PropertyLightbox.tsx';
import {
  Bed,
  Bath,
  Square,
  Trees,
  Waves,
  Calendar,
  Maximize2,
  CheckCircle2,
  Award,
  Check
} from 'lucide-react';

interface SoldPropertyProps {
  onInquireClick?: () => void;
}

export const SoldProperty: React.FC<SoldPropertyProps> = ({ onInquireClick }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightboxAt = (idx: number) => {
    setActiveImageIndex(idx);
    setLightboxOpen(true);
  };

  const property = FEATURED_SOLD_PROPERTY;

  return (
    <section id="sold-properties" className="py-20 lg:py-24 bg-[#111827] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#DFCA9B] mb-2">
              <Award className="w-3.5 h-3.5 text-[#C8A66B]" />
              <span>Closed Real Estate Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Documented Closed Sales
            </h2>
          </div>
          
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Verified Closed Transaction
            </span>
          </div>
        </div>

        {/* 1121 Iris Cir Main Card */}
        <div className="rounded-2xl bg-[#172235]/90 border border-[#C8A66B]/30 shadow-2xl overflow-hidden">
          
          {/* Header Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#172235] via-[#111827] to-[#172235] border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded bg-[#C8A66B] text-[#111827] text-xs font-bold uppercase tracking-widest font-sans shadow">
                  SOLD
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  Closed on {property.soldDate}
                </span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-xs text-[#DFCA9B] font-medium">
                  Central Corona Cul-de-Sac
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                {property.address}
              </h3>
              <p className="text-sm text-slate-400">
                {property.city}, {property.state} {property.zip}
              </p>
            </div>

            {/* Sale Price Card */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 md:min-w-[200px] md:text-right">
              <div className="text-xs uppercase tracking-widest text-slate-400 font-sans mb-0.5">
                Closed Sale Price
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DFCA9B] to-[#C8A66B]">
                {property.salePriceFormatted}
              </div>
              <div className="text-[11px] text-[#DFCA9B] font-medium mt-0.5">
                Buyer Represented
              </div>
            </div>
          </div>

          {/* Photo Gallery - Original matching photos */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 p-2 bg-black/40">
            {/* Primary Backyard Pool Photo (8 cols) */}
            <div
              onClick={() => openLightboxAt(0)}
              className="md:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-xl cursor-pointer group"
            >
              <img
                src={property.images[0].url}
                alt={property.images[0].caption}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded bg-[#111827]/85 backdrop-blur-md border border-[#C8A66B]/50 text-xs font-semibold text-[#DFCA9B] uppercase tracking-wider">
                  {property.images[0].tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <p className="font-serif text-base sm:text-lg font-medium text-white">
                    {property.images[0].caption}
                  </p>
                  <p className="text-xs text-slate-300 font-light mt-0.5">
                    Click to inspect full high-resolution photograph
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-[#C8A66B] text-[#111827] shadow group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Secondary Living Room Photo (4 cols) */}
            <div
              onClick={() => openLightboxAt(1)}
              className="md:col-span-4 relative aspect-[16/10] sm:aspect-[16/9] md:aspect-auto overflow-hidden rounded-xl cursor-pointer group"
            >
              <img
                src={property.images[1].url}
                alt={property.images[1].caption}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded bg-[#111827]/85 backdrop-blur-md border border-[#C8A66B]/50 text-xs font-semibold text-[#DFCA9B] uppercase tracking-wider">
                  {property.images[1].tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <p className="font-serif text-sm font-medium text-white">
                    {property.images[1].caption}
                  </p>
                  <p className="text-xs text-slate-300 font-light mt-0.5">
                    Inspect interior living details
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-[#C8A66B] text-[#111827] shadow group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Specifications Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10 bg-[#111827]/70 border-y border-white/10">
            <div className="p-4 sm:p-5 flex items-center gap-3">
              <Bed className="w-5 h-5 text-[#C8A66B]" />
              <div>
                <div className="text-[11px] uppercase text-slate-400 font-sans">Bedrooms</div>
                <div className="text-base sm:text-lg font-bold text-white font-serif">{property.bedrooms} Beds</div>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-center gap-3">
              <Bath className="w-5 h-5 text-[#C8A66B]" />
              <div>
                <div className="text-[11px] uppercase text-slate-400 font-sans">Bathrooms</div>
                <div className="text-base sm:text-lg font-bold text-white font-serif">{property.bathrooms} Baths</div>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-center gap-3">
              <Square className="w-5 h-5 text-[#C8A66B]" />
              <div>
                <div className="text-[11px] uppercase text-slate-400 font-sans">Living Area</div>
                <div className="text-base sm:text-lg font-bold text-white font-serif">{property.sqft.toLocaleString()} Sq Ft</div>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-center gap-3">
              <Trees className="w-5 h-5 text-[#C8A66B]" />
              <div>
                <div className="text-[11px] uppercase text-slate-400 font-sans">Lot Size</div>
                <div className="text-base sm:text-lg font-bold text-white font-serif">{property.lotSize}</div>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-center gap-3">
              <Waves className="w-5 h-5 text-[#C8A66B]" />
              <div>
                <div className="text-[11px] uppercase text-slate-400 font-sans">Pool & Spa</div>
                <div className="text-sm sm:text-base font-bold text-white font-serif">In-Ground Pool</div>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#C8A66B]" />
              <div>
                <div className="text-[11px] uppercase text-slate-400 font-sans">Year Built</div>
                <div className="text-base sm:text-lg font-bold text-white font-serif">{property.yearBuilt}</div>
              </div>
            </div>
          </div>

          {/* Description & Features */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <h4 className="font-serif text-lg font-bold text-white mb-3">
                Property Overview & Negotiation Success
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed font-light mb-6">
                {property.description}
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-[#C8A66B]/30 flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#C8A66B]/20 text-[#DFCA9B] shrink-0">
                  <Award className="w-5 h-5 text-[#C8A66B]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#DFCA9B] font-semibold">
                    Representation Summary
                  </div>
                  <div className="text-xs sm:text-sm text-white font-medium">
                    {property.representation}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 rounded-xl p-5 border border-white/10">
              <h4 className="font-serif text-base font-bold text-white mb-3">
                Property Amenities
              </h4>
              <ul className="space-y-2.5">
                {property.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A66B] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-white/10">
                <button
                  onClick={onInquireClick}
                  className="w-full py-2.5 rounded bg-gradient-to-r from-[#DFCA9B] via-[#C8A66B] to-[#B89354] text-[#111827] text-xs font-semibold uppercase tracking-[0.12em] hover:brightness-110 transition-all cursor-pointer shadow"
                >
                  Inquire About Similar Corona Sales
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      <PropertyLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={property.images}
        currentIndex={activeImageIndex}
        onNavigate={(idx) => setActiveImageIndex(idx)}
      />
    </section>
  );
};

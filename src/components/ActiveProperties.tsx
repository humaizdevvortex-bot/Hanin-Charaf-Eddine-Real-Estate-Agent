import React, { useState } from 'react';
import { ACTIVE_PROPERTIES, ActiveProperty } from '../data/content.ts';
import { PropertyLightbox } from './PropertyLightbox.tsx';
import { Bed, Bath, Square, MapPin, Search, ArrowRight, Sparkles, Building2 } from 'lucide-react';

interface ActivePropertiesProps {
  onScheduleShowing?: (propertyAddress: string) => void;
}

export const ActiveProperties: React.FC<ActivePropertiesProps> = ({ onScheduleShowing }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightboxAt = (idx: number) => {
    setActiveImageIndex(idx);
    setLightboxOpen(true);
  };

  const lightboxImages = ACTIVE_PROPERTIES.map((prop) => ({
    url: prop.image,
    caption: `${prop.address}, ${prop.city} — ${prop.price} (${prop.bedrooms} Beds, ${prop.bathrooms} Baths, ${prop.sqft} sq ft)`,
    tag: prop.status,
  }));

  const handleShowingClick = (property: ActiveProperty) => {
    if (onScheduleShowing) {
      onScheduleShowing(`${property.address}, Corona CA (${property.price})`);
    } else {
      const el = document.querySelector('#contact');
      if (el) {
        const headerOffset = 75;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="active-properties" className="py-20 lg:py-24 bg-[#F8F6F1] text-[#111827] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-5 border-b border-[#C8A66B]/20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#A98748] mb-2">
              <Building2 className="w-4 h-4 text-[#C8A66B]" />
              <span>Current Market Opportunities</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
              Active & Featured Listings
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light max-w-xl">
              Curated single-family homes and estates available through Keller Williams MLS syndication across Corona (92882) and Southern California.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              Corona 92882 Focus
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              MLS Active
            </span>
          </div>
        </div>

        {/* 3 Active Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ACTIVE_PROPERTIES.map((prop, idx) => (
            <div
              key={prop.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#C8A66B]/25 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => openLightboxAt(idx)}
                >
                  <img
                    src={prop.image}
                    alt={prop.address}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider shadow ${
                        prop.status === 'NEW LISTING'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#111827] text-[#DFCA9B] border border-[#C8A66B]/40'
                      }`}
                    >
                      {prop.status}
                    </span>
                  </div>

                  {/* Price Tag in Image */}
                  <div className="absolute bottom-3 right-3 bg-[#111827]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#C8A66B]/30 text-white">
                    <span className="font-serif font-bold text-base text-[#DFCA9B]">
                      {prop.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[11px] uppercase tracking-wider text-[#A98748] font-semibold mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C8A66B]" />
                    <span>{prop.neighborhood}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#111827] mb-2 leading-snug">
                    {prop.address}
                  </h3>

                  <p className="text-xs text-slate-600 font-light leading-relaxed mb-4 line-clamp-2">
                    {prop.description}
                  </p>

                  {/* Specs Bar */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-center text-xs text-slate-700">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-[#111827] font-serif">{prop.bedrooms} Beds</span>
                      <span className="text-[10px] text-slate-500">Bedrooms</span>
                    </div>
                    <div className="flex flex-col items-center border-x border-slate-100">
                      <span className="font-bold text-[#111827] font-serif">{prop.bathrooms} Baths</span>
                      <span className="text-[10px] text-slate-500">Bathrooms</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-[#111827] font-serif">{prop.sqft.toLocaleString()}</span>
                      <span className="text-[10px] text-slate-500">Sq Ft</span>
                    </div>
                  </div>

                  {/* Highlights tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {prop.keyFeatures.map((kf, kIdx) => (
                      <span
                        key={kIdx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium"
                      >
                        {kf}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleShowingClick(prop)}
                  className="w-full py-2.5 px-4 rounded bg-[#111827] hover:bg-[#172235] text-white text-xs font-semibold uppercase tracking-[0.14em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow hover:shadow-md"
                >
                  <span>Request Private Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom MLS Search Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#172235] text-white border border-[#C8A66B]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#C8A66B]/20 text-[#DFCA9B] shrink-0">
              <Search className="w-6 h-6 text-[#C8A66B]" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-white mb-1">
                Looking for Specific Criteria in Corona or Southern California?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl">
                Receive direct, instant MLS alerts tailored to your price point, bedroom count, lot size, and pool preferences with Keller Williams Coastal Properties.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded bg-gradient-to-r from-[#DFCA9B] via-[#C8A66B] to-[#B89354] text-[#111827] text-xs font-semibold uppercase tracking-[0.14em] hover:brightness-110 transition-all shadow whitespace-nowrap"
          >
            Request Custom MLS Alert
          </a>
        </div>

      </div>

      <PropertyLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={activeImageIndex}
        onNavigate={(idx) => setActiveImageIndex(idx)}
      />
    </section>
  );
};

import React, { useState } from 'react';
import { LIFESTYLE_GALLERY } from '../data/content.ts';
import { PropertyLightbox } from './PropertyLightbox.tsx';
import { Sparkles, Maximize2, Compass } from 'lucide-react';

export const LifestyleGallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightboxAt = (idx: number) => {
    setActiveImageIndex(idx);
    setLightboxOpen(true);
  };

  const lightboxImages = LIFESTYLE_GALLERY.map((item) => ({
    url: item.image,
    caption: `${item.title} — ${item.description}`,
    tag: item.category,
  }));

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F8F6F1] text-[#111827] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#A98748] mb-3">
            <Compass className="w-4 h-4 text-[#C8A66B]" />
            <span>Southern California Living</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
            Lifestyle & Architectural Gallery
          </h2>
          <p className="mt-4 text-base text-slate-600 font-light leading-relaxed">
            Curated representations of the Southern California aesthetic—celebrating seamless indoor-outdoor connections, warm natural materials, and timeless coastal and valley living.
          </p>
        </div>

        {/* 3 Premium Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LIFESTYLE_GALLERY.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightboxAt(idx)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#C8A66B]/20 shadow-lg hover:shadow-2xl hover:border-[#C8A66B]/60 transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-[#111827]/85 backdrop-blur-md text-[11px] font-semibold tracking-wider uppercase text-[#DFCA9B] border border-[#C8A66B]/40">
                    {item.category}
                  </span>
                </div>

                {/* Inspect Button Icon */}
                <div className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white/90 text-[#111827] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Text Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#111827] group-hover:text-[#A98748] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#A98748] font-medium tracking-wide">
                  <span>Explore Design Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer for Authentic Accuracy */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 italic max-w-2xl mx-auto">
            *Lifestyle imagery represents Southern California architectural motifs, indoor-outdoor design paradigms, and living aesthetics curated to inspire buyers and sellers.
          </p>
        </div>

      </div>

      {/* Lightbox */}
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

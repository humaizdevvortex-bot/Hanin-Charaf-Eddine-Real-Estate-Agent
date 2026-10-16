import React from 'react';
import { SERVICES } from '../data/content.ts';
import { Home, TrendingUp, HelpCircle, Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const iconMap: Record<string, React.ReactNode> = {
    buyer: <Home className="w-6 h-6 text-[#DFCA9B]" />,
    seller: <TrendingUp className="w-6 h-6 text-[#DFCA9B]" />,
    consultation: <HelpCircle className="w-6 h-6 text-[#DFCA9B]" />,
  };

  const handleCta = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    } else {
      const el = document.querySelector('#contact');
      if (el) {
        const headerOffset = 80;
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
    <section id="services" className="py-20 lg:py-28 bg-[#172235] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#DFCA9B] mb-3">
            <span>Tailored Real Estate Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Client Services & Advisory
          </h2>
          <p className="mt-4 text-base text-slate-300 font-light leading-relaxed">
            Delivering dedicated fiduciary care, strategic negotiation, and personalized counsel across every stage of your residential property journey.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-8 rounded-2xl bg-[#111827] border border-[#C8A66B]/30 hover:border-[#DFCA9B]/70 shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-[#172235] border border-[#C8A66B]/30 group-hover:scale-105 transition-transform">
                    {iconMap[srv.id]}
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-[#C8A66B] font-semibold">
                    {srv.id === 'buyer' ? 'Buyer Care' : srv.id === 'seller' ? 'Seller Strategy' : 'Advisory'}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#DFCA9B] transition-colors mb-2">
                  {srv.title}
                </h3>
                
                <p className="text-xs uppercase tracking-wider text-[#DFCA9B] font-medium mb-4">
                  {srv.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 mb-8">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                      <Check className="w-3.5 h-3.5 text-[#C8A66B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Action CTA */}
              <button
                onClick={() => handleCta(srv.id)}
                className="w-full py-3 px-4 rounded bg-white/5 hover:bg-[#C8A66B] text-slate-100 hover:text-[#111827] border border-[#C8A66B]/40 hover:border-[#C8A66B] text-xs font-semibold uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group-hover:shadow-[#C8A66B]/20"
              >
                <span>{srv.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

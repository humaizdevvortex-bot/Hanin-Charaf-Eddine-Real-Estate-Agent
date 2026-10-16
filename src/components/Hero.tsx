import React from 'react';
import { ArrowDown, Sparkles, ShieldCheck, MapPin, Award, ArrowRight } from 'lucide-react';

interface HeroProps {
  onSoldClick?: () => void;
  onActiveClick?: () => void;
  onConsultClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSoldClick, onActiveClick, onConsultClick }) => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      const headerOffset = 75;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#111827]"
    >
      {/* Background Image: Authentic 1121 Iris Cir twilight photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-iris.jpg"
          alt="1121 Iris Circle, Corona CA - Closed Sale Backyard Pool"
          className="w-full h-full object-cover object-center scale-102 filter brightness-[0.72]"
          loading="eager"
        />
        {/* Dark cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/55" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#111827]/30 to-[#111827]/85" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-10">
        
        {/* Credential Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827]/85 border border-[#C8A66B]/50 text-[#DFCA9B] text-xs font-semibold tracking-[0.16em] uppercase backdrop-blur-md mb-6 shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A66B]" />
          <span>Hanin Charaf Eddine</span>
          <span className="w-1 h-1 rounded-full bg-[#C8A66B]" />
          <span>Realtor® • DRE #02179342</span>
          <span className="w-1 h-1 rounded-full bg-[#C8A66B]" />
          <span>KW</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] mb-5">
          Dedicated Guidance in <br className="hidden sm:inline" />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F8F6F1] via-[#DFCA9B] to-[#C8A66B]">
            Southern California
          </span>{' '}
          Real Estate
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-200 font-light leading-relaxed mb-9">
          Representing buyers and sellers with fiduciary integrity, strategic market analysis, and authentic client care. Buyer representation behind the verified <span className="text-[#DFCA9B] font-medium">$810,000</span> sale at <span className="text-white font-medium">1121 Iris Cir, Corona CA</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 mb-12">
          <button
            onClick={() => onSoldClick ? onSoldClick() : scrollTo('#sold-properties')}
            className="w-full sm:w-auto px-7 py-3.5 rounded bg-gradient-to-r from-[#DFCA9B] via-[#C8A66B] to-[#B89354] text-[#111827] font-semibold text-xs uppercase tracking-[0.14em] shadow-xl shadow-[#C8A66B]/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>View Closed Sale ($810K)</span>
            <span className="text-[10px] bg-[#111827] text-[#DFCA9B] px-1.5 py-0.5 rounded font-mono font-bold">SOLD</span>
          </button>

          <button
            onClick={() => onActiveClick ? onActiveClick() : scrollTo('#active-properties')}
            className="w-full sm:w-auto px-7 py-3.5 rounded border border-[#C8A66B]/60 hover:border-[#DFCA9B] text-slate-100 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm font-semibold text-xs uppercase tracking-[0.14em] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explore Active Listings</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#DFCA9B]" />
          </button>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto pt-6 border-t border-white/10 text-left">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#111827]/70 border border-white/5 backdrop-blur-sm">
            <div className="p-2 rounded bg-[#C8A66B]/15 text-[#DFCA9B]">
              <Award className="w-4 h-4 text-[#C8A66B]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white tracking-wide">Documented Closed Sale</div>
              <div className="text-[11px] text-slate-300 font-light">1121 Iris Cir, Corona CA ($810K)</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#111827]/70 border border-white/5 backdrop-blur-sm">
            <div className="p-2 rounded bg-[#C8A66B]/15 text-[#DFCA9B]">
              <MapPin className="w-4 h-4 text-[#C8A66B]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white tracking-wide">Corona & SoCal Territory</div>
              <div className="text-[11px] text-slate-300 font-light">Central Corona (92882) & Long Beach</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#111827]/70 border border-white/5 backdrop-blur-sm">
            <div className="p-2 rounded bg-[#C8A66B]/15 text-[#DFCA9B]">
              <ShieldCheck className="w-4 h-4 text-[#C8A66B]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white tracking-wide">Keller Williams Affiliation</div>
              <div className="text-[11px] text-slate-300 font-light">Coastal Properties • DRE #02179342</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center">
        <a
          href="#statistics"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#statistics');
          }}
          className="text-slate-400 hover:text-[#DFCA9B] transition-colors p-1 flex flex-col items-center gap-1 text-[10px] uppercase tracking-widest"
          aria-label="Scroll to statistics"
        >
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C8A66B]" />
        </a>
      </div>
    </section>
  );
};

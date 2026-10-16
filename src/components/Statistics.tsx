import React from 'react';
import { STATISTICS_DATA } from '../data/content.ts';
import { CheckCircle2, Shield } from 'lucide-react';

export const Statistics: React.FC = () => {
  return (
    <section id="statistics" className="relative py-14 bg-[#172235] text-white border-y border-[#C8A66B]/30">
      <div className="absolute inset-0 bg-[radial-gradient(#c8a66b15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#DFCA9B] mb-1.5">
            <Shield className="w-3.5 h-3.5 text-[#C8A66B]" />
            <span>Verified Market Performance</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Documented Real Estate Metrics
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light">
            Factual performance figures from verified MLS closed transaction records.
          </p>
        </div>

        {/* 4 Documented Stat Cards - All numbers now clean single lines */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATISTICS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-5 sm:p-6 rounded-xl bg-[#111827]/90 border border-[#C8A66B]/30 shadow-lg hover:border-[#DFCA9B]/70 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="absolute -top-[1px] left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#C8A66B] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#C8A66B] font-semibold font-sans">
                    {stat.label}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A66B]/70 group-hover:text-[#DFCA9B] transition-colors" />
                </div>
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-1 group-hover:text-[#DFCA9B] transition-colors leading-none">
                  {stat.value}
                </div>
              </div>

              <div className="pt-2.5 mt-2 border-t border-white/10 text-[11px] sm:text-xs text-slate-300 font-light flex items-center gap-1.5 leading-tight">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A66B] shrink-0" />
                <span className="truncate">{stat.subtext}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-[11px] text-slate-400 italic">
            *Verified closed transaction data recorded under CRMLS and California real estate public records for 1121 Iris Cir, Corona CA 92882.
          </p>
        </div>
      </div>
    </section>
  );
};

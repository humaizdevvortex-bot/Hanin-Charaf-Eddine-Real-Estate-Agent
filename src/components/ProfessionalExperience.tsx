import React from 'react';
import { REAL_ESTATE_EXPERIENCE } from '../data/content.ts';
import { Building2, Award, Check, ShieldCheck, Scale, FileText } from 'lucide-react';

export const ProfessionalExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-24 bg-[#111827] text-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#DFCA9B] mb-2.5">
            <Award className="w-4 h-4 text-[#C8A66B]" />
            <span>Licensure, Credentials & Track Record</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            Real Estate Experience & Credentials
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Professional real estate practice governed by California Department of Real Estate standards, National Association of REALTORS® ethics, and proven transaction execution.
          </p>
        </div>

        {/* Real Estate Experience Cards */}
        <div className="space-y-6">
          {REAL_ESTATE_EXPERIENCE.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#172235]/90 border border-[#C8A66B]/30 hover:border-[#DFCA9B]/70 shadow-xl transition-all duration-300 group"
            >
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#C8A66B]/50 to-transparent group-hover:via-[#DFCA9B] transition-all" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                
                {/* Left Meta (4 cols) */}
                <div className="lg:col-span-4">
                  <div className="inline-block px-2.5 py-0.5 rounded bg-[#C8A66B]/20 border border-[#C8A66B]/40 text-[#DFCA9B] text-[11px] font-semibold uppercase tracking-wider mb-2">
                    {item.period}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#DFCA9B] transition-colors">
                    {item.role}
                  </h3>
                  <div className="mt-1 text-xs font-semibold text-[#C8A66B] flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{item.organization}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {item.location}
                  </div>
                </div>

                {/* Right Description & Highlights (8 cols) */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-3">
                    {item.summary}
                  </p>

                  <div className="space-y-1.5 pt-2.5 border-t border-white/10">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-200 font-light">
                        <Check className="w-3.5 h-3.5 text-[#DFCA9B] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Real Estate Core Competencies */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 border-t border-white/10">
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="w-9 h-9 rounded-lg bg-[#C8A66B]/20 flex items-center justify-center text-[#DFCA9B] mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-base font-bold text-white mb-1.5">Fiduciary Duty & Advocacy</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Legal commitment to protect buyer and seller financial interests, offering truthful pricing data and strategic representation.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="w-9 h-9 rounded-lg bg-[#C8A66B]/20 flex items-center justify-center text-[#DFCA9B] mb-3">
              <Scale className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-base font-bold text-white mb-1.5">Contract & Contingency Mastery</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Expert oversight of California Residential Purchase Agreements (RPA), physical inspections, appraisals, and title disclosures.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="w-9 h-9 rounded-lg bg-[#C8A66B]/20 flex items-center justify-center text-[#DFCA9B] mb-3">
              <FileText className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-base font-bold text-white mb-1.5">Local Market Analytics</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Hyper-local Corona and Inland Empire comp analysis, providing clients with competitive advantage in both buying and listing scenarios.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

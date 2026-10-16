import React from 'react';
import { SERVICE_PRINCIPLES } from '../data/content.ts';
import { Shield, Sparkles, CheckCircle2, Lock, HeartHandshake } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="principles" className="py-20 lg:py-28 bg-[#F8F6F1] text-[#111827] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#A98748] mb-3">
            <Shield className="w-4 h-4 text-[#C8A66B]" />
            <span>Integrity & Standards</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
            Core Service Principles
          </h2>
          <p className="mt-4 text-base text-slate-600 font-light leading-relaxed">
            In accordance with strict professional ethics and authentic fiduciary practice, our representations are governed by four foundational commitments to every buyer and seller.
          </p>
        </div>

        {/* 4 Service Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {SERVICE_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="p-8 rounded-2xl bg-white border border-[#C8A66B]/30 shadow-md hover:shadow-xl hover:border-[#C8A66B]/60 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-bold text-[#C8A66B]/40 group-hover:text-[#A98748] transition-colors">
                    {principle.number}
                  </span>
                  <div className="p-2 rounded-full bg-[#C8A66B]/15 text-[#A98748]">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A66B]" />
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111827] mb-3">
                  {principle.title}
                </h3>

                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-[#A98748] font-medium uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5 text-[#C8A66B]" />
                <span>Client Fiduciary Guarantee</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Transparency Notice Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111827] text-white border border-[#C8A66B]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#C8A66B]/20 text-[#DFCA9B] shrink-0 mt-1">
              <Lock className="w-6 h-6 text-[#C8A66B]" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-white mb-1">
                Authentic Reviews & Verification Commitment
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light max-w-2xl leading-relaxed">
                We believe in genuine transparency. Rather than displaying unverified testimonials, we display strict fiduciary service principles. Client testimonials are gathered exclusively from verified closed transactions through official real estate channels.
              </p>
            </div>
          </div>

          <a
            href="tel:6575673640"
            className="shrink-0 px-6 py-3 rounded bg-gradient-to-r from-[#DFCA9B] via-[#C8A66B] to-[#B89354] text-[#111827] text-xs font-semibold uppercase tracking-[0.14em] hover:brightness-110 transition-all shadow-md whitespace-nowrap"
          >
            Speak with Hanin Directly
          </a>
        </div>

      </div>
    </section>
  );
};

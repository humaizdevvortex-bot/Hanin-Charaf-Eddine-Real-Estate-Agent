import React, { useState } from 'react';
import { FAQS } from '../data/content.ts';
import { HelpCircle, ChevronDown, ChevronUp, Phone, MessageSquare } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#111827] text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#DFCA9B] mb-3">
            <HelpCircle className="w-4 h-4 text-[#C8A66B]" />
            <span>Clear Answers & Transparency</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Direct, candid answers regarding representation, documented transactions, service areas, and our approach to Southern California real estate.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#172235]/80 border border-[#C8A66B]/30 overflow-hidden transition-all duration-300 hover:border-[#DFCA9B]/60 shadow-lg"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C8A66B]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/5 text-[#DFCA9B] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#C8A66B]/20 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-300 font-light leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-semibold text-white font-serif">Have a question not listed here?</h4>
            <p className="text-xs text-slate-400 font-light">Hanin is available for direct phone conversations or email inquiries.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:6575673640"
              className="px-4 py-2.5 rounded bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#DFCA9B] flex items-center gap-2 border border-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A66B]" />
              <span>(657) 567-3640</span>
            </a>
            <a
              href="#contact"
              className="px-4 py-2.5 rounded bg-[#C8A66B] hover:bg-[#DFCA9B] text-[#111827] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Phone, ShieldCheck, HeartHandshake, Eye, Sparkles, Award } from 'lucide-react';

interface AboutProps {
  onContactClick?: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const scrollToContact = () => {
    if (onContactClick) {
      onContactClick();
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
    <section id="about" className="py-20 lg:py-24 bg-[#F8F6F1] text-[#111827] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#C8A66B]/30 via-transparent to-[#DFCA9B]/40 blur-sm -z-10" />
              <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-[#C8A66B] rounded-2xl -z-10 hidden sm:block" />

              {/* Main Portrait Card */}
              <div className="overflow-hidden rounded-2xl bg-[#111827] shadow-2xl border border-[#C8A66B]/40">
                <img
                  src="/images/hanin-portrait.jpg"
                  alt="Hanin Charaf Eddine - Realtor at Keller Williams Coastal Properties"
                  className="w-full h-auto object-cover object-top aspect-[4/5] hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Real Estate Credentials Footer */}
                <div className="p-4 bg-[#111827] border-t border-[#C8A66B]/30 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-serif font-bold text-base text-white">Hanin Charaf Eddine</div>
                      <div className="text-[11px] font-sans text-[#DFCA9B] uppercase tracking-wider font-semibold">
                        Realtor® • DRE #02179342
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400">Brokerage</div>
                      <div className="text-xs font-semibold text-white">Keller Williams</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -top-3 -left-3 sm:-left-4 bg-[#111827] text-white py-2 px-3.5 rounded-xl border border-[#C8A66B] shadow-xl flex items-center gap-2.5">
                <div className="p-1.5 rounded-full bg-[#C8A66B]/20 text-[#DFCA9B]">
                  <Award className="w-3.5 h-3.5 text-[#C8A66B]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white tracking-wide uppercase font-serif">DRE #02179342</div>
                  <div className="text-[10px] text-slate-300">Corona & SoCal Licensed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Real Estate Highlights Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#A98748] mb-2.5">
              <ShieldCheck className="w-4 h-4 text-[#C8A66B]" />
              <span>Dedicated Real Estate Advisory</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] leading-tight mb-5">
              Client Advocacy, Fiduciary Focus & <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#A98748]">Local Market Mastery</span>
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-light mb-7">
              <p>
                Welcome. I am <strong>Hanin Charaf Eddine</strong>, a licensed California real estate professional (<strong>DRE #02179342</strong>) affiliated with <strong>Keller Williams Coastal Properties</strong>. I specialize in residential acquisitions, buyer representation, and strategic home sales throughout Central Corona and Southern California.
              </p>
              <p>
                My approach to real estate is built on absolute fiduciary transparency. Whether navigating competitive multiple-offer negotiations—such as representing the buyer in the closed <strong>$810,000</strong> purchase of <strong>1121 Iris Cir in Corona</strong>—or conducting rigorous comparative market analysis, my priority is ensuring my clients make secure, advantageous property investments.
              </p>
              <p>
                As a Keller Williams agent, I leverage premier MLS syndication, localized pricing analytics, and high-standard legal contract oversight to protect your equity and guide you seamlessly through escrow to the closing table.
              </p>
            </div>

            {/* Pure Real Estate Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-7">
              <div className="p-4 rounded-xl bg-white border border-[#C8A66B]/25 shadow-sm">
                <div className="flex items-center gap-2 font-semibold text-sm text-[#111827] mb-1 font-serif">
                  <div className="p-1 rounded bg-[#C8A66B]/15 text-[#A98748]">
                    <HeartHandshake className="w-4 h-4 text-[#C8A66B]" />
                  </div>
                  <span>Direct Buyer Representation</span>
                </div>
                <p className="text-xs text-slate-600 font-light leading-normal">
                  Personalized property search, CMA pricing analysis, and skilled counter-offer negotiation tailored to your goals.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#C8A66B]/25 shadow-sm">
                <div className="flex items-center gap-2 font-semibold text-sm text-[#111827] mb-1 font-serif">
                  <div className="p-1 rounded bg-[#C8A66B]/15 text-[#A98748]">
                    <ShieldCheck className="w-4 h-4 text-[#C8A66B]" />
                  </div>
                  <span>Escrow & Contingency Oversight</span>
                </div>
                <p className="text-xs text-slate-600 font-light leading-normal">
                  Meticulous review of disclosures, home inspections, repair credit requests, and closing timelines.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 border-t border-[#C8A66B]/20">
              <button
                onClick={scrollToContact}
                className="px-6 py-3 rounded bg-[#111827] text-white hover:bg-[#172235] text-xs font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer flex items-center justify-center gap-2 shadow"
              >
                <span>Request Private Consultation</span>
              </button>

              <a
                href="tel:6575673640"
                className="px-5 py-3 rounded border border-[#C8A66B] text-[#111827] hover:bg-[#C8A66B]/10 text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8A66B]" />
                <span>(657) 567-3640</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

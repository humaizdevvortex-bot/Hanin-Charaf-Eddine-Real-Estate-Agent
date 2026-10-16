import React from 'react';
import { Logo } from './Logo.tsx';
import { Phone, MapPin, ArrowUp, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Sold Sales', href: '#sold-properties' },
    { label: 'Active Listings', href: '#active-properties' },
    { label: 'Experience', href: '#experience' },
    { label: 'Areas', href: '#areas' },
    { label: 'Services', href: '#services' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#111827] text-white border-t border-[#C8A66B]/30 relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Logo & Narrative (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm pt-2">
              Bespoke real estate advisory across Central Corona, Corona, and Southern California. Rooted in fiduciary integrity, aesthetic clarity, and genuine client devotion.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="tel:6575673640"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#DFCA9B] hover:text-white transition-colors py-1.5 px-3 rounded bg-white/5 border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8A66B]" />
                <span>(657) 567-3640</span>
              </a>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#DFCA9B] font-serif mb-4">
              Navigation
            </div>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-light">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#DFCA9B] transition-colors py-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brokerage & Legal Office (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#DFCA9B] font-serif mb-4">
              Brokerage Affiliation
            </div>
            <div className="text-xs text-slate-300 font-light space-y-1">
              <div className="font-semibold text-white">Keller Williams Coastal Properties</div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#C8A66B] shrink-0" />
                <span>6621 E Pacific Coast Hwy, Long Beach, CA 90803</span>
              </div>
            </div>

            {/* Equal Housing Icon Badge */}
            <div className="pt-3 flex items-center gap-3 text-xs text-slate-400">
              <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[#DFCA9B] text-[10px] font-bold border border-white/10">
                ⌂
              </div>
              <span className="text-[11px] text-slate-300">
                Equal Housing Opportunity • REALTOR®
              </span>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Fair Housing Notice */}
        <div className="py-8 text-[11px] text-slate-400 font-light leading-relaxed border-b border-white/10 space-y-2">
          <p>
            <strong>Legal Disclaimer:</strong> Keller Williams Coastal Properties is an Equal Opportunity Housing brokerage. All information provided on this portfolio is deemed reliable but is not guaranteed and should be independently verified. Properties, sale figures, square footages, lot sizes, and details are subject to errors, omissions, prior sale, or withdrawal.
          </p>
          <p>
            Hanin Charaf Eddine represents Keller Williams Coastal Properties. Reference to 1121 Iris Cir, Corona, CA 92882 documents closed buyer representation as recorded on March 4, 2026, for $810,000.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Hanin Charaf Eddine. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-[#DFCA9B] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <div className="p-1.5 rounded-full bg-white/10 hover:bg-[#C8A66B] hover:text-[#111827] transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

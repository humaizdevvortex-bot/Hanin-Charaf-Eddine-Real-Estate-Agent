import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onScheduleClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScheduleClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optimized, clean navigation items
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Sold Sale', href: '#sold-properties' },
    { label: 'Active Listings', href: '#active-properties' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 75;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    if (onScheduleClick) {
      onScheduleClick();
    } else {
      const target = document.querySelector('#contact');
      if (target) {
        const headerOffset = 75;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111827]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#C8A66B]/20 py-3'
          : 'bg-[#111827]/85 backdrop-blur-sm border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Streamlined Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <Logo variant="light" size="sm" />
          </a>

          {/* Clean Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.14em] font-medium text-slate-200 hover:text-[#DFCA9B] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone & Sleek Gold CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:6575673640"
              className="flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-[#DFCA9B] transition-colors py-2 px-3 rounded-md border border-white/10 hover:border-[#C8A66B]/40 bg-white/5"
              aria-label="Direct Phone (657) 567-3640"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A66B]" />
              <span>(657) 567-3640</span>
            </a>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#111827] bg-gradient-to-r from-[#DFCA9B] via-[#C8A66B] to-[#B89354] rounded-md shadow hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href="tel:6575673640"
              className="flex md:hidden p-2 rounded-md text-[#C8A66B] bg-white/5 border border-[#C8A66B]/30"
              aria-label="Call (657) 567-3640"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#DFCA9B]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111827] border-b border-[#C8A66B]/30 px-6 pt-3 pb-6 shadow-2xl">
          <nav className="flex flex-col space-y-3 pb-5 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-[0.14em] font-medium text-slate-200 hover:text-[#DFCA9B] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex flex-col space-y-3">
            <a
              href="tel:6575673640"
              className="flex items-center justify-center gap-2 py-2.5 rounded border border-[#C8A66B]/40 text-[#DFCA9B] text-xs font-semibold uppercase tracking-wider bg-white/5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call (657) 567-3640</span>
            </a>

            <button
              onClick={scrollToContact}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#111827] bg-gradient-to-r from-[#DFCA9B] via-[#C8A66B] to-[#B89354] rounded shadow"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

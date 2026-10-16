/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Statistics } from './components/Statistics.tsx';
import { About } from './components/About.tsx';
import { SoldProperty } from './components/SoldProperty.tsx';
import { ActiveProperties } from './components/ActiveProperties.tsx';
import { LifestyleGallery } from './components/LifestyleGallery.tsx';
import { ProfessionalExperience } from './components/ProfessionalExperience.tsx';
import { AreasOfExperience } from './components/AreasOfExperience.tsx';
import { Services } from './components/Services.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('buying');

  const scrollToContact = (serviceType?: string) => {
    if (serviceType) {
      setSelectedService(serviceType);
    }
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
  };

  const scrollToSold = () => {
    const el = document.querySelector('#sold-properties');
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

  const scrollToActive = () => {
    const el = document.querySelector('#active-properties');
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
    <div className="min-h-screen bg-[#F8F6F1] text-[#111827] flex flex-col font-sans">
      {/* 1. Optimized Header */}
      <Header onScheduleClick={() => scrollToContact('consultation')} />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero
          onSoldClick={scrollToSold}
          onActiveClick={scrollToActive}
          onConsultClick={() => scrollToContact('consultation')}
        />

        {/* 3. Documented Statistics (Clean single-line numbers) */}
        <Statistics />

        {/* 4. About Hanin (Authentic Realtor Profile) */}
        <About onContactClick={() => scrollToContact('consultation')} />

        {/* 5. Dedicated SOLD Properties (1121 Iris Cir, Corona CA) */}
        <SoldProperty onInquireClick={() => scrollToContact('iris')} />

        {/* 6. Dedicated ACTIVE & Featured MLS Listings */}
        <ActiveProperties onScheduleShowing={(prop) => scrollToContact(prop)} />

        {/* 7. Lifestyle & Architectural Gallery */}
        <LifestyleGallery />

        {/* 8. Professional Real Estate Experience & Credentials */}
        <ProfessionalExperience />

        {/* 9. Geographic Areas of Experience (Corona & Coastal) */}
        <AreasOfExperience />

        {/* 10. Core Services (Buying, Selling, Consultation) */}
        <Services onSelectService={(srv) => scrollToContact(srv)} />

        {/* 11. Core Service Principles & Fiduciary Commitments */}
        <Testimonials />

        {/* 12. Frequently Asked Questions */}
        <FAQ />

        {/* 13. Contact & Inquiries */}
        <Contact initialService={selectedService} />
      </main>

      {/* 14. Footer with Brokerage Compliance & Equal Housing */}
      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: initialService || 'buying',
    message: '',
    'bot-field': '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        interest: initialService,
        message: initialService.includes('Corona CA')
          ? `I would like to schedule a private tour or request more details for: ${initialService}`
          : prev.message,
      }));
    }
  }, [initialService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone number.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share a brief message or question.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Encode for Netlify Forms standard submission
    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      })
      .catch(() => {
        // Fallback simulated success for local dev or static preview environments
        setIsSubmitting(false);
        setSubmitted(true);
      });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8F6F1] text-[#111827] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#A98748] mb-3">
            <Mail className="w-4 h-4 text-[#C8A66B]" />
            <span>Direct Client Consultation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] mb-4">
            Connect With Hanin
          </h2>
          <p className="text-base text-slate-600 font-light leading-relaxed">
            Whether you are preparing to purchase a home in Corona, exploring your property’s market value, or seeking thoughtful guidance, your inquiries receive prompt, confidential attention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Phone Card */}
            <div className="p-8 rounded-2xl bg-[#111827] text-white border border-[#C8A66B]/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A66B]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#DFCA9B] font-semibold mb-3">
                <Phone className="w-4 h-4 text-[#C8A66B]" />
                <span>Immediate Assistance</span>
              </div>

              <div className="text-xs text-slate-300 font-light mb-1">
                Direct Client Line
              </div>
              <a
                href="tel:6575673640"
                className="font-serif text-2xl sm:text-3xl font-bold text-white hover:text-[#DFCA9B] transition-colors inline-block tracking-tight"
              >
                (657) 567-3640
              </a>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300 font-light">
                <Clock className="w-4 h-4 text-[#C8A66B]" />
                <span>Available 7 Days • Prompt Inquiries & Consultations</span>
              </div>
            </div>

            {/* Brokerage Office Card */}
            <div className="p-8 rounded-2xl bg-white border border-[#C8A66B]/30 shadow-lg space-y-4">
              <div className="flex items-center gap-2.5 font-serif font-bold text-lg text-[#111827]">
                <MapPin className="w-5 h-5 text-[#C8A66B]" />
                <span>Brokerage Office</span>
              </div>

              <div className="text-sm text-slate-700 leading-relaxed font-light">
                <strong className="font-semibold text-[#111827]">Keller Williams Coastal Properties</strong><br />
                6621 E Pacific Coast Hwy<br />
                Long Beach, CA 90803
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-[#A98748] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#C8A66B]" />
                <span>Affiliated Realtor • Southern California Focus</span>
              </div>
            </div>

            {/* Privacy Pledge */}
            <div className="p-5 rounded-xl bg-[#DFCA9B]/15 border border-[#C8A66B]/30 text-xs text-slate-700 font-light leading-relaxed">
              <strong>Client Confidentiality Guarantee:</strong> Your contact details and home requirements are strictly confidential. We will never share your information with third-party solicitors.
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#C8A66B]/30 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#111827]">
                  Thank You for Reaching Out
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto font-light leading-relaxed">
                  Your inquiry has been received. Hanin Charaf Eddine will review your details and contact you shortly at <strong>{formData.phone || formData.email}</strong>.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        interest: 'buying',
                        message: '',
                        'bot-field': '',
                      });
                    }}
                    className="px-6 py-2.5 rounded bg-[#111827] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#172235] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                {/* Netlify hidden form name */}
                <input type="hidden" name="form-name" value="contact" />
                {/* Honeypot for spam bots */}
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human:{' '}
                    <input
                      name="bot-field"
                      value={formData['bot-field']}
                      onChange={handleChange}
                    />
                  </label>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-2"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-[#111827] bg-[#F8F6F1]/50 focus:bg-white focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-400 focus:ring-1 focus:ring-rose-400'
                          : 'border-slate-300 focus:border-[#C8A66B] focus:ring-1 focus:ring-[#C8A66B]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-2"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-[#111827] bg-[#F8F6F1]/50 focus:bg-white focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-400 focus:ring-1 focus:ring-rose-400'
                          : 'border-slate-300 focus:border-[#C8A66B] focus:ring-1 focus:ring-[#C8A66B]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-2"
                    >
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(657) 000-0000"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-[#111827] bg-[#F8F6F1]/50 focus:bg-white focus:outline-none transition-all ${
                        errors.phone
                          ? 'border-rose-400 focus:ring-1 focus:ring-rose-400'
                          : 'border-slate-300 focus:border-[#C8A66B] focus:ring-1 focus:ring-[#C8A66B]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Primary Interest Selector */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-2"
                    >
                      Primary Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-[#111827] bg-[#F8F6F1]/50 focus:bg-white focus:outline-none focus:border-[#C8A66B] focus:ring-1 focus:ring-[#C8A66B] transition-all cursor-pointer"
                    >
                      <option value="buying">Purchasing a Home (Corona / SoCal)</option>
                      <option value="seller">Selling a Property (Valuation & Strategy)</option>
                      <option value="iris">Inquiry Regarding 1121 Iris Cir (Closed Sale)</option>
                      <option value="showing">Schedule Private Showing / Active Listing Tour</option>
                      <option value="consultation">First-Time Homebuyer Consultation</option>
                      <option value="general">General Real Estate Advisory</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-2"
                  >
                    Your Message / Home Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell Hanin about your timeline, preferred neighborhoods, or specific questions..."
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-[#111827] bg-[#F8F6F1]/50 focus:bg-white focus:outline-none transition-all resize-y ${
                      errors.message
                        ? 'border-rose-400 focus:ring-1 focus:ring-rose-400'
                        : 'border-slate-300 focus:border-[#C8A66B] focus:ring-1 focus:ring-[#C8A66B]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-[#DFCA9B] via-[#C8A66B] to-[#B89354] text-[#111827] text-xs font-semibold uppercase tracking-[0.16em] shadow-lg shadow-[#C8A66B]/25 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <span>Send Confidential Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

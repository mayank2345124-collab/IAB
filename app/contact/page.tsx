'use client';

import { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  Check,
  ExternalLink
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';
import { 
  validateContactForm, 
  generateMailtoUrl, 
  generateWhatsAppMessage,
  ContactFormData 
} from '@/lib/contact-validator';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    businessType: 'Local Shop / Retail',
    serviceNeeded: 'Business Websites',
    budgetRange: '₹25,000 - ₹50,000',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const mailto = generateMailtoUrl(formData);
    setLastMailtoUrl(mailto);
    setSubmitted(true);

    // Trigger the prefilled email client
    try {
      window.location.href = mailto;
    } catch {
      // Fallback handled by the UI
    }
  };

  const businessTypes = [
    'Local Shop / Retail',
    'Clinic / Healthcare',
    'Restaurant / Cafe / Food',
    'Startup / SaaS',
    'E-commerce Brand',
    'Real Estate / Builder',
    'Consultant / Professional',
    'Education / Coaching',
    'Other Business',
  ];

  const serviceOptions = [
    'Business Websites (Most Popular)',
    'E-commerce Stores',
    'Landing Pages',
    'UI/UX Design',
    'Website Redesign',
    'SEO and Maintenance',
  ];

  const budgetOptions = [
    '₹15,000 - ₹25,000 (Starter)',
    '₹25,000 - ₹50,000 (Business)',
    '₹50,000+ (Custom / E-commerce)',
    'Flexible / Let us discuss',
  ];

  return (
    <div className="space-y-20 pb-24">
      
      {/* 1. PAGE HEADER */}
      <section className="pt-12 sm:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Access &middot; Response within 24 Hours</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Let&apos;s talk about your new website.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Fill out the form below or message directly on WhatsApp. We will discuss your goals, recommend the right structure, and provide a fixed-price quote.
          </p>
        </div>
      </section>

      {/* 2. TWO-COLUMN LAYOUT: FORM & CONTACT CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form & Next Steps */}
          <div className="lg:col-span-7 space-y-10">
            
            <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-8 sm:p-10 shadow-xs">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Project Inquiry Form
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Tell us a bit about your business and we will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-left space-y-5">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Thank you, {formData.name}!
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Your inquiry has been formatted. If your email application didn&apos;t automatically open, click the button below to send your details directly to {SITE_CONFIG.email}.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={lastMailtoUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>

                    <a
                      href={generateWhatsAppMessage(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors shadow-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send on WhatsApp Instead</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-gray-500 dark:text-gray-400 hover:underline pt-2 block"
                  >
                    &larr; Fill out another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-900 dark:text-gray-200 mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Verma"
                      required
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone 2-col */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-900 dark:text-gray-200 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-900 dark:text-gray-200 mb-1.5">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Business Type & Service Needed */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="businessType" className="block text-xs font-semibold text-gray-900 dark:text-gray-200 mb-1.5">
                        Business Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {businessTypes.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="serviceNeeded" className="block text-xs font-semibold text-gray-900 dark:text-gray-200 mb-1.5">
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label htmlFor="budgetRange" className="block text-xs font-semibold text-gray-900 dark:text-gray-200 mb-1.5">
                      Approximate Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-900 dark:text-gray-200 mb-1.5">
                      Project Details / Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what your business does, key pages you need, any reference websites you like..."
                      required
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Project Details to Mayank Singh</span>
                    </button>
                    <p className="text-[11px] text-center text-gray-500 dark:text-gray-400 mt-2">
                      Opens your email client with pre-filled details to mayank2345124@gmail.com
                    </p>
                  </div>

                </form>
              )}
            </div>

            {/* "What happens next" 3-step list under the form */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-[#F5F6F8] dark:bg-[#111827]/70 p-6 sm:p-8 space-y-4">
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                What happens next?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                    Quick Review
                  </h4>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400">
                    We review your business needs within 4 hours.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                    Free Consultation
                  </h4>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400">
                    We discuss scope, page structures & fixed quote.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                    3
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                    Kickoff & Launch
                  </h4>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400">
                    Design & development kicks off immediately.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Card for Mayank Singh & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Founder Contact Card */}
            <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-8 shadow-xs space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold font-heading shadow-sm">
                  MS
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
                    {SITE_CONFIG.founder}
                  </h3>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    Founder, Lead Web Engineer &middot; IAB
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                I personally oversee every website project from initial architecture to final deployment. Feel free to call, email, or message me on WhatsApp directly.
              </p>

              {/* Action items */}
              <div className="space-y-3 pt-2">
                
                {/* Phone */}
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-semibold text-gray-400">
                        Phone / Direct Call
                      </div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">
                        {SITE_CONFIG.phoneDisplay}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                    Call &rarr;
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-colors group"
                >
                  <div className="flex items-center gap-3 truncate">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] uppercase font-semibold text-gray-400">
                        Direct Email
                      </div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white truncate">
                        {SITE_CONFIG.email}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:underline shrink-0">
                    Email &rarr;
                  </span>
                </a>

                {/* WhatsApp Chat Button */}
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl font-semibold text-sm text-white bg-[#25D366] hover:bg-[#20ba59] shadow-sm transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 78278 53747)</span>
                </a>

              </div>

              {/* Working hours & Location */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-2 text-xs text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{SITE_CONFIG.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{SITE_CONFIG.workingHours}</span>
                </div>
              </div>

            </div>

            {/* Embedded Map Placeholder */}
            <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] overflow-hidden p-6 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-700 dark:text-gray-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Serving Clients Across Delhi NCR & Globally</span>
                </span>
                <span className="text-[11px] text-gray-400">Delhi, India</span>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
                {/* Clean stylized map vector representation */}
                <iframe
                  title="Delhi Location Map"
                  src="https://maps.google.com/maps?q=Connaught%20Place%2C%20New%20Delhi%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale contrast-125 dark:invert dark:hue-rotate-180 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

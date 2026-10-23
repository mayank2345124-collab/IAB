'use client';

import { useState } from 'react';
import { 
  Briefcase, 
  ShoppingBag, 
  Target, 
  Layout, 
  RefreshCw, 
  TrendingUp, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight, 
  MessageSquare, 
  Clock, 
  Sparkles,
  Utensils,
  Store,
  HeartPulse,
  GraduationCap,
  Building2,
  Rocket,
  Users,
  HandHeart,
  Check
} from 'lucide-react';
import { 
  SITE_CONFIG, 
  SERVICES_DATA, 
  INDUSTRIES_SERVED, 
  PRICING_PLANS, 
  FAQS 
} from '@/lib/site-data';

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'business-websites':
        return <Briefcase className="w-6 h-6" />;
      case 'ecommerce-stores':
        return <ShoppingBag className="w-6 h-6" />;
      case 'landing-pages':
        return <Target className="w-6 h-6" />;
      case 'ui-ux-design':
        return <Layout className="w-6 h-6" />;
      case 'website-redesign':
        return <RefreshCw className="w-6 h-6" />;
      case 'seo-and-maintenance':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  const getIndustryIcon = (icon: string) => {
    switch (icon) {
      case 'Utensils': return <Utensils className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'HandHeart': return <HandHeart className="w-5 h-5" />;
      default: return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      
      {/* 1. PAGE HEADER */}
      <section className="pt-12 sm:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Web Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Services designed to help you stand out and sell.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            From modern business websites to high-converting online stores and custom landing pages, we engineer digital experiences that drive real business results.
          </p>
        </div>
      </section>

      {/* 2. SIX DETAILED SERVICE BLOCKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-8 flex flex-col justify-between hover:shadow-lg hover:border-blue-500/30 transition-all duration-200 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {getServiceIcon(service.id)}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 dark:border-gray-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Turnaround: {service.turnaround}</span>
                  </span>
                </div>
                <a
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INDUSTRIES WE SERVE GRID */}
      <section className="bg-[#F5F6F8] dark:bg-[#111827]/70 py-16 sm:py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Versatile Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Every business model is different. We tailor the navigation, features, and visual style to your specific sector.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES_SERVED.map((ind) => (
              <div
                key={ind.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#161F30] border border-gray-200/80 dark:border-gray-800 shadow-2xs hover:shadow-md hover:border-blue-500/30 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  {getIndustryIcon(ind.icon)}
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  {ind.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {ind.description}
                </p>
                <div className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
                  Focus: {ind.popularFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRICING SECTION (3 Plans with Middle 'Most Popular') */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Clear, Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Simple, honest pricing.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            No surprise add-ons. No hidden monthly platform locks. You own 100% of your code and domain.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-white dark:bg-[#111827] border-2 border-blue-600 dark:border-blue-500 shadow-xl lg:-translate-y-2'
                  : 'bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 shadow-xs'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-sm">
                  ★ Most Popular
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 min-h-[36px]">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 pb-6 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-black text-gray-900 dark:text-white font-heading">
                      {plan.price}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Included in this plan:
                  </span>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-700 dark:text-gray-300">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <a
                  href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.isPopular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white text-gray-900 dark:text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Everything you need to know about working with IAB.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-800/60"
                >
                  <span className="font-semibold text-base text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gray-900 text-white p-8 sm:p-12 lg:p-16 border border-gray-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Let&apos;s build something great for your business.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Share your project requirements with Mayank Singh. We will guide you with honest advice and a transparent roadmap.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="/contact"
              className="px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              Get Started Now
            </a>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

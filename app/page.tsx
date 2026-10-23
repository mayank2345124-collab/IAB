'use client';

import { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Zap, 
  Smartphone, 
  Search, 
  ShieldCheck, 
  Star, 
  MessageSquare,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Layout,
  Briefcase,
  ShoppingBag,
  Target
} from 'lucide-react';
import { 
  SITE_CONFIG, 
  TRUST_LOGOS, 
  STATS, 
  WHY_IAB, 
  PROCESS_STEPS, 
  SERVICES_DATA, 
  PORTFOLIO_PROJECTS, 
  TESTIMONIALS 
} from '@/lib/site-data';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'clinic' | 'cafe' | 'ecommerce'>('clinic');

  const previews = {
    clinic: {
      name: "Dr. Sharma's Dental Care",
      url: 'drsharmaclinic.in',
      tag: 'Healthcare Clinic',
      metric: '+180% Patient Bookings',
      speed: '0.8s load time',
      bgImg: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    },
    cafe: {
      name: 'The Artisan Roast Cafe',
      url: 'artisanroast.in',
      tag: 'Restaurant & Dining',
      metric: '+240% Direct Reservations',
      speed: '1.0s load time',
      bgImg: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    },
    ecommerce: {
      name: 'Velour Minimal Apparel',
      url: 'velourstudio.shop',
      tag: 'E-commerce Brand',
      metric: '3.8% Conversion Rate',
      speed: '0.9s load time',
      bgImg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    },
  };

  const currentPreview = previews[activeTab];

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/80 dark:border-blue-900/50">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Web Design & Development Agency &middot; Delhi, India</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.12]">
                We build websites that help your business{' '}
                <span className="text-blue-600 dark:text-blue-500 underline decoration-blue-200 dark:decoration-blue-900/60 decoration-wavy decoration-2">
                  grow.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Fast, modern, and mobile-friendly websites designed for local shops, clinics, restaurants, startups, and e-commerce stores.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600 shadow-xs transition-all duration-200 active:scale-95"
                >
                  <span>View Our Work</span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </a>
              </div>

              {/* Founder reassurance note */}
              <div className="pt-4 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-900 bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                    MS
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-900 bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                    ★
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Led directly by {SITE_CONFIG.founderTitle}
                  </p>
                  <p>100% upfront quote &middot; No locked-in contracts &middot; Fast delivery</p>
                </div>
              </div>
            </div>

            {/* Right: Clean Browser-Window Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] shadow-xl overflow-hidden transition-all duration-300">
                
                {/* Browser Chrome Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/90">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block"></span>
                  </div>

                  {/* Browser Address Bar */}
                  <div className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/70 text-gray-600 dark:text-gray-300 w-3/5 truncate">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="truncate">https://{currentPreview.url}</span>
                  </div>

                  <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                    Live
                  </span>
                </div>

                {/* Tab switchers to show real multi-industry versatility */}
                <div className="flex border-b border-gray-100 dark:border-gray-800 bg-gray-100/50 dark:bg-gray-900/50 p-1.5 gap-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab('clinic')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'clinic'
                        ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-xs'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
                    }`}
                  >
                    Clinic
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('cafe')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'cafe'
                        ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-xs'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
                    }`}
                  >
                    Cafe
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('ecommerce')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'ecommerce'
                        ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-xs'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
                    }`}
                  >
                    Store
                  </button>
                </div>

                {/* Mockup Screen Content */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-950">
                  <img
                    src={currentPreview.bgImg}
                    alt={currentPreview.name}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-600 text-white w-max mb-1.5">
                      {currentPreview.tag}
                    </span>
                    <h3 className="text-lg font-bold">{currentPreview.name}</h3>
                    
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-200">
                      <span className="flex items-center gap-1 font-medium text-emerald-400">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {currentPreview.metric}
                      </span>
                      <span>&middot;</span>
                      <span className="flex items-center gap-1 text-gray-300">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        {currentPreview.speed}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom preview banner */}
                <div className="p-3.5 bg-white dark:bg-gray-900 flex items-center justify-between text-xs">
                  <span className="text-gray-500 dark:text-gray-400">
                    Custom responsive build by <strong>IAB</strong>
                  </span>
                  <a
                    href="/portfolio"
                    className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>View 9+ Projects</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="border-y border-gray-200 dark:border-gray-800/80 bg-gray-50/60 dark:bg-[#111827]/40 py-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 dark:text-gray-400">
            Trusted by businesses across industries
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {TRUST_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-200/60 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-2xs group hover:border-blue-500/30 transition-colors"
              >
                <span className="font-bold text-sm tracking-tight text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {logo.name}
                </span>
                <span className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                  {logo.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW (3 Cards linking to Services page) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Website solutions tailored to your goals.
            </h2>
          </div>
          <a
            href="/services"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>Explore all 6 services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-8 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.id === 'business-websites' && <Briefcase className="w-6 h-6" />}
                  {service.id === 'ecommerce-stores' && <ShoppingBag className="w-6 h-6" />}
                  {service.id === 'landing-pages' && <Target className="w-6 h-6" />}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                  {service.turnaround}
                </span>
                <a
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Details</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY IAB (4 Points & Stat Counters) */}
      <section className="bg-[#F5F6F8] dark:bg-[#111827]/70 py-16 sm:py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Why Partner With IAB
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Built right. Delivered on time.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              We eliminate technical confusion with clear communication, honest timelines, and results you can see.
            </p>
          </div>

          {/* 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_IAB.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white dark:bg-[#161F30] border border-gray-200/80 dark:border-gray-800 shadow-2xs hover:border-blue-500/40 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  {item.icon === 'Zap' && <Zap className="w-5 h-5" />}
                  {item.icon === 'Smartphone' && <Smartphone className="w-5 h-5" />}
                  {item.icon === 'Search' && <Search className="w-5 h-5" />}
                  {item.icon === 'ShieldCheck' && <ShieldCheck className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0B0F19] p-8 shadow-xs">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-800">
              {STATS.map((stat, i) => (
                <div key={stat.label} className={i > 0 ? 'pt-6 lg:pt-0' : ''}>
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-500 font-heading">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR PROCESS (4-Step Timeline) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Our 4-Step Process
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            From first conversation to final launch, we keep everything simple, structured, and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-mono text-blue-600 dark:text-blue-400">
                    {step.step}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                    Phase {idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FEATURED WORK (3 Portfolio Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Recent Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Featured work that speaks for itself.
            </h2>
          </div>
          <a
            href="/portfolio"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>See all 9 case studies</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-white/95 dark:bg-gray-900/90 text-gray-900 dark:text-white shadow-xs">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {project.summary}
                </p>

                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <span>{project.result.split(';')[0]}</span>
                  <a
                    href={`/portfolio#${project.id}`}
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Read case</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TESTIMONIALS (3 Client Quotes) */}
      <section className="bg-[#F5F6F8] dark:bg-[#111827]/70 py-16 sm:py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Loved by business owners.
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Here is what founders and clinic directors say about working with IAB.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#161F30] flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                      {t.author}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL-TO-ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 sm:p-12 lg:p-16 shadow-xl">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-blue-100 border border-white/20">
              Get Started Today
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Ready to build your website?
            </h2>
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
              Tell us about your business. We will send you a clear, fixed-price proposal and timeline within 24 hours.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-blue-600 bg-white hover:bg-gray-100 shadow-md transition-all active:scale-95"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <p className="text-xs text-blue-200">
              Direct consultation with {SITE_CONFIG.founderTitle} &middot; Delhi, India
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

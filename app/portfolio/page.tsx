'use client';

import { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Filter, 
  MessageSquare, 
  TrendingUp, 
  X, 
  Check, 
  ChevronRight,
  Layers
} from 'lucide-react';
import { SITE_CONFIG, PORTFOLIO_PROJECTS, ProjectItem } from '@/lib/site-data';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'business' | 'ecommerce' | 'restaurant' | 'startup'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'business', label: 'Business' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'startup', label: 'Startup' },
  ] as const;

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const featuredCaseStudy = PORTFOLIO_PROJECTS[0]; // Dr. Sharma's Clinic

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      
      {/* 1. PAGE HEADER */}
      <section className="pt-12 sm:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Client Work</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Websites that elevate brands and deliver measurable growth.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Explore our recent client websites built across healthcare, retail, hospitality, tech startups, and professional services.
          </p>
        </div>
      </section>

      {/* 2. CASE-STUDY HIGHLIGHT (Challenge, Solution, Result) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-[#F5F6F8] dark:bg-[#161F30] overflow-hidden p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
                <span>Featured Case Study</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                {featuredCaseStudy.title}
              </h2>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {featuredCaseStudy.summary}
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-white dark:bg-[#111827] border border-gray-200/80 dark:border-gray-800/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-500 block mb-1">
                    The Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {featuredCaseStudy.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#111827] border border-gray-200/80 dark:border-gray-800/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                    The IAB Solution
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {featuredCaseStudy.solution}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                    The Result
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-900 dark:text-emerald-200">
                    {featuredCaseStudy.result}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedProject(featuredCaseStudy)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Client: {featuredCaseStudy.client}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700/80 group">
                <img
                  src={featuredCaseStudy.image}
                  alt={featuredCaseStudy.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-emerald-600 text-white">
                      {featuredCaseStudy.liveBadge}
                    </span>
                    <h3 className="text-lg font-bold">{featuredCaseStudy.title}</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FILTER BUTTONS & RESPONSIVE 9-PROJECT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Controls header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-gray-200 dark:border-gray-800 pb-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Project Directory</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredProjects.length} of {PORTFOLIO_PROJECTS.length} verified projects
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs font-semibold'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] overflow-hidden group hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Hover Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-white/95 dark:bg-gray-900/90 text-gray-900 dark:text-white shadow-xs">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Overlay with "View Project" link */}
                  <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 backdrop-blur-2xs">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider text-blue-950 bg-white shadow-lg hover:bg-gray-100 transition-transform active:scale-95 flex items-center gap-2"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {project.client}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-800/80 mt-4 flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {project.liveBadge}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Case</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MODAL FOR DETAILED PROJECT PREVIEW */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in"
        >
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
              className="absolute top-5 right-5 p-2 rounded-xl text-gray-500 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                {selectedProject.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Client: {selectedProject.client} &middot; Built by {SITE_CONFIG.companyName}
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-gray-100 dark:bg-gray-800">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                  Project Overview
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Challenge
                </span>
                <p className="text-gray-700 dark:text-gray-300">{selectedProject.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 space-y-1 border border-blue-100 dark:border-blue-900/50">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Solution Delivered
                </span>
                <p className="text-gray-800 dark:text-gray-200">{selectedProject.solution}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 space-y-1 border border-emerald-100 dark:border-emerald-900/50">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Impact & Result
                </span>
                <p className="font-semibold text-emerald-900 dark:text-emerald-200">
                  {selectedProject.result}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4">
              <a
                href={`/contact?project=${encodeURIComponent(selectedProject.title)}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
              >
                <span>Request a Similar Website</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 text-white p-8 sm:p-12 lg:p-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Want a high-impact website like these?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base">
              Get in touch with Mayank Singh. We build websites that turn first-time visitors into loyal customers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="/contact"
              className="px-6 py-3.5 rounded-xl font-semibold text-blue-600 bg-white hover:bg-gray-100 transition-colors shadow-sm"
            >
              Start Your Project
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

import { Mail, Phone, MapPin, Clock, ArrowUpRight, Heart } from 'lucide-react';
import { SITE_CONFIG, SERVICES_DATA } from '@/lib/site-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0B0F19] text-gray-600 dark:text-gray-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="inline-flex items-baseline">
              <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white font-heading">
                IAB
              </span>
              <span className="w-2 h-2 ml-0.5 rounded-full bg-blue-600 dark:bg-blue-500 inline-block"></span>
            </a>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-sm">
              {SITE_CONFIG.tagline} We design and develop clean, modern, and high-performing websites that help businesses establish trust, attract local customers, and grow sales.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 text-xs font-medium text-gray-800 dark:text-gray-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Available for new projects &middot; Quick turnaround</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900 dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Portfolio & Work
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact & Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Services list */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900 dark:text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href={`/services#${service.id}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm">
              <div className="font-medium text-gray-900 dark:text-white">
                {SITE_CONFIG.founderTitle}
              </div>

              <div>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{SITE_CONFIG.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="truncate">{SITE_CONFIG.email}</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>{SITE_CONFIG.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>
            &copy; {currentYear} {SITE_CONFIG.companyName}. All rights reserved. Crafted by {SITE_CONFIG.founderTitle}.
          </p>
          <div className="flex items-center gap-6">
            <a href="/services" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Privacy & Quality Standards
            </a>
            <a href="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

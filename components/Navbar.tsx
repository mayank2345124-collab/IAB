'use client';

import { useState } from 'react';
import Link from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { SITE_CONFIG } from '@/lib/site-data';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <div className="flex items-baseline">
              <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white font-heading">
                IAB
              </span>
              <span className="w-2 h-2 ml-0.5 rounded-full bg-blue-600 dark:bg-blue-500 inline-block animate-pulse"></span>
            </div>
            <span className="hidden md:inline-block text-xs font-medium text-gray-500 dark:text-gray-400 pl-2 border-l border-gray-200 dark:border-gray-800">
              Websites built for every business
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-200 shadow-sm hover:shadow active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0B0F19] px-4 pt-3 pb-6 space-y-3 transition-colors duration-200">
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    active
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 font-semibold'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span>{item.name}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>}
                </a>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2">
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <PhoneCall className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Call: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

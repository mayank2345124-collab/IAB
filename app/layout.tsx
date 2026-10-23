import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SITE_CONFIG } from '@/lib/site-data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iab-web.com'),
  title: {
    default: 'IAB | Websites Built for Every Business | Web Design & Development',
    template: '%s | IAB Web Design',
  },
  description:
    'IAB builds modern, clean, and high-converting websites for local shops, restaurants, clinics, startups, e-commerce stores, and consultants. Founded by Mayank Singh, Delhi, India.',
  keywords: [
    'web design company',
    'web development Delhi',
    'business websites',
    'e-commerce store development',
    'landing page design',
    'Mayank Singh IAB',
    'affordable web design India',
  ],
  authors: [{ name: SITE_CONFIG.founderTitle, url: 'mailto:' + SITE_CONFIG.email }],
  openGraph: {
    title: 'IAB - Websites built for every business.',
    description:
      'Modern, clean, minimal, and fully responsive websites tailored for local shops, restaurants, clinics, startups, and e-commerce stores.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IAB Web Design & Development',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IAB - Websites built for every business.',
    description:
      'Modern, clean, minimal, and fully responsive websites tailored for local shops, restaurants, clinics, startups, and e-commerce stores.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'IAB - Web Design & Development',
  alternateName: 'IAB',
  description: 'Websites built for every business. Clean, modern, and high-converting web design and development.',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  telephone: SITE_CONFIG.phoneDisplay,
  email: SITE_CONFIG.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressCountry: 'India',
  },
  founder: {
    '@type': 'Person',
    name: 'Mayank Singh',
    jobTitle: 'Founder',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  sameAs: [
    'https://wa.me/917827853747',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        {/* Anti-FOUC Theme Initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('iab-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* LocalBusiness Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#0B0F19] text-gray-900 dark:text-gray-100 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

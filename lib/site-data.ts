export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string;
  turnaround: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  popularFor: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'business' | 'ecommerce' | 'restaurant' | 'startup';
  categoryLabel: string;
  client: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  liveBadge: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  location: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  companyName: 'IAB',
  tagline: 'Websites built for every business.',
  founder: 'Mayank Singh',
  founderTitle: 'Mayank Singh, Founder',
  phoneDisplay: '+91 78278 53747',
  phoneRaw: '+917827853747',
  email: 'mayank2345124@gmail.com',
  location: 'Delhi, India',
  workingHours: 'Mon - Sat, 10:00 AM - 7:00 PM IST',
  whatsappUrl: 'https://wa.me/917827853747?text=Hi%20IAB%2C%20I%27d%20like%20to%20know%20more%20about%20your%20website%20services.',
};

export const TRUST_LOGOS = [
  { name: 'Apex Care Clinic', industry: 'Healthcare' },
  { name: 'Spice & Stone Bistro', industry: 'Hospitality' },
  { name: 'UrbanCraft Apparel', industry: 'Retail' },
  { name: 'Zenith SaaS Studio', industry: 'Tech Startup' },
  { name: 'Astra Legal Advisors', industry: 'Consultancy' },
];

export const STATS = [
  { value: '100+', label: 'Projects Completed', sublabel: 'Across 12+ industries' },
  { value: '50+', label: 'Happy Clients', sublabel: 'India & International' },
  { value: '5.0 ★', label: 'Client Rating', sublabel: 'Proven satisfaction' },
  { value: '99.9%', label: 'Uptime & Speed', sublabel: 'Under 1.5s load time' },
];

export const WHY_IAB = [
  {
    title: 'Fast Delivery',
    desc: 'Get your website live in as little as 5 to 10 days without cutting corners.',
    icon: 'Zap',
  },
  {
    title: 'Mobile-First',
    desc: 'Over 70% of web traffic is mobile. We ensure flawless browsing on phones and tablets.',
    icon: 'Smartphone',
  },
  {
    title: 'SEO-Ready',
    desc: 'Clean code, high Google PageSpeed scores, and structured data so local customers find you.',
    icon: 'Search',
  },
  {
    title: 'Affordable',
    desc: 'Clear, transparent pricing with no hidden monthly retainers or surprise agency fees.',
    icon: 'ShieldCheck',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    desc: 'We learn your business goals, target audience, and required features through a quick briefing.',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'We craft modern, wireframed layouts and interactive UI tailored to your brand identity.',
  },
  {
    step: '03',
    title: 'Develop',
    desc: 'We build responsive, ultra-fast code with clean navigation, lead forms, and integrations.',
  },
  {
    step: '04',
    title: 'Launch',
    desc: 'We test across devices, setup domain & SSL, optimize for search engines, and hand over keys.',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    shortDesc: 'Credible, modern online presence for service firms, doctors, clinics, and consultants.',
    description: 'Transform visitors into qualified inquiries with clean, professional corporate websites that position you as an established leader in your field.',
    icon: 'Briefcase',
    features: [
      'Multi-page responsive architecture',
      'Lead capture forms & WhatsApp CTA',
      'Google Maps & LocalBusiness schema',
      'SSL security and ultra-fast hosting setup',
      'Interactive service menus & staff profiles',
    ],
    deliverables: 'Complete corporate site + CMS handover + 30-day warranty',
    turnaround: '7 - 10 Days',
  },
  {
    id: 'ecommerce-stores',
    title: 'E-commerce Stores',
    shortDesc: 'High-converting online stores built for seamless checkout, catalog management, and sales.',
    description: 'Sell physical or digital goods with fast product browsing, secure payment gateways (Razorpay, Stripe, UPI), automated order notifications, and inventory control.',
    icon: 'ShoppingBag',
    features: [
      'Product catalog with filtering & search',
      'Mobile-optimized cart & one-click checkout',
      'Integrated payment gateways (UPI, Cards, NetBanking)',
      'Order tracking & automated email alerts',
      'Inventory & discount coupon engine',
    ],
    deliverables: 'Full e-commerce platform + payment setup + admin training',
    turnaround: '14 - 21 Days',
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    shortDesc: 'Laser-focused sales & campaign pages engineered for paid ads and high conversion rates.',
    description: 'Maximized return on ad spend (Google Ads, Meta Ads) through distraction-free layouts, convincing social proof, and clear calls-to-action.',
    icon: 'Target',
    features: [
      'High-converting single-page sales funnel',
      'Sub-second page loading speed',
      'A/B test ready structure',
      'Direct CRM / WhatsApp / Email lead routing',
      'Sticky action bars for mobile users',
    ],
    deliverables: 'High-converting landing page + analytics tracking setup',
    turnaround: '3 - 5 Days',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDesc: 'Thoughtful visual systems, wireframes, and design prototypes tailored to your customers.',
    description: 'We craft human-centric interfaces in Figma that simplify user journeys, elevate visual trust, and ensure development is smooth and cost-efficient.',
    icon: 'Layout',
    features: [
      'User journey mapping & information architecture',
      'High-fidelity interactive Figma prototypes',
      'Design systems & typography guidelines',
      'Accessibility (WCAG) compliant color contrast',
      'Developer-ready asset export packages',
    ],
    deliverables: 'Complete Figma file + interactive prototype + style guide',
    turnaround: '7 - 12 Days',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    shortDesc: 'Modernize dated websites to improve mobile speed, SEO rankings, and fresh visual appeal.',
    description: 'Breathe new life into an outdated website. We fix slow loading speeds, refresh old design aesthetics, and improve user retention while protecting existing SEO rankings.',
    icon: 'RefreshCw',
    features: [
      'Comprehensive audit of your existing website',
      '301 redirect mapping to protect Google rankings',
      'Modern, minimal visual overhaul',
      '90+ Google PageSpeed mobile score target',
      'Conversion rate optimization (CRO) improvements',
    ],
    deliverables: 'Modernized website + SEO preservation report + speed audit',
    turnaround: '7 - 14 Days',
  },
  {
    id: 'seo-and-maintenance',
    title: 'SEO and Maintenance',
    shortDesc: 'Keep your website secure, blazing fast, updated, and ranking high on Google search.',
    description: 'Hassle-free technical maintenance, security monitoring, regular content updates, and ongoing search engine optimization so your business stays visible and safe.',
    icon: 'TrendingUp',
    features: [
      'On-page SEO optimization & metadata tuning',
      'Monthly security audits & uptime monitoring',
      'Core Web Vitals health reports',
      'Content & banner updates upon request',
      'Automated weekly off-site backups',
    ],
    deliverables: 'Ongoing monthly care + technical support priority',
    turnaround: 'Continuous Support',
  },
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'restaurants',
    name: 'Restaurants & Cafes',
    icon: 'Utensils',
    description: 'Digital food menus, table reservation forms, online order redirection, and mouthwatering food photography galleries.',
    popularFor: 'Menus, reservations, location maps',
  },
  {
    id: 'retail',
    name: 'Retail & Boutiques',
    icon: 'Store',
    description: 'Clean storefronts displaying products, opening hours, local pickup options, and WhatsApp direct ordering.',
    popularFor: 'Product showcases, store directions, catalogs',
  },
  {
    id: 'healthcare',
    name: 'Clinics & Healthcare',
    icon: 'HeartPulse',
    description: 'Doctor profiles, appointment booking forms, service listings, patient reviews, and emergency contact highlights.',
    popularFor: 'Appointments, doctor profiles, treatments',
  },
  {
    id: 'education',
    name: 'Education & Coaching',
    icon: 'GraduationCap',
    description: 'Course catalogs, admission inquiry forms, downloadable brochures, faculty info, and batch schedules.',
    popularFor: 'Course details, student inquiries, syllabus downloads',
  },
  {
    id: 'realestate',
    name: 'Real Estate & Builders',
    icon: 'Building2',
    description: 'Property floor plans, amenity galleries, virtual tour embeds, site visit booking, and brochure requests.',
    popularFor: 'Property listings, brochure leads, site visits',
  },
  {
    id: 'startups',
    name: 'Tech Startups & SaaS',
    icon: 'Rocket',
    description: 'Product feature walkthroughs, animated UI mockups, interactive pricing tables, and waitlist collection.',
    popularFor: 'Product launches, demo requests, investor decks',
  },
  {
    id: 'consultants',
    name: 'Consultants & Agencies',
    icon: 'Users',
    description: 'Authority-building case studies, personal brand bios, Calendly integration, and detailed client testimonials.',
    popularFor: 'Consultation booking, case studies, portfolios',
  },
  {
    id: 'nonprofits',
    name: 'Nonprofits & NGOs',
    icon: 'HandHeart',
    description: 'Impact stories, transparent mission statements, donation links, volunteer registrations, and annual reports.',
    popularFor: 'Donations, volunteer signup, mission awareness',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    price: '₹14,999',
    period: 'one-time',
    description: 'Perfect for local shops, individual professionals, and small businesses needing a clean online presence.',
    isPopular: false,
    features: [
      'Up to 3 custom responsive pages',
      'Mobile-first responsive design',
      'Contact form + WhatsApp direct chat',
      'Google Maps & basic on-page SEO',
      'Free SSL security configuration',
      'Delivered in 5 - 7 business days',
      '1 month complimentary technical support',
    ],
    ctaText: 'Choose Starter',
  },
  {
    id: 'business',
    name: 'Business Plan',
    price: '₹27,999',
    period: 'one-time',
    description: 'Best for established businesses, clinics, restaurants, and startups looking to generate steady leads.',
    isPopular: true,
    features: [
      'Up to 7 custom responsive pages',
      'Interactive UI animations & custom layouts',
      'Lead capture funnel with email routing',
      'LocalBusiness Schema & full SEO audit',
      'Blog or dynamic news/services setup',
      'Speed optimization (90+ PageSpeed score)',
      'Delivered in 8 - 12 business days',
      '3 months complimentary technical support',
    ],
    ctaText: 'Choose Business',
  },
  {
    id: 'premium',
    name: 'Custom & E-Commerce',
    price: '₹44,999',
    period: 'starting price',
    description: 'Tailored for online stores, high-traffic catalogs, custom web apps, and scale-up businesses.',
    isPopular: false,
    features: [
      'Unlimited pages & custom product catalog',
      'Payment gateway integration (UPI/Cards)',
      'Custom user workflows & cart experience',
      'CRM & newsletter automation setup',
      'Advanced search & product filtering',
      'Speed & security hardening guarantee',
      'Delivered in 15 - 20 business days',
      '6 months priority maintenance & updates',
    ],
    ctaText: 'Choose Custom',
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'dr-sharma-clinic',
    title: "Dr. Sharma's Dental Care",
    category: 'business',
    categoryLabel: 'Clinic / Healthcare',
    client: "Dr. Sharma's Clinic, Delhi",
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    summary: 'A warm, welcoming healthcare portal with instant WhatsApp booking and transparent service pricing.',
    challenge: 'High phone drop-off rate and patients asking repetitive questions regarding service fees and timings.',
    solution: 'Designed an interactive treatment guide, doctor bio, one-tap appointment scheduler, and Google Maps directions.',
    result: 'Increased patient inquiries by 180% within the first month and reduced receptionist call overhead by 45%.',
    liveBadge: 'Live Website',
    tags: ['Healthcare', 'Appointment Booking', 'Local SEO'],
  },
  {
    id: 'artisan-roast-cafe',
    title: 'The Artisan Roast Coffee',
    category: 'restaurant',
    categoryLabel: 'Restaurant & Cafe',
    client: 'Artisan Roast, Connaught Place',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    summary: 'A warm visual experience featuring digital menu cards, table reservations, and event catering inquiries.',
    challenge: 'Relying exclusively on third-party delivery apps with hefty commission fees and zero direct customer data.',
    solution: 'Built a mouthwatering, visual-first website with interactive menu categories and direct WhatsApp table booking.',
    result: 'Direct weekend table reservations grew by 240%, eliminating aggregator commission on table bookings.',
    liveBadge: 'Live Website',
    tags: ['Restaurant', 'QR Menu', 'Table Booking'],
  },
  {
    id: 'velour-studio-fashion',
    title: 'Velour Minimal Apparel',
    category: 'ecommerce',
    categoryLabel: 'E-commerce Store',
    client: 'Velour Studio',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    summary: 'An aesthetic direct-to-consumer store with seamless Razorpay UPI checkout and quick size guide popups.',
    challenge: 'Previous WordPress store was sluggish (5s+ load time) and suffered high cart abandonment on mobile.',
    solution: 'Engineered a lightweight modern storefront with sub-second page transitions and 2-step streamlined checkout.',
    result: 'Page load time dropped to 0.9s; mobile conversion rate jumped from 1.2% to 3.8%.',
    liveBadge: 'Live Website',
    tags: ['E-commerce', 'Payment Gateway', 'Fast Checkout'],
  },
  {
    id: 'zenith-ai-saas',
    title: 'Zenith Logistics AI',
    category: 'startup',
    categoryLabel: 'Tech Startup / SaaS',
    client: 'Zenith Tech Labs',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    summary: 'Futuristic product landing page showcasing enterprise supply-chain telemetry with live interactive demos.',
    challenge: 'Needed to pitch enterprise supply-chain partners with an institutional, trustworthy SaaS presentation.',
    solution: 'Built sleek dark-mode interactive product diagrams, pricing tier calculators, and Calendly sales call integrations.',
    result: 'Attracted 42 qualified enterprise trial signups within 3 weeks of seed funding announcement.',
    liveBadge: 'Live Website',
    tags: ['SaaS', 'Dark Mode UI', 'Lead Funnel'],
  },
  {
    id: 'apex-legal-counsel',
    title: 'Verma & Associates Legal',
    category: 'business',
    categoryLabel: 'Corporate / Legal',
    client: 'Verma Legal Counsel, Delhi',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    summary: 'Dignified corporate presence establishing legal expertise across corporate compliance and tax disputes.',
    challenge: 'Outdated 2012 static HTML page that looked broken on smartphones and gave an obsolete impression.',
    solution: 'Created an authoritative editorial layout with partner biographies, practice area guides, and client inquiry forms.',
    result: 'Ranked #1 in Delhi for corporate compliance consultancy queries on Google Local search.',
    liveBadge: 'Live Website',
    tags: ['Corporate', 'Consultancy', 'SEO Schema'],
  },
  {
    id: 'urban-nest-homes',
    title: 'Urban Nest Luxury Properties',
    category: 'business',
    categoryLabel: 'Real Estate',
    client: 'Urban Nest Living',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    summary: 'High-end property brochure site with interactive floor plans, neighborhood highlights, and private tour booking.',
    challenge: 'High cost of printed brochures that went out of date whenever property units were sold out.',
    solution: 'Designed a dynamic digital brochure featuring unit availability statuses and WhatsApp tour confirmations.',
    result: 'Saved ₹1.8 Lakhs on print collateral; 60% of inquiries converted to in-person walkthroughs.',
    liveBadge: 'Live Website',
    tags: ['Real Estate', 'Gallery', 'Lead Capture'],
  },
  {
    id: 'fresh-roots-organics',
    title: 'Fresh Roots Farm Store',
    category: 'ecommerce',
    categoryLabel: 'E-commerce / Grocery',
    client: 'Fresh Roots Farm',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    summary: 'Farm-to-fork subscription and direct delivery store with zip-code delivery check and weekly vegetable boxes.',
    challenge: 'Managing recurring subscriber deliveries manually via WhatsApp chat was leading to missed shipments.',
    solution: 'Built an intuitive subscription picker with automated recurring delivery slots and UPI auto-pay.',
    result: 'Managed over 450 weekly active households with zero manual dispatch errors.',
    liveBadge: 'Live Website',
    tags: ['E-commerce', 'Subscriptions', 'Local Delivery'],
  },
  {
    id: 'trident-cloud-services',
    title: 'Trident Cloud DevOps',
    category: 'startup',
    categoryLabel: 'Startup / IT Services',
    client: 'Trident Cloud Infotech',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    summary: 'Crisp developer-focused platform explaining Kubernetes migration and 24/7 cloud infrastructure management.',
    challenge: 'Complex technical services were difficult for non-technical company founders to understand.',
    solution: 'Structured clear visual comparison tables, customer case metrics, and an instant architecture audit booking tool.',
    result: 'Increased qualified inbound consultations by 65% from international clients.',
    liveBadge: 'Live Website',
    tags: ['DevOps', 'B2B', 'Tech Architecture'],
  },
  {
    id: 'saffron-terrace-dining',
    title: 'Saffron Terrace Fine Dine',
    category: 'restaurant',
    categoryLabel: 'Restaurant / Fine Dining',
    client: 'Saffron Terrace, South Delhi',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    summary: 'Sensory dining portal showcasing rooftop ambiance, seasonal chef specials, and private celebration reservations.',
    challenge: 'Diners wanted to view private cabana seating options before reserving for anniversaries and birthdays.',
    solution: 'Crafted a 360-degree photography carousel, curated tasting menu preview, and direct concierge chat.',
    result: 'Weekend private cabana reservations were fully booked 3 weeks in advance throughout peak season.',
    liveBadge: 'Live Website',
    tags: ['Fine Dining', 'Private Events', 'Luxury UI'],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Dr. Alok Sharma',
    role: 'Chief Dental Surgeon',
    company: "Dr. Sharma's Clinic",
    rating: 5,
    location: 'Delhi, India',
    quote: 'Mayank and the IAB team delivered our clinic website in just 7 days. Our patients find it effortless to book appointments on mobile, and our Google inquiries have doubled. Honest, fast, and remarkably professional.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 'test-2',
    author: 'Kunal Singhania',
    role: 'Founder & Head Roaster',
    company: 'The Artisan Roast',
    rating: 5,
    location: 'Connaught Place, Delhi',
    quote: 'IAB understood exactly what we needed. Clean aesthetics, zero clutter, and direct WhatsApp table bookings that bypass third-party food app fees. The site runs blisteringly fast on 4G phones.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 'test-3',
    author: 'Priya Mehra',
    role: 'Creative Director',
    company: 'Velour Studio',
    rating: 5,
    location: 'Delhi, India',
    quote: 'We were tired of slow bloated templates. Mayank built us a sleek, minimal e-commerce experience with instantaneous checkout. Our sales conversion jumped right after launch. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to build and launch my website?',
    answer: 'Most business websites take between 5 to 10 working days from kickoff to launch. More comprehensive e-commerce stores or custom web applications typically take 14 to 21 days depending on your catalog size.',
  },
  {
    id: 'faq-2',
    question: 'Will my website work smoothly on all mobile phones and tablets?',
    answer: 'Absolutely. Over 70% of web traffic today is mobile. Every website we build is rigorously tested on iOS, Android, tablets, laptops, and desktop screens for flawless responsiveness and speed.',
  },
  {
    id: 'faq-3',
    question: 'Do you help with domain name registration and hosting setup?',
    answer: 'Yes! We handle domain DNS configuration, high-speed cloud hosting setup, SSL security certificates, and business email routing so you do not have to worry about the technical details.',
  },
  {
    id: 'faq-4',
    question: 'Can I update the text, images, or products later on my own?',
    answer: 'Yes. We build clean, modular websites and provide you with a straightforward walkthrough. You can easily add new photos, update prices, edit text, or publish blog posts whenever you wish.',
  },
  {
    id: 'faq-5',
    question: 'Are there any hidden monthly charges or locked contracts?',
    answer: 'No. Our pricing is 100% upfront and transparent with no hidden recurring platform lock-in fees. You fully own your website, code, domain, and content once launched.',
  },
];

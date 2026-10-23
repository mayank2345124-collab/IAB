export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  serviceNeeded: string;
  budgetRange: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(data: Partial<ContactFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name (minimum 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  const phoneDigits = (data.phone || '').replace(/[^\d+]/g, '');
  if (!phoneDigits || phoneDigits.length < 8) {
    errors.phone = 'Please provide a valid phone or WhatsApp number.';
  }

  if (!data.businessType || data.businessType.trim() === '') {
    errors.businessType = 'Please select your business type.';
  }

  if (!data.serviceNeeded || data.serviceNeeded.trim() === '') {
    errors.serviceNeeded = 'Please select the service you require.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide a short description of your project (minimum 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateMailtoUrl(data: ContactFormData): string {
  const subject = encodeURIComponent(`Website Inquiry from ${data.name} - ${data.serviceNeeded}`);
  const body = encodeURIComponent(
`Hi Mayank & IAB Team,

I'm reaching out regarding a website project with the following details:

- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Business Type: ${data.businessType}
- Service Needed: ${data.serviceNeeded}
- Budget Range: ${data.budgetRange || 'Not specified'}

Project Overview:
${data.message}

Looking forward to hearing from you!
`
  );

  return `mailto:mayank2345124@gmail.com?subject=${subject}&body=${body}`;
}

export function generateWhatsAppMessage(data: Partial<ContactFormData>): string {
  const text = `Hi Mayank, I'm interested in website services from IAB.
Name: ${data.name || ''}
Service: ${data.serviceNeeded || 'Web Design'}
Business: ${data.businessType || 'General'}`;

  return `https://wa.me/917827853747?text=${encodeURIComponent(text)}`;
}

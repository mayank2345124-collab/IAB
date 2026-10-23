import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm, generateMailtoUrl, generateWhatsAppMessage } from './contact-validator';

test('validateContactForm identifies valid complete form data', () => {
  const result = validateContactForm({
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    phone: '+91 98765 43210',
    businessType: 'Restaurant',
    serviceNeeded: 'Business Websites',
    budgetRange: '₹25,000 - ₹50,000',
    message: 'We need a clean responsive website with digital menu and table reservation.',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateContactForm rejects invalid emails and short messages', () => {
  const result = validateContactForm({
    name: 'R',
    email: 'invalid-email',
    phone: '123',
    businessType: '',
    serviceNeeded: '',
    message: 'Hi',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.businessType);
  assert.ok(result.errors.serviceNeeded);
  assert.ok(result.errors.message);
});

test('generateMailtoUrl formats email to mayank2345124@gmail.com with subject and body', () => {
  const url = generateMailtoUrl({
    name: 'Dr. Neha',
    email: 'neha@example.com',
    phone: '+919999999999',
    businessType: 'Healthcare / Clinic',
    serviceNeeded: 'Business Websites',
    budgetRange: '₹25k - ₹50k',
    message: 'Dental clinic booking site needed.',
  });

  assert.ok(url.startsWith('mailto:mayank2345124@gmail.com'));
  assert.ok(url.includes('subject='));
  assert.ok(url.includes('Dr.+Neha') || url.includes('Dr.%20Neha'));
});

test('generateWhatsAppMessage creates valid wa.me link with phone 917827853747', () => {
  const link = generateWhatsAppMessage({
    name: 'Amit',
    serviceNeeded: 'E-commerce',
  });

  assert.ok(link.includes('https://wa.me/917827853747'));
  assert.ok(link.includes('Amit'));
});

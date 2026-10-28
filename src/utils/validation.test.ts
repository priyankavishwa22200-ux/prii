import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidEmail, validateContactForm, sanitizeInput } from './validation';

test('isValidEmail detects valid email addresses correctly', () => {
  assert.equal(isValidEmail('recruiter@techcorp.com'), true);
  assert.equal(isValidEmail('lead.engineer+test@sub.domain.io'), true);
  assert.equal(isValidEmail(''), false);
  assert.equal(isValidEmail('not-an-email'), false);
  assert.equal(isValidEmail('missing@tld'), false);
  assert.equal(isValidEmail('@nodomain.com'), false);
});

test('validateContactForm rejects empty submissions', () => {
  const result = validateContactForm({
    name: '',
    email: '',
    message: ''
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
});

test('validateContactForm rejects too short messages', () => {
  const result = validateContactForm({
    name: 'Jane Doe',
    email: 'jane@example.com',
    message: 'Hello'
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.message?.includes('10 characters'));
});

test('validateContactForm accepts valid complete payload', () => {
  const result = validateContactForm({
    name: 'Sarah Connor',
    email: 'sarah@skynet-resistance.io',
    subject: 'Senior Frontend Opportunity',
    message: 'We are very impressed by your portfolio and would love to chat!'
  });

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('sanitizeInput escapes HTML tags', () => {
  assert.equal(sanitizeInput('<script>alert(1)</script>'), '&lt;script&gt;alert(1)&lt;/script&gt;');
  assert.equal(sanitizeInput('   Hello World!   '), 'Hello World!');
});

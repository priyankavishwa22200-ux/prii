export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
}

export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  // Standard RFC 5322 compatible regex for typical email addresses
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(trimmed);
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: { name?: string; email?: string; message?: string } = {};

  const trimmedName = data.name ? data.name.trim() : '';
  if (!trimmedName) {
    errors.name = 'Please provide your name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  }

  const trimmedEmail = data.email ? data.email.trim() : '';
  if (!trimmedEmail) {
    errors.email = 'Please provide your email address.';
  } else if (!isValidEmail(trimmedEmail)) {
    errors.email = 'Please enter a valid email address (e.g. name@company.com).';
  }

  const trimmedMessage = data.message ? data.message.trim() : '';
  if (!trimmedMessage) {
    errors.message = 'Please enter a message.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message should be at least 10 characters long so I can properly assist you.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim();
}

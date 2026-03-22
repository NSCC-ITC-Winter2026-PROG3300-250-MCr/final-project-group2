// tests/validation.test.ts
import { describe, test, expect } from 'vitest';
import { validateEmail, validateName, validateMessage } from '../src/validation';

describe('Form Validation Functions', () => {
  
  test('validateEmail should return true for valid emails', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user.name@domain.co')).toBe(true);
  });

  test('validateEmail should return false for invalid emails', () => {
    expect(validateEmail('test@example')).toBe(false);
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('')).toBe(false);
  });

  test('validateName should return true for names with 2 or more characters', () => {
    expect(validateName('Jo')).toBe(true);
    expect(validateName('Random Hero')).toBe(true);
  });

  test('validateName should return false for names under 2 characters or just spaces', () => {
    expect(validateName('A')).toBe(false);
    expect(validateName('   ')).toBe(false);
    expect(validateName('')).toBe(false);
  });

  test('validateMessage should return true for messages 10 characters or longer', () => {
    expect(validateMessage('This is a valid message.')).toBe(true);
  });

  test('validateMessage should return false for short messages or spaces', () => {
    expect(validateMessage('Too short')).toBe(false);
    expect(validateMessage('         ')).toBe(false);
  });
});
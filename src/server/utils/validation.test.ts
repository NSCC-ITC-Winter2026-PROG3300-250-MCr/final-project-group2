import { describe, expect, it } from 'vitest';
import { isValidUserName, normalizeUserName } from './validation';

describe('normalizeUserName', () => {
  it('removes spaces at the start and end', () => {
    expect(normalizeUserName('   Aaron   ')).toBe('Aaron');
  });

  it('replaces multiple spaces inside the string with one space', () => {
    expect(normalizeUserName('Aaron     Hirtle')).toBe('Aaron Hirtle');
  });
});

describe('isValidUserName', () => {
  it('returns true for a valid name', () => {
    expect(isValidUserName('Aaron')).toBe(true);
  });

  it('returns false for a one-letter name', () => {
    expect(isValidUserName('A')).toBe(false);
  });

  it('returns false for a blank string', () => {
    expect(isValidUserName('   ')).toBe(false);
  });
});
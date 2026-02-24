import { test, expect } from 'vitest';
import { sum } from "../src/sum.js";

test('sum adds numbers', () => {
    expect(sum(2, 3)).toBe(5);
});

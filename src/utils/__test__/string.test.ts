import { toKebabCase } from '../string';

describe('string', () => {
  describe('toKebabCase', () => {
    test('should work', () => {
      const input = `this is an Example`;
      expect(toKebabCase(input)).toBe('this-is-an-example');
    });
  });
});

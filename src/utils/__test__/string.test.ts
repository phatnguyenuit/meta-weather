import { toKebabCase } from '../string';

describe('string', () => {
  describe('toKebabCase', () => {
    test.each`
      input                   | expected
      ${'this is an Example'} | ${'this-is-an-example'}
      ${'abc_123'}            | ${'abc-123'}
    `(
      'should return "$expected" when given "$input"',
      ({ expected, input }) => {
        expect(toKebabCase(input)).toBe(expected);
      },
    );

    // Option 2
    // const cases = [
    //   ['this-is-an-example', 'this is an Example'],
    //   ['abc-123', 'abc_123'],
    // ];

    // test.each(cases)(
    //   'should return "%s" when given "%s"',
    //   (expected, input) => {
    //     expect(toKebabCase(input)).toBe(expected);
    //   },
    // );
  });
});

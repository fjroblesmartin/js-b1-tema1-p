import '@testing-library/jest-dom';
import { tests } from '../U2/U2EJ2.js';
describe("tests", () => {
  const rangeOfNumbers = tests();
  test('checks the results of calls to the rangeOfNumbers function with the values 0, 4 and 10', () => {
    expect(rangeOfNumbers(0)).toBe(0);
    expect(rangeOfNumbers(4)).toBe(10);
    expect(rangeOfNumbers(10)).toBe(55);
  });
});

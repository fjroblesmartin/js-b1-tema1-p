import '@testing-library/jest-dom';
import { tests } from '../U5/U5EJ3.js';
describe("tests", () => {
  const planetHasRings = tests()[0];
  const result = tests()[1];
  test('checks if planetHasRings function is an Arrow Function',() => {
    expect(planetHasRings.toString().indexOf("=>")).toBeGreaterThan(0);
  });
  test('comproves that [result] is an Array', () => {
      expect(Array.isArray(result)).toBe(true);
    });
  test('comproves that [result] has 4 objects', () => {
      expect(typeof(result[0])=='object' && !Array.isArray(result[0])).toBe(true);
      expect(typeof(result[1])=='object' && !Array.isArray(result[1])).toBe(true);
      expect(typeof(result[2])=='object' && !Array.isArray(result[2])).toBe(true);
      expect(typeof(result[3])=='object' && !Array.isArray(result[3])).toBe(true);
      expect(result.length===4).toBe(true);
  });
  test('comproves that all the elements of [result] has rings', () => {
    result.forEach(element => {
      expect(element.hasRings).toBe(true);
    });
  });
});

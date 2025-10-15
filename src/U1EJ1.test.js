import '@testing-library/jest-dom';
import { tests } from '../U1/U1EJ1';
describe("tests", () => {
  const result = tests();
  test('comproves that [result] is an Array', () => {
      expect(Array.isArray(result)).toBe(true);
    });
  test('comproves that the elements of [result] are an Array', () => {
    expect(Array.isArray(result[0])).toBe(true);
    expect(Array.isArray(result[1])).toBe(true);
    expect(Array.isArray(result[2])).toBe(true);
    expect(Array.isArray(result[3])).toBe(true);
    expect(Array.isArray(result[4])).toBe(true);
    expect(Array.isArray(result[5])).toBe(true);
    expect(Array.isArray(result[6])).toBe(true);
    expect(Array.isArray(result[7])).toBe(true);
  });
  test('comproves that the elements of [result] has the name of the planet in his first position', () => {
      expect(result[0][0]).toBe('Mercury');
      expect(result[1][0]).toBe('Venus');
      expect(result[2][0]).toBe('Earth');
      expect(result[3][0]).toBe('Mars');
      expect(result[4][0]).toBe('Jupiter');
      expect(result[5][0]).toBe('Saturn');
      expect(result[6][0]).toBe('Uranus');
      expect(result[7][0]).toBe('Neptune');
    });
  test('comproves that the elements of [result] has the diameter of the planet in his second position', () => {
      expect(result[0][1]).toBe(4878);
      expect(result[1][1]).toBe(12100);
      expect(result[2][1]).toBe(12756);
      expect(result[3][1]).toBe(6787);
      expect(result[4][1]).toBe(142984);
      expect(result[5][1]).toBe(120536);
      expect(result[6][1]).toBe(51108);
      expect(result[7][1]).toBe(49538); 
    });
  });
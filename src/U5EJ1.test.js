import '@testing-library/jest-dom';
import { tests } from '../U5/U5EJ1.js';
describe("tests", () => {
  const letterGrade = tests()[0];
  const result = tests()[1];
  test('checks the result expecting to be [ "B", "A", "C", "D", "C" ]', () => {
    expect(result[0]).toBe("B");
    expect(result[1]).toBe("A");
    expect(result[2]).toBe("C");
    expect(result[3]).toBe("D");
    expect(result[4]).toBe("C");
  });
  test('checks if letterGrade function is an Arrow Function',() => {
    expect(letterGrade.toString().indexOf("=>")).toBeGreaterThan(0);
  });
});

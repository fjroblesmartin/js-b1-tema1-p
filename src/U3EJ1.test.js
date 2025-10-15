import '@testing-library/jest-dom';
import { tests } from '../U3/U3EJ1.js';
describe("tests", () => {
  const hypotenuse = tests();
  test('checks the result of call to the hypotenuse function with the values 3,4', () => {
    expect(hypotenuse(3,4)).toBe(5);
  });
  test('checks if hypotenuse function contains square function',() => {
    expect(hypotenuse.toString().indexOf("square")).toBeGreaterThan(0);
  });
});

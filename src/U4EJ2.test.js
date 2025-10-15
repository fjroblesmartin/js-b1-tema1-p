import '@testing-library/jest-dom';
import { tests } from '../U4/U4EJ2.js';
describe("tests", () => {
  const evenNumbers = tests();
  test('checks the result of call to the evenNumbers function receiving (4,7,21,3) by parameters', () => {
    let testArr = evenNumbers(4,7,21,3);
    expect(testArr.length).toBe(4);
    expect(testArr[0]).toBe(4);
    expect(testArr[1]).toBe(6);
    expect(testArr[2]).toBe(20);
    expect(testArr[3]).toBe(2);
  });
  test('checks the result of call to the evenNumbers function receiving (11, 20, 31, 40, 30, 19, 9) by parameters', () => {
    let testArr = evenNumbers(11, 20, 31, 40, 30, 19, 9);
    expect(testArr.length).toBe(7);
    expect(testArr[0]).toBe(10);
    expect(testArr[1]).toBe(20);
    expect(testArr[2]).toBe(30);
    expect(testArr[3]).toBe(40);
    expect(testArr[4]).toBe(30);
    expect(testArr[5]).toBe(18);
    expect(testArr[6]).toBe(8);
  });
});

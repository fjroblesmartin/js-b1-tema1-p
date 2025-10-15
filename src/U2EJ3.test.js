import '@testing-library/jest-dom';
import { tests } from '../U2/U2EJ3.js';
describe("tests", () => {
  const oddNumbers = tests();
  test('checks the result of call to the oddNumbers function with the values 7 and an new Array', () => {
    let testArr = new Array();
    oddNumbers(7, testArr);
    expect(testArr.length).toBe(4);
    expect(testArr[0]).toBe(7);
    expect(testArr[1]).toBe(5);
    expect(testArr[2]).toBe(3);
    expect(testArr[3]).toBe(1);
  });
});

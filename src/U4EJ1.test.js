import '@testing-library/jest-dom';
import { tests } from '../U4/U4EJ1.js';
describe("tests", () => {
  const reverseArray = tests();
  test('checks the result of call to the reverseArray function receiving (4,7,21,3) by parameters', () => {
    let testArr = reverseArray(4,7,21,3);
    expect(testArr.length).toBe(4);
    expect(testArr[0]).toBe(3);
    expect(testArr[1]).toBe(21);
    expect(testArr[2]).toBe(7);
    expect(testArr[3]).toBe(4);
  });
  test('checks the result of call to the reverseArray function receiving ("a", "b", "c", "d", "e", "f", "g") by parameters', () => {
    let testArr = reverseArray("a", "b", "c", "d", "e", "f", "g");
    expect(testArr.length).toBe(7);
    expect(testArr[0]).toBe("g");
    expect(testArr[1]).toBe("f");
    expect(testArr[2]).toBe("e");
    expect(testArr[3]).toBe("d");
    expect(testArr[4]).toBe("c");
    expect(testArr[5]).toBe("b");
    expect(testArr[6]).toBe("a");
  });
});

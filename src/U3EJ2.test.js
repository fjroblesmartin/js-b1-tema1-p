import '@testing-library/jest-dom';
import { tests } from '../U3/U3EJ2.js';
describe("tests", () => {
  const currentAge = tests();
  const classroomStudents = [
    {
        name: 'Carme',
        surname: 'Ibáñez Marchena',
        yearOfBirth: 1998,
        averageGrade: 8.3,
        repeater: false,
    },
    {
        name: 'Joan',
        surname: 'Espí Prats',
        yearOfBirth: 1999,
        averageGrade: 9.8,
        repeater: true,
    },
    {
        name: 'Maria',
        surname: 'Massats Perelló',
        yearOfBirth: 2003,
        averageGrade: 4.5,
        repeater: false,
    },
    {
        name: 'Ramon',
        surname: 'Cugat Llopis',
        yearOfBirth: 2000,
        averageGrade: 2.7,
        repeater: true,
    },
    {
        name: 'Anna',
        surname: 'Bernal Valls',
        yearOfBirth: 2002,
        averageGrade: 3.5,
        repeater: false,
    }
  ];
  test('checks the result of call to the currentAge function receiving classroomStudents by parameter', () => {
    let testArr = currentAge(classroomStudents);
    expect(testArr.length).toBe(5);
    expect(testArr[0]).toBe(25);
    expect(testArr[1]).toBe(24);
    expect(testArr[2]).toBe(20);
    expect(testArr[3]).toBe(23);
    expect(testArr[4]).toBe(21);
  });
  test('checks if currentAge function contains calculatedYears function',() => {
    expect(currentAge.toString().indexOf("calculatedYears")).toBeGreaterThan(0);
  });
});

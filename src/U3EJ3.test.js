import '@testing-library/jest-dom';
import { tests } from '../U3/U3EJ3.js';
describe("tests", () => {
  const totalApproved = tests();
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
  test('checks the result of call to the totalApproved function receiving classroomStudents by parameter', () => {
    expect(totalApproved(classroomStudents)).toBe(2);
  });
  test('checks if totalApproved function contains isApproved function',() => {
    expect(totalApproved.toString().indexOf("isApproved")).toBeGreaterThan(0);
  });
});

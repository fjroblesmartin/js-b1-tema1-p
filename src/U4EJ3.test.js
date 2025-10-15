import '@testing-library/jest-dom';
import { tests } from '../U4/U4EJ3.js';
describe("tests", () => {
  const oldest = tests();
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
  test('checks the result of call to the oldest function receiving (classroomStudents[0], classroomStudents[3]) by parameters', () => {
    let result = oldest(classroomStudents[0], classroomStudents[3]);
    expect(result).toBe("Carme");
  });
  test('checks the result of call to the oldest function receiving oldest(classroomStudents[2], classroomStudents[3], classroomStudents[4]) by parameters', () => {
    let testArr = oldest(classroomStudents[2], classroomStudents[3], classroomStudents[4]);
    expect(testArr).toBe("Ramon");
  });
});

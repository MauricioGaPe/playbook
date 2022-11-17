const StudentsService = require('./../../../src/lib/services/studentsService')

describe('Student Controller', () => {
    test('Consultando todos los estudiantes', () => {
        const resp = StudentsService.allStudentsService();
        expect(resp).not.toBe(undefined);
    });
    test('Consultando los estudiantes con certificacion', () => {
        const resp = StudentsService.studentsHaveCertification();
        expect(resp).not.toBe(undefined);
    });
    test('Consultando los estudiantes con creditos minimos', () => {
        const resp = StudentsService.studentCreditMin();
        expect(resp).not.toBe(undefined);
    });
});
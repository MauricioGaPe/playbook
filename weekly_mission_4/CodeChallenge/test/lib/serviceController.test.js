const ServiceController = require('../../src/lib/serviceController');

describe('Service Controller', () => {
    test('Consultando todos los estudiantes verdadero', () => {
        const resp = ServiceController.allStudents();
        expect(resp).not.toBe(undefined);
    });
    test('Consultando los estudiantes con certificacion verdadero', () => {
        const resp = ServiceController.studentsHaveCertification();
        expect(resp).not.toBe(undefined); 
    });
    test('Consultando los estudiantes con credito minimo verdadero', () => {
        const resp = ServiceController.studentCreditMin();
        expect(resp).not.toBe(undefined); 
    });
});
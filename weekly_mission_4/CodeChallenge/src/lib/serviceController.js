const StudentsService = require('./services/studentsService')

class ServiceController {
    static allStudents(){
        return StudentsService.allStudentsService();
    }

    static studentsHaveCertification(){
        return StudentsService.studentsHaveCertification();
    }

    static studentCreditMin(){
        return StudentsService.studentCreditMin();
    }
}

module.exports = ServiceController;
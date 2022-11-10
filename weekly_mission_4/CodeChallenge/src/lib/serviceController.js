const StudentsService = require('./services/studentsService')

class ServiceController {
    static allStudents(){
        return StudentsService.allStudentsService()
    }
}

module.exports = ServiceController;
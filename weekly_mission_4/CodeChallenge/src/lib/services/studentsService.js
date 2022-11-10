const Reader = require('./../utils/reader')

class StudentsService {
    static allStudentsService(){
        return students = Reader.readJsonFile()
    }
}

module.exports = StudentsService;
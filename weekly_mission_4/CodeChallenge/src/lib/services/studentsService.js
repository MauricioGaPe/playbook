const Reader = require('./../utils/reader')

class StudentsService {
    static allStudentsService(){
        return JSON.stringify(Reader.readJsonFile());
    }
    
    static studentsHaveCertification(){
        let students = Reader.readJsonFile();
        let studentsWC = [];
        students.forEach(student => {
            if (student.haveCertification) {
                studentsWC.push(student)
            }
        });
        return JSON.stringify(studentsWC);
    }

    static studentCreditMin(){
        let students = Reader.readJsonFile();
        let studentsCM = [];
        students.forEach(student => {
            if (student.credits >= 500) {
                studentsCM.push(student)
            }
        });
        return JSON.stringify(studentsCM);
    }
}

module.exports = StudentsService;
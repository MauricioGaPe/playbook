const ServiceController = require('./../lib/serviceController')
const exp = require('express')
const app = exp()
app.use(exp.json())
const port = 3000

app.get('/v1/students', (req, res) => {
    console.log(`Se consulta servicio que retorna todos los estudiantes`);
    res.status(200).json(ServiceController.allStudents())
})

app.get('/v1/certification', (req, res) => {
    console.log(`Se consulta servicio que retorna todos los estudiantes con certificacion`);
    res.status(200).json(ServiceController.studentsHaveCertification())
})

app.get('/v1/credMin', (req, res) => {
    console.log(`Se consulta servicio que retorna todos los estudiantes con credito minimo de 500`);
    res.status(200).json(ServiceController.studentCreditMin())
})

app.listen(port, () => {
    console.log(`Servicio de consulta de estudiantes activo`);
})
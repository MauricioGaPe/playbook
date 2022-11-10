const ServiceController = require('./../lib/serviceController')
const exp = require('express')
const app = exp()
app.use(exp.json())
const port = 3000

app.get('/v1/students', (req, res) => {
    console.log(`Se consulta servicio que retorna todos los estudiantes`);
    return ServiceController.allStudents()
})

app.listen(port, () => {
    console.log(`Servicio de consulta de estudiantes activo`);
})
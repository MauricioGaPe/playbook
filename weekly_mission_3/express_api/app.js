// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000


app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL request ${new Date()}`);
    const expl1 = {id: 1, name: "Mauricio1"}
    const expl2 = {id: 2, name: "Mauricio2"}
    const expl3 = {id: 3, name: "Mauricio3"}
    const expl4 = {id: 4, name: "Mauricio4"}
    const explorers = [expl1, expl2, expl3, expl4]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET ALL request ${new Date()}`);
    console.log(`Getting explorer with id ${req.params.id}`);
    const expl1 = {id: 1, name: "Mauricio"}
    res.status(200).json(expl1)
})

app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`);
    const requestBody = req.body
    res.status(201).json({message: "Created"})
})

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUt request ${new Date()}`);
    console.log(`Update explorer with id ${req.params.id}`);
    const requestBody = req.body
    res.status(200).json({message: "Actualizado!"})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`);
    console.log(`Delete explorer with id ${req.params.id}`);
    const requestBody = req.body
    res.status(200).json({message: "Eliminado!"})
})

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})
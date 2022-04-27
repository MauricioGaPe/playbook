// Usando objeto express
const request = require("express");
// App de Express
const app = request();
// Puerto en que vamos a ver nuestra app: localhots:3000
const port = 3000

// Path inicial, responderá a la url localhost: 3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Repondiendo texto
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx')
})

// Regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msm: "Hello"}
    res.send(explorer)
})

// Queryparams: recibir parámetros por la url
// localhost:3000/explorers/mauricio
// req.params = {"explorerName":"mauricio"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
# Weekly Mission 1

COMANDOS:
clear - limpiar la consola
node archivo.js - ejecutar el archivo escrito

OBJETOS:
Para crear un nuevo Objeto es necesario iniciarlo de esta manera:
let myCar = new Object();

Para meter datos dentro del objeto ese necesario el nombre del objeto seguido de la propiedad:
myCar.make = 'Ford';

CONSTANT
Una constante en Node tiene varias aplicaciones, puede ser privada de cualquier tipo como estas dos aplicaciones:
const privateFoo = "soy un valor privado, solo me usan dentro de este objeto"

const privateBar = [1,2,3,4]

La llave de una constante puede ser modificada, esta no es inmutable

const MY_OBJECT = { key: 'value' };

MY_OBJECT.key = 'otherValue';

Para hacer un objeto completamente inmutable utiliza object.frezze de esta manera:
Object.freeze(MY_OBJECT)

FUNCIONES COMONJS
Exports
Una función puede exportada a otro lugar con exports.nombre de la clase como en el siguiente ejemplo:
exports.info = (message) => {
console.log(`info: ${message}`)
}

Y utilizada en otra parte del código importando el archivo y aplicando un variable cualquiera:
const logger = require('./logger')

Para utilizar las funciones se utiliza el comando variable + nombre de función (contexto)
logger.info('This is an informational message')

Module
Otra manera de importar es con module de esta manera:
module.exports = (message) => {
console.log(`info: ${message}`)
}

Para utilizar una sola funcion exportada no hace falta nombrar la funcion:
const logger1 = require('./logger_1')
logger1('This is an informational message')

En caso de tener mas funciones en una misma clase, se pueden nombrar y esta es la forma de llamarlas:
module.exports.verbose = (message) => {
console.log(`verbose: ${message}`)
}

Para utilizar la funcion llamada verbose se llama de la siguiente manera:
const logger2 = require('./logger_2')
logger2.verbose('This is a verbose message')

CLASES Y OBJETOS
La clase se forma de 3 momentos:
Constructor:
El primero es el constructor el cual lleva elementos para ejecutarse antes del al llamado como tal a la clase, el constructor sirve para crear objetos o llamar a metodos para que la informacion que va a ser utilizada en la clase ya se encuentre lista:
constructor(name) {
this.name = name // Estás variables se le conocen como atributos
}
Funciones:
Las funciones se declaran dentro de la clase para que estas puedan ser llamadas desde otro archivo y estas deben ser publicas:
info (message) {
console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
}
Module:
Este componente es para exportar el contenido de la clase que se estará utilizando:
module.exports = Logger

La clase puede ser exportada e iniciada al mismo tiempo, con valores por defecto como en el siguiente ejemplo en donde el constructor requiere ‘nombre’:
class Logger {
constructor(name){
this.name = name
}
}

La exportación de esta clase se realizaria:
module.exports = new Logger('DEFAULT')
De esta manera la clase explotada en cualquier parte del código en donde se le llame tendrá un valor por defecto en el nombre.

Al llamar de nuevo al constructor de una clase creando una nueva instancia en una nueva variable, cada instancia permanece con los datos intactos hasta que el programa termine o se elimine la información.

Una clase en un archivo, no más, pero los métodos y funciones que se requieran.


Modificación de clases:
Para introducir una nueva funcion o metodo a una clase ya instanciada se importa el archivo seguido de la funciona a agregar y se agrega de esta manera (logger es el archivo y se agregara el método customMessage):
require('./logger').customMessage = function () {
console.log('This is a new functionality')
}

Posteriormente este código debe ser llamado en el código en donde se utilizara el método nuevo, al igual que la clase que se modifica (Patcher es el modificador, logger es la clase que se modifica):
require('./patcher')
const logger = require('./logger')

EcmaScript Modules ESM:
Para utilizar esta importación se necesita definir la sintaxis esm-syntax en el archivo package.json
De un archivo js se pueden exportar funciones, constantes, objetos y clases en este caso se realizan con EcmaScript Modules de esta manera:
export function/const/class/ …

Para importar todo el contenido se utiliza:
import * as nameModule from ‘./archivo.js’

Para importar una función/objeto/constante/clase se utiliza:
Import { función/objeto/constante/clase } from ‘./archivo.js’

Para utilizar una por defecto con ECM se utiliza para exportar la clase:
export default class NAMECLASS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
De esta manera resultaría la importación:
import CLASS from './archivo.js'
En dónde CLASS es la clase por defecto y puede ser utilizada como tal:
const claseImportada = new CLASS('info')
Y de esta manera ya pueden ser utilizadas las funciones que la contienen
logger.log('Hello World')
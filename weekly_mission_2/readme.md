## Weekly Mission 2
### Elementos basicos de JS:
Bindings (let y const)
Imprimir valores (console.log)
Conditional execution: if
While / Do-While
For loops
Switch
Comments
Functions
Scopes
Arrow functions
Lists

**"" Una cadena vacia es igual a False**

### Objetos:

Los objetos pueden contener funciones dentro de si mismos:

const myPet = {
  name: "Woopa", //propiedad de string
  sayHelloToMyPet: function(yourPet){ //propiedad de funcion
    console.log(`${this.name} say's hello to ${yourPet}`)
  }
}
console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Tulio")

### Metodos:

**For Each:**
Recorre un array, pero no retorna elementos y con una funcion de flecha se puede realizar una accion como la siguiente:
arreglo.forEach(elemento => console.log(elemento))

**Map:**
Recorre y retorna un nuevo array a partir de una funcion que se ejecuta:
const numbersSquare = arreglo.map((elemento) => return elemento * elemento)

**Slice:**
Es un metodo que retorna un segmento del string marcado por posiciones como:
elemento.toUpperCase().slice(0, 3)

**Filter:**
Esta funcion filtra un arreglo y retorna otro arreglo para retornar parametros que cumplan con ciertas caracteristicas como el include o endsWith:
const countriesContainingLand = arreglo.filter((elemento) => elemento.includes('land'))

**Includes:**
Retorna elementos que contienen las palabras que contiene:
elemento.includes('land')

**EndsWith:**
Retorna elementos que terminan con los caracteres que contiene:
country.endsWith('ia')

**Reduce:**
Este metodo obtiene la suma de todos los elementos que se encuentran en un arreglo:
const sumWithInitial = array.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

**Every:**
Este metodo retorna un booleano si cumple con la validacion interna:
const nuevoArreglo = arreglo.every((elemento) => typeof elemento === 'string')

**Find:**
Este metodo busca un elemento de una lista que concuerde con una validacion interna:
const elementoValidado = arreglo.find((elemento) => elemento < 20)
const objetoValidado = arregloObjetos.find((objeto) => objeto.elemento > 80)

**Find Index:**
Este metodo busca un elemento de una lista que concuerde con una validacion interna y retorna la posicion del elemento de la lista:
const posicionElemento = arreglo.findIndex((elemento) => elemento.length > 7)

**Some:**
Este metodo retorna un booleano si alguno de los ellentos cumple con una validacion interna:
const validacion = arreglo.some((elemento) =>  elemento === validacion)

**Sort:**
Este metodo ordena los elementos de un arreglo, por abecedario o modificarlo para contemple otros elementos de la lista

**Instanciacion**
La intanciacion es la creacion de un objeto a apartir de una clase

**Metodo**
Los metodos viven dentro de un clase y se utilizan para ejecutar codigo

**Metodo Static**
Este metodo nos ayuda a escribir metodos en una clase sin necesidad de instanciar algun objeto

**Get y Set**
Estos metodos dentro de una clase se utilizan para obtener y mandar informacion de sus propiedades.

**Extend**
Esta palabra en la implementacion de una clase nos ayuda a heredar las propiedades de la clase que colocamos

**Overriding**
Este metodo utiliza extend para obtener las propiedades de otra clase y en base a eso poder llamar al metodo super dentro de la clase para mandar propiedades*

////////

**Let**
Es una variable local recomendado al bloque que se esta utilizando

**Var**
Es una variable global o local

**Math.max**
La función Math.max toma cualquier número de argumentos y devuelve el mayor

**Math.min**
La función Math.min toma cualquier número de argumentos y devuelve el menor

**Expresion**
Cualquier cosa que produzca un valor es una expresión en JavaScript

**Number**
Convierte a numero cuialquier tipo de elemento, retorna un NaN en caso de que reciba un valor diferente de un numero

Este tambien tiene una funcion interna para saber si un elemento es o no un numero Number.IsNaN(elemento)

**If**
if (Condition) {
  Code
} else {
  code
}

**While**
while (condicion) {
  Code
}

**Do While**
do {
  funcion para condicion
} while (condicion);
code

**For y For each**
La diferencia mas grande entre estas dos sentencias es que for es una bucle y for each es para recorrer arreglos y objetos

**Contracciones**
+=
-=
*=
/=

**Switch**
switch (condicion) {
  case condicion1:
    code
    break;
  case condicion2:
    code
  case condicion3:
    code
    break;
  default:
    code
    break;
}


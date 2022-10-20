//Las funciones de flecha se pueden realizar de dos maneas:
const cuadrado1 = (x) => { return x * x; };
const cuadrado2 = x => x * x;

//Una funcion se puede llamar con diferentes argumentos,
//los que sobren los ignora yb los que falten los tomara como udefined
function menos(a, b) {
    if (b === undefined) return -a;
    else return a - b;
  }
  
  console.log(menos(10));
  // → -10
  console.log(menos(10, 5));
  // → 5

//Cuando no se envie un parametro y necesites uno por defecto se puede
//definir en la entrada de la funcion de esta manera:
function potencia(base, exponente = 2) {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
      resultado *= base;
    }
    return resultado;
  }
  
  console.log(potencia(4));
  // → 16
  console.log(potencia(2, 6));
  // → 64

  //Cierre
  //La siguiente funcion se le envia un argumento el cual retorna una funcion
  //y se instancia en una variable let, el cual se veria de esta manera
  //let numero => numero * 2, cuando esta variable es llamada nuevamente se
  //le envia otro argumento el cual se  declara como numero y se realiza la
  //operacion matematica
  function multiplicador(factor) {//Se le manda el 2
    return numero => numero * factor;//la funcion se retorna con el factor en 2
  }
  
  let duplicar = multiplicador(2);//se llama a la funcion con el argumento 2
  console.log(duplicar(5));//se ejecuta la funcion con numero 5
  // → 10
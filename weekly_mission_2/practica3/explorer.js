export default class Explorer{ //exportado de manera por defecto con EcmaScript Modules
    constructor(name, username, mission){//Constructor con parametros
     this.name = name
     this.username = username
     this.mission = mission
    }
  
    getNameAndUsername(){//Metodo que contiene la clase para cargarse en el objeto
     return `Explorer ${this. name}, username: ${this.username}`//retorno de un string con dos parametros dentro
    }
  }
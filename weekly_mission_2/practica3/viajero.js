import Explorer from './explorer.js'//importando la clase explorer para obtener sus parametros

export default class Viajero extends Explorer {// declarando por defecto la clase viajero
  constructor(name, username, mission, cycle){//se declara el contructor con un parametro extra llamado cycle
    super(name, username, mission)//se llama la clase padre para obtener sus parametros
    this.cycle = cycle//se agrega el paramatro extra
  }

  getGeneralInfo(){//el metodo que se utilizara en esta clase
    let nameAndUsername = this.getNameAndUsername()//se llama al metodo de la clase padre y deposita en una variable el resultado
    return `${nameAndUsername}, Ciclo ${this.cycle}`//se retorna un string con dos parametros
  }
}
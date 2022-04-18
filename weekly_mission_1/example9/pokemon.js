class Pokemon {
    constructor (nombre) {
        this.nombre = nombre
    }

    sayHello(){
        console.log(`Mi pokemon ${this.nombre} te saluda!!!`);
    }

    sayMessage(message){
        console.log(`Mi pokemon ${this.nombre} dice ${message}`);
    }
}

module.exports = Pokemon;
export default class pokemon {
    constructor(name) {
        this.name = name;
    }

    sayHello () {
        console.log(`[${this.name}] say Hello!`)
    }
}
'use strict';
const fs = require("fs");

class Reader {
    static readJsonFile(){
        return JSON.parse(fs.readFileSync('./src/assets/students.json'));
    }
}

module.exports = Reader;
const fs = require("fs");

class Reader {
    static readJsonFile(name){
        return JSON.parse(fs.readFileSync(name));
    }
}

module.exports = Reader;
const User = require("../models/User");

class UserView {
    static createUser(payload){

        var result = new Object();

        if (payload == null) {
            result.error = "payload no existe";
        } else if(String(payload.username) && String(payload.name) && Number(payload.id)){
            return new User(payload.id, payload.username, payload.name, "No Bio")
        } else {
            result.error = "necesitan tener un valor válido";
        }
        return result;
    }
}

module.exports = UserView;
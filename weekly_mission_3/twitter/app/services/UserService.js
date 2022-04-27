const User = require("../models/User");

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio");
    }

    static getInfo(User){
        let userInfoInList = [];
        userInfoInList[0] = User.id;
        userInfoInList[1] = User.username;
        userInfoInList[2] = User.name;
        userInfoInList[3] = User.bio;
        return userInfoInList
    }

    static updateUserUsername(User, newUsername){
        User.username = newUsername
        return User
    }

    static getAllUsernames(data){
        let userNames = []
        data.forEach(user => {
            userNames.push(user.username)
        });
        return userNames
    }
}

module.exports = UserService;
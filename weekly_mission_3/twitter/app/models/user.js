class User {
    constructor(id, username, name, bio) {
        let fecha = new Date();
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = fecha;
        this.lastUpdate = fecha;
    }

    get getUsername(){
        return this.username;
    }

    get getBio(){
        return this.bio;
    }

    get getDateCreated(){
        return this.dateCreated;
    }

    get getLastUpdate(){
        return this.lastUpdate;
    }

    set setUsername(newName){
        this.username = newName;
    }

    set setBio(newBio){
        this.bio = newBio;
    }

}

module.exports = User;
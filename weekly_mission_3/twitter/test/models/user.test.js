const User = require("../../app/models/User");

describe('Prueba unitaria para la clase usuario', () => {
    test('Crear un objeto usuario', () => {
        const user = new User(1, "MauGaPe", "Mauricio", "Bio");

        expect(user.id).toBe(1);
        expect(user.username).toBe("MauGaPe");
        expect(user.name).toBe("Mauricio");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdate).not.toBeUndefined();
    });
    
    test('Obtencion de datos del objeto usuario', () => {
        const userTwo = new User(1, "MauGaPe", "Mauricio", "Bio")

        expect(userTwo.getUsername).toBe("MauGaPe");
        expect(userTwo.getBio).toBe("Bio");
        expect(userTwo.getDateCreated).not.toBeUndefined();
        expect(userTwo.getLastUpdate).not.toBeUndefined();
    });

    test('Obtencion de datos del objeto usuario', () => {
        const userTree = new User(1, "MauGaPe", "Mauricio", "Bio")
        
        userTree.setUsername = "MauronElLeon"
        expect(userTree.getUsername).toBe("MauronElLeon");

        userTree.setBio = "BioTwo"
        expect(userTree.getBio).toBe("BioTwo");
    });
});
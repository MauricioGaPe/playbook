const UserService = require('./../../app/services/UserService')

describe('Test para la UserService', () => {

    test('1. Crear un nuevo usuario usando la UserService', () => {
        const user = UserService.create(1, "mauriciogarcia", "Mauricio");
        expect(user.username).toBe("mauriciogarcia");
        expect(user.name).toBe("Mauricio");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    });
    
    test('2. Get all user data in a list', () => {
        const user = UserService.create(1, "mauriciogarcia", "Mauricio");
        const userInfoInList = UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("mauriciogarcia");
        expect(userInfoInList[2]).toBe("Mauricio");
        expect(userInfoInList[3]).toBe("Sin bio");
    });

    test('3. Actualizar Username', () => {
        const user = UserService.create(1, "mauriciogarcia", "Mauricio");
        UserService.updateUserUsername(user, "mauronElLeon");
        expect(user.username).toBe("mauronElLeon");
    });

    test('4. obtener una lista de usuarios ', () => {
        const user1 = UserService.create(1, "mauriciogarcia", "Mauricio")
        const user2 = UserService.create(1, "hugocesargarcia", "Hugo Cesar")
        const user3 = UserService.create(1, "adrianagarcia", "Adriana")
        const userNames = UserService.getAllUsernames([user1, user2, user3])
        expect(userNames).toContain("mauriciogarcia");
        expect(userNames).toContain("hugocesargarcia");
        expect(userNames).toContain("adrianagarcia");
    });
});
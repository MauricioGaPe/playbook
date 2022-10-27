const UserView = require("./../../app/views/UserView")

describe('Tests for UserView', () => {
    
    test('Retorna un objeto de errror cuando se intenta crear un nuevo usuario con un null payload', () => {
        const payload = null;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/payload nulo/);
    });

    test('Retorna un objeto de error cuando intenta crear un nuevo usuario con un payload con propiedades invalidas', () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });

    test('Retornar un objeto error cuando se intente crear un nuevo usuario con un payload sin algunas propiedades', () => {
        const payload = {username: "Username"};
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });

    test('Crear un usuario dando un payload valido', () => {
        const payload = {username: "username", id: 1, name: "name"}
        const result = UserView.createUser(payload);
        expect(result.name).toBe("name");
        expect(result.username).toBe("username");
        expect(result.id).toBe(1);
        
    });

});
const Spiderman = require('./../app/Spiderman');

describe('Prueba unitaria paparala clase spiderman', () => {
    test('1) Creando un objeto de spiderman', () => {
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony");
        
        expect(andrewGarfield.name).toBe("Spiderman Sony");
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actor).toBe("Andrew Garfield");
        expect(andrewGarfield.movies).toBe(2);
        expect(andrewGarfield.studio).toBe("Sony");
    });

    test('2) Obteniendo información de Spiderman', () => {
        const tomHolland = new Spiderman("Spiderman Maverl", 25, "Tom Holland", 5, "Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio");
    });
});
const MissionCommander = require('./../app/missionCommander');

describe("Prueba unitaria para la clase MissionCommander", () => {
    test('1) Creando un objeto de MissionComander', () => {
        const myMissionCommander = new MissionCommander("Woopa");
        expect(myMissionCommander.name).toBe("Woopa");
    })
})
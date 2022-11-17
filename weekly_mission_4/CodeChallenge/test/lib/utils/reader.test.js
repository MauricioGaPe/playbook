const Reader = require('./../../../src/lib/utils/reader')

describe('Reader', () => {
    test('Leyendo el archivo', () => {
        const resp = Reader.readJsonFile();
        expect(resp).not.toBe(undefined);
    });
});
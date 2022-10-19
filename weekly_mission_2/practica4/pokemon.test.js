import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu','Electrico','99')
  expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba
});
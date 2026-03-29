const greet = require('../greet');

test('retourne un message de salutation', () => {
  expect(greet('Teremu')).toBe('Bonjour, Teremu !');
});

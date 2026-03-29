const hello = require('../hello');

test('retourne le message Hello World', () => {
  expect(hello()).toBe('Hello World');
});

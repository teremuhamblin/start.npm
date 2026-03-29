const add = require('../add');

test('additionne deux nombres', () => {
  expect(add(2, 3)).toBe(5);
});

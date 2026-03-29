/**
 * Module simple pour démontrer la publication sur GitHub Packages.
 * Fournit plusieurs fonctions exportées pour illustrer les usages.
 */

/**
 * Retourne un message de bienvenue.
 */
function hello() {
  return "Hello, World!";
}

/**
 * Retourne un message personnalisé.
 * @param {string} name - Le nom à afficher.
 */
function greet(name) {
  return `Hello, ${name}!`;
}

/**
 * Additionne deux nombres.
 * @param {number} a
 * @param {number} b
 */
function add(a, b) {
  return a + b;
}

module.exports = {
  hello,
  greet,
  add
};

/**
 * Module principal du package start.npm.
 * Fournit plusieurs fonctions simples pour démontrer la publication
 * sur GitHub Packages.
 */

/**
 * Retourne un message de bienvenue générique.
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

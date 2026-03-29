Une documentation utilisateur met l’accent sur l’usage concret, la prise en main, les exemples pratiques, et la compréhension simple du package. Elle est pensée pour quelqu’un qui veut utiliser ton module sans forcément connaître son fonctionnement interne.

---

📘 Documentation utilisateur — @teremuhamblin/start.npm

Introduction au module
Le package start.npm fournit un ensemble de petites fonctions JavaScript prêtes à l’emploi. Il est conçu pour être simple à installer, simple à utiliser et compatible avec tous les projets Node.js. Les fonctions proposées permettent d’afficher un message, de personnaliser une salutation et d’effectuer une addition.

---

Installation du package

1. Configurer le registre GitHub Packages
Avant d’installer le module, il faut indiquer à npm d’utiliser le registre GitHub pour le scope @teremuhamblin.

Créer ou modifier le fichier .npmrc dans votre projet :

`
@teremuhamblin:registry=https://npm.pkg.github.com
`

2. Installer le package
Une fois la configuration faite, l’installation se fait comme n’importe quel module npm :

`bash
npm install @teremuhamblin/start.npm
`

---

Utilisation dans un projet Node.js

Importer le module
Le module utilise CommonJS, ce qui le rend compatible avec la plupart des projets Node.

`js
const { hello, greet, add } = require("@teremuhamblin/start.npm");
`

Fonctions disponibles

1. hello()
Affiche un message simple.

`js
console.log(hello());
// Résultat : "Hello, World!"
`

2. greet(name)
Affiche une salutation personnalisée.

`js
console.log(greet("Teremu"));
// Résultat : "Hello, Teremu!"
`

3. add(a, b)
Additionne deux nombres.

`js
console.log(add(5, 7));
// Résultat : 12
`

---

Exemples d’intégration

Exemple 1 : Script Node simple

`js
const { hello } = require("@teremuhamblin/start.npm");

console.log("Message du module :", hello());
`

Exemple 2 : Utilisation dans une API Express

`js
const express = require("express");
const { greet } = require("@teremuhamblin/start.npm");

const app = express();

app.get("/", (req, res) => {
  res.send(greet("visiteur"));
});

app.listen(3000, () => {
  console.log("Serveur démarré sur http://localhost:3000");
});
`

Exemple 3 : Calcul dans un script

`js
const { add } = require("@teremuhamblin/start.npm");

const total = add(10, 15);
console.log("Total :", total);
`

---

Scripts npm utiles

Le package propose plusieurs scripts pour faciliter son utilisation en local.

| Script | Description |
|--------|-------------|
| npm start | Exécute le fichier index.js |
| npm run start:npm | Alias interne qui relance npm start |
| npm test | Script de test minimal |
| npm run lint | Placeholder pour un futur linter |
| npm run build | Placeholder pour une étape de build |
| npm run prepublishOnly | Vérifie les tests avant publication |

Ces scripts ne sont pas obligatoires pour utiliser le module, mais ils facilitent le développement si vous souhaitez contribuer.

---

Compatibilité

- Node.js : compatible avec toutes les versions modernes (>= 14)
- Modules : CommonJS (require)
- Plateformes : Linux, macOS, Windows

---

Dépannage

Erreur : "Cannot find module '@teremuhamblin/start.npm'"
Vérifier que .npmrc contient bien :

`
@teremuhamblin:registry=https://npm.pkg.github.com
`

Erreur d’authentification npm
GitHub Packages peut nécessiter un token personnel si vous installez depuis un environnement CI ou un serveur distant.

Le module ne s’exécute pas
Vérifier que Node.js est installé :

`bash
node -v
`

---

Informations complémentaires

- Le module est publié automatiquement via GitHub Actions.
- Le code source est disponible sur GitHub.
- La licence est MIT, ce qui permet une utilisation libre.

---

Souhaites‑tu que cette documentation soit intégrée dans un fichier README.md complet ou que je t’aide à structurer une documentation multi‑pages pour un wiki GitHub ?

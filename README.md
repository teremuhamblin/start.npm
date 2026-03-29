📘 `README.md — start.npm`

🚀 Présentation
`start.npm` est un package JavaScript minimaliste publié sur GitHub Packages. Il fournit quelques fonctions simples (salutation, message personnalisé, addition) et sert de base pour expérimenter la publication automatisée via GitHub Actions.

Ce module est idéal pour comprendre :
- la structure d’un package npm,
- la publication sur GitHub Packages,
- l’utilisation d’un workflow CI/CD pour automatiser les releases.

---

📦 Installation

Avant d’installer le package, configure ton `.npmrc` dans ton projet :

`
@teremuhamblin:registry=https://npm.pkg.github.com
`

Ensuite, installe le package :

`bash
npm install @teremuhamblin/start.npm
`

---

🧩 Utilisation


`js
const { hello, greet, add } = require("@teremuhamblin/start.npm");

console.log(hello()); // "Hello, World!"
console.log(greet("Teremu")); // "Hello, Teremu!"
console.log(add(2, 3)); // 5
`
---

📁 Fonctions disponibles

hello()
Retourne un message simple :  
`"Hello, World!"`

greet(name)
Retourne un message personnalisé.  
Exemple :  
`greet("Alice") → "Hello, Alice!"`

add(a, b)
Additionne deux nombres.  
Exemple :  
`add(4, 7) → 11`

---

🔧 Scripts npm

| Script | Description |
|--------|-------------|
| npm start | Exécute index.js directement |
| npm run start:npm | Alias interne qui relance npm start |
| npm test | Test placeholder (exit 0) pour CI/CD |
| npm run lint | Placeholder pour un futur linter |
| npm run build | Indique qu’aucune étape de build n’est nécessaire |
| npm run prepublishOnly | Exécute les tests avant publication |

---

🤖 Publication automatique

Le package est publié automatiquement sur GitHub Packages lorsque :
- une release GitHub est créée,
- les tests passent dans GitHub Actions.

Le workflow se trouve dans :  
`.github/workflows/release-package.yml`

---

📄 Licence
Ce projet est sous licence MIT, ce qui permet une utilisation libre, modification et redistribution.

---

🧭 Dépôt
GitHub : `https://github.com/teremuhamblin/start.npm` (github.com in Bing)

---

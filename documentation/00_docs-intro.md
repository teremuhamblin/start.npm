📚 Documentation complète du projet : `@teremuhamblin/start.npm`

1. Présentation générale
- Le projet `start.npm` est un module `Node.js` minimaliste publié sur GitHub Packages. Il sert de base pour expérimenter la création, la structuration et la publication automatisée d’un package npm via GitHub Actions. Le module expose trois fonctions simples : `hello`, `greet` et `add.`

Le projet est conçu pour être :
- léger et sans dépendances,
- compatible avec les environnements Node.js modernes,
- entièrement automatisé pour la publication,
- facile à étendre pour des usages plus avancés.

---

2. Architecture du projet

Structure du dépôt :
> `start/ structure.txt`

Description des éléments :

- `index.js` : point d’entrée du module, exporte les fonctions.
- `package.json` : métadonnées du package, scripts, configuration de publication.
- `package-lock.json` : verrouillage des dépendances.
- `.npmrc` : configuration du registre GitHub Packages pour le scope @teremuhamblin.
- `release-package.yml` : workflow GitHub Actions pour tester et publier automatiquement.

---

3. API du module

Fonction `hello()`
Renvoie un message statique.

`js
hello(); // "Hello, World!"
`

Fonction `greet(name)`
Construit un message personnalisé.

`js
greet("Teremu"); // "Hello, Teremu!"
`

Fonction `add(a, b)`
Additionne deux nombres.

`js
add(2, 3); // 5
`

Export global

`js
module.exports = {
  hello,
  greet,
  add
};
`

---

4. Installation du package

Configuration du registre
Créer ou modifier .npmrc dans le projet consommateur :

`
@teremuhamblin:registry=https://npm.pkg.github.com
`

Installation

`bash
npm install @teremuhamblin/start.npm
`

---

5. Utilisation du module

`js
const { hello, greet, add } = require("@teremuhamblin/start.npm");`

> console.log(hello());
> console.log(greet("Teremu"));
> console.log(add(4, 7));
`

---

6. Scripts npm

Scripts disponibles

| Script | Description |
|--------|-------------|
| start | Exécute index.js |
| start:npm | Alias interne qui relance npm start |
| test | Script minimal utilisé par la CI (exit 0) |
| lint | Placeholder pour un futur linter |
| build | Placeholder pour une étape de build |
| prepublishOnly | Exécute les tests avant publication |

Flux recommandé

1. Développement local → npm start
2. Versioning → npm version patch|minor|major
3. Push + tag → déclenche la release
4. Release GitHub → déclenche la publication automatique

---

7. Workflow CI/CD

Déclencheur
Le workflow s’exécute lors de la création d’une release GitHub.

Étapes principales
- Checkout du code
- Installation de Node.js
- Installation des dépendances via npm ci
- Exécution des tests
- Publication sur GitHub Packages via npm publish

Permissions
Le workflow utilise le `GITHUB_TOKEN` fourni automatiquement par GitHub.

---

8. Publication sur GitHub Packages

Configuration dans `package.json`

`json
"publishConfig": {
  "@teremuhamblin:registry": "https://npm.pkg.github.com"
}
`

Publication automatique
La publication est déclenchée par :
- création d’un tag,
- création d’une release GitHub.

Aucune action manuelle n’est nécessaire.

---

9. Gestion des versions

Le projet suit Semantic Versioning (SemVer) :

- MAJOR : changements incompatibles
- MINOR : nouvelles fonctionnalités rétro-compatibles
- PATCH : corrections

Exemple :

`bash
npm version minor
git push --follow-tags
`

---

10. Sécurité et authentification

Authentification npm
La publication utilise le token GitHub Actions intégré.

Isolation du scope
Le package est isolé sous @teremuhamblin, garantissant que seules les requêtes ciblées utilisent GitHub Packages.

Risques potentiels
- Mauvaise configuration du .npmrc → erreurs d’installation
- Publication manuelle → incohérences de version
- Absence de tests → risque de publier du code cassé

---

11. Bonnes pratiques de développement

- Respecter la structure `CommonJS`.
- Ajouter des tests unitaires avant d’étendre l’API.
- Documenter toute nouvelle fonction.
- Utiliser npm version pour incrémenter proprement les versions.
- Ne jamais publier manuellement via npm publish en local.
- Garder le workflow CI/CD simple et lisible.

---

12. Contribution au projet

Étapes pour contribuer
- Fork du repository
- Création d’une branche de fonctionnalité
- Ajout de tests unitaires
- Mise à jour de la documentation
- Pull request vers main

Style de code
- JavaScript simple, sans dépendances
- Fonctions pures
- Noms explicites

---

13. Roadmap technique

Améliorations possibles
- Ajout d’un système de tests (Jest ou Vitest)
- Passage à `TypeScript`
- Ajout d’un `linter (ESLint)`
- Ajout d’un `bundler (Rollup ou esbuild)
- Documentation générée automatiquement (TypeDoc)
- Publication `multi-registres (npmjs + GitHub Packages)`

---

14. Licence

Le projet est sous licence MIT, permettant une utilisation libre, modification et redistribution.

---

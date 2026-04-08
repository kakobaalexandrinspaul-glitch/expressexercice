# Brief — Application web avec Express.js

## Contexte

Tu viens d'apprendre les bases de NodeJs. Il est maintenant temps de mettre en pratique en construisant une application web complète par toi-même.

Tu vas créer une application de **gestion d'une bibliothèque personnelle**. L'utilisateur peut consulter une liste de livres, ajouter un nouveau livre, voir le détail d'un livre, et laisser un avis.

## Objectifs pédagogiques

- Créer et configurer un serveur Express from scratch
- Définir des routes GET et POST
- Passer des données entre le serveur et les vues
- Organiser son code avec des contrôleurs
- Utiliser des formulaires HTML pour envoyer des données au serveur

## Contraintes techniques

| Contrainte               | Détail               |
| ------------------------ | -------------------- |
| Langage                  | JavaScript (Node.js) |
| Framework                | Express.js           |
| Moteur de vues           | EJS                  |
| Nombre de pages minimum  | **6 pages**          |
| Verbes HTTP obligatoires | **GET** et **POST**  |

## Pages à créer

### Page 1 — Accueil

- **Verbe :** GET
- **Route :** `/`
- Affiche un message de bienvenue
- Contient un lien(Button) vers la liste des livres et vers le formulaire d'ajout

### Page 2 — Liste des livres

- **Verbe :** GET
- **Route :** `/livres`
- Affiche tous les livres sous forme de liste ou de cartes
- Chaque livre affiche au minimum : le **titre** et l'**auteur**
- Chaque livre a un lien(Button) vers sa page de détail

### Page 3 — Détail d'un livre 

- **Verbe :** GET
- **Route :** `/livres/:id`
- Affiche toutes les informations d'un seul livre
- Le `:id` dans l'URL correspond à la position du livre dans le code (index)
- Informations à afficher : titre, auteur, année de publication, résumé, avis

### Page 4 — Formulaire d'ajout d'un livre

- **Verbe :** GET
- *Route :** `/livres/ajouter`
- Formulaire avec les champs : titre, auteur, année, résumé
- Le formulaire envoie les données en **POST** vers `/livres/ajouter`

### Page 5 — Traitement de l'ajout `/livres/ajouter`

- **Verbe :** POST
- *Route :** `/livres/ajouter`
- Récupère les données du formulaire
- Affiche une page de confirmation avec le titre et l'auteur saisis

### Page 6 — Formulaire d'avis

- **Verbe :** GET (afficher le formulaire) + **POST** (traiter l'envoi)
- *Route :** `/livres/:id/avis`
- Formulaire avec un champ : message de l'avis
- Après soumission, affiche une page de confirmation avec le message saisi


## Structure de dossiers attendue

```
mon-projet/
│
├── server.js
├── package.json
├── .gitignore
│
├── controllers/
│   ├── homeController.js
│   ├── livresController.js
│   └── avisController.js
│
├── views/
│   ├── index.ejs
│   ├── livres.ejs
│   ├── detail.ejs
│   ├── ajouter.ejs
│   └── avis.ejs
│
└── public/
    └── style.css
```

## Données de départ

Copie ce tableau directement dans ton contrôleur. Les 3 livres et leurs avis sont déjà prêts :

```js
const livres = [
  {
    id: 0,
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    annee: 1943,
    resume:
      "Un pilote échoué dans le désert rencontre un petit prince venu d'une autre planète.",
    avis: [
      "Un chef-d'œuvre intemporel, une lecture indispensable.",
      "Philosophique et touchant, idéal pour tous les âges.",
    ],
  },
  {
    id: 1,
    titre: "1984",
    auteur: "George Orwell",
    annee: 1949,
    resume:
      "Dans un État totalitaire, Winston Smith tente de résister à un régime qui contrôle jusqu'à la pensée.",
    avis: [
      "Effrayant et visionnaire, un roman qui fait réfléchir.",
      "Difficile mais nécessaire, une dystopie marquante.",
    ],
  },
  {
    id: 2,
    titre: "L'Alchimiste",
    auteur: "Paulo Coelho",
    annee: 1988,
    resume:
      "Santiago, un jeune berger andalou, part à la recherche d'un trésor et découvre le sens de la vie.",
    avis: [
      "Inspirant et poétique, une belle leçon de persévérance.",
      "Un livre qui donne envie de suivre ses rêves.",
    ],
  },
];
```

## Étapes suggérées

1. Initialiser le projet avec `npm init -y`
2. Installer les dépendances : `npm install express ejs`
3. Créer le `server.js` et tester qu'il démarre
4. Créer les vues EJS une par une
5. Créer les contrôleurs et brancher les routes
6. Tester chaque route dans le navigateur

## Critères d'évaluation

| Critère                                                             | Points     |
| ------------------------------------------------------------------- | ---------- |
| Le serveur démarre sans erreur                                      | 2 pts      |
| Les 6 pages sont accessibles                                        | 3 pts      |
| Les routes GET sont correctement définies                           | 2 pts      |
| Les routes POST fonctionnent (ajout livre + avis)                   | 4 pts      |
| Les données s'affichent correctement dans les vues EJS              | 3 pts      |
| La structure de dossiers est respectée (controllers, views, public) | 3 pts      |
| Le projet est sur GitHub avec un `.gitignore`                       | 3 pts      |
| **Total**                                                           | **20 pts** |

> **Note sur le style :** Cet exercice porte sur le backend, pas sur le CSS. Ne perds pas de temps sur le design. Cependant, un **style minimum est obligatoire** : au moins un fichier CSS avec quelques règles de base (marges, police, couleurs) pour pratiquer la liaison entre Express et les fichiers statiques.

---

## Bonus (optionnel)

- Ajouter une page **404** personnalisée pour les routes inexistantes
- Ajouter un formulaire de **recherche** par titre (`/livres/recherche?q=...`)
- Ajouter un bouton **supprimer** un livre (via un formulaire DELETE)
- Ajouter du style CSS pour rendre l'application agréable à utiliser

## Livraison

- Lien vers le dépôt **GitHub** du projet
- Le `README.md` doit expliquer comment installer et lancer le projet

> Bonne chance ! L'objectif n'est pas la perfection mais la pratique. Tu as le droit de consulter le projet de référence **expresskadea** pour t'inspirer : [https://github.com/amare53/expresskadea.git](https://github.com/amare53/expresskadea.git)

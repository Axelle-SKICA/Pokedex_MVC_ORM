# Pokedex

## Description

Le but de ce projet est la création d'une application Pokedex, pensée _mobile first_. Ce __Pokedex__ répertorie l'ensemble des Pokemons de première génération.

Sur la ___home___, il est possible d'afficher un Pokemon au hasard.

La route ___/pokemons___ permet d'afficher la liste de tous les Pokemons.

la route ___/pokemons/:id___ permet d'afficher les informations d'un Pokemon (à partir de son id), notamment : 

- image
- nom
- numéro  

Puis prochainement :

- type(s)
- attaques
- statistiques
- éventuelles évolutions

La route ___/types___ permet d'afficher la liste de tous les types de Pokemons.

__Ce projet est un "work in progress"__, j'espère pouvoir le faire évoluer prochainement.

## Technologies

L'objectif est de travailler :
- une app en architecture MVC (Sequelize, EJS, routers & controllers)
- l'utilisation de l'ORM Sequelize
- le CSS :
  - flexbox,
  - travail du responsive en mobile first avec des Media queries... 

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=ffffff)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=ffffff)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![Node](https://img.shields.io/badge/node-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-ccc?style=for-the-badge&logo=express&logoColor=black)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/postgreSQL-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue)

## Lancement

Installation des dépendances :

```bash
npm i
```

Une fois votre BDD PostgreSQL créée, vous pouvez remplir les variables d'environnement correspondantes :

```js
DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
```

La BDD peut alors être initialisée et peuplée grâce au script "pokedex.sql", lancé avec la commande :

```bash
npm run db:reset
```

Lancement du serveur (après avoir renseigné APP_PORT dans `.env` ) :

```bash
npm run dev
```

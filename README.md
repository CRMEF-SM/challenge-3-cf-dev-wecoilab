# WeColLab : Plateforme d'apprentissage collaboratif pour la programmation

Bienvenue sur le dépôt GitHub de WeColLab, une plateforme web innovante conçue pour révolutionner l'apprentissage de la programmation grâce à des fonctionnalités collaboratives et interactives.

## Description

WeColLab offre un environnement d'apprentissage stimulant où les étudiants peuvent :

- Participer à des cours en vidéoconférence en direct,
- Collaborer sur des projets grâce à un chat en temps réel et un environnement de programmation partagé,
- Relever des défis de codage générés par l'IA, et bien plus encore.

## Fonctionnalités Clés

- Cours en vidéoconférence avec partage d'écran et chat intégré.
- Système de chat en temps réel pour la communication entre étudiants et formateurs.
- Génération d'exercices de programmation basés sur l'IA pour un apprentissage personnalisé.
- Environnement de programmation virtuel pour tester le code directement dans le navigateur.
- Système d'authentification sécurisé pour protéger les données des utilisateurs.
- Gestion des cours pour les formateurs avec suivi de la progression des étudiants.

## Technologies Utilisées

- **Frontend**: Next.js, React, Shadcn UI
- **Backend**: Node.js, Express, PostgreSQL, Drizzle ORM
- **CI/CD**: GitHub Actions
- **Autres**: Socket.IO, Restream (pour la vidéoconférence), OpenAI API (pour la génération d'exercices)

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- Node.js: [https://nodejs.org/](https://nodejs.org/) (Version 14 ou supérieure recommandée)
- NPM: Installé automatiquement avec Node.js
- Docker: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/) (Recommandé pour la base de données)
- Docker Compose: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## Installation et Lancement

Clonez le dépôt:
```bash
git clone https://github.com/CRMEF-SM/challenge-3-cf-dev-wecoilab.git
cd challenge-3-cf-dev-wecoilab
```

Lancez la base de données (avec Docker Compose):
```bash
docker-compose up -d
```

Initialisez la base de données (uniquement la première fois):
```bash  
npm run db:push
```

Installez les dépendances:
```bash    
npm install
```
    
Lancez l'application en mode développement:
```bash          
npm run dev
```
    

L'application sera accessible à l'adresse http://localhost:3000.
## Contribution

Les contributions sont les bienvenues! N'hésitez pas à ouvrir des issues pour signaler des bugs ou proposer des améliorations.
## Licence

Ce projet est sous licence MIT.

# Carte d'Identité du Territoire - Application cliente

## Un projet Région Sud / Wild Code School

Le projet *Carte d'Identité du Territoire* a été réalisé entre les mois de décembre 2020 et février 2021 par des étudiants en développement web du campus "remote" de la Wild Code School, en partenariat avec les porteurs de projet de Région Sud.

Pour le cursus *développement web* de la  la Wild Code School, dans sa déclinaisaon *JavaScript / React / Node.js*, les projets de fin de formation comportent typiquement deux applications : une application serveur basée sur Node.js, une application cliente développée en React.

Ce dépôt contient le code source de la partie **cliente** du projet *Carte d'Identité du Territoire*.

Celui-ci a été réalisé en langage JavaScript avec la bibliothèque [React](https://fr.reactjs.org), ainsi que les technologies web front-end associées (CSS3, HTML5 sémantique).

La section suivante donne les instructions minimales pour démarrer le projet sur un poste de développement. Les instructions pour le déploiement sur un serveur sont regroupées avec celles concernant la partie serveur du projet, dans le ["Readme" du dépôt de l'application serveur](https://github.com/WildCodeSchool/remotefr-js-0920-p3-regionsud-identiteterritoire-back).

## Lancement et/ou développement en local

### Pré-requis

* Un ordinateur fonctionnant sous Windows, Mac OS ou Linux,
* 4 Go de RAM (8 Go recommandés),
* 1 Go d'espace disque disponible,
* Git,
* L'accès à un terminal : PowerShell ou Git Bash (fourni avec Git) sous Windows, Termminal sous Mac OS, etc.,
* La plate-forme Node.js

Pour installer Node.js : bien qu'il soit possible d'utiliser [l'installeur officiel](https://nodejs.org/en/download/), il est recommandé d'utiliser :

* [NVM](https://github.com/nvm-sh/nvm) pour les systèmes de la famille Unix (dont Mac OS et Linux)
* [NVM-Windows](https://github.com/coreybutler/nvm-windows) pour Windows (qui diffère de NVM malgré son nom)

Ces deux outils permettent d'installer différentes versions de Node.js. Mais pour un développeur, l'intérêt de NVM, ou de sa contrepartie pour Windows, réside avant tout dans la possibilité d'installer des "modules" ou "packages" NPM, de façon globale, sans nécessiter les droits administrateur sur le système.

#### Mac OS et Linux

Pour installer NVM, il faut d'abord ouvrir un terminal et de lancer **l'une** de ces deux commandes :

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

ou

    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

Après quoi, il est recommandé de quitter le terminal, puis de le relancer.

On peut ensuite utiliser NVM installer la dernière version LTS (*Long Term Support*) via la commande :

    nvm install --lts

Après quoi il est possible de vérifier l'installation correcte de Node.js et de son gestionnaire de paquets NPM (ces deux commandes affichant leurs versions respectives) :

    node -v
    npm -v

#### Windows

Pour installer NVM-Windows, il faut se rendre sur la [section "Releases" du dépôt sur GitHub](https://github.com/coreybutler/nvm-windows/releases). De là, il faut télécharger l'une des archives au format ZIP proposées : choisissez le fichier intitulé `nvm-setup.zip`, qui contient un installeur/désinstalleur.

Après avoir extrait les fichiers de l'archive, lancé l'installeur et suivi le processus d'installation jusqu'au bout, il sera possible d'installer Node.js via NVM-Windows, depuis n'importe quel terminal **en mode administrateur** - PowerShell ou [Git Bash](https://git-scm.com/download/win) (terminal fourni avec Git, émulant le terminal des systèmes Linux). Pour plus de détails, voir la section [Usage](https://github.com/coreybutler/nvm-windows#usage) de la documentation.

On peut installer la dernière version stable de Node.js via `nvm install latest`, mais nous recommandons là aussi la version LTS. On peut vérifier celle-ci sur la [page d'accueil de Node.js](https://nodejs.org/en/). Par exemple, pour installer la LTS en vigueur en février 2021 (14.15.5), on utilise `nvm install 14.15.5`.

Après quoi, il est possible, comme pour les systèmes Mac OS et Linux, de vérifier l'installation, en affichant les versions respectives de Node.js et de NPM via ces deux commandes :

    node -v
    npm -v

### Installation du projet

La seule phase spécifique à un système d'exploitation étant passée, les étapes qui suivent sont communes à tous les systèmes.

#### Récupération du code en local

Pour installer le projet en local, il faut récupérer son code :

* Soit en clonant ce dépôt (indispensable si on veut travailler en bénéficiant de la gestion de version par Git),
* Soit en récupérant simplement une archive ZIP du code (si on souhaite juste lancer le projet, sans nécessité de le faire évoluer)

#### Installation des dépendances

Après quoi, il est nécessaire d'ouvrir un terminal pour installer les dépendances du projet (les "modules" tiers JavaScript, provenant de [npmjs.com](https://www.npmjs.com/)).

Après s'être placé *dans le dossier* du dépôt cloné (ou extrait du ZIP), on lance :

    npm install

#### Configuration

Les projets React peuvent être paramétrés via les fichiers `.env` (qui peut être suivi via Git), `.env.local` (qui peut écraser des valeurs du `.env`), `.env.developement.local` ou `.env.production.local` (permettant d'avoir des paramétrages distincts, pour des environnements de développement et de production respectivement).

Habituellement, on utilise `.env.local` pour travailler en local. Il faut créer une copie du fichier "caché" `.env.example`, sous le nom `.env.local`, et adapter les paramètres à son environnement local.

* `REACT_APP_REGIONSUD_API_URL` est l'URL de l'application serveur, écrite en PHP avec le framework Laravel, et documentée dans le [dépôt](https://github.com/WildCodeSchool/remotefr-js-0920-p3-regionsud-identiteterritoire-back). Ici, deux possibilités :

    1. Installer l'application serveur localement, et la lancer. Dans ce cas, on donnera à cette variable la valeur `http://localhost/api`, si on a configuré la "document root" de son serveur web pour pointer vers le dossier `public` de l'application serveur. La mise en place d'une stack Apache-MySQL-PHP sous Windows, Mac OS ou Linux dépasse le cadre de cette documentation. Des outils comme [Laragon](https://laragon.org/) ou [UwAmp](https://www.uwamp.com/fr/) (Windows) ou [MAMP](https://www.mamp.info/en/downloads/) (Mac OS) peuvent aider.
    2. Utiliser une version déployée en ligne de l'application serveur. Par exemple, si elle est déployée à l'adresse `https://sub.mydomain.com/citer-back/api`, on assignera cette valeur à la variable.
* `REACT_APP_ROUTER_BASENAME` est le chemin relatif sur lequel l'application sera accessible. Cette variable ne sert qu'en production, si l'application est déployée dans un sous-répertoire de la "document root" du serveur web.

### Lancement

Une fois configurée, l'application peut être lancée, toujours depuis un terminal, via `npm start`. L'application devient accessible via l'adresse locale <http://localhost:3000>. Elle se rafraîchit automatiquement, dès lors qu'on édite des fichiers dans les dossiers `src/` ou `public/`.

On peut tester le "build" (génération de l'application finale destinée à être déployée) en local, via `nom run build`.

### Développement

Ce projet a été démarré à partir d'un [template](https://github.com/bhubr/react-eslint-prettier-template), généré via [Create React App](https://create-react-app.dev/) puis augmenté :

* [ESLint](https://eslint.org/), le *linter* JavaScript de référence, est configuré avec les conventions de codage Airbnb pour [JavaScript](https://github.com/airbnb/javascript) et [React](https://github.com/airbnb/javascript/tree/master/react).
* [Prettier](https://prettier.io/) est installé, et la configuration ESLint est adaptée, pour éviter les conflits entre les conventions Airbnb et celles propres à Prettier.
* Pour bénéficier d'ESLint et Prettier dans Visual Studio Code, il est recommandé d'installer les extensions correspondantes :

    * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    * [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* Un "hook de pré-commit" Git a été mis en place, pour lancer ESLint et Prettier sur tous les fichiers ajoutés à l'index. Si des erreurs ESLint sont présentes, le commit sera empêché. Ce sytème repose sur [Husky](https://github.com/typicode/husky), outil de l'écosystème NPM qui permet de faciliter la mise en place de hooks Git.

## Déploiement

On le répète, la procédure à suivre pour un déploiement complet (applications serveur et cliente) est documentée sur le dépôt de l'application serveur.

D'autres options existent, pour déployer spécifiquement cette application cliente :

* [Netlify](https://app.netlify.com/), qui permet de déployer facilement des applications front-end
* [Vercel](https://vercel.com/), qui fournit un service similaire
* [CapRover](https://caprover.com/) : solution Open Source qui fournit un service similaire, mais est destinée à être hébergée sur un serveur privé.

Nous avons volontairement laissé à la racine 3 fichiers qui permettent de déployer l'application en test sur une instance de CapRover :

* `Dockerfile` est une configuration Docker classique, qui effectue un "build" de l'application, puis qui "sert" cette application via le serveur web Nginx containerisé.
* `captain-definition` est le fichier de configuration pour CapRover, et référence le Dockerfile.
* `default.conf` est le fichier de configuration pour Nginx. Il est proche du fichier de configuration par défaut de ce dernier, à un détail près : lorsqu'une URL demandée ne correspond à aucun fichier du "build", c'est le fichier `index.html` qui est envoyé par défaut en guise de réponse. Cela permet de gérer élégamment le routage d'URL côté client, et d'éviter des erreurs 404 lorsque le visiteur n'est pas sur la page d'accueil et, pour une raison quelconque, recharge l'application.

> :information_source: les sections qui suivent sont le "Readme" original généré par "Create React App", l'outil permettant de créer une nouvelle application React.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

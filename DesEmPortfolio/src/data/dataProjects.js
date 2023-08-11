import printIt from "../assets/projets/printIt.webp";
import ohmyfood from "../assets/projets/ohmyfood.webp";
import nina_carducci from "../assets/projets/nina_carducci.webp";
import sophie_bluel from "../assets/projets/sophie_bluel.webp";
import kasa from "../assets/projets/kasa.webp";
import events from "../assets/projets/77events.webp";
import argentBank from "../assets/projets/argentBank.webp";
import booki from "../assets/projets/booki.webp";

const projects = [
  {
    id: 1,
    frTitle: "Intégration de la Page d'Accueil de Booki, une Agence de Voyage",
    enTitle: "Integration of the Home Page for Booki, a Travel Agency",
    imagePath: booki,
    alt: "Booki Project",
    githubLink: "",
    gitPageLink: "",
    frDescription:
      "Intégration de la page d'accueil de l'agence de voyage Booki en utilisant HTML & CSS, avec un design responsive pour une expérience utilisateur optimisée.",
    enDescription:
      "Integration of the home page for Booki travel agency using HTML & CSS, with a responsive design for an optimized user experience.",
    frCompetences: [
      "Compréhension des Maquettes",
      "Utilisation de HTML & CSS",
      "Conception Responsive",
    ],
    enCompetences: [
      "Understanding of Mockups",
      "Using HTML & CSS",
      "Responsive Design",
    ],
  },
  {
    id: 2,
    frTitle:
      "Améliorez l'interface d'un site mobile avec des animations CSS pour Ohmyfood",
    enTitle: "Enhance a mobile site interface with CSS animations for Ohmyfood",
    imagePath: ohmyfood,
    alt: "Ohmyfood Project",
    githubLink: "https://github.com/Incisif/Print-it",
    gitPageLink: "https://incisif.github.io/Print-it/",
    frDescription:
      "Développement d'un site 'mobile first' pour répertorier les menus de restaurants gastronomiques, avec des systèmes de réservation et la possibilité de composer le menu. Utilisation obligatoire de Sass depuis le 10/05/2023.",
    enDescription:
      "Development of a 'mobile first' site to list gourmet restaurant menus, with reservation systems and the ability to compose the menu. Mandatory use of Sass as of 10/05/2023.",
    frCompetences: [
      "Intégration de maquette en mobile-first",
      "Versionnage avec Git et Github",
      "Mise en œuvre d'animations CSS",
      "Utilisation de Sass",
    ],
    enCompetences: [
      "Integrating a mockup in mobile-first",
      "Versioning with Git and Github",
      "Implementing CSS animations",
      "Using Sass",
    ],
  },
  {
    id: 3,
    frTitle:
      "Dynamisez le site Internet statique d’une petite imprimerie familiale nommée Print it avec JavaScript",
    enTitle:
      "Enhance the Static Website of a Small Family Print Shop Named Print it with JavaScript",
    imagePath: printIt,
    alt: "Print it Project",
    githubLink: "https://github.com/Incisif/Print-it",
    gitPageLink: "https://incisif.github.io/Print-it/",
    frDescription:
      "Ce projet vous fera découvrir le langage JavaScript pour dynamiser le site Internet statique de Print it. Vous ajouterez des flèches pour la navigation, des event listeners, des bullet points au slider, et mettez en place le défilement infini sur le carrousel. Une expérience guidée pour comprendre les fondamentaux du langage JavaScript.",
    enDescription:
      "This project will introduce you to the JavaScript language to enhance the static website of Print it. You will add arrows for navigation, event listeners, bullet points to the slider, and implement infinite scrolling on the carousel. A guided experience to understand the fundamentals of JavaScript.",
    frCompetences: [
      "Utilisation des fondamentaux de JavaScript",
      "Manipulation du DOM",
      "Gestion des événements",
      "Défilement infini du carrousel",
    ],
    enCompetences: [
      "Using the fundamentals of JavaScript",
      "Manipulating the DOM",
      "Event handling",
      "Infinite carousel scrolling",
    ],
  },
  {
    id: 4,
    frTitle:
      "Créez une page web dynamique avec JavaScript pour l’agence ArchiWebos",
    enTitle: "Create a Dynamic Web Page with JavaScript for ArchiWebos Agency",
    imagePath: sophie_bluel,
    alt: "projet Sophie Bluel",
    githubLink: "https://github.com/Incisif/Sophie_Bluel",
    gitPageLink: "https://incisif.github.io/Sophie_Bluel/",
    frDescription:
      "Vous travaillerez comme développeur front-end pour l'agence ArchiWebos pour concevoir le site portfolio d'une architecte d'intérieur. Vous développerez la page de présentation des travaux de l'architecte, la page de connexion de l'administrateur du site, et la modale permettant d'uploader de nouveaux médias.",
    enDescription:
      "You will work as a front-end developer for ArchiWebos agency to design the portfolio site of an interior designer. You will develop the presentation page of the architect's work, the administrator's login page, and the modal allowing the upload of new media.",
    frCompetences: [
      "Manipuler les éléments du DOM avec JavaScript",
      "Récupérer les données utilisateurs dans le JavaScript via des formulaires",
      "Gérer les événements utilisateurs avec JavaScript",
    ],
    enCompetences: [
      "Manipulating DOM elements with JavaScript",
      "Retrieving user data in JavaScript via forms",
      "Managing user events with JavaScript",
    ],
  },
  {
    id: 5,
    frTitle: "Créez une application web de location immobilière avec React",
    enTitle: "Create a Web Application for Real Estate Rentals with React",
    imagePath: kasa,
    alt: "Kasa Project",
    githubLink: "https://github.com/Incisif/Kasa",
    gitPageLink: "",
    frDescription:
      "Développez une plateforme de location d'appartements pour Kasa en utilisant React. Implémentez des composants React, des routes React Router, suivez les maquettes Figma, et respectez les contraintes techniques telles que les animations CSS et le défilement de la galerie.",
    enDescription:
      "Develop an apartment rental platform for Kasa using React. Implement React components, React Router routes, follow Figma mockups, and adhere to technical constraints such as CSS animations and gallery scrolling.",
    frCompetences: [
      "Développer une interface web avec Sass",
      "Mettre en œuvre des animations CSS",
      "Initialiser une application avec Create React App",
      "Configurer la navigation entre les pages de l'application avec React Router",
      "Développer des éléments de l'interface d'un site web grâce à des composants React",
    ],
    enCompetences: [
      "Develop a web interface with Sass",
      "Implement CSS animations",
      "Initialize an application with Create React App",
      "Configure navigation between application pages with React Router",
      "Develop interface elements of a website using React components",
    ],
  },
  {
    id: 6,
    frTitle: "Optimisation SEO pour le site de Nina Carducci, photographe",
    enTitle: "SEO Optimization for Nina Carducci's Photography Website",
    imagePath: nina_carducci,
    alt: "Nina Carducci Photography",
    githubLink: "https://github.com/Incisif/ninacarducci",
    gitPageLink: "https://incisif.github.io/ninacarducci/",
    frDescription:
      "Optimisation globale du site pour améliorer les performances et le SEO. Mise en place du référencement local avec Schema.org, ajout des métas pour les réseaux sociaux, modifications pour l'accessibilité, et production d'un rapport d'optimisation présentant toutes les actions et leur impact.",
    enDescription:
      "Global site optimization to enhance performance and SEO. Implementation of local SEO using Schema.org, addition of social media metadata, accessibility adjustments, and production of an optimization report outlining all actions and their impact.",
    frCompetences: [
      "Analyser et auditer un site web pour l'optimisation SEO",
      "Optimiser les images et la structure du code",
      "Mettre en place le référencement local avec Schema.org",
      "Ajouter des métadonnées pour les réseaux sociaux",
      "Améliorer l'accessibilité du site et produire un rapport d'optimisation",
    ],
    enCompetences: [
      "Analyze and audit a website for SEO optimization",
      "Optimize images and code structure",
      "Implement local SEO using Schema.org",
      "Add metadata for social networks",
      "Enhance site accessibility and produce an optimization report",
    ],
  },
  {
    id: 7,
    frTitle: "Débogage et Test du Site de 77events",
    enTitle: "Debugging and Testing of 77events Website",
    imagePath: events,
    alt: "77events Website",
    githubLink: "https://github.com/Incisif/77events",
    gitPageLink: "",
    frDescription:
      "Finalisation de l'intégration du site one-page de 77events, après l'abandon du projet par un autre développeur. La mission comprenait le débogage de problèmes spécifiques, la complétion du cahier de recette avec tous les scénarios de tests pour vérifier le bon fonctionnement du site, et la résolution des problèmes évoqués durant l'échange avec le client.",
    enDescription:
      "Finalization of the one-page website integration for 77events, following the abandonment of the project by another developer. The mission included debugging specific issues, completing the acceptance test plan with all test scenarios to ensure the site's proper functioning, and resolving problems discussed during the client meeting.",
    frCompetences: [
      "Déboguer un site web grâce aux Chrome DevTools",
      "Compléter le cahier de recette avec des scénarios de tests",
      "Résoudre les problèmes spécifiques évoqués par le client",
      "Présenter le site, le code débuggé, et le cahier de recette",
    ],
    enCompetences: [
      "Debug a website using Chrome DevTools",
      "Complete the acceptance test plan with test scenarios",
      "Resolve specific client-mentioned issues",
      "Present the site, debugged code, and acceptance test plan",
    ],
  },
  {
    id: 8,
    frTitle: "Mise en Place du Tableau de Bord pour Argent Bank",
    enTitle: "Implementation of Dashboard for Argent Bank",
    imagePath: argentBank ,
    alt: "Argent Bank Dashboard",
    githubLink: "https://github.com/Incisif/ArgentBank-website",
    gitPageLink: "https://incisif.github.io/ArgentBank-website/",
    frDescription:
      "Création d'une application web React pour le système d'authentification des utilisateurs, avec responsivité et gestion du state avec Redux. Optimisation du code et des images, création de composants réutilisables et conception des routes API pour la phase de transactions.",
    enDescription:
      "Developed a React web application for user authentication system with responsive design and state management with Redux. Code and image optimization, reusable component creation, and API route design for phase 2 transactions.",
    frCompetences: [
      "Créer une application web responsive avec React",
      "Utiliser Redux pour la gestion du state",
      "Implémenter l'authentification des utilisateurs",
      "Optimiser les images et le code par la création de composants réutilisables",
      "Concevoir des routes API pour la manipulation des transactions"
    ],
    enCompetences: [
      "Create a responsive web application with React",
      "Use Redux for state management",
      "Implement user authentication",
      "Optimize images and code by creating reusable components",
      "Design API routes for transaction handling"
    ]
  }
  ,
];

export default projects;

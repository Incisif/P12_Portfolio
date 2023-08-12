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
    frTitle: "Intégration de Booki",
    enTitle: "Booki Integration",
    imagePath: booki,
    alt: "Booki Project",
    githubLink: "",
    gitPageLink: "",
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
    "Animations CSS pour Ohmyfood",
    enTitle: "CSS Animations for Ohmyfood",
    imagePath: ohmyfood,
    alt: "Ohmyfood Project",
    githubLink: "https://github.com/Incisif/Print-it",
    gitPageLink: "https://incisif.github.io/Print-it/",
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
    "Site Dynamique Print it",
    enTitle:
    "Dynamic Site: Print it",
    imagePath: printIt,
    alt: "Print it Project",
    githubLink: "https://github.com/Incisif/Print-it",
    gitPageLink: "https://incisif.github.io/Print-it/",
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
    frTitle: "Page web pour ArchiWebos avec JavaScript",
    enTitle: "Web Page for ArchiWebos with JavaScript",
    imagePath: sophie_bluel,
    alt: "projet Sophie Bluel",
    githubLink: "https://github.com/Incisif/Sophie_Bluel",
    gitPageLink: "https://incisif.github.io/Sophie_Bluel/",
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
    frTitle: "Location Immobilière avec React",
    enTitle: "Real Estate Rentals with React",
    imagePath: kasa,
    alt: "Kasa Project",
    githubLink: "https://github.com/Incisif/Kasa",
    gitPageLink: "",
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
    frTitle: "SEO pour Nina Carducci",
    enTitle: "SEO for Nina Carducci",
    imagePath: nina_carducci,
    alt: "Nina Carducci Photography",
    githubLink: "https://github.com/Incisif/ninacarducci",
    gitPageLink: "https://incisif.github.io/ninacarducci/",
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
    frTitle: "Tableau de Bord pour Argent Bank avec React et Redux",
    enTitle: "Dashboard for Argent Bank with React and Redux",
    imagePath: argentBank ,
    alt: "Argent Bank Dashboard",
    githubLink: "https://github.com/Incisif/ArgentBank-website",
    gitPageLink: "https://incisif.github.io/ArgentBank-website/",
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

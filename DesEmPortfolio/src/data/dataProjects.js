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
    frTitle: "Animations CSS pour Ohmyfood",
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
    frTitle: "Site Dynamique Print it",
    enTitle: "Dynamic Site: Print it",
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
      "Manipulation des éléments du DOM avec JavaScript",
      "Récupération des données via des formulaires",
      "Gestion des événements avec JavaScript",
    ],
    enCompetences: [
      "Manipulating DOM elements with JavaScript",
      "Retrieving data via forms",
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
      "Développement d'interface web avec Sass",
      "Animations CSS",
      "Initialisation d'application avec Create React App",
      "Navigation avec React Router",
      "Développement d'éléments d'interface avec React",
    ],
    enCompetences: [
      "Web interface development with Sass",
      "CSS animations",
      "Application initialization with Create React App",
      "Navigation with React Router",
      "Interface development with React components",
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
      "Analyse et audit SEO",
      "Optimisation des images et du code",
      "Référencement local avec Schema.org",
      "Ajout de métadonnées pour réseaux sociaux",
      "Amélioration de l'accessibilité et rapport d'optimisation",
    ],
    enCompetences: [
      "SEO analysis and audit",
      "Image and code optimization",
      "Local SEO with Schema.org",
      "Metadata for social networks",
      "Accessibility enhancement and optimization report",
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
      "Débogage avec Chrome DevTools",
      "Utilisation de React Developer Tools ",
    ],
    enCompetences: [
      "Debugging with Chrome DevTools",
      "Using React Developer Tools ",
    ],
  },
  {
    id: 8,
    frTitle: "Tableau de Bord pour Argent Bank avec React et Redux",
    enTitle: "Dashboard for Argent Bank with React and Redux",
    imagePath: argentBank,
    alt: "Argent Bank Dashboard",
    githubLink: "https://github.com/Incisif/ArgentBank-website",
    gitPageLink: "https://incisif.github.io/ArgentBank-website/",
    frCompetences: [
      "Gestion du state avec Redux",
      "Implémentation de l'authentification utilisateur",
      "Développement de green code",
      "Conception de routes API pour les transactions",
    ],
    enCompetences: [
      "State management with Redux",
      "User authentication implementation",
      "Green code development",
      "API route design for transactions",
    ],
  },
];
export default projects;

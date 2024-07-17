import fastype from "../assets/projets/fastype.webp";
import mooviz from "../assets/projets/mooviz.webp";
import inComming3 from "../assets/projets/inComming3.webp";
import inComming4 from "../assets/projets/inComming4.webp";
const PersonalProjects = [
  {
    id: 1,
    frTitle: "Fastype",
    enTitle: "Fastype",
    imagePath: fastype,
    alt: "Fastype Project",
    githubLink: "https://github.com/Incisif/fastype",
    gitPageLink: "https://www.fastype.desem.dev/",
    frCompetences: [
      "Création de maquettes",
      "Création de backlogs et d'un kanban",
      "Création d'une API avec express.js",
      "Utilisation de Firebase pour les services backend.",
      "Utilisation de TypeScript",
      "Tests Unitaires et d'Intégration avec Jest",
    ],
    enCompetences: [
      "Designing wireframes",
      "Creating backlogs and a kanban board",
      "Developing an API with Express.js",
      "Using Firebase for backend services",
      "Using TypeScript",
      "Unit and Integration Testing with Jest"
    ],
  },
  {
    id: 2,
    frTitle: "Mooviz",
    enTitle: "Mooviz",
    imagePath: mooviz,
    alt: "Mooviz Project",
    githubLink: "https://github.com/Incisif/mooviz",
    gitPageLink: "https://mooviz-nu.vercel.app/fr",
    frCompetences: [
    "Développement d'applications avec Next.js",
    "Gestion de l'authentification avec NextAuth",
    "Utilisation de Prisma pour l'ORM",
    "Chiffrement des mots de passe avec bcrypt",
    "Configuration et utilisation de TailwindCSS",
  ],
  enCompetences: [
    "Developing applications with Next.js",
    "Managing authentication with NextAuth",
    "Using Prisma for ORM",
    "Password hashing with bcrypt",
    "Setting up and using TailwindCSS",
  ],
  },
  {
    id: 3,
    frTitle: "",
    enTitle: "",
    imagePath: inComming3,
    alt: "Future Projet",
    githubLink: "",
    gitPageLink: "",
    frCompetences: [
      "",
    ],
    enCompetences: [
      "",
    ],
    frBanner: "En cours ...",
    enBanner: "In Progress ...",
  },
  {
    id: 4,
    frTitle: "",
    enTitle: "",
    imagePath: inComming4,
    alt: "Future Projet",
    githubLink: "",
    gitPageLink: "",
    frCompetences: [
      "",
    ],
    enCompetences: [
      "",
    ],
    frBanner: "En cours ...",
    enBanner: "In Progress ...",
  },
];
export default PersonalProjects;

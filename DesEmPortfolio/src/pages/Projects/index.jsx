import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import dataProjects from "../../data/dataProjects";
import dataInCommingProjects from "../../data/dataInCommingProjects";
import ProjectCard from "../../components/ProjectCard";
import ProjectModal from "../../components/Modal";
import { selectLanguage } from "../../features/languageSlice";
import { openModal } from "../../features/modalSlice";

function Projects() {
  const [showCards, setShowCards] = useState([]);
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const darkModeClass = darkMode ? "project--dark" : "project--light";
  const modalBlurClass = isModalOpen ? "project--blur" : "";
  const classes = `project ${darkModeClass} ${modalBlurClass}`;
  const language = useSelector(selectLanguage);

  const handleCardClick = (project) => {
    dispatch(openModal(project));
  };

  useEffect(() => {
    dataProjects.forEach((project) => {
      const delay = Math.random() * 1000;

      setTimeout(() => {
        setShowCards((prevShowCards) => [...prevShowCards, project.id]);
      }, delay);
    });
  }, []);
  const translations = {
    comingSoon: {
      en: "Comming soon",
      fr: "Bientôt disponible", // Peut être différent si besoin pour le mode sombre
    },
  };

  return (
    <Layout>
      <div className={classes}>
        <h1 className="project__title">
          {language === "fr" ? "Projets" : "Projects"}
        </h1>
        <h2 className="project__subtitle">
          {language === "fr" ? "Scolaires" : "School"}
        </h2>
        <div className="card__container">
          {dataProjects.map((project) => (
            <ProjectCard
              key={project.id}
              imagePath={project.imagePath}
              alt={project.alt}
              className={showCards.includes(project.id) ? "show" : ""}
              onClick={() => handleCardClick(project)}
            />
          ))}
        </div>
        <h2 className="project__subtitle">
          {language === "fr" ? "Personnels" : "Personal"}
        </h2>
        <div className="card__container">
          {dataInCommingProjects.map((project) => (
            <ProjectCard
              key={project.id}
              imagePath={project.imagePath}
              alt={project.alt}
              className={showCards.includes(project.id) ? "show" : ""}
              bannerText={translations.comingSoon[language]}
              theme={darkMode ? "dark" : "light"}
            />
          ))}
        </div>
      </div>
      {isModalOpen && <ProjectModal />}
    </Layout>
  );
}

export default Projects;

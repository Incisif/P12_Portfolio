import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import dataProjects from "../../data/dataProjects";
import ProjectCard from "../../components/ProjectCard";
import ProjectModal from "../../components/Modal";
import { selectLanguage } from "../../features/languageSlice";
import { openModal } from "../../features/modalSlice";

function Projects() {
  // STATES
  const [showCards, setShowCards] = useState([]);
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const language = useSelector(selectLanguage);
  const currentIndex = useSelector((state) => state.modal.content?.index);

  // VARIABLES
  const darkModeClass = darkMode ? "project--dark" : "project--light";
  const modalBlurClass = isModalOpen ? "project--blur" : "";
  const classes = `project ${darkModeClass} ${modalBlurClass}`;

  // EFFECTS
  useEffect(() => {
    document.title = "Projets - Portfolio Desmortreux Emmanuel";
  }, []);

  // Helper function to show a card with delay
  const showCardWithDelay = (project) => {
    const delay = Math.random() * 1500;
    setTimeout(() => {
      setShowCards((prevShowCards) => [...prevShowCards, project.id]);
    }, delay);
  };

  useEffect(() => {
    dataProjects.forEach(showCardWithDelay);
  }, []);

  // HANDLERS
  const validProjects = dataProjects.filter(
    (project) => !project.isPreviewOnly
  );

  const dispatch = useDispatch();

  const handleCardClick = (project) => {
    const index = validProjects.findIndex((p) => p.id === project.id);
    dispatch(openModal({ content: project, index }));
  };

  const handlePrev = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : validProjects.length - 1;

    dispatch(
      openModal({
        content: validProjects[newIndex],
        index: newIndex,
      })
    );
  };

  const handleNext = () => {
    const newIndex =
      currentIndex < validProjects.length - 1 ? currentIndex + 1 : 0;

    dispatch(
      openModal({
        content: validProjects[newIndex],
        index: newIndex,
      })
    );
  };

  // RENDER
  return (
    <Layout>
      <div className={classes}>
        <h1 className="project__title">
          {language === "fr" ? "Projets" : "Projects"}
        </h1>

        <div className="card__container">
          {dataProjects.map((project) => (
            <ProjectCard
              key={project.id}
              imagePath={project.imagePath}
              alt={project.alt}
              className={showCards.includes(project.id) ? "show" : ""}
              onClick={
                !project.isPreviewOnly
                  ? () => handleCardClick(project)
                  : undefined
              }
              bannerText={
                language === "fr" ? project.frBanner : project.enBanner
              }
              theme={darkMode ? "dark" : "light"}
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <ProjectModal
          projects={dataProjects}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}
    </Layout>
  );
}

export default Projects;

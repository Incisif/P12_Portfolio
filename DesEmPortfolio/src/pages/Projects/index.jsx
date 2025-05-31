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
    document.title = 'Projets - Portfolio Desmortreux Emmanuel';
  }, []);

  useEffect(() => {
    dataProjects.forEach((project) => {
      const delay = Math.random() * 1000;

      setTimeout(() => {
        setShowCards((prevShowCards) => [...prevShowCards, project.id]);
      }, delay);
    });
  }, []);

  // HANDLERS
  const dispatch = useDispatch();

  const handleCardClick = (project, index) => {
    dispatch(openModal({ content: project, index }));
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      dispatch(
        openModal({
          content: dataProjects[currentIndex - 1],
          index: currentIndex - 1,
        })
      );
    } else {
      dispatch(
        openModal({
          content: dataProjects[dataProjects.length - 1],
          index: dataProjects.length - 1,
        })
      );
    }
  };

  const handleNext = () => {
    if (currentIndex < dataProjects.length - 1) {
      dispatch(
        openModal({
          content: dataProjects[currentIndex + 1],
          index: currentIndex + 1,
        })
      );
    } else {
      dispatch(
        openModal({
          content: dataProjects[0],
          index: 0,
        })
      );
    }
  };

  // RENDER
  return (
    <Layout>
      <div className={classes}>
        <h1 className="project__title">
          {language === "fr" ? "Projets" : "Projects"}
        </h1>

        <div className="card__container">
          {dataProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              imagePath={project.imagePath}
              alt={project.alt}
              className={showCards.includes(project.id) ? "show" : ""}
              onClick={() => handleCardClick(project, index)}
              bannerText={language === "fr" ? project.frBanner : project.enBanner}
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

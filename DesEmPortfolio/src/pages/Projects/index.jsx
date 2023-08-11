import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import dataProjects from "../../data/dataProjects";
import ProjectCard from "../../components/ProjectCard";
import ProjectModal from "../../components/Modal";
import { openModal } from "../../features/modalSlice";

function Projects() {
  const [showCards, setShowCards] = useState([]);
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const darkModeClass = darkMode ? "project--dark" : "project--light";
  const modalBlurClass = isModalOpen ? "project--blur" : "";
  const classes = `project ${darkModeClass} ${modalBlurClass}`;

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

  return (
    <Layout>
      <div className={classes}>
        <h1 className="project__title">Projets</h1>
        <h2 className="project__subtitle">Projets Scolaires</h2>
        <div className="card__container">
          {dataProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              imagePath={project.imagePath}
              alt={project.alt}
              className={showCards.includes(project.id) ? "show" : ""}
              onClick={() => handleCardClick(project)}
            />
          ))}
        </div>
        <h2 className="project__subtitle">Futures projets</h2>
        <div className="card__container"></div>
      </div>
      {isModalOpen && <ProjectModal />}
    </Layout>
  );
}

export default Projects;

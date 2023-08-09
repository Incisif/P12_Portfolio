import { useEffect, useState } from 'react';
import Layout from "../../components/Layout";
import dataProjects from "../../data/dataProjects";
import ProjectCard from "../../components/ProjectCard";

function Projects() {
  const [showCards, setShowCards] = useState([]);

  useEffect(() => {
    dataProjects.forEach((project) => {
      const delay = Math.random() * 1000; // Timing aléatoire entre 0 et 5 secondes

      setTimeout(() => {
        setShowCards(prevShowCards => [...prevShowCards, project.id]);
      }, delay);
    });
  }, []);

  return (
    <Layout>
      <div className="project">
        <h1 className="projects__title">Projets</h1>
        <h2 className="projects__subtitle">Projets Scolaires</h2>
        <div className="card__container">
          {dataProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              imagePath={project.imagePath}
              alt={project.alt}
              className={showCards.includes(project.id) ? 'show' : ''}
            />
          ))}
          {/* Répétez pour d'autres sections si nécessaire */}
        </div>
        <h2 className="projects__subtitle">Future projets</h2>
        <div className="card__container"></div>
      </div>
    </Layout>
  );
}

export default Projects;

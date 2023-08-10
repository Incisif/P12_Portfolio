import PropTypes from "prop-types";

function ProjectCard({ imagePath, alt, className, onClick }) {
  return (
    <div className={`projectCard ${className}`} onClick={onClick}>
      <img className="projectCard__img" src={imagePath} alt={alt} />
      
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired, // ajout d'une prop onClick pour gérer le clic
};

export default ProjectCard;

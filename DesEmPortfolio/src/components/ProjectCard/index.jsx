import PropTypes from "prop-types";

function ProjectCard({ imagePath, alt, className, onClick }) {
  return (
    <div className={`projectCard ${className}`} onClick={onClick}>
      <img className="projectCard__img" src={imagePath} alt={alt} />
      
    </div>
  );
}

ProjectCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired, 
};

export default ProjectCard;

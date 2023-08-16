import PropTypes from "prop-types";

function ProjectCard({ imagePath, alt, className, onClick, bannerText, theme }) {
  return (
    <div className={`projectCard ${className}`} onClick={onClick}>
      <img className="projectCard__img" src={imagePath} alt={alt} />
      {bannerText && (
        <div className={`projectCard__banner projectCard__banner--${theme}`}>
          {bannerText}
        </div>
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  bannerText: PropTypes.string, 
  theme: PropTypes.oneOf(["light", "dark"]),
};

export default ProjectCard;

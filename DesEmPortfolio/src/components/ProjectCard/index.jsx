import PropTypes from 'prop-types';

function ProjectCard({  imagePath, alt }) {
  return (
    <div className="projectCard">
      {/* <h3 className='projectCard__title'>{title}</h3> */}
      <img className='projectCard__img'src={imagePath} alt={alt} />
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProjectCard;

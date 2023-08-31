import PropTypes from "prop-types";

function Link({ link, text }) {
  return (
    <div className="link">
      <a href={link} className="link__text">
        {text}
        <i className="material-icons link__icon">north_east</i>
      </a>
    </div>
  );
}

Link.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
export default Link;

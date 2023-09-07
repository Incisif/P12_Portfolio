import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// LINK COMPONENT
function Link({ link, text }) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const colorClass = darkMode ? "link--dark" : "link--light";
  return (
    <div className={`link ${colorClass}`}>
      <a href={link} className="link__text">
        {text}
        <i className="material-icons link__icon">north_east</i>
      </a>
    </div>
  );
}

// PROP TYPES 
Link.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Link;

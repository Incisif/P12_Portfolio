import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../features/languageSlice";

// REDUX STATE SELECTORS
const renderAnimatedText = (text) => [...text].map((char, i) => <span key={i}>{char}</span>);

function NavBar() {
  // REDUX STATE SELECTORS
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const language = useSelector(selectLanguage);

  // COMPONENT LOGIC
  const backgroundColorClass = darkMode ? "navBar--dark" : "navBar--light";

  // COMPONENT RENDER
  return (
    <nav className={`navBar ${backgroundColorClass}`}>
      <ul className="navBar__list">
        <li className="navBar__item">
          <Link to="/projects">
            {renderAnimatedText(language === "fr" ? "Projets" : "Projects")}
          </Link>
        </li>
        <li className="navBar__item">
          <Link to="/formation">
            {renderAnimatedText("Formation")}
          </Link>
        </li>
        <li className="navBar__item">
          <Link to="/about">
            {renderAnimatedText(language === "fr" ? "À propos" : "About")}
          </Link>
        </li>
        <li className="navBar__item">
          <Link to="/contact">
            {renderAnimatedText("Contact")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

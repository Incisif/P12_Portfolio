import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../features/languageSlice";

function NavBar() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const backgroundColorClass = darkMode ? "navBar--dark" : "navBar--light";
  const language = useSelector(selectLanguage);
  return (
    <nav className={`navBar ${backgroundColorClass}`}>
      <ul className="navBar_list">
        <li className="navBar__item">
          <Link to="/projects">{language === "fr" ? "Projets": "Projects"}</Link>
        </li>
        <li className="navBar__item">
          <Link to="/formation">Formation</Link>
        </li>
        <li className="navBar__item">
          <Link to="/about">{language === "fr" ? "À propos" : "About"}</Link>
        </li>
        <li className="navBar__item">
          <Link to="/contact">Contact</Link>
          
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

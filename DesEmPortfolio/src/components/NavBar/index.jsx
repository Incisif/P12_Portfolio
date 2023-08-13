import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const backgroundColorClass = darkMode ? "navBar--dark" : "navBar--light";
  return (
    <nav className={`navBar ${backgroundColorClass}`}>
      <ul className="navBar_list">
        <li className="navBar__item">
          <Link to="/projects">Projets</Link>
        </li>
        <li className="navBar__item">
          <Link to="/about">À propos</Link>
        </li>
        <li className="navBar__item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

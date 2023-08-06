import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navBar">
          <ul className="navBar_list">
            <li className="navBar__item">
              <Link to="/projets">Projets</Link>
            </li>
            <li className="navBar__item">
              <Link to="/aptitudes">Aptitudes</Link>
            </li>
            <li className="navBar__item">
              <Link to="/outils">Outils</Link>
            </li>
            <li className="navBar__item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    );
}

export default NavBar;

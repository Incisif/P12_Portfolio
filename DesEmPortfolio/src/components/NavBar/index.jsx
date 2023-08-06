import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navBar">
          <ul className="navBar_list">
            <li className="navBar__item">
              <Link to="/projects">Projets</Link>
            </li>
            <li className="navBar__item">
              <Link to="/Formation ">Formation</Link>
            </li>
            <li className="navBar__item">
              <Link to="/About">À propos</Link>
            </li>
            <li className="navBar__item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    );
}

export default NavBar;

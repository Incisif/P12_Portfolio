import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";


const HomeButton = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const themeClass = darkMode ? "homePageLink--dark" : "homePageLink--light";
  const location = useLocation();
  
  // Prevent rendering on root path
  if (location.pathname === '/') {
    return null;
  }


  return (
    <div className={`homePageLink ${themeClass}`}>
      <div className="homePageLink__line" />
      <Link className="homePageLink__text" to="/">
        Home
      </Link>
    </div>
  );
};


export default HomeButton;

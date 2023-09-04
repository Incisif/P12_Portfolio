import PropTypes from "prop-types";
import ThemeSwitcher from "../ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher";
import HomePageLink from "../HomePageLink";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  // REDUX STATE
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const backgroundColorClass = darkMode ? "layout--dark" : "layout--light";

  // COMPONENT RENDER
  return (
    <div className={`layout ${backgroundColorClass}`}>
      <div className={`layout__container`}>{children}</div>
      <HomePageLink />
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  );
};

// PROP TYPES
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

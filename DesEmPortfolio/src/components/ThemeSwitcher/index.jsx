import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../features/darkModeSlice";

// THEME SWITCHER COMPONENT
const ThemeSwitcher = () => {
  // REDUX HOOKS
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  // DETERMINE THEME CLASS
  const themeSwitcherClass = darkMode
    ? "ThemeSwitcher--dark"
    : "ThemeSwitcher--light";

  // RENDER COMPONENT
  return (
    <div className={`ThemeSwitcher ${themeSwitcherClass}`}>
      {/* DARK MODE LABEL AND INPUT */}
      <label>
        <input
          type="radio"
          name="theme"
          checked={darkMode}
          onChange={() => dispatch(toggleDarkMode())}
          className="ThemeSwitcher__input"
        />
        <p className="ThemeSwitcher__text">Dark</p>
      </label>

      {/* LIGHT MODE LABEL AND INPUT */}
      <label>
        <input
          type="radio"
          name="theme"
          checked={!darkMode}
          onChange={() => dispatch(toggleDarkMode())}
          className="ThemeSwitcher__input"
        />
        <div className="ThemeSwitcher__text">Light</div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;

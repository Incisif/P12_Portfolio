import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../features/darkModeSlice";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const themeSwitcherClass = darkMode ? "ThemeSwitcher--dark" : "ThemeSwitcher--light";

  return (
    <div className={`ThemeSwitcher ${themeSwitcherClass}`}>
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

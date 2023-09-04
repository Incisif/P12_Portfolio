import { useSelector, useDispatch } from "react-redux";
import { switchToEnglish, switchToFrench } from "../../features/languageSlice";

function LanguageSwitcher() {
  const dispatch = useDispatch();

  // REDUX STATE
  const language = useSelector((state) => state.language.value);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const languageSwitcherClass = darkMode
    ? "language-switcher--dark"
    : "language-switcher--light";
  const lineClass = `language-switcher__line language-switcher__line--${language}`;

  // COMPONENT RENDER
  return (
    <div className={`language-switcher ${languageSwitcherClass}`}>
      <div className="language-switcher__options">
        <button
          className={`language-switcher__option ${
            language === "fr" ? "language-switcher__option--active" : ""
          }`}
          onClick={() => dispatch(switchToFrench())}
        >
          FR
        </button>
        <button
          className={`language-switcher__option ${
            language === "en" ? "language-switcher__option--active" : ""
          }`}
          onClick={() => dispatch(switchToEnglish())}
        >
          EN
        </button>
      </div>
      <div className={lineClass} />
    </div>
  );
}

export default LanguageSwitcher;

import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../features/languageSlice";
import dataFormation from "../../data/dataFormation.json";

function Formation() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const backgroundColorClass = darkMode ? "formation--dark" : "formation--light";
  const language = useSelector(selectLanguage);

  const jsonData = dataFormation;
  const sections = jsonData.content;

  return (
    <Layout>
      <div className={`formation ${backgroundColorClass}`}>
        <h1 className="formation__title">{jsonData.title[language]}</h1>
        <div className="formation__content">
          {sections.map((section, index) => (
            <div key={index} className="formation__section">
              <h2 className="formation__section-title">
                {section.title[language]}
              </h2>
              <ul className="formation__skills">
                {section[language].map((skill, skillIndex) => (
                  <li key={skillIndex} className="formation__skill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Formation;

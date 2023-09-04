import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../features/languageSlice";
import dataFormation from "../../data/dataFormation.json";
import { useEffect } from "react";
import Link from "../../components/Link";

function Formation() {
  // STATE SELECTION
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const backgroundColorClass = darkMode
    ? "formation--dark"
    : "formation--light";
  const language = useSelector(selectLanguage);

  // DATA
  const jsonData = dataFormation;
  const sections = jsonData.content;

  // SIDE EFFECTS
  useEffect(() => {
    document.title = "Formation - Portfolio Desmortreux Emmanuel";
  }, []);

  // RENDER
  return (
    <Layout>
      {/* Formation Section */}
      <div className={`formation ${backgroundColorClass}`}>
        <h1 className="formation__title">{jsonData.title[language]}</h1>
        <div className="formation__content">
          {/* Formation Sections */}
          {sections.map((section, index) => (
            <div key={index} className="formation__section">
              <h2 className="formation__section-title">
                {section.title[language]}
              </h2>
              {/* Skills List */}
              <ul className="formation__skills">
                {section[language].map((skill, skillIndex) => (
                  <li key={skillIndex} className="formation__skill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* LinkedIn Link */}
          <Link
            link={"https://www.linkedin.com/in/emmanuel-desmortreux-1223a5257/"}
            text={"LinkedIn"}
          ></Link>
        </div>
      </div>
    </Layout>
  );
}

export default Formation;

import Layout from "../../components/Layout";
import portrait from "../../assets/portrait_About.webp";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../features/languageSlice";
import { useEffect } from "react";
import Link from "../../components/Link";

function About() {
  // STATE SELECTION
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const backgroundColorClass = darkMode ? "about--dark" : "about--light";
  const language = useSelector(selectLanguage);

  // SIDE EFFECTS
  useEffect(() => {
    document.title = "À propos - Portfolio Desmortreux Emmanuel";
  }, []);

  // RENDER
  return (
    <Layout>
      <div className={`about ${backgroundColorClass}`}>
        <h1 className="about__title">
          {language === "fr" ? "À propos" : "About"}
        </h1>
        <div className="about__content">
          <img className="about__img" src={portrait} alt="portrait" />
          <div className="about__textContainer">
            <p className="about__text">
              {language === "fr"
                ? "Passionné par l’esthétisme et les technologies numériques, j’ai décidé à 40 ans de me reconvertir pour devenir développeur web. Ce choix m’a permis d’allier rigueur technique et sens du design au service de projets concrets."
                : "Driven by a passion for aesthetics and digital technologies, I chose to retrain at the age of 40 to become a web developer. This decision allowed me to combine technical precision and design sensibility to serve real-world projects."}
            </p>
            <p className="about__text">
              {language === "fr"
                ? "Aujourd’hui, je conçois et développe des sites web performants, modernes et adaptés aux besoins des clients. Mon objectif : transformer vos idées en solutions digitales fiables et efficaces."
                : "Today, I design and develop modern, high-performance websites tailored to client needs. My goal: to turn your ideas into reliable and effective digital solutions."}
            </p>
          </div>
        </div>
      </div>
      <Link link="/contact" text="Contact"></Link>
    </Layout>
  );
}

export default About;

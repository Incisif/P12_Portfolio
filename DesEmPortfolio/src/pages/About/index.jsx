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
                ? "Fasciné par l'esthétisme et l'informatique depuis toujours, j'ai saisi l'opportunité à 40 ans de reprendre mes études et de devenir intégrateur web. La fusion de la créativité artistique avec la technologie était mon appel."
                : "Fascinated by aesthetics and computer science from a young age, I seized the opportunity at 40 to return to school and become a web integrator. The fusion of artistic creativity with technology was my calling."}
            </p>
            <p className="about__text">
              {language === "fr"
                ? "Aujourd'hui, je crée des sites web esthétiques et solides. Cette seconde carrière n'est pas seulement un métier pour moi, c'est ma vocation. Je suis prêt à vous aider à concrétiser vos rêves numériques."
                : "Today, I create aesthetically pleasing and robust websites. This second career isn't just a job for me, it's my vocation. I'm ready to help you bring your digital dreams to life."}
            </p>
          </div>
        </div>
      </div>
      <Link link="/contact" text="Contact"></Link>
    </Layout>
  );
}

export default About;

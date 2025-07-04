import NavBar from "../../components/NavBar";
import portrait from "../../assets/portrait.webp";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../features/languageSlice";
import Loader from "../../pages/Loader";
import { useEffect, useState } from "react";

function Home() {
  // STATE AND REDUX SELECTORS
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const backgroundColorClass = darkMode ? "home--dark" : "home--light";
  const language = useSelector(selectLanguage);
  const [showLoader, setShowLoader] = useState(false);
  const [blur, setBlur] = useState(false);

  // SIDE EFFECTS
  // Set the document title
  useEffect(() => {
    document.title = "Accueil - Portfolio Desmortreux Emmanuel";
  }, []);

  // Handle the loader logic
  useEffect(() => {
    if (sessionStorage.getItem("visited") !== "true") {
      setShowLoader(true);
      sessionStorage.setItem("visited", "true");
      setTimeout(() => {
        setBlur(true);
      }, 3300);
      setTimeout(() => {
        setBlur(true);
        setShowLoader(false);
      }, 3800);
    }
  }, []);

  // RENDER
  return (
    <>
      {showLoader ? <Loader /> : null}
      <Layout>
        <div
          className={`home ${backgroundColorClass} ${blur ? "home--blur" : ""}`}
        >
          <div className="home__name">
            <div className="home__textWrapper">
              <div className="home__fullName">DESMORTREUX EMMANUEL</div>
            </div>
          </div>
          <div className="home__textWrapper">
            <h1 className="home__title">
              {language === "fr"
                ? "Développeur Web"
                : "Web Developer"}
            </h1>
          </div>
          <div className="portrait">
            <img
              className="portrait__image"
              src={portrait}
              alt="DESMORTREUX EMMANUEL portrait"
            />
            <p className="portrait__quote">{`// Dans les détails se trouve la perfection.`}</p>
          </div>

          <NavBar />
        </div>
      </Layout>
    </>
  );
}

export default Home;

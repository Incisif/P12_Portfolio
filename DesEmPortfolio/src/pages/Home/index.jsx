import NavBar from "../../components/NavBar";
import portrait from "../../assets/portrait.webp";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../features/languageSlice";
function Home() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const backgroundColorClass = darkMode ? "home--dark" : "home--light";
  const language = useSelector(selectLanguage);

  return (
    <Layout>
      <div className={`home ${backgroundColorClass}`}>
        <div className="home__name">
          <div className="home__textWrapper">
            <div className="home__fullName">DESMORTREUX EMMANUEL</div>
          </div>
        </div>
        <div className="home__textWrapper">
          <h1 className="home__title">{language === "fr" ? "Intégrateur Web junior":"Junior Web Developer"}</h1>
        </div>
        <img className="home__portrait" src={portrait} />
        <NavBar />
      </div>
    </Layout>
  );
}
export default Home;

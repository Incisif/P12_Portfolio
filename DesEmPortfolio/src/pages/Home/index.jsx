import NavBar from "../../components/NavBar";
import portrait from "../../assets/portrait.webp";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
function Home() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const backgroundColorClass = darkMode ? "home--dark" : "home--light";
  return (
    <Layout>
      <div className={`home ${backgroundColorClass}`}>
        <div className="home__name">
          <div className="home__textWrapper">
            <div className="home__fullName">DESMORTREUX EMMANUEL</div>
          </div>
        </div>
        <div className="home__textWrapper">
          <h1 className="home__title">Intégrateur web junior</h1>
        </div>
        <img className="home__portrait" src={portrait} />
        <NavBar />
      </div>
    </Layout>
  );
}
export default Home;

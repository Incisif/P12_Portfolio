import NavBar from "../../components/NavBar";
import portrait from "../../assets/portrait.webp";
import Layout from "../../components/Layout";
function Home() {
  return (
    <Layout>
      <div className="home">
        <div className="home__name">
          <div className="home__firstName">DESMORTREUX</div>
          <div className="home__secondName">EMMANUEL</div>
        </div>
        <h1 className="home__title">Intégrateur web</h1>
        <img className="home__portrait" src={portrait} />
        <NavBar />
      </div>
    </Layout>
  );
}
export default Home;

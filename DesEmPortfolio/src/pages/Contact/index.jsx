import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const backgroundColorClass = darkMode ? "contact--dark" : "contact--light";

  useEffect(() => {
    document.title = "Contact - Portfolio Desmortreux Emmanuel";
  }, []);

  return (
    <Layout>
      <div className={`contact ${backgroundColorClass}`}>
        <h1 className="contact__title">Contact</h1>
        <div className="contact__content">
          <ContactForm />
          <div className="contact__icon"><i className="material-icons link__icon">north_west</i></div>
          <div className="contact__text">
            Que vous ayez une idée précise ou juste une ébauche, contactez-moi
            et ensemble, donnons vie à votre vision web.
          </div>
        </div>
        <div className="social">
          <ul>
            <li>
              <Link className="social__link"to="https://www.linkedin.com/in/emmanuel-desmortreux-1223a5257/">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
            <li>
              <Link className="social__link" to="https://www.instagram.com/loeildejack/?hl=fr">
                <FontAwesomeIcon icon={faSquareInstagram} />
              </Link>
            </li>
            <li>
              <Link className="social__link" to="https://twitter.com/_Emdodj">
                <FontAwesomeIcon icon={faSquareXTwitter} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
export default Contact;

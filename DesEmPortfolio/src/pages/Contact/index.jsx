import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Contact() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const backgroundColorClass = darkMode ? "contact--dark" : "contact--light";

  useEffect(() => {
    document.title = 'Contact - Portfolio Desmortreux Emmanuel';
  }, []);

  return (
    <Layout>
      <div className={`contact ${backgroundColorClass}`}>
        <h1 className="contact__title">Contact</h1>
        <ContactForm />
      </div>
    </Layout>
  );
}
export default Contact;

import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { useSelector } from "react-redux";


function Contact() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const backgroundColorClass = darkMode ? "contact--dark" : "contact--light";


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

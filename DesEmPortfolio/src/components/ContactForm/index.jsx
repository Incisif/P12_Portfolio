import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm } from "../../features/contactFormSlice";
import { selectLanguage } from "../../features/languageSlice";

function ContactForm() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.contactForm.status);
  const message = useSelector((state) => state.contactForm.message);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const language = useSelector(selectLanguage);
  const backgroundColorClass = darkMode
    ? "contact-form--dark"
    : "contact-form--light";

  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactForm(formData));
  };

  return (
    <form
      className={`contact-form ${backgroundColorClass}`}
      onSubmit={handleSubmit}
    >
      {status === "succeeded" ? (
        <p className="contact-form__message">{message}</p>
      ) : (
        <>
          <div className="contact-form__input-wrapper">
            <label htmlFor="firstName" className="contact-form__label">
              {language === "fr" ? "Prénom:" : "First name:"}
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="contact-form__input"
            />
          </div>
          <div className="contact-form__input-wrapper">
            <label htmlFor="secondName" className="contact-form__label">
              {language === "fr" ? "Nom:" : "Last name"}
            </label>
            <input
              type="text"
              id="secondName"
              name="secondName"
              value={formData.secondName}
              onChange={handleChange}
              required
              className="contact-form__input"
            />
          </div>
          <div className="contact-form__input-wrapper">
            <label htmlFor="email" className="contact-form__label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-form__input"
            />
          </div>
          <div className="contact-form__input-wrapper">
            <label htmlFor="message" className="contact-form__label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-form__textarea"
            />
          </div>
          <button
            type="submit"
            className="contact-form__button"
            disabled={status === "loading"}
          >
            {language === "fr" ? "Envoyer" : "Submit"}
          </button>
        </>
      )}
      {status === "failed" && (
        <p className="contact-form__message contact-form__message--error">
          {message}
        </p>
      )}
    </form>
  );
}

export default ContactForm;

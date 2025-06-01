import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { closeModal } from "../../features/modalSlice";
import { useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faX,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { selectLanguage } from "../../features/languageSlice";

// MODAL COMPONENT
function Modal({ handlePrev, handleNext }) {
  const dispatch = useDispatch();

  // REDUX SELECTORS
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const modalContent = useSelector((state) => state.modal.content);
  const language = useSelector(selectLanguage);

  // MODAL STYLING CLASS BASED ON THEME
  const modalModeClass = darkMode
    ? "ProjectModal--dark"
    : "ProjectModal--light";

  // REFS
  const modalRef = useRef(null);

  // CLOSE MODAL FUNCTION
  const handleClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  // CLOSE MODAL ON CLICK OUTSIDE
  useEffect(() => {
    if (!isModalOpen) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose, isModalOpen]);
  if (language === "en")
    console.log("modalContent", modalContent.content.enTitle);

  return (
    <div className={`ProjectModal__wrapper ${isModalOpen ? "is-open" : ""}`}>
      <div ref={modalRef} className={`ProjectModal ${modalModeClass}`}>
        {/* NAVIGATION BUTTONS */}

        <button
          onClick={handleNext}
          aria-label="Suivant"
          className="ProjectModal__nav ProjectModal__nav--right"
        >
          <FontAwesomeIcon icon={faArrowRight} label="check" />
        </button>

        <button
          onClick={handlePrev}
          aria-label="Précédent"
          className="ProjectModal__nav ProjectModal__nav--left"
        >
          <FontAwesomeIcon icon={faArrowLeft} label="check" />
        </button>

        <div className="container">
          <button className="container__close" onClick={handleClose}>
            <FontAwesomeIcon className="close__icon" icon={faX} label="close" />
          </button>
        </div>

        {modalContent && (
          <div className="ProjectModal__content">
            <div className="ProjectModal__mainContent">
              {/* IMAGE CONTENT */}
              <a
                href={modalContent.content.gitPageLink}
                target="_blank"
                rel="noreferrer"
                className="ProjectModal__img-link"
              >
                <img
                  className="ProjectModal__img"
                  src={modalContent.content.imagePath}
                  alt={modalContent.content.alt}
                />
              </a>

              {/* TEXTUAL CONTENT */}
              <div className="ProjectModal__text-container">
                <h2 className="ProjectModal__title">
                  {language === "fr"
                    ? modalContent.content.frTitle
                    : modalContent.content.enTitle}
                </h2>

                {/* PROJECT DESCRIPTION */}
                <p className="ProjectModal__description">
                  {language === "fr"
                    ? modalContent.content.frDescription
                    : modalContent.content.enDescription}
                </p>

                <h3 className="ProjectModal__skillsTitle">
                  {language === "fr" ? "Compétences:" : "Skills:"}
                </h3>

                {/* SKILLS LIST */}
                <ul className="ProjectModal__skillsList">
                  {(language === "fr"
                    ? modalContent.content.frCompetences
                    : modalContent.content.enCompetences
                  ).map((skill, index) => (
                    <li key={index} className="ProjectModal__skill">
                      <FontAwesomeIcon
                        className="ProjectModal__icon"
                        icon={faCheck}
                        label="check"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* EXTERNAL LINKS */}
              <div className="ProjectModal__links">
                {modalContent.content.githubLink && (
                  <a
                    className="ProjectModal__githubIcon"
                    href={modalContent.content.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} label="github link" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Modal.propTypes = {
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default Modal;

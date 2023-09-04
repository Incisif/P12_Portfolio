import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../features/modalSlice";
import PropTypes from "prop-types";
import { useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faCheck, faX } from "@fortawesome/free-solid-svg-icons";
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

  return (
    <div className={`ProjectModal__wrapper ${isModalOpen ? "is-open" : ""}`}>
      <div ref={modalRef} className={`ProjectModal ${modalModeClass}`}>
        <div className="container">
          <button className="container__close" onClick={handleClose}>
            <FontAwesomeIcon className="close__icon" icon={faX} label="close" />
          </button>
        </div>

        {modalContent && (
          <div className="ProjectModal__content">
            {/* NAVIGATION AREAS */}
            <div className="leftClickableArea" onClick={handlePrev}></div>

            <div className="ProjectModal__mainContent">
              {/* IMAGE CONTENT */}
              <img
                className="ProjectModal__img"
                src={modalContent.content.imagePath}
                alt={modalContent.content.alt}
              />

              {/* TEXTUAL CONTENT */}
              <div className="ProjectModal__text-container">
                <h2 className="ProjectModal__title">
                  {language === "fr"
                    ? modalContent.content.frTitle
                    : modalContent.enTitle}
                </h2>
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
                  >
                    <FontAwesomeIcon icon={faGithub} label="github link" />
                    <span>GitHub</span>
                  </a>
                )}
                {modalContent.content.gitPageLink && (
                  <a
                    className="ProjectModal__gitPageIcon"
                    href={modalContent.content.gitPageLink}
                  >
                    <FontAwesomeIcon icon={faGlobe} label="github pages link" />
                    <span>GitHub Pages</span>
                  </a>
                )}
              </div>
            </div>

            <div className="rightClickableArea" onClick={handleNext}></div>
          </div>
        )}
      </div>
    </div>
  );
}

// PROP TYPES VALIDATION
Modal.propTypes = {
  children: PropTypes.node,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default Modal;

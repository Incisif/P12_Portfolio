import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../features/modalSlice";
import PropTypes from "prop-types";
import { useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { selectLanguage } from "../../features/languageSlice";


function Modal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const modalContent = useSelector((state) => state.modal.content);
  const modalRef = useRef(null);
  const modalModeClass = darkMode ? "ProjectModal--dark" : "ProjectModal--light";
  const language = useSelector(selectLanguage);

  const handleClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

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
            X
          </button>
        </div>
        {modalContent && (
          <div className="ProjectModal__content">
            <img
              className="ProjectModal__img"
              src={modalContent.imagePath}
              alt={modalContent.alt}
            />
            <h2 className="ProjectModal__title">
              {language === "fr" ? modalContent.frTitle : modalContent.enTitle}
            </h2>
            <p className="ProjectModal__description">
              {language === "fr" ? modalContent.frDescription : modalContent.enDescription}
            </p>
            <h3 className="ProjectModal__skillsTitle">
              {language === "fr" ? "Compétences:" : "Skills:"}
            </h3>
            <ul className="ProjectModal__skillsList">
              {(language === "fr" ? modalContent.frCompetences : modalContent.enCompetences).map((skill, index) => (
                <li key={index} className="ProjectModal__skill">
                  {skill}
                </li>
              ))}
            </ul>
            {modalContent.githubLink && (
              <a
                className="ProjectModal__githubIcon"
                href={modalContent.githubLink}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
            {modalContent.gitPageLink && (
              <a className="ProjectModal__gitPageIcon" 
              href={modalContent.gitPageLink}>
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;

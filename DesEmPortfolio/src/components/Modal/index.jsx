import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../features/modalSlice";
import PropTypes from "prop-types";
import { useEffect, useRef, useCallback } from "react";

function Modal({ children }) {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isOpen); // Vérifiez que c'est le bon chemin dans votre état
  const modalRef = useRef(null);

  const handleClose = useCallback(() => { // Utilisation de useCallback ici
    dispatch(closeModal());
  }, [dispatch]); // Ajouté dispatch comme dépendance

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
  }, [handleClose, isModalOpen]); // handleClose ne change plus à chaque rendu

  return (
    <div className={`ProjectModal__wrapper ${isModalOpen ? 'is-open' : ''}`}>
      <div ref={modalRef} className="ProjectModal">
        <button className="ProjectModal__close" onClick={handleClose}>X</button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;

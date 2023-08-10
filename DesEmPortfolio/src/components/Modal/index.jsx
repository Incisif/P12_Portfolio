import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../features/modalSlice";
import PropTypes from "prop-types";
import { useEffect, useRef, useCallback } from "react";

function Modal({ children }) {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const modalRef = useRef(null);

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
      <div ref={modalRef} className="ProjectModal">
        <div className="container">
          <button className="container__close" onClick={handleClose}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;

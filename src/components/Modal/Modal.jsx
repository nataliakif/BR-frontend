import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const ModalWrapper = ({ open, onClose, children }) => {
  const modalRef = useRef(document.getElementById('modal-root'));
  useEffect(() => {
    const handleClose = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [onClose]);

  const handleCloseClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return (
    open &&
    createPortal(
      <div className={styles.overlay} onClick={handleCloseClick}>
        <div className={styles.modal}>{children}</div>
      </div>,
      modalRef.current
    )
  );
};

ModalWrapper.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalWrapper;

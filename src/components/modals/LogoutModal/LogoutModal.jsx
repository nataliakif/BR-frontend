import PropTypes from 'prop-types';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import s from './LogoutModal.module.css';

const LogoutModal = ({ open, onClose, logoutFunc }) => {
  return (
    <Modal className={s.modal} open={open} onClose={onClose}>
      <div className={s.wrapper}>
        <p className={s.wrapper_text}>
          If you leave the program your data can be lost
        </p>
        <div className={s.buttons}>
          <Button className="transparent" text="Cancel" onClick={onClose} />
          <Button className="main" text="Log Out" onClick={logoutFunc} />
        </div>
      </div>
    </Modal>
  );
};

LogoutModal.propTypes = {
  open: PropTypes.bool.isRequired,
  logoutFunc: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LogoutModal;

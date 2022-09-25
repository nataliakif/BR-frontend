import PropTypes from 'prop-types';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import sprite from './sprite.svg';
import s from './DoingFineModal.module.css';
const DoingFineModal = ({ open, onClose, onNewTraining }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className={s.wrapper}>
        <svg className={s.wrapper_svg}>
          <use href={`${sprite}#icon-thumb_up`} />
        </svg>
        <p className={s.wrapper_text}>
          Well done! but you need to be a little bit faster. You can do it
        </p>
        <div className={s.buttons}>
          <Button className="main" text="NewTraining" onClick={onNewTraining} />
          <Button className="transparent" text="Back" onClick={onClose} />
        </div>
      </div>
    </Modal>
  );
};

DoingFineModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onNewTraining: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DoingFineModal;

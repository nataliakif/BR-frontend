import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import sprite from '../DoingFineModal/sprite.svg';
import s from './TrainingExecutedModal.module.css';
import { useState } from 'react';

const TrainingExecutedModal = ({ isLoading, handleCloseOfTraining }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal onClose={handleClose} open={open}>
      <div className={s.wrapper}>
        <svg className={s.wrapper_svg}>
          <use href={`${sprite}#icon-thumb_up`} />
        </svg>
        <p className={s.wrapper_text}>
          Congratulations! All books have been read!
        </p>

        <div className={s.buttons}>
          <Button
            className="main"
            text="NewTraining"
            onClick={handleCloseOfTraining}
            disabled={isLoading}
          />
          <Button className="transparent" text="Back" onClick={handleClose} />
        </div>
      </div>
    </Modal>
  );
};

export default TrainingExecutedModal;
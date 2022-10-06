import PropTypes from 'prop-types';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import sprite from '../DoingFineModal/sprite.svg';
import s from './TrainingExecutedModal.module.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TrainingExecutedModal = ({ isLoading, handleCloseOfTraining }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  return (
    <Modal onClose={handleClose} open={open}>
      <div className={s.wrapper}>
        <svg className={s.wrapper_svg}>
          <use href={`${sprite}#icon-thumb_up`} />
        </svg>
        <p className={s.wrapper_text}>{t('modal.congratulations')}</p>

        <div className={s.buttons}>
          <Button
            className="main"
            text={t('modal.newTraining')}
            onClick={() => handleCloseOfTraining()}
            disabled={isLoading}
          />
          <Button
            className="transparent"           
            tabIndex={0}
            autoFocus={true}
            text={t('modal.back')}
            onClick={handleClose}
          />
        </div>
      </div>
    </Modal>
  );
};
TrainingExecutedModal.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  handleCloseOfTraining: PropTypes.func.isRequired,
  onClose: PropTypes.func,
};

export default TrainingExecutedModal;

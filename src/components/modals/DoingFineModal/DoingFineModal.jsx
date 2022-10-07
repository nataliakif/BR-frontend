import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import sprite from './sprite.svg';
import s from './DoingFineModal.module.css';

const DoingFineModal = ({ open, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal open={open} onClose={onClose}>
      <div className={s.wrapper}>
        <svg className={s.wrapper_svg}>
          <use href={`${sprite}#icon-thumb_up`} />
        </svg>
        <p className={s.wrapper_text}>{t('statistics.wellDone')}</p>
        <div className={s.buttons}>
          <Button
            text={t('modal.ok')}
            className="main"
            onClick={onClose}
            tabIndex={0}
            autoFocus={true}
          />
        </div>
      </div>
    </Modal>
  );
};

DoingFineModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DoingFineModal;

import PropTypes from 'prop-types';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import s from './LogoutModal.module.css';
import { useTranslation } from 'react-i18next';

const LogoutModal = ({ open, onClose, logoutFunc }) => {
  const { t } = useTranslation();
  return (
    <Modal className={s.modal} open={open} onClose={onClose}>
      <div className={s.wrapper}>
        <p className={s.wrapper_text}>{t('modal.leave')}</p>
        <div className={s.buttons}>
          <Button
            className="transparent"
            text={t('modal.cancel')}
            onClick={onClose}
            tabIndex={0}
            autoFocus={true}
          />
          <Button
            className="main"
            text={t('header.logOut')}
            onClick={logoutFunc}
          />
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

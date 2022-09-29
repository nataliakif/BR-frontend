import PropTypes from 'prop-types';

import Button from 'components/Button/Button';
import Modal from '../../Modal/Modal';
import s from './LogoutModal.module.css';


const LogoutModal = ({ onOpen, onClose, logoutFunc }) => {
    return (
        <Modal onOpen={onOpen} onClose={onClose}>
            <div className={s.modal}>
                <p className={s.text}>If you leave the programm your data may be lost</p>
                <div className={s.box}>
                    <Button
                        className={s.button}
                        type={'button'}
                        text={'Cancel'}
                        onClick={onClose}
                    />
                    <Button
                        className={s.button}
                        type={'button'}
                        text={'Exit'}
                        onClick={() => logoutFunc()}
                    />
                </div>
            </div>
        </Modal>
    );
};

Modal.propTypes = {
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    logoutFunc: PropTypes.func.isRequired,
}

export default LogoutModal;
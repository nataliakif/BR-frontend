import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/authUser/authUserSlice';
import LogoutModal from 'components/modals/LogoutModal/LogoutModal';
import useToggle from 'services/hooks/useToggle';
import { Trans, useTranslation } from 'react-i18next';

import s from './Logout.module.css';

const Logout = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  // const [openModal, toggleModal] = useToggle();

  const logoutFunc = () => {
    dispatch(logOut());
  };
  return (
    <>
      <button
        type="button"
        className={s.logoutBtn}
        onClick={() => {
          logoutFunc();
        }}
      >
        {t('description.part2')}
      </button>
      {/* {openModal && (
                <LogoutModal
                    open={openModal}
                    onClose={toggleModal()}
                    logoutFunc={logoutFunc}
                />
            )} */}
    </>
  );
};

export default Logout;

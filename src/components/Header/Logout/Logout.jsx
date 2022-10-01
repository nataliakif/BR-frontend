import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from '../../../redux/authUser/authUserSlice';
import LogoutModal from "components/modals/LogoutModal/LogoutModal";

import s from './Logout.module.css';

const Logout = () => {
    const [logoutModal, setLogoutModal] = useState(false);

    const closeLogoutModal = () => {
        setLogoutModal(false);
    }

    const onClick = () => {
        setLogoutModal(true)
    }

    const dispatch = useDispatch();

    const logoutFunc = () => {
        dispatch(logOut());
    };


    
    return (
        <>
            <button
                type='button'
                className={s.logoutBtn}
                onClick={onClick}
            >
                Logout
            </button>
                <LogoutModal
                    open={logoutModal}
                    onClose={closeLogoutModal}
                    logoutFunc={logoutFunc}
                />
        </>
    )
};

export default Logout;
import s from './UserBar.module.css';
import { getCurrentUser } from 'redux/authUser/authUserSlice';
import { useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';

const UserBar = () => {
    const userName = useSelector(getCurrentUser);

    const [firstName] = userName.split(" ");
    const [letter] = firstName.split("");

    
    return userName ? (
        <div className={s.userBar}>
            <span className={s.firstLetter}>{`${letter}`}</span>
            <EllipsisText text={`${userName}`} length={"30"} className={s.userName}/>
        </div>
    ) : null;
}

export default UserBar;
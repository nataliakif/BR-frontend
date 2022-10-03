import s from './UserBar.module.css';
import { getCurrentUserName } from 'redux/authUser/authUserSlice';
import { useSelector } from 'react-redux';

const UserBar = () => {
  const userName = useSelector(getCurrentUserName);

  const [firstName] = userName.split(' ');
  const [letter] = firstName.split('');

  return userName ? (
    <div className={s.userBar}>
      <span className={s.firstLetter}>{`${letter}`}</span>
      <span className={s.userName}>{`${userName}`}</span>
    </div>
  ) : null;
};

export default UserBar;

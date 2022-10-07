import { useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';
import { getCurrentUserName } from 'redux/authUser/authUserSlice';
import s from './UserBar.module.css';

const UserBar = () => {
  const userName = useSelector(getCurrentUserName);

  const [firstName] = userName.split(' ');
  const [letter] = firstName.split('');

  return userName ? (
    <div className={s.userBar}>
      <span className={s.firstLetter}>{`${letter}`}</span>
      <EllipsisText text={`${firstName}`} className={s.userName} length={20} />
    </div>
  ) : null;
};

export default UserBar;

import s from './UserBar.module.css';

const UserBar = () => {
    return (
        <div className={s.userBar}>
            <span className={s.firstLetter}>B</span>
        </div>
    );
}

export default UserBar;
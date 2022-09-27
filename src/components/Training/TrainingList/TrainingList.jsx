import s from "./TrainingList.module.css";
import BookIcon from "../Icons/bookIcon";


const TrainingList = () => {
    return (
        <div className={s.listHeader}>
        <div className={s.header}>
            <p className={s.item}>Title</p>
            <p className={s.item}>Author</p>
            <p className={s.item}>Year</p>
            <p className={s.item}>Pages</p>
        </div >
        <ul className={s.list}>
            <li className={s.itemBook}><BookIcon/>
            <span className={s.dots}>...</span>
            </li>
            <li className={s.itemBook}>
            <p className={s.author}>Author</p>
            <span className={s.dots}>...</span>
            </li>
            <li className={s.itemBook}>
            <p className={s.year}>Year</p>
            <span className={s.dots}>...</span>
            </li>
            <li className={s.itemBook}>
            <p className={s.pages}>Pages</p>
            <span className={s.dots}>...</span>
            </li>
        </ul>
        </div>
    )
}

export default TrainingList;
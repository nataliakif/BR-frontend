import s from "./TrainingList.module.css";

const TrainingList = () => {
    return (
        <div className={s.listContainer}>
        <ul className={s.booksList}>
            <li className={s.item}>Title</li>
            <li className={s.item}>Author</li>
            <li className={s.item}>Year</li>
            <li className={s.item}>Pages</li>
        </ul >
        </div>
    )
}

export default TrainingList;
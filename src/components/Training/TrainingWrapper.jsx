import TrainingForm from "./TrainingForm/TrainingForm";


import s from "./Wrapper.module.css"

const TrainingWrapper = () => {
    return (
        <section className={s.container}>
        <div className={s.wrapperContainer}>
            <TrainingForm/>
        </div>
        </section>
    )
}

export default TrainingWrapper;
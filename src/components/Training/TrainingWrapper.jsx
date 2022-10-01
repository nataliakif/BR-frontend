import TrainingForm from "./TrainingForm/TrainingForm";


import s from "./Wrapper.module.css"

const TrainingWrapper = ({onStartDateChange, onFinishDateChange}) => {
    console.log(onStartDateChange);
    return (
        <section className={s.container}>
        <div className={s.wrapperContainer}>
            <TrainingForm
            onStartDateChange={onStartDateChange}
             onFinishDateChange={onFinishDateChange}
            />
        </div>
        </section>
    )
}

export default TrainingWrapper;
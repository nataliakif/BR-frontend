import Container from 'components/Container';
import s from './StartMobileView.module.css';

const StartMobileView = () => {
  return (
    <section className={s.wrapper}>
      <Container>
        <div className={s.listBox}>
          <h1 className={s.title}>Books Reading</h1>
          <h2 className={s.subtitle}>Will help you to</h2>
          <ul className={s.list}>
            <li className={s.item}>
              Create your goal faster and proceed to read
            </li>
            <li className={s.item}>
              Divide process proportionally <br /> for each day
            </li>
            <li className={s.item}>Track your success</li>
          </ul>

          <h2 className={s.subtitle}>You may also</h2>
          <ul className={s.list}>
            <li className={s.item}>Pose your own independent point of view</li>
            <li className={s.item}>
              Improve your professional skills according to new knowledge
            </li>
            <li className={s.item}>Become an interesting interlocutor</li>
          </ul>
          <div className={s.linkBox}>
            <a href="/" className={s.link}>
              Login
            </a>
            <a href="/" className={s.link}>
              Register
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StartMobileView;

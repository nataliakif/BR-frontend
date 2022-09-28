import Media from 'react-media';
import RegisterForm from 'components/RegisterForm';
import BooksReader from 'components/BooksReader';
import s from './RegisterView.module.css';

const RegisterView = () => {
  return (
    <div className={s.wrapper}>
      <Media query={{ maxWidth: 767 }}>
        {matches =>
          matches ? (
            <section className={s.section}>
              <RegisterForm />
            </section>
          ) : (
            <>
              <section className={s.section}>
                <RegisterForm />
              </section>
              <BooksReader />
            </>
          )
        }
      </Media>
    </div>
  );
};

export default RegisterView;

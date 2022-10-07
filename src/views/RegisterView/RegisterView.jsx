import Media from 'react-media';
import Container from 'components/Container';
import RegisterForm from 'components/RegisterForm';
import BooksReader from 'components/BooksReader';
import s from './RegisterView.module.css';

const RegisterView = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default RegisterView;

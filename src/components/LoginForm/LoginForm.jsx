import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  useLoginUserMutation,
  useRestorePasswordMutation,
} from 'redux/authUser/authUserApiSlice';
import LoginTimer from 'components/LoginTimer';
import { setCredentials, getCurrentUser } from 'redux/authUser/authUserSlice';
import { ReactComponent as GoogleIcon } from '../../images/google.svg';
import sprite from '../../images/sprite.svg';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import s from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser] = useLoginUserMutation();
  const [restorePassword] = useRestorePasswordMutation();
  const email = useSelector(getCurrentUser);
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const emailGoogle = searchParams.get('email');
  const nameGoogle = searchParams.get('name');
  const accessToken = searchParams.get('accessToken');
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(/^[^-]\S*.@\S*.\.\S*[^-\s]$/, t('validation.incorrectEmail'))
      .min(10, t('validation.emailMin'))
      .max(63, t('validation.emailMax'))
      .required(t('validation.emailRequired')),
    password: yup
      .string()
      .required(t('validation.passwordRequired'))
      .matches(/^[^.-]\S*$/, t('validation.incorrectPassword'))
      .min(5, t('validation.passwordMin'))
      .max(30, t('validation.passwordMax')),
  });

  const handleSubmit = async ({ email, password }) => {
    try {
      const userData = await loginUser({ email, password }).unwrap();
      dispatch(setCredentials({ ...userData.data }));
    } catch (error) {
      toast.error(error.data.message);
      dispatch(
        setCredentials({
          user: { email },
        })
      );
    }
  };

  useEffect(() => {
    emailGoogle &&
      dispatch(
        setCredentials({
          user: { name: nameGoogle, email: emailGoogle, token: accessToken },
        })
      );
  }, [accessToken, dispatch, emailGoogle, loginUser, nameGoogle]);

  return (
    <div className={s.container}>
      <a
        className={s.googleLink}
        href="https://br-backend.herokuapp.com/auth/google"
      >
        <GoogleIcon style={{ marginRight: '15px' }} />
        Google
      </a>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema}
      >
        {() => (
          <Form className={s.form}>
            <label className={s.label} htmlFor="email">
              {t('RegisterForm.emailLabel')}
            </label>
            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="your@email.com"
              autoFocus={true}
            />
            <ErrorMessage
              name="email"
              render={msg => (
                <div className={s.errEmail}>
                  <p className={s.errText}>{msg}</p>
                </div>
              )}
            />

            <label className={s.label} htmlFor="password">
              {t('RegisterForm.passwordLabel')}
              <svg
                className={s.icon}
                onClick={() => setShowPassword(!showPassword)}
              >
                <use
                  href={sprite + (showPassword ? '#icon-noeye' : '#icon-eye')}
                />
              </svg>
            </label>
            <Field
              className={s.input}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              render={msg => (
                <div className={s.errPassword}>
                  <p className={s.errText}>{msg}</p>
                </div>
              )}
            />

            <button className={s.btn} type="submit">
              {t('LoginForm.button')}
            </button>
          </Form>
        )}
      </Formik>
      {email ? (
        <>
          {' '}
          <p className={s.text}>
            <span
              onClick={() => restorePassword({ email })}
              className={s.signupLink}
            >
              <LoginTimer />
            </span>
            {t('LoginForm.for')}
            {email}
          </p>
          <p className={s.text}>
            {t('LoginForm.orNew')}
            <Link to="/register" className={s.signupLink}>
              {t('LoginForm.registration')}
            </Link>
          </p>
        </>
      ) : (
        <Link to="/register" className={s.signupLink}>
          {t('RegisterForm.button')}
        </Link>
      )}
    </div>
  );
};

export default LoginForm;

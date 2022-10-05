import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as yup from 'yup';
import { useRegisterUserMutation } from 'redux/authUser/authUserApiSlice';
import { setCredentials } from 'redux/authUser/authUserSlice';
import { ReactComponent as GoogleIcon } from '../../images/google.svg';
import sprite from '../../images/sprite.svg';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import s from './RegisterForm.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[а-яА-ЯіІїЇєЄa-zA-Z0-9]/, t('validation.nameLetter'))
      .min(3, t('validation.nameMin'))
      .max(100, t('validation.nameMax'))
      .required(t('validation.requiredName')),
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
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], t('validation.passwordMatch'))
      .required(t('validation.confirmPassword')),
  });

  const handleSubmit = async ({ name, email, password, confirmPassword }) => {
    try {
      const userData = await registerUser({
        name,
        email,
        password,
        confirmPassword,
      }).unwrap();
      dispatch(setCredentials({ ...userData.data }));
      toast.success(t('toast.regSuccess'));
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

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
            <label className={s.label} htmlFor="name">
              {t('RegisterForm.name')}
            </label>
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="..."
              autoFocus={true}
            />
            <ErrorMessage
              name="name"
              render={msg => (
                <div className={s.errName}>
                  <p className={s.errText}>{msg}</p>
                </div>
              )}
            />

            <label className={s.label} htmlFor="email">
              {t('RegisterForm.emailLabel')}
            </label>
            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="your@email.com"
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
              maxLength={30}
              placeholder="..."
            />
            <ErrorMessage
              name="password"
              render={msg => (
                <div className={s.errPassword}>
                  <p className={s.errText}>{msg}</p>
                </div>
              )}
            />
            <label className={s.label} htmlFor="confirmPassword">
              {t('RegisterForm.confirmPasswordLabel')}

              <svg
                className={s.icon}
                onClick={() => setShowCPassword(!showCPassword)}
              >
                <use
                  href={sprite + (showCPassword ? '#icon-noeye' : '#icon-eye')}
                />
              </svg>
            </label>
            <Field
              className={s.input}
              type={showCPassword ? 'text' : 'password'}
              name="confirmPassword"
              maxLength={30}
              placeholder="..."
              onPaste={e => e.preventDefault()}
            />

            <ErrorMessage
              name="confirmPassword"
              render={msg => (
                <div className={s.errConfirmPassword}>
                  <p className={s.errText}>{msg}</p>
                </div>
              )}
            />

            <button className={s.btn} type="submit">
              {t('RegisterForm.button')}
            </button>
          </Form>
        )}
      </Formik>
      <p className={s.text}>
        {t('RegisterForm.question')}
        <Link to="/login" className={s.signupLink}>
          {t('RegisterForm.link')}
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;

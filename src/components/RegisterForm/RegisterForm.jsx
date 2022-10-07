import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage, useField } from 'formik';
import { getLang } from 'redux/authUser/authUserSlice';
import { useDispatch, useSelector } from 'react-redux';
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

const Input = ({ name, label, htmlFor, error, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <>
      <label className={s.label} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={`${meta.error ? s.errInput : s.input}`}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={name}
        render={msg => (
          <div className={s[error]}>
            <p className={s.errText}>{msg}</p>
          </div>
        )}
      />
    </>
  );
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentLang = useSelector(getLang);

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        currentLang === 'ua' ? /^[а-яА-ЯіІїЇєЄa-zA-Z0-9]/ : /^[a-zA-Z0-9]/,
        t('validation.nameLetter')
      )
      .matches(
        currentLang === 'ua'
          ? /^[а-яА-ЯіІїЇєЄa-zA-Z0-9]/
          : /^[^а-яА-ЯіІїЇєЄ]*$/,
        t('validation.nameLetter')
      )
      .min(3, t('validation.nameMin'))
      .max(100, t('validation.nameMax'))
      .required(t('validation.requiredName')),
    email: yup
      .string()
      .matches(/^[^ ]*$/, t('validation.incorrectEmail'))
      .matches(/^[^а-яА-ЯіІїЇєЄ]*$/, t('validation.incorrectEmail'))
      .matches(/^[^-]\S*.@\S*.\.\S*[^-\s]$/, t('validation.incorrectEmail'))
      .min(10, t('validation.emailMin'))
      .max(63, t('validation.emailMax'))
      .required(t('validation.emailRequired')),
    password: yup
      .string()
      .required(t('validation.passwordRequired'))
      .matches(/^[^а-яА-ЯіІїЇєЄ]*$/, t('validation.incorrectPassword'))
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

  return (
    <div className={s.container}>
      <a
        className={s.googleLink}
        href="https://fullstack-team-project-back.herokuapp.com/auth/google"
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
            <Input
              name="name"
              label={t('RegisterForm.name')}
              htmlFor="name"
              error="errName"
              type="text"
              placeholder="..."
            />
            <Input
              name="email"
              label={t('RegisterForm.emailLabel')}
              htmlFor="email"
              error="errEmail"
              type="text"
              placeholder="your@email.com"
            />
            <div className={s.relative}>
              <Input
                name="password"
                label={t('RegisterForm.passwordLabel')}
                htmlFor="password"
                error="errPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="..."
                maxLength={30}
              />
              <svg
                className={s.icon}
                onClick={() => setShowPassword(!showPassword)}
              >
                <use
                  href={sprite + (showPassword ? '#icon-noeye' : '#icon-eye')}
                />
              </svg>
            </div>
            <div className={s.relative}>
              <Input
                name="confirmPassword"
                label={t('RegisterForm.confirmPasswordLabel')}
                htmlFor="confirmPassword"
                error="errConfirmPassword"
                type={showCPassword ? 'text' : 'password'}
                placeholder="..."
                maxLength={30}
                onPaste={e => e.preventDefault()}
              />
              <svg
                className={s.icon}
                onClick={() => setShowCPassword(!showCPassword)}
              >
                <use
                  href={sprite + (showCPassword ? '#icon-noeye' : '#icon-eye')}
                />
              </svg>
            </div>
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

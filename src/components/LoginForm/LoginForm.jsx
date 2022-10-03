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
import s from './LoginForm.module.css';

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[^-]\S*.@\S*.\.\S*[^-\s]$/, 'Incorrect email')
    .min(10, 'Email is too short, min character is 10.')
    .max(63, 'Maximum 63 characters!')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(/^[^.-]\S*$/, 'Incorrect password')
    .min(5, 'Password is too short, min character is 5.')
    .max(30, 'Maximum 30 characters!'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser] = useLoginUserMutation();
  const [restorePassword] = useRestorePasswordMutation();
  const email = useSelector(getCurrentUser);
  const [searchParams] = useSearchParams();
  const emailGoogle = searchParams.get('email');
  const nameGoogle = searchParams.get('name');
  const accessToken = searchParams.get('accessToken');

  const dispatch = useDispatch();

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
        // href="http://localhost:3001/auth/google"
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
              Email
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
              Password
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
              Login
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
            {' for '}
            {email}
          </p>
          <p className={s.text}>
            or new registration{' '}
            <Link to="/register" className={s.signupLink}>
              Register
            </Link>
          </p>
        </>
      ) : (
        <Link to="/register" className={s.signupLink}>
          Register
        </Link>
      )}
    </div>
  );
};

export default LoginForm;

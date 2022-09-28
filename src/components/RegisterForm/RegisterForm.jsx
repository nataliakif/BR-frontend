import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useRegisterUserMutation } from 'redux/authUser/authUserApiSlice';
import { setCredentials } from 'redux/authUser/authUserSlice';
import { ReactComponent as GoogleIcon } from '../../images/google.svg';
import s from './RegisterForm.module.css';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name can only contain letters.'
    )
    .min(5, 'Name is too short, min character is 5.')
    .required('Name is required'),
  email: yup
    .string()
    .matches(/^[\w.]+@[\w]+.[\w]+$/, 'Incorrect email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password is too short, min character is 6.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (
    { name, email, password, confirmPassword },
    { resetForm }
  ) => {
    const userData = await registerUser({
      name,
      email,
      password,
      confirmPassword,
    }).unwrap();
    dispatch(setCredentials({ ...userData, name, email }));
    resetForm();
  };

  return (
    <div className={s.container}>
      <a className={s.googleLink} href="/">
        <GoogleIcon style={{ marginRight: '15px' }} />
        Google
      </a>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema}
      >
        {({ isValid, dirty }) => (
          <Form className={s.form}>
            <label className={s.label} htmlFor="name">
              Name
            </label>
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="..."
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
              Email
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
              Password
            </label>
            <Field
              className={s.input}
              type="password"
              name="password"
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
              Confirm password
            </label>
            <Field
              className={s.input}
              type="password"
              name="confirmPassword"
              placeholder="..."
            />
            <ErrorMessage
              name="confirmPassword"
              render={msg => (
                <div className={s.errConfirmPassword}>
                  <p className={s.errText}>{msg}</p>
                </div>
              )}
            />

            <button
              className={s.btn}
              type="submit"
              disabled={!(isValid && dirty)}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
      <p className={s.text}>
        Already have an account?{' '}
        <a className={s.signupLink} href="/">
          Login
        </a>
      </p>
    </div>
  );
};

export default RegisterForm;

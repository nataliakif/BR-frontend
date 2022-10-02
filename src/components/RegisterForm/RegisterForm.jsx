import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useRegisterUserMutation } from 'redux/authUser/authUserApiSlice';
import { setCredentials } from 'redux/authUser/authUserSlice';
import { ReactComponent as GoogleIcon } from '../../images/google.svg';
import { toast } from 'react-toastify';
import s from './RegisterForm.module.css';

const schema = yup.object({
  name: yup
    .string()
    .matches(
      /^[а-яА-ЯіІїЇєЄa-zA-Z0-9]/,
      'Name can only begin with a letter or a number'
    )
    .min(3, 'Name is too short, min character is 3.')
    .max(100, 'Maximum 100 characters!')
    .required('Name is required'),
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

  const handleSubmit = async ({ name, email, password, confirmPassword }) => {
    try {
      const userData = await registerUser({
        name,
        email,
        password,
        confirmPassword,
      }).unwrap();
      dispatch(setCredentials({ ...userData.data }));
      toast.success('Registration was successful');
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <div className={s.container}>
      <a
        className={s.googleLink}
        // href="https://br-backend.herokuapp.com/auth/google"
        href="http://localhost:3001/auth/google"
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
              Confirm password
            </label>
            <Field
              className={s.input}
              type="password"
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
              Register
            </button>
          </Form>
        )}
      </Formik>
      <p className={s.text}>
        Already have an account?{' '}
        <Link to="/login" className={s.signupLink}>
          Log in
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;

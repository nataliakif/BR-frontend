// import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import { useLoginUserMutation } from 'redux/authUser/authUserApiSlice';
// import { setCredentials } from 'redux/authUser/authUserSlice';
import { ReactComponent as GoogleIcon } from '../../images/google.svg';
import s from './LoginForm.module.css';

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[\w.]+@[\w]+.[\w]+$/)
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  //   const [loginUser, { isUninitialized }] = useLoginUserMutation();
  //   const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    console.log(email);
    //  const userData = await loginUser({ email, password }).unwrap();
    //  dispatch(setCredentials({ ...userData, email }));
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
        <Form className={s.form} autoComplete="off">
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
            render={msg => <div className={s.errorEmail}>{msg}</div>}
          />

          <label className={s.label} htmlFor="password">
            Password
          </label>
          <Field
            className={s.input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage
            name="password"
            render={msg => <div className={s.errorPassword}>{msg}</div>}
          />

          <button className={s.btn} type="submit">
            Login
          </button>
        </Form>
      </Formik>
      <a className={s.signupLink} href="/">
        Register
      </a>
    </div>
  );
};

export default LoginForm;

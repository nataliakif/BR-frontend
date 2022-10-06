import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Progress from 'components/Progress/Progress';

// import { useDispatch, useSelector } from 'react-redux';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { Navigate } from 'react-router';
// import {
//   getCurrentToken,
//   setCredentials,
// } from '../redux/authUser/authUserSlice';
// import { useFetchCurrentUserQuery } from '../redux/authUser/authUserApiSlice';

const LoginView = lazy(() => import('../views/LoginView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const Header = lazy(() => import('../components/Header/Header'));
const LibraryView = lazy(() => import('../views/LibraryView'));
const TrainingView = lazy(() => import('../views/TrainingView/TrainingView'));
const StatisticView = lazy(() => import('../views/StatisticView'));
// const NotFoundView = lazy(() => import('../views/NotFoundView.jsx'));

const App = () => {
  // const currentToken = useSelector(getCurrentToken);
  // const dispatch = useDispatch();
  // const { data, isLoading: isFetchingCurUser } = useFetchCurrentUserQuery(
  //   true,
  //   {
  //     skip: !currentToken,
  //   }
  // );
  // useEffect(() => {
  //   if (data) {
  //     dispatch(setCredentials({ user: data, token: currentToken }));
  //   }
  // }, [currentToken, data, dispatch]);

  return (
    <>
      {false ? (
        <Progress />
      ) : (
        <Suspense fallback={<Progress />}>
          <Header />
          <Routes>
            <Route path="*" element={<Navigate to="/library" />} />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="/library"
              element={
                <PrivateRoute redirectTo="/login">
                  <LibraryView />
                </PrivateRoute>
              }
            />

            <Route
              path="/training"
              element={
                <PrivateRoute redirectTo="/login">
                  <TrainingView />
                </PrivateRoute>
              }
            />
            <Route
              path="/statistics"
              element={
                <PrivateRoute redirectTo="/login">
                  <StatisticView />
                </PrivateRoute>
              }
            />

            {/* <Route path="*" element={<NotFoundView />} /> */}
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggablePercent={60}
            pauseOnHover
            limit={3}
          />
        </Suspense>
      )}
    </>
  );
};

export default App;

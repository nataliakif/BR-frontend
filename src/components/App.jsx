import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentToken } from '../redux/authUser/authUserSlice';
import { useFetchCurrentUserQuery } from 'redux/authUser/authUserApiSlice';
import { setCredentials } from 'redux/authUser/authUserSlice';
import Progress from 'components/Progress/Progress';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { Navigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';

const InfoMobile = lazy(() => import('../components/InfoMobile'));
const LoginView = lazy(() => import('../views/LoginView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const Header = lazy(() => import('../components/Header/Header'));
const LibraryView = lazy(() => import('../views/LibraryView/LibraryView'));
const TrainingView = lazy(() => import('../views/TrainingView/TrainingView'));
const StatisticView = lazy(() => import('../views/StatisticView'));

const App = () => {
  const currentToken = useSelector(getCurrentToken);
  const dispatch = useDispatch();
  const { data, isLoading: isFetchingCurUser } = useFetchCurrentUserQuery(
    true,
    {
      skip: !currentToken,
    }
  );
  useEffect(() => {
    if (data) {
      dispatch(setCredentials({ user: data }));
    }
  }, [data, dispatch]);

  return (
    <>
      {isFetchingCurUser ? (
        <Progress />
      ) : (
        <Suspense fallback={<Progress />}>
          <Header />
          <Routes>
            <Route path="/" exact element={<InfoMobile />} />
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

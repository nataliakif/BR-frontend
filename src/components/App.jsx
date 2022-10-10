import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Progress from 'components/Progress/Progress';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { Navigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';

const LoginView = lazy(() => import('../views/LoginView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const Header = lazy(() => import('../components/Header/Header'));
const LibraryView = lazy(() => import('../views/LibraryView/LibraryView'));
const TrainingView = lazy(() => import('../views/TrainingView/TrainingView'));
const StatisticView = lazy(() => import('../views/StatisticView'));

const App = () => {
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

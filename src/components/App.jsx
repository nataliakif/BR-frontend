import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LoginView = lazy(() => import('../views/LoginView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const Header = lazy(() => import('../components/Header/Header'));
const HomeView = lazy(() => import('../views/HomeView'));
const LibraryView = lazy(() => import('../views/LibraryView'));
const TrainingView = lazy(() => import('../views/TrainingView'));
const NotFoundView = lazy(() => import('../views/NotFoundView'));

function App() {
  const dispatch = useDispatch();
  const isRefreshCurrentUser = useSelector(authSelectors.isRefreshUserData);
  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);
  return (
    <>
      {!isRefreshCurrentUser && (
        <Suspense fallback={<p>Loading...</p>}>
          <Header />
        </Suspense>
      )}
    </>
  );
}

export default App;

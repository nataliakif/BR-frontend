import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import PublicRoute from './PublicRoute';
// import PrivateRoute from './PrivateRoute';
// import {
//   getCurrentToken,
//   setCredentials,
// } from '../redux/authUser/authUserSlice';
// import { useFetchCurrentUserQuery } from '../redux/authUser/authUserApiSlice';

// const LoginView = lazy(() => import('../views/LoginView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const Header = lazy(() => import('../components/Header/Header'));
// const HomeView = lazy(() => import('../views/HomeView'));
// const LibraryView = lazy(() => import('../views/LibraryView'));
const TrainingView = lazy(() => import('../views/TrainingView'));
const StatisticView = lazy(() => import('../views/StatisticView'));
// const NotFoundView = lazy(() => import('../views/NotFoundView.jsx'));

function App() {
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
      {/* {isFetchingCurUser && ( */}
      <Suspense fallback={<p>Loading...</p>}>
        <Header />
        <Routes>
          {/* <Route element={<PublicRoute />}> */}
          <Route path="/register" element={<RegisterView />} />
          {/* <Route path="/login" element={<LoginView />} />
          <Route path="/" element={<HomeView />} /> */}
          {/* </Route> */}
          {/* <Route element={<PrivateRoute />}> */}
          {/* <Route path="/library" element={<LibraryView />} />*/}
          <Route path="/training" element={<TrainingView />} />
          <Route path="/statistics" element={<StatisticView />} />
          {/* </Route> */}
          {/* <Route path="*" element={<NotFoundView />} /> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

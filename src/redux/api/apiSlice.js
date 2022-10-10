import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setError, logOut, setCredentials } from '../authUser/authUserSlice';

const baseQuery = fetchBaseQuery({
  // baseUrl: 'https://br-backend.herokuapp.com/',
  baseUrl: 'http://localhost:3001',

  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithErrorHandler = async (args, api, extraOptions) => {
  api.dispatch(setError(null));
  let result = await baseQuery(args, api, extraOptions);
  if (!result?.meta?.response?.ok) {
    let errorMessage = '';
    switch (result.meta.response.status) {
      case 400:
        errorMessage = 'Email or password is incorrect';
        api.dispatch(logOut());
        api.dispatch(setError(errorMessage));
        break;
      case 401:
        const refreshToken = api.getState().auth.refreshToken;
        if (refreshToken) {
          const refreshResult = await baseQuery(
            {
              url: '/auth/refresh',
              method: 'POST',
              body: {
                refreshToken,
              },
            },
            api,
            extraOptions
          );
          const tokens = refreshResult.data.data;
          if (tokens.token && tokens.refreshToken) {
            api.dispatch(setCredentials({ user: tokens }));
            const newResult = await baseQuery(args, api, extraOptions);
            if (newResult?.meta?.response?.ok) {
              return newResult;
            }
          }
        }

        errorMessage = 'Email or password is incorrect';
        api.dispatch(logOut());
        api.dispatch(setError(errorMessage));
        break;
      default:
        errorMessage = 'Something went wrong! Try again!';
        api.dispatch(setError(errorMessage));
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithErrorHandler,
  endpoints: builder => ({}),
});

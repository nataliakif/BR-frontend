import { apiSlice } from '../api/apiSlice';

export const authUserApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    fetchCurrentUser: builder.query({
      query: () => '/auth/user',
      method: 'GET',
      transformResponse: response => response.data,
    }),
    registerUser: builder.mutation({
      query: credentials => ({
        url: '/auth/register',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    restorePassword: builder.mutation({
      query: credentials => ({
        url: '/auth/restorePassword',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useRestorePasswordMutation,
  useLogoutUserQuery,
  useFetchCurrentUserQuery,
} = authUserApi;

import { apiSlice } from 'redux/apiSlice';

export const authUserApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: credentials => ({
        url: '/users/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    fetchCurrentUser: builder.query({
      query: () => '/users/current',
      method: 'GET',
    }),
    registerUser: builder.mutation({
      query: credentials => ({
        url: '/users/signup',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useFetchCurrentUserQuery,
} = authUserApi;

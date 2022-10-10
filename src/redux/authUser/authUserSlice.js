import { createSlice } from '@reduxjs/toolkit';

const authUserSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    refreshToken: null,
    language: 'en',
    quote: 1,
  },
  reducers: {
    setCredentials: (state, { payload }) => {
      const accessToken = payload.user.token;
      const refreshToken = payload.user.refreshToken;
      const { email, name } = payload.user;
      state.user = { email, name };
      state.token = accessToken;
      state.refreshToken = refreshToken;
      if (payload.user && accessToken) {
        state.isLoggedIn = true;
      }
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
    },
    setError: (state, { payload }) => {
      state.errorMsg = payload;
    },
    setQuote: (state, { payload }) => {
      state.quote = payload;
    },
    setLang: (state, { payload }) => {
      state.language = payload;
    },
  },
});

export const { logOut, setCredentials, setError, setLang, setQuote } =
  authUserSlice.actions;

export const getCurrentUser = state => state.auth.user?.email;
export const getCurrentUserName = state => state.auth.user?.name;
export const getCurrentToken = state => state.auth.token;
export const getRefreshToken = state => state.auth.refreshToken;
export const getCurrentStatus = state => state.auth.isLoggedIn;
export const getQuote = state => state.auth.quote;
export const getLang = state => state.auth.language;

export default authUserSlice.reducer;

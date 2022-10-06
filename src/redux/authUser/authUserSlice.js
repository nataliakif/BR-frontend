import { createSlice } from '@reduxjs/toolkit';

const authUserSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, language: 'en', quote: 1 },
  reducers: {
    setCredentials: (state, { payload }) => {
      const accessToken = payload.user.token;
      const user = payload.user;
      state.user = user;
      state.token = accessToken;
      if (user && accessToken) {
        state.isLoggedIn = true;
      }
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
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
export default authUserSlice.reducer;

export const getCurrentUser = state => state.auth.user?.email;
export const getCurrentUserName = state => state.auth.user?.name;
export const getCurrentToken = state => state.auth.token;
export const getCurrentStatus = state => state.auth.isLoggedIn;
export const getQuote = state => state.auth.quote;
export const getLang = state => state.auth.language;

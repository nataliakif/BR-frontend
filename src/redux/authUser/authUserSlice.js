import { createSlice } from '@reduxjs/toolkit';

const authUserSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, { payload }) => {
      const accessToken = payload.token;
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
  },
});
export const { logOut, setCredentials } = authUserSlice.actions;
export default authUserSlice.reducer;

export const getCurrentUser = state => state.auth.user?.name;
export const getCurrentToken = state => state.auth.token;
export const getCurrentStatus = state => state.auth.isLoggedIn;

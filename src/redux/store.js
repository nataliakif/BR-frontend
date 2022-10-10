import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from './api/apiSlice';
import authUserReducer from './authUser/authUserSlice';
import { booksApi } from './books/booksApi';
import { trainingApi } from './training/trainingApi';

const authPersistConfig = {
  key: 'booksReadApp',
  storage,
  whitelist: ['token', 'refreshToken', 'language', 'quote'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  booksApi.middleware,
  trainingApi.middleware,
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authUserReducer),
    [booksApi.reducerPath]: booksApi.reducer,
    [trainingApi.reducerPath]: trainingApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

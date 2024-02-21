import { configureStore } from '@reduxjs/toolkit';

import {  userApi } from './auth/usersOperations';
import storage from 'redux-persist/lib/storage';

import { drinksReducer } from './drinks/drinksSlice';
// import { drinksApi } from '../redux/drinks/drinksSlice';
import { authReducer } from './auth/authReducer';
import { filtersReducer } from './filters/slice';
import { drinkIdStorageReducer } from './drinkIdStorageReducer/drinkIdStorageReducer';
import persistReducer from 'redux-persist/es/persistReducer';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

const authConfig = {
  key: 'auth',
  storage,
  withelist: ['token'],
};




export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    drinks: drinksReducer,
    [userApi.reducerPath]: userApi.reducer,
    filters: filtersReducer,
    drinkIdStorage: drinkIdStorageReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }) .concat(userApi.middleware)
});

export const persistor = persistStore(store);


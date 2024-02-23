import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { initialState } from './authInitialState';
import {
  handleFulfilledRefreshUser,
  handleFulfilledSignIn,
  handleFulfilledSignUp,
  handlePending,
  handlePendingRefreshUser,
  handleRejected,
  handleRejectedRefreshUser,
} from './authFunctionsReducer';
import { refreshUserThunk, signInThunk, signUpThunk } from './authOperations';

const STATUS = { PENDING: 'pending', REJECTED: 'rejected' };

const getActions = (type) => isAnyOf(signUpThunk[type], signInThunk[type]);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(signUpThunk.fulfilled, handleFulfilledSignUp)
      .addCase(signInThunk.fulfilled, handleFulfilledSignIn)
      .addCase(refreshUserThunk.pending, handlePendingRefreshUser)
      .addCase(refreshUserThunk.fulfilled, handleFulfilledRefreshUser)
      .addCase(refreshUserThunk.rejected, handleRejectedRefreshUser)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(authConfig, authSlice.reducer);
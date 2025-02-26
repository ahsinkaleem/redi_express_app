import { combineReducers } from '@reduxjs/toolkit';
import userSlice from '@store/slices/userSlice';
import { dummyApi } from './api/dummy';
import { authsclice } from './api/user';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  user: userSlice,
  [authsclice.reducerPath]: authsclice.reducer,
  [dummyApi.reducerPath]: dummyApi.reducer,
});

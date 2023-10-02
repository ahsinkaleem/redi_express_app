import { combineReducers } from '@reduxjs/toolkit';
import userSlice from '@store/slices/userSlice';


export const rootReducer = combineReducers({
  user: userSlice,
});

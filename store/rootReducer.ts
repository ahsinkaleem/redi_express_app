import { combineReducers } from '@reduxjs/toolkit';
import productsclice from '@store/slices/selected_product/selestedproduct';
import userSlice from '@store/slices/userSlice';
import { dogimage } from './api/dogimages';
import { dummyApi } from './api/dummy';
import { jokes } from './api/jokes';
import { storeapi } from './api/storeapi/storeapi';
import { authsclice } from './api/user';
// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  user: userSlice,
  product: productsclice,
  [authsclice.reducerPath]: authsclice.reducer,
  [dummyApi.reducerPath]: dummyApi.reducer,
  [jokes.reducerPath]: jokes.reducer,
  [dogimage.reducerPath]: dogimage.reducer,
  [storeapi.reducerPath]: storeapi.reducer,
});

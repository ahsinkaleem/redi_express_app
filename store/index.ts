import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import { dogimage } from './api/dogimages';
import { dummyApi } from './api/dummy';
import { jokes } from './api/jokes';
import { storeapi } from './api/storeapi/storeapi';
import { authsclice } from './api/user';
import reduxStorage from './mmkv/mmkvStorage';
import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['user', 'product'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      authsclice.middleware,
      dummyApi.middleware,
      jokes.middleware,
      dogimage.middleware,
      storeapi.middleware,
    ]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

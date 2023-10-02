import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({}).concat([
  //     authApi.middleware,
  //     smartphoneApi.middleware,
  //     tabletApi.middleware,
  //     smartwatchApi.middleware,
  //     brandApi.middleware,
  //     reviewApi.middleware,
  //     feedApi.middleware,
  //   ]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

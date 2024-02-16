import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { reqresApi } from '../services/reqresApi';

export const store = configureStore({
  reducer: {
    [reqresApi.reducerPath]: reqresApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reqresApi.middleware),
});

setupListeners(store.dispatch);
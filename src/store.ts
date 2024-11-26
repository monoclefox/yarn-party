// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import patternReducer from './slices/pattern';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    pattern: patternReducer,
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
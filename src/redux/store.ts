import { configureStore } from '@reduxjs/toolkit';
import  tablesReducer  from './slices/tablesSlice';

const store = configureStore({
  reducer: {
    tablesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

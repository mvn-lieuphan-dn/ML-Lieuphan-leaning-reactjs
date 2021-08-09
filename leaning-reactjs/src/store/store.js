import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './statusLogin';

export const store = configureStore({
  reducer: {
    isLogined: loginReducer
  }
})
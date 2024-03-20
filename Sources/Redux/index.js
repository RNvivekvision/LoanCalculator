import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './Reducers';

const Store = configureStore({
  reducer: { UserReducer },
});

export default Store;

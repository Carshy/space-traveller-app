import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rocket';

const store = configureStore({
  reducer: rocketReducer,
  middleware: [thunk],
});

export default store;

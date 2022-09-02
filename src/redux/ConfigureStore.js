// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rocket';
import missionReducer from './mission/mission';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

// const MyMiddlewares = [thunk, logger];
// const reducers = combineReducers({
//   missionReducer,
// });

// const store = createStore(reducers, applyMiddleware(...MyMiddlewares));

export default store;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer from './mission/mission';

const MyMiddlewares = [thunk, logger];
const reducers = combineReducers({
  missionReducer,
});

const store = createStore(reducers, applyMiddleware(...MyMiddlewares));

export default store;

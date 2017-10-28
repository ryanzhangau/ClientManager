import { createStore, combineReducers, applyMiddleware } from 'redux';
import topbarReducer from './reducers/topbarReducer';
import logger from 'redux-logger';

export default createStore(combineReducers({
  topbarReducer,
}),applyMiddleware(logger));
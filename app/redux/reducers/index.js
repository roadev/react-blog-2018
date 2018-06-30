import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';

const appReducer = combineReducers({
  postsData: postsReducer,
});

export default appReducer;

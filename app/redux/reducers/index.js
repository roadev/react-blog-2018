import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import tagsReducer from './tagsReducer';

const appReducer = combineReducers({
  postsData: postsReducer,
  tagsData: tagsReducer,
});

export default appReducer;

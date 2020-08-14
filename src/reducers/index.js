import { combineReducers } from 'redux';

import postReducer from './post-reducer';

const rootReducer = combineReducers({
  posts: postReducer,
  auth: authReducer,
});

export default rootReducer;

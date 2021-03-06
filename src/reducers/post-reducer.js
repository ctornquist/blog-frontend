import { ActionTypes } from '../actions';

const init = {
  all: [],
  current: {},
};

/**
 * Manages the local posts on your app
 */
const postsReducer = (state = init, action) => {
  switch (action.type) {
    case ActionTypes.FETCHPOSTS:
      // console.log('all posts reducer');
      return { all: action.payload, current: state.current };
    case ActionTypes.FETCHPOST:
      // console.log('single post reducer');
      return { all: state.all, current: action.payload };
    default:
      return state;
  }
};

export default postsReducer;

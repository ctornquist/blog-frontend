import { ActionTypes } from '../actions';

const init = {
  all: [],
  current: {},
};

// delete post from server using CURL in actions, re-FETCHPOSTS

/**
 * Manages the local posts on your app
 */
const postsReducer = (state = init, action) => {
  switch (action.type) {
    case ActionTypes.FETCHPOSTS:
      console.log('all posts reducer');
      // assume you have all the posts from server (using CURL) accessible from action.posts
      // change {state} to contain this
      return { all: action.payload, current: state.current };
    case ActionTypes.FETCHPOST:
      console.log('single post reducer');
      return { all: state.all, current: action.payload };
    default:
      return state;
  }
};

export default postsReducer;

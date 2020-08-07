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
      return Object.assign(state, { all: action.payload, current: { } });
    case ActionTypes.FETCHPOST:
      console.log('single post reducer');
      return Object.assign(state, { current: action.payload });
    case ActionTypes.DELETEPOST:
      console.log('delete post reducer');
      return Object.assign(state, { all: action.payload, current: {} });
    default:
      return state;
  }
};

export default postsReducer;

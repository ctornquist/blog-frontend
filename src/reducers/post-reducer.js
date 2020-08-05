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
      // assume you have all the posts from server (using CURL) accessible from action.posts
      // change {state} to contain this
      return Object.assign(state, { current: action.postsxyz });
    case ActionTypes.DELETE:
      return state - 1;
    default:
      return state;
  }
};

export default postsReducer;

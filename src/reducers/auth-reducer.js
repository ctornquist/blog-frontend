import { ActionTypes } from '../actions';

const init = {
  authenticated: false,
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      // console.log('all posts reducer');
      return { authenticated: true };
    case ActionTypes.DEAUTH_USER:
      // console.log('single post reducer');
      return { authenticated: false };
    case ActionTypes.AUTH_ERROR:
      return { authenticated: false };
    default:
      return state;
  }
};

export default authReducer;

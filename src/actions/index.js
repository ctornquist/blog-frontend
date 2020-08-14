import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCHPOSTS: 'FETCHPOSTS',
  FETCHPOST: 'FETCHPOST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

// const ROOT_URL = 'https://ct-blog-platform.herokuapp.com/api';
const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '?key=ctornquist';

export function fetchPost(id) {
  return (dispatch) => {
    // console.log('fetch single post action');
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then((response) => {
        // console.log('fetch single post action then');
        dispatch({ type: ActionTypes.FETCHPOST, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function createPost(post, history) {
  // console.log('create post action');
  axios.post(`${ROOT_URL}/posts`, post, { headers: { authorization: localStorage.getItem('token') } })
    .then((response) => {
      history.push('/');
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deletePost(id, history) {
  return (dispatch) => {
    // console.log('delete post action');
    axios.delete(`${ROOT_URL}/posts/${id}`, { headers: { authorization: localStorage.getItem('token') } })
      .then(() => { history.push('/'); })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updatePost(id, post, history) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: ActionTypes.FETCHPOST, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function fetchPosts() {
  return (dispatch) => {
    // console.log('all posts action');
    axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then((response) => {
        // console.log('all posts action then');
        // once we are done fetching we can dispatch a redux action with the response data
        dispatch({ type: ActionTypes.FETCHPOSTS, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser({ email, password, username }, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password, username })
      .then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        history.push('/');
      })
      .catch((error) => {
        dispatch(authError(`Sign In Failed: ${error.response.data}`));
      });
  };
}

export function signupUser({ email, password, username }, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password, username })
      .then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        history.push('/');
      })
      .catch((error) => {
        dispatch(authError(`Sign Up Failed: ${error.response.data}`));
      });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}

import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCHPOSTS: 'FETCHPOSTS',
  FETCHPOST: 'FETCHPOST',
  CREATEPOST: 'CREATEPOST',
  DELETEPOST: 'DELETEPOST',
};

const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=ctornquist';

export function fetchPost(id) {
  return (dispatch) => {
    console.log('fetch single post action');
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then((response) => {
        console.log('fetch single post action then');
        // once we are done fetching we can dispatch a redux action with the response data
        dispatch({ type: ActionTypes.FETCHPOST, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        // dispatch({ type: ActionTypes.ERROR_SET, error });
        // might you also want an ERROR_CLEAR action?
      });
  };
}

export function createPost(post, history) {
  axios.post(`${ROOT_URL}/posts${API_KEY}`, post);
  history.push('/');
  this.fetchPosts();
}

export function deletePost(id, history) {
  return (dispatch) => {
    console.log('delete post action');
    axios.delete(`${ROOT_URL}/posts${API_KEY}`, id)
      .then((response) => {
        console.log('delete post action then');
        // once we are done fetching we can dispatch a redux action with the response data
        dispatch({ type: ActionTypes.DELETEPOST, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function fetchPosts() {
  return (dispatch) => {
    console.log('all posts action');
    axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then((response) => {
        console.log('all posts action then');
        // once we are done fetching we can dispatch a redux action with the response data
        dispatch({ type: ActionTypes.FETCHPOSTS, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        // dispatch({ type: ActionTypes.ERROR_SET, error });
        // might you also want an ERROR_CLEAR action?
      });
  };
}

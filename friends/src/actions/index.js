import axios from 'axios';
import axiosWithAuth from '../axiosAuth.js';

const apiUrl = 'http://localhost:5000';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = ({username, password}) => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post(apiUrl + '/api/login', {username, password})
    .then(res => dispatch({ type: LOGIN_SUCCESS, token: res.data.payload }))
    .catch(error => {
      dispatch({ type: LOGIN_FAILURE, error: error });
      throw new Error(error);
    });
};

export const GET_FRIENDS_START = 'GET_FRIENDS_START';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_START });
  return axiosWithAuth().get(apiUrl + '/api/friends')
    .then(res => dispatch({ type: GET_FRIENDS_SUCCESS, friends: res.data }))
    .catch(error => dispatch({ type: GET_FRIENDS_FAILURE, error: error }));
};

export const DELETE_FRIEND_START = 'DELETE_FRIENDS_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIENDS_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIENDS_FAILURE';

export const deleteFriend = (id) => dispatch => {
  dispatch({ type: DELETE_FRIEND_START });
  return axiosWithAuth().delete(apiUrl + '/api/friends/' + id)
    .then(res => dispatch({ type: DELETE_FRIEND_SUCCESS, friends: res.data }))
    .catch(error => dispatch({ type: DELETE_FRIEND_FAILURE, error: error }));
};

export const ADD_FRIEND_START = 'ADD_FRIENDS_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIENDS_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIENDS_FAILURE';

export const addFriend = (friend) => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  return axiosWithAuth().post(apiUrl + '/api/friends/', friend)
    .then(res => dispatch({ type: ADD_FRIEND_SUCCESS, friends: res.data }))
    .catch(error => dispatch({ type: ADD_FRIEND_FAILURE, error: error }));
};

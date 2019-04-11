import axios from 'axios';
import axiosWithAuth from '../axiosAuth.js';

const apiUrl = 'http://localhost:5000';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = ({username, password}) => dispatch => {
  dispatch({ type: LOGIN_START });
  axios.post(apiUrl + '/api/login', {username, password})
    .then(res => dispatch({ type: LOGIN_SUCCESS, token: res.data.payload }))
    .catch(error => dispatch({ type: LOGIN_FAILURE, error: error }));
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

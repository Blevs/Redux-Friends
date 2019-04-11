import axios from 'axios';

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

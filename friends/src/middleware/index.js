import { LOGIN_SUCCESS } from '../actions';

export const authTokenLocalStorage = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('userToken', action.token);
  }
  next(action);
};

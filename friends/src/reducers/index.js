import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';
const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
  case LOGIN_START:
    return {
      ...state,
      loggingIn: true,
      error: null
    };
  case LOGIN_SUCCESS:
    return {
      ...state,
      loggingIn: false,
      error: null
    };
  case LOGIN_FAILURE:
    return {
      ...state,
      logginIn: false,
      error: action.error
    };
  default:
    return state;
  }
};

export default rootReducer;

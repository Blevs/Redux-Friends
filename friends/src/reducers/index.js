import {
  LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
  GET_FRIENDS_START, GET_FRIENDS_SUCCESS, GET_FRIENDS_FAILURE,
  DELETE_FRIEND_START, DELETE_FRIEND_SUCCESS, DELETE_FRIEND_FAILURE,
} from '../actions';

const initialState = {
  deletingFriend: false,
  gettingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
  case GET_FRIENDS_START:
    return {
      ...state,
      gettingFriends: true,
      error: null
    };
  case GET_FRIENDS_SUCCESS:
    return {
      ...state,
      gettingFriends: false,
      friends: action.friends,
      error: null
    };
  case GET_FRIENDS_FAILURE:
    return {
      ...state,
      gettingFriends: false,
      error: action.error
    };
  case DELETE_FRIEND_START:
    return {
      ...state,
      deletingFriend: true,
      error: null
    };
  case DELETE_FRIEND_SUCCESS:
    return {
      ...state,
      deletingFriend: false,
      friends: action.friends,
      error: null
    };
  case DELETE_FRIEND_FAILURE:
    return {
      ...state,
      deletingFriend: false,
      error: action.error
    };
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

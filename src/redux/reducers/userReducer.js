import { SET_LOADING, SET_USER } from '../actions';

const INITIAL_STATE = {
  isLoading: true,
  user: null,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_LOADING:
    return {
      ...state,
      isLoading: true,
    };
  case SET_USER:
    return {
      ...state,
      isLoading: false,
      user: action.payload,
    };
  default:
    return state;
  }
}

export default userReducer;

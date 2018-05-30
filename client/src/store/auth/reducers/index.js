import * as types from '../actions/types';

const auth = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_USER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default auth;

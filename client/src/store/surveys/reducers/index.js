import { FETCH_SURVEYS_SUCCESS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

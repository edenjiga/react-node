import { combineReducers } from 'redux';

import { rootReducer as auth } from './auth';

const entities = combineReducers({
  auth
});

export default entities;

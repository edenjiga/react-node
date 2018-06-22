import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { rootReducer as auth } from './auth';

const entities = combineReducers({
  auth,
  form: reduxForm
});

export default entities;

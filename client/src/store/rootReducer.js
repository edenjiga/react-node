import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { rootReducer as auth } from './auth';
import { rootReducer as surveys } from './surveys';
const entities = combineReducers({
  auth,
  surveys,
  form: reduxForm
});

export default entities;

import { call, put } from 'redux-saga/effects';
import Axios from 'axios';
import * as actions from '../actions';

export default function* submitSurvey(action) {
  try {
    const { data } = yield call(Axios.post, '/api/surveys', action.payload);
    action.payload.history.push('/surveys');
    yield put(actions.submitSurveySuccess(data || false));
  } catch (error) {
    console.log(error);
  }
}

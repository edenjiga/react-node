import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Axios from 'axios';

import * as actions from '../actions';

export default function* fetchSurveys() {
  console.log('a');
  try {
    const { data } = yield call(Axios.get, '/api/surveys');
    yield put(actions.fetchSurveySuccess(data));
  } catch (error) {
    console.log(error);
  }
}

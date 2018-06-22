import { takeLatest } from 'redux-saga/effects';
import fetchUser from './fetchUser';
import addCredits from './addCredits';
import submitSurvey from './submitSurvey';
import * as types from '../actions/types';
export default function* root() {
  yield takeLatest(types.FETCH_USER, fetchUser);
  yield takeLatest(types.ADD_CREDITS, addCredits);
  yield takeLatest(types.SUBMIT_SURVEY, submitSurvey);
}

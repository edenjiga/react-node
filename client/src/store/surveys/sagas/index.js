import { takeLatest } from 'redux-saga/effects';
import fetchSurveys from './fetchSurveys';
import * as types from '../actions/types';

export default function* root() {
  yield takeLatest(types.FETCH_SURVEYS, fetchSurveys);
}

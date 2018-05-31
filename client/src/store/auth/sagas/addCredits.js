import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';
import * as actions from '../actions';

export default function* addCredits(action) {
  try {
    const { data } = yield call(axios.post, '/api/stripe', action.payload);
    console.log({ data });
    yield put(actions.fetchUserSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

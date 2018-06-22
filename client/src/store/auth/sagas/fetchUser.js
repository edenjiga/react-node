import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';
import axios from 'axios';
import { get } from 'http';

export default function* fetchUser() {
  // yield delay(300);
  try {
    // yield put(actions.fetchUser());
    const { data } = yield call(axios.get, '/api/current_user');
    yield put(actions.fetchUserSuccess(data || false));
  } catch (error) {
    console.log(error);
  }
}

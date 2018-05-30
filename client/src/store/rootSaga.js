import { all, fork } from 'redux-saga/effects';
import { rootSaga as auth } from './auth';

export default function* rootSaga() {
  yield all([fork(auth)]);
}

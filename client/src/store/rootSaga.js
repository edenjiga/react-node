import { all, fork } from 'redux-saga/effects';
import { rootSaga as auth } from './auth';
import { rootSaga as surveys } from './surveys';

export default function* rootSaga() {
  yield all([fork(auth), fork(surveys)]);
}

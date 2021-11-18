import { all } from 'redux-saga/effects';
import usersSaga from './users/saga';
import productsSaga from './products/saga';
import authSaga from "./auth/saga";

export default function* rootSaga() {
  yield all([
      usersSaga(),
      productsSaga(),
      authSaga()
  ]);
}

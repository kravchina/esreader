import { fork } from 'redux-saga/effects';
import measurements from './measurementsSaga';

export default function* () {
  yield fork(measurements);
}
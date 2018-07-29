import { takeEvery, put } from 'redux-saga/effects';
import * as measurementsAction from '../actions/measurementsActions';
import api from '../../constants/apiEndpoints';
import * as types from '../../constants/actionTypes';
import store from '../index';

let eventSource;

function* startGetMeasurements() {
  eventSource = new EventSource(api.measurements.get);
  eventSource.onopen = function() {
    store.dispatch(measurementsAction.measurementsConnected());
  };

  eventSource.onerror = function() {
    if (this.readyState == EventSource.CONNECTING) {
      store.dispatch(measurementsAction.startGettingMeasurements());
    } else {
      put(measurementsAction.stopGettingMeasurements());
      put(measurementsAction.measurementFailed('connection error'));
    }
  };

  eventSource.onmessage = function(e) {
    store.dispatch(measurementsAction.measurementReceived(JSON.parse(e.data)));
  };
}

function* stopGettingMeasurements() {
  yield eventSource.close();
}

export default function* () {
  yield takeEvery(types.START_GETTING_MEASUREMENTS, startGetMeasurements);
  yield takeEvery(types.STOP_GETTING_MEASUREMENTS, stopGettingMeasurements);
}
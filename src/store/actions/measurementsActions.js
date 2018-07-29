import * as types from '../../constants/actionTypes';

export const startGettingMeasurements = () => ({
  type: types.START_GETTING_MEASUREMENTS,
});

export const stopGettingMeasurements = () => ({
  type: types.STOP_GETTING_MEASUREMENTS,
});

export const measurementsConnected = () => ({
  type: types.MEASUREMETS_CONNECTED,
});

export const measurementsDisconnected = () => ({
  type: types.MEASUREMETS_DISCONNECTED,
});

export const measurementReceived = data => ({
  type: types.MEASUREMENT_RECEIVED,
  data,
});

export const measurementFailed = error => ({
  type: types.MEASUREMENT_FAILED,
  error,
});
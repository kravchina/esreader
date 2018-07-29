import * as types from '../../constants/actionTypes';

export const STATUSES = {
  connecting: 'connecting',
  connected: 'connected',
  disconnected: 'disconnected',
};

const initialState = {
  connectionStatus: STATUSES.disconnected,
  measurementsList: [],
  errorText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.START_GETTING_MEASUREMENTS:
      return {
        ...state,
        connectionStatus: STATUSES.connecting,
      };

    case types.STOP_GETTING_MEASUREMENTS:
      return {
        ...state,
        connectionStatus: STATUSES.disconnected,
      };

    case types.MEASUREMETS_CONNECTED:
      return {
        ...state,
        connectionStatus: STATUSES.connected
      };

    case types.MEASUREMETS_DISCONNECTED:
      return {
        ...state,
        connectionStatus: STATUSES.disconnected,
      };

    case types.MEASUREMENT_RECEIVED:
      return {
        ...state,
        measurementsList: [
          ...state.measurementsList,
          ...action.data,
        ]
      };

    case types.MEASUREMENT_FAILED:
      return {
        ...state,
        errorText: action.error,
      };

    default:
      return state;
  }
};
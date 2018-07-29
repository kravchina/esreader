import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as measurementsAction from '../../store/actions/measurementsActions';
import { STATUSES } from '../../store/reducers/measurementsReducer';
import MeasurementItem from '../../components/MeasurementItem';
import './index.css';

const COLUMNS = [ 'name', 'unit', 'measurements' ];

class HomePage extends Component {

  componentWillUnmount() {
    const { connectionStatus,  stopGettingMeasurements} = this.props;
    if (connectionStatus === STATUSES.connected) {
      stopGettingMeasurements();
    }
  }

  handleButtonClick = () => {
    const { connectionStatus, startGettingMeasurements, stopGettingMeasurements } = this.props;
    if (connectionStatus === STATUSES.connected) {
      stopGettingMeasurements();
    }
    if (connectionStatus === STATUSES.disconnected) {
      startGettingMeasurements();
    }
  };

  render() {
    const { connectionStatus, measurementsList, errorText } = this.props;
    const buttonText = connectionStatus === STATUSES.disconnected ? 'Connect' : 'Disconnect';
    return (
      <div className="page home-page">
        {
          errorText.length < 1 &&
          <div className="content">
            <div className="actions">
              <button
                onClick={this.handleButtonClick}
                disabled={connectionStatus === STATUSES.connecting}
                className="toggle-connection-btn"
              >
                {buttonText}
              </button>
              <span className={`connection-status ${connectionStatus === STATUSES.connected ? 'connected' : 'disconnected'}`}>
            {`Status: ${connectionStatus}`}
          </span>
            </div>
            {
              measurementsList.length < 1 &&
              <div>There no measurements</div>
            }
            {
              measurementsList.length > 0 &&
              <table>
                <thead>
                <tr>
                  {
                    COLUMNS.map(col => (
                      <th key={col}>
                      <span>
                        {col}
                      </span>
                      </th>
                    ))
                  }
                </tr>
                </thead>
                <tbody>
                {
                  measurementsList.map((measurement, i) => (
                    <MeasurementItem
                      key={`${i}${measurement._id}`}
                      measurement={measurement}
                    />
                  ))
                }
                </tbody>
              </table>
            }
          </div>
        }
        {
          errorText.length > 0 &&
          <div className="error">
            {errorText}
          </div>
        }
      </div>
    )
  }
}

HomePage.propTypes = {
  connectionStatus: PropTypes.string.isRequired,
  measurementsList: PropTypes.array.isRequired,
  errorText: PropTypes.string.isRequired,
  startGettingMeasurements: PropTypes.func.isRequired,
  stopGettingMeasurements: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  connectionStatus: state.measurements.connectionStatus,
  measurementsList: state.measurements.measurementsList,
  errorText: state.measurements.errorText,
});

const mapDispatchToProps = dispatch => ({
  startGettingMeasurements: () => dispatch(measurementsAction.startGettingMeasurements()),
  stopGettingMeasurements: () => dispatch(measurementsAction.stopGettingMeasurements()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
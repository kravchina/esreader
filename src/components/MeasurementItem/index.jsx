import React  from 'react';
import PropTypes from 'prop-types';

const MeasurementItem = ({ measurement }) => {
  const measurements = measurement.measurements.join(', ');
  return (
    <tr className="measurement-item">
      <td className="column-name">
        {measurement.name}
      </td>
      <td className="column-unit">
        {measurement.unit}
      </td>
      <td className="column-measurements">
          <span>
            {measurements}
          </span>
      </td>
    </tr>
  )
};

MeasurementItem.propTypes = {
  measurement: PropTypes.object.isRequired,
};

export default MeasurementItem;

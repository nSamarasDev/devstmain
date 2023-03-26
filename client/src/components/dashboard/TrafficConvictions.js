import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { deleteTrafficConvictions } from '../../actions/application';

const TrafficConvictions = ({
  trafficConvictions,
  deleteTrafficConvictions,
}) => {
  const convictions = trafficConvictions.map((tc) => (
    <tr key={tc._id}>
      <td className='hide-sm'>{tc.violation}</td>
      <td className='hide-sm'>{tc.stateOfViolation}</td>
      <td className='hide-sm'>{tc.penality}</td>
      <td>
        {null}
        {tc.dateConvicted ? formatDate(tc.dateConvicted) : 'Now'}
      </td>

      <td>
        <button
          onClick={() => deleteTrafficConvictions(tc._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <section className='container'>
        <h2 className='table'>Traffic Convictions</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Violation</th>
              <th className='hide-sm'>State of Violation</th>
              <th className='hide-sm'>Penality</th>
              <th className='hide-sm'>Date</th>
              <th className='hide-sm'></th>
              <th />
            </tr>
          </thead>
          <tbody>{convictions}</tbody>
        </table>
      </section>
    </Fragment>
  );
};

TrafficConvictions.propTypes = {
  trafficConvictions: PropTypes.array.isRequired,
  deleteTrafficConvictions: PropTypes.func.isRequired,
};

export default connect(null, { deleteTrafficConvictions })(TrafficConvictions);

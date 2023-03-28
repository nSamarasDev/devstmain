import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';

const DrivingExperience = ({ drivingExperience, deleteDrivingExperience }) => {
  const drvExps = drivingExperience.map((de) => (
    <tr key={de._id}>
      <td className='hide-sm'>{de.straightTruck}</td>
      <td className='hide-sm'>{de.typeOfEquipment1}</td>
      <td className='hide-sm'>{de.tractorAndSemiTrailer}</td>
      <td className='hide-sm'>
        {de.dateTo1} - {de.dateFrom1}
      </td>

      <td>
        <button
          onClick={() => deleteDrivingExperience(de._id)}
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
        <h2 className='table'>Driving Experience</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Straight Truck</th>
              <th className='hide-sm'>Type of Equipment</th>
              <th className='hide-sm'>Tractor and Semi Trailer</th>
              <th className='hide-sm'>Date</th>
              <th className='hide-sm'></th>
              <th />
            </tr>
          </thead>
          <tbody>{drvExps}</tbody>
        </table>
      </section>
    </Fragment>
  );
};

DrivingExperience.propTypes = {
  drivingExperience: PropTypes.array.isRequired,
};

export default connect(null, {})(DrivingExperience);

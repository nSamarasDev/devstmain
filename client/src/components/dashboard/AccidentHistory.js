import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { deleteAccidentHistory } from '../../actions/application';

const AccidentHistory = ({ accidentHistory, deleteAccidentHistory }) => {
  const accHtrys = accidentHistory.map((ah) => (
    <tr key={ah._id}>
      <td className='hide-sm'>{ah.natureOfAccident}</td>
      <td className='hide-sm'>{ah.fatalities}</td>
      <td className='hide-sm'>{ah.injuries}</td>
      <td className='hide-sm'>{ah.date}</td>

      <td>
        <button
          onClick={() => deleteAccidentHistory(ah._id)}
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
        <h2 className='table'>Accident History</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Nature of accident</th>
              <th className='hide-sm'>Fatalities</th>
              <th className='hide-sm'>Injuries</th>
              <th className='hide-sm'>Date</th>
              <th className='hide-sm'></th>
              <th />
            </tr>
          </thead>
          <tbody>{accHtrys}</tbody>
        </table>
      </section>
    </Fragment>
  );
};

AccidentHistory.propTypes = {
  accidentHistory: PropTypes.array.isRequired,
  deleteAccidentHistory: PropTypes.func.isRequired,
};

export default connect(null, { deleteAccidentHistory })(AccidentHistory);

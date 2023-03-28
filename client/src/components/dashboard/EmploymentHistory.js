import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { deleteEmploymentHistory } from '../../actions/application';

const EmploymentHistory = ({ employmentHistory, deleteEmploymentHistory }) => {
  const empHstrys = employmentHistory.map((eh) => (
    <tr key={eh._id}>
      <td className='hide-sm'>{eh.priorEmployerName}</td>
      <td className='hide-sm'>{eh.address}</td>
      <td className='hide-sm'>{eh.phoneNumber}</td>

      <td>
        {formatDate(eh.fromDate)} - {eh.toDate ? formatDate(eh.toDate) : 'Now'}
      </td>

      <td>
        <button
          onClick={() => deleteEmploymentHistory(eh._id)}
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
        <h2 className='table'>Employment History</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Prior Employer Name</th>
              <th className='hide-sm'>Address</th>
              <th className='hide-sm'>Phone Number</th>
              <th className='hide-sm'>Years</th>
              <th className='hide-sm'></th>
              <th />
            </tr>
          </thead>
          <tbody>{empHstrys}</tbody>
        </table>
      </section>
    </Fragment>
  );
};

EmploymentHistory.propTypes = {
  employmentHistory: PropTypes.array.isRequired,
  deleteEmploymentHistory: PropTypes.func.isRequired,
};

export default connect(null, { deleteEmploymentHistory })(EmploymentHistory);

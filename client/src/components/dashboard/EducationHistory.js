import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { deleteEducationHistory } from '../../actions/application';

const EducationHistory = ({ educationHistory, deleteEducationHistory }) => {
  const eduHstrys = educationHistory.map((eduh) => (
    <tr key={eduh._id}>
      <td className='hide-sm'>{eduh.highSchool}</td>
      <td className='hide-sm'>{eduh.college}</td>
      <td className='hide-sm'>{eduh.other}</td>

      <td>
        <button
          onClick={() => deleteEducationHistory(eduh._id)}
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
        <h2 className='table'>Education History</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>High School</th>
              <th className='hide-sm'>College</th>
              <th className='hide-sm'>Other</th>
              <th className='hide-sm'></th>
              <th />
            </tr>
          </thead>
          <tbody>{eduHstrys}</tbody>
        </table>
      </section>
    </Fragment>
  );
};

EducationHistory.propTypes = {
  educationHistory: PropTypes.array.isRequired,
  deleteEducationHistory: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducationHistory })(EducationHistory);

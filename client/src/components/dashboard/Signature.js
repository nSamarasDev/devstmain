import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { deleteSignature } from '../../actions/application';

const Signature = ({ signature, deleteSignature }) => {
  const signatures = signature.map((sn) => (
    <tr key={sn._id}>
      <td className='hide-sm'>{sn.applicantSignature}</td>
      <td className='hide-sm'>{sn.printedName}</td>
      <td className='hide-sm'>{sn.date}</td>

      <td>
        <button
          onClick={() => deleteSignature(sn._id)}
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
        <h2 className='table'>Signature</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Applicant Signature</th>
              <th className='hide-sm'>Printed Name</th>
              <th className='hide-sm'>Date</th>
              <th className='hide-sm'></th>
              <th />
            </tr>
          </thead>
          <tbody>{signatures}</tbody>
        </table>
      </section>
    </Fragment>
  );
};

Signature.propTypes = {
  signature: PropTypes.array.isRequired,
  deleteSignature: PropTypes.func.isRequired,
};

export default connect(null, { deleteSignature })(Signature);

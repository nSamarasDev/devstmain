import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { deletePreviousResidency } from '../../actions/application';

const PreviousResidency = ({ previousResidency, deletePreviousResidency }) => {
  const addresses = previousResidency.map((pvr) => (
    <tr key={pvr._id}>
      <td>{pvr.currentAddress}</td>
      <td className='hide-sm'>{pvr.mailingAddress}</td>
      <td className='hise-sm'>{pvr.previous1}</td>
      <td>
        <button
          onClick={() => deletePreviousResidency(pvr._id)}
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
        <h2 className='table'>Previous Residency</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Current Address</th>
              <th className='hide-sm'>Mailing Address</th>
              <th className='hide-sm'>First Previous Address</th>
              <th />
            </tr>
          </thead>
          <tbody>{addresses}</tbody>
        </table>
      </section>
    </Fragment>
  );
};

PreviousResidency.propTypes = {
  previousResidency: PropTypes.array.isRequired,
  deletePreviousResidency: PropTypes.func.isRequired,
};

export default connect(null, { deletePreviousResidency })(PreviousResidency);

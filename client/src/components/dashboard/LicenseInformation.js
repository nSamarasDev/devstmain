import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { deleteLicenseInformation } from '../../actions/application';

const LicenseInformation = ({
  licenseInformation,
  deleteLicenseInformation,
}) => {
  const licenses = licenseInformation.map((li) => (
    <tr key={li._id}>
      <td>{li.state}</td>
      <td className='hide-sm'>{li.typeClass}</td>
      <td className='hide-sm'>{li.licenseNumber}</td>
      <td className='hise-sm'>{li.expireDate}</td>
      <td>
        <button
          onClick={() => deleteLicenseInformation(li._id)}
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
        <h2 className='table'>License Information</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>State</th>
              <th className='hide-sm'>Type Class</th>
              <th className='hide-sm'>License Number</th>
              <th className='hide-sm'>Expire Date</th>
              <th />
            </tr>
          </thead>
          <tbody>{licenses}</tbody>
        </table>
      </section>
    </Fragment>
  );
};

LicenseInformation.propTypes = {
  licenseInformation: PropTypes.array.isRequired,
  deleteLicenseInformation: PropTypes.func.isRequired,
};

export default connect(null, { deleteLicenseInformation })(LicenseInformation);

import React, { Fragment } from 'react';
import formatDate from '../../utils/formatDate';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAboutOurServices } from '../../actions/company';

const AboutOurServices = ({ aboutOurServices, deleteAboutOurServices }) => {
  const aboutOurService = aboutOurServices.map((aos) => (
    <tr key={aos._id}>
      <td>{aos.service1}</td>
      <td className='hide-sm'>{aos.description}</td>
      <td>
        {formatDate(aos.from)} - {aos.to ? formatDate(aos.to) : 'Now'}
      </td>
      <td>
        <button
          onClick={() => deleteAboutOurServices(aos._id)}
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
        <h2 className='table'>About our services</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Services</th>
              <th className='hide-sm'>Description</th>
              <th className='hide-sm'>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{aboutOurService}</tbody>
        </table>
      </section>
    </Fragment>
  );
};

AboutOurServices.propTypes = {
  aboutOurServices: PropTypes.array.isRequired,
  deleteAboutOurServices: PropTypes.func.isRequired,
};

export default connect(null, { deleteAboutOurServices })(AboutOurServices);

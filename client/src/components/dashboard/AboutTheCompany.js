import React, { Fragment } from 'react';
import formatDate from '../../utils/formatDate';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAboutTheCompany } from '../../actions/company';

const AboutTheCompany = ({ aboutTheCompany, deleteAboutTheCompany }) => {
  const companyInformation = aboutTheCompany.map((atc) => (
    <tr key={atc._id}>
      <td>{atc.whatWeDo}</td>
      <td className='hide-sm'>{atc.companyAchievements}</td>
      <td>
        {formatDate(atc.from)} - {atc.to ? formatDate(atc.to) : 'Now'}
      </td>
      <td>
        <button
          onClick={() => deleteAboutTheCompany(atc._id)}
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
        <h2 className='table'>About our Company</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>What we do</th>
              <th className='hide-sm'>Company Achievements</th>
              <th className='hide-sm'>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{companyInformation}</tbody>
        </table>
      </section>
    </Fragment>
  );
};

AboutTheCompany.propTypes = {
  aboutTheCompany: PropTypes.array.isRequired,
  deleteAboutTheCompany: PropTypes.func.isRequired,
};

export default connect(null, { deleteAboutTheCompany })(AboutTheCompany);

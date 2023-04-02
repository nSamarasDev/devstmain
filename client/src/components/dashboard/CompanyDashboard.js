import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Alert from '../../components/layout/Alert';
import CompanyDashboardActions from './CompanyDashboardActions';
import AboutOurServices from './AboutOurServices';
import AboutTheCompany from './AboutTheCompany';
import { deleteAccount, getCurrentCompanyProfile } from '../../actions/company';

const CompanyDashboard = ({
  getCurrentCompanyProfile,
  deleteAccount,
  auth: { user },
  company: { company, loading },
}) => {
  useEffect(() => {
    getCurrentCompanyProfile();
  }, [getCurrentCompanyProfile]);

  return loading && company === null ? (
    <Spinner />
  ) : (
    <>
      <section className='container'>
        <Alert />
        <h1 className='large text-primary'>Company Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Welcome {user && user.name}
        </p>
        {company !== null ? (
          <Fragment>
            <CompanyDashboardActions />
            <AboutOurServices aboutOurServices={company.aboutOurServices} />
            <AboutTheCompany aboutTheCompany={company.aboutTheCompany} />

            <div className='my-2'>
              <button
                className='btn btn-danger'
                onClick={() => deleteAccount()}
              >
                <i className='fas fa-user-minus'></i>Delete my account
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
            </Link>
            <Link to='/create-companyProfile' className='btn btn-primary my-1'>
              Create Company Profile
            </Link>
          </Fragment>
        )}
      </section>
    </>
  );
};

CompanyDashboard.propTypes = {
  getCurrentCompanyProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  company: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  company: state.company,
});

export default connect(mapStateToProps, {
  getCurrentCompanyProfile,
  deleteAccount,
})(CompanyDashboard);

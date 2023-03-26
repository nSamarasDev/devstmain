import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Alert from '../../components/layout/Alert';
import LoadDashboardActions from './LoadDashboardActions';
import { deleteAccount, getCurrentLoad } from '../../actions/load';

const LoadDashboard = ({
  getCurrentLoad,
  deleteAccount,
  auth: { user },
  load: { load, loading },
}) => {
  useEffect(() => {
    getCurrentLoad();
  }, [getCurrentLoad]);

  return loading && load === null ? (
    <Spinner />
  ) : (
    <>
      <section className='container'>
        <Alert />
        <h1 className='large text-primary'>Load Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Welcome {user && user.name}
        </p>
        {load !== null ? (
          <Fragment>
            <LoadDashboardActions />
            {/*<Experience experience={profile.experience} />
            <Education education={profile.education} />*/}

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
            <p>You have not yet setup a company, please add some information</p>
            <Link to='/create-load' className='btn btn-primary my-1'>
              Create Load
            </Link>
          </Fragment>
        )}
      </section>
    </>
  );
};

LoadDashboard.propTypes = {
  getCurrentLoad: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  load: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  load: state.load,
});

export default connect(mapStateToProps, { getCurrentLoad, deleteAccount })(
  LoadDashboard
);

import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ApplicationDashboardActions from './ApplicationDashboardActions';
import PreviousResidency from './PreviousResidency';
import LicenseInformation from './LicenseInformation';
import DrivingExperience from './DrivingExperience';
import AccidentHistory from './AccidentHistory';
import TrafficConvictions from './TrafficConvictions';
import EmploymentHistory from './EmploymentHistory';
import EducationHistory from './EducationHistory';
import Signature from './Signature';
import Alert from '../../components/layout/Alert';
import {
  getCurrentApplication,
  deleteAccount,
} from '../../actions/application';

const ApplicationDashboard = ({
  getCurrentApplication,
  deleteAccount,
  auth: { user },
  application: { application, loading },
}) => {
  useEffect(() => {
    getCurrentApplication();
  }, [getCurrentApplication]);

  return loading && application === null ? (
    <Spinner />
  ) : (
    <>
      <section className='container'>
        <Alert />
        <h1 className='large text-primary'>Application Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Welcome {user && user.name}
        </p>
        {application !== null ? (
          <Fragment>
            <ApplicationDashboardActions />
            <PreviousResidency
              previousResidency={application.previousResidency}
            />
            <LicenseInformation
              licenseInformation={application.licenseInformation}
            />
            <DrivingExperience
              drivingExperience={application.drivingExperience}
            />
            <AccidentHistory accidentHistory={application.accidentHistory} />

            <TrafficConvictions
              trafficConvictions={application.trafficConvictions}
            />

            <EmploymentHistory
              employmentHistory={application.employmentHistory}
            />

            <EducationHistory educationHistory={application.educationHistory} />

            <Signature signature={application.signature} />

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
            <p>You have not yet setup an application, please add some info</p>
            <Link to='/create-application' className='btn btn-primary my-1'>
              Create Application
            </Link>
          </Fragment>
        )}
      </section>
    </>
  );
};

ApplicationDashboard.propTypes = {
  getCurrentApplication: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  application: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  application: state.application,
});

export default connect(mapStateToProps, {
  getCurrentApplication,
  deleteAccount,
})(ApplicationDashboard);

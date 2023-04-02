import React from 'react';
import { Link } from 'react-router-dom';

const ApplicationDashboardActions = () => {
  return (
    <>
      <section className='container2'>
        <div className='dash-buttons'>
          <Link to='/edit-application' className='btn btn-primary'>
             Edit Application
          </Link>
          <Link to='/previousResidency' className='btn btn-primary'>
             Add Previous
            Residency
          </Link>
          <Link to='/licenseInformation' className='btn btn-primary'>
             Add License
            Information
          </Link>
        </div>
      </section>


      <section className='container2'>
        <div className='dash-buttons'>
          <Link to='/drivingExperience' className='btn btn-primary'>
             Add Driving
            Experience
          </Link>
          <Link to='/accidentHistory' className='btn btn-primary'>
             Add Accident
            History
          </Link>
          <Link to='/trafficConvictions' className='btn btn-primary'>
             Add Traffic
            Convictions Information
          </Link>
        </div>
      </section>

      <section className='container2'>
        <div className='dash-buttons'>
          <Link to='/employmentHistory' className='btn btn-primary'>
             Add Employment
            History
          </Link>
          <Link to='/educationHistory' className='btn btn-primary'>
             Add Education
            History
          </Link>
          <Link to='/signature' className='btn btn-primary'>
             Sign Application
          </Link>
        </div>
      </section>
    </>
  );
};

export default ApplicationDashboardActions;

import React from 'react';
import { Link } from 'react-router-dom';

const CompanyDashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-companyprofile' className='btn btn-primary'>
        Edit Company Profile
      </Link>
      <Link to='/add-aboutourservices' className='btn btn-primary'>
         Add Company Services
      </Link>
      <Link to='/add-aboutthecompany' className='btn btn-primary'>
         Add About Us
      </Link>
      <Link to='/contact' className='btn btn-primary'>
        Contact Info
      </Link>
      <Link to='/companies' className='btn btn-primary'>
        Company Profile
      </Link>
      <Link to='/load' className='btn btn-primary'>
        Loads
      </Link>
    </div>
  );
};

export default CompanyDashboardActions;

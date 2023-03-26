import React from 'react';
import { Link } from 'react-router-dom';

const LoadDashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-load' className='btn btn-primary'>
         Edit Load
      </Link>
      {/*<Link to='/application' className='btn btn-primary'>
        My Application
      </Link>*/}
      <Link to='/create-newload' className='btn btn-primary my-1'>
        Create another Load
      </Link>
      <Link to='/company' className='btn btn-primary'>
        Company
      </Link>
    </div>
  );
};

export default LoadDashboardActions;

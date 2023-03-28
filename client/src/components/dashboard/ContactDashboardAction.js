import React from 'react';
import { Link } from 'react-router-dom';

const ContactDashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-contact' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'></i> Edit Contact
      </Link>
      <Link to='/contacts' className='btn btn-primary'>
        View Contact
      </Link>
    </div>
  );
};

export default ContactDashboardActions;

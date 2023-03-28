import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Alert from '../../components/layout/Alert';
import ContactDashboardActions from './ContactDashboardAction';
import { getCurrentContact, deleteAccount } from '../../actions/contact';

const ContactDashboard = ({
  getCurrentContact,
  deleteAccount,
  auth: { user },
  contact: { contact, loading },
}) => {
  useEffect(() => {
    getCurrentContact();
  }, [getCurrentContact]);

  return loading && contact === null ? (
    <Spinner />
  ) : (
    <>
      <section className='container'>
        <Alert />
        <h1 className='large text-primary'>Contact Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Welcome {user && user.name}
        </p>
        <p className='lead'> {contact && contact.email}</p>

        {contact !== null ? (
          <Fragment>
            <ContactDashboardActions />
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
            <p>
              You have not yet setup contact information, please add some info
            </p>
            <Link to='/create-contact' className='btn btn-primary my-1'>
              Create Contact
            </Link>
          </Fragment>
        )}
      </section>
    </>
  );
};

ContactDashboard.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
  getCurrentContact: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  contact: state.contact,
});

export default connect(mapStateToProps, { getCurrentContact, deleteAccount })(
  ContactDashboard
);

import React, { Fragment, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ContactTop from './ContactTop';

import { getContactById } from '../../actions/contact';

const Contact = ({ getContactById, contact: { contact, loading }, auth }) => {
  const { id } = useParams();

  useEffect(() => {
    getContactById(id);
  }, [getContactById, id]);

  return (
    <section className='container'>
      {contact === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/contacts' className='btn btn-lifht'>
            Back to Contacts
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === contact.user._id && (
              <Link to='/edit-contact' className='btn btn-dark'>
                Edit Contact
              </Link>
            )}

          <div>
            <ContactTop contact={contact} />
          </div>
        </Fragment>
      )}
    </section>
  );
};

Contact.propTypes = {
  getContactById: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contact,
  auth: state.auth,
});

export default connect(mapStateToProps, { getContactById })(Contact);

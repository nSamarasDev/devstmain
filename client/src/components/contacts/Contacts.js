import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ContactItem from './ContactItem';
import { getContacts } from '../../actions/contact';

const Contacts = ({
  getContacts,
  contact: { contacts, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getContacts();
  }, [getContacts]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section>
      <div>
        {user.isAdmin ? (
          <section className='container'>
            <h1 className='large text-primary'>Contacts</h1>
            <p className='lead'>
              <i className='fab fa-connectdevelop'></i>Here are all contacts on
              file
            </p>
            <div className='profiles'>
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <ContactItem key={contact._id} contact={contact} />
                ))
              ) : (
                <h4>No contacts avaiable...</h4>
              )}
            </div>
          </section>
        ) : (
          <section className='container'>
            <h4>No contact found...</h4>
          </section>
        )}
      </div>
    </section>
  );
};
Contacts.propTypes = {
  getContacts: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contact,
  auth: state.auth,
});

export default connect(mapStateToProps, { getContacts })(Contacts);

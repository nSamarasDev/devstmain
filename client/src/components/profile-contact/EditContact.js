import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../layout/Alert';
import { getCurrentContact, createContact } from '../../actions/contact';

const EditContact = ({
  contact: { contact, loading },
  createContact,
  getCurrentContact,
  history,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  useEffect(() => {
    getCurrentContact();

    setFormData({
      name: loading || !contact.name ? '' : contact.name,
      email: loading || !contact.email ? '' : contact.email,
      description: loading || !contact.description ? '' : contact.description,
    });
  }, [getCurrentContact]);

  const { name, email, description } = formData;

  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createContact(formData, history, true);
    //console.log(formData);
    navigate('/contact');
  };

  return (
    <Fragment>
      <section className='container'>
        <Alert />
        <h1 className='large text-primary'>Edit Contact Form</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Enter your contact information
        </p>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>Please enter your name</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>Please enter your email</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Description'
              name='description'
              value={description}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>Please enter a description</small>
          </div>
          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/contact'>
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};

EditContact.propTypes = {
  getCurrentContact: PropTypes.func.isRequired,
  createContact: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contact,
});

export default connect(mapStateToProps, { getCurrentContact, createContact })(
  EditContact
);

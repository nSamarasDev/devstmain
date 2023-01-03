import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../layout/Alert';
import { createContact } from '../../actions/contact';

const CreateContact = ({ createContact, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const { name, email, description } = formData;

  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createContact(formData, history);
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
            <small className='form-text'>Please enter a descriptionl</small>
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

CreateContact.propTypes = {
  createContact: PropTypes.func.isRequired,
};

export default connect(null, { createContact })(CreateContact);

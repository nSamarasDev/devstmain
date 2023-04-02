import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAboutOurServices } from '../../actions/company';

const AddAboutOurServices = ({ addAboutOurServices }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    service1: '',
    description: '',
    service2: '',
    description2: '',
    service3: '',
    description3: '',
    from: '',
    to: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    service1,
    description,
    service2,
    description2,
    service3,
    description3,
    from,
    to,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Add About our Services</h1>
        <p className='lead'>
          <i className='fas fa-code-branch'></i> Add any services that your
          company offers
        </p>
        <small>* = required field</small>
        <form
          className='form'
          onSubmit={(e) => {
            e.preventDefault();
            addAboutOurServices(formData, navigate('/company'));
          }}
        >
          <div className='form-group'>
            <input
              type='text'
              placeholder='* Service 1'
              name='service1'
              value={service1}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='* Description'
              name='description'
              value={description}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Service 2'
              name='service2'
              value={service2}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Description'
              name='description2'
              value={description2}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Service 3'
              name='service3'
              value={service3}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Description'
              name='description3'
              value={description3}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <h4>From Date</h4>
            <input
              type='date'
              name='from'
              value={from}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className='form-group'>
            <h4>To Date</h4>
            <input
              type='date'
              name='to'
              value={to}
              onChange={(e) => onChange(e)}
              disabled={toDateDisabled ? 'disabled' : ''}
            />
          </div>
          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/company'>
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};

AddAboutOurServices.propTypes = {
  addAboutOurServices: PropTypes.func.isRequired,
};

export default connect(null, { addAboutOurServices })(AddAboutOurServices);

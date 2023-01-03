import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLicenseInformation } from '../../actions/application';

const AddLicenseInformation = ({ addLicenseInformation }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    state: '',
    lecenseNumber: '',
    typeClass: '',
    expireDate: '',
    previouslyHeldLicenses: '',
    endorsments: '',
  });

  const {
    state,
    licenseNumber,
    typeClass,
    expireDate,
    previouslyHeldLicenses,
    endorsments,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <Fragment>
        <section className='container'>
          <h1 className='large text-primary'>License Information</h1>
          <p className='lead'>
            <i className='fas fa-code-branch'></i>
          </p>
          <small>* = required field</small>
          <form
            className='form'
            onSubmit={(e) => {
              e.preventDefault();
              addLicenseInformation(formData, navigate('/application'));
            }}
          >
            <div className='form-group'>
              <input
                type='text'
                placeholder='Issued State'
                name='state'
                value={state}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='License Number'
                name='licenseNumber'
                value={licenseNumber}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                placeholder='Class Type'
                name='typeClass'
                value={typeClass}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Expire Date'
                name='expireDate'
                value={expireDate}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Previously held licenses'
                name='previouslyHeldLicenses'
                value={previouslyHeldLicenses}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Endorsments'
                name='endorsments'
                value={endorsments}
                onChange={(e) => onChange(e)}
              />
            </div>

            <input type='submit' className='btn btn-primary my-1' />
            <Link className='btn btn-light my-1' to='/application'>
              Go Back
            </Link>
          </form>
        </section>
      </Fragment>
    </div>
  );
};

AddLicenseInformation.propTypes = {
  addLicenseInformation: PropTypes.func.isRequired,
};

export default connect(null, { addLicenseInformation })(AddLicenseInformation);

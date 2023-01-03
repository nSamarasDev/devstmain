import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPreviousResidency } from '../../actions/application';

const AddPreviousResidency = ({ addPreviousResidency }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentAddress: '',
    mailingAddress: '',
    previous1: '',
    previous2: '',
    previous3: '',
  });

  const { currentAddress, mailingAddress, previous1, previous2, previous3 } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <Fragment>
        <section className='container'>
          <h1 className='large text-primary'>
            Where have you lived in the past few years
          </h1>
          <p className='lead'>
            <i className='fas fa-code-branch'></i> Add thel last few address you
            have had
          </p>
          <small>* = required field</small>
          <form
            className='form'
            onSubmit={(e) => {
              e.preventDefault();
              addPreviousResidency(formData, navigate('/application'));
            }}
          >
            <div className='form-group'>
              <input
                type='text'
                placeholder='Current Address'
                name='currentAddress'
                value={currentAddress}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Mailing Address'
                name='mailingAddress'
                value={mailingAddress}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='First Previous Address'
                name='previous1'
                value={previous1}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Second Previous Address'
                name='previous2'
                value={previous2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Third Previous Address'
                name='previous3'
                value={previous3}
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

AddPreviousResidency.propTypes = {
  addPreviousResidency: PropTypes.func.isRequired,
};

export default connect(null, { addPreviousResidency })(AddPreviousResidency);

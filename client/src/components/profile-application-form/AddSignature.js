import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSignature } from '../../actions/application';

const AddSignature = ({ addSignature }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    applicantSignature: '',
    printedName: '',
    date: '',
  });

  const { applicantSignature, printedName, date } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <Fragment>
        <section className='container'>
          <h1 className='large text-primary'>Sign your application</h1>
          <p className='lead'>
            <i className='fas fa-code-branch'></i>
          </p>
          <small>* = required field</small>
          <form
            className='form'
            onSubmit={(e) => {
              e.preventDefault();
              addSignature(formData, navigate('/application'));
            }}
          >
            <div className='form-group'>
              <input
                type='text'
                placeholder='Printed name in this field, acknowledges all terms and conditions agreed to'
                name='applicantSignature'
                value={applicantSignature}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Printed Name'
                name='printedName'
                value={printedName}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date Signed'
                name='date'
                value={date}
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

AddSignature.propTypes = {
  addSignature: PropTypes.func.isRequired,
};

export default connect(null, { addSignature })(AddSignature);

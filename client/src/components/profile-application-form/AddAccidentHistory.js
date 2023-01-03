import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addAccidentHistory } from '../../actions/application';

const AddAccidentHistory = ({ addAccidentHistory }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    natureOfAccident: '',
    date: '',
    fatalities: '',
    injuries: '',
    chemicalSpills: '',
    natureOfAccident2: '',
    date2: '',
    fatalities2: '',
    injuries2: '',
    chemicalSpills2: '',
    natureOfAccident3: '',
    date3: '',
    fatalities3: '',
    injuries3: '',
    chemicalSpills3: '',
  });

  const {
    natureOfAccident,
    date,
    fatalities,
    injuries,
    chemicalSpills,
    natureOfAccident2,
    date2,
    fatalities2,
    injuries2,
    chemicalSpills2,
    natureOfAccident3,
    date3,
    fatalities3,
    injuries3,
    chemicalSpills3,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <Fragment>
        <section className='container'>
          <h1 className='large text-primary'>Accident History</h1>
          <p className='lead'>
            <i className='fas fa-code-branch'></i>Add your last three accidents,
            if none ( " type none into all fields " )
          </p>
          <small>* = required field</small>
          <form
            className='form'
            onSubmit={(e) => {
              e.preventDefault();
              addAccidentHistory(formData, navigate('/application'));
            }}
          >
            <div className='form-group'>
              <input
                type='text'
                placeholder='Nature of accident'
                name='natureOfAccident'
                value={natureOfAccident}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date of accident'
                name='date'
                value={date}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Were there any fatalities'
                name='fatalities'
                value={fatalities}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Was anybody injured'
                name='injuries'
                value={injuries}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Was there any type of chemical spills'
                name='chemicalSpills'
                value={chemicalSpills}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                placeholder='Nature of the second accident'
                name='natureOfAccident2'
                value={natureOfAccident2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date of the second accident'
                name='date2'
                value={date2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Were there any fatalities of the second accident'
                name='fatalities2'
                value={fatalities2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Was anybody injured in the second accident'
                name='injuries2'
                value={injuries2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Was there any type of chemical spills in the second accident'
                name='chemicalSpills2'
                value={chemicalSpills2}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                placeholder='Nature of the third accident'
                name='natureOfAccident3'
                value={natureOfAccident3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date of the third accident'
                name='date3'
                value={date3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Were there any fatalities in the third accident'
                name='fatalities3'
                value={fatalities3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Was anybody injured in the third accident'
                name='injuries3'
                value={injuries3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Was there any type of chemical spills in the third accident'
                name='chemicalSpills3'
                value={chemicalSpills3}
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

AddAccidentHistory.propTypes = {
  addAccidentHistory: PropTypes.func.isRequired,
};

export default connect(null, { addAccidentHistory })(AddAccidentHistory);

import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducationHistory } from '../../actions/application';

const AddEducationHistory = ({ addEducationHistory }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    highSchool: '',
    schoolLocation: '',
    yearsCompleted: '',
    graduate: '',
    details: '',
    college: '',
    schoolLocation2: '',
    courseOfStudy2: '',
    yearsCompleted2: '',
    graduate2: '',
    details2: '',
    other: '',
    schoolLocation3: '',
    courseOfStudy3: '',
    yearsCompleted3: '',
    graduate3: '',
    details3: '',
  });

  const {
    highSchool,
    schoolLocation,
    courseOfStudy,
    yearsCompleted,
    graduate,
    details,
    college,
    schoolLocation2,
    courseOfStudy2,
    yearsCompleted2,
    graduate2,
    details2,
    other,
    schoolLocation3,
    courseOfStudy3,
    yearsCompleted3,
    graduate3,
    details3,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <Fragment>
        <section className='container'>
          <h1 className='large text-primary'>Education History</h1>
          <p className='lead'>
            <i className='fas fa-code-branch'></i>Add the education history you
            would like to have considered for this position
          </p>
          <small>* = required field</small>
          <form
            className='form'
            onSubmit={(e) => {
              e.preventDefault();
              addEducationHistory(formData, navigate('/application'));
            }}
          >
            <div className='form-group'>
              <input
                type='text'
                placeholder='What high school did you attend'
                name='highSchool'
                value={highSchool}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='School location'
                name='schoolLocation'
                value={schoolLocation}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='What did you study'
                name='courseOfStudy'
                value={courseOfStudy}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='How many years did you complete'
                name='yearsCompleted'
                value={yearsCompleted}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Did you graduate'
                name='graduate'
                value={graduate}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Are there any spcific details you would like to add'
                name='details'
                value={details}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group'>
              <input ////////////////////////////////////////////////////
                type='text'
                placeholder='What college did you attend'
                name='college'
                value={college}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='School location'
                name='schoolLocation2'
                value={schoolLocation2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='What did you study'
                name='courseOfStudy2'
                value={courseOfStudy2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='How many years did you complete'
                name='yearsCompleted2'
                value={yearsCompleted2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Did you graduate'
                name='graduate2'
                value={graduate2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Are there any spcific details you would like to add'
                name='details2'
                value={details2}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group'>
              <input /////////////////////////////////////////////////////////////
                type='text'
                placeholder='Is there any other education you have that you would like to add'
                name='other'
                value={other}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='School location'
                name='schoolLocation3'
                value={schoolLocation3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='What did you study'
                name='courseOfStudy3'
                value={courseOfStudy3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='How many years did you complete'
                name='yearsCompleted3'
                value={yearsCompleted3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Did you graduate'
                name='graduate3'
                value={graduate3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Are there any spcific details you would like to add'
                name='details3'
                value={details3}
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

AddEducationHistory.propTypes = {
  addEducationHistory: PropTypes.func.isRequired,
};

export default connect(null, { addEducationHistory })(AddEducationHistory);

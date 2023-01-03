import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../../components/layout/Alert';
import { createApplication } from '../../actions/application';

const CreateApplication = ({ createApplication, history }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    leaglRightToWork: '',
    status: '',
    email: '',
    socialSecurityNumber: '',
    dateOfBirth: '',
    positionAppliedFor: '',
    dateAvaiableForWork: '',
    phoneNumber: '',
    youtube: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: '',
  });

  const [displaySocialInputs, toggelSocialInputs] = useState(false);

  const {
    firstName,
    middleName,
    lastName,
    legalRightToWork,
    status,
    email,
    socialSecurityNumber,
    dateOfBirth,
    positionAppliedFor,
    dateAvaiableForWork,
    phoneNumber,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = formData;

  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createApplication(formData, history);
    //console.log(formData);
    navigate('/application');
  };

  return (
    <Fragment>
      <section className='container'>
        <Alert />
        <h1 className='large text-primary'>Employment Application</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Let's get some information so you can
          get on the road
        </p>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='First name'
              name='firstName'
              value={firstName}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>Please enter your first name</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Middle name'
              name='middleName'
              value={middleName}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>Please enter your middle name</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Last name'
              name='lastName'
              value={lastName}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>Please enter your last name</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Status'
              name='status'
              value={status}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>What is your current status</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>What is your email</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Social Security Number'
              name='socialSecurityNumber'
              value={socialSecurityNumber}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What is your social security number
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Date of Birth'
              name='dateOfBirth'
              value={dateOfBirth}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>What is your date of birth</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Position'
              name='positionAppliedFor'
              value={positionAppliedFor}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What position are you applying for
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Date avaiable'
              name='dateAvaiableForWork'
              value={dateAvaiableForWork}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What date are you avaiable to start working
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Phone number'
              name='phoneNumber'
              value={phoneNumber}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>What is your phone number</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Leagl citizen'
              name='legalRightToWork'
              value={legalRightToWork}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              Are you a US citizen and do you have the leagl right to work in
              the United States
            </small>
          </div>
          <div className='my-2'>
            <button
              onClick={() => toggelSocialInputs(!displaySocialInputs)}
              type='button'
              className='btn btn-light'
            >
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>
          {displaySocialInputs && (
            <Fragment>
              <div className='form-group social-input'>
                <i className='fab fa-twitter fa-2x'></i>
                <input
                  type='text'
                  placeholder='Twitter URL'
                  name='twitter'
                  value={twitter}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group social-input'>
                <i className='fab fa-facebook fa-2x'></i>
                <input
                  type='text'
                  placeholder='Facebook URL'
                  name='facebook'
                  value={facebook}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group social-input'>
                <i className='fab fa-youtube fa-2x'></i>
                <input
                  type='text'
                  placeholder='YouTube URL'
                  name='youtube'
                  value={youtube}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group social-input'>
                <i className='fab fa-linkedin fa-2x'></i>
                <input
                  type='text'
                  placeholder='Linkedin URL'
                  name='linkedin'
                  value={linkedin}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group social-input'>
                <i className='fab fa-instagram fa-2x'></i>
                <input
                  type='text'
                  placeholder='Instagram URL'
                  name='instagram'
                  value={instagram}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </Fragment>
          )}
          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/application'>
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};

CreateApplication.propTypes = {
  createApplication: PropTypes.func.isRequired,
};

export default connect(null, { createApplication })(CreateApplication);

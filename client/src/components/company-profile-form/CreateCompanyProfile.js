import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../layout/Alert';
import { createCompanyProfile } from '../../actions/company';

const CreateCompanyProfile = ({ createCompanyProfile, history }) => {
  const [formData, setFormData] = useState({
    comapnyName: '',
    dispatchPhoneNumber: '',
    companyContact: '',
    email: '',
    companyServices: '',
    status: '',
    companyAddress: '',
    city: '',
    stateProv: '',
    zipcode: '',
    phoneNumber1: '',
    ext: '',
    mobilNumber: '',
    faxNumber: '',
    website: '',
    mcNumber: '',
    dotNumber: '',
    howDidYouHearAboutUs: '',
    wouldYouLikeContacted: '',
    youtube: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: '',
  });

  const [displaySocialInputs, toggelSocialInputs] = useState(false);

  const {
    companyName,
    dispatchPhoneNumber,
    companyContact,
    email,
    companyServices,
    status,
    companyAddress,
    city,
    stateProv,
    zipcode,
    phoneNumber1,
    ext,
    mobilNumber,
    faxNumber,
    website,
    mcNumber,
    dotNumber,
    howDidYouHearAboutUs,
    wouldYouLikeContacted,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createCompanyProfile(formData, history);
    navigate('/company');
  };

  return (
    <Fragment>
      <section className='container'>
        <Alert />
        <h1 className='large text-primary'>Create Your Company's Profile</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Let's get some information to make
          your company stand out
        </p>
        <small>* = required field</small>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='companyName'
              name='companyName'
              value={companyName}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              Could be your own company or one you work for
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='dispatchPhoneNumber'
              name='dispatchPhoneNumber'
              value={dispatchPhoneNumber}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              Please enter dispatch phone number for the company
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='companyContact'
              name='companyContact'
              value={companyContact}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              Please enter a main company contact
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              Please enter a company email address
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='companyServices'
              name='companyServices'
              value={companyServices}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What services does this company offer
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='status'
              name='status'
              value={status}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What is the company status? Can be new, current, just sold, just
              purchased etc...
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='companyAddress'
              name='companyAddress'
              value={companyAddress}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>What is the company address</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='city'
              name='city'
              value={city}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What city is the company located
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='stateProv'
              name='stateProv'
              value={stateProv}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What state or province is the company located
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='zipcode'
              name='zipcode'
              value={zipcode}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What is the zipcode or, your countries postal code
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='phoneNumber1'
              name='phoneNumber1'
              value={phoneNumber1}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What is the company's main phone number?
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='ext'
              name='ext'
              value={ext}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>Is there any extension needed?</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='mobilNumber'
              name='mobilNumber'
              value={mobilNumber}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              Add a mobil number if you would like to
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='faxNumber'
              name='faxNumber'
              value={faxNumber}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>What is the company fax number?</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='zipcode'
              name='zipcode'
              value={zipcode}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What is the zipcode or, your countries postal code
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='website'
              name='website'
              value={website}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>What is the company website?</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='mcNumber'
              name='mcNumber'
              value={mcNumber}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>What is the MC Number</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='dotNumber'
              name='dotNumber'
              value={dotNumber}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>What is the DOT Number</small>
          </div>

          <div className='form-group'>
            <input
              type='text'
              placeholder='howDidYouHearAboutUs'
              name='howDidYouHearAboutUs'
              value={howDidYouHearAboutUs}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>How did you hear about us?</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='wouldYouLikeContacted'
              name='wouldYouLikeContacted'
              value={wouldYouLikeContacted}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              Would you like us to contact you by email?
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
          <Link className='btn btn-light my-1' to='/dashboard'>
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};
CreateCompanyProfile.propTypes = {
  createCompanyProfile: PropTypes.func.isRequired,
};

export default connect(null, { createCompanyProfile })(CreateCompanyProfile);

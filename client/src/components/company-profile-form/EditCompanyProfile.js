import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../../components/layout/Alert';
import {
  createCompanyProfile,
  getCurrentCompanyProfileById,
} from '../../actions/company';

const EditCompanyProfile = ({
  createCompanyProfile,
  getCurrentCompanyProfileById,
  company: { company, loading },
  history,
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    dispatchPhoneNumber: '',
    companyContact: '',
    email: '',
    companyServices: '',
    status: '',
    companyAddress: '',
    stateProv: '',
    zipcode: '',
    phoneNumber1: '',
    ext: '',
    mobileNumber: '',
    faxNumber: '',
    website: '',
    mcNumber: '',
    dotNumber: '',
    howDidYouHearAboutUs: '',
    wouldYouLikeContacted: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });

  const [displaySocialInputs, toggelSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentCompanyProfileById();

    setFormData({
      companyName: loading || !company.companyName ? '' : company.companyName,
      dispatchPhoneNumber:
        loading || !company.dispatchPhoneNumber
          ? ''
          : company.dispatchPhoneNumber,
      companyContact:
        loading || !company.companyContact ? '' : company.companyContact,
      email: loading || !company.email ? '' : company.email,
      companyServices:
        loading || !company.companyServices
          ? ''
          : company.companyServices.join(','),
      status: loading || !company.status ? '' : company.status,
      address: loading || !company.address ? '' : company.address,
      city: loading || !company.city ? '' : company.city,
      stateProv: loading || !company.stateProv ? '' : company.stateProv,
      postalCode: loading || !company.postalCode ? '' : company.postalCode,
      phoneNumber1:
        loading || !company.phoneNumber1 ? '' : company.phoneNumber1,
      ext: loading || !company.ext ? '' : company.ext,
      cellular: loading || !company.cellular ? '' : company.cellular,
      faxNumber: loading || !company.faxNumber ? '' : company.faxNumber,
      website: loading || !company.website ? '' : company.website,
      mcNumber: loading || !company.mcNumber ? '' : company.mcNumber,
      dotNumber: loading || !company.dotNumber ? '' : company.dotNumber,
      howDidYouHearAboutUs:
        loading || !company.howDidYouHearAboutUs
          ? ''
          : company.howDidYouHearAboutUs,
      wouldYouLikeContacted:
        loading || !company.wouldYouLikeContacted
          ? ''
          : company.wouldYouLikeContacted,
      twitter: loading || !company.social ? '' : company.social.twitter,
      facebook: loading || !company.social ? '' : company.social.facebook,
      linkedin: loading || !company.social ? '' : company.social.linkedin,
      youtube: loading || !company.social ? '' : company.social.youtube,
      instagram: loading || !company.social ? '' : company.social.instagram,
    });
  }, [getCurrentCompanyProfileById]);

  const {
    companyName,
    dispatchPhoneNumber,
    companyContact,
    email,
    companyServices,
    status,
    address,
    city,
    stateProv,
    postalCode,
    phoneNumber1,
    ext,
    cellular,
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
    createCompanyProfile(formData, history, true);
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
              placeholder='company address'
              name='address'
              value={address}
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
              placeholder='Postal code'
              name='postalCode'
              value={postalCode}
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
              placeholder='cellular phone number'
              name='cellular'
              value={cellular}
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
          <Link className='btn btn-light my-1' to='/company'>
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};

EditCompanyProfile.propTypes = {
  createComapnyProfile: PropTypes.func.isRequired,
  getCurrentCompanyProfileById: PropTypes.func.isRequired,
  company: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  company: state.company,
});

export default connect(mapStateToProps, {
  createCompanyProfile,
  getCurrentCompanyProfileById,
})(EditCompanyProfile);

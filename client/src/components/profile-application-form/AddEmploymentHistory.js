import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmploymentHistory } from '../../actions/application';

const AddEmploymentHistory = ({ addEmploymentHistory }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    priorEmployerName: '',
    phoneNumber: '',
    address: '',
    nick: '',
    fromDate: '',
    toDate: '',
    reasonForLeaving: '',
    salary: '',
    explainGapsInEmploymentReason: '',
    wereYouSubjectToFederalMotorCarrierSafteyRegulations: '',
    longSentance: '',
    priorEmployerName2: '',
    phoneNumber2: '',
    address2: '',
    tom: '',
    fromDate2: '',
    toDate2: '',
    reasonForLeaving2: '',
    salary2: '',
    explainGapsInEmploymentReason2: '',
    wereYouSubjectToFederalMotorCarrierSafteyRegulations2: '',
    longSentance2: '',
    priorEmployerName3: '',
    phoneNumber3: '',
    address3: '',
    harry: '',
    fromDate3: '',
    toDate3: '',
    reasonForLeaving3: '',
    salary3: '',
    explainGapsInEmploymentReason3: '',
    wereYouSubjectToFederalMotorCarrierSafteyRegulations3: '',
    longSentance3: '',
  });

  const {
    priorEmployerName,
    phoneNumber,
    address,
    nick,
    fromDate,
    toDate,
    reasonForLeaving,
    salary,
    explainGapsInEmploymentReason,
    wereYouSubjectToFederalMotorCarrierSafteyRegulations,
    longSentance,
    priorEmployerName2,
    phoneNumber2,
    address2,
    tom,
    fromDate2,
    toDate2,
    reasonForLeaving2,
    salary2,
    explainGapsInEmploymentReason2,
    wereYouSubjectToFederalMotorCarrierSafteyRegulations2,
    longSentance2,
    priorEmployerName3,
    phoneNumber3,
    address3,
    harry,
    fromDate3,
    toDate3,
    reasonForLeaving3,
    salary3,
    explainGapsInEmploymentReason3,
    wereYouSubjectToFederalMotorCarrierSafteyRegulations3,
    longSentance3,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <Fragment>
        <section className='container'>
          <h1 className='large text-primary'>Employment History</h1>
          <p className='lead'>
            <i className='fas fa-code-branch'></i>Please list the last three
            employers you have had.
          </p>
          <small>* = required field</small>
          <form
            className='form'
            onSubmit={(e) => {
              e.preventDefault();
              addEmploymentHistory(formData, navigate('/application'));
            }}
          >
            <div className='form-group'>
              <input
                type='text'
                placeholder='What was the name of your first most recent employer'
                name='priorEmployerName'
                value={priorEmployerName}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Company phone number'
                name='phoneNumber'
                value={phoneNumber}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Company address'
                name='address'
                value={address}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Nick'
                name='nick'
                value={nick}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='From date'
                name='fromDate'
                value={fromDate}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='To date'
                name='toDate'
                value={toDate}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Reason for leaving'
                name='reasonForLeaving'
                value={reasonForLeaving}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='What was your ending salary'
                name='salary'
                value={salary}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Explain any gaps you might have had during this time in '
                name='explainGapsInEmploymentReason'
                value={explainGapsInEmploymentReason}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='While employed here, were you subject to the Federal Motor Carrier Safety Regulations? '
                name='wereYouSubjectToFederalMotorCarrierSafteyRegulations'
                value={wereYouSubjectToFederalMotorCarrierSafteyRegulations}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Was the job designated as a safety-sensitive function in any Department of Transportation-regulated 
            mode subject to alcohol and controlled substancestesting asrequired by 49 CFR, part 40? '
                name='longSentance'
                value={longSentance}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                placeholder='What was the name of your second most recent employer'
                name='priorEmployerName2'
                value={priorEmployerName2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Company phone number'
                name='phoneNumber2'
                value={phoneNumber2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Company address'
                name='address2'
                value={address2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Tom'
                name='tom'
                value={tom}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='From date'
                name='fromDate2'
                value={fromDate2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='To date'
                name='toDate2'
                value={toDate2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Reason for leaving'
                name='reasonForLeaving2'
                value={reasonForLeaving2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='What was your ending salary'
                name='salary2'
                value={salary2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Explain any gaps you might have had during this time in '
                name='explainGapsInEmploymentReason2'
                value={explainGapsInEmploymentReason2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='While employed here, were you subject to the Federal Motor Carrier Safety Regulations? '
                name='wereYouSubjectToFederalMotorCarrierSafteyRegulations2'
                value={wereYouSubjectToFederalMotorCarrierSafteyRegulations2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Wasthe job designated as a safety-sensitive function in any Department of Transportation-regulated 
                mode subject to alcohol and controlled substancestesting asrequired by 49 CFR, part 40? '
                name='longSentance2'
                value={longSentance2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='What was the name of your first most recent employer'
                name='priorEmployerName3'
                value={priorEmployerName3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Company phone number'
                name='phoneNumber3'
                value={phoneNumber3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Company address'
                name='address3'
                value={address3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Harry'
                name='harry'
                value={harry}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='From date'
                name='fromDate3'
                value={fromDate3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='To date'
                name='toDate3'
                value={toDate3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Reason for leaving'
                name='reasonForLeaving3'
                value={reasonForLeaving3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='What was your ending salary'
                name='salary3'
                value={salary3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Explain any gaps you might have had during this time in '
                name='explainGapsInEmploymentReason3'
                value={explainGapsInEmploymentReason3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='While employed here, were you subject to the Federal Motor Carrier Safety Regulations? '
                name='wereYouSubjectToFederalMotorCarrierSafteyRegulations3'
                value={wereYouSubjectToFederalMotorCarrierSafteyRegulations3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Wasthe job designated as a safety-sensitive function in any Department of Transportation-regulated 
                mode subject to alcohol and controlled substancestesting asrequired by 49 CFR, part 40? '
                name='longSentance3'
                value={longSentance3}
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

AddEmploymentHistory.propTypes = {
  addEmploymentHistory: PropTypes.func.isRequired,
};

export default connect(null, { addEmploymentHistory })(AddEmploymentHistory);

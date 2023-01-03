import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addTrafficConvictions } from '../../actions/application';

const AddTrafficConvictions = ({ addTrafficConvictions }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    violation: '',
    dateConvicted: '',
    stateOfViolation: '',
    penality: '',
    violation2: '',
    dateConvicted2: '',
    stateOfViolation2: '',
    penality2: '',
    violation3: '',
    dateConvicted3: '',
    stateOfViolation3: '',
    penality3: '',
    violation4: '',
    dateConvicted4: '',
    stateOfViolation4: '',
    penality4: '',
    deniedPrivilegeToOperateMotorVehicle: '',
    hasDrivingPrivilegeEverBeenRevoked: '',
  });

  const {
    violation,
    dateConvicted,
    stateOfViolation,
    penality,
    violation2,
    dateConvicted2,
    stateOfViolation2,
    penality2,
    violation3,
    dateConvicted3,
    stateOfViolation3,
    penality3,
    violation4,
    dateConvicted4,
    stateOfViolation4,
    penality4,
    deniedPrivilegeToOperateMotorVehicle,
    hasDrivingPrivilegeEverBeenRevoked,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <Fragment>
        <section className='container'>
          <h1 className='large text-primary'>Traffic Convictions</h1>
          <p className='lead'>
            <i className='fas fa-code-branch'></i>Please add all of your job
            related Traffic Convictions, if none ( " type none into all fields "
            )
          </p>
          <small>* = required field</small>
          <form
            className='form'
            onSubmit={(e) => {
              e.preventDefault();
              addTrafficConvictions(formData, navigate('/application'));
            }}
          >
            <div className='form-group'>
              <input
                type='text'
                placeholder='Violation'
                name='violation'
                value={violation}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date Convicted'
                name='dateConvicted'
                value={dateConvicted}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='State of Violation'
                name='stateOfViolation'
                value={stateOfViolation}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Penality'
                name='penality'
                value={penality}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Second Violation'
                name='violation2'
                value={violation2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date of the second Conviction'
                name='dateConvicted2'
                value={dateConvicted2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='State of second Conviction'
                name='stateOfViolation2'
                value={stateOfViolation2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='What was the second Penality'
                name='penality2'
                value={penality2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='What was the third Violation'
                name='violation3'
                value={violation3}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                placeholder='Date of third Conviction'
                name='dateConvicted3'
                value={dateConvicted3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='State of third Violation'
                name='stateOfViolation3'
                value={stateOfViolation3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='What was the third penality'
                name='penality3'
                value={penality3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='What was the fourth Violation'
                name='violation4'
                value={violation4}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='What date was the fourth Conviction'
                name='dateConvicted4'
                value={dateConvicted4}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='What state did the fourth Violation occur in'
                name='stateOfViolation4'
                value={stateOfViolation4}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='What was the fourth Penalty'
                name='penality4'
                value={penality4}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Have you ever been denied a license, permit, or privilege to operate a motor vehicle?  If yes please explain.'
                name='deniedPrivilegeToOperateMotorVehicle'
                value={deniedPrivilegeToOperateMotorVehicle}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Has any license, permit, or privilege ever been suspended or revoked?  If yes please explain.'
                name='hasDrivingPrivilegeEverBeenRevoked'
                value={hasDrivingPrivilegeEverBeenRevoked}
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

AddTrafficConvictions.propTypes = {
  addTrafficConvictions: PropTypes.func.isRequired,
};

export default connect(null, { addTrafficConvictions })(AddTrafficConvictions);

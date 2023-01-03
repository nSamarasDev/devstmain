import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addDrivingExperience } from '../../actions/application';

const AddDrivindExperience = ({ addDrivingExperience }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    straightTruck: '',
    typeOfEquipment1: '',
    dateFrom1: '',
    dateTo1: '',
    tractorAndSemiTrailer: '',
    typeOfEquipment2: '',
    dateFrom2: '',
    dateTo2: '',
    tractorAndTwoTrailers: '',
    typeOfEquipment3: '',
    dateFrom3: '',
    dateTo3: '',
    tractorAndTanker: '',
    typeOfEquipment4: '',
    dateFrom4: '',
    dateTo4: '',
  });

  const {
    straightTruck,
    typeOfEquipment1,
    dateFrom1,
    dateTo1,
    tractorAndSemiTrailer,
    typeOfEquipment2,
    dateFrom2,
    dateTo2,
    tractorAndTwoTrailers,
    typeOfEquipment3,
    dateFrom3,
    dateTo3,
    tractorAndTanker,
    typeOfEquipment4,
    dateFrom4,
    dateTo4,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <div>
      <Fragment>
        <section className='container'>
          <h1 className='large text-primary'>Driving Experience</h1>
          <p className='lead'>
            <i className='fas fa-code-branch'></i>
          </p>
          <small>* = required field</small>
          <form
            className='form'
            onSubmit={(e) => {
              e.preventDefault();
              addDrivingExperience(formData, navigate('/application'));
            }}
          >
            <div className='form-group'>
              <input
                type='text'
                placeholder='Straight Truck'
                name='straightTruck'
                value={straightTruck}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Type of equipment1'
                name='typeOfEquipment1'
                value={typeOfEquipment1}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date from'
                name='dateFrom1'
                value={dateFrom1}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date to'
                name='dateTo1'
                value={dateTo1}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Tractor and semi trailer'
                name='tractorAndSemiTrailer'
                value={tractorAndSemiTrailer}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Type of equipment2'
                name='typeOfEquipment2'
                value={typeOfEquipment2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date from2'
                name='dateFrom2'
                value={dateFrom2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date to'
                name='dateTo2'
                value={dateTo2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Tractor and two trailers'
                name='tractorAndTwoTrailers'
                value={tractorAndTwoTrailers}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Type of equipment3'
                name='typeOfEquipment3'
                value={typeOfEquipment3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date from'
                name='dateFrom3'
                value={dateFrom3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date to'
                name='dateTo3'
                value={dateTo3}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Tractor and Tanker'
                name='tractorAndTanker'
                value={tractorAndTanker}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Type of equipment4'
                name='typeOfEquipment4'
                value={typeOfEquipment4}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date from'
                name='dateFrom4'
                value={dateFrom4}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date to'
                name='dateTo4'
                value={dateTo4}
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

AddDrivindExperience.propTypes = {
  addDrivingExperience: PropTypes.func.isRequired,
};

export default connect(null, { addDrivingExperience })(AddDrivindExperience);

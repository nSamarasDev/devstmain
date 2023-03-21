import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../../components/layout/Alert';
import { createNewLoad } from '../../actions/load';

const CreateNewLoad = ({ createNewLoad, history }) => {
  const [formData, setFormData] = useState({
    originAddress: '',
    destinationAddress: '',
    nameOfPay: '',
    status: '',
    tripMiles: '',
    trailerType: '',
    loadSize: '',
    loadLength: '',
    weight: '',
    payRate: '',
    shipDate: '',
    shipmentContents: '',
    description: '',
  });

  const {
    originAddress,
    destinationAddress,
    nameOfPay,
    status,
    tripMiles,
    trailerType,
    loadSize,
    loadLength,
    weight,
    payRate,
    shipDate,
    shipmentContents,
    description,
  } = formData;

  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createNewLoad(formData, history);
    navigate('/load');
  };

  return (
    <Fragment>
      <section className='container'>
        <Alert />
        <h1 className='large text-primary'>Create your load ticket</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Let's get the information we need to
          get this load where it needs to go!
        </p>
        <small>* = required field</small>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <small className='form-text'>
              Give us an idea of what to put where.
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Origian address'
              name='originAddress'
              value={originAddress}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What is the origian address of this shipment?
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Destination address'
              name='destinationAddress'
              value={destinationAddress}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What is the destination address of this shipment?
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name of person shipping'
              name='nameOfPay'
              value={nameOfPay}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What is the name of the person shipping these contents
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
              What is the status of this shipment? "Can be new, in transit, or
              closed".
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Trip miles'
              name='tripMiles'
              value={tripMiles}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>How many miles for this haul?</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Trailer type'
              name='trailerType'
              value={trailerType}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What type of trailer or tanker is needed for this haul?
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Load size'
              name='loadSize'
              value={loadSize}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>What is the size of this load?</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Load length'
              name='loadLength'
              value={loadLength}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>What is the load length?</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Weight'
              name='weight'
              value={weight}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What is the weight of the load? Does this load require hoisting of
              any kind?
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Pay rate'
              name='payRate'
              value={payRate}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>What are the pay rate details</small>
          </div>
          <div className='form-group'>
            <input
              type='date'
              placeholder='Ship date'
              name='shipDate'
              value={shipDate}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What date do you intend to transport this item?
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Shipment contents'
              name='shipmentContents'
              value={shipmentContents}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              What are the contents of this load?
            </small>
          </div>
          <div className='form-group'>
            <textarea
              placeholder='description/notes'
              name='description'
              value={description}
              onChange={(e) => onChange(e)}
            ></textarea>
            <small className='form-text'>
              List anything important that needs to be known or special
              instructions
            </small>
          </div>

          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/dashboard'>
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};
CreateNewLoad.propTypes = {
  createNewLoad: PropTypes.func.isRequired,
};

export default connect(null, { createNewLoad })(CreateNewLoad);

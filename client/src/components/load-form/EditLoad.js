import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../../components/layout/Alert';
import { createLoad, getCurrentLoad } from '../../actions/load';

const EditLoad = ({
  load: { load, loading },
  createLoad,
  getCurrentLoad,
  history,
}) => {
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

  useEffect(() => {
    getCurrentLoad();

    setFormData({
      originAddress: loading || !load.originAddress ? '' : load.originAddress,
      destinationAddress:
        loading || !load.destinationAddress ? '' : load.destinationAddress,
      nameOfPay: loading || !load.nameOfPay ? '' : load.nameOfPay,
      status: loading || !load.status ? '' : load.status,
      tripMiles: loading || !load.tripMiles ? '' : load.tripMiles,
      trailerType: loading || !load.trailerType ? '' : load.trailerType,
      loadSize: loading || !load.loadSize ? '' : load.loadSize,
      loadLength: loading || !load.loadLength ? '' : load.loadLength,
      weight: loading || !load.weight ? '' : load.weight,
      payRate: loading || !load.payRate ? '' : load.payRate,
      shipDate: loading || !load.shipDate ? '' : load.shipDate,
      shipmentContents:
        loading || !load.shipmentContents ? '' : load.shipmentContents,
      description: loading || !load.description ? '' : load.description,
    });
  }, [getCurrentLoad]);

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
    createLoad(formData, history, true);
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
              placeholder='Origin address'
              name='originAddress'
              value={originAddress}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>What is the origin address</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Destination address'
              name='destinationAddress'
              value={destinationAddress}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>What is the destination address</small>
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
              x
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

EditLoad.propTypes = {
  createLoad: PropTypes.func.isRequired,
  getCurrentLoad: PropTypes.func.isRequired,
  load: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  load: state.load,
});

export default connect(mapStateToProps, { createLoad, getCurrentLoad })(
  EditLoad
);

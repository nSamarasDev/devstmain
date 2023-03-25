import React from 'react';
import PropTypes from 'prop-types';

const LoadTop = ({
  load: {
    user: { name, avatar },
    _id,
    nameOfPay,
    status,
    tripMiles,
    originLocation,
    trailerType,
    loadSize,
    loadLength,
    weight,
    payRate,
    shipDate,
    description,
  },
}) => {
  return (
    <>
      <div className='profile-edu bg-primary p-2'>
        {/*<img className='round-img my-1' src={avatar} alt='' />*/}
        <h2>{_id}</h2>
        <h2>{name}</h2>
        {/*<p className='lead '>{status}</p>*/}
        <p className='lead'>{status && <span> {status}</span>}</p>
        <p className='lead'>{nameOfPay && <span> {nameOfPay}</span>}</p>
        <p className='lead'>{tripMiles && <span> {tripMiles}</span>}</p>
        <p className='lead'>
          {originLocation.street && <span> {originLocation.street}</span>}
        </p>

        <p className='lead'>{trailerType && <span> {trailerType}</span>}</p>
        <p className='lead'>{loadSize && <span> {loadSize}</span>}</p>
        <p className='lead'>{loadLength && <span> {loadLength}</span>}</p>
        <p className='lead'>{weight && <span> {weight}</span>}</p>
        <p className='lead'>{payRate && <span> {payRate}</span>}</p>
        <p className='lead'>{shipDate && <span> {shipDate}</span>}</p>
        <p>{description && <span>{description}</span>}</p>
        <div className='icons my-1'></div>
      </div>
    </>
  );
};

LoadTop.propTypes = {
  load: PropTypes.object.isRequired,
};

export default LoadTop;

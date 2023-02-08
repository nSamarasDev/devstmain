import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoadItem = ({
  load: {
    user: { avatar },
    nameOfPay,
    shipDate,
    _id,
    tripMiles,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h1>{_id}</h1>
        <p>{shipDate}</p>
        <p>{nameOfPay}</p>
        <p>{tripMiles}</p>
        <Link to={`/loadboard/load/${_id}`} className='btn btn-primary'>
          Load Details
        </Link>
      </div>
    </div>
  );
};

LoadItem.propTypes = {};

export default LoadItem;

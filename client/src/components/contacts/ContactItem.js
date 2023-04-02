import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContactItem = ({
  contact: {
    user: { _id, name, avatar },
    email,
    description,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{email}</p>
        <Link to={`/contact/user/${_id}`} className='btn btn-primary'>
          View Contact
        </Link>
      </div>
    </div>
  );
};

ContactItem.propTypes = {};

export default ContactItem;

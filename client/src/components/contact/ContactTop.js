import React from 'react';
import PropTypes from 'prop-types';

const ContactTop = ({
  contact: {
    email,
    description,

    user: { name, avatar },
  },
}) => {
  return (
    <div className='profile-top bg-primary p-2'>
      <img className='round-img my-1' src={avatar} alt='' />
      <h1 className='large'>{name}</h1>
      {/*<p className='lead '>{status}</p>*/}
      <p className='lead'>{email && <span> {email}</span>}</p>
      <p>{description && <span>{description}</span>}</p>
      <div className='icons my-1'></div>
    </div>
  );
};

ContactTop.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactTop;

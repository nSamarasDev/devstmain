import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAboutTheCompany } from '../../actions/company';

const AddAboutTheCompany = ({ addAboutTheCompany }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    whatWeDo: '',
    companyAchievements: '',
    from: '',
    to: '',
    companyGoals: '',
    description: '',
  });

  const { whatWeDo, companyAchievements, from, to, companyGoals, description } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Add About our Company</h1>
        <p className='lead'>
          <i className='fas fa-code-branch'></i> Add what your company does and
          any special achievements your company has
        </p>
        <small>* = required field</small>
        <form
          className='form'
          onSubmit={(e) => {
            e.preventDefault();
            addAboutTheCompany(formData, navigate('/company'));
          }}
        >
          <div className='form-group'>
            <input
              type='text'
              placeholder='* What we do'
              name='whatWeDo'
              value={whatWeDo}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='* Company Achievements'
              name='companyAchievements'
              value={companyAchievements}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <h4>From Date</h4>
            <input
              type='date'
              name='from'
              value={from}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <h4>To Date</h4>
            <input
              type='date'
              name='to'
              value={to}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='companyGoals'
              name='companyGoals'
              value={companyGoals}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Description'
              name='description'
              value={description}
              onChange={(e) => onChange(e)}
            />
          </div>

          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/company'>
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};

AddAboutTheCompany.propTypes = {
  addAboutTheCompany: PropTypes.func.isRequired,
};

export default connect(null, { addAboutTheCompany })(AddAboutTheCompany);

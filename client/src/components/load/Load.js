import React, { Fragment, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import LoadTop from './LoadTop';

import { getLoadById } from '../../actions/load';

const Load = ({ getLoadById, load: { load, loading }, auth }) => {
  const { id } = useParams();

  useEffect(() => {
    getLoadById(id);
  }, [getLoadById, id]);

  return (
    <section className='container'>
      {load === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/loads' className='btn btn-lifht'>
            Back to posted loads
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === load.user._id && (
              <Link to='/edit-load' className='btn btn-dark'>
                Edit Load
              </Link>
            )}

          <div>
            <LoadTop load={load} />
          </div>
        </Fragment>
      )}
    </section>
  );
};

Load.propTypes = {
  getLoadById: PropTypes.func.isRequired,
  load: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  load: state.load,
  auth: state.auth,
});

export default connect(mapStateToProps, { getLoadById })(Load);

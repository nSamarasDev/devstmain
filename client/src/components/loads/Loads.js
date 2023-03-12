import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import LoadItem from './LoadItem';
import { getLoads } from '../../actions/load';

const Loads = ({ getLoads, load: { loads, loading } }) => {
  useEffect(() => {
    getLoads();
  }, [getLoads]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className='container'>
      <Fragment>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <h1 className='large text-primary'>Posted loads</h1>
            <p className='lead'>
              <i className='fab fa-connectdevelop'></i> Here is a list of loads
              avaiable for transport
            </p>
            <div className='profiles'>
              {loads.length > 0 ? (
                loads.map((load) => <LoadItem key={load._id} load={load} />)
              ) : (
                <h4>No loads found...</h4>
              )}
            </div>
          </Fragment>
        )}
      </Fragment>
    </section>
  );
};
Loads.propTypes = {
  getLoads: PropTypes.func.isRequired,
  load: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  load: state.load,
  auth: state.auth,
});

export default connect(mapStateToProps, { getLoads })(Loads);

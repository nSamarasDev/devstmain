import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_LOAD,
  GET_LOADS,
  LOAD_ERROR,
  //  UPDATE_PROFILE,
  CLEAR_LOAD,
  ACCOUNT_DELETED,
} from './types';

// Get current users load
export const getCurrentLoad = () => async (dispatch) => {
  dispatch({ type: CLEAR_LOAD });

  try {
    const res = await axios.get('api/loadboard/me');

    dispatch({
      type: GET_LOAD,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: CLEAR_LOAD });

    dispatch({
      type: LOAD_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Get all loads
export const getLoads = () => async (dispatch) => {
  dispatch({ type: CLEAR_LOAD });

  try {
    const res = await axios.get('api/loadboard');

    dispatch({
      type: GET_LOADS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Get load by load id
export const getLoadById = (loadId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/loadboard/load/${loadId}`);

    dispatch({
      type: GET_LOAD,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Create or update load
export const createLoad =
  (formData, history, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.post('/api/loadboard', formData, config);

      dispatch({
        type: GET_LOAD,
        payload: res.data,
      });

      dispatch(
        setAlert(
          edit ? 'Load information Updated' : 'Load information Created',
          'success'
        )
      );

      if (!edit) {
        history.push('/load');
      }
    } catch (error) {
      const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: LOAD_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };

// Create new load
export const createNewLoad =
  (formData, history, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.post('/api/loadboard/newload', formData, config);

      dispatch({
        type: GET_LOAD,
        payload: res.data,
      });

      dispatch(
        setAlert(
          edit ? 'Load information Updated' : 'Load information Created',
          'success'
        )
      );

      if (!edit) {
        history.push('/load');
      }
    } catch (error) {
      const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: LOAD_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };

// Add experience
//export const addExperience = (formData, history) => async (dispatch) => {
//  try {
//    const config = {
//      headers: {
//        'Content-Type': 'application/json',
//      },
//    };

//    const res = await axios.put('/api/profile/experience', formData, config);

//    dispatch({
//      type: UPDATE_PROFILE,
//      payload: res.data,
//    });

//    dispatch(setAlert('Experience Added', 'success'));

//    history.push('/dashboard');
//  } catch (error) {
//    const errors = error.response.data.errors;

//    if (errors) {
//      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
//    }

//    dispatch({
//      type: PROFILE_ERROR,
//      payload: {
//        msg: error.response.statusText,
//        status: error.response.status,
//      },
//    });
//  }
//};

// Add Education
//export const addEducation = (formData, history) => async (dispatch) => {
//  try {
//    const config = {
//      headers: {
//        'Content-Type': 'application/json',
//      },
//    };

//    const res = await axios.put('/api/profile/education', formData, config);

//    dispatch({
//      type: UPDATE_PROFILE,
//      payload: res.data,
//    });

//    dispatch(setAlert('Education Added', 'success'));

//    history.push('/dashboard');
//  } catch (error) {
//    const errors = error.response.data.errors;

//    if (errors) {
//      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
//    }

//    dispatch({
//      type: PROFILE_ERROR,
//      payload: {
//        msg: error.response.statusText,
//        status: error.response.status,
//      },
//    });
//  }
//};

// Delete Experience
//export const deleteExperience = (id) => async (dispatch) => {
//  try {
//    const res = await axios.delete(`/api/profile/experience/${id}`);

//    dispatch({
//      type: UPDATE_PROFILE,
//      payload: res.data,
//    });

//    dispatch(setAlert('Experience Removed', 'success'));
//  } catch (error) {
//    dispatch({
//      type: PROFILE_ERROR,
//      payload: {
//        msg: error.response.statusText,
//        status: error.response.status,
//      },
//    });
//  }
//};

// Delete Education
//export const deleteEducation = (id) => async (dispatch) => {
//  try {
//    const res = await axios.delete(`/api/profile/education/${id}`);

//    dispatch({
//      type: UPDATE_PROFILE,
//      payload: res.data,
//    });

//    dispatch(setAlert('Education Removed', 'success'));
//  } catch (error) {
//    dispatch({
//      type: PROFILE_ERROR,
//      payload: {
//        msg: error.response.statusText,
//        status: error.response.status,
//      },
//    });
//  }
//};

// DELETE Account and Profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure? This cannot be undone')) {
    try {
      await axios.delete('/api/loadboard');

      dispatch({
        type: CLEAR_LOAD,
      });

      dispatch({
        type: ACCOUNT_DELETED,
      });

      dispatch(setAlert('Your account has been permaanetly deleted'));
    } catch (error) {
      dispatch({
        type: LOAD_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  }
};

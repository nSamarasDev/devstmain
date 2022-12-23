import axios from 'axios';
import { setAlert } from './alert';

import {
  UPDATE_COMPANY,
  CLEAR_COMPANY,
  ACCOUNT_DELETED,
  GET_COMPANY,
  GET_COMPANIES,
  COMPANY_ERROR,
} from './types';

// Get current users company
export const getCurrentCompanyProfile = () => async (dispatch) => {
  dispatch({ type: CLEAR_COMPANY });

  try {
    const res = await axios.get('api/company/me');

    dispatch({
      type: GET_COMPANY,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: CLEAR_COMPANY });

    dispatch({
      type: COMPANY_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Get all company Profiles
export const getCompanies = () => async (dispatch) => {
  dispatch({ type: CLEAR_COMPANY });

  try {
    const res = await axios.get('api/company');

    dispatch({
      type: GET_COMPANIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Get company profile by id
export const getCurrentCompanyProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/company/user/${userId}`);

    dispatch({
      type: GET_COMPANY,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Create or update company profile
export const createCompanyProfile =
  (formData, history, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.post('/api/company', formData, config);

      dispatch({
        type: GET_COMPANY,
        payload: res.data,
      });

      dispatch(
        setAlert(
          edit ? 'Company Updated' : 'Company Profile Created',
          'success'
        )
      );

      if (!edit) {
        history.push('/company');
      }
    } catch (error) {
      const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: COMPANY_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };

// Add about our services
export const addAboutOurServices = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      '/api/company/aboutourservices',
      formData,
      config
    );

    dispatch({
      type: UPDATE_COMPANY,
      payload: res.data,
    });

    dispatch(setAlert('About Our Services Added', 'success'));

    history.push('/company');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: COMPANY_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add about our company
export const addAboutTheCompany = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      '/api/company/aboutthecompany',
      formData,
      config
    );

    dispatch({
      type: UPDATE_COMPANY,
      payload: res.data,
    });

    dispatch(setAlert('About Our Company Added', 'success'));

    history.push('/company');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: COMPANY_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete About our services
export const deleteAboutOurServices = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/company/aboutourservices/${id}`);

    dispatch({
      type: UPDATE_COMPANY,
      payload: res.data,
    });

    dispatch(setAlert('About Our Services Removed', 'success'));
  } catch (error) {
    dispatch({
      type: COMPANY_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete About our company
export const deleteAboutTheCompany = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/company/aboutthecompany/${id}`);

    dispatch({
      type: UPDATE_COMPANY,
      payload: res.data,
    });

    dispatch(setAlert('About Our Company Removed', 'success'));
  } catch (error) {
    dispatch({
      type: COMPANY_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// DELETE Account and Profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure? This cannot be undone')) {
    try {
      await axios.delete('/api/company');

      dispatch({
        type: CLEAR_COMPANY,
      });

      dispatch({
        type: ACCOUNT_DELETED,
      });

      dispatch(setAlert('Your account has been permaanetly deleted'));
    } catch (error) {
      dispatch({
        type: COMPANY_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  }
};

import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_APPLICATION,
  GET_APPLICATIONS,
  APPLICATION_ERROR,
  UPDATE_APPLICATION,
  CLEAR_APPLICATION,
  ACCOUNT_DELETED,
} from './types';

export const getCurrentApplication = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/application/me');

    dispatch({
      type: GET_APPLICATION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: CLEAR_APPLICATION });

    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Get all Applications
export const getApplications = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/application');

    dispatch({
      type: GET_APPLICATIONS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Get application by id
export const getApplicationById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/application/user/${userId}`);

    dispatch({
      type: GET_APPLICATION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Create or update application
export const createApplication =
  (formData, history, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.post('/api/application', formData, config);

      dispatch({
        type: GET_APPLICATION,
        payload: res.data,
      });

      dispatch(
        setAlert(
          edit ? 'Application Updated' : 'Application Created',
          'success'
        )
      );

      if (!edit) {
        history.push('/application');
      }
    } catch (error) {
      const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: APPLICATION_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };

// Add previous residency
export const addPreviousResidency = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      '/api/application/previousResidency',
      formData,
      config
    );

    dispatch({
      type: UPDATE_APPLICATION,
      payload: res.data,
    });

    dispatch(setAlert('Previous Residency Added', 'success'));

    history.push('/application');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add License Information
export const addLicenseInformation =
  (formData, history) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.put(
        '/api/application/licenseInformation',
        formData,
        config
      );

      dispatch({
        type: UPDATE_APPLICATION,
        payload: res.data,
      });

      dispatch(setAlert('License Information Added', 'success'));

      history.push('/application');
    } catch (error) {
      const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: APPLICATION_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };

// Add Driving Experience
export const addDrivingExperience = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      '/api/application/drivingExperience',
      formData,
      config
    );

    dispatch({
      type: UPDATE_APPLICATION,
      payload: res.data,
    });

    dispatch(setAlert('Driving Experience Added', 'success'));

    history.push('/application');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add Accident History
export const addAccidentHistory = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      '/api/application/accidentHistory',
      formData,
      config
    );

    dispatch({
      type: UPDATE_APPLICATION,
      payload: res.data,
    });

    dispatch(setAlert('Accident History Added', 'success'));

    history.push('/application');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add Traffic Convictions
export const addTrafficConvictions =
  (formData, history) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.put(
        '/api/application/trafficConvictions',
        formData,
        config
      );

      dispatch({
        type: UPDATE_APPLICATION,
        payload: res.data,
      });

      dispatch(setAlert('Traffic Convictions Added', 'success'));

      history.push('/application');
    } catch (error) {
      const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: APPLICATION_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };

// Add Employment History
export const addEmploymentHistory = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      '/api/application/employmentHistory',
      formData,
      config
    );

    dispatch({
      type: UPDATE_APPLICATION,
      payload: res.data,
    });

    dispatch(setAlert('Employment History Added', 'success'));

    history.push('/application');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add Education History
export const addEducationHistory = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      '/api/application/educationHistory',
      formData,
      config
    );

    dispatch({
      type: UPDATE_APPLICATION,
      payload: res.data,
    });

    dispatch(setAlert('Education History Added', 'success'));

    history.push('/application');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add Signature
export const addSignature = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put('/api/application/signature', formData, config);

    dispatch({
      type: UPDATE_APPLICATION,
      payload: res.data,
    });

    dispatch(setAlert('Your full application has been signed', 'success'));

    history.push('/application');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete Previous residency
export const deletePreviousResidency = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/application/previousResidency/${id}`);

    dispatch({
      type: UPDATE_APPLICATION,
      payload: res.data,
    });

    dispatch(setAlert('Previous Residency Removed', 'success'));
  } catch (error) {
    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete License information
export const deleteLicenseInformation = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/application/licenseInformation/${id}`);

    dispatch({
      type: UPDATE_APPLICATION,
      payload: res.data,
    });

    dispatch(setAlert('License information Removed', 'success'));
  } catch (error) {
    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete Acchident History
export const deleteAccidentHistory = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/application/accidentHistory/${id}`);

    dispatch({
      type: UPDATE_APPLICATION,
      payload: res.data,
    });

    dispatch(setAlert('Accident History Removed', 'success'));
  } catch (error) {
    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete Traffic Convictions
export const deleteTrafficConvictions = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/application/trafficConvictions/${id}`);

    dispatch({
      type: UPDATE_APPLICATION,
      payload: res.data,
    });

    dispatch(setAlert('Traffic Convictions Removed', 'success'));
  } catch (error) {
    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete Employment History
export const deleteEmploymentHistory = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/application/employmentHistory/${id}`);

    dispatch({
      type: UPDATE_APPLICATION,
      payload: res.data,
    });

    dispatch(setAlert('Employment History Removed', 'success'));
  } catch (error) {
    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete EducationHistory
export const deleteEducationHistory = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/application/educationHistory/${id}`);

    dispatch({
      type: UPDATE_APPLICATION,
      payload: res.data,
    });

    dispatch(setAlert('Education History Removed', 'success'));
  } catch (error) {
    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete Signature
export const deleteSignature = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/application/signature/${id}`);

    dispatch({
      type: UPDATE_APPLICATION,
      payload: res.data,
    });

    dispatch(setAlert('Signature Removed', 'success'));
  } catch (error) {
    dispatch({
      type: APPLICATION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// DELETE Account and Application
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure? This cannot be undone')) {
    try {
      await axios.delete('/api/application');

      dispatch({
        type: CLEAR_APPLICATION,
      });

      dispatch({
        type: ACCOUNT_DELETED,
      });

      dispatch(setAlert('Your account has been permaanetly deleted'));
    } catch (error) {
      dispatch({
        type: APPLICATION_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  }
};

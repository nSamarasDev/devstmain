import {
  APPLICATION_ERROR,
  GET_APPLICATION,
  GET_APPLICATIONS,
  CLEAR_APPLICATION,
  UPDATE_APPLICATION,
} from '../actions/types';

const initialState = {
  application: null,
  applications: [],
  loading: true,
  error: {},
};

export default function applicationReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_APPLICATION:
    case UPDATE_APPLICATION:
      return {
        ...state,
        application: payload,
        loading: false,
      };
    case GET_APPLICATIONS:
      return {
        ...state,
        applications: payload,
        loading: false,
      };
    case APPLICATION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        application: null,
      };
    case CLEAR_APPLICATION:
      return {
        ...state,
        application: null,
        applications: [],
        loading: false,
      };
    default:
      return state;
  }
}

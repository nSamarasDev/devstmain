import {
  GET_LOAD,
  GET_LOADS,
  LOAD_ERROR,
  CLEAR_LOAD,
  UPDATE_LOAD,
} from '../actions/types';

const initialState = {
  load: null,
  loads: [],
  loading: true,
  error: {},
};

export default function loadReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LOAD:
    case UPDATE_LOAD:
      return {
        ...state,
        load: payload,
        loading: false,
      };
    case GET_LOADS:
      return {
        ...state,
        loads: payload,
        loading: false,
      };
    case LOAD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        load: null,
      };
    case CLEAR_LOAD:
      return {
        ...state,
        load: null,
        loading: false,
      };

    default:
      return state;
  }
}

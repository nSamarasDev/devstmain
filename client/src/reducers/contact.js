import {
  GET_CONTACT,
  CONTACT_ERROR,
  UPDATE_CONTACT,
  CLEAR_CONTACTS,
  GET_CONTACTS,
} from '../actions/types';

const initialState = {
  contact: null,
  contacts: [],
  loading: true,
  error: {},
};

export default function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CONTACT:
    case UPDATE_CONTACT:
      return {
        ...state,
        contact: payload,
        loading: false,
      };
    case GET_CONTACTS:
      return {
        ...state,
        contacts: payload,
        loading: false,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        contact: null,
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contact: null,
        loading: false,
      };
    default:
      return state;
  }
}

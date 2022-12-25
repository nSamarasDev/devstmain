import {
  GET_COMPANY,
  GET_COMPANIES,
  COMPANY_ERROR,
  CLEAR_COMPANY,
  UPDATE_COMPANY,
} from '../actions/types';

const initialState = {
  company: null,
  companies: [],
  loading: true,
  error: {},
};

export default function companyReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COMPANY:
    case UPDATE_COMPANY:
      return {
        ...state,
        company: payload,
        loading: false,
      };
    case GET_COMPANIES:
      return {
        ...state,
        companies: payload,
        loading: false,
      };
    case COMPANY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        company: null,
      };
    case CLEAR_COMPANY:
      return {
        ...state,
        company: null,
        loading: false,
      };
    default:
      return state;
  }
}

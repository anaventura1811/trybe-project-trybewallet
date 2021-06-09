// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_EXPENSE,
  GET_CURRENCIES,
  GET_CURRENCIES_FAILURE,
  GET_CURRENCIES_SUCCESS,
} from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
};

export default function wallet(state = initialState, { type, payload }) {
  switch (type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: payload,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      isLoading: true,
    };
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: payload,
    };
  case GET_CURRENCIES_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: payload,
    };
  default:
    return state;
  }
}

import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesThunk } from '../actions';

function Currency({ wallet }) {
  const { currencies } = wallet;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrenciesThunk());
  }, []);

  return (
    <label htmlFor="currency">
      Moeda
      <select name="currency" id="currency">
        { currencies.map((currency) => (
          <option value={ currency } key={ currency }>{currency}</option>
        ))}
      </select>
    </label>
  );
}

const mapStateToProps = (state) => ({
  wallet: {
    currencies: state.wallet.currencies,
  },
});

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesThunk: () => dispatch(getCurrenciesThunk()),
});

Currency.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Currency);

// Referência:
// sintaxe correta da tag select: https://www.w3schools.com/tags/tag_select.asp

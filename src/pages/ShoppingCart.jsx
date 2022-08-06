import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div data-testid="testid">
        <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = {

};

export default ShoppingCart;

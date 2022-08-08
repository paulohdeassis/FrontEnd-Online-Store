import React from 'react';
import { getShoppingCart } from '../services/shoppingCartApi';

class ShoppingCart extends React.Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    this.dispatchGetShoppingCart();
  }

  dispatchGetShoppingCart = async () => {
    const cart = await getShoppingCart();
    this.setState({ cart });
  }

  render() {
    const { cart } = this.state;
    return (
      <div data-testid="testid">

        { cart.length === 0 && (
          <div data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </div>)}
        { cart.map((product) => (
          <div key={ product.id }>
            <span data-testid="shopping-cart-product-name">{ product.title }</span>
            <span data-testid="shopping-cart-product-quantity">{ 1 }</span>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {

};

export default ShoppingCart;

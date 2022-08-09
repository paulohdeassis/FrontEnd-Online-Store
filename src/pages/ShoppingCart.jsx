import React from 'react';
import { getShoppingCart, removeProduct, addProduct, removeAllProducts,
} from '../services/shoppingCartApi';

class ShoppingCart extends React.Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    this.dispatchGetShoppingCart();
  }

  removeAllProducts = async (product) => {
    await removeAllProducts(product);
    this.dispatchGetShoppingCart();
  }

  addProduct = async (product) => {
    await addProduct(product);
    this.dispatchGetShoppingCart();
  }

  removeProduct = async (product) => {
    await removeProduct(product);
    this.dispatchGetShoppingCart();
  }

  dispatchGetShoppingCart = async () => {
    const cart = await getShoppingCart();
    const newCart = cart.reduce((cartAcc, product) => {
      const item = cartAcc.find((p) => p.id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        cartAcc.push({
          ...product,
          quantity: 1,
        });
      }

      return cartAcc;
    }, []);
    this.setState({ cart: newCart });
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

            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ () => this.removeProduct(product) }
            >
              -
            </button>

            <span data-testid="shopping-cart-product-quantity">{ product.quantity }</span>
            <button
              data-testid="product-increase-quantity"
              type="button"
              onClick={ () => this.addProduct(product) }
            >
              +
            </button>

            <button
              data-testid="remove-product"
              type="button"
              onClick={ () => this.removeAllProducts(product) }
            >
              x
            </button>

          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;

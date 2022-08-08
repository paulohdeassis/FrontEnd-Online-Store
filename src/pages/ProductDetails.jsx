import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getSpecificProduct } from '../services/api';
import { addProduct } from '../services/shoppingCartApi';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      productDetails: {},

    };
  }

  componentDidMount() {
    this.getProductDetails();
  }

  addToCart = async (product) => {
    await addProduct(product);
  }

  getProductDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const productDetails = await getSpecificProduct(id);
    this.setState({ productDetails });
  }

  render() {
    const { productDetails } = this.state;
    return (
      <div className="details-container">
        <Link to="/cart" data-testid="shopping-cart-button"> Carrinho de Compras</Link>
        <div className="details-left">
          <p data-testid="product-detail-name">{ productDetails.title }</p>
          <img
            src={ productDetails.thumbnail }
            data-testid="product-detail-image"
            alt={ productDetails.title }
          />
        </div>
        <div className="details-right">
          <p data-testid="product-detail-price">
            { productDetails.price }
          </p>

          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => this.addToCart(productDetails) }
          >
            Adicionar ao Carrinho
          </button>

        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductDetails;

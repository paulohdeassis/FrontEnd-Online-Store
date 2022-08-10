import React, { Component } from 'react';
import propTypes from 'prop-types';

class ProductsCard extends Component {
  render() {
    const { name, image, price, freeShipping } = this.props;

    return (
      <div>
        <span>{name}</span>
        {freeShipping && <span data-testid="free-shipping">frete gratis</span>}
        <img src={ image } alt="" />
        <span>{ price }</span>
      </div>
    );
  }
}

ProductsCard.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  freeShipping: propTypes.bool.isRequired,
};

export default ProductsCard;

import React, { Component } from 'react';
import propTypes from 'prop-types';

class ProductsCard extends Component {
  render() {
    const { name, image, price } = this.props;

    return (
      <div>
        <span>{name}</span>
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
};

export default ProductsCard;

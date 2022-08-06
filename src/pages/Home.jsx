import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="search">
        <Link to="/cart" data-testid="shopping-cart-button" >Carrinho de compras</Link>
        <input type="text" name="searchField" onChange="" value="name" />
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends Component {
  state = {
    listCategories: [],
  };

  componentDidMount() {
    this.createListCategories();
  }

  async createListCategories() {
    const categories = await getCategories();
    this.setState({
      listCategories: categories,
    });
  }

  render() {
    const { listCategories } = this.state;

    return (
      <div className="search">
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho de compras</Link>
        <input type="text" name="searchField" onChange="" value="name" />
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        Categorias:
        {listCategories.map((category) => (
          <label htmlFor="categories" key={ category.id } data-testid="category">
            {category.name}
            <input
              type="radio"
              name="category"
            />
          </label>
        ))}
      </div>
    );
  }
}

export default Home;

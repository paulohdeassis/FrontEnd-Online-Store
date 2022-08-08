import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductsCard from '../components/ProductsCard';

class Home extends Component {
  state = {
    listCategories: [],
    listProducts: [],
    searchField: '',
    category: '',
  };

  componentDidMount() {
    this.createListCategories();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleRadioChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.handleClick();
    });
  }

  handleClick = async () => {
    const { searchField, category } = this.state;
    const product = await getProductsFromCategoryAndQuery(searchField, category);
    const listProducts = product.results;
    this.setState({
      listProducts,
    });
  }

  async createListCategories() {
    const categories = await getCategories();
    this.setState({
      listCategories: categories,
    });
  }

  render() {
    const { listCategories, listProducts, searchField } = this.state;
    const list = listProducts.map((product) => (
      <div data-testid="product" key={ product.id }>
        <ProductsCard
          name={ product.title }
          image={ product.thumbnail }
          price={ product.price }
        />
        <Link to={ `/product-details/${product.id}` } data-testid="product-detail-link">
          Mais detalhes
        </Link>
      </div>
    ));

    return (
      <div className="search">
        <input
          data-testid="query-input"
          type="text"
          name="searchField"
          onChange={ this.handleChange }
          value={ searchField }
        />

        <button data-testid="query-button" type="button" onClick={ this.handleClick }>
          Pesquisar Produto
        </button>

        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>

        <Link to="/cart" data-testid="shopping-cart-button">Carrinho de compras</Link>
        Categorias:
        {listCategories.map((category) => (
          <label htmlFor="category" key={ category.id } data-testid="category">
            {category.name}
            <input
              type="radio"
              id="category"
              name="category"
              value={ category.id }
              onChange={ this.handleRadioChange }
            />
          </label>
        ))}

        { listProducts.length > 0 ? list : <p>Nenhum produto foi encontrado</p>}
      </div>
    );
  }
}

export default Home;

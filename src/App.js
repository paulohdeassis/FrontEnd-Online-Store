import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={ ShoppingCart } />
        <Route exact path="/" component={ Home } />
        <Route path="/product-details/:id" component={ ProductDetails } />

      </Switch>
    </BrowserRouter>
  );
}

export default App;

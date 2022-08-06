import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={ ShoppingCart } />
        <Route exact path="/" component={ Home } />

      </Switch>
    </BrowserRouter>
  );
}

export default App;

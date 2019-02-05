import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import"bootstrap/dist/css/bootstrap.min.css";
import Cart from './components/Cart';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Details from './components/Details';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Cart />
        <Default />
        <Details />
        <ProductList />
      </React.Fragment>    
    );
  }
}

export default App;

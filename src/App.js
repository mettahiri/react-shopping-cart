import React, { Component } from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import  "font-awesome/css/font-awesome.css";
import './App.css';

import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingCart />
      </div>
    );
  }
}

export default App;

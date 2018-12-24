import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css"
import "animate.css";

import ShoppingCart from './components/ShoppingCart';
import './App.css';

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

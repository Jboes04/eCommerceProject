import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Basket from './modules/basket/Basket';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Basket/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from "react-redux";

import { getBasketList } from "./store/basket/selectors";
import { basketHandler } from "./store/basket/handlers";

import logo from './logo.svg';
import './App.css';
import ProductDetails from './modules/product/productDetails';
import Basket from './modules/basket/Basket';

class App extends Component {
  constructor(props) {
    super(props);

    this.handlerAddProductToBasket = this.handlerAddProductToBasket.bind(this);
  }

  handlerAddProductToBasket(event) {
    event.preventDefault();
    //console.log("ici :", event);

    this.props.addProductToBasket(event.target.id, event.target.title);
  }

  render() {
    // console.log("props app!", this.props);
    return (
      <div className="App">
        <div className="mb-5">Nombre de lignes dans le panier: {this.props.basketList.length}</div>
        <Basket/>
        <ProductDetails />
      </div>
    );
  }
}


//export default App;
const Connected = connect(getBasketList, basketHandler)(App);
export default Connected;

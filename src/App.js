import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, withRouter } from 'react-router-dom';
import './App.css';

import { getBasketList } from "./store/basket/selectors";
import { basketHandler } from "./store/basket/handlers";
import Categories from './modules/product/Categories';
import Products from './modules/product/Products';
import ProductDetails from './modules/product/productDetails';
import Basket from './modules/basket/Basket';

class App extends Component {

  getCategories = () => {
    return <Categories />
  }

  getProducts = (routerProps) => {
    return <Products {...routerProps} />
  }

  getProductDetails = (routerProps) => {
    return <ProductDetails {...routerProps} />
  }

  render() {
    return (

      <div className="App" style={{backgroundColor:"papayawhip"}}>
        <div className="url(../img/ui/shadow.png) center repeat-x" style={{backgroundSize: "auto 100%"}}>
          <div className="mb-5">Nombre de lignes dans le panier: {this.props.basketList.length}</div>

        <Basket />
        <Route exact path="/" render={this.getCategories}/>
        <Route path="/categories/:categoryId/products" render={this.getProducts}/>
        <Route path="/products/:productId" render={this.getProductDetails}/>
      </div>
      </div>
    );
  }
}

const Connected = withRouter(connect(getBasketList, basketHandler)(App));
export default Connected;

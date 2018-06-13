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
import Navbar from './modules/basket/Navbar';
import ProductList from './modules/product/ProductList';



class App extends Component {

  getCategories = () => {
    return <Categories />
  }

  getProducts = (routerProps) => {
    return <ProductList {...routerProps} />
  }

  getProductDetails = (routerProps) => {
    return <ProductDetails {...routerProps} />
  }

  render() {
    return (

      <div className="App" style={{backgroundColor:"papayawhip"}}>
        <Navbar />
          <div
            className="g-signin2"
            data-onsuccess="googleConnectCallback"
            data-theme="dark"
          />
        <Route exact path="/" render={this.getCategories}/>
        <Route path="/categories/:categoryId/products" render={this.getProducts}/>
        <Route path="/products/:productId" render={this.getProductDetails}/>

      {/* </div> */}
      </div>
    );
  }
}

const Connected = withRouter(connect(getBasketList, basketHandler)(App));
export default Connected;

import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, withRouter } from 'react-router-dom';
import './App.css';

import { getBasketList } from "./store/basket/selectors";
import { profileHandler } from "./store/profile/handlers";
import Categories from './modules/product/Categories';
import ProductDetails from './modules/product/productDetails';
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
        <Route exact path="/" render={this.getCategories}/>
        <Route path="/categories/:categoryId/products" render={this.getProducts}/>
        <Route path="/products/:productId" render={this.getProductDetails}/>
      </div>
    );
  }
}

const Connected = withRouter(connect(getBasketList, profileHandler)(App));
export default Connected;

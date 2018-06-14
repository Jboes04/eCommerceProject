import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import { getProfileInfo } from "./store/profile/selectors";
import { profileHandler } from "./store/profile/handlers";
import Categories from './modules/product/Categories';
import Delivery from './modules/checkout/Delivery';
import BasketRecap from './modules/checkout/BasketRecap';
import ProductDetails from './modules/product/productDetails';
import Navbar from './modules/basket/Navbar';
import ProductList from './modules/product/ProductList';
import Signin from './modules/checkout/Signin';



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

  getCheckout = (routerProps) => {
    //console.log(this.props.profileInfo.Eea);
    const isConnected = this.props.profileInfo.Eea;
    if(isConnected) {
    return <Delivery {...routerProps} />
  } else {
    return <Signin {...routerProps} />
  }
}

  getBasketRecap = (routerProps) => {
    const isConnected = this.props.profileInfo.Eea;
    if(isConnected) {
    return <BasketRecap {...routerProps} />
  } else {
    return <Signin {...routerProps} />
  }
}


  render() {
    return (

      <div className="App" style={{backgroundColor:"none"}}>
        <Navbar />

        <Route exact path="/" render={this.getCategories}/>
        <Route path="/categories/:categoryId/products" render={this.getProducts}/>
        <Route path="/products/:productId" render={this.getProductDetails}/>
        <Route path="/checkout" render={this.getCheckout} />
        <Route path="/basketrecap" render={this.getBasketRecap} />
      </div>
    );
  }
}

const Connected = withRouter(connect(getProfileInfo, profileHandler)(App));
export default Connected;

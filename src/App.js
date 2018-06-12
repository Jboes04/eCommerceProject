import React, { Component } from 'react';
import { connect } from "react-redux";
import url from 'url'
import { Route, withRouter } from 'react-router-dom';
import { getBasketList } from "./store/basket/selectors";
import { basketHandler } from "./store/basket/handlers";

import './App.css';
import Categories from './modules/product/Categories';
import ProductDetails from './modules/product/ProductDetails';
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

  getCategories = () => {
    return <Categories />
  }

  getProducts = (routerProps) => {
    return <ProductDetails {...routerProps} />
  }

  render() {
    // console.log("props app!", this.props);
    return (

      <div className="App" style={{backgroundColor:"papayawhip"}}>
        <div className="url(../img/ui/shadow.png) center repeat-x" style={{backgroundSize: "auto 100%"}}>
          <div className="mb-5">Nombre de lignes dans le panier: {this.props.basketList.length}</div>

        <Basket />
        <Route exact path="/" render={this.getCategories}/>
        <Route path="/categories/:categoryId/products" render={this.getProducts}/>

      </div>
      </div>
    );
  }
}


//export default App;
const Connected = withRouter(connect(getBasketList, basketHandler)(App));
export default Connected;

import React, { Component } from 'react';

import { productHandler } from "./../../store/basket/selectors";
import { connect } from "react-redux";
import { basketHandler } from "../../store/basket/handlers";
import { add } from "../../store/basket/actions";

//import { checkRemoveHandler } from "./../../store/todo/handlers";
import './../../App.css';

//const fetch = require("node-fetch");

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.handlerAddProductToBasket = this.handlerAddProductToBasket.bind(this);

    this.state = {
      "categories": []
    }
  }
  componentDidMount() {
    fetch("https://decath-product-api.herokuapp.com/products")
      .catch((error) => {
        console.warn(error);
      })
      .then((response) => response.json())
      .then((resp) => this.setState({"categories": resp})
      )
  }

  handlerAddProductToBasket(event) {
    // console.log("ici :", event.target);
    event.preventDefault();
    this.props.addProductToBasket(event.target.id);
  }

  render() {
    return (
      <div>
        {this.state.categories.map((element) =>
          <li key={element.id}>
            <a href="/element.id">{element.title}</a>
            <button id={element.id} onClick={this.handlerAddProductToBasket}>add to cart</button>
          </li>)}
    </div>
  );
  }
}

const Connected = connect(null, basketHandler)(ProductDetails);
export default Connected;

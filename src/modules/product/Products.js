import React, { Component } from 'react';
import { connect } from "react-redux";
import { basketHandler } from "../../store/basket/handlers";
import ProductVignette from "./ProductVignette";
import './../../App.css';

const fetch = require("node-fetch");

class Products extends Component {
  constructor(props) {
    console.log("Products");
    super(props);
    this.state = {
      "products": []
    }
  }

  componentDidMount() {
    console.log("products", this.props.match);
      fetch(`https://decath-product-api.herokuapp.com${this.props.match.url}`)
        .catch((error) => {
          console.warn(error);
        })
        .then((response) => response.json())
        .then((resp) => {
          this.setState({"products": resp})
          console.log(resp);
        })
  }

  handlerAddProductToBasket = (event) => {
    event.preventDefault();
    this.props.addProductToBasket(event.target.id);
  }

  render() {
    return (
      <div>
        {this.state.products.map((productCurrent) => <ProductVignette product={productCurrent}/>)}
      </div>
    );
  }
}

const Connected = connect(null, basketHandler)(Products);
export default Connected;

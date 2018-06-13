import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
//import { mapStateToProps } from "../../store/product/selectors";
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
        {this.state.products.map((element) => <li key={element.id}><Link to={`/products/${element.id}`}>{element.title}</Link> <button id={element.id} onClick={this.handlerAddProductToBasket}>add to cart</button></li>)}
      </div>
    );
  }
}

const Connected = connect(null, basketHandler)(Products);
export default Connected;

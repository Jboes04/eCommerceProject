import React, { Component } from 'react';
import { connect } from "react-redux";
//import { Link } from 'react-router-dom';
//import { mapStateToProps } from "../../store/product/selectors";
import { basketHandler } from "../../store/basket/handlers";
import  ProductVignette  from "./ProductVignette";

//import { checkRemoveHandler } from "./../../store/todo/handlers";
import './../../App.css';

const fetch = require("node-fetch");

class ProductDetails extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      "productdetails": []
    }
  }

  componentDidMount() {
    console.log("product details", this.props.match);
      fetch(`https://decath-product-api.herokuapp.com${this.props.match.url}`)
        .catch((error) => {
          console.warn(error);
        })
        .then((response) => response.json())
        .then((resp) => {
          this.setState({"productdetails": resp})
          console.log(resp);
        })
  }

  handlerAddProductToBasket = (event) => {
    event.preventDefault();
    this.props.addProductToBasket(event.target.id);
  }

  render() {
    console.log("blabla",this.state);
    return (
      <div>
          <li key={this.state.productdetails.id}>{this.state.productdetails.title}<button id={this.state.productdetails.id} onClick={this.handlerAddProductToBasket}>add to cart</button></li>
          <h5>{this.state.productdetails.description}</h5>
      </div>
    );
  }
}

const Connected = connect(null, basketHandler)(ProductDetails);
export default Connected;

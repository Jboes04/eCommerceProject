import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

//import { mapStateToProps } from "../../store/product/selectors";
import { basketHandler } from "../../store/basket/handlers";
import  ProductVignette  from "./ProductVignette";

//import { checkRemoveHandler } from "./../../store/todo/handlers";
import './../../App.css';

const fetch = require("node-fetch");



class ProductDetails extends Component {
  constructor(props) {
    console.log("ProductDetails");
    super(props);
    this.state = {
      "categories": []
    }
  }

  // fetch(`https://decath-product-api.herokuapp.com/categories/9f8d8840-e22c-496f-b865-f5014710e234/products`)

  componentDidMount() {

    console.log("categories", this.props.match);
      fetch(`https://decath-product-api.herokuapp.com${this.props.match.url}`)
        .catch((error) => {
          console.warn(error);
        })
        .then((response) => response.json())
        .then((resp) => {
          this.setState({"categories": resp})
          console.log(resp);
        })
  }

  render() {
    return (
      <div>
        {this.state.categories.map((productCurrent) => <ProductVignette product={productCurrent}/>)}
      </div>
    );
  }
}

const Connected = connect(null, basketHandler)(ProductDetails);
export default Connected;

import React, { Component } from 'react';
// import {Button}
//import { connect } from "react-redux";
//import { checkRemoveHandler } from "./../../store/todo/handlers";
import './../../App.css';

const fetch = require("node-fetch");
let test = [];

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "categories": []
    }
  }
  panierfunction(){
    console.log("plop");
  }

  componentDidMount(){
    fetch("https://decath-product-api.herokuapp.com/products")
      .catch((error) => {
        console.warn(error);
      })
      .then((response) => response.json())
      .then(resp => {
        this.setState({categories: resp})
      });
  }
  render() {

    console.log("it is", this.state);
    return (
      <div>
      {
        this.state.categories.map(product => {
          return (<li><a href="/{product.id}" >{product.title}</a>  <button onClick={this.panierfunction(product.id)}>Add to cart</button></li>)
        })
      }
      </div>
    );
  }
}

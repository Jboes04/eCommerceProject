import React, { Component } from 'react';
//import { connect } from "react-redux";
//import { checkRemoveHandler } from "./../../store/todo/handlers";
import './../../App.css';

const fetch = require("node-fetch");

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div>
        {this.state.categories.map((element) => <li key={element.id}><a href="/{element.id}">{element.title}</a> <button id={element.id} title={element.title} onClick={this.props.addToCart}>add to cart</button></li>)}
      </div>
    );
  }
}

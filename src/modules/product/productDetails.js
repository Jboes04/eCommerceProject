import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

//import { mapStateToProps } from "../../store/product/selectors";
import { basketHandler } from "../../store/basket/handlers";
import './../../App.css';

const fetch = require("node-fetch");



class ProductDetails extends Component {
  constructor(props) {
    console.log("ProductDetails");
    super(props);
    this.state = {
      "products": []
    }
  }

  // fetch(`https://decath-product-api.herokuapp.com/categories/9f8d8840-e22c-496f-b865-f5014710e234/products`)

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
        {this.state.products.map((element) => <li key={element.id}><Link to={`/${element.id}`}>{element.title}</Link> <button id={element.id} onClick={this.handlerAddProductToBasket}>add to cart</button></li>)}
      </div>
    );
  }
}

const Connected = connect(null, basketHandler)(ProductDetails);
export default Connected;

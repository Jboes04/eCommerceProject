import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
//import { mapStateToProps } from "../../store/product/selectors";
import { basketHandler } from "../../store/basket/handlers";
import completeDisplay from "./productUtility";

class ProductVignette extends Component {
  constructor(props) {
    super(props);
  }

  handlerAddProductToBasket = (event) => {
    event.preventDefault();
    this.props.addProductToBasket(event.target.id, event.target.title);
  }

  render() {
    console.log(this.props.product);
    return (
    <div class="container pt-3">
      <div class="row">
        <div class="col-12 col-md-6 border">
          <img class="card-img-top" src={completeDisplay(this.props.product)} alt="Decathlon"/>
        </div>

        <div key={this.props.product.id}>
          <div class="col-12 col-md-6">
            <h3><Link to={`/products/${this.props.product.id}`}>{this.props.product.title}</Link></h3>
          </div>
            <h6 key={this.props.product.description}>
            <button id={this.props.product.id} title={this.props.product.title} onClick={this.handlerAddProductToBasket}>add to cart</button>
          </h6>
        </div>
      </div>
    </div>
    );
  }
}

const Connected = connect(null, basketHandler)(ProductVignette);
export default Connected;

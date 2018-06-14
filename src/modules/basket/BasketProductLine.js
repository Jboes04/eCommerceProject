import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { basketHandler } from "./../../store/basket/handlers";
import {formatAmount} from "./../../util.js";

class BasketProductLine extends Component {
  //{ productId: "productid1", label: "label product 1", price: 10.10, quantity: 2, url: "http..."},
  render() {
    return (
      <tr>
        <td className="d-none">{this.props.product.productId}</td>
        <td>
          <Link to={`/products/${this.props.product.productId}`}>
            <img style={{width:60,height:60}} src={this.props.product.url} alt={this.props.product.label} />
          </Link>
        </td>
        <td>
          <Link to={`/products/${this.props.product.productId}`}>
            <span className="ml-2">{this.props.product.label}</span>
          </Link>
        </td>
        <td>
          <span className="mr-2">{this.props.product.quantity}</span>
          <button className="mr-1" onClick={() => this.props.removeProductToBasket(this.props.product.productId)}>-</button>
          <button onClick={() => this.props.addProductToBasket(this.props.product.productId)}>+</button>
        </td>
        <td><button onClick={() => this.props.deleteProductToBasket(this.props.product.productId)}><span>🗑</span>️</button></td>
        <td>{formatAmount(this.props.product.price)}</td>
        <td>{formatAmount(this.props.product.quantity*this.props.product.price)}</td>
      </tr>
    );
  }
}

const Connected = connect(null, basketHandler)(BasketProductLine);
export default Connected;

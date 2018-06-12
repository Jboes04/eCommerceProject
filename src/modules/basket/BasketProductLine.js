import React, { Component } from 'react';
import { connect } from "react-redux";
//import { getTodoList } from "./../../store/todo/selectors";
import { basketHandler } from "./../../store/basket/handlers";

import {formatAmount} from "./../../util.js";



class BasketProductLine extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log("RENDER TableTodos", this.props.todoList);
    return (
      <tr>
        <td>{this.props.product.productId}</td>
        <td>{this.props.product.label}</td>
        <td>
          <span className="mr-2">{this.props.product.quantity}</span>
          <button className="mr-1" onClick={() => this.props.removeProductToBasket(this.props.product.productId)}>-</button>
          <button onClick={() => this.props.addProductToBasket(this.props.product.productId)}>+</button>
        </td>
        <td></td>
        <td>{formatAmount(this.props.product.price)}</td>
        <td>{formatAmount(this.props.product.quantity*this.props.product.price)}</td>
      </tr>
    );
  }
}

const Connected = connect(null, basketHandler)(BasketProductLine);
export default Connected;

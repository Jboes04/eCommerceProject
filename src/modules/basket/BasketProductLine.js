import React, { Component } from 'react';
//import { connect } from "react-redux";
//import { getTodoList } from "./../../store/todo/selectors";
//import { tableTodosHandler } from "./../../store/todo/handlers";



class BasketProductLine extends Component {
  constructor(props) {
    super(props);
    //{ productId: "productid1", label: "label product 1", price: 10.10, quantity: 2},
  }

  render() {
    //console.log("RENDER TableTodos", this.props.todoList);
    return (
      <tr>
        <td>{this.props.product.productId}</td>
        <td>{this.props.product.label}</td>
        <td>{this.props.product.quantity}</td>
        <td></td>
        <td>{this.props.product.price}</td>
        <td>{this.props.product.quantity*this.props.product.price}</td>
      </tr>
    );
  }
}

//const Connected = connect(getTodoList, tableTodosHandler)(TableTodos);
//export default Connected;
export default BasketProductLine;

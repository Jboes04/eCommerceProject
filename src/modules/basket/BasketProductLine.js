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
      <div className="container">
        {this.props.product.productId} {this.props.product.label} {this.props.product.price} {this.props.product.quantity}
      </div>
    );
  }
}

//const Connected = connect(getTodoList, tableTodosHandler)(TableTodos);
//export default Connected;
export default BasketProductLine;

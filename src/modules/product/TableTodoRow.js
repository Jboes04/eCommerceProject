import React, { Component } from 'react';
import { connect } from "react-redux";

import { checkRemoveHandler } from "./../../store/todo/handlers";

import './../../App.css';

class TableTodoRow extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getRemoveButton(todo) {
    if (todo.done) {
      return (<input type="button" name="removetodo" value="Remove" id={todo.id} onClick={this.handleInputChange}/>);
    }
  }

  handleInputChange(event) {
    //event.preventDefault();
    const target = event.target;
    const name = target.name;

    if (name === "checktodo") {
      this.props.checkTodo(target.id);
    }
    if (name === "removetodo") {
      this.props.removeTodo(target.id);
    }
  }

  render() {
    //console.log("RENDER TableTodoRow =", this.props);
    return (
     <tr>
        <td>{this.props.todo.id}</td>
        <td>{this.props.todo.label}</td>
        <td>
          <input
            name="checktodo"
            type="checkbox"
            id={this.props.todo.id}
            checked={this.props.todo.done}
            onChange={this.handleInputChange} />
        </td>
        <td>
          {this.getRemoveButton(this.props.todo)}
        </td>
      </tr>
    );
  }
}

const Connected = connect(null, checkRemoveHandler)(TableTodoRow);
export default Connected;

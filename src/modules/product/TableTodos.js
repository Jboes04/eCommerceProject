import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTodoList } from "./../../store/todo/selectors";
import { tableTodosHandler } from "./../../store/todo/handlers";
import _ from "underscore";

import TableTodoRow from './TableTodoRow';

class TableTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoLabel: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitNewTodo = this.handleSubmitNewTodo.bind(this);
    this.handleOrderColumn = this.handleOrderColumn.bind(this);
    this.handleSubmitResetAllTodo = this.handleSubmitResetAllTodo.bind(this);
	  this.handleSubmitLoadTodo = this.handleSubmitLoadTodo.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  capitalize(value) {
    const re = /(\b[a-z](?!\s))/g;
    return value.replace(re, function(x){return x.toUpperCase();});
  }

  handleChange(event) {
    this.setState({newTodoLabel: this.capitalize(event.target.value)});
  }

  handleSubmitNewTodo(event) {
    event.preventDefault();
    if (this.state.newTodoLabel) {
      this.props.addTodo(this.state.newTodoLabel);
    }
    this.setState({newTodoLabel: ""});
  }

  handleSubmitResetAllTodo(event) {
    event.preventDefault();
    this.props.resetTodoList();
  }

  handleSubmitLoadTodo(event) {
    event.preventDefault();
    this.props.loadTodoList();
  }

  handleOrderColumn(event) {
    this.props.orderTodoList(event.target.id);
  }

  handleChangeFilter(event) {
    this.props.filterTodoLabel(event.target.value.toLowerCase());
  }

  render() {
    //console.log("RENDER TableTodos", this.props.todoList);
    return (
      <div className="container">
        <form className="mt-4" onSubmit={this.handleSubmitResetAllTodo}>
          <input type="submit" value="Reset All Todos" />
        </form>
        <form onSubmit={this.handleSubmitLoadTodo}>
          <input type="submit" value="Load Brands Todos" />
        </form>

        <form className="mt-4" onSubmit={this.handleSubmitNewTodo}>
          <label>
            <span className="mr-4">New Todo :</span>
            <input type="text" value={this.state.newTodoLabel} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add" />
        </form>

        {this.props.fetching
          ? <div>
              <span className="mt-4 mb-4">LOADING IN PROGRESS</span>
            </div>
          :
            <div>
              <span className="mt-4 mr-5">Number of todos : {_.where(this.props.todoList, {hidden: false}).length}</span>
              <input type="text" value={this.props.filterLabel} onChange={this.handleChangeFilter} />

              <table className="table table-striped mt-2">
                <thead>
                  <tr>
                    <th scope="col" id="id" onClick={this.handleOrderColumn}>id</th>
                    <th scope="col" id="label" onClick={this.handleOrderColumn}>label</th>
                    <th scope="col" id="done" onClick={this.handleOrderColumn}>done</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.todoList.map(atodo => {
                    if (!atodo.hidden) {
                      return (<TableTodoRow
                        key={atodo.id}
                        todo={atodo}
                      />)
                    } else {
                      return null;
                    }
                  })}
                </tbody>
              </table>
            </div>
        }


        <textarea className="mt-4"
          style={{width:700, height:200}}
          value={JSON.stringify(this.props.todoList)}
          onChange={() => {return null}}/>
      </div>
    );
  }
}

const Connected = connect(getTodoList, tableTodosHandler)(TableTodos);
export default Connected;

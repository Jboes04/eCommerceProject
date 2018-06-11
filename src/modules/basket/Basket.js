import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTodoList } from "./../../store/todo/selectors";
import { tableTodosHandler } from "./../../store/todo/handlers";
import _ from "underscore";

import TableTodoRow from './TableTodoRow';

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basketDetail: "",
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({basketDetail: this.capitalize(event.target.value)});
  }


  render() {
    //console.log("RENDER TableTodos", this.props.todoList);
    return (
      <div className="container">


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

//const Connected = connect(getTodoList, tableTodosHandler)(TableTodos);
//export default Connected;
export default Basket;

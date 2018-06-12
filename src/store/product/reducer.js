import _ from 'underscore';
import basketReducer from "../basket/reducer";

import todosImport from './dataTodos';

const initialState = {
  todos: filterTodoList(sortTodoList(todosImport, "label")),
  sortedBy: "label",
  sortedDesc: false,
  nextTodoId: 1000,
  fetching: false,
  error: "No error",
  filterLabel: "",
};

function checkTodo(todoList, todoId) {
  //console.log("checkTodo debut", todoId);
  const todoModified = todoList.map(todo => {
    if (todo.id === todoId) {
      return {
        ...todo,
        done: !todo.done
      }
    }
    return todo;
  });
  return todoModified;
}

function deleteTodo(todoList, todoId) {
  //console.log("deleteTodo debut", todoId);
  const todoModified = _.reject(todoList, function(todo){ return todo.id === todoId; });
  return todoModified;
}

function sortTodoList(todoList, sortedBy, sortedDesc = false) {
  const todosSorted = _.sortBy(todoList, sortedBy);
  return sortedDesc ? todosSorted.reverse() : todosSorted;
}

function filterTodoList(todoList, filterLabel = "") {
  return todoList.map(todo => {
    if (filterLabel === "" || todo.label.toLowerCase().includes(filterLabel)) {
      return {
        ...todo,
        hidden: false,
      }
    } else {
      return {
        ...todo,
        hidden: true,
      }
    }
  })
}


function productReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        todos: checkTodo(state.todos, action.todoId),
      }

    default:
      return state
  }
}


export default productReducer;

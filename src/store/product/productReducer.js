import _ from 'underscore';
import todosImport from './dataTodos';
import {tableTodosHandler, checkRemoveHandler} from "./handlers"
const fetch = require("node-fetch");

function productReducer(state, action) {
  
//   switch (action.type) {
//     case "CHECK_TODO":
//       return {
//         ...state,
//         todos: checkTodo(state.todos, action.todoId),
//       }
//
//     case "REMOVE_TODO":
//       return {
//         ...state,
//         todos: deleteTodo(state.todos, action.todoId),
//       }
//
//     case "ADD_TODO":
//       const currentTodoId = state.nextTodoId;
//
//       const newTodo = {};
//       newTodo.id = currentTodoId.toString();
//       newTodo.label = action.todoLabel;
//       newTodo.done = false;
//       //newTodo.hidden = false;
//
//       return {
//         ...state,
//         nextTodoId: currentTodoId + 1,
//         todos: [newTodo, ...state.todos],
//       }
//
//     case "ORDER_TODO_LIST":
//       const newSortedBy = action.column;
//       const newSortedDesc = (newSortedBy === state.sortedBy) && !state.sortedDesc;
//       const newTodoListOrder = sortTodoList(state.todos, newSortedBy, newSortedDesc);
//       return {
//         ...state,
//         sortedBy: newSortedBy,
//         sortedDesc: newSortedDesc,
//         todos: newTodoListOrder,
//       }
//
//     case "RESET_TODO_LIST":
//     const newTodoListReset = [];
//     return {
//       ...state,
//       todos: newTodoListReset,
//       fetching: false,
//     }
//
// 	  case "LOAD_TODO_LIST":
//       const newTodoListLoad = filterTodoList(action.todoList);
//       return {
//         ...state,
//         todos: newTodoListLoad,
//         fetching: false,
//         filterLabel: "",
//       }
//
//     case "FILTER_TODO_LABEL":
//       const newTodoListFilter = filterTodoList(state.todos, action.label);
//       return {
//         ...state,
//         todos: newTodoListFilter,
//         filterLabel: action.label,
//       }
//
//     case "FETCHING":
//     return {
//       ...state,
//       fetching: true,
//     }
//
//     case "ERROR":
//     return {
//       ...state,
//       fetching: false,
//       error: action.error,
//     }
//
//
//     default:
//       return state
//   }
}


export default productReducer;

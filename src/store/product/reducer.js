import _ from 'underscore';

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


function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "CHECK_TODO":
      return {
        ...state,
        todos: checkTodo(state.todos, action.todoId),
      }

    case "REMOVE_TODO":
      return {
        ...state,
        todos: deleteTodo(state.todos, action.todoId),
      }

    case "ADD_TODO":
      const currentTodoId = state.nextTodoId;

      const newTodo = {};
      newTodo.id = currentTodoId.toString();
      newTodo.label = action.todoLabel;
      newTodo.done = false;
      //newTodo.hidden = false;

      return {
        ...state,
        nextTodoId: currentTodoId + 1,
        todos: [newTodo, ...state.todos],
      }

    case "ORDER_TODO_LIST":
      const newSortedBy = action.column;
      const newSortedDesc = (newSortedBy === state.sortedBy) && !state.sortedDesc;
      const newTodoListOrder = sortTodoList(state.todos, newSortedBy, newSortedDesc);
      return {
        ...state,
        sortedBy: newSortedBy,
        sortedDesc: newSortedDesc,
        todos: newTodoListOrder,
      }

    case "RESET_TODO_LIST":
    const newTodoListReset = [];
    return {
      ...state,
      todos: newTodoListReset,
      fetching: false,
    }

	  case "LOAD_TODO_LIST":
      const newTodoListLoad = filterTodoList(action.todoList);
      return {
        ...state,
        todos: newTodoListLoad,
        fetching: false,
        filterLabel: "",
      }

    case "FILTER_TODO_LABEL":
      const newTodoListFilter = filterTodoList(state.todos, action.label);
      return {
        ...state,
        todos: newTodoListFilter,
        filterLabel: action.label,
      }

    case "FETCHING":
    return {
      ...state,
      fetching: true,
    }

    case "ERROR":
    return {
      ...state,
      fetching: false,
      error: action.error,
    }


    default:
      return state
  }
}


export default productReducer;

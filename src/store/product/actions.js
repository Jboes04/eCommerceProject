export function add(_todoLabel) {
  return {
    type: "ADD_TODO",
    todoLabel: _todoLabel,
  }
}

export function check(_todoId) {
  return {
    type: "CHECK_TODO",
    todoId: _todoId,
  }
}

export function remove(_todoId) {
  return {
    type: "REMOVE_TODO",
    todoId: _todoId,
  }
}

export function order(_column) {
  return {
    type: "ORDER_TODO_LIST",
    column: _column,
  }
}

export function filterTodoLabel(_label) {
  return {
    type: "FILTER_TODO_LABEL",
    label: _label,
  }
}

export function fetching() {
  return {
    type: "FETCHING"
  }
}

export function reset() {
  return {
    type: "RESET_TODO_LIST",
  }
}

export function load(_todoList) {
  return {
    type: "LOAD_TODO_LIST",
	  todoList: _todoList,
  }
}

export function mountError(_error) {
  return {
    type: "ERROR",
  	error: _error,
  }
}

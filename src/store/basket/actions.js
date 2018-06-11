export function add(_productId) {
  return {
    type: "ADD_PRODUCT_TO_BASKET",
    productId: _productId,
  }
}

export function remove(_productId) {
  return {
    type: "REMOVE_PRODUCT_TO_BASKET",
    productId: _productId,
  }
}

export function fetching() {
  return {
    type: "FETCHING"
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

import _ from 'underscore';

const initialState = {
  basketList: [
      { productId: "productid1", label: "label state REDUX product 1", price: 10.10, quantity: 2},
      { productId: "productid2", label: "label product 2 beau", price: 9.20, quantity: 1}],
  fetching: false,
  error: "No error",
};


function deleteProduct(todoList, todoId) {
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


function basketReducer(state = initialState, action) {
  switch (action.type) {

    case "REMOVE_PRODUCT_TO_BASKET":
      return {
        ...state,
        todos: deleteProduct(state.todos, action.todoId),
      }

    case "ADD_PRODUCT_TO_BASKET":
    //{ productId: "productid1", label: "label product 1", price: 10.10, quantity: 2},

      const newProduct = {};
      newProduct.productId = action.productId;
      newProduct.label = action.productTitle;
      newProduct.price = 1;
      newProduct.quantity = 1;

      return {
        ...state,
        basketList: [...state.basketList, newProduct],
      }

    case "LOAD_TODO_LIST":
      const newTodoListLoad = filterTodoList(action.todoList);
      return {
        ...state,
        todos: newTodoListLoad,
        fetching: false,
        filterLabel: "",
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


export default basketReducer;

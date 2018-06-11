import { add, check, remove, order, mountError, filterTodoLabel } from "./actions";
import { resetAsync, loadAsync } from "./asyncActions";

export function tableTodosHandler(dispatch) {
  return {
    addTodo: (todoLabel)  => dispatch(add(todoLabel)),
    orderTodoList: (column)  => dispatch(order(column)),
    resetTodoList: () => dispatch(resetAsync()),
	  loadTodoList: () => dispatch(loadAsync()),
    mountError: (error) => dispatch(mountError()),
    filterTodoLabel: (label) => dispatch(filterTodoLabel(label)),
  }
}

export function checkRemoveHandler(dispatch) {
  return {
    removeTodo: (todoId)  => dispatch(remove(todoId)),
    checkTodo: (todoId)  => dispatch(check(todoId)),
  }
}

export function getTodoList(reduxState) {
  return {
    todoList: reduxState.todos,
  }
}

import { add, remove, mountError } from "./actions";
//import { loadAsync } from "./asyncActions";

export function basketHandler(dispatch) {
  return {
    addProductToBasket: (productId)  => dispatch(add(productId)),
    removeProductToBasket: (productId)  => dispatch(remove(productId)),
	//  loadTodoList: () => dispatch(loadAsync()),
    mountError: (error) => dispatch(mountError()),
  }
}

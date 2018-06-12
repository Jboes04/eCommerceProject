import { add, remove, mountError } from "./actions";
//import { loadAsync } from "./asyncActions";

export function basketHandler(dispatch) {
  return {
    addProductToBasket: (productId, productTitle)  => dispatch(add(productId, productTitle)),
    removeProductToBasket: (productId)  => dispatch(remove(productId)),
	//  loadTodoList: () => dispatch(loadAsync()),
    mountError: (error) => dispatch(mountError()),
  }
}

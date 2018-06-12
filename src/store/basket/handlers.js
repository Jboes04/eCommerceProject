import { add, remove, erase, mountError } from "./actions";
import { completeBasketAsync } from "./asyncActions";

export function basketHandler(dispatch) {
  return {
    addProductToBasket: (productId)  => dispatch(add(productId)),
    removeProductToBasket: (productId)  => dispatch(remove(productId)),
    deleteProductToBasket: (productId) => dispatch(erase(productId)),
	  completeBasket: (basketList) => dispatch(completeBasketAsync(basketList)),
    mountError: (error) => dispatch(mountError()),
  }
}

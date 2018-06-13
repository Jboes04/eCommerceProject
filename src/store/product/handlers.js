import { add } from "./../basket/actions";

export function checkRemoveHandler(dispatch) {
  return {
    addProductToBasket: (productId, productTitle)  => dispatch(add(productId, productTitle)),
  }
}

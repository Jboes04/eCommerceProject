import {fetching, display, mountError } from "./actions";

import {getProductDetail} from './../../modules/product/productUtility';
import {containAllInformations} from './../../modules/basket/basketUtility';

export function completeBasketAsync(basketList) {
  return dispatch => {
    dispatch(fetching());

    const completedBasketListPromise = basketList.map(productFromBasket => {
      //console.log("productFromBasket=", productFromBasket);
      if (!containAllInformations([productFromBasket])) {
        return getProductDetail(productFromBasket.productId)
          .then(productDetail => {
            //console.log("productDetail=", productDetail);
            productFromBasket.label = productDetail.title;
            productFromBasket.price = productDetail.min_price;
            return productFromBasket;
          });
      } else {
        return productFromBasket;
      }
    });

    Promise.all(completedBasketListPromise)
    .then(completedBasketList =>
      dispatch(display(completedBasketList)));
 }
}
